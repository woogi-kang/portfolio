import BlogHeader from '@/components/blog/BlogHeader';
import BlogList from '@/components/blog/BlogList';
import Footer from '@/components/shared/Footer';

export default function BlogPage() {
    return (
        <main>
            <div className="max-w-4xl mx-auto px-6 py-32">
                <BlogHeader />
                <BlogList />
            </div>
            <Footer />
        </main>
    );
} 