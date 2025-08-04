// components/SkillsSection.jsx
"use client";

import { useState, useEffect } from "react";
import SkillCard from "./SkillCard";
// ... (impor ikon Anda yang lain)
import {
  FaJava,
  FaPython,
  FaJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaAndroid,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiApachenetbeanside,
  SiExpress,
} from "react-icons/si";
import { TbDeviceDesktopSearch } from "react-icons/tb";
import { VscTerminalCmd } from "react-icons/vsc";
import { GiWireCoil, GiNautilusShell, GiBugNet } from "react-icons/gi";
import { BiLogoBlender } from "react-icons/bi";


const skillsData = {
  Language: [
    { name: "Java", level: "Advanced", icon: FaJava },
    { name: "Python", level: "Intermediate", icon: FaPython },
    { name: "JavaScript", level: "Advanced", icon: FaJs },
    { name: "PHP", level: "Learning", icon: FaPhp },
  ],
  "Web Development": [
    { name: "HTML", level: "Comfortable", icon: FaHtml5 },
    { name: "CSS", level: "Advanced", icon: FaCss3Alt },
    { name: "TailwindCSS", level: "Intermediate", icon: SiTailwindcss },
    { name: "React", level: "Intermediate", icon: FaReact },
    { name: "Node.js", level: "Advanced", icon: FaNodeJs },
    { name: "Next.js", level: "Learning", icon: SiNextdotjs },
    { name: "MongoDB", level: "Intermediate", icon: SiMongodb },
    { name: "Vite", level: "Intermediate", icon: SiVite },
    { name: "MySQL", level: "Advanced", icon: SiMysql },
    { name: "Express.js", level: "Learning", icon: SiExpress },
  ],
  CyberSecurity: [
    { name: "Wireshark", level: "Intermediate", icon: GiWireCoil },
    { name: "Nmap", level: "Intermediate", icon: GiNautilusShell },
    { name: "BurpSuite", level: "Intermediate", icon: GiBugNet },
    { name: "Autopsy", level: "Intermediate", icon: TbDeviceDesktopSearch },
    { name: "Remnux", level: "Advanced", icon: VscTerminalCmd },
    { name: "FlareVM", level: "Advanced", icon: VscTerminalCmd },
  ],
  Tools: [
    {
      name: "VS Code",
      level: "Comfortable",
      icon: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
    },
    { name: "Figma", level: "Intermediate", icon: FaFigma },
    { name: "CMD", level: "Advanced", icon: VscTerminalCmd },
    { name: "Android Studio", level: "Intermediate", icon: FaAndroid },
    { name: "Git", level: "Advanced", icon: FaGitAlt },
    { name: "GitHub", level: "Advanced", icon: FaGithub },
    { name: "Blender3D", level: "Intermediate", icon: BiLogoBlender },
    { name: "Apache NetBeans", level: "Intermediate", icon: SiApachenetbeanside }
  ],
};

const categories = Object.keys(skillsData);

const levelStyles = {
  Learning: {
    text: "text-gray-400",
    bg: "bg-gray-400",
    shadow: "theme(colors.gray.400)",
  },
  Intermediate: {
    text: "text-yellow-400",
    bg: "bg-yellow-400",
    shadow: "theme(colors.yellow.400)",
  },
  Advanced: {
    text: "text-blue-400",
    bg: "bg-blue-400",
    shadow: "theme(colors.blue.400)",
  },
  Comfortable: {
    text: "text-green-400",
    bg: "bg-green-400",
    shadow: "theme(colors.green.400)",
  },
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const [isTransitioning, setIsTransitioning] = useState(false);


  const handleTabClick = (category) => {
    if (category === activeCategory) return; 

    setIsTransitioning(true); 


    setTimeout(() => {
      setActiveCategory(category);
      setIsTransitioning(false); // Mulai transisi fade-in
    }, 200);
  };

  return (
  <div className="w-full">
      {/* 1. Sistem TABS dengan desain baru */}
      <div className="flex justify-center mb-16 flex-wrap gap-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            // Kontainer tombol dibuat relative
            className="relative px-6 py-2 font-exo font-semibold text-sm transition-colors duration-300 group"
          >
            <span className={activeCategory === category ? 'text-white' : 'text-gray-400 group-hover:text-white'}>
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

      {/* 2. Grid untuk menampilkan skills dengan transisi flicker */}
      <div 
        key={activeCategory} 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[420px] content-start"
      >
        {skillsData[activeCategory].map((skill, index) => (
          <div 
            key={skill.name}
            
            className="animate-[flicker-in_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${index * 70}ms`, opacity: 0 }}
          >
            <SkillCard 
              name={skill.name} 
              level={skill.level}
              icon={skill.icon}
              colorClasses={levelStyles[skill.level]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
