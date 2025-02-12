import ContactHeader from '../components/contact/ContactHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Footer from '../components/shared/Footer';

export default function ContactPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-16">
            <ContactHeader />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                <div className="md:col-span-2">
                    <ContactForm />
                </div>
                <div>
                    <ContactInfo />
                </div>
            </div>
            <Footer />
        </main>
    );
} 