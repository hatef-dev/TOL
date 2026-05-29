"use client";
import React from "react";

const PartnerShipSection = () => {
  const categories = [
    {
      title: "Law first",
      text: "Immigration or business; doesn’t matter what kind of lawyer you are, we bring in new clients.",
    },
    {
      title: "Industrial Ventilation",
      text: "HVAC installer or air filtration company; we optimize your online presence to get clients.",
    },
    {
      title: "Medical Centers",
      text: "We've worked with surgeons, dentists, and medical clinks and can help you get more business.",
    },
    {
      title: "Fire Suppression",
      text: "Struggling to get clients? We partner-up with your company and bring in new clients.",
    },
    {
      title: "Roofing Companies",
      text: "There's a huge competition to get clients. We solved this problem with a pay-per-sale SEO model.",
    },
    {
      title: "Commercial Cleaning",
      text: "A steady flow of clients! Your dreams will come true with our risk-free SEO/GEO services.",
    },
    {
      title: "Flooring Companies",
      text: "Getting business is about reaching homeowners and businesses right in time. We bring in new projects.",
    },
    {
      title: "Auto Glass",
      text: "We combine targeted SEO/GEO to attract customers who are actively looking for auto glass services.",
    },
  ];

  return (
    <section className="max-w-[1448px] mx-auto py-16 gap-4 px-6 md:px-12 lg:px-8  ">
      <div className="w-full">
        <div className="flex justify-start gap-x-6 tracking-tight mb-6 text-brand-primary text-[22px] ">
          <span className="font-mono uppercase">exclusive</span>
          <span className="font-mono uppercase">partnership</span>
        </div>
        <h2
          dir="left"
          className="lg:text-[40px] text-[22px] font-bold text-white/40 justify-start leading-[58px] mb-25 tracking-[0.5] "
        >
          We only Work with{" "}
          <span className="text-white">One Partner per Area.</span>Is that You?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start sm:grid-col-1 lg:grid-cols-4 gap-4 mb-20 ">
          {categories.map((category, i) => (
            <div
              key={i}
              className="bg-white/15 hover:bg-white/25 group cursor-pointer rounded-[12px]  p-8 flex items-center overflow-y-auto gap-x-4"
            >
              <div className="flex flex-col gap-y-1 ">
                <h2 className="text-white text-[22px] font-bold">
                  {category.title}
                </h2>
                <p className="text-white/60 text-[16px] leading-[20px]">
                  {category.text}
                </p>
                
              </div>
              <span className="hidden w-[24px] h-[24px] group-hover:flex items-center justify-center transition-all duration-300 ease-in-out 
              ">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 9H15M15 9L10.5 4.5M15 9L10.5 13.5"
                      stroke="white"
                      strokeOpacity="0.8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
            </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-6 ">
          <p className="text-gray-400 text-lg text-center">
            Didn{"'"}t find your business category?
          </p>
          <button className="flex items-center rounded-lg border  bg-[#2a2a2b]  hover:bg-white/25 text-white px-5 py-3 border-border-weak">
            Find out if You Qualify{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L15 12L9 19"
                stroke="white"
                stroke-opacity="0.8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerShipSection;
