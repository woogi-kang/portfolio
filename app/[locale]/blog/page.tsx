import { api } from '@/lib/api';
import BlogGrid from '../components/blog/BlogGrid';
import Footer from '../components/shared/Footer';

async function getData() {
    const posts = await api.blog.getAll();
    return { posts };
}

export default async function BlogPage() {
    const { posts } = await getData();
    
    return (
        <main className="container mx-auto px-6 py-16">
            <BlogGrid posts={posts} />
            <Footer />
        </main>
    );
} 