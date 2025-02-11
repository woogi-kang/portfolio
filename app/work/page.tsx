'use client';

import Image from 'next/image';

export default function WorkPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative px-6 pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent" />

                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold mb-4">My Work</h1>
                    <p className="text-gray-400 text-lg mb-8">
                        A collection of my selected projects and collaborations
                    </p>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Project 1 */}
                    <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                        <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-4">
                            <Image
                                src="/path-to-image.jpg"
                                alt="Project 1"
                                width={500}
                                height={300}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Design System</h3>
                        <p className="text-gray-400 mb-4">
                            A comprehensive design system built for scale
                        </p>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                                React
                            </span>
                            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                                Tailwind
                            </span>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                        <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-4">
                            <Image
                                src="/path-to-image.jpg"
                                alt="Project 2"
                                width={500}
                                height={300}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                        <p className="text-gray-400 mb-4">
                            Modern e-commerce solution with seamless UX
                        </p>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                                Next.js
                            </span>
                            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                                TypeScript
                            </span>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                        <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-4">
                            <Image
                                src="/path-to-image.jpg"
                                alt="Project 3"
                                width={500}
                                height={300}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                        <p className="text-gray-400 mb-4">
                            Real-time analytics visualization platform
                        </p>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                                D3.js
                            </span>
                            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                                React
                            </span>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                        <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-4">
                            <Image
                                src="/path-to-image.jpg"
                                alt="Project 4"
                                width={500}
                                height={300}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Mobile App</h3>
                        <p className="text-gray-400 mb-4">Cross-platform mobile application</p>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                                React Native
                            </span>
                            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                                Firebase
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact CTA */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
                    <p className="text-gray-400 mb-6">
                        Let&apos;s discuss your project and see how I can help
                    </p>
                    <button className="bg-green-500 hover:bg-green-600 text-black font-medium px-8 py-3 rounded-lg transition-colors">
                        Get in Touch
                    </button>
                </div>
            </div>
        </div>
    );
}
