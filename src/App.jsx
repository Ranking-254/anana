import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SpecialsSlider } from './components/SpecialsSlider';
import { MenuSection } from './components/MenuSection';
import { Gallery } from './pages/Gallery';
import { Inquiry } from './pages/InquiryForm'; 
import { OrderForm } from './pages/OrderNow'; 
import { Footer } from './components/Footer';
import { SubscriptionModal } from './components/SubscriptionModal';
import { Legal } from './pages/legal';
import {FAQ} from './pages/FAQ';

 const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false); 
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [cursorType, setCursorType] = useState("default");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    /* FIX 1: overflow-x-hidden prevents content from bleeding off the right side.
      FIX 2: w-screen ensures the container never exceeds the device width.
    */
    <div className={`relative min-h-screen w-full overflow-x-hidden transition-colors duration-500 ${
      isDarkMode ? 'dark bg-dark-bg text-dark-text' : 'bg-bakery-cream text-bakery-crust'
    }`}>
      
      <div className="grain-overlay" />
      
      {/* FIX 3: CustomCursor is usually hidden on mobile via CSS 
        to prevent 'ghost' touches interfering with clicks. 
      */}
      <CustomCursor cursorType={cursorType} />

      <Navbar 
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onOpenModal={() => setIsModalOpen(true)} 
        onOpenOrder={() => setIsOrderOpen(true)} 
        setCursorType={setCursorType}
      />
      
      <AnimatePresence mode="wait">
        <motion.main
          key="main-content"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          /* FIX 4: Ensure main content stays centered and padded on mobile */
          className="w-full flex flex-col"
        >
          <Hero onOpenOrder={() => setIsOrderOpen(true)} setCursorType={setCursorType} />
          
          <WhyChooseUs /> 
          
          <SpecialsSlider />
          
          <div onMouseEnter={() => setCursorType("view")} onMouseLeave={() => setCursorType("default")}>
            <MenuSection />
            <Gallery />
          </div>
          
          <Inquiry isDarkMode={isDarkMode} />
          <FAQ />
        </motion.main>
      </AnimatePresence>

      <Footer onOpenLegal={() => setIsLegalOpen(true)} />
      
      <Legal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
      <SubscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <OrderForm isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />

        <SubscriptionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onOpenOrder={() => setIsOrderOpen(true)} 
      />

      <OrderForm isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />

    </div>
  );
}

export default App;