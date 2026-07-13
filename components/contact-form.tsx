"use client"

import { useEffect, useRef, useState } from "react"
import { Check, LoaderCircle, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

type FieldErrors = Partial<Record<keyof FormData, string>>

const initialForm: FormData = { name: "", email: "", subject: "", message: "" }

function validate(formData: FormData): FieldErrors {
  const errors: FieldErrors = {}
  if (!formData.name.trim()) errors.name = "이름을 입력해 주세요."
  if (!formData.email.trim()) {
    errors.email = "이메일을 입력해 주세요."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "확인 가능한 이메일 형식으로 입력해 주세요."
  }
  if (!formData.message.trim()) errors.message = "문의 배경과 확인하고 싶은 내용을 입력해 주세요."
  return errors
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialForm)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle")
  const [submitError, setSubmitError] = useState("")
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const successRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (status === "success") successRef.current?.focus()
  }, [status])

  const focusFirstError = (errors: FieldErrors) => {
    if (errors.name) nameRef.current?.focus()
    else if (errors.email) emailRef.current?.focus()
    else if (errors.message) messageRef.current?.focus()
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const errors = validate(formData)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setStatus("idle")
      requestAnimationFrame(() => focusFirstError(errors))
      return
    }

    setFieldErrors({})
    setSubmitError("")
    setStatus("loading")

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      ...(formData.subject.trim() ? { subject: formData.subject.trim() } : {}),
      message: formData.message.trim(),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!response.ok) {
        throw new Error(
          "메시지를 전송하지 못했습니다. 잠시 후 다시 시도하거나 이메일로 연락해 주세요."
        )
      }

      setFormData(initialForm)
      setStatus("success")
    } catch (error: unknown) {
      setSubmitError(
        error instanceof TypeError
          ? "메시지를 전송하지 못했습니다. 잠시 후 다시 시도하거나 이메일로 연락해 주세요."
          : error instanceof Error
            ? error.message
            : "잠시 후 다시 시도해 주세요."
      )
      setStatus("error")
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const key = event.target.name as keyof FormData
    setFormData((current) => ({ ...current, [key]: event.target.value }))
    if (fieldErrors[key]) {
      setFieldErrors((current) => ({ ...current, [key]: undefined }))
    }
    if (status === "error") setStatus("idle")
  }

  if (status === "success") {
    return (
      <section className="structural-panel flex min-h-96 flex-col justify-between p-6 md:p-8" aria-live="polite" aria-labelledby="contact-success-title">
        <div>
          <span className="flex size-12 items-center justify-center rounded-full border text-verified">
            <Check className="size-5" aria-hidden="true" />
          </span>
          <p className="eyebrow mt-8 text-verified">전송 완료</p>
          <h2 ref={successRef} id="contact-success-title" tabIndex={-1} className="mt-3 text-3xl">메시지를 받았습니다.</h2>
          <p className="mt-4 max-w-lg text-ink-muted">
            남겨주신 내용을 확인한 뒤 이메일로 회신하겠습니다.
          </p>
        </div>
        <Button type="button" variant="outline" className="mt-8 min-h-11 w-fit" onClick={() => setStatus("idle")}>
          다른 메시지 보내기
        </Button>
      </section>
    )
  }

  return (
    <form className="structural-panel p-5 md:p-7" onSubmit={handleSubmit} noValidate aria-busy={status === "loading"}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">이름 <span aria-hidden="true" className="text-withheld">*</span></Label>
          <Input
            ref={nameRef}
            id="name"
            name="name"
            required
            aria-required="true"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            className="mt-2 min-h-11 bg-[var(--surface-elevated)]"
          />
          {fieldErrors.name ? <p id="name-error" className="mt-2 text-sm text-withheld">{fieldErrors.name}</p> : null}
        </div>
        <div>
          <Label htmlFor="email">이메일 <span aria-hidden="true" className="text-withheld">*</span></Label>
          <Input
            ref={emailRef}
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            aria-required="true"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className="mt-2 min-h-11 bg-[var(--surface-elevated)]"
          />
          {fieldErrors.email ? <p id="email-error" className="mt-2 text-sm text-withheld">{fieldErrors.email}</p> : null}
        </div>
      </div>

      <div className="mt-5">
        <Label htmlFor="subject">주제 <span className="text-ink-muted">(선택)</span></Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          aria-describedby="subject-help"
          className="mt-2 min-h-11 bg-[var(--surface-elevated)]"
        />
        <p id="subject-help" className="mt-2 text-xs text-ink-muted">예: 채용 포지션, 제품 협업, 기술 검토</p>
      </div>

      <div className="mt-5">
        <Label htmlFor="message">확인하고 싶은 내용 <span aria-hidden="true" className="text-withheld">*</span></Label>
        <Textarea
          ref={messageRef}
          id="message"
          name="message"
          required
          aria-required="true"
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error message-help" : "message-help"}
          className="mt-2 min-h-40 resize-y bg-[var(--surface-elevated)]"
        />
        <p id="message-help" className="mt-2 text-xs text-ink-muted">역할, 제품 상황, 확인할 사례나 다음 단계가 있으면 함께 적어 주세요.</p>
        {fieldErrors.message ? <p id="message-error" className="mt-2 text-sm text-withheld">{fieldErrors.message}</p> : null}
      </div>

      <div className="mt-6 min-h-6" aria-live="assertive">
        {status === "error" ? <p role="alert" className="text-sm text-withheld">{submitError}</p> : null}
        {status === "loading" ? <p className="text-sm text-ink-muted">메시지를 안전하게 전송하고 있습니다.</p> : null}
      </div>

      <Button type="submit" className="mt-3 min-h-12 w-full" disabled={status === "loading"}>
        {status === "loading" ? (
          <><LoaderCircle className="mr-2 size-4 animate-spin motion-reduce:animate-none" aria-hidden="true" /> 전송 중</>
        ) : (
          <><Send className="mr-2 size-4" aria-hidden="true" /> 메시지 보내기</>
        )}
      </Button>
    </form>
  )
}
