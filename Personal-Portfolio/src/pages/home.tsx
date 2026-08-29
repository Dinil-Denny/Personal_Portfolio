import HeroSection from "../sections/heroSection";
import AboutSection from "../sections/aboutSection";
import SkillsSection from "../sections/skillsSection";

const Home = () => {
  return (
    <div className="bg-brand-blue flex flex-col h-full">
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
    </div>
  );
};

export default Home;
