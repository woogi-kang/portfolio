export default function Skills() {
    const skillCategories = [
        {
            title: 'Mobile Development',
            skills: ['Flutter', 'Dart', 'iOS', 'Android', 'React Native']
        },
        {
            title: 'State Management',
            skills: ['Provider', 'Riverpod', 'Bloc', 'GetX']
        },
        {
            title: 'Backend & Database',
            skills: ['Firebase', 'REST APIs', 'GraphQL', 'SQLite']
        },
        {
            title: 'Tools & Others',
            skills: ['Git', 'CI/CD', 'Agile', 'Unit Testing', 'UI/UX Design']
        }
    ];

    return (
        <section>
            <h2 className="text-2xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category) => (
                    <div key={category.title}>
                        <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 