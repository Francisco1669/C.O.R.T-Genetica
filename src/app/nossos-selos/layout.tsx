import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nossos Selos - C.O.R.T Genética Brasil | Certificações de Qualidade",
  description: "Conheça todos os selos de qualidade da C.O.R.T Genética: Genômica 100% Pura, TTR IATF, Homozigoto 100% Maciez, Homozigoto Preto, Homozigoto Vermelho e 100% Mocho. Garantia de excelência genética.",
  keywords: "selos CORT, certificação genética, genômica pura, TTR IATF, homozigoto maciez, preto homozigoto, vermelho homozigoto, mocho certificado",
  openGraph: {
    title: "Nossos Selos - C.O.R.T Genética Brasil",
    description: "Conheça nossos 6 selos de certificação genética que garantem a excelência dos nossos touros.",
    url: "https://cortgeneticabrasil.com.br/nossos-selos",
    type: "website",
  },
};

export default function NossosSelosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
