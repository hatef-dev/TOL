'use client'
import React , {useState} from "react";
import { X} from "lucide-react";



export default function Banner (){
    const [OpenBanner,setOpenBanner]=useState(true);

    if (!OpenBanner) return null

    return(
        <div className=" items-center  bg-gray-950  w-full  text-white/95 font-sans  ">
           <div className="relative mx-auto flex-col lg:flex-row md:flex-row  lg:gap-10 flex items-center justify-center gap-3  tracking-tighter px-5 py-3 ">

        <p className="
        flex flex-row sm:flex-row items-center justify-center gap-1 sm:gap-2
        px-3 text-center text-[12px] leading-5 max-w-[92vw]
        lg:gap-3 lg:tracking-wide lg:text-sm lg:max-w-7xl
        ">
    <svg className="lg:h-10 lg:w-10 h-20 w-20" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5847_3116)">
                    <path d="M12.437 23.0615L13.2183 22.5322L22.2808 16.3887L22.8911 15.9746L22.2798 15.5605L13.2173 9.42285L12.437 8.89453V23.0615ZM0.712402 22.6514L0.711426 22.6348C0.564279 20.4171 0.493295 18.2016 0.499512 15.9883V15.9863C0.495779 13.7718 0.56198 11.5586 0.717285 9.34766L0.718262 9.33008V9.3125C0.718262 6.72981 2.6077 4.72461 4.8374 4.72461H4.86084C8.31347 4.56257 11.8427 4.5 15.437 4.5H16.562C20.165 4.5 23.6884 4.56223 27.1411 4.72363L27.1528 4.72461H27.1646C29.4024 4.72461 31.2896 6.71925 31.2896 9.2998V9.31641L31.2915 9.33301C31.4407 11.55 31.5077 13.7649 31.4937 15.9775V15.9824C31.4999 18.2023 31.4319 20.4157 31.2827 22.6348L31.2808 22.6514V22.668C31.2808 25.251 29.3914 27.2617 27.1558 27.2617H27.144L27.1323 27.2627C23.4996 27.4331 19.7873 27.5115 15.9956 27.499H15.9927C12.206 27.5053 8.48258 27.431 4.854 27.2627L4.84229 27.2617H4.83154C2.6026 27.2617 0.712402 25.2515 0.712402 22.668V22.6514Z" fill="#CB0707" stroke="#CB0707"/>
                </g>
                <defs>
                    <clipPath id="clip0_5847_3116">
                    <rect width="32" height="32" fill="white"/>
                    </clipPath>
                </defs>
                </svg>
                This is a banner in different styles.
                use banner for introducing new feature, product or youtube video.
                </p>

            <div> 
                 <button className=" flex px-2 font-sans leading-snug  text-[16px] py-2 lg:m-2 gap-2  lg:px-3 lg:py-2 text-center rounded-lg  bg-white/15">Watch Now
               <svg className="mt-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                 </button>
            </div>
           
            <div className=" lg:px-3 lg:py-3  absolute lg:right-4 right-2 p-1 top-2 lg:top-3 " >
            <button className=" " onClick={()=>setOpenBanner (false)}
            aria-label="close">   
            
            <X />
            </button>
            </div>
           </div>

        </div>
    );
};