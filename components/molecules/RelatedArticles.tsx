import Image from "next/image";

const articles =[
  { title: "Organic Lead Generation for Commercial Hood Installer and Cleaners", date: "January 07" },
  { title: "Organic Lead Generation for Commercial Hood Installer and Cleaners", date: "January 07" },
  { title: "Organic Lead Generation for Commercial Hood Installer and Cleaners", date: "January 07" },
];

export default function RelatedArticles(){

  return (
    <section className="max-w-7xl px-10 mx-auto p-6 rounded-2xl mt-5 bg-white ">
      <h2 className="lg:text-[44px] py-8 text-[28px] font-sans font-bold  text-black/95">
      Related Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2">
        {articles.map((article,index)=>(
          <div key={index} className="p-4">
            <div className=" bg-white "></div>
            <h3 className="font-sans font-semibold hover:underline lg:text-2xl text-[20px]">
              {article.title}
            </h3>
            <p className="lg:text-[15px] text-[11px] leading-relaxed pt-2 text-black/80 ">As an auto glass company, you might rely on referrals as your main source of lead generation. However, you might have faced this problem before:</p>


          <div className="flex flex-row items-center gap-4 pt-2">
          <div className="w-10 h-10 overflow-hidden rounded-full shrink-0">
            <Image
              src="/images/hero-image.png"
              alt="Hero image"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>

  <div className="min-w-0">
    <div className="flex items-center gap-1 flex-nowrap">
      <p className="text-xs lg:text-sm font-semibold underline hover:text-emerald-500 whitespace-nowrap">
        Ali Huseyni
      </p>
      <p className="text-xs lg:text-[14px] text-gray-500 whitespace-nowrap">
        AI Research Optimization
      </p>
    </div>
    <span className="block pt-1 text-xs text-black/60 lg:text-[14px]">January 07</span>
  </div>
</div>
</div>
        ))}
      </div>

    </section>
  )

}
