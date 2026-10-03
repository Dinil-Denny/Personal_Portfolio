import SkillBadge from "../components/custom/skillBadge";
import type { TechBadgeProps } from "../components/custom/skillBadge";

const skillsData : TechBadgeProps[] = 
  [
    {slNo : 1, text : 'HTML', iconSrc : '/icons/html-logo.svg'},
    {slNo : 2, text : 'CSS', iconSrc : '/icons/css-logo.svg'},
    {slNo : 3, text : 'Bootstrap', iconSrc : '/icons/bootstrap-icon.svg'},
    {slNo : 4, text : 'Tailwind CSS', iconSrc : '/icons/tailwind-icon.svg'},
    {slNo : 5, text : 'Shadcn', iconSrc: '/icons/shadcn-icon.svg'},
    {slNo : 6, text : 'JavaScript', iconSrc : '/icons/js-icon.svg'},
    {slNo : 7, text : 'TypeScript', iconSrc : '/icons/ts-icon.svg'},
    {slNo : 8, text : 'Node.js', iconSrc : '/icons/node.js-icon.svg'},
    {slNo : 9, text : 'Express.js', iconSrc : '/icons/express.js-icon.svg'},
    {slNo : 10, text : 'MongoDB', iconSrc : '/icons/mongoDB-icon.svg'},
    {slNo : 11, text : 'PostgreSQL', iconSrc : '/icons/postgreSQL-icon.svg'},
    {slNo : 12, text : 'React.js', iconSrc: '/icons/react.js-icon.svg'},
    {slNo : 13, text : 'AWS', iconSrc : '/icons/aws-icon.svg'},
    {slNo : 14, text : 'Cloudinary', iconSrc : '/icons/cloudinary-icon.svg'},
    {slNo : 15, text : 'Git', iconSrc : '/icons/git-icon.svg'},
    {slNo : 16, text : 'JWT', iconSrc : '/icons/jwt-icon.svg'},
    {slNo : 17, text : 'NPM', iconSrc : '/icons/npm-icon.svg'},
    {slNo : 18, text : 'Vite', iconSrc : '/icons/vite-icon.svg'},
    {slNo : 19, text : 'Postman', iconSrc : '/icons/postman-icon.svg'},
    {slNo : 20, text : 'VS Code', iconSrc : '/icons/vscode-icon.svg'},
    {slNo : 21, text : 'Razorpay', iconSrc : '/icons/razorpay-icon.svg'},
    {slNo : 22, text : 'Figma', iconSrc : '/icons/figma-icon.svg'},
    {slNo : 23, text : 'Jira', iconSrc : '/icons/Jira-icon.svg'},
    {slNo : 24, text : 'Jenkins', iconSrc : '/icons/Jenkins-icon.svg'},
  ]


const SkillsSection = () => {
  return (
    <section id="skills" className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Heading and Badge Cloud */}
        <div className="flex flex-col items-center lg:items-start z-10 w-full">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-wide mb-10 md:mb-12">
            Skills & Tools
          </h2>
          
          {/* 
            Badge Container:
            max-w-[600px] constrains the width so the flex-wrap forces the badges 
            into the 3-2-3-2-3 staggered row layout seen in your design.
          */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-5 w-full max-w-full">
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
              src="/images/SkillSectionImg.svg" // Replace with your actual asset path
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
