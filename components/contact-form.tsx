"use client"

import { useState } from "react"
import { Mail, Send, Loader2, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
        <div>
            {/* Header */}
            <div className="mb-12 text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                    <Mail className="h-6 w-6 text-primary" />
                </div>
                <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
                    <span className="block">AI Automation</span>
                    <span className="block">프로젝트를 함께</span>
                    <span className="block">이야기해요</span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                    AI Agent 운영 체계, 데이터 파이프라인, PromptOps, 자동화 파이프라인, 제품 운영 체계에 대해 함께 논의할 수 있습니다.
                </p>
            </div>

            {/* Contact Form */}
            <Card className="min-w-0 overflow-hidden">
                <CardHeader>
                    <CardTitle>Send me a message</CardTitle>
                    <CardDescription>
                        필요한 배경과 목표를 남겨주시면 확인 후 회신하겠습니다.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {success ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
                            <h3 className="mb-2 text-2xl font-bold">Message Sent!</h3>
                            <p className="mb-6 text-muted-foreground">
                                Thank you for reaching out. I will get back to you soon.
                            </p>
                            <Button onClick={() => setSuccess(false)} variant="outline">
                                Send Another Message
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
                                        placeholder="Your name"
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
                                        placeholder="your.email@example.com"
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
                                    placeholder="AI agent, data pipeline, PromptOps..."
                                />
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
                                    placeholder="해결하려는 문제와 제품/운영 맥락을 알려주세요."
                                    className="min-h-[200px]"
                                    required
                                />
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
                </CardContent>
            </Card>

            {/* Additional Contact Info */}
            <div className="mt-12 text-center">
                <p className="break-words text-sm text-muted-foreground">
                    You can also reach me directly at{" "}
                    <a
                        href="mailto:woogi.dev@gmail.com"
                        className="font-medium text-primary hover:underline"
                    >
                        woogi.dev@gmail.com
                    </a>
                </p>
            </div>
        </div>
    )
}
