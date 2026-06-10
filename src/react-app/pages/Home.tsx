import Navbar from "@/react-app/components/Navbar";
import HeroSection from "@/react-app/components/HeroSection";
import AboutSection from "@/react-app/components/AboutSection";
import ExpertiseSection from "@/react-app/components/ExpertiseSection";
import TherapyHelpsSection from "@/react-app/components/TherapyHelpsSection";
import FirstSessionSection from "@/react-app/components/FirstSessionSection";
import ContactSection from "@/react-app/components/ContactSection";
import Footer from "@/react-app/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <TherapyHelpsSection />
      <FirstSessionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
