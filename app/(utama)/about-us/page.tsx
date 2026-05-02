import { Metadata } from 'next';
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: 'Tentang Kami | Nusaprima Digital Agency',
  description: 'Mengenal lebih dekat Nusaprima, agensi digital terpercaya yang berfokus pada pembuatan website, SEO, dan layanan digital marketing profesional.',
  keywords: ['tentang nusaprima', 'profil nusaprima', 'digital agency indonesia', 'perusahaan pembuat website'],
  openGraph: {
    title: 'Tentang Kami | Nusaprima Digital Agency',
    description: 'Mengenal lebih dekat Nusaprima, agensi digital terpercaya yang berfokus pada pembuatan website, SEO, dan layanan digital marketing profesional.',
    type: 'website',
  },
};


export default function AboutPage () {
  return (
    <main>
      <AboutSection />
    </main>
  )
}