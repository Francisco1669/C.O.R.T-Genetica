import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://cortgenetica.com.br'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/saldo-banco/', '/site/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
