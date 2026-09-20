import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { FourPillarsSection } from "@/components/sections/FourPillarsSection";
import { ChooseDomainSection } from "@/components/sections/ChooseDomainSection";
import { OurProjectSection } from "@/components/sections/OurProjectSection";
import { RecruitmentCtaSection } from "@/components/sections/RecruitmentCtaSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#0B0712] text-white flex flex-col">
      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Four Pillars of Innovation Section */}
      <FourPillarsSection />

      {/* Choose Your Domain Section */}
      <ChooseDomainSection />

      {/* What Our Sorcery Create (Our Project) Section */}
      <OurProjectSection />

      {/* Recruitment CTA Section */}
      <RecruitmentCtaSection />

      {/* Footer (Figma Node 765-17156) */}
      <Footer />
    </main>
  );
}
