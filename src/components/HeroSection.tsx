import React from 'react';
import { Lotus, Diamond } from './botanical/Botanicals';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-20 pb-16 px-6 sm:px-12 text-center flex flex-col items-center">
      
      {/* Top Lotus Motif */}
      <div className="mb-6 text-[#B89452]">
        <Lotus className="h-8 w-auto sm:h-10 mx-auto opacity-80" />
      </div>

      {/* Blessing Introductory Line */}
      <p className="font-display text-base sm:text-lg italic text-[#B89452] tracking-wide mb-8">
        With the blessings of our families
      </p>

      {/* Ceremony Tag */}
      <div className="flex items-center justify-center gap-3 mb-10 w-full max-w-xs">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B89452]/60" />
        <p className="font-sans text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.3em] text-[#8F6E37]">
          ENGAGEMENT CEREMONY
        </p>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B89452]/60" />
      </div>

      {/* Couple Names — Matching the reference typography with generous line height and spacing */}
      <div className="flex flex-col items-center justify-center w-full max-w-lg mb-10">
        <h1 className="font-display text-[3.2rem] sm:text-[4.6rem] md:text-[5.4rem] font-light leading-[1.05] text-[#702C35] tracking-[0.01em]">
          Rabin R
        </h1>

        <div className="my-6 sm:my-8 flex flex-col items-center gap-2.5">
          <Lotus className="h-5 w-auto opacity-70 text-[#B89452]" />
          <span className="font-display text-base sm:text-xl italic text-[#B89452] font-normal tracking-wide">
            with
          </span>
        </div>

        <h1 className="font-display text-[3.2rem] sm:text-[4.6rem] md:text-[5.4rem] font-light leading-[1.05] text-[#702C35] tracking-[0.01em]">
          Lakshmi C P
        </h1>

        <p className="mt-7 font-sans text-xs sm:text-[0.82rem] leading-relaxed tracking-[0.06em] text-[#3D2923]/70 max-w-md">
          Cordially invite you to share in the joy and blessings of our engagement celebration
        </p>
      </div>

      {/* Couple Portrait Frame: Dedicated Airy Showcase */}
      <div className="relative my-8 group">
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-1.5 bg-gradient-to-br from-[#c5a059] via-[#fae8c8] to-[#b89452] shadow-xl ring-4 ring-[#ebd0c1]/60 transition-transform duration-500 group-hover:scale-[1.02]">
          <img
            src="/couple.jpg"
            alt="Rabin R and Lakshmi C P"
            className="w-full h-full object-cover object-[50%_38%] rounded-full"
          />
        </div>
      </div>

      {/* Ceremony Date & Muhurtham Showcase */}
      <div className="mt-8 mb-10 w-full max-w-md bg-gradient-to-b from-[#FDF9F0] to-[#F8F1E3] border border-[#B89452]/30 rounded-2xl py-6 px-8 shadow-xs">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Diamond className="h-2 w-2" />
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.34em] text-[#8F6E37]">
            SAVE THE DATE
          </p>
          <Diamond className="h-2 w-2" />
        </div>

        <time
          dateTime="2026-11-15"
          className="font-display text-2xl sm:text-3xl font-normal tracking-[0.06em] text-[#702C35] block my-2"
        >
          Sunday, 15 November 2026
        </time>

        <div className="w-20 h-px bg-[#B89452]/40 mx-auto my-3" />

        <p className="font-sans text-xs sm:text-[13px] font-light tracking-[0.1em] text-[#3D2923]/85">
          Auspicious Muhurtham: 10:00 AM – 11:30 AM
        </p>
        <p className="font-display text-xs italic text-[#667052] mt-1.5">
          Followed by traditional celebratory feast
        </p>
      </div>

      {/* Venue Showcase */}
      <div className="mb-6">
        <p className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-[#8F6E37] mb-2">
          VENUE
        </p>
        <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase tracking-[0.12em] text-[#3D2923]">
          East Avenue Hotel
        </h3>
        <p className="font-sans text-xs text-[#3D2923]/70 mt-1.5 tracking-wider">
          East Nadakkavu, Wayanad Road, Kozhikode, Kerala
        </p>
      </div>

      {/* Heartfelt Quote */}
      <p className="font-display italic text-base sm:text-lg leading-relaxed text-[#3D2923]/75 max-w-md font-normal mt-4">
        &ldquo;Your presence, blessings, and warm wishes will make our celebration truly special.&rdquo;
      </p>

      {/* Section Divider */}
      <div className="mt-12 flex items-center justify-center gap-3 w-40">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B89452]/60" />
        <Diamond className="h-2 w-2" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B89452]/60" />
      </div>
    </section>
  );
};
