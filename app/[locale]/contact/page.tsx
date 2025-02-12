import ContactHeader from '../components/contact/ContactHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Footer from '../components/shared/Footer';

export default function ContactPage() {
    return (
        <main className="flex-1">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12">
                <ContactHeader />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                        <ContactForm />
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                        <ContactInfo />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
} 