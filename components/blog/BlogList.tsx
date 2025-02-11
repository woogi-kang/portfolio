import Link from 'next/link';

export default function BlogList() {
    const posts = [
        {
            title: 'Building Performant Flutter Apps',
            date: '2024-03-15',
            description: "Learn how to optimize your Flutter applications for better performance and user experience. We'll cover key concepts and best practices.",
            readTime: '5 min read',
            category: 'Performance',
            link: '/blog/building-performant-flutter-apps'
        },
        {
            title: 'State Management in Flutter',
            date: '2024-03-10',
            description: 'A comprehensive guide to different state management solutions in Flutter. Compare Provider, Riverpod, Bloc, and more.',
            readTime: '8 min read',
            category: 'Architecture',
            link: '/blog/state-management-flutter'
        },
        {
            title: 'Custom Animations in Flutter',
            date: '2024-03-05',
            description: 'Deep dive into creating custom animations in Flutter. Learn about implicit and explicit animations.',
            readTime: '6 min read',
            category: 'UI/UX',
            link: '/blog/custom-animations-flutter'
        }
    ];

    return (
        <div className="space-y-12">
            {posts.map((post) => (
                <Link key={post.title} href={post.link} className="block group">
                    <article className="space-y-4">
                        <div className="flex items-center gap-3 text-sm">
                            <span className="px-3 py-1 rounded-full bg-white/5 text-green-400">
                                {post.category}
                            </span>
                            <time className="text-gray-400">{post.date}</time>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-400">{post.readTime}</span>
                        </div>
                        <h2 className="text-2xl font-semibold group-hover:text-green-400 transition-colors">
                            {post.title}
                        </h2>
                        <p className="text-gray-400">{post.description}</p>
                        <div className="flex items-center gap-2 text-green-400 group-hover:gap-3 transition-all">
                            <span>Read more</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    );
} 