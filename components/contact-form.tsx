"use client"

import { useState } from "react"
import { Send, Loader2, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        setSuccess(false)

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message")
            }

            setSuccess(true)
            setFormData({ name: "", email: "", subject: "", message: "" })
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Something went wrong. Please try again."
            setError(message)
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
                <p className="font-mono text-xs text-muted-foreground">CONTACT</p>
                <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight md:text-6xl">
                    AI Data Product 프로젝트를 함께 이야기해 주세요.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                    LLM 데이터 파이프라인, AI Agent 운영, PromptOps, 근거 기반 AI 서비스처럼 함께 풀어볼 문제가 있다면 배경과 목표를 남겨주세요.
                </p>
                <div className="mt-8 border-t pt-5 text-sm text-muted-foreground">
                    <p>Direct email</p>
                    <a href="mailto:woogi.dev@gmail.com" className="mt-1 inline-block font-medium text-foreground hover:underline">
                        woogi.dev@gmail.com
                    </a>
                </div>
            </div>

            <div className="border bg-card p-5 md:p-6">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold tracking-normal">Send a message</h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        필요한 배경과 목표를 확인한 뒤 회신하겠습니다.
                    </p>
                </div>
                    {success ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
                            <h3 className="mb-2 text-2xl font-bold">Message Sent!</h3>
                            <p className="mb-6 text-muted-foreground">
                                메시지를 받았습니다. 확인 후 회신하겠습니다.
                            </p>
                            <Button onClick={() => setSuccess(false)} variant="outline">
                                다른 메시지 보내기
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="name">
                                        Name <span className="text-destructive">*</span>
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">
                                        Email <span className="text-destructive">*</span>
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                                <p className="text-xs text-muted-foreground">예: AI Agent, 데이터 파이프라인, PromptOps</p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">
                                    Message <span className="text-destructive">*</span>
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="min-h-[200px]"
                                    required
                                />
                                <p className="text-xs text-muted-foreground">해결하려는 문제와 제품·운영 맥락을 알려주세요.</p>
                            </div>

                            {error && (
                                <div className="rounded-md bg-destructive/10 p-4 text-sm text-destructive">
                                    {error}
                                </div>
                            )}

                            <Button type="submit" size="lg" className="w-full" disabled={loading}>
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="mr-2 h-4 w-4" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    )}
            </div>
        </div>
    )
}
