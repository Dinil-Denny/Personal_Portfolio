import HeroSection from "../sections/heroSection";
import AboutSection from "../sections/aboutSection";
import SkillsSection from "../sections/skillsSection";
import ProjectSection from "../sections/projectsSection";

import GlowCursor from "../components/GlowCursor";

const Home = () => {
  return (
    <GlowCursor
      color="#67E8F9"
      secondaryColor="#A78BFA"
      trailLength={8}
      trailWidth={2}
      trailTaper={1}
      followSpeed={0.16}
      glowIntensity={1.9}
      glowSpread={0.5}
      hotspot={0.65}
      brightness={1.25}
      opacity={1}
      pulseSpeed={1.1}
      noiseStrength={0.03}
      idleFade
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
        <ProjectSection />
      </div>
    </GlowCursor>
  );
};

export default Home;
