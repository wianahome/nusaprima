import dynamic from 'next/dynamic'
import { Header } from '@/components/header'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Gallery } from '@/components/sections/gallery'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { Footer } from '@/components/footer'
import HeroBackground from '@/components/p5/cyanAmber'



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
