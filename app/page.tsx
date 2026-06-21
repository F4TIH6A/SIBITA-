import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import StatsSection from "./_components/StatsSection";
import FeaturesSection from "./_components/FeaturesSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
      </main>
      <Footer />
    </>
  );
}
