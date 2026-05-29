
'use client';
import React from "react";
import RelatedArticles from "@/components/molecules/RelatedArticles";
import ArticleContainer from "@/components/organisms/ArticleContainer";
import Navbar from "../../components/organisms/Navbar";
import Footer1 from "@/components/organisms/footsec";

export default function Article(){
 
    return(
        <div className="min-h-screen mb-5 w-full  bg-black/95">
            <Navbar/>
            <header className="text-center px-5 py-10   lg:py-45">
                <p className="font-light font-sans  text-[15px] lg:text-[22px] pb-5 text-white/80">
                Resources  <span className="text-white/60 font-sans ">/ AI Research Optimization</span> </p>
                <h1 className="font-semibold font-sans lg:text-[68px] text-white/95 ">How to Optimize Your Site to Rank <br/>
                Well on Mobile Devices
                </h1>
                    <div className="text-center">
                        <p className="lg:text-lg py-2 text-[12px] lg:py-5 font-light font- text-white/60">January 07 , 2026</p>
                    </div>
            </header>
          <ArticleContainer/>
          <RelatedArticles/>
          <Footer1/>


        </div>

    );
};


