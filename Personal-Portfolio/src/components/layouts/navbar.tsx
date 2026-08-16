import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#project" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto md:max-w-fit">
      {/* 
        Glassmorphism Container:
      */}
      <nav className="flex items-center justify-between px-2 py-2 rounded-full border border-white/20 bg-white/10 p-6 text-white shadow-xl backdrop-blur-md">
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="px-5 py-2 text-sm font-medium  text-white/80 dark:text-neutral-200 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center justify-between w-full px-4 py-1">
          <span className="text-sm font-medium text-white/80 dark:text-neutral-200">
            Menu
          </span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 rounded-full text-white/80 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (Also uses glassmorphism) */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-3 p-2 rounded-3xl border-white/20 bg-white/10 text-white shadow-xl backdrop-blur-md md:hidden flex flex-col space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-white/80 dark:text-neutral-200 text-center rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;

// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Project", href: "#project" },
//   { name: "Journey", href: "#journey" },
//   { name: "Contact", href: "#contact" },
// ];
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="absolute top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto md:max-w-fit">
      
//       <nav className="flex items-center justify-between px-2 py-2 rounded-full bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl backdrop-saturate-150 border border-white/20 dark:border-white/10 shadow-sm">
        
//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex items-center space-x-1">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <a
//                 href={link.href}
//                 className="px-5 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Navigation Toggle */}
//         <div className="md:hidden flex items-center justify-between w-full px-4 py-1">
//           <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
//             Menu
//           </span>
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="p-1 rounded-full text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="absolute top-full left-0 right-0 mt-3 p-2 rounded-3xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl backdrop-saturate-150 border border-white/20 dark:border-white/10 shadow-lg md:hidden flex flex-col space-y-1">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className="block px-4 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-200 text-center rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;