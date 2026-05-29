"use client";
import HeroSections from "@/components/organisms/heroSection";
import TestimonialVideo from "../../components/organisms/testimonialVideo";
import TestimonialsComment from "@/components/organisms/TestimonialsComment.tsx"
import Footer from '@/components/organisms/FooterHomePage'

export default function Testimonials() {
  return (
    <div>
      <HeroSections
        header={
            <h1 className="text-display-lg leading-display-lg md:text-display-2xl md:leading-display-2xl lg:text-display-3xl lg:leading-display-3xl  font-bold font-display">
                Real Revenue. 
                <span className="text-brand-primary font-display text-display-lg leading-display-lg md:text-display-2xl md:leading-display-2xl lg:text-display-3xl lg:leading-display-3xl font-bold">
                  Zero Risk
                </span>
              </h1>
        }
        description="Hear directly from business owners who scaled their sales—not just their leads—using our Pay-Per-Sale growth model."
        smallDescription="Client Success Stories"
        IsBrand={false}
        IsButton={false}
      />
      <TestimonialVideo />

      <div className="flex justify-center py-32">
        <div className=" max-w-[1200px] px-32">
            <h2 className="text-display-md leading-display-md lg:text-display-xl lg:leading-display-xl text-content-inverse-faint font-semibold  ">
                See how our Pay-Per-Sale model <span className="text-content-inverse-primary">turns organic traffic into closed deals.</span>
            </h2>
        </div>
      </div>

      <TestimonialsComment />

      <Footer/>
    </div>
  );
}
