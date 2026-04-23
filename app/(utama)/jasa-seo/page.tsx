import { FaqSeo } from "@/components/FaqSeo";
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