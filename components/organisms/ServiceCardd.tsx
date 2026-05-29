import React from "react";
import Image from "next/image";
import { icons, LucideArrowRight } from "lucide-react";
import TestimonialSection from "./TestimonialSection";

interface ServiceProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  badgeText: string;
  backgroundImage: string;
  hoverImage: string;
}

const ServicesSection: React.FC = () => {

  return (
    <section className="mx-auto max-w-[1448px] flex flex-col gap-y-[128px] rounded-3xl  my-[64px]  bg-surface-base px-6 py-[128px] md:px-12 lg:px-[32px] ">
      <div className="mx-auto flex flex-col gap-y-8' ">
        <div className="mb-8">
          <h2 className="text-display-lg font-sans font-semibold text-content-primary ">
            Complete Digital Dominance
          </h2>
          <p className=" text-display-lg font-sans font-semibold text-content-faint ">
            From Search to Sale
          </p>
        </div>
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8   w-full lg:h-[500px]">
          <div className=" rounded-2xl relative border-0 bg-[#F9FAFA] h-[500px] lg:h-full overflow-hidden group hover:border   ">
            <img
              src="/images/SEO2.png"
              className="w-full absolute -bottom-16 scale-150 left-16 opacity-20  group-hover:opacity-100 transition-opacity duration-200"
              alt=""
            />

            <div className="p-8 pb-0 ">
              <div className="flex flex-col relative gap-y-8">
                <div className="flex justify-between items-center">
                  <div className="flex items-center justify-center gap-x-4">
                    <span className="w-8 h-8 ">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3333 20C10.3333 19.4477 9.88558 19 9.33329 19C8.78101 19 8.33329 19.4477 8.33329 20V24C8.33329 24.5522 8.78101 25 9.33329 25C9.88558 25 10.3333 24.5522 10.3333 24V20Z"
                          fill="black"
                          fill-opacity="0.8"
                        />
                        <path
                          d="M16 15C16.5522 15 17 15.4477 17 16V24C17 24.5522 16.5522 25 16 25C15.4477 25 15 24.5522 15 24V16C15 15.4477 15.4477 15 16 15Z"
                          fill="black"
                          fill-opacity="0.8"
                        />
                        <path
                          d="M23.6666 12C23.6666 11.4477 23.2189 11 22.6666 11C22.1143 11 21.6666 11.4477 21.6666 12V24C21.6666 24.5522 22.1143 25 22.6666 25C23.2189 25 23.6666 24.5522 23.6666 24V12Z"
                          fill="black"
                          fill-opacity="0.8"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.9235 1.66663C12.8456 1.66661 10.4335 1.6666 8.55157 1.91962C6.62525 2.17861 5.10522 2.71906 3.91214 3.91214C2.71906 5.10522 2.17861 6.62525 1.91962 8.55157C1.6666 10.4335 1.66661 12.8456 1.66663 15.9235V16.0765C1.66661 19.1543 1.6666 21.5664 1.91962 23.4484C2.17861 25.3747 2.71906 26.8947 3.91214 28.0878C5.10522 29.2809 6.62525 29.8213 8.55157 30.0803C10.4335 30.3333 12.8456 30.3333 15.9235 30.3333H16.0765C19.1543 30.3333 21.5664 30.3333 23.4484 30.0803C25.3747 29.8213 26.8947 29.2809 28.0878 28.0878C29.2809 26.8947 29.8213 25.3747 30.0803 23.4484C30.3333 21.5664 30.3333 19.1543 30.3333 16.0765V15.9235C30.3333 12.8456 30.3333 10.4335 30.0803 8.55157C29.8213 6.62525 29.2809 5.10522 28.0878 3.91214C26.8947 2.71906 25.3747 2.17861 23.4484 1.91962C21.5664 1.6666 19.1543 1.66661 16.0765 1.66663H15.9235ZM5.32635 5.32635C6.0859 4.56681 7.11352 4.13096 8.81806 3.90179C10.5514 3.66875 12.829 3.66663 16 3.66663C19.1709 3.66663 21.4486 3.66875 23.1819 3.90179C24.8864 4.13096 25.914 4.56681 26.6736 5.32635C27.4331 6.0859 27.869 7.11352 28.0981 8.81806C28.3312 10.5514 28.3333 12.829 28.3333 16C28.3333 19.1709 28.3312 21.4486 28.0981 23.1819C27.869 24.8864 27.4331 25.914 26.6736 26.6736C25.914 27.4331 24.8864 27.869 23.1819 28.0981C21.4486 28.3312 19.1709 28.3333 16 28.3333C12.829 28.3333 10.5514 28.3312 8.81806 28.0981C7.11352 27.869 6.0859 27.4331 5.32635 26.6736C4.56681 25.914 4.13096 24.8864 3.90179 23.1819C3.66875 21.4486 3.66663 19.1709 3.66663 16C3.66663 12.829 3.66875 10.5514 3.90179 8.81806C4.13096 7.11352 4.56681 6.0859 5.32635 5.32635Z"
                          fill="black"
                          fill-opacity="0.8"
                        />
                      </svg>
                    </span>
                    <h2 className="text-display-xs font-semibold font-sans text-content-primary">
                      SEO & GEO
                    </h2>
                  </div>
                  <div className="flex items-center gap-x-2 text-body-sm">
                    <span className="text-content-subtle group-hover:text-brand-primary cursor-pointer group-hover:underline transition-colors duration-200">
                      Learn How
                    </span>
                    <LucideArrowRight className="text-black/40 w-[18px] h-[18px] group-hover:text-brand-primary transition-colors duration-200" />
                  </div>
                </div>
                <p className="text-body-lg font-regular text-content-primary group-hover:opacity-20 group-hover:blur-[2px] transition-all duration-200">
                  Generative Engine Optimization for AI-Search engine for
                  Gemini, ChatGPT, and Google Search.
                </p>
              </div>
            </div>
          </div>
          <div className=" rounded-2xl relative border-0 bg-[#F9FAFA] h-[500px] lg:h-full overflow-hidden group hover:border ">
            <img
              src="images/evo-creo-shot.png"
              className="w-full absolute 
  opacity-20 group-hover:opacity-100 
  -rotate-x-40 -rotate-z-25
scale-100
  translate-x-[20%]
  translate-y-[20%]
  rounded-2xl
  blur-[2px]
  group-hover:blur-0
  group-hover:rotate-x-0
  group-hover:rotate-z-0
  group-hover:translate-x-0
  group-hover:translate-y-[38%]
  group-hover:blur-none
  
  transition-all duration-200
  
  "
              alt=""
            />

            <div className="p-8 pb-0 ">
              <div className="flex flex-col relative gap-y-8">
                <div className="flex justify-between items-center">
                  <div className="flex items-center justify-center gap-x-4">
                    <span className="w-8 h-8 ">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M21.264 1.66663L24.0694 1.66663C25.2673 1.66659 26.2663 1.66656 27.0593 1.77318C27.8964 1.88572 28.6521 2.13328 29.2594 2.74057C29.8667 3.34787 30.1143 4.1036 30.2268 4.94066C30.3334 5.7337 30.3334 6.73266 30.3334 7.93064V24.0693C30.3334 25.2673 30.3334 26.2662 30.2268 27.0593C30.1143 27.8963 29.8667 28.6521 29.2594 29.2594C28.6521 29.8666 27.8964 30.1142 27.0593 30.2267C26.2663 30.3334 25.2673 30.3333 24.0694 30.3333H21.264C20.0661 30.3333 19.0671 30.3334 18.2741 30.2267C17.437 30.1142 16.6813 29.8666 16.074 29.2594C15.4667 28.6521 15.2191 27.8963 15.1066 27.0593C15 26.2662 15 25.2673 15 24.0693V7.93064C15 6.73266 15 5.7337 15.1066 4.94066C15.2191 4.1036 15.4667 3.34787 16.074 2.74057C16.6813 2.13328 17.437 1.88572 18.2741 1.77318C19.0671 1.66656 20.0661 1.66659 21.264 1.66663ZM17 13H20C20.5523 13 21 12.5522 21 12C21 11.4477 20.5523 11 20 11H17V8.99996L18.6667 8.99996C19.219 8.99996 19.6667 8.55225 19.6667 7.99996C19.6667 7.44768 19.219 6.99996 18.6667 6.99996L17.0024 6.99996C17.0081 6.24071 17.0268 5.66782 17.0887 5.20715C17.1715 4.59187 17.3144 4.32854 17.4882 4.15479C17.6619 3.98103 17.9253 3.83807 18.5406 3.75534C19.1846 3.66875 20.048 3.66663 21.3334 3.66663L24 3.66663C25.2854 3.66663 26.1488 3.66875 26.7928 3.75534C27.4081 3.83807 27.6715 3.98103 27.8452 4.15479C28.019 4.32854 28.1619 4.59187 28.2446 5.20715C28.3312 5.8512 28.3334 6.71461 28.3334 7.99996V24C28.3334 25.2853 28.3312 26.1487 28.2446 26.7928C28.1619 27.4081 28.019 27.6714 27.8452 27.8451C27.6715 28.0189 27.4081 28.1619 26.7928 28.2446C26.1488 28.3312 25.2854 28.3333 24 28.3333H21.3334C20.048 28.3333 19.1846 28.3312 18.5406 28.2446C17.9253 28.1619 17.6619 28.0189 17.4882 27.8451C17.3144 27.6714 17.1715 27.4081 17.0887 26.7928C17.0268 26.3321 17.0081 25.7592 17.0024 25H18.6667C19.219 25 19.6667 24.5522 19.6667 24C19.6667 23.4477 19.219 23 18.6667 23H17V21H20C20.5523 21 21 20.5522 21 20C21 19.4477 20.5523 19 20 19H17V17H18.6667C19.219 17 19.6667 16.5522 19.6667 16C19.6667 15.4477 19.219 15 18.6667 15H17V13ZM1.66669 6.46663C1.66669 3.76795 3.95422 1.66663 6.66669 1.66663C9.37916 1.66663 11.6667 3.76795 11.6667 6.46663L11.6667 20.7796C11.6667 21.5038 11.6668 21.9589 11.608 22.4108C11.5387 22.9431 11.4087 23.4661 11.2205 23.9705C11.0608 24.3984 10.8473 24.804 10.506 25.4524L8.51642 29.2326C8.15198 29.925 7.42727 30.3333 6.66669 30.3333C5.90612 30.3333 5.18141 29.925 4.81696 29.2326L2.82739 25.4524C2.48607 24.804 2.27258 24.3984 2.1129 23.9705C1.92469 23.4661 1.79467 22.9431 1.72541 22.4108C1.6666 21.9589 1.66664 21.5038 1.66669 20.7796L1.66669 6.46663ZM6.66669 3.66663C4.96089 3.66663 3.66669 4.96795 3.66669 6.46663L3.66669 7.20658C3.7952 7.2829 3.95621 7.37022 4.14755 7.45835C4.73104 7.72711 5.58833 7.99996 6.66669 7.99996C7.74505 7.99996 8.60235 7.72711 9.18583 7.45835C9.37717 7.37022 9.53819 7.2829 9.66669 7.20658L9.66669 6.46663C9.66669 4.96795 8.3725 3.66663 6.66669 3.66663ZM9.66669 9.42801C8.90298 9.73405 7.88772 9.99996 6.66669 9.99996C5.44567 9.99996 4.43041 9.73405 3.66669 9.42801L3.66669 20.7117C3.66669 21.5252 3.6686 21.8447 3.70869 22.1528C3.75823 22.5335 3.85136 22.9086 3.9867 23.2713C4.09644 23.5654 4.24605 23.8536 4.62882 24.5809L5.92101 27.0361H7.41237L8.70457 24.5809C9.08734 23.8536 9.23694 23.5654 9.34668 23.2713C9.48203 22.9086 9.57515 22.5335 9.6247 22.1528C9.66478 21.8447 9.66669 21.5252 9.66669 20.7117V9.42801ZM3.30623 6.96455L3.30801 6.96603C3.30578 6.96424 3.30573 6.96414 3.30623 6.96455ZM10.0245 6.96665L10.0271 6.9646C10.0267 6.9649 10.0259 6.96559 10.0245 6.96665Z"
                          fill="black"
                          fill-opacity="0.8"
                        />
                      </svg>
                    </span>
                    <h2 className="text-display-xs font-semibold font-sans text-content-primary">
                      Web Design
                    </h2>
                  </div>
                  <div className="flex items-center gap-x-2 text-body-sm">
                    <span className="text-body-sm font-regular text-content-subtle group-hover:text-brand-primary cursor-pointer group-hover:underline transition-colors duration-200">
                      UI/UX Services
                    </span>
                    <LucideArrowRight className="text-black/60 w-[18px] h-[18px] group-hover:text-brand-primary transition-colors duration-200" />
                  </div>
                </div>
                <p className="text-body-lg font-regular text-content-primary group-hover:opacity-20 group-hover:blur-[2px] transition-all duration-200">
                  "We build your business an impactful website design that is
                  mobile-friendly and uses modern UI/UX elements.",
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1 rounded-2xl relative lg:h-full border-0 h-[500px] bg-[#F9FAFA] overflow-hidden group  hover:border">
            <img
              src="/images/GBP2.png"
              className="w-full absolute 
              opacity-20 group-hover:opacity-100 
               -rotate-z-15
               rotate-x-20
               rotate-y-12
              translate-x-[-20%]
              scale-[2.5]
              translate-y-[120%]
              rounded-2xl
              
              group-hover:blur-0
              group-hover:rotate-x-0
              group-hover:rotate-z-0
              group-hover:-translate-x-[10%]
              group-hover:translate-y-[108%]
              group-hover:blur-none
              group-hover:scale-[1.7]

              transition-all duration-200
  
              "
              alt=""
            />

            <div className="p-8 pb-0 ">
              <div className="flex flex-col relative gap-y-8">
                <div className="flex justify-between items-center">
                  <div className="flex items-center justify-center gap-x-4">
                    <span className="w-8 h-8 ">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20.8905 9.33337C20.8905 8.78109 21.3382 8.33337 21.8905 8.33337H29.3334C29.8857 8.33337 30.3334 8.78109 30.3334 9.33337V16.7278C30.3334 17.2801 29.8857 17.7278 29.3334 17.7278C28.7811 17.7278 28.3334 17.2801 28.3334 16.7278V11.7372L20.1523 19.8684C19.527 20.49 18.988 21.0257 18.4986 21.397C17.9739 21.795 17.391 22.0961 16.6734 22.096C15.9558 22.0959 15.3729 21.7947 14.8484 21.3966C14.359 21.0252 13.8202 20.4893 13.1951 19.8677L12.8294 19.504C12.1439 18.8224 11.6994 18.3834 11.3293 18.1025C10.9823 17.8392 10.8201 17.8098 10.7127 17.8099C10.6053 17.8099 10.4431 17.8394 10.0963 18.103C9.72642 18.3841 9.28227 18.8234 8.59723 19.5056L3.37234 24.7086C2.981 25.0983 2.34783 25.097 1.95813 24.7057C1.56843 24.3143 1.56975 23.6812 1.96109 23.2915L7.2325 18.0421C7.85773 17.4194 8.39661 16.8827 8.88608 16.5107C9.41075 16.1119 9.99386 15.8101 10.712 15.8099C11.4301 15.8096 12.0134 16.111 12.5384 16.5094C13.0281 16.881 13.5674 17.4173 14.1931 18.0395L14.5588 18.4032C15.2437 19.0843 15.6878 19.5228 16.0575 19.8035C16.4042 20.0666 16.5663 20.096 16.6736 20.096C16.781 20.096 16.9431 20.0666 17.2898 19.8036C17.6596 19.5231 18.1038 19.0846 18.7889 18.4037L26.9087 10.3334H21.8905C21.3382 10.3334 20.8905 9.88566 20.8905 9.33337Z"
                          fill="black"
                          fill-opacity="0.8"
                        />
                      </svg>
                    </span>
                    <h2 className="text-display-xs font-semibold font-sans text-content-primary">
                      GBP Optimization
                    </h2>
                  </div>
                  <div className="flex items-center gap-x-2 text-body-sm">
                    <span className="text-body-sm font-regular text-content-subtle group-hover:text-brand-primary cursor-pointer group-hover:underline transition-colors duration-200">
                      More
                    </span>
                    <LucideArrowRight className="text-black/60 w-[18px] h-[18px] group-hover:text-brand-primary transition-colors duration-200" />
                  </div>
                </div>
                <p className="text-body-lg font-regular text-content-primary group-hover:opacity-20 group-hover:blur-[2px] transition-all duration-200">
                  We present your business professionally in GBP, leaving a
                  fascinating impression on your potential customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialSection />
    </section>
  );
};

export default ServicesSection;
