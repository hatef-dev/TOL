
type Testimonial = {
  name: string;
  company: string;
  avatar: string;
  comment: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sakura Ito",
    company: "Ito Enterprises",
    avatar: "/avatar1.png",
    comment: "“Top Organic Leads was a game-changer for us. Their system is effective and intuitive. The team's support was outstanding, enhancing our online presence and lead quality. I highly recommend them to any business seeking growth.”"
  },
  {
    name: "Jordan Lee",
    company: "Ramirez & Co. Consulting",
    avatar: "/avatar1.png",
    comment: "“Top Organic Leads is essential for any business looking to dominate their market.”"
  },
  {
    name: "Isabelle Dubois",
    company: "Dubois Consulting",
    avatar: "/avatar1.png",
    comment: "“I struggled with lead generation until Top Organic Leads stepped in. Their team devised a strategy that produced results. We've seen an increase in leads and conversions, freeing me to focus on growth. I highly recommend them to anyone wanting to enhance their lead generation.”"
  },
  {
    name: "Kenji Tanaka",
    company: "Tanaka Corp",
    avatar: "/avatar1.png",
    comment: "“I'm very happy with Top Organic Leads. They've revolutionized our lead generation and business growth.”"
  },
];

export default function VideoTestimonials() {
  const loopItems = [...testimonials, ...testimonials];

  return (
    <section className=" overflow-visible w-full">
      <div className="mx-auto ">
        <div className="marquee-wrapper relative overflow-hidden">
          <div className="marquee-track flex w-max items-start gap-6 overflow-x-visible">
            {loopItems.map((item, i) => (
              <article
                key={`${item.name}-${i}`}
                className="flex flex-col gap-6 rounded-3xl p-8"
              >
                
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
