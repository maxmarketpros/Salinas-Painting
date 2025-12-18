import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesGrid from '@/components/ServicesGrid';
import HomeGallery from '@/components/HomeGallery';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import Testimonials from '@/components/Testimonials';
import QuoteSection from '@/components/QuoteSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Providing Painting Services in Tri Cities, TN',
  description: 'Salinas Painting provides detail-oriented residential and commercial painting services across the Tri Cities, TN area. Call for a quote!',
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

