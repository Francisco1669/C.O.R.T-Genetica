import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AnalyticsTracker from "@/components/AnalyticsTracker";

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
  verification: {
    google: "SyQwkKuzLlqZtWpvnwJkUPhXV4yW33rghbdBGsNZ0v8"
  }
  ,
  openGraph: {
    title: "C.O.R.T Genética Brasil - Pioneira em marcadores moleculares",
    description: "Líder em marcadores moleculares e genética bovina. Teste TTR, selos de qualidade e a melhor genética para seu rebanho.",
    url: "https://cortgeneticabrasil.com.br",
    siteName: "C.O.R.T Genética Brasil",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "C.O.R.T Genética Brasil - Pioneira em marcadores moleculares",
    description: "Líder em marcadores moleculares e genética bovina. Teste TTR, selos de qualidade e a melhor genética para seu rebanho.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "C.O.R.T Genética Brasil",
    url: "https://cortgeneticabrasil.com.br",
    logo: "https://cortgeneticabrasil.com.br/CORTlogo.png",
    description: "Líder em marcadores moleculares e genética bovina. Teste TTR, selos de qualidade e a melhor genética para seu rebanho.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Uruguaiana",
      addressRegion: "RS",
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Portuguese"],
    },
    sameAs: [
      "https://www.instagram.com/cortgeneticabrasil/",
      "https://www.facebook.com/cortgeneticabrasil/",
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
        <AnalyticsTracker />
      </body>
    </html>
  );
}
