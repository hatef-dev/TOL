 import React from 'react';
import Image from 'next/image';

const img5 = "/assets/hero/star-1.png";
const img6 = "/assets/hero/star-2.png";
const img7 = "/assets/hero/star-3.png";
const img8 = "/assets/hero/star-4.png";
const img9 = "/assets/hero/star-5.png";
const img10 = "/assets/hero/rating-icon.png";
const img11 = "/assets/hero/stars-group.png";
const img12 = "/assets/hero/rating-arrow.png";

export interface HeroRatingProps {
  rating?: string;
  reviews?: string;
  className?: string;
}

export const HeroRating: React.FC<HeroRatingProps> = ({
  rating = "4.9/5 RATING",
  reviews = "53+ Reviews",
  className = ''
}) => {
  return (
    <div className={`content-center flex flex-wrap gap-[var(--m-4,16px)] items-center justify-center p-[var(--m-0,0px)] relative shrink-0 w-full ${className}`} data-name="Rating">
      <div className="content-stretch flex items-start pl-[var(--m-0,0px)] pr-[var(--m-0,8px)] py-[var(--m-0,0px)] relative shrink-0" data-name="Stars container">
        <div className="mr-[-8px] relative shrink-0 size-[36px]">
          <div className="absolute inset-[-2.78%]">
            <Image className="block max-w-none size-full" alt="" src={img5} width={38} height={38} />
          </div>
        </div>
        <div className="mr-[-8px] relative shrink-0 size-[36px]">
          <div className="absolute inset-[-2.78%]">
            <Image className="block max-w-none size-full" alt="" src={img6} width={38} height={38} />
          </div>
        </div>
        <div className="mr-[-8px] relative shrink-0 size-[36px]">
          <div className="absolute inset-[-2.78%]">
            <Image className="block max-w-none size-full" alt="" src={img7} width={38} height={38} />
          </div>
        </div>
        <div className="mr-[-8px] relative shrink-0 size-[36px]">
          <div className="absolute inset-[-2.78%]">
            <Image className="block max-w-none size-full" alt="" src={img8} width={38} height={38} />
          </div>
        </div>
        <div className="mr-[-8px] relative shrink-0 size-[36px]">
          <div className="absolute inset-[-2.78%]">
            <Image className="block max-w-none size-full" alt="" src={img9} width={38} height={38} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[var(--m-3,12px)] items-center relative shrink-0" data-name="Text & stars">
        <div className="h-[32.687px] relative shrink-0 w-[32px]" data-name="image 2">
          <Image className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" alt="" src={img10} width={32} height={33} />
        </div>
        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Text & stars">
          <div className="h-[16px] relative shrink-0 w-[80px]" data-name="Stars">
            <Image className="block max-w-none size-full" alt="" src={img11} width={80} height={16} />
          </div>
          <div className="content-stretch flex gap-[var(--m-2,8px)] items-center relative shrink-0 w-full" data-name="text">
            <p className={`font-[family-name:var(--font-sans,"Inter:Bold",sans-serif)] font-[var(--font-bold,700)] leading-[var(--typography-content-body-sm-lineheight,20px)] not-italic relative shrink-0 text-[color:var(--primary,rgba(255,255,255,0.95))] text-[length:var(--typography-content-body-sm-fontsize,14px)] tracking-[var(--typography-content-body-sm-letterspacing,0px)]`}>
              {rating}
            </p>
            <p className={`font-[family-name:var(--font-sans,"Inter:Medium",sans-serif)] font-[var(--font-medium,500)] leading-[var(--typography-content-body-sm-lineheight,20px)] not-italic relative shrink-0 text-[color:var(--muted,rgba(255,255,255,0.6))] text-[length:var(--typography-content-body-sm-fontsize,14px)] tracking-[var(--typography-content-body-sm-letterspacing,0px)]`}>
              {reviews}
            </p>
            <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Arrow">
              <div className="absolute inset-1/4" data-name="Vector">
                <div className="absolute inset-[-8.33%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                  <Image className="block max-w-none size-full" alt="" src={img12} width={18} height={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};