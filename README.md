# Personal Portfolio

My personal portfolio website, built with **React**, **TypeScript**, **Vite** and **Tailwind CSS**. It's a single-page site that introduces who I am, showcases my skills and projects, and lets visitors get in touch through a contact form.

## ✨ Features

- **Hero section** with an animated typing headline, a short intro, and a "View Resume" button that opens my resume PDF
- **About section** with a scroll-driven expand animation that reveals an "About me" card
- **Skills & Tools section** with a badge cloud of the technologies I work with (frontend, backend, databases, cloud, and tooling)
- **Projects section** with a responsive grid of project cards, each with a screenshot, description and GitHub link
- **Contact form** powered by [Web3Forms](https://web3forms.com/), with loading, success and error states
- **Glow cursor effect** with a WebGL-rendered glowing trail that follows the mouse
- **Glassmorphism navbar** that's fixed at the top, with smooth anchor navigation and a mobile menu
- Fully **responsive** layout for mobile, tablet and desktop

## 🛠️ Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool and dev server
- [Tailwind CSS v4](https://tailwindcss.com/) — styling
- [shadcn/ui](https://ui.shadcn.com/) — UI primitives (button, badge, card)
- [React Router](https://reactrouter.com/) — routing
- [GSAP](https://gsap.com/) — text typing animation
- [OGL](https://github.com/oframe/ogl) — WebGL for the glow cursor effect
- [Lucide](https://lucide.dev/) and [Hugeicons](https://hugeicons.com/) — icons
- [Web3Forms](https://web3forms.com/) — contact form email delivery
- ESLint — linting

## 📂 Project Structure

The app lives inside the `Personal-Portfolio/` folder.

```
Personal_Portfolio/
└── Personal-Portfolio/
    ├── public/
    │   ├── icons/                # Skill/tool logos (SVG)
    │   ├── images/               # Hero, skills, ID card and background artwork
    │   └── projectScreenshots/   # Project preview images
    ├── src/
    │   ├── assets/               # Resume PDF
    │   ├── components/
    │   │   ├── custom/           # SkillBadge, ProjectCard
    │   │   ├── layouts/          # Navbar, Footer
    │   │   ├── ui/               # shadcn/ui components
    │   │   ├── GlowCursor.tsx    # WebGL cursor glow effect
    │   │   ├── ScrollExpand.tsx  # Scroll-driven expand animation
    │   │   ├── SpotlightCard.tsx
    │   │   └── TextType.tsx      # Typing text animation
    │   ├── lib/                  # Utility helpers
    │   ├── pages/                # Home page
    │   ├── sections/             # Hero, About, Skills, Projects, Contact
    │   ├── App.tsx               # App layout (navbar + routed content)
    │   ├── main.tsx              # Entry point and router setup
    │   └── index.css             # Global styles and theme
    ├── index.html
    ├── vite.config.ts
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- A free [Web3Forms](https://web3forms.com/) access key (for the contact form)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Dinil-Denny/Personal_Portfolio.git
   cd Personal_Portfolio/Personal-Portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file inside `Personal-Portfolio/` with your Web3Forms access key:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open the URL shown in your terminal (Vite's default is `http://localhost:5173`).

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## 📬 Contact

**Dinil Denny** — Full Stack Developer

- GitHub: [@Dinil-Denny](https://github.com/Dinil-Denny)
- LinkedIn: [Dinil Denny](https://www.linkedin.com/in/dinil-denny-43b882288/)
- Email: dinildenny99@gmail.com
