import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Catálogo de Touros - C.O.R.T Genética Brasil | Veja Todos os Touros",
  description: "Catálogo completo com todos os touros disponíveis da C.O.R.T Genética. Marcadores moleculares, teste TTR e selos de qualidade. Encontre o touro ideal para seu rebanho.",
  keywords: "catálogo touros completo, touros disponíveis, sêmen bovino, inseminação artificial, genética certificada, touros marcadores moleculares",
  openGraph: {
    title: "Catálogo de Touros - C.O.R.T Genética Brasil",
    description: "Catálogo completo com todos os touros disponíveis. Marcadores moleculares e teste TTR.",
    url: "https://cortgenetica.com.br/catalogo-touros",
    type: "website",
  },
};

export default function CatalogoTourosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
