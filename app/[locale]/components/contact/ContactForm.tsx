'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
    const t = useTranslations('contact.form');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Add your form submission logic here
        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1.5">
                        {t('name.label')}
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder={t('name.placeholder')}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1.5">
                        {t('email.label')}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder={t('email.placeholder')}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1.5">
                        {t('message.label')}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder={t('message.placeholder')}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-colors resize-none"
                    ></textarea>
                </div>
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-green-500 text-black px-6 py-3 rounded-xl font-medium hover:bg-green-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? t('submitting') : t('submit')}
                <Send className="w-4 h-4" />
            </button>
        </form>
    );
} 