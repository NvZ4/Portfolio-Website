// components/ProjectsSection.jsx
"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import GithubPopup from "./notificationPopup";

const projectsData = [
  {
    title: "Dorm and Campus Virtual Tour",
    tags: ["HTML", "CSS", "Kuula", "Pano2VR"],
    category: "Web Development",
    description:
      "A virtual campus tour website designed to help new students and visitors explore the university remotely. Developed using HTML, CSS, and third-party panorama tools (Pano2VR & Kuula), the application includes interactive hotspots, admin panel for updates, and a 360° campus view.",
    image: "/projects/Virtual-Tour.png",
    githubLink: "https://github.com/",
    documentationLink: null,
  },
  {
    title: "Random Post - Full-Stack Blog Platform",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Passport.js",
      "Google OAuth",
      "Tailwind CSS",
    ],
    category: "Web Development",
    description:
      "A full-stack blogging application that allows users to create, read, update, and delete posts and comments. The project is built with a Node.js/Express backend featuring a RESTful API and a MongoDB database. The authentication system uses Passport.js, supporting local login with JSON Web Tokens (JWT) and login via Google OAuth 2.0. The frontend is developed using React and React Router for navigation, and styled with Tailwind CSS for responsive design.",
    image: "/projects/Random-Post.png",
    githubLink: "https://github.com/NvZ4/Random-Post.git",
    documentationLink: null,
  },
  {
    title: "Security Risk Assessment - Octave Allegro",
    tags: [
      "HTML",
      "CSS",
      "Python",
      "MySQL",
      "JavaScript",
      "Chart.js",
      "Flask",
      "SQLAlchemy",
    ],
    category: ["Web Development", "CyberSecurity"],
    description:
      "A web-based application designed to help organizations identify, assess, and manage cybersecurity risks using the OCTAVE Allegro framework. The system features a multi-step risk assessment workflow, dynamic risk scoring, and an interactive dashboard with data visualizations powered by Chart.js. It allows users to manage critical assets, identify threats, and document mitigation strategies in a structured manner.",
    image: "/projects/Security-Risk-Assessment.png",
    githubLink:
      "https://github.com/NvZ4/Security-Risk-Assessment_Octave-Allegro.git",
  },
  {
    title:
      "P.T. Square Gate One - Information Security System Untuk Malware Analysis",
    tags: [
      "Malware Analysis",
      "Flare VM",
      "Remnux",
      "dnSpy",
      "Wireshark",
      "Procmon",
    ],
    category: "CyberSecurity",
    description:
      "Collaboration final project team with a P.T. Square Gate One to analyze real-world malware, examined how the malware worked using static analysis (studying code without running it), dynamic analysis (observing behavior during execution), and reverse engineering (analyzing the code). Investigate the infection vector & scope of attack, mitigation & remediation plan, and lastly proposed ways to strengthen defense to prevent future incidents",
    image: "/projects/malware-logo.png",
    githubLink: null,
    documentationLink:
      "/docs/Bootcamp-Report_CyberSecurity_Haris-Muhyidin-Shofar_P.T Square-Gate-One.pdf",
  },
  {
    title: "Pet Shop Cashier",
    tags: [
      "Java",
      "Java Swing",
      "MySQL",
      "JDBC",
      "Apache NetBeans",
      "rs2xml (DbUtils)",
    ],
    category: "Software Development",
    description:
      "A comprehensive desktop management system built to streamline daily operations for a pet shop. The application features distinct modules for managing products (pets), customers, users, and product categories, each with full CRUD (Create, Read, Update, Delete) functionality. Its core feature is a point-of-sale (POS) interface for creating customer bills, which automatically updates product inventory in real-time upon transaction completion. Developed using Java Swing for the graphical user interface and connected to a MySQL database via JDBC for persistent data storage.",
    image: "/projects/PetShopCashier.png",
    githubLink: "https://github.com/NvZ4/PetShop-Cashier.git",
    documentationLink: null,
  },
];

const categories = [
  "All",
  "Web Development",
  "CyberSecurity",
  "Software Development",
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showGithubPopup, setShowGithubPopup] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category.includes(activeCategory));

  const handleCategoryClick = (category) => {
    if (category === activeCategory) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsTransitioning(false);
    }, 300);
  };

  const handleReadMore = (project) => {
    setSelectedProject(project);
  };

  const handleGithubIconClick = () => {
    setShowGithubPopup(true);
    setTimeout(() => setShowGithubPopup(false), 2800); // Hides popup after 2.8s
  };

  return (
    <>
      {showGithubPopup && <GithubPopup />}
      <div className="w-full">
        {/* Geometric Tech Category Buttons */}
        <div className="flex justify-center mb-12 flex-wrap gap-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="relative px-6 py-2 font-exo font-semibold text-sm transition-colors duration-300 group"
            >
              <span
                className={
                  activeCategory === category
                    ? "text-white"
                    : "text-gray-400 group-hover:text-white"
                }
              >
                {category}
              </span>

              {/* Unfinished Grid dengan animasi Flicker (hanya muncul saat aktif) */}
              {activeCategory === category && (
                <>
                  <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-white animate-[flicker-in_0.7s_both]"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-white animate-[flicker-in_0.7s_both]"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-white animate-[flicker-in_0.7s_both]"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-white animate-[flicker-in_0.7s_both]"></div>
                </>
              )}
            </button>
          ))}
        </div>
        {/* Grid untuk Proyek dengan Flicker-in Animation */}
        <div
          className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px] content-start 
            transition-all duration-300
            ${
              isTransitioning
                ? "opacity-0"
                : "opacity-100 animate-[flicker-in_0.6s_ease-out]"
            }
          `}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="animate-[flicker-in_0.8s_ease-out]"
                style={{
                  // Staggered flicker animation for each card
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "both",
                }}
              >
                <ProjectCard
                  {...project}
                  onReadMore={() => handleReadMore(project)}
                  onGithubClick={handleGithubIconClick}
                />
              </div>
            ))
          ) : (
            <div
              className="col-span-full text-center text-gray-500 font-jet mt-16 
                           animate-[flicker-in_1s_ease-out] opacity-60"
            >
              <div className="relative inline-block">
                {/* Tech brackets around "No projects" text */}
                <div className="absolute -top-2 -left-4 w-4 h-4 border-l-2 border-t-2 border-gray-600/40" />
                <div className="absolute -bottom-2 -right-4 w-4 h-4 border-r-2 border-b-2 border-gray-600/40" />
                No projects in this category yet.
              </div>
            </div>
          )}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default ProjectsSection;
