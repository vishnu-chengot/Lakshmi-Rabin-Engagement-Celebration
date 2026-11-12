import React, { useState, useEffect } from 'react';
import { Diamond } from './botanical/Botanicals';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownSection: React.FC = () => {
  const targetDate = new Date('2026-11-15T10:30:00+05:30').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate - new Date().getTime();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const addToGoogleCalendar = () => {
    const title = encodeURIComponent("Engagement Ceremony — Rabin & Lakshmi");
    const details = encodeURIComponent(
      "With the blessings of our families, joyfully invite you to celebrate the engagement ceremony of Rabin R & Lakshmi C P at East Avenue Hotel, Kozhikode."
    );
    const location = encodeURIComponent("East Avenue Hotel, Wayanad Road, East Nadakkavu, Kozhikode, Kerala 673006");
    const startDate = "20261115T050000Z";
    const endDate = "20261115T083000Z";
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 px-6 sm:px-12 text-center">
      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-[#8F6E37] mb-3">
        COUNTING DOWN THE MOMENTS
      </p>
      <h3 className="font-display text-3xl sm:text-4xl font-normal text-[#702C35] mb-8 leading-snug">
        Until We Celebrate Together
      </h3>

      {/* Counter Grid */}
      <div className="grid grid-cols-4 gap-3 sm:gap-5 max-w-md mx-auto mb-8">
        {[
          { label: 'DAYS', value: timeLeft.days },
          { label: 'HOURS', value: timeLeft.hours },
          { label: 'MINUTES', value: timeLeft.minutes },
          { label: 'SECONDS', value: timeLeft.seconds },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#FDF9F0] border border-[#B89452]/30 rounded-xl p-3.5 sm:p-5 flex flex-col items-center justify-center shadow-xs"
          >
            <span className="font-sans text-2xl sm:text-3xl font-light text-[#702C35]">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-[#8F6E37] mt-1.5 font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={addToGoogleCalendar}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#c5a059] via-[#fae8c8] to-[#b89452] text-[#3D2923] font-sans text-xs font-medium tracking-[0.18em] uppercase hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border border-[#b89452] cursor-pointer"
        >
          <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Add to Calendar
        </button>
      </div>

      <div className="mt-14 flex items-center justify-center gap-3 w-40 mx-auto">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B89452]/60" />
        <Diamond className="h-2 w-2" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B89452]/60" />
      </div>
    </section>
  );
};
