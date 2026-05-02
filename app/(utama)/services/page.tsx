import { Metadata } from 'next';
import { Services } from "@/components/sections/services";

export const metadata: Metadata = {
  title: 'Layanan Digital Marketing & Pembuatan Website | Nusaprima',
  description: 'Eksplorasi layanan terbaik dari Nusaprima: Pembuatan Website, Jasa SEO, dan Google Ads untuk mengembangkan bisnis Anda ke level selanjutnya.',
  keywords: ['layanan digital marketing', 'jasa website', 'layanan seo', 'jasa google ads', 'nusaprima services'],
  openGraph: {
    title: 'Layanan Digital Marketing & Pembuatan Website | Nusaprima',
    description: 'Eksplorasi layanan terbaik dari Nusaprima: Pembuatan Website, Jasa SEO, dan Google Ads untuk mengembangkan bisnis Anda ke level selanjutnya.',
    type: 'website',
  },
};

export default function Home () {
    return (
        <Services />
    )
}