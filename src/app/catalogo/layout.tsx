import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Catálogo de Raças - C.O.R.T Genética Brasil | Touros de Corte e Leite",
  description: "Explore nosso catálogo completo de touros de raças de corte e leite. Angus, Brangus, Nelore, Holandês, Jersey e muito mais. Todos com marcadores moleculares e teste TTR.",
  keywords: "catálogo touros, raças bovinas, Angus, Brangus, Nelore, Holandês, Jersey, touros corte, touros leite, genética bovina",
  openGraph: {
    title: "Catálogo de Raças - C.O.R.T Genética Brasil",
    description: "Explore nosso catálogo completo de touros de raças de corte e leite com marcadores moleculares.",
    url: "https://cortgenetica.com.br/catalogo",
    type: "website",
  },
};

export default function CatalogoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
