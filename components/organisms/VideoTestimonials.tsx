import Image from "next/image";

type Testimonial = {
  name: string;
  company: string;
  text: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ava Martinez",
    company: "UXGurus.co",
    text: "They took the time to understand our users, creating a sleek interface that improved satisfaction.",
    avatar: "/comment1.svg",
  },
  {
    name: "Jordan Lee",
    company: "TechSavvy.io",
    text: "The user experience from this team is amazing. They turned our website into an engaging hub.",
    avatar: "/comment3.svg",
  },
  {
    name: "Emma Johnson",
    company: "CreativeSolutions.com",
    text: "Working with them has transformed our branding. Their insights helped us connect deeply with customers.",
    avatar: "/Avatar(2).svg",
  },
  {
    name: "Noah Brown",
    company: "GrowthLab.ai",
    text: "Clear process, fast delivery, and measurable business impact.",
    avatar: "/comment1.svg",
  },
];

export default function VideoTestimonials() {
  
  const loopItems = [...testimonials, ...testimonials];

  return (
    <section className="bg-white py-2 md:py-1 overflow-visible w-full">
      <div className="mx-auto ">
      

        <div className="marquee-wrapper relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

          <div className="marquee-track flex w-max items-start gap-4 overflow-x-visible">
            {loopItems.map((item, i) => (
              <article
                key={`${item.name}-${i}`}
                className="w-[450px] shrink-0 rounded-3xl border-2 border-border-weak bg-surface-level-1 p-4 hover:bg-surface-level-2"
              >
                <div className="mb-3 flex items-center gap-4" >
                  <div className="relative h-10 w-10">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <h3 className="text-label-large font-bold  text-content-primary ">{item.name}</h3>
                    <p className="text-body-sm font-regular text-black/60">{item.company}</p>
                  </div>
                </div>
                <p className="text-[22px]/[32px] font-[400] text-start text-content-subtle ">"{item.text}"</p>
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
};
