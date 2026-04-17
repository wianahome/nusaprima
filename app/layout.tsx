import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Nusaprima Digital | Jasa Pembuatan Website Profesional',
  description: 'Nusaprima Digital adalah agensi digital terkemuka yang menyediakan jasa pembuatan website profesional, modern, dan responsif untuk bisnis Anda.',
  keywords: ['jasa pembuatan website', 'web development', 'digital agency', 'website profesional', 'Nusaprima Digital'],
  authors: [{ name: 'Nusaprima Digital' }],
  openGraph: {
    title: 'Nusaprima Digital | Jasa Pembuatan Website Profesional',
    description: 'Solusi digital terbaik untuk bisnis Anda',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d9488',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
