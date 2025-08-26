import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CoreServicesSection } from "@/components/CoreServicesSection";
import { CallToActionSection } from "@/components/CallToActionSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StatsSection } from "@/components/StatsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <CoreServicesSection />
      <CallToActionSection />
      <TrustedBySection />
      <TestimonialsSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
