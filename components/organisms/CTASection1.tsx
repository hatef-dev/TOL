import Image from "next/image";

export default function CtaSection1() {
  return (
    <section className="pt-6">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl py-30 px-6 text-center ">
          <Image
            src="/assets/backgroundCTA.png"
            alt="section"
            fill
            className="object-cover "
            priority
          />

          <div className="absolute inset-0 z-20" />

          <div className="relative z-20">
            <h2 className="lg:text-[68px] text-[28px] font-semibold text-white/95 text-center font-sans leading-tight">
              We Elevate Your Business to <br /> Increase Revenue
            </h2>
            <p className="mt-4 text-lg leading-tight text-white/60">
              Connect with an expert. We&apos;ll walk you through how it works.
            </p>
            <button className="mt-8 inline-flex items-center gap-2 bg-white/95 text-black/95 px-6 py-3 rounded-lg hover:bg-white/80 transition">
              Let&apos;s Talk
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5L15 12L9 19"
                  stroke="black"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
