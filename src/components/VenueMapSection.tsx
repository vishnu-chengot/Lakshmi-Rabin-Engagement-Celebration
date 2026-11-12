import React from 'react';
import { Diamond } from './botanical/Botanicals';

export const VenueMapSection: React.FC = () => {
  const venueTitle = "East Avenue Hotel";
  const venueAddress = "East Nadakkavu, Wayanad Road, Kozhikode, Kerala 673006";
  const exactDirectionUrl = "https://www.google.com/search?client=ms-android-vivo-terr1-rso2&hs=3Bzq&sca_esv=32b75434e7cee9b4&sxsrf=AKL5yDjAwUtlEcxiHIn15ogDQBjp5nqrHQ%3A1794462392711&kgmid=%2Fg%2F1tp2ytvq&q=East%20Avenue%20Hotel&shem=dlvs1%2Cepsd1%2Cltae%2Crimspwouoe&shndl=30&source=sh%2Fx%2Floc%2Funi%2Fm1%2F2&kgs=67c932d40c391f2c";
  const mapEmbedUrl = "https://maps.google.com/maps?q=East+Avenue+Hotel,+East+Nadakkavu,+Wayanad+Road,+Kozhikode,+Kerala+673006&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="py-16 px-6 sm:px-10 text-center">
      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-[#8F6E37] mb-3">
        JOIN OUR CELEBRATION
      </p>
      <h3 className="font-display text-3xl sm:text-4xl font-normal text-[#702C35] mb-2 leading-snug">
        Venue &amp; Location
      </h3>
      <p className="font-display text-xl sm:text-2xl uppercase tracking-[0.12em] text-[#3D2923] font-semibold mt-2">
        {venueTitle}
      </p>
      <p className="font-sans text-xs text-[#3D2923]/70 mt-1.5 mb-8 tracking-wider">
        {venueAddress}
      </p>

      {/* Timing and Location Info Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg mx-auto mb-8 text-left">
        <div className="bg-[#FDF9F0] border border-[#B89452]/30 rounded-xl p-5 text-center shadow-xs">
          <div className="flex items-center justify-center gap-2 text-[#702C35] mb-2">
            <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="font-sans text-[11px] uppercase tracking-[0.24em] font-medium text-[#8F6E37]">
              Auspicious Timing
            </span>
          </div>
          <p className="font-display text-lg font-normal text-[#3D2923]">
            Muhurtham: 10:30 AM – 11:30 AM
          </p>
          <p className="font-display italic text-xs text-[#667052] mt-1">
            Followed by traditional celebratory feast
          </p>
        </div>

        <div className="bg-[#FDF9F0] border border-[#B89452]/30 rounded-xl p-5 text-center shadow-xs">
          <div className="flex items-center justify-center gap-2 text-[#702C35] mb-2">
            <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="font-sans text-[11px] uppercase tracking-[0.24em] font-medium text-[#8F6E37]">
              Destination
            </span>
          </div>
          <p className="font-display text-lg font-normal text-[#3D2923]">
            East Avenue Hotel, Calicut
          </p>
          <p className="font-sans text-xs text-[#3D2923]/70 mt-1">
            Opp. Baby Memorial Hospital road / Nadakkavu
          </p>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="rounded-2xl overflow-hidden border border-[#B89452]/40 shadow-md max-w-lg mx-auto mb-8 aspect-4/3 sm:aspect-16/10">
        <iframe
          title="East Avenue Hotel Kozhikode Location Map"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '270px' }}
          loading="lazy"
          allowFullScreen
          src={mapEmbedUrl}
        />
      </div>

      {/* Google Maps Exact Link */}
      <div className="flex justify-center">
        <a
          href={exactDirectionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#702C35] text-[#FDF8EE] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#55202A] hover:-translate-y-0.5 transition-all shadow-md"
        >
          <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
          Get Directions in Google Maps
        </a>
      </div>

      <div className="mt-14 flex items-center justify-center gap-3 w-40 mx-auto">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B89452]/60" />
        <Diamond className="h-2 w-2" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B89452]/60" />
      </div>
    </section>
  );
};
