import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 mt-32">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-gray-400 text-sm">
                        © {currentYear} Your Name. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <Link href="https://github.com" className="text-gray-400 hover:text-white">
                            GitHub
                        </Link>
                        <Link href="https://twitter.com" className="text-gray-400 hover:text-white">
                            Twitter
                        </Link>
                        <Link href="https://linkedin.com" className="text-gray-400 hover:text-white">
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
} 