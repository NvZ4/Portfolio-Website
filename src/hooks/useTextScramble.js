// hooks/useTextScramble.js

import { useState, useEffect, useRef } from 'react';

const useTextScramble = (text, options = {}) => {
  const { speed = 50, delay = 0 } = options;
  const [displayText, setDisplayText] = useState('');
  const textRef = useRef(text);

  useEffect(() => {
    // Pastikan teks diupdate jika prop berubah
    textRef.current = text;
  }, [text]);

  useEffect(() => {
    const chars = '!<>-_\\/[]{}—=+*^?#';
    let frameRequest;
    let frame;
    let queue = [];

    const scramble = () => {
      let output = '';
      let complete = 0;
      for (let i = 0, n = textRef.current.length; i < n; i++) {
        const from = textRef.current[i];
        const to = queue[i]?.to || from;
        const start = queue[i]?.start || 0;
        const end = queue[i]?.end || 0;
        const char = queue[i]?.char;

        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            queue[i].char = chars[Math.floor(Math.random() * chars.length)];
          }
          output += `<span class="text-gray-500">${queue[i].char}</span>`;
        } else {
          output += from;
        }
      }
      setDisplayText(output);
      if (complete === textRef.current.length) {
        cancelAnimationFrame(frameRequest);
        return;
      }
      frameRequest = requestAnimationFrame(scramble);
      frame++;
    };

    const decode = () => {
        setDisplayText(textRef.current); // Set initial text without html for correct length
        queue = [];
        for (let i = 0; i < textRef.current.length; i++) {
            const start = Math.floor(Math.random() * speed);
            const end = start + Math.floor(Math.random() * speed);
            queue.push({ from: ' ', to: textRef.current[i], start, end });
        }
        frame = 0;
        scramble();
    };
    
    const timeoutId = setTimeout(decode, delay);

    return () => {
        clearTimeout(timeoutId);
        cancelAnimationFrame(frameRequest);
    };

  }, [speed, delay, text]);

  // Menggunakan dangerouslySetInnerHTML karena kita memasukkan HTML span untuk warna
  return <div dangerouslySetInnerHTML={{ __html: displayText }} />;
};

export default useTextScramble;