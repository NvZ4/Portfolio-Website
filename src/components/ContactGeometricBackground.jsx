"use client";

// components/ContactGeometryBackground.jsx
import { useState, useEffect } from 'react';

const ContactGeometryBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Geometric nodes untuk contact section
  const geometryNodes = [
    { x: 15, y: 20, size: 'large', type: 'hex' },
    { x: 85, y: 25, size: 'medium', type: 'triangle' },
    { x: 25, y: 60, size: 'small', type: 'circle' },
    { x: 75, y: 65, size: 'large', type: 'square' },
    { x: 50, y: 35, size: 'medium', type: 'diamond' },
    { x: 10, y: 80, size: 'small', type: 'hex' },
    { x: 90, y: 75, size: 'medium', type: 'circle' }
  ];

  // Connection paths between nodes
  const connectionPaths = [
    { from: { x: 15, y: 20 }, to: { x: 50, y: 35 }, delay: 0 },
    { from: { x: 50, y: 35 }, to: { x: 85, y: 25 }, delay: 1 },
    { from: { x: 25, y: 60 }, to: { x: 75, y: 65 }, delay: 2 },
    { from: { x: 50, y: 35 }, to: { x: 75, y: 65 }, delay: 3 },
    { from: { x: 15, y: 20 }, to: { x: 25, y: 60 }, delay: 4 }
  ];

  // Data flow particles
  const dataFlowLines = [
    { start: 5, end: 95, y: 15, direction: 'right', speed: 8 },
    { start: 95, end: 5, y: 45, direction: 'left', speed: 12 },
    { start: 5, end: 95, y: 75, direction: 'right', speed: 10 },
    { start: 95, end: 5, y: 90, direction: 'left', speed: 14 }
  ];

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Base geometric grid */}
      <div className="absolute inset-0 bg-blueprint opacity-60"></div>
      
      {/* Isometric perspective overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-white/[0.05]"
        style={{ 
          backgroundImage: `
            linear-gradient(30deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(-30deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 104px'
        }}
      ></div>

      {/* Geometric nodes */}
      <div className="absolute inset-0">
        {geometryNodes.map((node, i) => (
          <div
            key={`node-${i}`}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 animate-pulse
              ${node.size === 'large' ? 'w-4 h-4' : node.size === 'medium' ? 'w-3 h-3' : 'w-2 h-2'}
              ${node.type === 'circle' ? 'rounded-full' : 
                node.type === 'diamond' ? 'rotate-45' :
                node.type === 'triangle' ? 'rounded-sm' : 'rounded-sm'}
              border border-white/40 bg-white/10 backdrop-blur-sm
            `}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '3s',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Inner glow */}
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-30"
                 style={{ animationDelay: `${i * 0.5}s`, animationDuration: '4s' }}></div>
          </div>
        ))}
      </div>

      {/* Connection lines between nodes */}
      <svg className="absolute inset-0 w-full h-full">
        {connectionPaths.map((path, i) => (
          <line
            key={`connection-${i}`}
            x1={`${path.from.x}%`}
            y1={`${path.from.y}%`}
            x2={`${path.to.x}%`}
            y2={`${path.to.y}%`}
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="animate-pulse"
            style={{ 
              animationDelay: `${path.delay}s`,
              animationDuration: '2s'
            }}
          />
        ))}
        
        {/* Animated connection pulses */}
        {connectionPaths.map((path, i) => (
          <circle
            key={`pulse-${i}`}
            r="2"
            fill="rgba(255, 255, 255, 0.6)"
            className="opacity-0"
            style={{
              animation: `connection-pulse 6s ease-in-out infinite`,
              animationDelay: `${i * 1.2}s`
            }}
          >
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              begin={`${i * 1.2}s`}
            >
              <mpath href={`#path-${i}`} />
            </animateMotion>
          </circle>
        ))}
        
        {/* Hidden paths for animation */}
        <defs>
          {connectionPaths.map((path, i) => (
            <path
              key={`path-${i}`}
              id={`path-${i}`}
              d={`M ${path.from.x}% ${path.from.y}% L ${path.to.x}% ${path.to.y}%`}
            />
          ))}
        </defs>
      </svg>

      {/* Data flow lines */}
      {dataFlowLines.map((line, i) => (
        <div
          key={`dataflow-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{
            top: `${line.y}%`,
            left: line.direction === 'right' ? `${line.start}%` : 'auto',
            right: line.direction === 'left' ? `${100 - line.start}%` : 'auto',
            width: `${Math.abs(line.end - line.start)}%`,
            animation: `data-flow-${line.direction} ${line.speed}s linear infinite`,
            animationDelay: `${i * 0.8}s`
          }}
        >
          {/* Data packets */}
          <div 
            className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
            style={{
              left: line.direction === 'right' ? '0%' : '100%',
              top: '-1px',
              animation: `packet-flow-${line.direction} ${line.speed}s linear infinite`,
              animationDelay: `${i * 0.8}s`
            }}
          ></div>
        </div>
      ))}

      {/* Scanning grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 49px,
              rgba(255, 255, 255, 0.1) 50px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 49px,
              rgba(255, 255, 255, 0.1) 50px
            )
          `,
          animation: 'grid-scan 20s linear infinite'
        }}
      ></div>

      {/* Custom styles untuk animasi */}
      <style jsx>{`
        @keyframes connection-pulse {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        @keyframes data-flow-right {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes data-flow-left {
          0% { transform: translateX(100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }
        
        @keyframes packet-flow-right {
          0% { left: 0%; }
          100% { left: 100%; }
        }
        
        @keyframes packet-flow-left {
          0% { left: 100%; }
          100% { left: 0%; }
        }
        
        @keyframes grid-scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>

      {/* Corner scan indicators */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30 animate-pulse"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/30 animate-pulse" 
           style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/30 animate-pulse" 
           style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/30 animate-pulse" 
           style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default ContactGeometryBackground;