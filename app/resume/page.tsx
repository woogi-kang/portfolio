import ResumeHeader from '@/components/resume/ResumeHeader';
import Experience from '@/components/resume/Experience';
import Skills from '@/components/resume/Skills';
import Education from '@/components/resume/Education';
import Footer from '@/components/shared/Footer';

export default function ResumePage() {
    return (
        <main>
            <div className="max-w-4xl mx-auto px-6 py-32">
                <ResumeHeader />
                <div className="space-y-24 mt-24">
                    <Experience />
                    <Skills />
                    <Education />
                </div>
            </div>
            <Footer />
        </main>
    );
} 