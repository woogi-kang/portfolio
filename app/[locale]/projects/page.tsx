import { api } from '@/lib/api';
import ProjectsHeader from '../components/projects/ProjectsHeader';
import ProjectGrid from '../components/projects/ProjectGrid';
import Footer from '../components/shared/Footer';

async function getData() {
    const projects = await api.projects.getAll();
    return { projects };
}

export default async function ProjectsPage() {
    const { projects } = await getData();
    
    return (
        <main className="flex-1">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12">
                <ProjectsHeader />
                <ProjectGrid projects={projects} />
            </div>
            <Footer />
        </main>
    );
} 