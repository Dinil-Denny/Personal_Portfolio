import HeroSection from "../sections/heroSection";
import AboutSection from "../sections/aboutSection";
import SkillsSection from "../sections/skillsSection";
import GlowCursor from "../components/GlowCursor";

const Home = () => {
  return (
    <GlowCursor
      color="#fece00"
      secondaryColor="#ffffff"
      trailLength={40}
      trailWidth={3}
      trailTaper={0.8}
      followSpeed={0.16}
      glowIntensity={1.9}
      glowSpread={1.2}
      hotspot={0.65}
      brightness={1.25}
      opacity={1}
      pulseSpeed={1.1}
      noiseStrength={0.035}
      idleFade={true}
      idleTimeout={700}
      fadeDuration={900}
      blendMode="screen"
      className="bg-brand-blue"
    >
      {/* 
        This div is crucial. It needs min-h-screen so the cursor 
        canvas knows how tall the page actually is. 
      */}
      <div className="flex flex-col min-h-screen w-full p-0 m-0">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </div>
    </GlowCursor>
  );
};

export default Home;
