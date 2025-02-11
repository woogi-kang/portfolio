'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        timeline: 'Not specified',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative px-6 pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent" />

                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold mb-4">Let's Connect</h1>
                    <p className="text-gray-400 text-lg mb-8">
                        Have a project in mind? Let's discuss how we can work together.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="md:col-span-1 space-y-8">
                        {/* Quick Contact */}
                        <div className="bg-gray-900 rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                                        ✉️
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <a
                                            href="mailto:hello@example.com"
                                            className="text-green-500 hover:text-green-400"
                                        >
                                            hello@example.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                                        📱
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Schedule a call</p>
                                        <a href="#" className="text-green-500 hover:text-green-400">
                                            Calendly
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-gray-900 rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-4">Find Me On</h3>
                            <div className="space-y-3">
                                <a
                                    href="#"
                                    className="flex items-center gap-3 text-gray-400 hover:text-white"
                                >
                                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                                        𝕏
                                    </div>
                                    Twitter
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center gap-3 text-gray-400 hover:text-white"
                                >
                                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                                        🐙
                                    </div>
                                    GitHub
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center gap-3 text-gray-400 hover:text-white"
                                >
                                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                                        💼
                                    </div>
                                    LinkedIn
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center gap-3 text-gray-400 hover:text-white"
                                >
                                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                                        ✏️
                                    </div>
                                    Medium
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="md:col-span-2">
                        <div className="bg-gray-900 rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-black/50 rounded-lg px-4 py-2 border border-gray-800 focus:outline-none focus:border-green-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-black/50 rounded-lg px-4 py-2 border border-gray-800 focus:outline-none focus:border-green-500"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 rounded-lg px-4 py-2 border border-gray-800 focus:outline-none focus:border-green-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                        Project Budget (Optional)
                                    </label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 rounded-lg px-4 py-2 border border-gray-800 focus:outline-none focus:border-green-500"
                                    >
                                        <option value="">Select budget range</option>
                                        <option value="< $5k">Less than $5,000</option>
                                        <option value="$5k-$10k">$5,000 - $10,000</option>
                                        <option value="$10k-$20k">$10,000 - $20,000</option>
                                        <option value="$20k+">$20,000+</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                        Project Timeline
                                    </label>
                                    <select
                                        name="timeline"
                                        value={formData.timeline}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 rounded-lg px-4 py-2 border border-gray-800 focus:outline-none focus:border-green-500"
                                    >
                                        <option value="Not specified">Not specified</option>
                                        <option value="ASAP">As soon as possible</option>
                                        <option value="1-2 months">1-2 months</option>
                                        <option value="3-6 months">3-6 months</option>
                                        <option value="6+ months">6+ months</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full bg-black/50 rounded-lg px-4 py-2 border border-gray-800 focus:outline-none focus:border-green-500"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-3 rounded-lg transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-900 rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-3">
                                What is your typical process?
                            </h3>
                            <p className="text-gray-400">
                                I follow a structured approach: Discovery → Planning → Design →
                                Development → Testing → Launch. Each phase includes regular
                                communication and feedback.
                            </p>
                        </div>
                        <div className="bg-gray-900 rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-3">How do you handle revisions?</h3>
                            <p className="text-gray-400">
                                Each project includes two rounds of revisions. Additional revisions
                                are available at an hourly rate.
                            </p>
                        </div>
                        <div className="bg-gray-900 rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-3">What's your availability?</h3>
                            <p className="text-gray-400">
                                I typically book projects 2-3 weeks in advance. Rush projects may be
                                available for an additional fee.
                            </p>
                        </div>
                        <div className="bg-gray-900 rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-3">Do you work remotely?</h3>
                            <p className="text-gray-400">
                                Yes, I work remotely with clients worldwide. I use tools like Slack,
                                Zoom, and email for communication.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
