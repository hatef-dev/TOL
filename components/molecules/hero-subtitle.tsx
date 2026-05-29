import React from 'react';

export interface HeroSubtitleProps {
  text?: string;
  className?: string;
}

export const HeroSubtitle: React.FC<HeroSubtitleProps> = ({
  text = "No up front fees. Pay after a sale happens.",
  className = ''
}) => {
  return (
    <p className={`font-[family-name:var(--font-sans,"Inter:Regular",sans-serif)] font-[var(--font-normal,400)] leading-[var(--typography-body-lg-lineheight)] max-w-[900px] not-italic relative shrink-0 text-[color:var(--inverse-subtle,rgba(255,255,255,0.8))] text-[var(--typography-body-lg-fontsize)] text-center tracking-[var(--typography-body-lg-letterspacing,0px)] w-full whitespace-pre-wrap ${className}`}>
      {text}
    </p>
  );
};