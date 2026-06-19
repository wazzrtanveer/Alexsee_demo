import React from 'react';
import { motion } from 'framer-motion';

export default function Logo({ size = "md", width, showText = true, inverse = false, className = "" }) {
  const sizes = {
    sm: { w: 48, h: 26 },
    md: { w: 80, h: 42 },
    lg: { w: 120, h: 64 },
    xl: { w: 180, h: 96 },
    custom: { w: width || 80, h: Math.round((width || 80) * 0.53) }
  };

  const { w, h } = sizes[size] || sizes.md;
  const darkColor = "#0A0A0A";
  const lightColor = "#F5F2ED";
  
  const mainColor = inverse ? lightColor : darkColor;
  const accentColor = inverse ? darkColor : lightColor;

  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      <motion.svg
        viewBox="0 0 240 128"
        width={w}
        height={h}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-500 hover:scale-[1.03]"
      >
        {/* Eyeglasses Frame Outline */}
        <path
          d="M120,32 C104,30 84,21 54,21 C24,21 16,27 10,29 C7,30 5,32 5,36 C5,54 13,81 48,81 C72,81 88,67 106,53 C112,48 116,42 120,42 C124,42 128,48 134,53 C152,67 168,81 192,81 C227,81 235,54 235,36 C235,32 233,30 230,29 C224,27 216,21 186,21 C156,21 136,30 120,32 Z"
          fill={mainColor}
        />
        {/* Left lens detailing (Letter A) */}
        <path
          d="M38,71 L60,33 L82,71"
          stroke={accentColor}
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right lens detailing (Letter S) */}
        <path
          d="M194,38 C192,31 178,31 168,36 C158,41 160,51 174,55 C188,59 196,64 194,72 C192,80 178,82 166,74"
          stroke={accentColor}
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
      {showText && (
        <div 
          className="flex items-center justify-center font-sans tracking-[0.45em] text-center mt-2 pl-[0.45em]"
          style={{ 
            color: mainColor, 
            fontSize: size === "sm" ? "10px" : size === "md" ? "14px" : size === "lg" ? "18px" : "22px" 
          }}
        >
          <span className="font-light uppercase">ALEX</span>
          <span className="font-extrabold uppercase">SEE</span>
        </div>
      )}
    </div>
  );
}
