import Link from 'next/link';

export default function RecentBlogs() {
    const posts = [
        {
            title: 'Building Performant Flutter Apps',
            date: '2024-03-15',
            description: 'Learn how to optimize your Flutter applications for better performance',
            readTime: '5 min read',
            link: '/blog/building-performant-flutter-apps'
        },
        {
            title: 'State Management in Flutter',
            date: '2024-03-10',
            description: 'A comprehensive guide to different state management solutions in Flutter',
            readTime: '8 min read',
            link: '/blog/state-management-flutter'
        }
    ];

    return (
        <section>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Recent Posts</h2>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">
                    View all →
                </Link>
            </div>
            <div className="space-y-8">
                {posts.map((post) => (
                    <Link key={post.title} href={post.link} className="block group">
                        <article className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <time>{post.date}</time>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h3 className="text-lg font-semibold group-hover:text-green-400 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-gray-400">{post.description}</p>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
} 