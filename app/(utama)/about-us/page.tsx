import { Metadata } from 'next'
import AboutSection from '@/components/AboutSection'
import { BASE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Tentang Kami | Nusaprima Digital Agency',
  description: 'Mengenal lebih dekat Nusaprima, agensi digital terpercaya yang berfokus pada pembuatan website, SEO, dan layanan digital marketing profesional.',
  keywords: ['tentang nusaprima', 'profil nusaprima', 'digital agency indonesia', 'perusahaan pembuat website'],
  openGraph: {
    title: 'Tentang Kami | Nusaprima Digital Agency',
    description: 'Mengenal lebih dekat Nusaprima, agensi digital terpercaya yang berfokus pada pembuatan website, SEO, dan layanan digital marketing profesional.',
    type: 'website',
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'Tentang Nusaprima Digital' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang Kami | Nusaprima Digital Agency',
    description: 'Mengenal lebih dekat Nusaprima, agensi digital terpercaya.',
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/about-us`,
  },
}

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
    </main>
  )
}
