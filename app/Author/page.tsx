import Image from "next/image";
import Navbar from "../../components/organisms/Navbar";
import Footer1 from "@/components/organisms/footsec";


type Article = {
  id: number;
  title: string;
  subscribe: string;
  meta: string;
};

const articles: Article[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  title: "Organic Lead Generation for Commercial Hood Installer and Cleaners",
  subscribe:
    "As an auto glass company, you might rely on referrals as your main source of lead generation. However, you might have faced this problem before:",
  meta: "AI Research Optimization January 07",
}));



export default function AuthorPage() {
  return (
    <main className="min-h-screen bg-black/95 ">
      <Navbar/>
      <section className="mx-auto max-w-7xl">
        <header className="mx-auto mb-10 lg:py-15 max-w-4xl text-center text-white sm:mb-14">
          <div className="mx-auto h-50 w-50 overflow-hidden rounded-full border border-white/20">
            <Image
              src="/images/hero-image.png"
              alt="Ali Husayni"
              width={150}
              height={150}
              className="h-full w-full object-cover"
              priority
            />
          </div> 

          <h1 className="mt-4 text-[22px] font-medium">Ali Husayni</h1>

          <div className="flex  flex-row lg:py-5 py-2 gap-5 items-center justify-center rounded-full">

            <button className=" bg-white/20 border border-white/10 p-2.5 rounded-full"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.75 7.25V10.75C15.75 13.5114 13.5114 15.75 10.75 15.75H7.25C4.48858 15.75 2.25 13.5114 2.25 10.75V7.25C2.25 4.48858 4.48858 2.25 7.25 2.25H10.75C13.5114 2.25 15.75 4.48858 15.75 7.25Z" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.25 12.75V10.125V7.5" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.25 12.75V10.3125M8.25 7.5V10.3125M8.25 10.3125C8.25 7.5 12.75 7.5 12.75 10.3125V12.75" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.25 5.2575L5.2575 5.24917" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
             <button className=" bg-white/20 border border-white/10 p-2.5  rounded-full"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.5698 15.5184L3.00317 3.21836C2.69664 2.82425 2.97749 2.25 3.47678 2.25H4.95655C5.1417 2.25 5.31649 2.33548 5.43016 2.48164L14.9968 14.7816C15.3034 15.1758 15.0225 15.75 14.5232 15.75H13.0435C12.8583 15.75 12.6835 15.6645 12.5698 15.5184Z" stroke="white" stroke-opacity="0.8" stroke-width="1.5"/>
  <path d="M15 2.25L3 15.75" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round"/>
</svg></button>
              <button className=" bg-white/20 border border-white/10 p-2.5 rounded-full">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_5847_1574)">
    <path d="M16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.75 1.53699C9.75 1.53699 12 4.49996 12 8.99996" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.25 16.4629C8.25 16.4629 6 13.5 6 8.99996C6 4.49996 8.25 1.53699 8.25 1.53699" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.97266 11.625H9.00045" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.97266 6.375H16.0282" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4093 13.438C16.7797 13.6658 16.7569 14.2203 16.3755 14.2636L14.4505 14.4818L13.5871 16.216C13.416 16.5596 12.8872 16.3914 12.7998 15.9655L11.8583 11.3785C11.7844 11.0185 12.1079 10.7919 12.421 10.9845L16.4093 13.438Z" stroke="white" stroke-opacity="0.8" stroke-width="1.5"/>
  </g>
  <defs>
    <clipPath id="clip0_5847_1574">
      <rect width="18" height="18" fill="white"/>
    </clipPath>
  </defs>
</svg></button>
          

          </div>
          <h3 className="mx-auto mt-5  text-xs px-3 font-sans   text-white/70 lg:text-[18px] font-semibold">
            With 23 years as the CEO and Founder, has automated several books on SEO and
            focuses on AI-driven search engine optimization. We help local businesses grow by
            developing high-speed websites that boost traffic, enhance engagement, and drive
            conversions.
          </h3>

        </header>

        <section className="rounded-2xl  bg-white px-5 py-8 text-black sm:px-8 sm:py-10">
          <h2 className="text-2xl font-semibold tracking-tight">Latest Articles</h2>

          <div className="mt-8 grid gap-x-8 gap-y-7 md:grid-cols-2">
            {articles.map((article) => (
              <article key={article.id} className="space-y-2">
                <h3 className="text-[22px] font-semibold leading-7 tracking-tight">
                  {article.title}
                </h3>
                <p className="text-sm leading-6 text-black/70">{article.subscribe}</p>
                <p className="pt-2 text-[11px] uppercase tracking-wide text-black/45">
                  {article.meta}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              className="rounded-md border border-black/10 px-6 py-3 text-sm font-medium text-black/80 transition hover:bg-white/25 bg-white "
            >
              Explore More Insights
            </button>
          </div>
        </section>

      </section>
      <Footer1/>
    </main>
  );
}


