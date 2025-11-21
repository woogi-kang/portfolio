"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Package2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

const routes = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/portfolio",
        label: "Portfolio",
    },
    {
        href: "/resume",
        label: "Resume",
    },
    {
        href: "/posts",
        label: "Blog",
    },
    {
        href: "/contact",
        label: "Contact",
    },
]

export function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Package2 className="h-6 w-6" />
                        <span className="hidden font-bold sm:inline-block">
                            Portfolio
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    "transition-colors hover:text-foreground/80",
                                    pathname === route.href ? "text-foreground" : "text-foreground/60"
                                )}
                            >
                                {route.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0">
                        <Link
                            href="/"
                            className="flex items-center"
                            onClick={() => setIsOpen(false)}
                        >
                            <Package2 className="mr-2 h-4 w-4" />
                            <span className="font-bold">Portfolio</span>
                        </Link>
                        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                            <div className="flex flex-col space-y-3">
                                {routes.map((route) => (
                                    <Link
                                        key={route.href}
                                        href={route.href}
                                        className={cn(
                                            "text-foreground/70 transition-colors hover:text-foreground",
                                            pathname === route.href && "text-foreground"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {route.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
                <div className="flex flex-1 items-center justify-end space-x-2 md:justify-end">
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}
