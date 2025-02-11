export default function Experience() {
    const experiences = [
        {
            company: 'Tech Solutions Inc.',
            position: 'Senior Flutter Developer',
            period: '2022 - Present',
            description: 'Led the development of multiple Flutter applications with complex state management and real-time features.',
            achievements: [
                'Reduced app loading time by 40% through optimization',
                'Implemented CI/CD pipeline reducing deployment time by 60%',
                'Mentored junior developers and conducted code reviews'
            ]
        },
        {
            company: 'Mobile Apps Co.',
            position: 'Flutter Developer',
            period: '2020 - 2022',
            description: 'Developed and maintained multiple Flutter applications for iOS and Android platforms.',
            achievements: [
                'Built and launched 5 successful apps on both app stores',
                'Integrated complex REST APIs and real-time Firebase features',
                'Implemented automated testing reducing bugs by 50%'
            ]
        }
    ];

    return (
        <section>
            <h2 className="text-2xl font-bold mb-8">Experience</h2>
            <div className="space-y-12">
                {experiences.map((exp) => (
                    <div key={exp.company} className="space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-semibold">{exp.position}</h3>
                                <p className="text-green-400">{exp.company}</p>
                            </div>
                            <span className="text-gray-400">{exp.period}</span>
                        </div>
                        <p className="text-gray-400">{exp.description}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            {exp.achievements.map((achievement) => (
                                <li key={achievement}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
} 