import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
}

export async function POST(request: NextRequest) {
    try {
        const apiKey = process.env.RESEND_API_KEY
        if (!apiKey) {
            return NextResponse.json(
                { error: 'Email service is not configured' },
                { status: 503 }
            )
        }

        const body = await request.json() as {
            name?: string
            email?: string
            subject?: string
            message?: string
        }
        const { name, email, subject, message } = body

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            )
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            )
        }

        const resend = new Resend(apiKey)
        const safeName = escapeHtml(name)
        const safeEmail = escapeHtml(email)
        const safeSubject = subject ? escapeHtml(subject) : 'No subject'
        const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Resend verified domain
            to: ['woogi.dev@gmail.com'],
            replyTo: email,
            subject: subject || `Portfolio Contact from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>From:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Subject:</strong> ${safeSubject}</p>
                <hr />
                <h3>Message:</h3>
                <p>${safeMessage}</p>
            `,
        })

        if (error) {
            console.error('Resend error:', error)
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { message: 'Email sent successfully', id: data?.id },
            { status: 200 }
        )
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
