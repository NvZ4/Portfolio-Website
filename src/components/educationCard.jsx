import { FaSchool, FaCode, FaUniversity } from 'react-icons/fa';

const iconMap = {
  "Senior HighSchool": FaSchool,
  "KADA(Korean Asean Digital Academy) Boothcamp": FaCode,
  "Undergraduate Bachelor Information Technology": FaUniversity,
};

const EducationCard = ({ title, institution, date }) => {
  const Icon = iconMap[title] || FaSchool;

  return (
    // 'group' memungkinkan kita membuat efek hover dari parent ke child
    <div 
      className="relative p-6 group transition-all duration-300 hover:-translate-y-2"
      // Style untuk bentuk heksagonal/angular
      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
    >
      {/* Latar belakang semi-transparan dengan blur */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/10"></div>
      
      {/* Border animasi yang muncul saat hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
          <div className="absolute top-0 left-0 w-full h-full border-2 border-white/50"></div>
      </div>

      {/* Konten Kartu */}
      <div className="relative z-10 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 border-2 border-white/30 rounded-full">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
        <h3 className="font-exo text-xl font-bold text-white mb-1">{title}</h3>
        <p className="font-jet text-md text-gray-300">{institution}</p>
        <p className="mt-2 font-jet text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default EducationCard;