import BackgroundEffects from "@/components/BackgroundEffects";
import GridBackground from "@/components/GridBackground";
import MouseGlow from "@/components/MouseGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedArticle from "@/components/FeaturedArticle";
import TrendingSection from "@/components/TrendingSection";
import Categories from "@/components/Categories";
import Timeline from "@/components/Timeline";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0F19] text-white">
      {/* Background */}
      <BackgroundEffects />
      <GridBackground />
      <MouseGlow />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <FeaturedArticle />
        <TrendingSection />
        <Categories />
        <Timeline />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}