import { notFound } from 'next/navigation';
import { api } from '@/lib/api';
import BlogPost from '../../components/blog/BlogPost';
import Footer from '../../components/shared/Footer';

async function getData(id: string) {
    try {
        const post = await api.blog.getById(id);
        return { post };
    } catch (error) {
        notFound();
    }
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
    const { post } = await getData(params.id);
    
    return (
        <main>
            <BlogPost post={post} />
            <Footer />
        </main>
    );
} 