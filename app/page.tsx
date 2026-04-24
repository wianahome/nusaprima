import nextDynamic from 'next/dynamic'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'


// Gunakan nextDynamic untuk komponen bawah
const Gallery = nextDynamic(() => import('@/components/sections/gallery').then(mod => mod.Gallery))
const Testimonials = nextDynamic(() => import('@/components/sections/testimonials').then(mod => mod.Testimonials))
const FAQ = nextDynamic(() => import('@/components/sections/faq').then(mod => mod.FAQ))

export const dynamic = 'force-dynamic';

export default function Home({ searchParams }: { searchParams: { keyword?: string } }) {
  const selectedKeyword = searchParams.keyword || 'Nusaprima Digital';

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