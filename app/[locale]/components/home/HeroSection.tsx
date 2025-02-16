'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Github, BookText, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
    const t = useTranslations('home.hero');

    return (
        <div className="relative px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-black via-transparent to-black opacity-60" />
            
            {/* Content */}
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 relative">
                {/* Text Content */}
                <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
                    {/* Status Badge */}
                    <div className="flex justify-center md:justify-start">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="relative">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
                            </div>
                            <span className="text-green-400 text-sm font-medium tracking-wide">
                                {t('status')}
                            </span>
                        </div>
                    </div>

                    {/* Title Section */}
                    <div className="space-y-3">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 block">
                                {t('title.line1')}
                            </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 block mt-2">
                                {t('title.line2')}
                            </span>
                        </h1>
                    </div>

                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
                        {t('subtitle')}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center md:justify-start gap-3 sm:gap-4">
                        <Button 
                            className="group bg-[#24292e] hover:bg-[#1b1f23] text-white border-0"
                            onClick={() => window.open('https://github.com/woogi-kang', '_blank')}
                        >
                            <Github className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-0.5" />
                            GitHub
                        </Button>
                        <Button 
                            className="group bg-black hover:bg-[#1a1a1a] text-white border-0"
                            onClick={() => window.open('https://medium.com/@dev-woogi', '_blank')}
                        >
                            <BookText className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-0.5" />
                            Medium
                        </Button>
                        <Button 
                            className="group bg-[#0A66C2] hover:bg-[#004182] text-white border-0"
                            onClick={() => window.open('https://www.linkedin.com/in/taewook-kang/', '_blank')}
                        >
                            <Linkedin className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-0.5" />
                            LinkedIn
                        </Button>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="relative w-48 sm:w-56 md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
                    {/* Outer glow */}
                    <div 
                        className="absolute inset-0 rounded-full bg-gradient-to-b from-green-500/10 to-transparent animate-pulse" 
                        style={{ animationDuration: '3s' }} 
                    />
                    
                    {/* Image container */}
                    <div className="relative aspect-square">
                        <Image
                            src="/images/profile.png"
                            alt={'Profile picture'}
                            fill
                            className="rounded-full object-cover object-center"
                            priority
                            sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 33vw, 25vw"
                        />
                        
                        {/* Decorative circles */}
                        <div className="absolute -inset-0.5 rounded-full border border-white/10 animate-pulse" 
                             style={{ animationDelay: '1s' }} />
                        <div className="absolute -inset-2 rounded-full border border-white/5 animate-pulse" 
                             style={{ animationDelay: '2s' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}