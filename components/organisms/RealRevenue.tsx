import React from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import TestimonialSection from "./VideoTestimonials";

const Testimonial: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl py-17 md:py-32 ">
      <div className="w-full mx-auto text-center overflow-visible">
        <div className="flex flex-col items-center gap-2 mb-7">
          <div className="flex gap-x-1 text-brand-primary text-sm">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.48373 0.690966C6.78308 -0.230345 8.08649 -0.230344 8.38584 0.690966L9.45541 3.98276C9.58928 4.39479 9.97324 4.67375 10.4065 4.67375H13.8677C14.8364 4.67375 15.2392 5.91336 14.4555 6.48276L11.6553 8.51721C11.3048 8.77185 11.1581 9.22322 11.292 9.63524L12.3616 12.927C12.6609 13.8483 11.6065 14.6145 10.8227 14.0451L8.02257 12.0106C7.67208 11.756 7.19749 11.756 6.847 12.0106L4.04683 14.0451C3.26311 14.6145 2.20864 13.8483 2.50799 12.927L3.57756 9.63524C3.71143 9.22322 3.56477 8.77185 3.21429 8.51721L0.414117 6.48276C-0.369597 5.91336 0.0331788 4.67375 1.0019 4.67375H4.4631C4.89633 4.67375 5.28028 4.39479 5.41416 3.98276L6.48373 0.690966Z"
                  fill="#00A47B"
                />
              </svg>
            ))}
          </div>
          <p className="text-body-md font-semibold text-content-primary ">
            4.9 RATING{" "}
            <span className=" text-body-md font-regular text-content-subtle">
              {" "}
              52+ Review
            </span>
          </p>
        </div>
        <h2 className="text-3xl md:text-[44px] text-black/95 leading-[58px] mb-15 font-semibold font-sans">
          Real Business Owners
          <br />
          Real <span className="text-emerald-500"> Revenue Growth </span>
        </h2>

        <div className="flex justify-center  px-4 md:px-8 lg:px-0">
            <div className="relative aspect-video  rounded-3xl overflow-hidden bg-gray-100 mb-4 group cursor-pointer shadow-2xl w-[974px] ">
          <Image
            src="/Image.png"
            alt="Video"
            width={600}
            height={600}
            className="w-full  object-cover grayscale-[0.2] "
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center " >
            <button className="w-16 h-16  bg-white/30 backdrop-blur-md  items-center flex rounded-full justify-center group  group-hover:scale-110 transition-transform">
              <Play className="fill-white text-white ml-1" />
            </button>
          </div>
        </div>
        </div>

        <TestimonialSection />
      </div>
    </section>
  );
};

export default Testimonial;
