import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection';
import FeaturedBullsSection from '@/components/FeaturedBullsSection';
import FeaturesSection from '@/components/FeaturesSection';
import VideoSection from '@/components/VideoSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "C.O.R.T Genética Brasil - Líder em Genética Bovina e Marcadores Moleculares",
  description: "Empresa pioneira em marcadores moleculares aplicados à genética bovina. Oferecemos teste TTR, selos de qualidade, e os melhores touros para seu rebanho em Uruguaiana, RS.",
  keywords: "genética bovina, touros, marcadores moleculares, teste TTR, selos qualidade, inseminação artificial, gado de corte, gado leiteiro, melhoramento genético",
  openGraph: {
    title: "C.O.R.T Genética Brasil - Líder em Genética Bovina",
    description: "Empresa pioneira em marcadores moleculares aplicados à genética bovina. Teste TTR e selos de qualidade.",
    url: "https://www.cortgeneticabrasil.com",
    type: "website",
  },
};

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
