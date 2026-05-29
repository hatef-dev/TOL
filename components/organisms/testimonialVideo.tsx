
type Testimonial = {
  name: string;
  jobTitle: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Zenith Dynamic Solutions",
    jobTitle: "Marketing Director",
    avatar: "/avatar.png",
  },
  {
    name: "Jordan Lee",
    jobTitle: "Chief Innovation Officer",
    avatar: "/comment3.svg",
  },
  {
    name: "Emma Johnson",
    jobTitle: "Creative Solutions",
    avatar: "/avatar.png",
  },
  {
    name: "Noah Brown",
    jobTitle: "Marketing Director",
    avatar: "/avatar.png",
  },
];

export default function VideoTestimonials() {
  const loopItems = [...testimonials, ...testimonials];

  return (
    <section className=" overflow-visible w-full">
      <div className="mx-auto ">
        <div className="marquee-wrapper relative overflow-hidden">
          <div className="marquee-track flex w-max items-start gap-x-8 overflow-x-visible">
            {loopItems.map((item, i) => (
              <article
                key={`${item.name}-${i}`}
                className="w-[352px] h-[352px] rounded-3xl bg-[url('/avatar.png')] bg-cover group bg-center flex relative"
              >
                <div className="w-full h-full bg-black opacity-0 top-0 left-0 absolute group-hover:opacity-50 z-10 transition-all duration-300"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20" >
                  <button className="w-16 h-16  bg-white/30 backdrop-blur-md  items-center flex rounded-full justify-center group  group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-play fill-white text-white ml-1"
                      aria-hidden="true"
                    >
                      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                    </svg>
                  </button>
                </div>
                <div className="self-end w-full pl-[35.2px] py-[17px] flex flex-col bg-overlay-medium z-0 ">
                  <h3 className="text-[24px] font-sans italic leading-9 text-content-inverse-primary font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-[19px] leading-[30px] text-content-inverse-subtle">
                    {item.jobTitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 28s linear infinite;
        }
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
