import { Metadata } from 'next';
import GallerySection from "@/components/GallerySection";

export const metadata: Metadata = {
  title: 'Galeri Portofolio & Proyek Website | Nusaprima',
  description: 'Lihat berbagai hasil karya dan portofolio pembuatan website dari tim Nusaprima. Desain modern, responsif, dan disesuaikan dengan kebutuhan bisnis.',
  keywords: ['portofolio website', 'galeri website', 'hasil desain web', 'contoh website nusaprima'],
  openGraph: {
    title: 'Galeri Portofolio & Proyek Website | Nusaprima',
    description: 'Lihat berbagai hasil karya dan portofolio pembuatan website dari tim Nusaprima. Desain modern, responsif, dan disesuaikan dengan kebutuhan bisnis.',
    type: 'website',
  },
};


export default function Gallery (){
  return (
    <main>
      <GallerySection />
    </main>
  )
}