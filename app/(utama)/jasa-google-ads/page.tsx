import { Metadata } from "next";
import { PricingAds } from "@/components/PricingAds";
import { AboutAds } from "@/components/sections/AboutAds";
import { ContactAds } from "@/components/sections/ContakAds";
import { FaqAds } from "@/components/sections/FaqAds";
import { HeroGoogleAds } from "@/components/sections/HeroAds";
import { PortfolioAds } from "@/components/sections/PortofolioAds";
import { ProcessAds } from "@/components/sections/ProcessAds";
import { TestimonialsAds } from "@/components/sections/TstimonialsAds";

export const metadata: Metadata = {
    title: 'Jasa Iklan Google Ads Profesional & Tertarget | Nusaprima',
    description: 'Tingkatkan penjualan bisnis Anda dengan Jasa Google Ads dari Nusaprima. Kami bantu optimasi kampanye iklan agar lebih tertarget, efisien, dan menguntungkan.',
    keywords: ['jasa google ads', 'jasa iklan google', 'pasang iklan google', 'jasa seo sem', 'digital marketing agency'],
    openGraph: {
        title: 'Jasa Iklan Google Ads Profesional & Tertarget | Nusaprima',
        description: 'Tingkatkan penjualan bisnis Anda dengan Jasa Google Ads dari Nusaprima. Kami bantu optimasi kampanye iklan agar lebih tertarget, efisien, dan menguntungkan.',
        type: 'website',
    },
};

export default function GoogleAds() {
    return (
        <>
            <HeroGoogleAds />
            <div id="about" className="scroll-mt-20">
                <AboutAds />
            </div>
            <div id="proses" className="scroll-mt-20">
                <ProcessAds />
            </div>
            <div id="porto" className="scroll-mt-20">
                <PortfolioAds />
            </div>
            <div id="layanan" className="scroll-mt-20">
                <PricingAds />
            </div>
            <div id="testimoni" className="scroll-mt-20">
                <TestimonialsAds />
            </div>
            <div id="faq" className="scroll-mt-20">
                <FaqAds />
            </div>
            <div id="kontak" className="scroll-mt-20">
                <ContactAds />
            </div>
        </>
    )
}