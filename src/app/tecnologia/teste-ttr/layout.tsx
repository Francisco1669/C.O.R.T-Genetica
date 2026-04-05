import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Teste TTR - C.O.R.T Genética Brasil | Teste de Termo Resistência Rápido",
  description: "O Teste TTR (Termo Resistência Rápido) avalia a qualidade e resistência térmica do sêmen bovino. Garanta melhores taxas de prenhez e eficiência reprodutiva com tecnologia exclusiva.",
  keywords: "teste TTR, termo resistência, qualidade sêmen, resistência térmica, taxa prenhez, eficiência reprodutiva, IATF",
  openGraph: {
    title: "Teste TTR - C.O.R.T Genética Brasil",
    description: "Teste de Termo Resistência Rápido para avaliar qualidade seminal e garantir melhores resultados reprodutivos.",
    url: "https://www.cortgeneticabrasil.com/tecnologia/teste-ttr",
    type: "website",
  },
};

export default function TesteTTRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
