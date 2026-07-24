import { Metadata } from 'next'
import HeroSeo from '@/components/sections/HeroSeo'
import AboutSeo from '@/components/sections/AboutSeo'
import ProcessSeo from '@/components/ProcessSeo'
import PortfolioSeo from '@/components/PortfolioSeo'
import TestimonialSeo from '@/components/TestimonialSeo'
import { FaqSeo } from '@/components/FaqSeo'
import { ContactAds } from '@/components/sections/ContakAds'
import { BASE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Jasa SEO Profesional & Bergaransi Halaman 1 Google | Nusaprima',
  description: 'Tingkatkan trafik organik dan penjualan Anda dengan Jasa SEO dari Nusaprima. Strategi white-hat SEO aman, transparan, dan terbukti masuk halaman 1 Google.',
  keywords: ['jasa seo', 'jasa optimasi seo', 'pakar seo', 'jasa seo bergaransi', 'jasa seo website'],
  openGraph: {
    title: 'Jasa SEO Profesional & Bergaransi Halaman 1 Google | Nusaprima',
    description: 'Tingkatkan trafik organik dan penjualan Anda dengan Jasa SEO dari Nusaprima. Strategi white-hat SEO aman, transparan, dan terbukti masuk halaman 1 Google.',
    type: 'website',
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'Jasa SEO Nusaprima' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa SEO Profesional & Bergaransi Halaman 1 Google | Nusaprima',
    description: 'Tingkatkan trafik organik dan penjualan Anda dengan Jasa SEO dari Nusaprima.',
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/jasa-seo`,
  },
}

export default function SeoJasa() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSeo />
      <AboutSeo />
      <ProcessSeo />
      <PortfolioSeo />
      <TestimonialSeo />
      <FaqSeo />
      <ContactAds />
    </main>
  )
}
