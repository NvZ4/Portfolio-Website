// components/SkillCard.jsx

const SkillCard = ({ name, level, icon: Icon, colorClasses }) => {
  const isUrl = typeof Icon === 'string';

  return (
    <div 
      className="relative p-4 bg-white/[.03] backdrop-blur-sm transition-all duration-300 group"
      style={{ 
        clipPath: 'polygon(0% 100%, 0% 1rem, 1rem 0%, 100% 0%, 100% calc(100% - 1rem), calc(100% - 1rem) 100%)' 
      }}
    >
      {/* Detail Grid Interaktif (muncul saat hover) */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white/30 opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white/30 opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white/30 opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white/30 opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Detail Grid Statis (selalu terlihat) */}
      <div className="absolute bottom-2 right-2 w-4 h-px bg-white/10"></div>
      <div className="absolute bottom-2 right-2 h-4 w-px bg-white/10"></div>
      
      {/* Konten Kartu */}
      <div className="flex items-start gap-4">
        {/* Garis Kiri yang Menyala */}
        <div 
          className={`w-1 flex-shrink-0 h-12 rounded-full ${colorClasses.bg}`}
          style={{ boxShadow: `0 0 12px ${colorClasses.shadow}` }}
        ></div>
        <div className="flex-grow">
          {/* Logo Teknologi */}
          <div className="flex items-center gap-3 mb-2">
            {isUrl ? (
              <img src={Icon} alt={`${name} logo`} className="w-6 h-6" />
            ) : (
              <Icon className="w-6 h-6 text-white" />
            )}
            <h3 className="font-exo text-lg font-semibold text-white leading-tight">{name}</h3>
          </div>
          <p className={`font-jet text-sm ${colorClasses.text}`}>{level}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;