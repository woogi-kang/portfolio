import * as React from "react"
import Link from "next/link"

import { profile } from "@/lib/portfolio-data"

export function Footer() {
    return (
        <footer className="border-t bg-background py-8">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-4 md:flex-row md:items-center md:px-8">
                <div>
                    <p className="max-w-full break-words text-sm font-semibold leading-loose">
                        {profile.name}
                    </p>
                    <p className="max-w-full break-words text-sm leading-loose text-muted-foreground">
                        © {new Date().getFullYear()} AI Data Product Engineer. 실제 작업과 검증 흐름을 모은 포트폴리오입니다.
                    </p>
                </div>
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
