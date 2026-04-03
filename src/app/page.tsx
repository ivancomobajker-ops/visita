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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <Pricing />
        <CtaBanner />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
