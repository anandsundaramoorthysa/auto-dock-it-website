import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SelfHealing } from "@/components/sections/self-healing";
import { Features } from "@/components/sections/features";
import { Comparison } from "@/components/sections/comparison";
import { Screenshots } from "@/components/sections/screenshots";
import { Demos } from "@/components/sections/demos";
import { Credibility } from "@/components/sections/credibility";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { jsonLd, faqPageLd } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqPageLd) }}
      />
      <Nav />
      <main id="main">
        <Hero />
        <HowItWorks />
        <SelfHealing />
        <Features />
        <Comparison />
        <Screenshots />
        <Demos />
        <Credibility />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
