// components/EducationItem.jsx
import { FaSchool, FaCode, FaUniversity } from 'react-icons/fa';

const iconMap = {
  "Senior HighSchool": FaSchool,
  "KADA(Korean Asean Digital Academy) Boothcamp": FaCode,
  "Undergraduate Bachelor Information Technology": FaUniversity,
};

const EducationItem = ({ title, institution, date, alignment }) => {
  const Icon = iconMap[title] || FaSchool;
  const isRight = alignment === 'right';

  return (
    // 1. Kontainer utama dibuat selebar penuh dan posisinya diatur dari sini
    <div className={`w-full flex ${isRight ? 'justify-start' : 'justify-end'}`}>
      <div className="relative w-6/12 group"> {/* Lebar kolom sedikit ditambah */}
        {/* Checkpoint di tengah */}
        <div className={`absolute top-1 w-6 h-6 rounded-md border-2 bg-[#0a0a0a] border-white/50 group-hover:border-white transition-all duration-300 group-hover:shadow-[0_0_15px_theme(colors.white)] z-10 ${isRight ? '-left-3' : '-right-3'}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-3 h-3 text-white/50 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
        
        {/* Detail Edukasi */}
        <div className={`p-4 bg-white/5 rounded-md border border-transparent hover:border-white/20 transition-colors duration-300 ${isRight ? 'text-left' : 'text-right'}`}>
          <h3 className="font-exo text-xl font-bold text-white">{title}</h3>
          {/* 2. Tambahkan whitespace-nowrap untuk mencegah teks terpotong */}
          <p className="mt-1 font-jet text-md text-gray-300 whitespace-nowrap">{institution}</p>
          <p className="mt-2 font-jet text-sm text-gray-500 whitespace-nowrap">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;