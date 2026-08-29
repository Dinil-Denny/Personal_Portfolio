export interface TechBadgeProps {
  slNo?: number;
  text: string;
  iconSrc: string;
  customClass?: string; //if we want to style a component in custom way
}

const SkillBadge = ({ text, iconSrc, customClass }: TechBadgeProps) => {
  return (
    <div className="inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-sm transition-transform hover:scale-105 cursor-default">
      {/*Icon Container*/}
      <div className="flex items-center justify-center min-w-10 h-10 rounded-xl overflow-hidden shrink-0">
        <img
          src={iconSrc}
          alt={`${text} icon`}
          className={
            customClass
              ? `${customClass}`
              : "w-full h-full scale-150 object-contain p-0"
          }
        />
      </div>

      {/* Text Label */}
      <span className="text-white text-lg font-medium tracking-wide">
        {text}
      </span>
    </div>
  );
};

export default SkillBadge;
