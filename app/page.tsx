import { Metadata } from 'next'
import nextDynamic from 'next/dynamic'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { BASE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Website di Bali | Bali Web Desain Terbaik',
  description: 'Jasa website Bali profesional & terpercaya. Pembuatan website & web desain cepat, SEO friendly, dan bergaransi. Konsultasi gratis!',
  keywords: ['jasa pembuatan website', 'bikin website', 'jasa web design', 'buat website murah', 'jasa seo website'],
  openGraph: {
    title: 'Jasa Pembuatan Website di Bali | Bali Web Desain Terbaik',
    description: 'Jasa website Bali profesional & terpercaya. Pembuatan website & web desain cepat, SEO friendly, dan bergaransi. Konsultasi gratis!',
    type: 'website',
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'Nusaprima Digital' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Pembuatan Website Profesional & SEO Friendly | Nusaprima',
    description: 'Nusaprima melayani jasa pembuatan website profesional, toko online, company profile yang SEO friendly, cepat, dan responsif. Konsultasi gratis sekarang!',
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: BASE_URL,
  },
}

const Gallery = nextDynamic(() => import('@/components/sections/gallery').then(mod => mod.Gallery))
const Testimonials = nextDynamic(() => import('@/components/sections/testimonials').then(mod => mod.Testimonials))
const FAQ = nextDynamic(() => import('@/components/sections/faq').then(mod => mod.FAQ))

export const dynamic = 'force-dynamic'

export default function Home({ searchParams }: { searchParams: { keyword?: string } }) {
  const selectedKeyword = searchParams.keyword || 'Jasa Pembuatan Website di Bali untuk Level Up Bisnis Anda'

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero keyword={selectedKeyword} />
      <About keyword={selectedKeyword} />
      <Gallery keyword={selectedKeyword} />
      <Testimonials />
      <FAQ />
    </main>
  )
}
