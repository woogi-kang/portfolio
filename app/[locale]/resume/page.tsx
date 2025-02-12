import { api } from '@/lib/api';
import ResumeHeader from '../components/resume/ResumeHeader';
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
        <main className="flex-1">
            <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12 md:space-y-16">
                <ResumeHeader />
                <Experience experiences={experiences} />
                <Skills skills={skills} />
                <Education education={education} />
            </div>
            <Footer />
        </main>
    );
} 