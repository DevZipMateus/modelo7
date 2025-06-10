
import Aurora from "@/components/Aurora";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#5227FF", "#00ff87", "#ff006e"]}
          amplitude={1.2}
          blend={0.6}
          speed={0.8}
        />
      </div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-5" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <HeroSection />
    </div>
  );
};

export default Index;
