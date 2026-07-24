import { Metadata } from 'next'
import { Services } from '@/components/sections/services'
import { BASE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Layanan Digital Marketing & Pembuatan Website | Nusaprima',
  description: 'Eksplorasi layanan terbaik dari Nusaprima: Pembuatan Website, Jasa SEO, dan Google Ads untuk mengembangkan bisnis Anda ke level selanjutnya.',
  keywords: ['layanan digital marketing', 'jasa website', 'layanan seo', 'jasa google ads', 'nusaprima services'],
  openGraph: {
    title: 'Layanan Digital Marketing & Pembuatan Website | Nusaprima',
    description: 'Eksplorasi layanan terbaik dari Nusaprima: Pembuatan Website, Jasa SEO, dan Google Ads untuk mengembangkan bisnis Anda ke level selanjutnya.',
    type: 'website',
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'Layanan Nusaprima Digital' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Layanan Digital Marketing & Pembuatan Website | Nusaprima',
    description: 'Eksplorasi layanan terbaik dari Nusaprima: Pembuatan Website, Jasa SEO, dan Google Ads.',
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
}

export default function ServicesPage() {
  return <Services />
}
