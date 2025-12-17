import { motion } from 'framer-motion';
import { Reveal } from './reveal';

export const Hero = ({ onOpenOrder }) => {
  return (
    <header className="relative min-h-screen flex flex-col">
      {/* 1. Top Ticker (The Artisan News) */}
      <div className="bg-bakery-cream/80 backdrop-blur-sm py-2 border-b border-bakery-crust/5 overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="inline-block font-mono text-[8px] uppercase tracking-[0.3em] space-x-12"
        >
          <span>● Sourdough: Sold Out</span>
          <span>● Black Forest Cake: Ready Now</span>
          <span>● Tiramisu: Cooling</span>
          <span>● Sourdough: Sold Out</span>
          <span>● Black Forest Cake: Ready Now</span>
          <span>● Cookies: Ready Now</span>
          <span>● Strawberry bliss: Ready Now</span>
          <span>● Chocolate Fudge: Ready Now</span>
        </motion.div>
      </div>

      {/* 2. Main Hero Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Typography & Action */}
        <div className="bg-bakery-sage/20 p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
          <Reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-bakery-sage mb-6 block">
              Naturally Leavened — 36hr Ferment
            </span>
          </Reveal>
          
          <Reveal>
            <h1 className="text-[8vw] lg:text-[6vw] font-serif leading-[0.9] text-bakery-crust tracking-tighter mb-8">
              THE ART <br /> Baking
            </h1>
          </Reveal>

          <Reveal>
            <p className="max-w-xs font-serif italic text-bakery-crust/70 text-lg mb-12">
              "We don't believe in shortcuts..."
            </p>
          </Reveal>

          <motion.button 
            onClick={onOpenOrder}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-fit bg-bakery-cream text-bakery-crust px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-widest shadow-xl shadow-bakery-sage/10 border border-bakery-sage/20"
          >
            Make your Order
          </motion.button>
          
          {/* Circular Badge Decor */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-24 right-12 w-32 h-32 border border-bakery-crust/10 rounded-full flex items-center justify-center pointer-events-none"
          >
            <span className="font-mono text-[8px] uppercase tracking-widest opacity-30 "> Hearth  ●  Hearth  ●</span>
          </motion.div>
        </div>

        {/* Right Side: Large Imagery */}
        <div className="relative h-[60vh] lg:h-auto overflow-hidden">
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1200"
            alt="Signature Cake"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};