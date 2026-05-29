import React from 'react';
import Image from 'next/image';

const imgBgColor = "/assets/hero/noise-bg.png";

export interface HeroNoiseProps {
  className?: string;
}

export const HeroNoise: React.FC<HeroNoiseProps> = ({ className = '' }) => {
  return (
    <Image src={imgBgColor} preload fill objectFit='contain' alt="background noise" className={`w-screen scale-200 ${className}`} />
  );
};