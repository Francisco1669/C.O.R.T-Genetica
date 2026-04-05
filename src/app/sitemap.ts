import { MetadataRoute } from "next";
import { tourosPorId } from "@/data/tourosPorId";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cortgeneticabrasil.com";

  // Posts do Blog (extraídos do arquivo do blog ou simulados conforme sua estrutura)
  // Nota: Idealmente os posts estariam em um arquivo data separado,
  // mas vamos mapear os conhecidos
  const blogSlugs = [
    "shared-genetics-valuing-your-herd",
    "marcadores-moleculares-revolucao-genetica",
    "teste-ttr-qualidade-semen",
  ];

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Touros do Catalogo (Dinamico!)
  const bullEntries = Object.keys(tourosPorId).map((id) => ({
    url: `${baseUrl}/catalogo-touros/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Touros na rota /site/cort/home/exibe/ (URL oficial)
  const exibeEntries = Object.keys(tourosPorId).map((id) => ({
    url: `${baseUrl}/site/cort/home/exibe/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Paginas estaticas
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    // ... (restante das páginas)
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/catalogo`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/catalogo-touros`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tecnologia`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tecnologia/marcadores-moleculares`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tecnologia/teste-ttr`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tecnologia/selos-qualidade`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/nossos-selos`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/produtos-servicos`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/politica-privacidade`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termos-uso`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  return [...staticPages, ...blogEntries, ...bullEntries, ...exibeEntries];
}
