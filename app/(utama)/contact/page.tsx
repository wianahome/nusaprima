import { Metadata } from 'next';
import ContactSection from "@/components/kontak";

export const metadata: Metadata = {
  title: 'Hubungi Kami | Nusaprima Digital Agency',
  description: 'Punya pertanyaan atau butuh konsultasi mengenai pembuatan website, SEO, dan Google Ads? Hubungi tim Nusaprima sekarang. Kami siap membantu Anda.',
  keywords: ['kontak nusaprima', 'hubungi kami', 'konsultasi website', 'alamat nusaprima'],
  openGraph: {
    title: 'Hubungi Kami | Nusaprima Digital Agency',
    description: 'Punya pertanyaan atau butuh konsultasi mengenai pembuatan website, SEO, dan Google Ads? Hubungi tim Nusaprima sekarang. Kami siap membantu Anda.',
    type: 'website',
  },
};



export default function Kontak () {
    return (
        <main>
        <ContactSection />
        </main>
    )
}