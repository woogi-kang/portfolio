import Image from 'next/image';
import Link from 'next/link';

export default function ProjectGrid() {
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
        },
        {
            title: 'Fitness Tracking App',
            description: 'Personal fitness tracking app with workout plans and progress monitoring',
            image: '/projects/fitness.png',
            tags: ['Flutter', 'SQLite', 'BLoC'],
            link: '/projects/fitness-app'
        },
        {
            title: 'Weather App',
            description: 'Beautiful weather application with animated transitions',
            image: '/projects/weather.png',
            tags: ['Flutter', 'API Integration', 'Animations'],
            link: '/projects/weather-app'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
                <Link key={project.title} href={project.link} className="group">
                    <article className="space-y-4">
                        <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                            />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold group-hover:text-green-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400">{project.description}</p>
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
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    );
} 