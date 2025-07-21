// components/ContactForm.jsx
"use client";

import { useState } from 'react';
import { sendEmail } from '../app/sendEmail';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (formData) => {
    setStatus('submitting');
    const result = await sendEmail(formData);
    setStatus(result.success ? 'success' : 'error');
  };

  const inputClasses = "w-full bg-transparent p-4 font-jet text-white placeholder-gray-500 focus:outline-none transition-all duration-300 relative z-10";

  return (
    <div className="relative max-w-md mx-auto">
      {/* Main Container dengan Geometric Shape */}
      <div 
        className="relative bg-black/20 backdrop-blur-sm border border-white/20 group overflow-hidden"
        style={{
          clipPath: 'polygon(0% 100%, 0% 1rem, 1rem 0%, 100% 0%, 100% calc(100% - 1rem), calc(100% - 1rem) 100%)'
        }}
      >
        {/* Animated Corner Brackets */}
        <div className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute top-2 left-2 w-4 h-px bg-white transform -rotate-45 origin-left"></div>
          <div className="absolute top-2 left-2 w-px h-4 bg-white transform rotate-0"></div>
        </div>
        
        <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute top-2 right-2 w-4 h-px bg-white transform rotate-45 origin-right"></div>
          <div className="absolute top-2 right-2 w-px h-4 bg-white transform rotate-0"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute bottom-2 left-2 w-4 h-px bg-white transform rotate-45 origin-left"></div>
          <div className="absolute bottom-2 left-2 w-px h-4 bg-white transform rotate-0"></div>
        </div>
        
        <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute bottom-2 right-2 w-4 h-px bg-white transform -rotate-45 origin-right"></div>
          <div className="absolute bottom-2 right-2 w-px h-4 bg-white transform rotate-0"></div>
        </div>

        {/* Simple background without grid */}
        <div className="absolute inset-0 pointer-events-none"></div>

        {/* Form Content */}
        <div className="relative z-10 p-6">
          {/* Header dengan Geometric Lines */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1.5 h-1.5 bg-white transform rotate-45"></div>
              <h2 className="font-exo text-sm tracking-[0.15em] text-white">CONTACT</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-white/50 to-transparent"></div>
            </div>
            <div className="w-8 h-px bg-white ml-5"></div>
          </div>

          <form action={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="relative group">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-1.5 h-1.5 border-l border-t border-white/30 group-hover:border-white/80 transition-colors duration-300"></div>
                <div className="absolute -top-3 -right-3 w-1.5 h-1.5 border-r border-t border-white/30 group-hover:border-white/80 transition-colors duration-300"></div>
                
                <label htmlFor="email" className="block text-xs font-exo text-gray-400 mb-2 tracking-[0.1em]">
                  [001] EMAIL
                </label>
                
                <div className="relative border border-white/20 group-hover:border-white/40 transition-colors duration-300"
                     style={{clipPath: 'polygon(6px 0%, 100% 0%, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0% 100%, 0% 6px)'}}>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    className="w-full bg-transparent p-3 font-jet text-white placeholder-gray-500 focus:outline-none transition-all duration-300 relative z-10" 
                    placeholder="user@domain.net" 
                  />
                  
                  {/* Animated Scanning Line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-500"></div>
                </div>
                
                <div className="absolute -bottom-3 -left-3 w-1.5 h-1.5 border-l border-b border-white/30 group-hover:border-white/80 transition-colors duration-300"></div>
                <div className="absolute -bottom-3 -right-3 w-1.5 h-1.5 border-r border-b border-white/30 group-hover:border-white/80 transition-colors duration-300"></div>
              </div>
            </div>

            {/* Geometric Separator */}
            <div className="flex items-center justify-center py-2">
              <div className="w-3 h-px bg-white/20"></div>
              <div className="w-1.5 h-1.5 bg-white/30 transform rotate-45 mx-3"></div>
              <div className="w-3 h-px bg-white/20"></div>
            </div>

            {/* Subject Field */}
            <div className="relative group">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-1.5 h-1.5 border-l border-t border-white/30 group-hover:border-white/80 transition-colors duration-300"></div>
                <div className="absolute -top-3 -right-3 w-1.5 h-1.5 border-r border-t border-white/30 group-hover:border-white/80 transition-colors duration-300"></div>
                
                <label htmlFor="subject" className="block text-xs font-exo text-gray-400 mb-2 tracking-[0.1em]">
                  [002] SUBJECT
                </label>
                
                <div className="relative border border-white/20 group-hover:border-white/40 transition-colors duration-300"
                     style={{clipPath: 'polygon(6px 0%, 100% 0%, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0% 100%, 0% 6px)'}}>
                  <input 
                    type="text" 
                    name="subject" 
                    id="subject" 
                    required 
                    className="w-full bg-transparent p-3 font-jet text-white placeholder-gray-500 focus:outline-none transition-all duration-300 relative z-10" 
                    placeholder="Project Inquiry" 
                  />
                  
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-500"></div>
                </div>
                
                <div className="absolute -bottom-3 -left-3 w-1.5 h-1.5 border-l border-b border-white/30 group-hover:border-white/80 transition-colors duration-300"></div>
                <div className="absolute -bottom-3 -right-3 w-1.5 h-1.5 border-r border-b border-white/30 group-hover:border-white/80 transition-colors duration-300"></div>
              </div>
            </div>

            {/* Geometric Separator */}
            <div className="flex items-center justify-center py-2">
              <div className="w-3 h-px bg-white/20"></div>
              <div className="w-1.5 h-1.5 bg-white/30 transform rotate-45 mx-3"></div>
              <div className="w-3 h-px bg-white/20"></div>
            </div>

            {/* Message Field */}
            <div className="relative group">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-1.5 h-1.5 border-l border-t border-white/30 group-hover:border-white/80 transition-colors duration-300"></div>
                <div className="absolute -top-3 -right-3 w-1.5 h-1.5 border-r border-t border-white/30 group-hover:border-white/80 transition-colors duration-300"></div>
                
                <label htmlFor="message" className="block text-xs font-exo text-gray-400 mb-2 tracking-[0.1em]">
                  [003] MESSAGE
                </label>
                
                <div className="relative border border-white/20 group-hover:border-white/40 transition-colors duration-300"
                     style={{clipPath: 'polygon(6px 0%, 100% 0%, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0% 100%, 0% 6px)'}}>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={3} 
                    required 
                    className="w-full bg-transparent p-3 font-jet text-white placeholder-gray-500 focus:outline-none transition-all duration-300 relative z-10 resize-none" 
                    placeholder="Your message here..."
                  ></textarea>
                  
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-500"></div>
                </div>
                
                <div className="absolute -bottom-3 -left-3 w-1.5 h-1.5 border-l border-b border-white/30 group-hover:border-white/80 transition-colors duration-300"></div>
                <div className="absolute -bottom-3 -right-3 w-1.5 h-1.5 border-r border-b border-white/30 group-hover:border-white/80 transition-colors duration-300"></div>
              </div>
            </div>

            {/* Submit Button */}
                        <div className="pt-4">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="relative w-full px-6 py-3 font-exo font-semibold bg-white/5 hover:bg-white/10 text-white rounded-md transition-colors duration-300 group disabled:bg-gray-800 disabled:border-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed overflow-hidden"
              >
                {/* Geometric Corner Details */}
                <span className="absolute top-1 left-1 w-2 h-2 border-l border-t border-white/40 group-hover:border-white transition-colors duration-300"></span>
                <span className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-white/40 group-hover:border-white transition-colors duration-300"></span>

                {/* Animated Border Lines */}
                <span className="absolute top-0 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-300" style={{ transitionDelay: '0s' }}></span>
                <span className="absolute top-0 right-0 w-px h-0 bg-white group-hover:h-full transition-all duration-300" style={{ transitionDelay: '0.15s' }}></span>
                <span className="absolute bottom-0 right-0 h-px w-0 bg-white group-hover:w-full transition-all duration-300" style={{ transitionDelay: '0.3s' }}></span>
                <span className="absolute bottom-0 left-0 w-px h-0 bg-white group-hover:h-full transition-all duration-300" style={{ transitionDelay: '0.45s' }}></span>
                
                {/* Tech Enhancement - Scanning Line */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></span>
                </span>
                
                {/* Button Text with Tech Styling */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white transform rotate-45"></span>
                  <span className="tracking-[0.1em]">
                    {status === 'submitting' ? 'TRANSMITTING...' : 'SEND_MESSAGE'}
                  </span>
                  <span className="w-1.5 h-1.5 bg-white transform rotate-45"></span>
                </span>
              </button>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="mt-4 p-3 border border-green-500/50 bg-green-500/10 text-center"
                   style={{clipPath: 'polygon(6px 0%, 100% 0%, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0% 100%, 0% 6px)'}}>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 transform rotate-45"></div>
                  <p className="text-green-400 font-jet text-xs tracking-wide">MESSAGE SENT</p>
                  <div className="w-1.5 h-1.5 bg-green-500 transform rotate-45"></div>
                </div>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mt-4 p-3 border border-red-500/50 bg-red-500/10 text-center"
                   style={{clipPath: 'polygon(6px 0%, 100% 0%, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0% 100%, 0% 6px)'}}>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 transform rotate-45"></div>
                  <p className="text-red-400 font-jet text-xs tracking-wide">SEND FAILED</p>
                  <div className="w-1.5 h-1.5 bg-red-500 transform rotate-45"></div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* External Corner Markers */}
      <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-white/20 group-hover:border-white/60 transition-colors duration-300"></div>
      <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-white/20 group-hover:border-white/60 transition-colors duration-300"></div>
      <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-white/20 group-hover:border-white/60 transition-colors duration-300"></div>
      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-white/20 group-hover:border-white/60 transition-colors duration-300"></div>
    </div>
  );
};

export default ContactForm;