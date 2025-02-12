'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/config/navigation';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const languages = [
    { locale: 'en', label: 'English', flag: '🇺🇸' },
    { locale: 'ko', label: '한국어', flag: '🇰🇷' }
] as const;

export default function LanguageToggle() {
    const locale = useLocale();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button 
                    variant="ghost" 
                    size="icon"
                    className={cn(
                        "w-9 h-9 rounded-full",
                        "bg-white/5 hover:bg-white/10",
                        "border border-white/10",
                        "text-gray-400 hover:text-white"
                    )}
                >
                    <Globe className="w-4 h-4" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
                align="end"
                className="bg-black/95 border-white/10 backdrop-blur-md"
            >
                {languages.map(({ locale: loc, label, flag }) => (
                    <DropdownMenuItem key={loc} asChild>
                        <Link
                            href="/"
                            locale={loc}
                            className={cn(
                                "flex items-center gap-2 cursor-pointer",
                                "text-sm px-3 py-2",
                                loc === locale 
                                    ? "text-white bg-white/10" 
                                    : "text-gray-400 hover:text-white"
                            )}
                        >
                            <span className="text-base">{flag}</span>
                            <span>{label}</span>
                            {loc === locale && (
                                <span className="ml-auto text-xs text-white/50">
                                    ✓
                                </span>
                            )}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
} 