// components/RotatingRings.jsx

const RotatingRings = () => {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center w-full h-full">
        
        {/* Cincin-Cincin Berputar */}
        <div className="absolute border border-white/5 rounded-full animate-spin [animation-duration:60s] linear" style={{ width: '700px', height: '700px' }}></div>
        <div className="absolute border-t border-white/10 rounded-full animate-spin [animation-duration:55s] [animation-direction:reverse] linear" style={{ width: '620px', height: '620px' }}></div>
        <div className="absolute border border-white/10 rounded-full border-dotted animate-spin [animation-duration:50s] linear" style={{ width: '540px', height: '540px' }}></div>
        <div className="absolute border-y border-white/15 rounded-full animate-spin [animation-duration:45s] [animation-direction:reverse] linear" style={{ width: '460px', height: '460px' }}></div>
        <div className="absolute border border-white/20 rounded-full animate-spin [animation-duration:40s] linear" style={{ width: '380px', height: '380px' }}></div>

        {/* Elemen Berputar: Busur dan Garis untuk menambah kompleksitas */}
        <div className="absolute w-[660px] h-[660px] border-2 border-transparent border-t-white/20 rounded-full animate-spin [animation-duration:35s] linear" style={{transform: 'rotate(45deg)'}}></div>
        <div className="absolute w-[420px] h-[420px] border border-transparent border-l-white/10 rounded-full animate-spin [animation-duration:30s] [animation-direction:reverse] linear" style={{transform: 'rotate(-30deg)'}}></div>

        

        {/* Elemen Tambahan untuk Variasi Rotasi */}
        <div className="absolute w-[800px] h-[800px] border border-transparent border-r-white/5 rounded-full animate-spin [animation-duration:80s] [animation-direction:reverse] linear"></div>
        <div className="absolute w-[320px] h-[320px] border-2 border-transparent border-b-white/15 rounded-full animate-spin [animation-duration:25s] linear"></div>

      </div>
    </div>
  );
};

export default RotatingRings;