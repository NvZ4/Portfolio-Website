// components/ProjectModal.jsx
import Image from "next/image";
import { FaGithub, FaTimes, FaEye } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    // Latar Belakang Overlay
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[modal-fade-in_0.3s_ease-out]"
      onClick={onClose}
    >
      {/* Kontainer Utama Modal dengan Animasi Geometric Tech - Made wider for long content */}
      <div
        className="relative w-full max-w-6xl bg-[#0a0a0a] border border-white/20 rounded-lg shadow-2xl animate-[geometric-modal-open_0.8s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animasi Grid Lines - akan muncul setelah modal terbuka */}
        <div className="absolute inset-0 overflow-hidden rounded-lg animate-[grid-reveal_1.2s_ease-out_0.4s_forwards] opacity-0">
          {/* Grid Lines Horizontal */}
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(8)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute w-full h-px bg-white/10"
                style={{
                  top: `${12.5 * (i + 1)}%`,
                  animationDelay: `${0.8 + i * 0.05}s`,
                }}
              />
            ))}
          </div>
          {/* Grid Lines Vertical */}
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(8)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute h-full w-px bg-white/10"
                style={{
                  left: `${12.5 * (i + 1)}%`,
                  animationDelay: `${1.0 + i * 0.05}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Corner Tech Elements - Enhanced */}
        <div className="absolute top-3 left-3 w-8 h-8 animate-[corner-tech-tl_1.6s_ease-out_0.4s_forwards] opacity-0">
          <div className="absolute top-0 left-0 w-6 h-px bg-white/40"></div>
          <div className="absolute top-0 left-0 w-px h-6 bg-white/40"></div>
          <div className="absolute top-1 left-1 w-2 h-2 border border-white/20"></div>
        </div>

        <div className="absolute bottom-3 right-3 w-8 h-8 animate-[corner-tech-br_1.6s_ease-out_0.5s_forwards] opacity-0">
          <div className="absolute bottom-0 right-0 w-6 h-px bg-white/40"></div>
          <div className="absolute bottom-0 right-0 w-px h-6 bg-white/40"></div>
          <div className="absolute bottom-1 right-1 w-2 h-2 border border-white/20"></div>
        </div>

        {/* Data Stream Lines - Decorative */}
        <div className="absolute top-6 right-20 w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[data-stream_2s_ease-in-out_infinite_1.2s]"></div>
        <div className="absolute bottom-12 left-16 w-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[data-stream_2.5s_ease-in-out_infinite_1.8s]"></div>

        {/* Tombol Close dengan Tech Enhancement */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-all duration-300 group z-10"
        >
          <div className="relative p-2">
            <FaTimes size={20} />
            {/* Hover Tech Border */}
            <div className="absolute inset-0 border border-transparent group-hover:border-white/30 transition-all duration-300"></div>
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-transparent group-hover:border-white/50 transition-all duration-300"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-transparent group-hover:border-white/50 transition-all duration-300"></div>
          </div>
        </button>

        {/* Konten Modal dengan Delayed Animation */}
        <div className="animate-[modal-content-reveal_0.8s_ease-out_0.5s_forwards] opacity-0">
          {/* Changed to flexible layout - image takes only needed space, content expands */}
          <div className="flex flex-col lg:flex-row gap-8 p-8">
            {/* Image Section dengan Tech Frame - Fixed width */}
            <div className="flex-shrink-0 lg:w-96">
              <div className="relative w-full aspect-video rounded-md overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

                {/* Tech Scan Line Effect pada hover */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-[scan-horizontal_3s_ease-in-out_infinite]"></div>
                </div>

                {/* Image Tech Corners */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/40"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/40"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/40"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/40"></div>
              </div>
            </div>

            {/* Content Section - Takes remaining space and expands horizontally */}
            <div className="flex flex-col flex-grow min-w-0">
              {/* Title dengan Tech Underline */}
              <div className="relative mb-6">
                <h2 className="font-exo text-3xl font-bold text-white mb-2 break-words">
                  {project.title}
                </h2>
                <div className="w-12 h-px bg-white/60 animate-[expand-line_1s_ease-out_1.2s_forwards] origin-left scale-x-0"></div>
                <div className="absolute -bottom-1 left-0 w-2 h-2 border border-white/30 animate-[fade-in-delayed_0.5s_ease-out_2s_forwards] opacity-0"></div>
              </div>

              {/* Tags dengan Tech Style */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className="relative px-3 py-1 text-xs font-jet bg-white/10 text-white border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40"
                    style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                  >
                    {tag}
                    {/* Tech corner pada tag */}
                    <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-white/60"></div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-white/60"></div>
                  </span>
                ))}
              </div>

              {/* Description dengan Typing Effect Simulation - Now can expand horizontally */}
              <div className="relative flex-grow mb-6">
                <p className="font-jet text-sm text-gray-300 leading-relaxed animate-[text-reveal_1.5s_ease-out_1.6s_forwards] opacity-0 break-words">
                  {project.description}
                </p>
                {/* Text cursor effect */}
                <span className="inline-block w-px h-4 bg-white/60 ml-1 animate-[cursor-blink_1s_infinite_2s]"></span>
              </div>

              {/* GitHub Button dengan Tech Enhancement */}
              {/* === CONDITIONAL BUTTON === */}
              {project.githubLink ? (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-flex items-center gap-3 px-6 py-3 font-exo font-semibold bg-white text-black hover:bg-gray-200 transition-all duration-300 self-start overflow-hidden"
                >
                  <FaGithub className="relative z-10" />
                  <span className="relative z-10">View on GitHub</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black/30"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black/30"></div>
                </a>
              ) : (
                <a
                  href={project.documentationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-flex items-center gap-3 px-6 py-3 font-exo font-semibold bg-white text-black hover:bg-gray-200 transition-all duration-300 self-start overflow-hidden"
                >
                  <FaEye className="relative z-10" />
                  <span className="relative z-10">View Documentation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30"></div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
