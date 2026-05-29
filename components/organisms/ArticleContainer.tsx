import React from "react";
import Image from "next/image";

import VerticalNav from "@/components/molecules/CardBorder";

export default function ArticleContainer(){
    return(
        <>
        <div className="min-h-screen bg-white/100 max-w-7xl mx-auto p-4 md:p-8  rounded-2xl">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">

            <aside className="md:order-1 lg:order-1 order-1 col-span-12 md:col-span-12 lg:col-span-3 ">
                <div className="sticky ">
                    <p className="text-black/90 uppercase text-sm font-normal tracking-wider">ON THIS PAGE</p>

             <VerticalNav/>
                    <div className="mt-5">
                        <h3 className="text-sm uppercase font-sans text-black/90 tracking-wider">
                        SHAPE THIS ARTICLE</h3>
                        <div className="flex space-x-2 gap-2 py-2 ">
                            <button className="rounded-full w-8 h-8 flex border-black/20 border items-center justify-center ">
                               <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 0.75H6.75C5.75544 0.75 4.80161 1.14509 4.09835 1.84835C3.39509 2.55161 3 3.50544 3 4.5V6.75H0.75V9.75H3V15.75H6V9.75H8.25L9 6.75H6V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H9V0.75Z" stroke="black" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                            </button>
                               <button className="rounded-full w-8 h-8 flex border-black/20 border items-center justify-center ">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.75 7.25V10.75C15.75 13.5114 13.5114 15.75 10.75 15.75H7.25C4.48858 15.75 2.25 13.5114 2.25 10.75V7.25C2.25 4.48858 4.48858 2.25 7.25 2.25H10.75C13.5114 2.25 15.75 4.48858 15.75 7.25Z" stroke="black" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.25 12.75V10.125V7.5" stroke="black" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.25 12.75V10.3125M8.25 7.5V10.3125M8.25 10.3125C8.25 7.5 12.75 7.5 12.75 10.3125V12.75" stroke="black" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.25 5.2575L5.2575 5.24917" stroke="black" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                            </button>
                               <button className="rounded-full w-8 h-8 flex border-black/20 border items-center justify-center ">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.5698 15.5184L3.00317 3.21836C2.69664 2.82425 2.97749 2.25 3.47678 2.25H4.95655C5.1417 2.25 5.31649 2.33548 5.43016 2.48164L14.9968 14.7816C15.3034 15.1758 15.0225 15.75 14.5232 15.75H13.0435C12.8583 15.75 12.6835 15.6645 12.5698 15.5184Z" stroke="black" stroke-opacity="0.8" stroke-width="1.5"/>
  <path d="M15 2.25L3 15.75" stroke="black" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round"/>
</svg>
                            </button>
                               <button className="rounded-full w-8 h-8 flex border-black/20 border items-center justify-center ">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.5 8.99822C10.5 7.12942 8.76228 5.25 6.64286 5.25C6.39181 5.25 5.56428 5.25 5.35714 5.25C3.2269 5.25 1.5 6.92814 1.5 8.99822C1.5 10.782 2.7823 12.2748 4.5 12.6536C4.77567 12.7143 5.06255 12.7464 5.35714 12.7464" stroke="black" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.5 8.99812C7.5 10.8669 9.23772 12.7463 11.3571 12.7463C11.6082 12.7463 12.4357 12.7463 12.6429 12.7463C14.7731 12.7463 16.5 11.0682 16.5 8.99812C16.5 7.21431 15.2177 5.72154 13.5 5.34278C13.2243 5.28199 12.9375 5.2499 12.6429 5.2499" stroke="black" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                            </button>
                        </div>
                    </div>
                </div>
            </aside>

            <main className="md:order-2 lg:order-2 order-2 col-span-12 md:col-span-12 lg:col-span-6">
                <h2 className="text-black/95 font-extrabold  lg:text-[36px] text-[18px] leading-tight">
                     Mobile SEO Optimization: The 
                     Secrets of a Mobile-Friendly Site
                </h2>
                <p className="lg:text-md text-xs text-black/80 font-sans font-normal pt-5 -tracking-tighter leading-[27px]">
                    Our cell phones are everything to us nowadays! They’ve become far more than a device for distant communication. We use them to shop online, join online courses, search about different topics, find locations, etc. In other words, they are an extension of us. So, it is no surprise that mobile SEO optimization is a necessity for any website that wants to shine through.
                </p>

                <p className="leading-[27px] text-md text-black/80 pt-4 font-normalfont-sans -tracking-tighter">
                In this simple guide, we will uncover the essential techniques you need to know for mobile search engine optimization of your website. From design and UX to accelerated mobile pages SEO and mobile-specific keywords.</p>
                
                <p className="leading-[27px] text-md text-black/80 pt-4 font-normalfont-sans -tracking-tighter">
                Let{"'"}s boost your site{"'"}s visibility together!</p>
                  <p className="leading-[27px] text-[15px] text-black/80 pt-4 font-normal font-sans -tracking-tighter">
                  Optimizing your website for mobile SEO is necessary for two main reasons:
                </p>
                <ul className="list-disc list-inside">
                    <li className="leading-[27px] text-[15px] text-black/80 pt-4  font-sans -tracking-tighter">
                        A large number of people use mobile devices to search on the Internet and visit websites. So, if your website is not optimized for mobile SEO, it can’t rank well in mobile search results.
                    </li>
                    <li className="leading-[27px]  text-[14px] text-black/80   font-sans -tracking-tighter">
                        Mobile-first indexing. Google predominantly uses the mobile version of websites for indexing and ranking. Mobile-friendliness is a big ranking factor.
                    </li>
                </ul>
                <p className="pt-4">So, mobile SEO optimization helps you reach a larger audience, which means more organic traffic and customers.</p>
                <div className="relative  justify-center mt-5">
                    <div className=" w-full h-77"> 
                    <Image
                    src="/Image_Content 1.png"
                    alt="content"
                    className="w-full "
                    width={1200}
                    height={700}
                    priority
                    />
                   </div> 
                </div>
                <h2 className="font-sans text-black/95 font-semibold text-[18px]  lg:text-[34px]">
                    Common Problems of Websites on Mobile Devices
                </h2>
                <p className="text-md text-black/80 pt-2">Mobile users usually complain about these problem:</p>
                <ul className="list-disc list-inside space-y-2 text-black/80 text-md gap-2">
                <li >
                    Non-responsive design that doesn’t adapt to different screen sizes
                </li>
                <li>Slow loading time</li>
                <li>Poor readability (font size or colors)</li>
                <li>Images not fitting mobile screens</li>
                <li>Cluttered navigation menus</li>
                <li>Hard-to-find content</li>
                <li>Accidental taps due to small buttons/links</li>
                <li>Annoying full-screen pop-ups</li>
                <li>Flash elements not supported</li>
                <li>Difficult forms/tables</li>
                </ul>

                <p className="text-md text-black/80 pt-2 font-sans">These problems frustrate mobile visitors and increase bounce rates.</p>
                <h2 className="lg:text-[40px] text-[20px] text-black/95 font-semibold font-sans leading-snug py-2">SEO for Mobile Phones: Essential Strategies and Techniques</h2>
                 <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <p>A mobile-friendly design should include:</p>
                <li>Fluid layouts</li>
                <li>Flexible and responsive images/media</li>
                <li>Mobile-friendly navigation</li>
                <li>Scalable fonts</li>
            </ol>
            </main>

<aside className="order-3 col-span-12 md:col-span-12 lg:col-span-3">
  <div className="rounded-2xl p-4 sm:p-5  lg:top-24">
    <div className="flex  items-start gap-3 sm:items-center">
      <div className="w-15 h-10 overflow-hidden rounded-full">
        <Image
          src="/images/hero-image.png"
          width={35}
          height={35}
          alt="Ali Husayni"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-wrap gap-x-1 gap-y-0.5">
        <p className="text-xs sm:text-sm text-black/60">Written by</p>
        <p className="text-sm sm:text-[16px] font-sans font-semibold text-black/95 underline">
          Ali Husayni
        </p>
        <p className="w-full text-xs sm:text-sm text-black/60">Co-founder & CEO</p>
      </div>
    </div>

    <div className="mt-4  pt-4">
      <p className="pb-3 text-[16px] sm:text-[12px] font-sans text-black/60 leading-4">
        Ali Husayni, with 23 years as the CEO and Founder, has authored several books on SEO and focuses on AI-driven search engine optimization. We help local businesses grow by developing high-speed websites that boost traffic, enhance engagement, and drive conversions.
      </p>
      <p className="pb-2 text-xs sm:text-sm  tracking-widest font-mono text-black/95">
        JOIN NEWSLETTER
      </p>

        <p className="pb-3 text-[16px] sm:text-sm font-sans text-black/60 leading-6">
        Get latest update of Google strategiest, AI Search , and local trafic Tips.
      </p>

      <label htmlFor="newsletter-email" className="sr-only">
        Enter your email
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="Enter your email"
        className="w-full rounded-md border border-black/10 px-3.5 py-2 text-sm"
      />

      <button className="mt-3 flex w-full sm:w-auto items-center gap-6 justify-center  rounded-lg bg-black/95 px-4 py-2.5 text-sm text-white/95">
        Join <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.75 0.75L5.25 6L0.75 11.25" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </button>
    </div>
  </div>
</aside>

        </div>
        </div>
        </>
    );
};
