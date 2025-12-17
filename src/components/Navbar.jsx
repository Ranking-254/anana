import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const Navbar = ({ 
  onOpenModal, 
  onOpenOrder, 
  setCursorType, 
  isDarkMode, 
  onToggleTheme 
}) => (
  <nav className="fixed top-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference text-bakery-cream">
    <div className="text-2xl font-black tracking-tighter uppercase cursor-default">Hearth.</div>
    
    <div className="flex items-center gap-10">
      <div className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.2em]">
        {/* Theme Toggle Button */}
        <button 
          onClick={onToggleTheme}
          onMouseEnter={() => setCursorType("view")}
          onMouseLeave={() => setCursorType("default")}
          className="p-2 rounded-full border border-current/20 hover:bg-current/10 transition-colors"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
        </button>

        <button 
          onClick={onOpenOrder}
          onMouseEnter={() => setCursorType("order")}
          onMouseLeave={() => setCursorType("default")}
          className="hover:opacity-50 transition-opacity"
        >
          Order Now
        </button>
        
        <a 
          href="#inquiry" 
          onMouseEnter={() => setCursorType("view")}
          onMouseLeave={() => setCursorType("default")}
          className="hover:opacity-50 transition-opacity"
        >
          Consultation
        </a>
      </div>
      
      <motion.button 
        onClick={onOpenModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-bakery-sage text-bakery-cream px-6 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-lg"
      >
        Join Club
      </motion.button>
    </div>
  </nav>
);