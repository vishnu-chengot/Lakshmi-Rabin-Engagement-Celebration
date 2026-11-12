import React, { useState, useEffect } from 'react';
import { Diamond } from './botanical/Botanicals';

export interface MemoryItem {
  id: string;
  url: string;
  title: string;
  caption: string;
}

const defaultMemories: MemoryItem[] = [
  {
    id: '1',
    url: '/memory1.jpg',
    title: 'Together in Harmony',
    caption: 'Moments filled with smiles, laughter, and endless conversations.',
  },
  {
    id: '2',
    url: '/memory2.jpg',
    title: 'Lakshmi’s Grace',
    caption: 'Radiant warmth and timeless elegance celebrating this new milestone.',
  },
  {
    id: '3',
    url: '/memory3.jpg',
    title: 'Rabin’s Joy',
    caption: 'A heartfelt journey towards a lifetime of love and companionship.',
  },
  {
    id: '4',
    url: '/memory4.jpg',
    title: 'Forever & Always',
    caption: 'Two souls, one beautiful promise blessed by our families.',
  },
];

const STORAGE_KEY = 'rabin_lakshmi_memories_v1';

export const MemoriesSection: React.FC = () => {
  const [memories, setMemories] = useState<MemoryItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback to defaults if storage parse fails
    }
    return defaultMemories;
  });

  const [activePhoto, setActivePhoto] = useState<MemoryItem | null>(null);

  // Sync state changes with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(memories));
    } catch {
      // ignore storage quota errors for large base64
    }
  }, [memories]);

  // Add new photos (reads as Data URL so they persist in localStorage)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const files = Array.from(e.target.files);
    files.forEach((file, idx) => {
      const reader = new FileReader();
      reader.onload = () => {
        const resultUrl = reader.result as string;
        const newItem: MemoryItem = {
          id: `custom-${Date.now()}-${idx}-${Math.random().toString(36).slice(2, 6)}`,
          url: resultUrl,
          title: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
          caption: 'Cherished memory added with love.',
        };
        setMemories((prev) => [newItem, ...prev]);
      };
      reader.readAsDataURL(file);
    });

    e.target.value = '';
  };

  // Remove photo
  const handleRemovePhoto = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setMemories((prev) => prev.filter((item) => item.id !== id));
    if (activePhoto && activePhoto.id === id) {
      setActivePhoto(null);
    }
  };

  // Reset to original default photos
  const handleResetDefaults = () => {
    if (window.confirm('Reset gallery to the original photos?')) {
      setMemories(defaultMemories);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <section className="py-16 px-6 sm:px-10 text-center">
      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-[#8F6E37] mb-3">
        CAPTURED MOMENTS
      </p>
      <h3 className="font-display text-3xl sm:text-4xl font-normal text-[#702C35] mb-3 leading-snug">
        Our Cherished Memories
      </h3>
      <p className="font-display italic text-base text-[#3D2923]/70 max-w-md mx-auto mb-8">
        A glimpse into our beautiful journey as we take this joyful step together.
      </p>

      {/* Action Controls: Add Photos & Reset */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        <label className="cursor-pointer inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FDF9F0] border border-[#B89452] text-[#702C35] text-xs font-sans font-medium tracking-[0.16em] uppercase hover:bg-gradient-to-r hover:from-[#c5a059] hover:to-[#b89452] hover:text-[#3D2923] transition-all duration-200 shadow-xs">
          <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Add Photos (+ Upload)
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>

        {memories !== defaultMemories && (
          <button
            type="button"
            onClick={handleResetDefaults}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#B89452]/40 text-[#8F6E37] text-[11px] font-sans font-medium tracking-wider uppercase hover:border-[#702C35] hover:text-[#702C35] transition-colors cursor-pointer"
          >
            <svg className="w-3.5 h-3.5 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
            Reset
          </button>
        )}
      </div>

      {/* Photo Grid */}
      {memories.length === 0 ? (
        <div className="py-12 border-2 border-dashed border-[#B89452]/30 rounded-2xl max-w-md mx-auto">
          <p className="font-display italic text-lg text-[#8F6E37]">No photos in gallery yet.</p>
          <p className="font-sans text-xs text-[#3D2923]/60 mt-1">Click "Add Photos (+ Upload)" above to add memories.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-left">
          {memories.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative cursor-pointer bg-[#FDF9F0] rounded-2xl border border-[#B89452]/25 p-3.5 hover:border-[#B89452] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              {/* Delete / Remove Button on each card */}
              <button
                type="button"
                onClick={(e) => handleRemovePhoto(item.id, e)}
                title="Remove photo"
                aria-label="Remove photo"
                className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-[#241712]/75 hover:bg-[#702C35] text-white flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 shadow-sm hover:scale-110"
              >
                <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>

              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-[#ebd0c1]/20">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/couple.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241712]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
                  <span className="text-[#FDF8EE] text-[10px] uppercase tracking-[0.2em] font-sans font-medium flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    Enlarge
                  </span>
                </div>
              </div>

              <div className="pt-4 pb-2 text-center">
                <h4 className="font-display text-lg sm:text-xl font-normal text-[#702C35] tracking-wide">
                  {item.title}
                </h4>
                <p className="font-display italic text-xs text-[#3D2923]/70 mt-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Lightbox */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#241712]/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="bg-[#FDF9F0] rounded-2xl max-w-xl w-full p-4 sm:p-6 border border-[#B89452] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Controls: Remove and Close */}
            <div className="absolute top-3 right-3 flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleRemovePhoto(activePhoto.id)}
                className="text-[#702C35] hover:text-red-700 p-2 text-xs font-sans uppercase tracking-wider flex items-center gap-1 bg-white/80 rounded-full px-3 py-1 shadow-xs cursor-pointer"
                title="Remove this photo from gallery"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                </svg>
                Remove
              </button>
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="text-[#702C35] hover:text-[#3D2923] p-1.5 text-xl font-sans cursor-pointer"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="max-h-[65vh] overflow-hidden rounded-xl mb-4 flex items-center justify-center bg-black/5 mt-6">
              <img
                src={activePhoto.url}
                alt={activePhoto.title}
                className="max-h-[60vh] w-auto object-contain rounded-lg"
              />
            </div>
            <div className="text-center">
              <h4 className="font-display text-2xl font-normal text-[#702C35]">
                {activePhoto.title}
              </h4>
              <p className="font-display italic text-sm text-[#3D2923]/70 mt-1">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-14 flex items-center justify-center gap-3 w-40 mx-auto">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B89452]/60" />
        <Diamond className="h-2 w-2" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B89452]/60" />
      </div>
    </section>
  );
};
