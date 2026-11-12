import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { RoyalCurtain } from './components/curtain/RoyalCurtain';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { MemoriesSection } from './components/MemoriesSection';
import { VenueMapSection } from './components/VenueMapSection';
import { FooterSection } from './components/FooterSection';
import { BotanicalSprig } from './components/BotanicalAccents';

export const App: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const still = useReducedMotion();

  // Prevent background scrolling while curtain is closed
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [opened]);

  return (
    <>
      {/* Royal Velvet & Gold Curtain Opening Experience on Page Start */}
      <AnimatePresence>
        {!opened && (
          <motion.div
            key="curtain"
            exit={{ opacity: 0, transition: { duration: 0.9, ease: 'easeInOut' } }}
          >
            <RoyalCurtain onOpened={() => setOpened(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Invitation Suite */}
      <motion.main
        className="min-h-screen bg-[#F8F1E3] py-0 sm:py-10 px-0 sm:px-4 flex justify-center items-start relative z-10"
        initial={false}
        animate={{ opacity: opened ? 1 : 0 }}
        transition={{ duration: still ? 0 : 1.2, ease: [0.22, 0.61, 0.24, 1] }}
      >
        {/* Unified, Continuous Luxury Invitation Canvas */}
        <div className="w-full max-w-2xl bg-[#FDFBF7] relative shadow-2xl sm:rounded-3xl border-x-0 sm:border border-[#B89452]/25 overflow-hidden">
          
          {/* Continuous Inset Borders */}
          <div className="absolute inset-3 border border-[#B89452]/50 pointer-events-none z-20 rounded-none sm:rounded-2xl" />
          <div className="absolute inset-5 border border-[#B89452]/20 pointer-events-none z-20 rounded-none sm:rounded-xl" />

          {/* Corner Botanical Linework Accents */}
          <div className="absolute top-5 left-5 pointer-events-none z-30 text-[#8a4e3d] opacity-60">
            <BotanicalSprig className="w-24 h-24 sm:w-28 sm:h-28" />
          </div>
          <div className="absolute top-5 right-5 pointer-events-none z-30 text-[#8a4e3d] opacity-60 -scale-x-100">
            <BotanicalSprig className="w-24 h-24 sm:w-28 sm:h-28" />
          </div>
          <div className="absolute bottom-5 left-5 pointer-events-none z-30 text-[#8a4e3d] opacity-60 -scale-y-100">
            <BotanicalSprig className="w-24 h-24 sm:w-28 sm:h-28" />
          </div>
          <div className="absolute bottom-5 right-5 pointer-events-none z-30 text-[#8a4e3d] opacity-60 rotate-180">
            <BotanicalSprig className="w-24 h-24 sm:w-28 sm:h-28" />
          </div>

          {/* Soft Ambient Organic Blush Shapes */}
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#ebd0c1]/35 pointer-events-none blur-md" />
          <div className="absolute top-1/3 -right-28 w-72 h-72 rounded-full bg-[#ebd0c1]/25 pointer-events-none blur-md" />
          <div className="absolute top-2/3 -left-28 w-72 h-72 rounded-full bg-[#ebd0c1]/25 pointer-events-none blur-md" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-[#ebd0c1]/35 pointer-events-none blur-md" />

          {/* Main Continuous Content Stream */}
          <div className="relative z-10">
            <HeroSection />
            <CountdownSection />
            <MemoriesSection />
            <VenueMapSection />
            <FooterSection />
          </div>

        </div>
      </motion.main>
    </>
  );
};

export default App;
