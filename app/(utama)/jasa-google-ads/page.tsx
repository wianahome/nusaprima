import { PricingAds } from "@/components/PricingAds";
import { AboutAds } from "@/components/sections/AboutAds";
import { ContactAds } from "@/components/sections/ContakAds";
import { FaqAds } from "@/components/sections/FaqAds";
import { HeroGoogleAds } from "@/components/sections/HeroAds";
import { PortfolioAds } from "@/components/sections/PortofolioAds";
import { ProcessAds } from "@/components/sections/ProcessAds";
import { TestimonialsAds } from "@/components/sections/TstimonialsAds";


export default function GoogleAds () {
    return (
        <>
        <HeroGoogleAds />
        <AboutAds />
        <ProcessAds />
        <PortfolioAds />
        <PricingAds />
        <TestimonialsAds />
        <FaqAds />
        <ContactAds />
        </>
    )
}