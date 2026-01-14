import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contato - C.O.R.T Genética Brasil | Fale Conosco - Uruguaiana, RS",
  description: "Entre em contato com a C.O.R.T Genética Brasil. Estamos em Uruguaiana, RS. Tire suas dúvidas sobre genética bovina, marcadores moleculares, teste TTR e nossos touros.",
  keywords: "contato CORT genética, telefone genética bovina, email CORT, Uruguaiana RS, fale conosco, atendimento genética",
  openGraph: {
    title: "Contato - C.O.R.T Genética Brasil",
    description: "Entre em contato conosco. Uruguaiana, RS. Tire suas dúvidas sobre genética bovina e nossos produtos.",
    url: "https://cortgenetica.com.br/contato",
    type: "website",
  },
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
