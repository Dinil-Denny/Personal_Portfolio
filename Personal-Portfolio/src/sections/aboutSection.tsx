const AboutSection = () => {
    return(
        <section id="about" className="min-h-screen w-full bg-brand-blue flex items-center justify-center p-6 md:p-12 lg:p-24 overflow-hidden">
      
      {/* 
        Main White Card Container
        Uses large border-radius (rounded-[2rem]) to match the soft edges in the design.
      */}
      <div className="relative w-full max-w-6xl bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-12 shadow-2xl">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 flex flex-col items-start space-y-6 md:space-y-8 z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-blue tracking-wide uppercase">
            About Me
          </h2>
          
          <div className="space-y-6 text-base md:text-lg lg:text-lg font-normal text-neutral-900 leading-snug">
            <p>
              Hi, I'm Dinil Denny, a self-taught Full Stack Developer focused on building modern, scalable web applications.
            </p>
            
            <p>
              My journey into tech is unconventional. I transitioned from Electrical Engineering to software development, driven by a deep passion for building scalable, interactive applications. I love solving complex problems and turning ideas into functional, beautiful realities.
            </p>
            
            <div>
              <p>Today I work primarily with:</p>
              <p>JavaScript, TypeScript, Node.js, Express.js, React.js and MongoDB</p>
            </div>
          </div>
        </div>

        {/* Right Column: ID Card SVG */}
        <div className="flex-1 w-full flex justify-center lg:justify-end z-20">
          {/* 
            Negative margin (-mt-16 to -mt-32) pushes the image up so the lanyard 
            straps overlap the top boundary of the white card, recreating the 3D depth of your design.
          */}
          <img 
            src="/src/assets/images/idCard.svg" // Make sure this path points to your actual SVG
            alt="Dinil Denny ID Card" 
            className="w-full max-w-90 md:max-w-125 lg:max-w-162.5 h-auto object-contain drop-shadow-2xl lg:-mt-20"
          />
        </div>
        
      </div>
    </section>
    )
}

export default AboutSection;
