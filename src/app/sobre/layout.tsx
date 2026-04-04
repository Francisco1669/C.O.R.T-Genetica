import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sobre a C.O.R.T Genética Brasil - História, Missão e Valores",
  description: "Conheça a história da C.O.R.T Genética Brasil, pioneira em marcadores moleculares no Brasil há mais de 30 anos. Nossa missão, visão e valores que transformam a pecuária brasileira.",
  keywords: "sobre CORT, história empresa genética, marcadores moleculares Brasil, teste TTR, empresa Uruguaiana, pecuária inovação",
  openGraph: {
    title: "Sobre a C.O.R.T Genética Brasil",
    description: "Pioneira em marcadores moleculares no Brasil há mais de 30 anos. Conheça nossa história de inovação.",
    url: "https://cortgeneticabrasil.com.br/sobre",
    type: "website",
  },
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
