import ProjectsHeader from '@/components/projects/ProjectsHeader';
import ProjectGrid from '@/components/projects/ProjectGrid';
import Footer from '@/components/shared/Footer';

export default function ProjectsPage() {
    return (
        <main>
            <div className="max-w-4xl mx-auto px-6 py-32">
                <ProjectsHeader />
                <ProjectGrid />
            </div>
            <Footer />
        </main>
    );
} 