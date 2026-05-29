import Image from "next/image"

const imgLeftShape = "/assets/hero/left-shape-1.svg";
const imgLeftShape1 = "/assets/hero/left-shape-2.svg";
const imgRightShape = "/assets/hero/right-shape-1.svg";
const imgRightShape1 = "/assets/hero/right-shape-2.svg";

export interface BackgroundFooter {
    className?:string;
}

export default function BackgroundFooter ({className=''}:BackgroundFooter){
return( 

       <div
      className={`absolute inset-0 overflow-hidden pointer-events-none z-[3] ${className}`}
      data-name="left-right shapes"
    >
        
       <div className="absolute   lg:right-[-12rem] opacity-55 md:opacity-70 lg:opacity-100 transition-all duration-700 ease-out animate-fade-in delay-200 mix-blend-difference">
             <Image className="block" alt="" src={imgRightShape} width={638} height={783} />
           </div>
     
           {/* Right Shape 2 */}
           <div className="absolute  lg:right-[-25rem] opacity-55 md:opacity-70 lg:opacity-100 transition-all duration-700 ease-out animate-fade-in delay-300">
             <Image className="block" alt="" src={imgRightShape1} width={747} height={783} />
           </div>
      </div>
);
};
