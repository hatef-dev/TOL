'use client'
import React,{useState} from "react"
import Image from "next/image"
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { LucideArrowUpRight, LucideChevronDown } from "lucide-react";
import { div } from "framer-motion/client";


interface Industry {
    name:string;
}

const Industries : Industry []=[
    {name:'Law Firms'} , {name:'Commercial Cleaning'},
    {name:'Medical Clinics'}, {name:'Restirant Design'},
    {name:'Flooring Companies'}, {name:'Fire Suppression'},
    {name:'Roofing Companies'},{name:'Auto Glass'}
];


export default function Menu (){
    const [MobileMenu,setMobileMenu]=useState(false);
    const [ActiveDropdownMenu,setActiceDropdownMenu]= useState <string| null>(null);

    return (
    <div className="relative min-h-screen w-full bg-black  overflow-hidden font-sons">
     <nav className="relative z-[100] flex items-center gap-2 font-bold text-xl tracking-tighter">
        <div className="flex item-center gap-2">
            <div className="h-8 flex items-center justify-center">
                <Image
                src="/Logo.svg"
                alt="logo top organic"
                className="w-full h-full object-contain"
                width={120}
                height={100}/>
            </div>
        </div>
        <ul className="lg:flex items-center gap-8 text-[15px] text-white/85 ">
        <li className="hover:text-primary-500  cursor-pointer transition-colors">
            CaseStudies
        </li>
        {/*dropdown industries */}
        <li className="relative group cursor-pointer py-3:"
        onMouseEnter={()=>setActiceDropdownMenu('Industries')}
        onMouseLeave={()=>setActiceDropdownMenu(null)}
        >
            <div className="flex items-center gap-1 hover:text-white transition-colors">
                Industries <LucideChevronDown size={14}/>
            </div>

            <AnimatePresence>
                {ActiveDropdownMenu === 'Industries' && (
                    <motion.div
                    initial={{opacity:0 , y:10}}
                    animate={{opacity:1,y:0}}
                    exit={{opacity:0 ,y:10}}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl mt-2 grid grid-cols-2 gap-4"
                    >
                        {Industries.map((item)=>(
                            <div key={item.name} className="text-gray-400 hover:text-white transition-colors py-1">{item.name}</div>
                        ))}
                        <div className="col-span-2 mt-4 border-t border-white/5 flex justify-between item-center">
                        <p className="text-sm text-gray-500">Didn{"'"}t find your business categorry?</p>
                        <button className=" bg-white/5 px-4 rounded-lg text-xs flex item0center gap-2 hover:bg-white/10">Find out if You Qualify <LucideArrowUpRight size={12}/></button>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </li>

        <li className="flex items-center gap-1 hover:text-white/90 cursor-pointer transition-colors">
        Resources<LucideChevronDown size={14}/>
        </li>

        <li className=" hover:text-white/90 cursor-pointer transition-colors">Testimonials</li>
        <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
            
        </ul>
        
      
   
     </nav>
        
    </div>
    );
};