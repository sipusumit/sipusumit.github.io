import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://sipusumit.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Sumit Kumar | Software Engineer",
    template: "%s | Sumit Kumar"
  },
  description: "Portfolio of Sumit Kumar - Software Engineer specializing in React, Next.js, and modern web development.",
  keywords: ["Sumit Kumar", "Software Engineer", "React Developer", "Next.js", "Portfolio", "Web Development", "Rust", "C++"],
  authors: [{ name: "Sumit Kumar", url: BASE_URL }],
  creator: "Sumit Kumar",

  // 2. Open Graph for social sharing (Facebook, LinkedIn, Discord previews)
  openGraph: {
    title: "Sumit Kumar | Software Engineer",
    description: "Portfolio of Sumit Kumar - Building scalable web solutions.",
    url: BASE_URL,
    siteName: "Sumit Kumar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // You should create this image in your public folder
        width: 1200,
        height: 630,
        alt: "Sumit Kumar Portfolio Preview",
      },
    ],
  },

  // 3. Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Sumit Kumar | Software Engineer",
    description: "Check out my portfolio and projects.",
    creator: "@sipusumit", 
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico", // Optional: Add a custom favicon if you have one
  },

  // 4. Robots control
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
