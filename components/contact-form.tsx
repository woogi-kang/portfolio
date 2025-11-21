"use client"

import { useState } from "react"
import { motion } from "framer-motion"
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
        } catch (err: any) {
            setError(err.message || "Something went wrong. Please try again.")
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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Header */}
            <div className="mb-12 text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                    <Mail className="h-6 w-6 text-primary" />
                </div>
                <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                    Get In Touch
                </h1>
                <p className="text-xl text-muted-foreground">
                    Have a question or want to work together? I'd love to hear from you.
                </p>
            </div>

            {/* Contact Form */}
            <Card>
                <CardHeader>
                    <CardTitle>Send me a message</CardTitle>
                    <CardDescription>
                        Fill out the form below and I'll get back to you as soon as possible.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {success ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center py-12 text-center"
                        >
                            <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
                            <h3 className="mb-2 text-2xl font-bold">Message Sent!</h3>
                            <p className="mb-6 text-muted-foreground">
                                Thank you for reaching out. I'll get back to you soon.
                            </p>
                            <Button onClick={() => setSuccess(false)} variant="outline">
                                Send Another Message
                            </Button>
                        </motion.div>
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
                                    placeholder="What's this about?"
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
                                    placeholder="Tell me about your project or inquiry..."
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
                <p className="text-sm text-muted-foreground">
                    You can also reach me directly at{" "}
                    <a
                        href="mailto:woogi.dev@gmail.com"
                        className="font-medium text-primary hover:underline"
                    >
                        woogi.dev@gmail.com
                    </a>
                </p>
            </div>
        </motion.div>
    )
}
