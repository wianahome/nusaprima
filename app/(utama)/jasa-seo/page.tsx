import { Metadata } from 'next';
import { FaqSeo } from "@/components/FaqSeo";

export const metadata: Metadata = {
  title: 'Jasa SEO Profesional & Bergaransi Halaman 1 Google | Nusaprima',
  description: 'Tingkatkan trafik organik dan penjualan Anda dengan Jasa SEO dari Nusaprima. Strategi white-hat SEO aman, transparan, dan terbukti masuk halaman 1 Google.',
  keywords: ['jasa seo', 'jasa optimasi seo', 'pakar seo', 'jasa seo bergaransi', 'jasa seo website'],
  openGraph: {
    title: 'Jasa SEO Profesional & Bergaransi Halaman 1 Google | Nusaprima',
    description: 'Tingkatkan trafik organik dan penjualan Anda dengan Jasa SEO dari Nusaprima. Strategi white-hat SEO aman, transparan, dan terbukti masuk halaman 1 Google.',
    type: 'website',
  },
};
import PortfolioSeo from "@/components/PortfolioSeo";
import ProcessSeo from "@/components/ProcessSeo";
import AboutSeo from "@/components/sections/AboutSeo";
import { ContactAds } from "@/components/sections/ContakAds";
import HeroSeo from "@/components/sections/HeroSeo";
import TestimonialSeo from "@/components/TestimonialSeo";



export default function SeoJasa () {
    return (
    <main className="min-h-screen bg-background overflow-x-hidden">
    <HeroSeo />
    <AboutSeo />
    <ProcessSeo />
    <PortfolioSeo />
    <TestimonialSeo />
    <FaqSeo />
    <ContactAds />
    </main>
    )
}