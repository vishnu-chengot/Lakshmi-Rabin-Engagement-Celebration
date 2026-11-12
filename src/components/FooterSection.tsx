import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="pt-6 pb-20 px-6 text-center">
      <div className="max-w-md mx-auto space-y-3">
        <p className="font-display text-3xl sm:text-4xl font-light tracking-[0.04em] text-[#702C35]">
          Rabin &amp; Lakshmi
        </p>
        <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-[#8F6E37] font-medium">
          15 November 2026 &bull; East Avenue Hotel
        </p>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#B89452] to-transparent mx-auto my-4" />
        <p className="font-display italic text-sm text-[#3D2923]/70">
          With the love &amp; blessings of our families.
        </p>
      </div>
    </footer>
  );
};
