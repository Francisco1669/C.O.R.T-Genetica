import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tecnologias - C.O.R.T Genética Brasil | Marcadores Moleculares e Teste TTR",
  description: "Conheça nossas tecnologias inovadoras: Marcadores Moleculares, Teste TTR (Termo Resistência Rápido) e Selos de Qualidade para garantir a melhor genética para seu rebanho.",
  keywords: "tecnologia genética bovina, marcadores moleculares, teste TTR, selos qualidade, inovação pecuária, genética avançada",
  openGraph: {
    title: "Tecnologias - C.O.R.T Genética Brasil",
    description: "Marcadores Moleculares, Teste TTR e Selos de Qualidade. Tecnologia de ponta para a pecuária.",
    url: "https://www.cortgeneticabrasil.com/tecnologia",
    type: "website",
  },
};

export default function TecnologiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
