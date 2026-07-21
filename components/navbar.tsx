"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const routes = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/posts", label: "Writing" },
  { href: "/contact", label: "Contact" },
]

function isActiveRoute(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  if (pathname.startsWith("/admin") || pathname.startsWith("/login")) return null

  return (
    <header className="sticky top-0 z-40 border-b bg-[var(--canvas)]">
      <div className="site-container flex min-h-16 items-center gap-3 md:min-h-[72px]">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 rounded-md"
          aria-label="강태욱 포트폴리오 홈"
        >
          <span className="flex size-11 shrink-0 items-center justify-center border border-line-strong bg-foreground font-mono text-xs font-bold text-background">
            KT
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-bold">Kang Taewook</span>
            <span className="block truncate text-[11px] text-ink-muted sm:text-xs">
              Product Engineer · AI &amp; Full-stack
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="주요 메뉴">
          {routes.map((route) => {
            const active = isActiveRoute(pathname, route.href)
            return (
              <Link
                key={route.href}
                href={route.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-11 items-center border-b-2 border-transparent px-3 text-sm font-semibold text-ink-muted transition-[color,border-color] duration-150 hover:text-foreground",
                  active && "border-[var(--action)] text-foreground",
                )}
              >
                {route.label}
              </Link>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1 md:ml-2">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-11 md:hidden"
                aria-label="모바일 메뉴 열기"
              >
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(88vw,360px)] gap-0 p-0">
              <SheetHeader className="border-b p-6 pr-14 text-left">
                <SheetTitle>사이트 메뉴</SheetTitle>
                <SheetDescription>
                  현재 위치를 확인하고 포트폴리오의 주요 문서로 이동합니다.
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col p-3" aria-label="모바일 주요 메뉴">
                {routes.map((route) => {
                  const active = isActiveRoute(pathname, route.href)
                  return (
                    <Link
                      key={route.href}
                      href={route.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex min-h-14 items-center justify-between border-b px-3 text-base font-semibold transition-[background-color,color] duration-150 hover:bg-muted",
                        active && "bg-muted text-action",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.label}
                      <span className="font-mono text-xs text-ink-muted">
                        {active ? "현재" : "이동"}
                      </span>
                    </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export const Navbar = SiteHeader
