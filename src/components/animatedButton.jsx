// components/AnimatedButton.jsx

const AnimatedButton = ({ href, children }) => {
  return (
    <a
      href={href}
      download
      className="relative inline-flex items-center justify-center px-6 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-300 group"
    >
      {/* --- Mulai Animasi Border --- */}
      <div className="absolute inset-0 z-10 rounded-lg">
        {/* Garis Atas */}
        <div
          className="absolute top-0 left-0 h-px bg-white origin-left animate-[draw-x_4s_linear_infinite]"
          style={{ animationDelay: "0s" }}
        ></div>
        {/* Garis Kanan */}
        <div
          className="absolute top-0 right-0 w-px bg-white origin-top animate-[draw-y_4s_linear_infinite]"
          style={{ animationDelay: "1s" }}
        ></div>
        {/* Garis Bawah */}
        <div
          className="absolute bottom-0 right-0 h-px bg-white origin-right animate-[draw-x_4s_linear_infinite]"
          style={{ animationDelay: "2s" }}
        ></div>
        {/* Garis Kiri */}
        <div
          className="absolute bottom-0 left-0 w-px bg-white origin-bottom animate-[draw-y_4s_linear_infinite]"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>
      {/* --- Selesai Animasi Border --- */}

      {/* Konten Tombol (Teks & Ikon) */}
      <span className="relative z-20 flex items-center gap-2">
        {children}
      </span>
    </a>
  );
};

export default AnimatedButton;