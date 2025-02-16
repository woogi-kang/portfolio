import { api } from '@/lib/api';
import HeroSection from './components/home/HeroSection';
import RecentProjects from './components/home/RecentProjects';
import RecentBlogs from './components/home/RecentBlogs';
import Footer from './components/shared/Footer';
import { Suspense } from 'react';
import LoadingSection from './components/home/LoadingSection';

async function getData() {
    const [projects, posts] = await Promise.all([
        api.projects.getAll(),
        api.blog.getAll()
    ]);
    return { projects, posts };
}

export default async function HomePage() {
    const { projects, posts } = await getData();
    
    return (
        <>
            <HeroSection />
            <main className="container mx-auto px-6 py-16 space-y-16">
                <Suspense fallback={<LoadingSection type="projects" />}>
                    <RecentProjects projects={projects} />
                </Suspense>
                {/* <Suspense fallback={<LoadingSection type="posts" />}> */}
                    {/* <RecentBlogs posts={posts} /> */}
                {/* </Suspense> */}
                <Footer />
            </main>
        </>
    );
} 