import { Metadata } from 'next';
import nextDynamic from 'next/dynamic'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Website Profesional & SEO Friendly | Nusaprima',
  description: 'Nusaprima melayani jasa pembuatan website profesional, toko online, company profile yang SEO friendly, cepat, dan responsif. Konsultasi gratis sekarang!',
  keywords: ['jasa pembuatan website', 'bikin website', 'jasa web design', 'buat website murah', 'jasa seo website'],
  openGraph: {
    title: 'Jasa Pembuatan Website Profesional & SEO Friendly | Nusaprima',
    description: 'Nusaprima melayani jasa pembuatan website profesional, toko online, company profile yang SEO friendly, cepat, dan responsif. Konsultasi gratis sekarang!',
    type: 'website',
  },
};


// Gunakan nextDynamic untuk komponen bawah
const Gallery = nextDynamic(() => import('@/components/sections/gallery').then(mod => mod.Gallery))
const Testimonials = nextDynamic(() => import('@/components/sections/testimonials').then(mod => mod.Testimonials))
const FAQ = nextDynamic(() => import('@/components/sections/faq').then(mod => mod.FAQ))

export const dynamic = 'force-dynamic';

export default function Home({ searchParams }: { searchParams: { keyword?: string } }) {
  const selectedKeyword = searchParams.keyword || 'Jasa Pembuatan Website Professional';

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