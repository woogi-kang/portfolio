'use client';

interface EmptyStateProps {
    title: string;
    message: string;
}

export default function EmptyState({ title, message }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400">{message}</p>
        </div>
    );
} 