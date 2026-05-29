import React from 'react';

export interface HeroTitleProps {
  className?: string;
}

export const HeroTitle: React.FC<HeroTitleProps> = ({ className = '' }) => {
  return (
    <div className={`content-stretch flex flex-col gap-[var(--m-0,0px)] items-center p-[var(--m-0,0px)] relative shrink-0 w-full ${className}`} data-name="Container">
      <div className={`font-["Inter_Tight:Bold",sans-serif] font-[family-name:var(--font-sans,"Inter_Tight:Bold",sans-serif)] leading-[0] not-italic relative shrink-0 text-[var(--typography-display-xl-fontsize)] text-[color:var(--inverse-primary,rgba(255,255,255,0.95))] text-center tracking-[-0.05px] tracking-[var(--typography-content-display-lg-letterspacing,-0.05px)] w-full whitespace-pre-wrap`}>
        <p className="leading-[var(--typography-display-xl-lineheight)] mb-0">Get Clients</p>
        <p className="">
          <span className="leading-[var(--typography-display-xl-lineheight)]" />
          <span className="leading-[var(--typography-display-xl-lineheight)] text-[#10b880]">Then Pay</span>
        </p>
      </div>
    </div>
  );
};