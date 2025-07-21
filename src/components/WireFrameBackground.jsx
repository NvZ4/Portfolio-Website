"use client";

// components/WireframeBackground.jsx
import { useState, useEffect } from 'react';

// Fungsi helper untuk menghasilkan dots yang lebih sedikit
const generateDots = (count = 25, width = 1920, height = 1080) => {
  let boxShadow = '';
  for (let i = 0; i < count; i++) {
    boxShadow += `${Math.random() * width}px ${Math.random() * height}px rgba(255, 255, 255, 0.2), `;
  }
  return boxShadow.slice(0, -2);
};

const WireframeBackground = () => {
  const [dotShadows, setDotShadows] = useState('');

  useEffect(() => {
    setDotShadows(generateDots());
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-blueprint"></div>
      
      {/* Geometric Tech Elements - Minimalist */}
      <div className="absolute inset-0">
        {/* Scattered Dots */}
        <div className="absolute w-px h-px rounded-full" style={{ boxShadow: dotShadows }}></div>

        {/* Single Scanning Line - Subtle */}
        <div 
          className="absolute top-[40%] left-0 h-px w-full
                     bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.3),transparent)] 
                     animate-[draw-and-fade_15s_ease-in-out_infinite]" 
        ></div>

        {/* Corner Tech Brackets - Only Two Corners */}
        <div className="absolute top-12 left-12 w-16 h-16">
          <div className="absolute top-0 left-0 w-4 h-px bg-white/30"></div>
          <div className="absolute top-0 left-0 w-px h-4 bg-white/30"></div>
          <div className="absolute bottom-0 right-0 w-4 h-px bg-white/30"></div>
          <div className="absolute bottom-0 right-0 w-px h-4 bg-white/30"></div>
        </div>

        <div className="absolute bottom-12 right-12 w-16 h-16">
          <div className="absolute top-0 right-0 w-4 h-px bg-white/30"></div>
          <div className="absolute top-0 right-0 w-px h-4 bg-white/30"></div>
          <div className="absolute bottom-0 left-0 w-4 h-px bg-white/30"></div>
          <div className="absolute bottom-0 left-0 w-px h-4 bg-white/30"></div>
        </div>

        {/* Central Geometric Focus - Hexagonal Grid */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Large Central Hexagon */}
          <div className="w-32 h-32 border border-white/20 transform rotate-12 opacity-40" 
               style={{ 
                 clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                 animation: 'spin 40s linear infinite'
               }}>
          </div>
          
          {/* Smaller Hexagons Around */}
          <div className="absolute -top-8 -left-8 w-12 h-12 border border-white/15 transform -rotate-12" 
               style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
          </div>
          <div className="absolute -bottom-8 -right-8 w-10 h-10 border border-white/15 transform rotate-45" 
               style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
          </div>
        </div>

        {/* Circuit Connection Lines */}
        <div className="absolute top-[25%] left-[15%] w-24 h-px bg-white/20">
          <div className="absolute right-0 top-0 w-2 h-2 border-r border-t border-white/20 transform rotate-45 -translate-y-1"></div>
        </div>
        
        <div className="absolute bottom-[30%] right-[20%] w-32 h-px bg-white/20">
          <div className="absolute left-0 top-0 w-2 h-2 border-l border-b border-white/20 transform rotate-45 translate-y-1"></div>
        </div>

        {/* Tech Targeting System - Single */}
        <div className="absolute top-[20%] right-[25%] w-12 h-12">
          <div className="absolute inset-0 border border-white/25 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/25 transform -translate-y-px"></div>
          <div className="absolute top-0 left-1/2 h-full w-px bg-white/25 transform -translate-x-px"></div>
          <div className="absolute inset-3 border border-white/15 rounded-full"></div>
        </div>

        {/* Data Flow Indicators - Minimal */}
        <div className="absolute bottom-[20%] left-[30%] flex space-x-2">
          <div className="w-1 h-6 bg-white/15 animate-pulse"></div>
          <div className="w-1 h-8 bg-white/20 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-1 h-4 bg-white/15 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        </div>

        {/* Grid Connection Nodes */}
        <div className="absolute top-[35%] left-[70%] w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[45%] left-[25%] w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Floating Tech Diamond */}
        <div className="absolute top-[65%] right-[35%] w-6 h-6 border border-white/20 transform rotate-45 animate-pulse" 
             style={{ animationDelay: '3s' }}>
        </div>
      </div>
    </div>
  );
};

export default WireframeBackground;