import SkillBadge from "../components/custom/skillBadge";
import type { TechBadgeProps } from "../components/custom/skillBadge";

const skillsData : TechBadgeProps[] = 
  [
    {slNo : 1, text : 'HTML', iconSrc : '../src/assets/icons/html-logo.svg'},
    {slNo : 2, text : 'CSS', iconSrc : '../src/assets/icons/css-logo.svg'},
    {slNo : 3, text : 'Bootstrap', iconSrc : '../src/assets/icons/bootstrap-icon.svg'},
    {slNo : 4, text : 'Tailwind CSS', iconSrc : '../src/assets/icons/tailwind-icon.svg'},
    {slNo : 5, text : 'Shadcn', iconSrc: '../src/assets/icons/shadcn-icon.svg'},
    {slNo : 6, text : 'JavaScript', iconSrc : '../src/assets/icons/js-icon.svg'},
    {slNo : 7, text : 'TypeScript', iconSrc : '../src/assets/icons/ts-icon.svg'},
    {slNo : 8, text : 'Node.js', iconSrc : '../src/assets/icons/node.js-icon.svg'},
    {slNo : 9, text : 'Express.js', iconSrc : '../src/assets/icons/express.js-icon.svg'},
    {slNo : 10, text : 'MongoDB', iconSrc : '../src/assets/icons/mongoDB-icon.svg'},
    {slNo : 11, text : 'PostgreSQL', iconSrc : '../src/assets/icons/postgreSQL-icon.svg'},
    {slNo : 12, text : 'React.js', iconSrc: '../src/assets/icons/react.js-icon.svg'},
    {slNo : 13, text : 'AWS', iconSrc : '../src/assets/icons/aws-icon.svg'},
    {slNo : 14, text : 'Cloudinary', iconSrc : '../src/assets/icons/cloudinary-icon.svg'},
    {slNo : 15, text : 'Git', iconSrc : '../src/assets/icons/git-icon.svg'},
    {slNo : 16, text : 'JWT', iconSrc : '../src/assets/icons/jwt-icon.svg'},
    {slNo : 17, text : 'NPM', iconSrc : '../src/assets/icons/npm-icon.svg'},
    {slNo : 18, text : 'Vite', iconSrc : '../src/assets/icons/vite-icon.svg'},
    {slNo : 19, text : 'Postman', iconSrc : '../src/assets/icons/postman-icon.svg'},
    {slNo : 20, text : 'VS Code', iconSrc : '../src/assets/icons/vscode-icon.svg'},
    {slNo : 21, text : 'Razorpay', iconSrc : '../src/assets/icons/razorpay-icon.svg'},
    {slNo : 22, text : 'Figma', iconSrc : '../src/assets/icons/figma-icon.svg'},
  ]


const SkillsSection = () => {
  return (
    <section id="skills" className="relative w-full min-h-screen bg-[#0d3eb8] flex items-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Heading and Badge Cloud */}
        <div className="flex flex-col items-center lg:items-start z-10 w-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-wide mb-10 md:mb-12">
            Skills & Tools
          </h2>
          
          {/* 
            Badge Container:
            max-w-[600px] constrains the width so the flex-wrap forces the badges 
            into the 3-2-3-2-3 staggered row layout seen in your design.
          */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-5 w-full max-w-[600px]">
            {skillsData.map((skill) => (
              <SkillBadge 
                key={skill.slNo}
                text={skill.text} 
                iconSrc={skill.iconSrc} 
              />
            ))}
          </div>
        </div>

        {/* Right Column: 3D Avatar */}
        <div className="flex justify-center items-center z-10 w-full mt-16 lg:mt-0">
          <div className="relative inline-flex flex-col items-center">
            <img 
              src="../src/assets/images/SkillSectionImg.svg" // Replace with your actual asset path
              alt="3D Avatar pointing to skills" 
              className="w-full max-w-sm md:max-w-lg lg:max-w-2xl h-auto object-contain drop-shadow-2xl"
            />
            {/*ground shadow*/}
            <div className="absolute -bottom-2 w-[50%] h-6 bg-neutral-900/40 rounded-full blur-xl scale-y-75"></div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default SkillsSection;
