"use server"

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL

export async function sendDiscordNotification(message: string) {
    if (!DISCORD_WEBHOOK_URL) {
        console.error("DISCORD_WEBHOOK_URL is not defined")
        return
    }

    try {
        await fetch(DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: message,
            }),
        })
    } catch (error) {
        console.error("Failed to send Discord notification:", error)
    }
}
