import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SaalikDesigns - Creative Design Solutions in Nepal',
  description: 'Professional design services in Nepal. We specialize in web design, graphic design, branding, and digital marketing solutions for businesses.',
  keywords: 'design, web design, graphic design, branding, Nepal, digital marketing, creative agency',
  authors: [{ name: 'SaalikDesigns' }],
  creator: 'SaalikDesigns',
  openGraph: {
    title: 'SaalikDesigns - Creative Design Solutions in Nepal',
    description: 'Professional design services in Nepal. We specialize in web design, graphic design, branding, and digital marketing solutions.',
    url: 'https://saalikdesigns.com',
    siteName: 'SaalikDesigns',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaalikDesigns - Creative Design Solutions in Nepal',
    description: 'Professional design services in Nepal. We specialize in web design, graphic design, branding, and digital marketing solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 