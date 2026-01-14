import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Marcadores Moleculares - C.O.R.T Genética Brasil | Tecnologia de Seleção Genética",
  description: "Entenda como os marcadores moleculares revolucionam a seleção genética bovina. Tecnologia de DNA para identificar características de maciez, fertilidade, eficiência alimentar e mais.",
  keywords: "marcadores moleculares bovinos, DNA bovino, seleção genética, maciez carne, fertilidade bovina, genética molecular, teste DNA gado",
  openGraph: {
    title: "Marcadores Moleculares - C.O.R.T Genética Brasil",
    description: "Tecnologia de DNA para seleção genética precisa. Identifique características desejáveis desde o nascimento.",
    url: "https://cortgenetica.com.br/tecnologia/marcadores-moleculares",
    type: "website",
  },
};

export default function MarcadoresMolecularesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
