import { NextRequest, NextResponse } from "next/server"

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL

export async function POST(request: NextRequest) {
    if (!DISCORD_WEBHOOK_URL) {
        return NextResponse.json({ error: "Webhook URL not configured" }, { status: 500 })
    }

    try {
        const { message } = await request.json()

        await fetch(DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: message,
            }),
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Failed to send Discord notification:", error)
        return NextResponse.json({ error: "Failed to send notification" }, { status: 500 })
    }
}
