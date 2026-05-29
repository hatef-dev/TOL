 import React from 'react';
import Image from 'next/image';

const imgVector = "/assets/hero/client-logo-vector.png";
const imgLogoText = "/assets/hero/client-logo-text.png";

export interface HeroClientsProps {
  className?: string;
}

export const HeroClients: React.FC<HeroClientsProps> = ({ className = '' }) => {
  return (
    <div className={`content-center flex flex-wrap gap-[var(--m-10,24px_40px)] items-center justify-center relative shrink-0 w-full ${className}`} data-name="Clients">
      <div className="h-[41.667px] relative shrink-0 w-[150px]" data-name="logo">
        <div className="absolute content-stretch flex items-center justify-center left-[calc(50%-9.58px)] px-px top-[calc(50%-1.13px)] translate-x-[-50%] translate-y-[-50%]" data-name="container">
          <p className={`font-["Instrument_Sans:Bold_Italic",sans-serif] font-bold italic leading-[22.27px] relative shrink-0 text-[22.27px] text-white uppercase`} style={{ fontVariationSettings: '"wdth" 100' }}>
            Imifinity
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start py-[9px] relative shrink-0 w-[130.833px]" data-name="logo">
        <div className="h-[22.27px] relative shrink-0 w-full" data-name="container">
          <p className={`absolute font-["Inter_Tight:Bold_Italic",sans-serif] leading-[22.27px] left-[calc(50%-64.49px)] not-italic text-[22.27px] text-white top-[calc(50%-11.13px)] uppercase`}>
            Tuan Le
          </p>
        </div>
      </div>
      <div className="h-[28.291px] relative shrink-0 w-[150.63px]" data-name="logo">
        <div className="absolute bottom-0 content-stretch flex items-center justify-between left-[calc(50%-0.26px)] top-0 translate-x-[-50%] w-[150.63px]" data-name="Logo">
          <div className="h-[28.542px] relative shrink-0 w-[16.822px]" data-name="Vector">
            <Image className="block max-w-none size-full" alt="" src={imgVector} width={16.822} height={28.542} />
          </div>
          <div className="h-[13.983px] relative shrink-0 w-[127.516px]" data-name="Logo text">
            <Image className="block max-w-none size-full" alt="" src={imgLogoText} width={127.516} height={13.983} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center px-px py-[9px] relative shrink-0" data-name="logo">
        <p className={`font-["Inter_Tight:Bold_Italic",sans-serif] leading-[0] not-italic relative shrink-0 text-[22.27px] text-white uppercase`}>
          <span className="leading-[22.27px]">APS</span>
          <span className="leading-[22.27px] text-[#aaa]">-</span>
          <span className="leading-[22.27px] text-[#aaa]">Hoods</span>
        </p>
      </div>
    </div>
  );
};