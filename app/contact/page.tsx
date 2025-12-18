import { Metadata } from 'next';
import ContactPageContent from '@/components/ContactPageContent';

export const metadata: Metadata = {
    title: 'Contact Salinas Painting | Painting Services in Tri Cities TN',
    description: 'Contact Salinas Painting to request a free quote for residential or commercial painting in the Tri Cities, TN area. Call us at +14232976489.',
};

export default function Contact() {
    return <ContactPageContent />;
}

