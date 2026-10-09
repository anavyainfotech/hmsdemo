import HeroSection from '@/components/home/HeroSection';
import FeaturesBar from '@/components/home/FeaturesBar';
import DepartmentsSection from '@/components/home/DepartmentsSection';
import AboutSection from '@/components/home/AboutSection';
import DoctorsSection from '@/components/home/DoctorsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeroSection />
      <FeaturesBar />
      <DepartmentsSection />
      <AboutSection />
      <DoctorsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}