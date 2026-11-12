import React, { useState } from 'react';
import { GoldDivider } from './BotanicalAccents';

interface Wish {
  id: string;
  name: string;
  message: string;
  date: string;
}

const initialWishes: Wish[] = [
  {
    id: 'w1',
    name: 'Anand & Family',
    message: 'Heartiest congratulations to Rabin & Lakshmi! May your journey ahead be blessed with immense happiness and love.',
    date: 'Just now',
  },
  {
    id: 'w2',
    name: 'Priya & Vignesh',
    message: 'Wishing you both a lifetime of togetherness, endless laughter, and beautiful companionship.',
    date: 'Today',
  },
];

export const BlessingsSection: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: Wish = {
      id: `w-${Date.now()}`,
      name: name.trim(),
      message: message.trim(),
      date: 'Just now',
    };

    setWishes([newWish, ...wishes]);
    setName('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="blessings" className="py-14 px-4 max-w-3xl mx-auto">
      <div className="bg-[#fffaf5] border border-[#e9c9b9] rounded-lg p-6 sm:p-10 shadow-sm text-center relative overflow-hidden">
        
        <p className="font-sans text-[11px] font-normal uppercase tracking-[0.28em] text-[#b8935a] mb-2">
          WARM BLESSINGS &amp; WISHES
        </p>
        <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#8a5a4a]">
          Shower Your Love
        </h3>
        <GoldDivider className="my-4" />
        <p className="font-serif italic text-base sm:text-lg text-[#5b3a2e] max-w-md mx-auto mb-8">
          &ldquo;Your presence and blessings will make our celebration truly special.&rdquo;
        </p>

        {/* Wishes Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left space-y-4 mb-10">
          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-[#8a5a4a] mb-1">
              Your Name / Family
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rahul &amp; Deepa"
              className="w-full px-4 py-2.5 rounded-md border border-[#e9c9b9] bg-[#fffaf5] focus:outline-none focus:border-[#b8935a] text-[#5b3a2e] font-serif text-base"
            />
          </div>

          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-[#8a5a4a] mb-1">
              Your Blessing / Message
            </label>
            <textarea
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your wishes for Rabin &amp; Lakshmi..."
              className="w-full px-4 py-2.5 rounded-md border border-[#e9c9b9] bg-[#fffaf5] focus:outline-none focus:border-[#b8935a] text-[#5b3a2e] font-serif text-base"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#b8935a] hover:bg-[#8a5a4a] text-[#fffaf5] font-sans text-xs uppercase tracking-widest transition-colors shadow-xs"
          >
            Send Your Blessing
          </button>

          {submitted && (
            <p className="text-center font-serif italic text-sm text-[#8a5a4a] mt-2 animate-pulse">
              Thank you for your heartfelt blessing! ❤️
            </p>
          )}
        </form>

        {/* Wishes List */}
        <div className="space-y-4 text-left max-w-md mx-auto border-t border-[#e9c9b9]/60 pt-6">
          <h4 className="font-sans text-xs uppercase tracking-widest text-[#b8935a] text-center mb-4">
            Recent Wishes from Loved Ones
          </h4>
          {wishes.map((w) => (
            <div key={w.id} className="bg-[#f6e4da]/40 border border-[#e9c9b9]/80 rounded-lg p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="font-serif font-semibold text-[#8a5a4a] text-base">
                  {w.name}
                </span>
                <span className="font-sans text-[10px] text-[#b8935a] uppercase tracking-wider">
                  {w.date}
                </span>
              </div>
              <p className="font-serif italic text-sm text-[#5b3a2e] leading-relaxed">
                &ldquo;{w.message}&rdquo;
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
