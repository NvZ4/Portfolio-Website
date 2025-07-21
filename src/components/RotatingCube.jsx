// components/RotatingCube.jsx

const RotatingCube = () => {
  const faceClasses = "absolute w-[300px] h-[300px] border border-white/10";

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden" style={{ perspective: '1000px' }}>
      <div 
        className="relative w-[300px] h-[300px] animate-[rotate-cube_40s_linear_infinite]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className={faceClasses} style={{ transform: 'rotateY(0deg) translateZ(150px)' }}></div>
        <div className={faceClasses} style={{ transform: 'rotateY(90deg) translateZ(150px)' }}></div>
        <div className={faceClasses} style={{ transform: 'rotateY(180deg) translateZ(150px)' }}></div>
        <div className={faceClasses} style={{ transform: 'rotateY(-90deg) translateZ(150px)' }}></div>
        <div className={faceClasses} style={{ transform: 'rotateX(90deg) translateZ(150px)', height: '300px' }}></div>
        <div className={faceClasses} style={{ transform: 'rotateX(-90deg) translateZ(150px)', height: '300px' }}></div>
      </div>
    </div>
  );
};

export default RotatingCube;