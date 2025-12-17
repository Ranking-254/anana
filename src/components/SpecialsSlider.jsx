// src/components/SpecialsSlider.jsx
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export const SpecialsSlider = () => {
  // This ref must be on a container with non-static position
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset defines when the animation starts/ends relative to the viewport
    offset: ["start end", "end start"] 
  });

  // map scroll progress to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-70%"]);

  return (
    /* The main container now has 'relative' positioning to satisfy the warning */
    <section ref={targetRef} className="relative h-[300vh] bg-bakery-crust">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-24">
          {['Strawberry bliss', 'Butter Croissant', 'Lemmon Zesty', 'Black Forest'].map((item, i) => (
            <div 
              key={i} 
              className="group relative h-[450px] w-[350px] flex-shrink-0 bg-bakery-cream/10 rounded-[3rem] p-12 overflow-hidden border border-white/10"
            >
              <span className="text-bakery-cream font-mono text-sm opacity-50">0{i + 1}</span>
              <h3 className="text-5xl font-serif text-bakery-cream mt-4 leading-tight">{item}</h3>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-bakery-sage blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};