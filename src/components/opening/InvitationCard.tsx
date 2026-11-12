import React from 'react';
import { CornerFlourish, Lotus, Diamond } from '../botanical/Botanicals';

export const InvitationCard: React.FC = () => {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background: 'linear-gradient(168deg, #FDF8EE 0%, #F8F1E3 52%, #F0E6D2 100%)',
        boxShadow:
          '0 1px 0 rgba(255,255,255,0.8) inset, 0 -1px 0 rgba(61,41,35,0.10) inset, 0 26px 50px -26px rgba(85,32,42,0.5)',
      }}
    >
      <div className="grain" />
      <div className="laid" />

      {/* Double rule border */}
      <div className="pointer-events-none absolute inset-[9px] border border-[#B89452]/45" />
      <div className="pointer-events-none absolute inset-[14px] border border-[#B89452]/20" />

      <CornerFlourish className="pointer-events-none absolute left-[8px] top-[8px] h-12 w-12 opacity-70 sm:h-14 sm:w-14" />
      <CornerFlourish className="pointer-events-none absolute right-[8px] top-[8px] h-12 w-12 -scale-x-100 opacity-70 sm:h-14 sm:w-14" />
      <CornerFlourish className="pointer-events-none absolute bottom-[8px] left-[8px] h-12 w-12 -scale-y-100 opacity-70 sm:h-14 sm:w-14" />
      <CornerFlourish className="pointer-events-none absolute bottom-[8px] right-[8px] h-12 w-12 -scale-100 opacity-70 sm:h-14 sm:w-14" />

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <Lotus className="h-7 w-auto opacity-80 sm:h-8" />

        <p className="mt-3 font-serif text-[0.72rem] italic text-[#B89452] sm:text-xs tracking-wider">
          With the blessings of our families
        </p>

        <p className="mt-1 font-roboto text-[9px] uppercase tracking-[0.24em] text-[#702C35] font-medium">
          ENGAGEMENT CEREMONY
        </p>

        <h1 className="mt-2 font-serif text-[1.85rem] font-light leading-[1.05] text-[#702C35] sm:text-[2.4rem]">
          Rabin R
        </h1>

        <div className="my-1 flex items-center gap-2 sm:my-1.5">
          <span className="h-px w-6 bg-[#B89452]/55 sm:w-8" />
          <span className="font-serif text-base italic text-[#B89452] sm:text-xl">&amp;</span>
          <span className="h-px w-6 bg-[#B89452]/55 sm:w-8" />
        </div>

        <h1 className="font-serif text-[1.85rem] font-light leading-[1.05] text-[#702C35] sm:text-[2.4rem]">
          Lakshmi C P
        </h1>

        <div className="mt-3 flex items-center gap-2 sm:mt-5">
          <Diamond className="h-2 w-2" />
          <p className="font-roboto text-[0.62rem] font-medium uppercase tracking-[0.28em] text-[#3D2923]/75 sm:text-[0.72rem]">
            15 · NOVEMBER · 2026
          </p>
          <Diamond className="h-2 w-2" />
        </div>

        <p className="mt-1 font-roboto text-[9px] text-[#8F6E37] tracking-wider">
          EAST AVENUE HOTEL, KOZHIKODE
        </p>
      </div>
    </div>
  );
};
