import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export const CustomCursor = ({ cursorType }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 250 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    // FIX: Changed removeMouseMoveListener to removeEventListener
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]); // Added dependencies for best practice

  const variants = {
    default: { 
      width: 32, 
      height: 32, 
      backgroundColor: "transparent",
      transition: { type: "spring", damping: 20 } 
    },
    view: { 
      width: 80, 
      height: 80, 
      backgroundColor: "#F9F6F1", 
      mixBlendMode: "difference",
      transition: { type: "spring", damping: 20 } 
    },
    order: { 
      width: 100, 
      height: 100, 
      backgroundColor: "#7B8C7E", 
      scale: 1.1,
      transition: { type: "spring", damping: 20 } 
    }
  };

  return (
    <motion.div
      style={{ 
        x, 
        y, 
        left: -16, 
        top: -16,
        position: 'fixed'
      }}
      animate={cursorType || "default"}
      variants={variants}
      className="pointer-events-none z-[999] rounded-full border border-bakery-sage flex items-center justify-center overflow-hidden"
    >
      <span className="font-mono text-[8px] uppercase font-bold text-bakery-crust text-center">
        {cursorType !== "default" ? cursorType : ""}
      </span>
    </motion.div>
  );
};