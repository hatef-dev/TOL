import Image from "next/image";

export default function AboutSection (){
    return(
       
        <main className="min-h-screen mt-0 px-4 md:px-6  text-white flex items-center">
            <section className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-0 pt-0">

                <div className="relative z-10">
                    <h3 className="text-white/40 text-[31px] font-sans font-semibold leading-[46px] max-w-xl">
                        With over 23 years of experience, we are a growth assistance company specializing in <span className="text-white/95 font-sans font-semibold text-[31px] leading-[46px]">Seo practices and lead generation strategies.</span> We build blazing fast websites that attract traffic, boost engagement, <span className="text-white font-semibold text-[30px] leading-[46px]">optimized for AI and increase conversion for local businesses.</span>
                    </h3>

                    <div className="mt-8">
                        <p className="font-semibold text-white/95 text-lg leading-[32px]">Ali Husayni</p>
                        <p className="font-semibold font-sans text-sm leading-[20px] text-white/80">Founder & CEO</p>
                    </div>
                </div>

                <div className="relative w-full h-70 md:h-[600px] lg:h-[600px] rounded-2xl overflow-hidden">
                    <Image 
                        src="/images/husayni.png"
                        alt="hero image"
                        fill
                        className="object-cover" 
                        priority
                    />
                </div>
            </section>
        </main>
    );
};
