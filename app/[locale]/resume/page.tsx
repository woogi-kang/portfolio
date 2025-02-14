import { api } from '@/lib/api';
import Experience from '../components/resume/Experience';
import ResumeHeader from '../components/resume/ResumeHeader';
import Skills from '../components/resume/Skills';
import Education from '../components/resume/Education';
import Footer from '../components/shared/Footer';

export default async function ResumePage() {
    // Fetch all data in parallel
    const [experiences, skills, education] = await Promise.all([
        api.resume.getExperience(),
        api.resume.getSkills(),
        api.resume.getEducation()
    ]);

    return (
        <main className="container max-w-5xl mx-auto px-4 py-8">
            <div className="space-y-16">
                <ResumeHeader />
                <Experience experiences={experiences} />
                <Skills skills={skills} />
                <Education education={education} />
            </div>
            <Footer />
        </main>
    );
} 