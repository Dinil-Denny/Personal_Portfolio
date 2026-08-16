import HeroSection from "../sections/heroSection";
import AboutSection from "../sections/aboutSection";

const Home = () => {
  return (
    <div className="bg-brand-blue flex flex-col h-full">
      <HeroSection/>
      <AboutSection/>
    </div>
  );
};

export default Home;
