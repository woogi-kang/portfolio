import { api } from '@/lib/api';
import BlogHeader from '../components/blog/BlogHeader';
import BlogGrid from '../components/blog/BlogGrid';
import Footer from '../components/shared/Footer';

async function getData() {
    const posts = await api.blog.getAll();
    return { posts };
}

export default async function BlogPage() {
    const { posts } = await getData();
    
    return (
        <main className="flex-1">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12">
                <BlogHeader />
                <BlogGrid posts={posts} />
            </div>
            <Footer />
        </main>
    );
} 