import Nav from "./components/Nav";
import TestimonialCarousel from "./components/footer";

// Sections
import HeroSection from "./components/sections/HeroSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import TrustSection from "./components/sections/TrustSection";
import ConciergeSection from "./components/sections/ConciergeSection";
import ProofSection from "./components/sections/ProofSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import FamilySection from "./components/sections/FamilySection";
import ProcessSection from "./components/sections/ProcessSection";
import FamilyStorySection from "./components/sections/FamilyStorySection";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <HeroSection />
      <FeaturesSection />
      <TrustSection />
      <ConciergeSection />
      <ProofSection />
      <ExperienceSection />
      <FamilySection />
      <ProcessSection />
      <FamilyStorySection />
      <TestimonialCarousel />
    </div>
  );
}
