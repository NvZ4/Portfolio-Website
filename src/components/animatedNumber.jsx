import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

const AnimatedNumber = ({ to }) => {
  const nodeRef = useRef();
  const value = parseInt(to.replace("+", ""), 10);

  useEffect(() => {
    const node = nodeRef.current;
    const controls = animate(0, value, {
      duration: 1.5,
      onUpdate(latest) {
        node.textContent = Math.round(latest);
      }
    });
    return () => controls.stop();
  }, [value]);

  return <span ref={nodeRef} />;
};

export default AnimatedNumber;