'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

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
        <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
            <div>
                <label htmlFor="name" className="block mb-2">
                    {t('name.label')}
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={t('name.placeholder')}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-green-500"
                />
            </div>
            <div>
                <label htmlFor="email" className="block mb-2">
                    {t('email.label')}
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={t('email.placeholder')}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-green-500"
                />
            </div>
            <div>
                <label htmlFor="message" className="block mb-2">
                    {t('message.label')}
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder={t('message.placeholder')}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-green-500"
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-green-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? t('submitting') : t('submit')}
            </button>
        </form>
    );
} 