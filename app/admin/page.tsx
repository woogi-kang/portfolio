
"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Loader2, Plus, LogOut, Pencil, Trash2, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { ImageUpload } from "@/components/image-upload"

type ProjectItem = {
    id: string
    title: string
    slug: string
    description?: string | null
    content?: string | null
    tags?: string[] | null
    demo_url?: string | null
    repo_url?: string | null
    cover_image?: string | null
    images?: string[] | null
}

type ResumeItem = {
    id: string
    role: string
    company: string
    start_date: string
    end_date?: string | null
    description?: string | null
    type: string
    skills?: string[] | null
}

type PostItem = {
    id: string
    title: string
    slug: string
    excerpt?: string | null
    content?: string | null
    published: boolean
}

export default function AdminPage() {
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const supabase = useMemo(() => createClient(), [])

    // Data Lists
    const [projects, setProjects] = useState<ProjectItem[]>([])
    const [resumeItems, setResumeItems] = useState<ResumeItem[]>([])
    const [posts, setPosts] = useState<PostItem[]>([])

    // Editing State
    const [editingId, setEditingId] = useState<string | null>(null)

    // Project Form State
    const [projectTitle, setProjectTitle] = useState("")
    const [projectSlug, setProjectSlug] = useState("")
    const [projectDesc, setProjectDesc] = useState("")
    const [projectContent, setProjectContent] = useState("")
    const [projectTags, setProjectTags] = useState("")
    const [projectDemo, setProjectDemo] = useState("")
    const [projectRepo, setProjectRepo] = useState("")
    const [projectCoverImage, setProjectCoverImage] = useState("")
    const [projectImage, setProjectImage] = useState("")

    // Resume Form State
    const [resumeRole, setResumeRole] = useState("")
    const [resumeCompany, setResumeCompany] = useState("")
    const [resumeStart, setResumeStart] = useState("")
    const [resumeEnd, setResumeEnd] = useState("")
    const [resumeDesc, setResumeDesc] = useState("")
    const [resumeType, setResumeType] = useState("work")
    const [resumeSkills, setResumeSkills] = useState("")

    // Post Form State
    const [postTitle, setPostTitle] = useState("")
    const [postSlug, setPostSlug] = useState("")
    const [postExcerpt, setPostExcerpt] = useState("")
    const [postContent, setPostContent] = useState("")
    const [postPublished, setPostPublished] = useState(false)

    const fetchData = useCallback(async () => {
        const { data: projectsData } = await supabase.from("projects").select("*").order("created_at", { ascending: false })
        const { data: resumeData } = await supabase.from("resume").select("*").order("start_date", { ascending: false })
        const { data: postsData } = await supabase.from("posts").select("*").order("created_at", { ascending: false })

        if (projectsData) setProjects(projectsData)
        if (resumeData) setResumeItems(resumeData)
        if (postsData) setPosts(postsData)
    }, [supabase])

    useEffect(() => {
        const checkUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser()
            if (!user) {
                router.push("/login")
            } else {
                await fetchData()
                setLoading(false)
            }
        }
        checkUser()
    }, [fetchData, router, supabase])

    const resetForms = () => {
        setEditingId(null)
        // Project
        setProjectTitle("")
        setProjectSlug("")
        setProjectDesc("")
        setProjectContent("")
        setProjectTags("")
        setProjectDemo("")
        setProjectRepo("")
        setProjectCoverImage("")
        setProjectImage("")
        // Resume
        setResumeRole("")
        setResumeCompany("")
        setResumeStart("")
        setResumeEnd("")
        setResumeDesc("")
        setResumeSkills("")
        // Post
        setPostTitle("")
        setPostSlug("")
        setPostExcerpt("")
        setPostContent("")
        setPostPublished(false)
    }

    // --- Project Handlers ---
    const handleEditProject = (project: ProjectItem) => {
        setEditingId(project.id)
        setProjectTitle(project.title)
        setProjectSlug(project.slug)
        setProjectDesc(project.description || "")
        setProjectContent(project.content || "")
        setProjectTags(project.tags ? project.tags.join(", ") : "")
        setProjectDemo(project.demo_url || "")
        setProjectRepo(project.repo_url || "")
        setProjectCoverImage(project.cover_image || "")
        setProjectImage(project.images && project.images.length > 0 ? project.images[0] : "")
    }

    const handleDeleteProject = async (id: string) => {
        if (!confirm("Are you sure you want to delete this project?")) return
        const { error } = await supabase.from("projects").delete().eq("id", id)
        if (error) alert(error.message)
        else {
            fetch("/api/notify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: `🗑️ **Project Deleted**\nID: ${id}` }),
            }).catch(console.error)
            fetchData()
        }
    }

    const handleSubmitProject = async (e: React.FormEvent) => {
        e.preventDefault()
        const projectData = {
            title: projectTitle,
            slug: projectSlug,
            description: projectDesc,
            content: projectContent,
            tags: projectTags.split(",").map((t) => t.trim()).filter(Boolean),
            demo_url: projectDemo,
            repo_url: projectRepo,
            cover_image: projectCoverImage,
            images: projectImage ? [projectImage] : [],
        }

        let error
        if (editingId) {
            const { error: updateError } = await supabase.from("projects").update(projectData).eq("id", editingId)
            error = updateError
        } else {
            const { error: insertError } = await supabase.from("projects").insert(projectData)
            error = insertError
        }

        if (error) alert(error.message)
        else {
            const action = editingId ? "Updated" : "Created"
            fetch("/api/notify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: `🚀 **Project ${action}**\nTitle: ${projectTitle}` }),
            }).catch(console.error)
            alert(editingId ? "Project updated!" : "Project created!")
            resetForms()
            fetchData()
        }
    }

    // --- Resume Handlers ---
    const handleEditResume = (item: ResumeItem) => {
        setEditingId(item.id)
        setResumeRole(item.role)
        setResumeCompany(item.company)
        setResumeStart(item.start_date)
        setResumeEnd(item.end_date || "")
        setResumeDesc(item.description || "")
        setResumeType(item.type)
        setResumeSkills(item.skills ? item.skills.join(", ") : "")
    }

    const handleDeleteResume = async (id: string) => {
        if (!confirm("Are you sure you want to delete this resume item?")) return
        const { error } = await supabase.from("resume").delete().eq("id", id)
        if (error) alert(error.message)
        else {
            fetch("/api/notify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: `🗑️ **Resume Item Deleted**\nID: ${id}` }),
            }).catch(console.error)
            fetchData()
        }
    }

    const handleSubmitResume = async (e: React.FormEvent) => {
        e.preventDefault()
        const resumeData = {
            role: resumeRole,
            company: resumeCompany,
            start_date: resumeStart,
            end_date: resumeEnd || null,
            description: resumeDesc,
            type: resumeType,
            skills: resumeSkills.split(",").map((t) => t.trim()).filter(Boolean),
        }

        let error
        if (editingId) {
            const { error: updateError } = await supabase.from("resume").update(resumeData).eq("id", editingId)
            error = updateError
        } else {
            const { error: insertError } = await supabase.from("resume").insert(resumeData)
            error = insertError
        }

        if (error) alert(error.message)
        else {
            const action = editingId ? "Updated" : "Created"
            fetch("/api/notify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: `💼 **Resume Item ${action}**\nRole: ${resumeRole}\nCompany: ${resumeCompany}` }),
            }).catch(console.error)
            alert(editingId ? "Resume item updated!" : "Resume item created!")
            resetForms()
            fetchData()
        }
    }

    // --- Post Handlers ---
    const handleEditPost = (post: PostItem) => {
        setEditingId(post.id)
        setPostTitle(post.title)
        setPostSlug(post.slug)
        setPostExcerpt(post.excerpt || "")
        setPostContent(post.content || "")
        setPostPublished(post.published)
    }

    const handleDeletePost = async (id: string) => {
        if (!confirm("Are you sure you want to delete this post?")) return
        const { error } = await supabase.from("posts").delete().eq("id", id)
        if (error) alert(error.message)
        else {
            fetch("/api/notify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: `🗑️ **Post Deleted**\nID: ${id}` }),
            }).catch(console.error)
            fetchData()
        }
    }

    const handleSubmitPost = async (e: React.FormEvent) => {
        e.preventDefault()
        const postData = {
            title: postTitle,
            slug: postSlug,
            excerpt: postExcerpt,
            content: postContent,
            published: postPublished,
        }

        let error
        if (editingId) {
            const { error: updateError } = await supabase.from("posts").update(postData).eq("id", editingId)
            error = updateError
        } else {
            const { error: insertError } = await supabase.from("posts").insert(postData)
            error = insertError
        }

        if (error) alert(error.message)
        else {
            const action = editingId ? "Updated" : "Created"
            fetch("/api/notify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: `📝 **Post ${action}**\nTitle: ${postTitle}` }),
            }).catch(console.error)
            alert(editingId ? "Post updated!" : "Post created!")
            resetForms()
            fetchData()
        }
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push("/login")
    }

    if (loading) {
        return (
            <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="mb-8 flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">관리자 대시보드</h1>
                <Button variant="outline" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    로그아웃
                </Button>
            </div>

            <Tabs defaultValue="projects" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
                    <TabsTrigger value="projects">프로젝트</TabsTrigger>
                    <TabsTrigger value="resume">이력서</TabsTrigger>
                    <TabsTrigger value="posts">포스트</TabsTrigger>
                </TabsList>

                {/* --- PROJECTS TAB --- */}
                <TabsContent value="projects" className="space-y-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>{editingId ? "프로젝트 수정" : "새 프로젝트 추가"}</CardTitle>
                                <CardDescription>
                                    {editingId ? "기존 프로젝트 정보를 수정합니다." : "포트폴리오에 표시할 새 프로젝트를 생성합니다."}
                                </CardDescription>
                            </div>
                            {editingId && (
                                <Button variant="ghost" size="sm" onClick={resetForms}>
                                    <X className="mr-2 h-4 w-4" /> 수정 취소
                                </Button>
                            )}
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmitProject} className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label>제목</Label>
                                        <Input
                                            value={projectTitle}
                                            onChange={(e) => setProjectTitle(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>슬러그 (URL)</Label>
                                        <Input
                                            value={projectSlug}
                                            onChange={(e) => setProjectSlug(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>설명</Label>
                                    <Textarea
                                        value={projectDesc}
                                        onChange={(e) => setProjectDesc(e.target.value)}
                                        className="min-h-[100px]"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label>상세 내용 (마크다운)</Label>
                                    <Textarea
                                        value={projectContent}
                                        onChange={(e) => setProjectContent(e.target.value)}
                                        className="min-h-[200px] font-mono text-sm"
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        마크다운 형식을 지원합니다. 프로젝트 상세 페이지에 표시됩니다.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <Label>커버 이미지 (썸네일)</Label>
                                    <div className="rounded-lg border border-dashed p-4">
                                        <ImageUpload
                                            value={projectCoverImage}
                                            onChange={(url) => setProjectCoverImage(url)}
                                        />
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        포트폴리오 목록에서 썸네일로 사용됩니다. <strong>권장 비율: 16:9 (예: 1920x1080, 1280x720)</strong>
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <Label>프로젝트 이미지</Label>
                                    <div className="rounded-lg border border-dashed p-4">
                                        <ImageUpload
                                            value={projectImage}
                                            onChange={(url) => setProjectImage(url)}
                                        />
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        상세 페이지에 표시될 추가 이미지입니다.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <Label>태그 (쉼표로 구분)</Label>
                                    <Input
                                        value={projectTags}
                                        onChange={(e) => setProjectTags(e.target.value)}
                                    />
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label>데모 URL</Label>
                                        <Input
                                            value={projectDemo}
                                            onChange={(e) => setProjectDemo(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>저장소 URL</Label>
                                        <Input
                                            value={projectRepo}
                                            onChange={(e) => setProjectRepo(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <Button type="submit" className="w-full md:w-auto">
                                    {editingId ? <Pencil className="mr-2 h-4 w-4" /> : <Plus className="mr-2 h-4 w-4" />}
                                    {editingId ? "프로젝트 수정" : "프로젝트 생성"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <Card key={project.id} className="overflow-hidden">
                                {project.images && project.images[0] && (
                                    <div className="aspect-video w-full bg-muted">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={project.images[0]} alt={project.title} className="h-full w-full object-cover" />
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle className="line-clamp-1 text-lg">{project.title}</CardTitle>
                                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex justify-end gap-2">
                                    <Button variant="outline" size="sm" onClick={() => handleEditProject(project)}>
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button variant="destructive" size="sm" onClick={() => handleDeleteProject(project.id)}>
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                {/* --- RESUME TAB --- */}
                <TabsContent value="resume" className="space-y-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>{editingId ? "이력 항목 수정" : "이력 항목 추가"}</CardTitle>
                                <CardDescription>
                                    {editingId ? "이력 정보를 수정합니다." : "경력 또는 학력을 타임라인에 추가합니다."}
                                </CardDescription>
                            </div>
                            {editingId && (
                                <Button variant="ghost" size="sm" onClick={resetForms}>
                                    <X className="mr-2 h-4 w-4" /> 수정 취소
                                </Button>
                            )}
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmitResume} className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label>직책 / 학위</Label>
                                        <Input
                                            value={resumeRole}
                                            onChange={(e) => setResumeRole(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>회사 / 학교</Label>
                                        <Input
                                            value={resumeCompany}
                                            onChange={(e) => setResumeCompany(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label>시작일</Label>
                                        <Input
                                            type="date"
                                            value={resumeStart}
                                            onChange={(e) => setResumeStart(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>종료일</Label>
                                        <Input
                                            type="date"
                                            value={resumeEnd}
                                            onChange={(e) => setResumeEnd(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>유형</Label>
                                    <select
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        value={resumeType}
                                        onChange={(e) => setResumeType(e.target.value)}
                                    >
                                        <option value="work">경력</option>
                                        <option value="education">학력</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <Label>설명</Label>
                                    <Textarea
                                        value={resumeDesc}
                                        onChange={(e) => setResumeDesc(e.target.value)}
                                        className="min-h-[100px]"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label>스킬 (쉼표로 구분)</Label>
                                    <Input
                                        value={resumeSkills}
                                        onChange={(e) => setResumeSkills(e.target.value)}
                                    />
                                </div>

                                <Button type="submit" className="w-full md:w-auto">
                                    {editingId ? <Pencil className="mr-2 h-4 w-4" /> : <Plus className="mr-2 h-4 w-4" />}
                                    {editingId ? "항목 수정" : "항목 추가"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="space-y-4">
                        {resumeItems.map((item) => (
                            <Card key={item.id}>
                                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                                    <div>
                                        <CardTitle className="text-lg font-bold">{item.role}</CardTitle>
                                        <CardDescription>{item.company}</CardDescription>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="icon" onClick={() => handleEditResume(item)}>
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button variant="destructive" size="icon" onClick={() => handleDeleteResume(item.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-sm text-muted-foreground">
                                        {item.start_date} - {item.end_date || "Present"}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                {/* --- POSTS TAB --- */}
                <TabsContent value="posts" className="space-y-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>{editingId ? "포스트 수정" : "새 포스트 작성"}</CardTitle>
                                <CardDescription>
                                    {editingId ? "포스트 내용을 수정합니다." : "생각과 지식을 공유하세요."}
                                </CardDescription>
                            </div>
                            {editingId && (
                                <Button variant="ghost" size="sm" onClick={resetForms}>
                                    <X className="mr-2 h-4 w-4" /> 수정 취소
                                </Button>
                            )}
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmitPost} className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label>제목</Label>
                                        <Input
                                            value={postTitle}
                                            onChange={(e) => setPostTitle(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>슬러그 (URL)</Label>
                                        <Input
                                            value={postSlug}
                                            onChange={(e) => setPostSlug(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>요약</Label>
                                    <Textarea
                                        value={postExcerpt}
                                        onChange={(e) => setPostExcerpt(e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label>내용 (마크다운)</Label>
                                    <Textarea
                                        className="min-h-[300px] font-mono"
                                        value={postContent}
                                        onChange={(e) => setPostContent(e.target.value)}
                                    />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="published"
                                        checked={postPublished}
                                        onCheckedChange={(checked) =>
                                            setPostPublished(checked as boolean)
                                        }
                                    />
                                    <Label htmlFor="published">즉시 게시</Label>
                                </div>

                                <Button type="submit" className="w-full md:w-auto">
                                    {editingId ? <Pencil className="mr-2 h-4 w-4" /> : <Plus className="mr-2 h-4 w-4" />}
                                    {editingId ? "포스트 수정" : "포스트 생성"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="grid gap-4 md:grid-cols-2">
                        {posts.map((post) => (
                            <Card key={post.id}>
                                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                                    <div className="space-y-1">
                                        <CardTitle className="line-clamp-1 text-lg">{post.title}</CardTitle>
                                        <CardDescription className="line-clamp-1">{post.slug}</CardDescription>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="icon" onClick={() => handleEditPost(post)}>
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button variant="destructive" size="icon" onClick={() => handleDeletePost(post.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-2">
                                        <span className={`inline-flex h-2 w-2 rounded-full ${post.published ? 'bg-green-500' : 'bg-yellow-500'}`} />
                                        <span className="text-sm text-muted-foreground">
                                            {post.published ? "Published" : "Draft"}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
