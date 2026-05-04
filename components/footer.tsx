import * as React from "react"
import Link from "next/link"

import { profile } from "@/lib/portfolio-data"

export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0">
            <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © {new Date().getFullYear()} {profile.name}. AX Engineer building AI agents, automation systems, and product operations.
                </p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                    <Link href={profile.github} target="_blank" className="hover:text-foreground">
                        GitHub
                    </Link>
                    <Link href={profile.linkedin} target="_blank" className="hover:text-foreground">
                        LinkedIn
                    </Link>
                    <Link href={`mailto:${profile.email}`} className="hover:text-foreground">
                        Email
                    </Link>
                </div>
            </div>
        </footer>
    )
}
