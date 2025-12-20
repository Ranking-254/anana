import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const Navbar = ({ 
  onOpenModal, 
  onOpenOrder, 
  setCursorType, 
  isDarkMode, 
  onToggleTheme 
}) => (
  <nav className="fixed top-0 w-full z-50 p-4 md:p-8 flex justify-between items-center mix-blend-difference text-bakery-cream transition-all duration-300">
    <div className="text-xl md:text-2xl font-black tracking-tighter uppercase cursor-default">Anana.</div>
    
    <div className="flex items-center gap-4 md:gap-10">
      {/* FIX: Removed 'hidden' so links show on mobile. 
        Added responsive font sizes and gap adjustments. 
      */}
      <div className="flex items-center gap-4 md:gap-8 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em]">
        <button 
          onClick={onToggleTheme}
          onMouseEnter={() => setCursorType("view")}
          onMouseLeave={() => setCursorType("default")}
          className="p-1.5 md:p-2 rounded-full border border-current/20 hover:bg-current/10 transition-colors"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <Sun size={12} className="md:w-[14px]" /> : <Moon size={12} className="md:w-[14px]" />}
        </button>

        <button 
          onClick={onOpenOrder}
          onMouseEnter={() => setCursorType("order")}
          onMouseLeave={() => setCursorType("default")}
          className="hover:opacity-50 transition-opacity"
        >
          Order
        </button>
        
        {/* Only show Consultation on medium screens and up to save space on mobile */}
        <a 
          href="#inquiry" 
          onMouseEnter={() => setCursorType("view")}
          onMouseLeave={() => setCursorType("default")}
          className="hidden sm:inline-block hover:opacity-50 transition-opacity"
        >
          Consultation
        </a>
      </div>
      
      <motion.button 
        onClick={onOpenModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-bakery-sage text-bakery-cream px-4 md:px-6 py-2 rounded-full font-bold text-[8px] md:text-[10px] uppercase tracking-widest shadow-lg whitespace-nowrap"
      >
        Join Club
      </motion.button>
    </div>
  </nav>
);