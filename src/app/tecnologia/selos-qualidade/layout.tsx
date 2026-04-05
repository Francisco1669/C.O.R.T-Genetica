import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Selos de Qualidade - C.O.R.T Genética Brasil | Certificação Genética",
  description: "Conheça nosso sistema exclusivo de Selos de Qualidade: Genômica 100% Pura, TTR IATF, Homozigoto Maciez, Homozigoto Preto, Homozigoto Vermelho e 100% Mocho. Certificação genética garantida.",
  keywords: "selos qualidade genética, certificação genética, genômica pura, homozigoto maciez, mocho, certificado TTR, qualidade sêmen",
  openGraph: {
    title: "Selos de Qualidade - C.O.R.T Genética Brasil",
    description: "Sistema exclusivo de certificação genética com 7 selos de qualidade para garantir a melhor genética.",
    url: "https://www.cortgeneticabrasil.com/tecnologia/selos-qualidade",
    type: "website",
  },
};

export default function SelosQualidadeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
