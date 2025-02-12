import { api } from '@/lib/api';
import ProjectGrid from '../components/projects/ProjectGrid';
import Footer from '../components/shared/Footer';

async function getData() {
    const projects = await api.projects.getAll();
    return { projects };
}

export default async function ProjectsPage() {
    const { projects } = await getData();
    
    return (
        <main className="container mx-auto px-6 py-16">
            <ProjectGrid projects={projects} />
            <Footer />
        </main>
    );
} 