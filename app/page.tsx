import dynamic from 'next/dynamic'
import { Header } from '@/components/header'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Gallery } from '@/components/sections/gallery'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { Footer } from '@/components/footer'
import HeroBackground from '@/components/p5/cyanAmber'



export default function Home ({searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Mengambil keyword dari URL, fallback ke kata kunci default jika tidak ada
  const keyword = typeof searchParams.keyword === 'string' ? searchParams.keyword : 'Nusaprima Digital';



  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero keyword={keyword} />
      <About keyword={keyword} />
      <Gallery keyword={keyword} />
      <Testimonials />
      <FAQ />
    </main>
  )
}
