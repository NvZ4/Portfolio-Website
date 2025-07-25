// page.js

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import HRS from "../images/HARIS-MUHYIDIN-SHOFAR.jpg";

// Komponen dari library Anda
import Thread from "../components/reactBit/thread";
// Komponen bingkai foto yang kita buat
import PhotoFrame from "../components/photoFrame";
import SocialLinks from "@/components/socialLink";
import { FaDownload, FaArrowUp } from "react-icons/fa";
import AnimatedButton from "../components/animatedButton";
import useTextScramble from "../hooks/useTextScramble";
import StatCard from "../components/statCards";
import GeometricBackground from "../components/geometricBackground";
import EducationItem from "../components/educationItems";
import SkillsSection from "../components/SkillsSection";
import RotatingRings from "../components/RotatingRings";
import ProjectsSection from "../components/ProjectsSection";
import WireframeBackground from "../components/WireFrameBackground";
import ContactForm from "../components/HologramForm";
import ContactGeometryBackground from "@/components/ContactGeometricBackground";

// 1. Mengubah navItems untuk scrolling, href menunjuk ke ID section
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About me", href: "#about" },
  { name: "Educations", href: "#educations" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const educationData = [
  {
    title: "Senior HighSchool",
    institution: "SMAN 1 Majalengka",
    date: "Jul 2019 - Jun 2022",
  },
  {
    title: "Undergraduate Bachelor Information Technology - Cyber Security",
    institution: "President University",
    date: "Sep 2023 - Present",
  },
  {
    title: "KADA(Korean Asean Digital Academy) Boothcamp",
    institution: "BPPTIK",
    date: "Jun 2025 - Aug 2025",
  },
  // Tambahkan riwayat edukasi lain di sini
];

const HomePage = () => {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroTitleLine1 = "HARIS MUHYIDIN";
  const heroTitleLine2 = "SHOFAR";
  const heroParagraph =
    "Building modern web experiences with creative design at their core.";
  const animatedTitle1 = useTextScramble(heroTitleLine1, { speed: 20 });
  const animatedTitle2 = useTextScramble(heroTitleLine2, { speed: 20 });
  const animatedParagraph = useTextScramble(heroParagraph, { speed: 20 });

  const [lineStyle, setLineStyle] = useState({ width: 0, left: 0 });

  // 2. State dan Refs untuk Intersection Observer
  const sectionRefs = useRef({});
  const navLinkRefs = useRef([]);

  useEffect(() => {
    // 3. Logic Intersection Observer untuk mendeteksi section saat scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Mengambil nama section dari ID-nya untuk update state 'active'
            const activeName = navItems.find(
              (item) => `#${entry.target.id}` === item.href
            )?.name;
            if (activeName) {
              setActive(activeName);
            }
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" } // Opsi: section dianggap aktif saat berada di 30% atas layar
    );

    // Memberi tahu observer untuk mengamati setiap section
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Membersihkan observer saat komponen di-unmount
    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []); // useEffect hanya berjalan sekali saat komponen mount

  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => item.name === active);
    const activeLinkEl = navLinkRefs.current[activeIndex];

    if (activeLinkEl) {
      setLineStyle({
        width: activeLinkEl.offsetWidth,
        left: activeLinkEl.offsetLeft,
      });
    }
  }, [active]);

  const scrollToTop = (e) => {
    e.preventDefault(); // ← Mencegah reload
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // font-jet diterapkan ke seluruh halaman
    <main className="font-jet bg-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 p-3 sm:p-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          {/* Kontainer Logo */}
          <div
            className="corner-brackets rounded-lg animate-[fade-in-down_0.5s_ease-out_forwards]"
            style={{ animationDelay: "200ms", opacity: 0 }}
          >
            <a
              href="#home"
              className="flex items-center space-x-3 rtl:space-x-reverse p-2"
            >
              <span className="self-center text-xl sm:text-2xl whitespace-nowrap text-white font-exo">
                HMS
              </span>
            </a>
          </div>

          {/* Tombol Hamburger - Enhanced for mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg lg:hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
            aria-controls="navbar-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Kontainer Menu - Better mobile handling */}
          <div
            className={`${
              isMenuOpen ? "block w-full mt-4" : "hidden"
            } lg:block lg:w-auto`}
          >
            <div
              className="corner-brackets rounded-lg p-1 animate-[fade-in-down_0.5s_ease-out_forwards]"
              style={{ animationDelay: "400ms", opacity: 0 }}
            >
              <ul className="relative flex flex-col lg:flex-row font-exo font-medium bg-black/20 lg:bg-transparent rounded-lg lg:rounded-none backdrop-blur-sm lg:backdrop-blur-none">
                {navItems.map((item, index) => (
                  <li key={item.name}>
                    <a
                      ref={(el) => (navLinkRefs.current[index] = el)}
                      href={item.href}
                      onClick={() => {
                        setActive(item.name);
                        setIsMenuOpen(false);
                      }}
                      // KEMBALIKAN STYLE UNTUK LINK AKTIF
                      className={`block relative transition-all duration-300 ease-in-out px-3 sm:px-4 py-2 text-sm rounded-md group ${
                        active === item.name
                          ? "text-white bg-white/10"
                          : "text-gray-400 hover:text-white"
                      }`}
                      style={
                        active === item.name
                          ? {
                              clipPath:
                                "polygon(0% 100%, 0% 15%, 15% 0%, 100% 0%, 100% 85%, 85% 100%)",
                            }
                          : {}
                      }
                    >
                      <span className="reticle-hover"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
                {/* Garis Horizontal Animasi - Hidden on mobile */}
                <div
                  className="absolute bottom-0 h-0.5 bg-white transition-all duration-500 ease-in-out hidden lg:block"
                  style={{
                    left: lineStyle.left,
                    width: lineStyle.width,
                    boxShadow: "0 0 8px theme(colors.white)",
                  }}
                ></div>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* 5. Section Home (Hero) - Enhanced responsive */}
      <section
        id="home"
        ref={(el) => (sectionRefs.current["home"] = el)}
        className="relative h-screen flex items-center justify-center"
      >
        {/* Latar Belakang Threads */}
        <div className="absolute inset-0 z-0">
          <Thread amplitude={0.5} distance={0} enableMouseInteraction={false} />
        </div>

        {/* Konten Hero di atas Latar Belakang - Better responsive layout */}
        <div className="relative z-10 max-w-screen-xl w-full mx-auto flex flex-col lg:flex-row items-center justify-around px-4 sm:px-6 lg:px-8 gap-8 lg:gap-0">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            {/* 1. Modifikasi kontainer Judul - Responsive text sizes */}
            <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-exo font-bold text-white mb-4 sm:mb-6">
              {/* Teks asli sebagai placeholder, dibuat tidak terlihat */}
              <span className="block opacity-0">{heroTitleLine1}</span>
              <span className="block opacity-0">{heroTitleLine2}</span>

              {/* Teks animasi diletakkan di atasnya dengan posisi absolute */}
              <div className="absolute inset-0">
                <span className="block">{animatedTitle1}</span>
                <span className="block">{animatedTitle2}</span>
              </div>
            </h1>

            {/* 2. Modifikasi kontainer Paragraf - Responsive text */}
            <div className="relative text-base sm:text-lg lg:text-xl text-gray-300 max-w-sm sm:max-w-md">
              {/* Teks asli sebagai placeholder, dibuat tidak terlihat */}
              <p className="opacity-0">{heroParagraph}</p>

              {/* Teks animasi diletakkan di atasnya dengan posisi absolute */}
              <div className="absolute inset-0">{animatedParagraph}</div>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col items-center lg:items-start gap-4 sm:gap-6">
              <SocialLinks />
              <AnimatedButton href="/docs/Haris-Muhyidin-Shofar_CV-&-Resume.rar">
                <FaDownload />
                <span className="text-sm sm:text-base">
                  Download CV & Resume
                </span>
              </AnimatedButton>
            </div>
          </div>

          {/* Photo Frame - Better mobile positioning */}
          <div className="order-1 lg:order-2 mb-4 lg:mb-0">
            <div className="scale-75 sm:scale-90 lg:scale-100">
              <PhotoFrame src={HRS} alt="My Profile Picture" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. About Section - Enhanced responsive */}
      <section
        id="about"
        ref={(el) => (sectionRefs.current["about"] = el)}
        className="relative min-h-screen py-16 sm:py-20 lg:py-24 flex items-center bg-[#0a0a0a] overflow-hidden"
      >
        {/* Latar Belakang Geometris */}
        <GeometricBackground />

        {/* Konten Utama - Better responsive grid */}
        <div className="relative z-10 max-w-screen-xl mx-auto w-full grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 lg:px-8">
          {/* Kolom Kiri: Judul */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-exo font-bold text-white">
              <span className="text-white/40">{"// 01."}</span> <br /> ABOUT ME
            </h2>
          </div>

          {/* Kolom Kanan: Konten */}
          <div className="lg:col-span-8">
            <p className="font-jet text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 lg:mb-12 leading-relaxed border-l-2 border-white/30 pl-4 sm:pl-6">
              As an Information Technology student at President University,{" "}
              {"I'm"} genuinely fascinated by how websites work. That curiosity,
              mixed with a creative passion for graphic design, is what drives
              me. My main goal is to bring these two interests together. I want
              to build complete web experiences—creating a beautiful and
              functional front-end with my design skills , while using what{" "}
              {"I'm"} learning in Cyber Security to make sure everything runs
              safely and smoothly. Ultimately, I just enjoy building cool things
              that are user-friendly, look good, and are safe to use.
            </p>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <StatCard value="1+" label="Years Experience" />
              <StatCard value="5+" label="Projects" />
              <StatCard value="25" label="Skills" />
            </div> */}
          </div>
        </div>
      </section>

      {/* Education Section - Mobile optimized */}
      <section
        id="educations"
        ref={(el) => (sectionRefs.current["educations"] = el)}
        className="relative min-h-screen py-16 sm:py-20 lg:py-24 bg-blueprint overflow-hidden"
      >
        {/* Detail Latar Belakang Baru: Circuit Board & Glow */}
        <div className="absolute inset-0 z-0">
          {/* Garis-garis sirkuit horizontal - Responsive positioning */}
          <div className="absolute top-[20%] left-0 w-1/4 sm:w-1/3 h-px bg-white/10"></div>
          <div className="absolute top-[50%] right-0 w-1/3 sm:w-1/2 h-px bg-white/10"></div>
          <div className="absolute top-[80%] left-0 w-1/2 sm:w-2/3 h-px bg-white/10"></div>
          {/* Garis-garis sirkuit vertikal */}
          <div className="absolute top-0 left-[10%] h-1/2 w-px bg-white/10"></div>
          <div className="absolute bottom-0 right-[20%] h-1/3 w-px bg-white/10"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[scan-line_8s_ease-in-out_infinite]"></div>

        <div className="relative z-10 max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-exo font-bold text-white">
              <span className="text-white/40">{"// 02."}</span> EDUCATION
            </h2>
          </div>

          <div className="relative w-full flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
            {/* Garis Vertikal Utama dengan Efek GLOW - Hidden on mobile for better UX */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px timeline-spine 
                   bg-white/30 shadow-[0_0_15px_3px_rgba(255,255,255,0.2)] hidden sm:block"
            ></div>

            {educationData.map((edu, index) => (
              <EducationItem
                key={index}
                title={edu.title}
                institution={edu.institution}
                date={edu.date}
                alignment={index % 2 === 0 ? "right" : "left"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Responsive */}
      <section
        id="skills"
        ref={(el) => (sectionRefs.current["skills"] = el)}
        className="relative min-h-screen py-16 sm:py-20 lg:py-24 flex flex-col items-center justify-center bg-blueprint"
      >
        <RotatingRings />

        <div className="relative z-10 max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-exo font-bold text-white mb-12 sm:mb-16">
            <span className="text-white/40">{"// 03."}</span> SKILLS
          </h2>

          <SkillsSection />
        </div>
      </section>

      {/* Projects Section - Responsive */}
      <section
        id="projects"
        ref={(el) => (sectionRefs.current["projects"] = el)}
        className="relative min-h-screen py-16 sm:py-20 lg:py-24 flex flex-col items-center justify-center bg-[#0a0a0a]"
      >
        <WireframeBackground />

        <div className="relative z-10 max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-exo font-bold text-white mb-12 sm:mb-16">
            <span className="text-white/40">{"// 04."}</span> PROJECTS
          </h2>

          <ProjectsSection />
        </div>
      </section>

      {/* Contact Section - Enhanced mobile layout */}
      <section
        id="contact"
        ref={(el) => (sectionRefs.current["contact"] = el)}
        className="relative min-h-screen py-16 sm:py-20 lg:py-24 flex items-center bg-[#0a0a0a] overflow-hidden"
      >
        <ContactGeometryBackground />

        <div className="relative z-10 max-w-screen-xl mx-auto w-full grid lg:grid-cols-2 gap-12 sm:gap-16 items-center px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-exo font-bold text-white">
              <span className="text-white/40">{"// 05."}</span> <br />
              GET IN TOUCH
            </h2>
            <p className="font-jet text-gray-400 mt-4 sm:mt-6 leading-relaxed text-sm sm:text-base">
              Got a project, a question, or just want to say hello? {"I'm"}{" "}
              always open for a chat. Send a signal and {"let's"} create
              something extraordinary together.
            </p>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA Section - Better mobile spacing */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          {/* Grid Pattern - Responsive sizing */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
                backgroundSize: "30px 30px", // Smaller grid on mobile
              }}
            ></div>
          </div>

          {/* Diagonal Lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform -rotate-1"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-1"></div>

          {/* Corner Brackets - Responsive sizing */}
          <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-white/30"></div>
          <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-white/30"></div>
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-white/30"></div>
          <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-white/30"></div>

          {/* Floating Geometric Shapes */}
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white/10 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 border border-white/10 rotate-12"></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-6 sm:h-8 bg-white/10 rotate-45"></div>
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Content */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-exo font-bold text-white mb-4 sm:mb-6">
              {"LET'S"} WORK
              <br />
              <span className="text-white/60">TOGETHER</span>
            </h2>

            <div className="w-16 sm:w-24 h-px bg-white mx-auto mb-6 sm:mb-8 shadow-[0_0_10px_2px_rgba(255,255,255,0.3)]"></div>

            <p className="font-jet text-lg sm:text-xl text-gray-300 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4">
              Ready to transform your ideas into digital reality?
              <br className="hidden sm:block" />
              {"Let's"} collaborate and create something extraordinary.
            </p>
          </div>

          {/* CTA Button - Mobile optimized */}
          <div className="relative inline-block group">
            {/* Background Glow Effect */}
            <div className="absolute -inset-1 bg-white/10 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>

            <a
              href="/docs/Haris-Muhyidin-Shofar_CV-&-Resume.rar"
              download
              className="relative block px-8 sm:px-12 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-exo font-semibold text-base sm:text-lg uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-black group"
              style={{
                clipPath:
                  "polygon(0% 100%, 0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%)",
              }}
            >
              <span className="flex items-center gap-2 sm:gap-3">
                <FaDownload className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm lg:text-base">
                  Download CV & Resume
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section - Enhanced responsive */}
      <footer className="relative bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
        {/* Geometric Footer Background */}
        <div className="absolute inset-0">
          {/* Circuit Pattern - Responsive */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 left-1/4 w-12 sm:w-20 h-px bg-white/20"></div>
            <div className="absolute top-4 left-1/4 w-px h-6 sm:h-8 bg-white/20"></div>
            <div className="absolute top-10 sm:top-12 left-1/4 w-6 sm:w-8 h-px bg-white/20"></div>

            <div className="absolute top-4 right-1/4 w-12 sm:w-20 h-px bg-white/20"></div>
            <div className="absolute top-4 right-1/4 w-px h-6 sm:h-8 bg-white/20"></div>
            <div className="absolute top-10 sm:top-12 right-1/4 w-6 sm:w-8 h-px bg-white/20"></div>
          </div>

          {/* Scanning Line Animation */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[scan-line_6s_ease-in-out_infinite]"></div>
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Top Section: Navigation & Social - Better mobile grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 sm:mb-12">
            {/* Logo & Brief */}
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <div className="corner-brackets inline-block rounded-lg p-2 mb-4">
                <span className="text-xl sm:text-2xl font-exo font-bold text-white">
                  HMS
                </span>
              </div>
              <p className="font-jet text-sm text-gray-400 leading-relaxed max-w-sm mx-auto sm:mx-0">
                Creating digital experiences with precision and creativity.
              </p>
            </div>

            {/* Navigation Links - Better mobile layout */}
            <div className="text-center sm:text-left">
              <h3 className="font-exo font-semibold text-white mb-4 uppercase tracking-wide text-sm sm:text-base">
                Navigation
              </h3>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(item.name);
                        document
                          .getElementById(item.href.substring(1))
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="block font-jet text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                  </div>
                ))}
              </nav>
            </div>

            {/* Social Links & Back to Top */}
            <div className="text-center md:text-right">
              <h3 className="font-exo font-semibold text-white mb-4 uppercase tracking-wide">
                Connect
              </h3>
              <div className="flex justify-center md:justify-end mb-6">
                <SocialLinks />
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="corner-brackets inline-flex items-center gap-2 px-4 py-2 text-sm font-exo text-gray-400 hover:text-white transition-all duration-300 group"
              >
                <FaArrowUp className="text-xs group-hover:-translate-y-1 transition-transform duration-300" />
                Back to Top
              </button>
            </div>
          </div>

          {/* Bottom Section: Copyright */}
          <div className="relative">
            {/* Separator Line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

            {/* Copyright Content */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                {/* Geometric Decorative Elements */}
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white/30 rotate-45"></div>
                  <div className="w-1 h-4 bg-white/20"></div>
                  <div className="w-2 h-2 border border-white/30 rotate-12"></div>
                </div>

                <p className="font-jet text-sm text-gray-400">
                  © 2025{" "}
                  <span className="text-white font-semibold">HarisMS</span> All
                  rights reserved.
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-jet text-gray-500">
                <span>Built with Next.js & Tailwind CSS</span>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
