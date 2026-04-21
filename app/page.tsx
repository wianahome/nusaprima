'use client'

import dynamic from 'next/dynamic'
import { Header } from '@/components/header'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Gallery } from '@/components/sections/gallery'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { Footer } from '@/components/footer'
import HeroBackground from '@/components/p5/cyanAmber'

const P5Background = dynamic(
  () => import('@/components/p5-background').then((mod) => mod.P5Background),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <About />
      <Gallery />
      <Testimonials />
      <FAQ />
    </main>
  )
}
