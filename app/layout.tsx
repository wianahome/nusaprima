import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { JsonLd } from '@/components/json-ld'
import { BASE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/site'
import { LayoutWrapper } from '@/components/layout-wrapper'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const GA_TRACKING_ID = 'AW-18134268066'

export const metadata: Metadata = {
  title: 'Nusaprima Digital | Jasa Pembuatan Website Profesional',
  description: 'Nusaprima Digital adalah agensi digital terkemuka yang menyediakan jasa pembuatan website profesional, modern, dan responsif untuk bisnis Anda.',
  keywords: ['jasa pembuatan website', 'web development', 'digital agency', 'website profesional', 'Nusaprima Digital'],
  authors: [{ name: SITE_NAME }],
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: 'Nusaprima Digital | Jasa Pembuatan Website Profesional',
    description: 'Solusi digital terbaik untuk bisnis Anda',
    type: 'website',
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'Nusaprima Digital' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nusaprima Digital | Jasa Pembuatan Website Profesional',
    description: 'Solusi digital terbaik untuk bisnis Anda',
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d9488',
  width: 'device-width',
  initialScale: 1,
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: SITE_NAME,
  url: BASE_URL,
  logo: `${BASE_URL}/logo-nusaprima.png`,
  image: DEFAULT_OG_IMAGE,
  description:
    'Nusaprima Digital adalah agensi digital yang menyediakan jasa pembuatan website, SEO, dan Google Ads profesional.',
  telephone: '+628135979589',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Pura Tegal Gading No. 5A',
    addressLocality: 'Kuta Selatan',
    addressRegion: 'Bali',
    addressCountry: 'ID',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <JsonLd data={organizationSchema} />

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

        {/* Membungkus children, Header, Footer, dan WA dalam Client Wrapper */}
        <LayoutWrapper>
          {children}
        </LayoutWrapper>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}