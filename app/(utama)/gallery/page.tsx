import { Metadata } from 'next'
import GallerySection from '@/components/GallerySection'
import { BASE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Galeri Portofolio & Proyek Website | Nusaprima',
  description: 'Lihat berbagai hasil karya dan portofolio pembuatan website dari tim Nusaprima. Desain modern, responsif, dan disesuaikan dengan kebutuhan bisnis.',
  keywords: ['portofolio website', 'galeri website', 'hasil desain web', 'contoh website nusaprima'],
  openGraph: {
    title: 'Galeri Portofolio & Proyek Website | Nusaprima',
    description: 'Lihat berbagai hasil karya dan portofolio pembuatan website dari tim Nusaprima. Desain modern, responsif, dan disesuaikan dengan kebutuhan bisnis.',
    type: 'website',
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'Portofolio Nusaprima Digital' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galeri Portofolio & Proyek Website | Nusaprima',
    description: 'Lihat berbagai hasil karya dan portofolio pembuatan website dari tim Nusaprima.',
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/gallery`,
  },
}

export default function Gallery() {
  return (
    <main>
      <GallerySection />
    </main>
  )
}
