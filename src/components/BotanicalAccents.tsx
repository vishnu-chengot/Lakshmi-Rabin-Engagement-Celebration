import React from 'react';

export const BotanicalSprig: React.FC<{ className?: string; color?: string }> = ({
  className = "w-28 h-28",
  color = "currentColor",
}) => (
  <svg
    viewBox="0 0 160 160"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke={color}
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M 8,14 Q 38,42 64,82 T 98,148" />
    <path d="M 8,14 Q 24,11 34,6" />
    <path d="M 24,32 Q 50,23 84,28" />
    <path d="M 42,26 C 39,16 49,8 59,14 C 56,23 46,27 42,26 Z" />
    <path d="M 62,25 C 66,13 78,11 82,19 C 76,28 66,29 62,25 Z" />
    <path d="M 84,28 C 94,23 103,29 101,37 C 92,40 86,33 84,28 Z" />
    <path d="M 40,54 Q 70,48 108,60" />
    <path d="M 60,51 C 63,40 75,37 79,45 C 73,53 64,53 60,51 Z" />
    <path d="M 84,54 C 90,44 102,44 105,52 C 98,60 89,58 84,54 Z" />
    <path d="M 108,60 C 119,60 125,69 121,76 C 112,77 108,67 108,60 Z" />
    <path d="M 54,80 Q 86,78 124,96" />
    <path d="M 76,79 C 80,68 92,66 95,75 C 88,83 80,82 76,79 Z" />
    <path d="M 100,84 C 107,75 119,76 121,85 C 113,92 104,90 100,84 Z" />
    <path d="M 124,96 C 135,98 140,109 134,116 C 125,115 122,104 124,96 Z" />
    <path d="M 74,110 Q 100,118 128,136" />
    <path d="M 92,115 C 99,107 109,110 109,119 C 102,124 95,120 92,115 Z" />
    <path d="M 112,125 C 121,121 129,127 127,136 C 119,139 114,132 112,125 Z" />
    <circle cx="100" cy="23" r="1.5" fill={color} />
    <circle cx="126" cy="64" r="1.5" fill={color} />
    <circle cx="138" cy="102" r="1.5" fill={color} />
    <circle cx="131" cy="142" r="1.5" fill={color} />
    <circle cx="104" cy="154" r="1.5" fill={color} />
  </svg>
);

export const GoldDivider: React.FC<{ width?: string; className?: string }> = ({
  width = "w-24",
  className = "my-6",
}) => (
  <div className={`flex items-center justify-center gap-2 ${className}`}>
    <div className={`h-[1px] bg-[#b8935a] ${width}`} />
    <div className="w-1.5 h-1.5 rotate-45 border border-[#b8935a] bg-[#fffaf5]" />
    <div className={`h-[1px] bg-[#b8935a] ${width}`} />
  </div>
);
