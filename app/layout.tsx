import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script' // 1. Import Script
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWA } from '@/components/floating-wa'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const GA_TRACKING_ID = 'AW-123456789'; // 2. Ganti dengan ID dari Google Ads Anda

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
    <html lang="id" className="bg-background" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {/* 3. Google Ads Global Tag - Hanya muncul di Production */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="google-ads-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}');
                `,
              }}
            />
          </>
        )}

        <Header />
        {children}
        <FloatingWA />
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Footer />
      </body>
    </html>
  )
}