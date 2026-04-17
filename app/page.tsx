'use client'

import dynamic from 'next/dynamic'
import { Header } from '@/components/header'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Pricing } from '@/components/sections/pricing'
import { Gallery } from '@/components/sections/gallery'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { Footer } from '@/components/footer'

const P5Background = dynamic(
  () => import('@/components/p5-background').then((mod) => mod.P5Background),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <P5Background />
      <Header />
      <Hero />
      <About />
      <Pricing />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
