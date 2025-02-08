import { AboutPricingSection } from "@/components/homeContent/aboutPricing";
import { CollaborationSection } from "@/components/homeContent/colabSection";
import { CommunicationSection } from "@/components/homeContent/comSection";
import { HeroSection } from "@/components/homeContent/hero";
import { Main } from "@/components/ui/layout/main";
import { PainSection } from "@/components/homeContent/painSection";
import { TeamSection } from "@/components/homeContent/teamSection";

export default function Home() {
  return (
    <>
      <Main>
        <HeroSection />
        <PainSection />
        <TeamSection />
        <CommunicationSection />
        <CollaborationSection />
        <AboutPricingSection />
      </Main>
    </>
  );
}
