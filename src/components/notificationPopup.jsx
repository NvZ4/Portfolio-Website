// components/GithubPopup.jsx
import { useEffect, useState } from 'react';

const GithubPopup = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500); // Popup will be visible for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-6 bg-[#0a0a0a] border border-white/20 rounded-lg shadow-2xl transition-opacity duration-500
      ${visible ? 'animate-[flicker-in_0.5s_ease-out]' : 'animate-[flicker-out_0.5s_ease-out] opacity-0'}
      `}
    >
      {/* Geometric Decorations */}
      <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-white/30"></div>
      <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-white/30"></div>
      
      <p className="font-jet text-white text-center">
        There's no GitHub repository available for this project.
      </p>

      <style jsx global>{`
        @keyframes flicker-out {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }
        }
        .animate-flicker-out {
          animation: flicker-out 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default GithubPopup;