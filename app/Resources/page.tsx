import Image from "next/image";
import Banner from "@/components/atoms/Banner";
import Navbar from "@/components/organisms/Navbar";
import Footer1 from "@/components/organisms/footsec";

export default function Resources() {
  return (
    <div className="min-h-screen bg-black  text-white">
      <Banner />

      <Navbar />

      <header className="text-center  py-44 px-4">
        <h1 className="lg:text-5xl text-3xl md:text-6xl font-extrabold mb-4">
          The Local SEO & AI Knowledge Hub
        </h1>
        <p className="text-white/80 text-[22px] leading-tight max-w-2xl mx-auto">
          Actionable strategies to master Google rankings, optimize for AI
          Search, and convert local traffic into revenue.
        </p>
      </header>

      <section className="w-full  mx-auto px-6 pb-20">
        <div className="flex  flex-wrap gap-3 justify-center mb-10 rounded-3xl border-black/10 bg-white py-6">
          {[
            "Featured",
            "SEO",
            "AI Search Optimization",
            "GBP Optimization",
            "Lead Generation",
            "Web Design",
          ].map((tab, index) => (
            <button
              key={tab}
              className={`px-4 py-1.5 rounded-lg hover:border-black/80  text-sm border ${
                index === 0
                  ? "bg-black/90 text-white  border-black/95"
                  : "border-black/10  text-black/80 "
              }`}
            >
              {tab}
            </button>
          ))}

          <div className="grid grid-cols-1 items-center justify-center max-w-7xl mx-auto px-5 md:grid-cols-2 lg:grid-cols-2 ">
            {[...Array(6)].map((_, i) => (
              <article
                key={i}
                className="bg-white px-5 text-black p-8  flex flex-col gap-5 "
              >
                <h3 className="lg:text-[28px]  font-semibold font-sans leading-9 hover:underline">
                  Organic Lead Generation for Commercial Hood Installer and
                  Cleaners
                </h3>
                <p className="text-black/80 lg:text-[18px] text-sm flex-grow leading-6.75">
                  As an auto glass company, you might rely on referrals as your
                  main source of lead generation. However, you might have faced
                  this problem before:
                </p>

                <div
                  className="
                flex items-center gap-3
                w-full max-w-full px-3
                lg:bottom-6 lg:left-10 lg:w-auto lg:px-0
              "
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 overflow-hidden rounded-full ">
                    <Image
                      src="/images/hero-image.png"
                      alt="Hero image"
                      width={35}
                      height={35}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 min-w-0">
                    <p className="text-sm font-semibold underline whitespace-nowrap hover:text-emerald-500">
                      Ali Huseyni
                    </p>
                    <p className="text-sm text-black/60 truncate font-mono">
                      AI Research Optimization January 07
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <div className="mt-10 col-span-1 md:col-span-2 lg-col-span-2 flex text-center items-center justify-center mx-auto">
              <button
                type="button"
                className="rounded-lg text-center mx-auto max-w-7xl  items-center text-black/80  gap-2 border py-1 px-2 hover:bg-black/10 hover:border-white/80  border-black/20 text-[16px] font-sans lg:mb-8 font-semibold "
              >
                Explore More Insights
              </button>
            </div>
          </div>
        </div>
        <Footer1 />
      </section>
    </div>
  );
}
