export default function Education() {
    const education = [
        {
            degree: 'Master of Computer Science',
            school: 'Tech University',
            period: '2018 - 2020',
            description: 'Specialized in Mobile Computing and Software Engineering'
        },
        {
            degree: 'Bachelor of Computer Science',
            school: 'State University',
            period: '2014 - 2018',
            description: 'Major in Software Development'
        }
    ];

    return (
        <section>
            <h2 className="text-2xl font-bold mb-8">Education</h2>
            <div className="space-y-8">
                {education.map((edu) => (
                    <div key={edu.degree} className="space-y-2">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                <p className="text-green-400">{edu.school}</p>
                            </div>
                            <span className="text-gray-400">{edu.period}</span>
                        </div>
                        <p className="text-gray-400">{edu.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
} 