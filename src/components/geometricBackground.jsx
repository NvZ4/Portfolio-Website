// components/GeometricBackground.jsx

const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Pola Grid Halus dari sebelumnya */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] [background-size:2rem_2rem]"></div>

      {/* Garis-garis sudut (Unfinished Grid) - Dibuat lebih tebal & tegas */}
      <div className="absolute top-8 left-8 w-px h-1/3 bg-white/30"></div>
      <div className="absolute top-8 left-8 h-px w-1/3 bg-white/30"></div>
      <div className="absolute bottom-8 right-8 w-px h-1/3 bg-white/30"></div>
      <div className="absolute bottom-8 right-8 h-px w-1/3 bg-white/30"></div>

      {/* Elemen Dekoratif Tambahan: Sudut Dalam */}
      <div className="absolute top-16 left-16 w-px h-1/4 bg-white/10"></div>
      <div className="absolute top-16 left-16 h-px w-1/4 bg-white/10"></div>
      <div className="absolute bottom-16 right-16 w-px h-1/4 bg-white/10"></div>
      <div className="absolute bottom-16 right-16 h-px w-1/4 bg-white/10"></div>
    </div>
  );
};

export default GeometricBackground;