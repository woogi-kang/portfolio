import HeroSection from '@/components/home/HeroSection';
import RecentBlogs from '@/components/home/RecentBlogs';
import RecentProjects from '@/components/home/RecentProjects';
import Newsletter from '@/components/shared/Newsletter';
import Footer from '@/components/shared/Footer';

export default function HomePage() {
    return (
        <main>  
            <HeroSection />
            <div className="max-w-4xl mx-auto px-6 py-16 space-y-32">
                <RecentProjects />
                <RecentBlogs />
                <Newsletter />
            </div>
            <Footer />
        </main>
    );
}
