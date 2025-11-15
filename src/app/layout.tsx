import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "C.O.R.T Genética Brasil - Pioneira em marcadores moleculares",
  description: "Líder em marcadores moleculares e genética bovina. Teste TTR, selos de qualidade e a melhor genética para seu rebanho. Localizada em Uruguaiana, RS.",
  keywords: "genética bovina, marcadores moleculares, teste TTR, selos qualidade, inseminação artificial, touros, gado de corte, gado leiteiro, Uruguaiana",
  authors: [{ name: "C.O.R.T Genética Brasil" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
