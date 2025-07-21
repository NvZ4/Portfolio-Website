// components/StatCard.jsx

const StatCard = ({ value, label }) => {
  return (
    // Gunakan [clip-path] untuk memotong sudut
    <div 
      className="relative p-5 text-center bg-white/5 transition-colors duration-300 hover:bg-white/10"
      style={{ clipPath: 'polygon(0% 100%, 0% 15%, 15% 0%, 100% 0%, 100% 85%, 85% 100%)' }}
    >
      {/* Animasi Border tidak lagi diperlukan karena sudah ada clip-path */}
      
      {/* Konten Kartu */}
      <div className="relative z-20">
        <div className="text-3xl font-exo font-bold text-white">{value}</div>
        <div className="mt-1 text-sm font-jet text-gray-400">{label}</div>
      </div>
    </div>
  );
};

export default StatCard;