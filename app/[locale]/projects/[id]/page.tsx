import { notFound } from 'next/navigation';
import { api } from '@/lib/api';
import ProjectDetail from '../../components/projects/ProjectDetail';
import Footer from '../../components/shared/Footer';

async function getData(id: string) {
    try {
        const project = await api.projects.getById(id);
        return { project };
    } catch (error) {
        notFound();
    }
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
    const { project } = await getData(params.id);
    
    return (
        <main>
            <ProjectDetail project={project} />
            <Footer />
        </main>
    );
} 