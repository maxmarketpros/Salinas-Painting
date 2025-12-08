import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesGrid from '@/components/ServicesGrid';
import HomeGallery from '@/components/HomeGallery';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import Testimonials from '@/components/Testimonials';
import QuoteSection from '@/components/QuoteSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Painter in Johnson City TN',
  description: 'Salinas Painting is your trusted Painter in Johnson City TN. We provide high-quality residential and commercial painting services. Call for a quote!',
  openGraph: {
    images: ['/media/salinaspainting/IMG_8974.JPG'],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <WhyChooseUs />
      <ServicesGrid />
      <HomeGallery />
      <BeforeAfterGallery />
      <Testimonials />
      <QuoteSection />
    </div>
  );
}
