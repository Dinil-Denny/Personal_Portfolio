import ProjectCard from "../components/custom/projectCard";
import type { ProjectDetails } from "../components/custom/projectCard";

const projectDetails: ProjectDetails[] = [
  { id: 1, heading: "Lifeboat", description: "Lifeboat — a full-stack crowdfunding platform (MERN + TypeScript) enabling verified fundraising for medical emergencies, education, and disaster relief.", imageSrc: '../src/assets/projectScreenshots/Lifeboat.png', gitHubLink: "https://github.com/Dinil-Denny/Lifeboat_new" },
  { id: 2, heading: "Admin User Manager", description: "A full-stack MERN application for user and admin management, built with a type-safe, clean/layered architecture on the backend (Repository Pattern) and a modern React + shadcn/ui frontend.", imageSrc: "../src/assets/projectScreenshots/AdminUserManagement.png", gitHubLink: "https://github.com/Dinil-Denny/UserManagementApp" },
  { id: 3, heading: "UFO", description: "A full-stack e-commerce web application built with Express.js, following the MVC (Model-View-Controller) architecture, with a server-rendered frontend using Handlebars (hbs), HTML, and Bootstrap.", imageSrc: "../src/assets/projectScreenshots/UFO.png", gitHubLink: "https://github.com/Dinil-Denny/UFO" },
  { id: 4, heading: "Netflix clone", description: "A responsive streaming platform replica featuring dynamic API integration for fetching media catalogs and interactive content carousels. Built with React to demonstrate efficient state management and modern UI implementation.", imageSrc: "../src/assets/projectScreenshots/Netflix.png", gitHubLink: "https://github.com/Dinil-Denny/NetflixClone" },
  { id: 5, heading: "ToDo App", description: "A React-based to-do app that lets users add tasks, mark them as done, and delete them through a simple, clean interface.", imageSrc: "../src/assets/projectScreenshots/ToDoApp.png", gitHubLink: "https://github.com/Dinil-Denny/ToDo_App_React" },
  { id: 6, heading: "Personal Portfolio - old", description: "A responsive personal portfolio website built using the W3Layouts template, featuring sections for certificates and project showcases.", imageSrc: "../src/assets/projectScreenshots/PersonalProtfolioOld.png", gitHubLink: "https://github.com/Dinil-Denny/PersonalWeb" },
];

const ProjectSection = () => {
  return (
    <section id="project" className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-wide mb-10 md:mb-16 text-center lg:text-left">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          {projectDetails.map((project) => (
            <ProjectCard
              key={project.id}
              heading={project.heading}
              description={project.description}
              gitHubLink={project.gitHubLink}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
