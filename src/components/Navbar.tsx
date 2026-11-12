import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fffaf5]/90 backdrop-blur-md shadow-sm border-b border-[#e9c9b9]/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="font-serif text-lg md:text-xl font-medium tracking-wide text-[#8a5a4a] hover:opacity-80 transition-opacity"
        >
          Rabin &amp; Lakshmi
        </button>

        <nav className="flex items-center gap-4 md:gap-8 text-xs tracking-widest uppercase font-sans text-[#5b3a2e]">
          <button
            onClick={() => scrollTo('countdown')}
            className="hover:text-[#b8935a] transition-colors"
          >
            Countdown
          </button>
          <button
            onClick={() => scrollTo('memories')}
            className="hover:text-[#b8935a] transition-colors"
          >
            Memories
          </button>
          <button
            onClick={() => scrollTo('venue')}
            className="hover:text-[#b8935a] transition-colors"
          >
            Location
          </button>
          <button
            onClick={() => scrollTo('blessings')}
            className="hidden sm:inline-block hover:text-[#b8935a] transition-colors"
          >
            Wishes
          </button>
        </nav>
      </div>
    </header>
  );
};
