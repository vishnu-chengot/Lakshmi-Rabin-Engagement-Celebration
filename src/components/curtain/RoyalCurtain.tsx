import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Lotus } from '../botanical/Botanicals';

type RoyalCurtainProps = {
  onOpened: () => void;
};

export const RoyalCurtain: React.FC<RoyalCurtainProps> = ({ onOpened }) => {
  const [opening, setOpening] = useState(false);
  const still = useReducedMotion();

  const handleOpen = useCallback(() => {
    if (opening) return;
    setOpening(true);

    if (still) {
      onOpened();
      return;
    }

    // Curtains draw open in 1.8s, then handover smoothly
    setTimeout(() => {
      onOpened();
    }, 2100);
  }, [opening, still, onOpened]);

  // Velvet fold pattern
  const velvetFolds =
    'repeating-linear-gradient(90deg, rgba(0,0,0,0.55) 0px, rgba(0,0,0,0.18) 18px, rgba(255,255,255,0.15) 36px, rgba(0,0,0,0.25) 54px, rgba(0,0,0,0.65) 72px)';

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden select-none"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(20,8,11,0.92) 0%, #150609 100%)',
      }}
    >
      {/* Background ambient lighting behind parting curtains */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: opening ? 1 : 0 }}
        transition={{ duration: 1.2 }}
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(248,241,227,0.85) 0%, rgba(216,190,134,0.3) 50%, transparent 80%)',
        }}
      />

      {/* ====================================================================
          LEFT CURTAIN PANEL
          ==================================================================== */}
      <motion.div
        className="absolute top-0 bottom-0 left-0 w-1/2 origin-left z-20 overflow-hidden"
        initial={{ x: '0%', scaleX: 1 }}
        animate={
          opening
            ? {
                x: '-82%',
                scaleX: 0.28,
                transition: { duration: 1.9, ease: [0.65, 0.05, 0.2, 1] },
              }
            : { x: '0%', scaleX: 1 }
        }
        style={{
          background: 'linear-gradient(135deg, #42111A 0%, #5e1c27 30%, #732633 60%, #4a131c 100%)',
          boxShadow: '12px 0 35px rgba(0,0,0,0.65), inset -8px 0 16px rgba(0,0,0,0.4)',
        }}
      >
        {/* Repeating 3D velvet pleats */}
        <div
          className="absolute inset-0 pointer-events-none opacity-85"
          style={{ backgroundImage: velvetFolds }}
        />

        {/* Vertical shimmer highlight */}
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/45 via-transparent to-transparent pointer-events-none" />

        {/* Gold fringe on leading vertical edge */}
        <div className="absolute inset-y-0 right-0 w-[3px] bg-gradient-to-b from-[#b89452] via-[#fae8c8] to-[#8f6e37] opacity-80" />
      </motion.div>

      {/* ====================================================================
          RIGHT CURTAIN PANEL
          ==================================================================== */}
      <motion.div
        className="absolute top-0 bottom-0 right-0 w-1/2 origin-right z-20 overflow-hidden"
        initial={{ x: '0%', scaleX: 1 }}
        animate={
          opening
            ? {
                x: '82%',
                scaleX: 0.28,
                transition: { duration: 1.9, ease: [0.65, 0.05, 0.2, 1] },
              }
            : { x: '0%', scaleX: 1 }
        }
        style={{
          background: 'linear-gradient(225deg, #42111A 0%, #5e1c27 30%, #732633 60%, #4a131c 100%)',
          boxShadow: '-12px 0 35px rgba(0,0,0,0.65), inset 8px 0 16px rgba(0,0,0,0.4)',
        }}
      >
        {/* Repeating 3D velvet pleats */}
        <div
          className="absolute inset-0 pointer-events-none opacity-85"
          style={{ backgroundImage: velvetFolds }}
        />

        {/* Vertical shimmer highlight */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/45 via-transparent to-transparent pointer-events-none" />

        {/* Gold fringe on leading vertical edge */}
        <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#b89452] via-[#fae8c8] to-[#8f6e37] opacity-80" />
      </motion.div>

      {/* ====================================================================
          TOP ROYAL VALANCE / PELMET (Draped Arch with Gold Fringe)
          ==================================================================== */}
      <motion.div
        className="absolute top-0 inset-x-0 z-30 pointer-events-none"
        initial={{ y: 0 }}
        animate={
          opening
            ? {
                y: '-65%',
                opacity: 0,
                transition: { duration: 1.6, ease: [0.4, 0, 0.2, 1] },
              }
            : { y: 0, opacity: 1 }
        }
      >
        {/* Scalloped Swag Drapery */}
        <div
          className="relative h-24 sm:h-32 w-full overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #380d15 0%, #571a24 60%, #6e2430 100%)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.65)',
            borderBottom: '2px solid #b89452',
          }}
        >
          {/* Valance fabric pleats */}
          <div
            className="absolute inset-0 opacity-65"
            style={{ backgroundImage: velvetFolds }}
          />

          {/* Draped Swags Curve Effect */}
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 inset-x-0 w-full h-12 text-[#b89452] opacity-45"
          >
            <path
              d="M0,0 Q300,100 600,30 Q900,100 1200,0 L1200,120 L0,120 Z"
              fill="rgba(0,0,0,0.35)"
            />
          </svg>

          {/* Gold Tassel Bullion Fringe Trim */}
          <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-r from-[#8f6e37] via-[#fae8c8] to-[#8f6e37] flex items-center justify-around overflow-hidden shadow-sm">
            {Array.from({ length: 40 }).map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-3.5 bg-gradient-to-b from-[#fae8c8] to-[#8f6e37] rounded-b-xs opacity-90 mx-0.5"
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ====================================================================
          SIDE GOLD BRAIDED TIEBACK ROPES & TASSELS
          ==================================================================== */}
      <motion.div
        className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 z-25 pointer-events-none"
        animate={opening ? { x: -60, opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-8 sm:w-10 h-28 sm:h-36 flex flex-col items-center">
          <div className="w-full h-8 border-t-2 border-b-2 border-[#b89452] rounded-full opacity-70" />
          <div className="w-1.5 h-16 bg-gradient-to-b from-[#fae8c8] to-[#8f6e37] my-1 rounded-full shadow-md" />
          <div className="w-5 h-8 bg-gradient-to-b from-[#d4af37] to-[#78541c] rounded-b-full shadow-lg" />
        </div>
      </motion.div>

      <motion.div
        className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 z-25 pointer-events-none"
        animate={opening ? { x: 60, opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-8 sm:w-10 h-28 sm:h-36 flex flex-col items-center">
          <div className="w-full h-8 border-t-2 border-b-2 border-[#b89452] rounded-full opacity-70" />
          <div className="w-1.5 h-16 bg-gradient-to-b from-[#fae8c8] to-[#8f6e37] my-1 rounded-full shadow-md" />
          <div className="w-5 h-8 bg-gradient-to-b from-[#d4af37] to-[#78541c] rounded-b-full shadow-lg" />
        </div>
      </motion.div>

      {/* ====================================================================
          CENTER ROYAL MEDALLION & UNVEIL BUTTON
          ==================================================================== */}
      <AnimatePresence>
        {!opening && (
          <motion.div
            className="absolute inset-0 z-40 flex flex-col items-center justify-center p-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 1.25,
              filter: 'blur(10px)',
              transition: { duration: 0.7, ease: 'easeInOut' },
            }}
          >
            {/* Ornate Gold Emblem Medal */}
            <motion.div
              role="button"
              tabIndex={0}
              onClick={handleOpen}
              className="group cursor-pointer relative flex flex-col items-center justify-center p-8 sm:p-10 rounded-full"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Golden circular glow halo */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#fae8c8]/30 via-[#b89452]/20 to-[#fae8c8]/30 blur-xl animate-pulse" />

              {/* Multi-layered luxury jewelry bezel */}
              <div
                className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-2 flex flex-col items-center justify-center shadow-2xl transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.6)]"
                style={{
                  background:
                    'radial-gradient(circle at 35% 30%, #fae8c8 0%, #d4af37 40%, #8f6e37 80%, #5a411a 100%)',
                  border: '2px solid #fae8c8',
                }}
              >
                {/* Inner Velvet Inset */}
                <div
                  className="w-full h-full rounded-full flex flex-col items-center justify-center p-4 border border-[#fae8c8]/50 shadow-inner"
                  style={{
                    background:
                      'radial-gradient(circle at 45% 40%, #571822 0%, #3d1017 70%, #29080e 100%)',
                  }}
                >
                  <Lotus className="h-6 w-auto text-[#fae8c8] opacity-90 mb-1" />

                  <span className="font-display text-2xl sm:text-3xl font-light text-[#fae8c8] tracking-wider leading-none">
                    R &amp; L
                  </span>

                  <span className="font-sans text-[8.5px] uppercase tracking-[0.3em] text-[#fae8c8]/85 mt-2 font-medium">
                    ENGAGEMENT
                  </span>

                  <span className="font-serif italic text-[11px] text-[#fae8c8]/70 mt-1">
                    15 · 11 · 2026
                  </span>
                </div>
              </div>

              {/* Pulsing "Draw Curtains / Tap to Unveil" Badge */}
              <motion.div
                className="mt-8 px-7 py-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#fae8c8] to-[#b89452] text-[#3d1017] font-sans text-xs font-semibold tracking-[0.24em] uppercase shadow-lg border border-[#fae8c8] flex items-center gap-2.5"
                animate={{
                  boxShadow: [
                    '0 4px 15px rgba(212,175,55,0.3)',
                    '0 4px 30px rgba(212,175,55,0.7)',
                    '0 4px 15px rgba(212,175,55,0.3)',
                  ],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span>✦</span>
                <span>Tap to Draw Curtains</span>
                <span>✦</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
