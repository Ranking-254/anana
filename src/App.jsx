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

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false); 
  // NEW: Legal visibility state
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [cursorType, setCursorType] = useState("default");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`relative min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark bg-dark-bg text-dark-text' : 'bg-bakery-cream text-bakery-crust'}`}>
      
      <div className="grain-overlay" />
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
        >
          <Hero onOpenOrder={() => setIsOrderOpen(true)} setCursorType={setCursorType} />
          <WhyChooseUs /> 
          <SpecialsSlider />
          
          <div onMouseEnter={() => setCursorType("view")} onMouseLeave={() => setCursorType("default")}>
            <MenuSection />
            <Gallery />
          </div>
          
          <Inquiry isDarkMode={isDarkMode} />
        </motion.main>
      </AnimatePresence>

      {/* Pass the toggle function to the Footer */}
      <Footer onOpenLegal={() => setIsLegalOpen(true)} />
      
      {/* Legal Overlay - now sits outside main content */}
      <Legal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />

      <SubscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <OrderForm isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />
    </div>
  );
}

export default App;