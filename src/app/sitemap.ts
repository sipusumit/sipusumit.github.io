import type { MetadataRoute } from 'next'

// Add this line to force static generation
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sipusumit.in' // Replace with your domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // If you add sub-pages like /blog later, add them here
  ]
}