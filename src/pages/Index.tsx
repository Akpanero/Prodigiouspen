import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorkWithMeSection from "@/components/WorkWithMeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
      <WorkWithMeSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
