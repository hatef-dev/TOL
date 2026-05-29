import React from "react";
import Image from "next/image";

const imgLeftShape = "/assets/hero/left-shape-1.svg";
const imgLeftShape1 = "/assets/hero/left-shape-2.svg";
const imgRightShape = "/assets/hero/right-shape-1.svg";
const imgRightShape1 = "/assets/hero/right-shape-2.svg";

export interface HeroBackgroundProps {
  className?: string;
  mobileBgSrc?: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
  className = "",
  mobileBgSrc = "/assets/heroHome.png", 
}) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none z-[3] ${className}`}
      data-name="hero-background"
    >
      {/* Mobile + Tablet: image background */}
      <div className="absolute inset-0 lg:hidden">
       <Image
  src={mobileBgSrc}
  alt=""
  fill
  priority
  quality={100}
  sizes="100vw"
  className="object-cover "
/>

      </div>

      {/* Desktop: gradient/shapes */}
      <div className="hidden lg:block absolute inset-0">
        {/* Left Shape 1 */}
        <div className="absolute left-[-25rem] opacity-100 transition-all duration-700 ease-out animate-fade-in">
          <Image className="block" alt="" src={imgLeftShape} width={638} height={783} />
        </div>

        {/* Left Shape 2 */}
        <div className="absolute left-[-16rem] opacity-100 transition-all duration-700 ease-out animate-fade-in delay-100">
          <Image className="block" alt="" src={imgLeftShape1} width={638} height={783} />
        </div>

        {/* Right Shape 1 */}
        <div className="absolute right-[-12rem] opacity-100 transition-all duration-700 ease-out animate-fade-in delay-200 mix-blend-difference">
          <Image className="block" alt="" src={imgRightShape} width={638} height={783} />
        </div>

        {/* Right Shape 2 */}
        <div className="absolute right-[-25rem] opacity-100 transition-all duration-700 ease-out animate-fade-in delay-300">
          <Image className="block" alt="" src={imgRightShape1} width={747} height={783} />
        </div>
      </div>
    </div>
  );
};
