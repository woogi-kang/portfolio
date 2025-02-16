'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { sendContactEmail } from '@/app/actions/email';

export default function ContactForm() {
    const t = useTranslations('contact');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string | null;
    }>({ type: null, message: null });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus({ type: null, message: null });

        try {
            const formData = new FormData(e.currentTarget);
            const data = {
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                message: formData.get('message') as string,
            };

            const result = await sendContactEmail(data);

            if (result.success) {
                setFormStatus({
                    type: 'success',
                    message: t('form.success')
                });
                (e.target as HTMLFormElement).reset();
            } else {
                setFormStatus({
                    type: 'error',
                    message: t('form.error')
                });
            }
        } catch (error) {
            setFormStatus({
                type: 'error',
                message: t('form.error')
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    {t('form.name')}
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5
                        text-white placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
                    placeholder={t('form.namePlaceholder')}
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    {t('form.email')}
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5
                        text-white placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
                    placeholder={t('form.emailPlaceholder')}
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    {t('form.message')}
                </label>
                <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5
                        text-white placeholder-gray-500 focus:border-green-500 focus:ring-green-500"
                    placeholder={t('form.messagePlaceholder')}
                />
            </div>

            {formStatus.message && (
                <div className={`p-4 rounded-lg ${
                    formStatus.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                }`}>
                    {formStatus.message}
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-green-500 px-4 py-2.5 text-center font-medium text-black
                    hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
                    disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? t('form.sending') : t('form.send')}
            </button>
        </form>
    );
} 