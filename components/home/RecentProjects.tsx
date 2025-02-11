import Link from 'next/link';
import Image from 'next/image';

export default function RecentProjects() {
    const projects = [
        {
            title: 'Flutter E-commerce App',
            description: 'A modern e-commerce application built with Flutter and Firebase',
            image: '/projects/ecommerce.png',
            tags: ['Flutter', 'Firebase', 'State Management'],
            link: '/projects/flutter-ecommerce'
        },
        {
            title: 'Social Media Dashboard',
            description: 'Real-time social media analytics dashboard',
            image: '/projects/dashboard.png',
            tags: ['Flutter', 'REST API', 'Charts'],
            link: '/projects/social-dashboard'
        }
    ];

    return (
        <section>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Recent Projects</h2>
                <Link href="/projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                    View all →
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <Link key={project.title} href={project.link} className="group">
                        <div className="relative aspect-video mb-4 overflow-hidden rounded-lg border border-white/10">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                            />
                        </div>
                        <h3 className="font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                        <div className="flex gap-2 flex-wrap">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
} 