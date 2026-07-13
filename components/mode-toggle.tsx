"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { resolvedTheme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    return (
        <Button
            type="button"
            variant="ghost"
            size="icon"
            className="relative size-11"
            onClick={toggleTheme}
            aria-label="밝은 화면과 어두운 화면 전환"
            title="테마 전환"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-[transform,opacity] dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-[transform,opacity] dark:rotate-0 dark:scale-100" />
            <span className="sr-only">테마 전환</span>
        </Button>
    )
}
