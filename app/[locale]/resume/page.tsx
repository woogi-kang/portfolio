import { api } from '@/lib/api';
import Experience from '../components/resume/Experience';
import ResumeHeader from '../components/resume/ResumeHeader';
import Skills from '../components/resume/Skills';
import Education from '../components/resume/Education';
import Footer from '../components/shared/Footer';
import Qualifications from '../components/resume/Certifications';

export default async function ResumePage() {
    // Fetch all data in parallel
    const [experiences, skills, education, qualifications] = await Promise.all([
        api.resume.getExperience(),
        api.resume.getSkills(),
        api.resume.getEducation(),
        api.resume.getQualifications()
    ]);

    return (
        <main className="container max-w-5xl mx-auto px-4 py-8">
            <div className="space-y-16">
                <ResumeHeader />
                <Experience experiences={experiences} />
                <Skills skills={skills} />
                <Qualifications certifications={qualifications} />
                <Education education={education} />
            </div>
            <Footer />
        </main>
    );
} 