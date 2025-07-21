// hooks/useCountUp.js
import { useEffect, useState, useRef } from 'react';

export const useCountUp = (endValue, duration = 1500, isVisible) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseInt(endValue.toString().replace(/,/g, ''));
    if (start === end) return;

    const totalFrames = Math.round(duration / (1000 / 60));
    const increment = end / totalFrames;

    const counter = () => {
      start += increment;
      if (start < end) {
        setCount(Math.ceil(start));
        ref.current = requestAnimationFrame(counter);
      } else {
        setCount(end);
      }
    };

    ref.current = requestAnimationFrame(counter);

    return () => cancelAnimationFrame(ref.current);
  }, [endValue, duration, isVisible]);

  return count;
};