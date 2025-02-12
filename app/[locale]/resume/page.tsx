import { api } from '@/lib/api';
import Experience from '../components/resume/Experience';
import Skills from '../components/resume/Skills';
import Education from '../components/resume/Education';
import Footer from '../components/shared/Footer';

async function getData() {
    const [experiences, skills, education] = await Promise.all([
        api.resume.getExperience(),
        api.resume.getSkills(),
        api.resume.getEducation()
    ]);
    return { experiences, skills, education };
}

export default async function ResumePage() {
    const { experiences, skills, education } = await getData();
    
    return (
        <main className="container mx-auto px-6 py-16 space-y-16">
            <Experience experiences={experiences} />
            <Skills skills={skills} />
            <Education education={education} />
            <Footer />
        </main>
    );
} 