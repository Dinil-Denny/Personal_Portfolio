import { Button } from '../components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-brand-blue flex items-center overflow-hidden">
      {/* 
        Container for max-width and centering 
        px adjusts horizontal padding based on screen size
      */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Typography & Call to Action */}
        <div className="flex flex-col items-start z-10 space-y-8 mt-24 md:mt-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] uppercase tracking-tight drop-shadow-sm">
            Building<br />
            Digital<br />
            Experiences<br />
            With Code.
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-brand-yellow font-semibold leading-snug max-w-xl">
            I'm Dinil Denny, a Full Stack Developer specializing in crafting
            robust, scalable applications using React, TypeScript, Node,
            and MongoDB.
          </p>

          <Button 
            size="lg"
            className="bg-brand-orange hover:bg-[#e06900] hover:cursor-pointer text-white font-bold text-lg px-10 py-7 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            View Resume
          </Button>
        </div>

        {/* Right Column: 3D Avatar */}
        <div className="flex justify-center lg:justify-end items-center z-10 w-full mt-10 lg:mt-0">
          <img 
            src="/src/assets/images/HeroImg3D.svg"
            alt="3D Avatar" 
            className="w-full max-w-sm md:max-w-lg lg:max-w-2xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
