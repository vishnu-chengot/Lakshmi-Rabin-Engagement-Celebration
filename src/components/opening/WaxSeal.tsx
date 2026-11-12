import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SealMotif } from '../botanical/Botanicals';

type WaxSealProps = {
  breaking: boolean;
  className?: string;
};

const blob = '46% 54% 43% 57% / 53% 45% 55% 47%';

export const WaxSeal: React.FC<WaxSealProps> = ({ breaking, className = '' }) => {
  const still = useReducedMotion();

  return (
    <motion.div
      className={`relative ${className}`}
      initial={false}
      animate={
        breaking
          ? still
            ? { opacity: 0 }
            : {
                scale: [1, 0.86, 1.04, 1, 0.94],
                rotate: [0, -6, 8, 26, 54],
                x: [0, 0, 4, 12, 26],
                y: [0, 4, 10, 120, 320],
                opacity: [1, 1, 1, 1, 0],
              }
          : { scale: 1, rotate: 0, x: 0, y: 0, opacity: 1 }
      }
      transition={{
        duration: 1.25,
        times: [0, 0.16, 0.28, 0.66, 1],
        ease: [0.45, 0.02, 0.6, 1],
      }}
    >
      <div
        className="relative h-[68px] w-[68px] sm:h-[76px] sm:w-[76px]"
        style={{
          borderRadius: blob,
          background:
            'radial-gradient(72% 66% at 36% 30%, #8E3B44 0%, #78313B 38%, #642430 70%, #4E1A24 100%)',
          boxShadow:
            'inset 0 2px 3px rgba(255,214,200,0.20), inset 0 -5px 10px rgba(30,7,11,0.55), 0 7px 14px -6px rgba(52,14,20,0.6), 0 2px 3px rgba(52,14,20,0.35)',
        }}
      >
        {/* Squeezed rim */}
        <div
          className="absolute -inset-[3px] -z-10 opacity-80"
          style={{
            borderRadius: '52% 48% 55% 45% / 47% 56% 44% 53%',
            background: 'radial-gradient(60% 58% at 46% 42%, #6E2B34, #521D27 78%, rgba(82,29,39,0) 100%)',
          }}
        />

        {/* Embossed stamp impression */}
        <SealMotif className="absolute inset-0 h-full w-full p-[11px] text-[#3A0E16] opacity-70" />
        <SealMotif className="absolute inset-0 h-full w-full -translate-y-[1px] p-[11px] text-[#EBB9A6] opacity-45" />

        {/* Pressed inner ring */}
        <div
          className="absolute inset-[7px] opacity-70"
          style={{
            borderRadius: '50% 50% 46% 54% / 49% 52% 48% 51%',
            boxShadow: 'inset 0 1px 1px rgba(255,220,205,0.18), inset 0 -1px 3px rgba(35,8,12,0.42)',
          }}
        />
      </div>
    </motion.div>
  );
};
