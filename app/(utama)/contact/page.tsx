import { Metadata } from 'next'
import ContactSection from '@/components/kontak'
import { BASE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Hubungi Kami | Nusaprima Digital Agency',
  description: 'Punya pertanyaan atau butuh konsultasi mengenai pembuatan website, SEO, dan Google Ads? Hubungi tim Nusaprima sekarang. Kami siap membantu Anda.',
  keywords: ['kontak nusaprima', 'hubungi kami', 'konsultasi website', 'alamat nusaprima'],
  openGraph: {
    title: 'Hubungi Kami | Nusaprima Digital Agency',
    description: 'Punya pertanyaan atau butuh konsultasi mengenai pembuatan website, SEO, dan Google Ads? Hubungi tim Nusaprima sekarang.',
    type: 'website',
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'Kontak Nusaprima Digital' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hubungi Kami | Nusaprima Digital Agency',
    description: 'Hubungi tim Nusaprima untuk konsultasi website, SEO, dan Google Ads.',
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
}

export default function Kontak() {
  return (
    <main>
      <ContactSection />
    </main>
  )
}
