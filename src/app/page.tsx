import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection';
import FeaturedBullsSection from '@/components/FeaturedBullsSection';
import FeaturesSection from '@/components/FeaturesSection';
import VideoSection from '@/components/VideoSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PartnersSection />
      <FeaturedBullsSection />
      <FeaturesSection />
      <VideoSection />
    </div>
  );
}
