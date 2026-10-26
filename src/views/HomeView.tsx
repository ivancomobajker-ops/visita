import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { getDictionary, pageMetadata, type Locale } from "@/i18n";

export function homeMetadata(lang: Locale) {
  const t = getDictionary(lang).meta;
  return pageMetadata(lang, "/", { title: t.homeTitle, description: t.homeDescription });
}

export default function HomeView({ lang }: { lang: Locale }) {
  return (
    <>
      <Header />
      <main>
        <Hero lang={lang} />
        <SocialProof />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <Pricing />
        <CtaBanner />
        <FAQ />
      </main>
      <Footer lang={lang} />
    </>
  );
}
