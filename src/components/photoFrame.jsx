// components/PhotoFrame.jsx

import Image from 'next/image';

const PhotoFrame = ({ src, alt }) => {
  return (
    <div className="relative w-64 h-80">
      <div className="absolute inset-0 z-10">
        {/* Garis Atas */}
        <div 
          // Perubahan di sini: Menggunakan sintaks nilai arbitrer
          className="absolute top-0 left-0 h-px bg-white origin-left animate-[draw-x_4s_linear_infinite]"
          style={{ animationDelay: '0s' }}
        ></div>
        
        {/* Garis Kanan */}
        <div 
          // Perubahan di sini
          className="absolute top-0 right-0 w-px bg-white origin-top animate-[draw-y_4s_linear_infinite]"
          style={{ animationDelay: '1s' }}
        ></div>
        
        {/* Garis Bawah */}
        <div 
          // Perubahan di sini
          className="absolute bottom-0 right-0 h-px bg-white origin-right animate-[draw-x_4s_linear_infinite]"
          style={{ animationDelay: '2s' }}
        ></div>
        
        {/* Garis Kiri */}
        <div 
          // Perubahan di sini
          className="absolute bottom-0 left-0 w-px bg-white origin-bottom animate-[draw-y_4s_linear_infinite]"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className="relative w-full h-full p-4">
        <div className="relative w-full h-full">
          {src ? (
            <Image
              src={src}
              alt={alt || 'Profile Picture'}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Your Photo</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoFrame;