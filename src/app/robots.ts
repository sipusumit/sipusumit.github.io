import type { MetadataRoute } from 'next'

// Add this line to force static generation
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Example: hide private routes if any
    },
    sitemap: 'https://sipusumit.in/sitemap.xml', // Replace with your domain
  }
}