export default function ResumeHeader() {
    return (
        <section className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold mb-4">Resume</h1>
                <p className="text-gray-400 text-lg">
                    Flutter Developer with 5+ years of experience in mobile app development
                </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
                <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 transition-colors"
                >
                    <span>Download PDF</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </a>
                
                <a
                    href="mailto:contact@example.com"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                    <span>Contact Me</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </a>
            </div>
        </section>
    );
} 