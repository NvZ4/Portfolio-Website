// components/ProjectCard.jsx
import Image from "next/image";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const ProjectCard = ({
  title,
  tags,
  description,
  image,
  githubLink,
  onReadMore,
  onGithubClick,
}) => {
  const handleGithub = (e) => {
    e.stopPropagation(); // Prevents the modal from opening
    if (githubLink) {
      window.open(githubLink, "_blank", "noopener,noreferrer");
    } else {
      onGithubClick(); // Trigger the popup from the parent
    }
  };
  return (
    <div
      className="relative overflow-hidden bg-black group h-90"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 2rem), calc(100% - 2rem) 100%, 0 100%)",
      }}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 opacity-40 group-hover:opacity-20"
      />
      {/* 1. Overlay dengan efek "+ Grid" interaktif */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-300 grid-overlay"></div>

      {/* Unfinished Grid Lines (tetap ada) */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Content Container dengan fixed spacing */}
        <div className="flex-grow flex flex-col">
          {/* Tags Section - Fixed height with scrollable overflow */}
          <div className="h-12 mb-4 overflow-hidden">
            <div className="flex flex-wrap gap-2 max-h-12 overflow-y-auto scrollbar-hide">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-jet bg-white/10 text-white rounded flex-shrink-0"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Title Section - Fixed height with text truncation */}
          <div className="h-16 mb-3">
            <h3 className="font-exo text-2xl font-bold text-white line-clamp-2 leading-tight">
              {title}
            </h3>
          </div>

          {/* Description Section - Fixed height with text truncation */}
          <div className="flex-grow">
            <p className="font-jet text-sm text-gray-400 line-clamp-4 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* 2. Button Section - Fixed at bottom */}
        <div className="mt-6 flex items-center justify-between flex-shrink-0">
          <button
            onClick={onReadMore}
            className="relative inline-flex items-center justify-center px-5 py-2 text-white text-sm font-exo font-semibold bg-white/5 hover:bg-white/10 rounded-md transition-colors duration-300"
          >
            {/* Animasi Border */}
            <div className="absolute inset-0 z-10 rounded-md">
              <div
                className="absolute top-0 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-300"
                style={{ transitionDelay: "0s" }}
              ></div>
              <div
                className="absolute top-0 right-0 w-px h-0 bg-white group-hover:h-full transition-all duration-300"
                style={{ transitionDelay: "0.15s" }}
              ></div>
              <div
                className="absolute bottom-0 right-0 h-px w-0 bg-white group-hover:w-full transition-all duration-300"
                style={{ transitionDelay: "0.3s" }}
              ></div>
              <div
                className="absolute bottom-0 left-0 w-px h-0 bg-white group-hover:h-full transition-all duration-300"
                style={{ transitionDelay: "0.45s" }}
              ></div>
            </div>

            <span className="relative z-20 flex items-center gap-2">
              Read More <FaArrowRight />
            </span>
          </button>

          <button
            onClick={handleGithub}
            className="text-white/70 hover:text-white transition-colors z-20"
          >
            <FaGithub size={24} />
          </button>
        </div>
      </div>

      {/* Custom scrollbar styling */}
      {/* Custom styles for better text control */}
      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
