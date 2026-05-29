import HeroSections from "@/components/organisms/heroSection";
import FAQSection from "../../components/organisms/FAQ";

import Footer from '@/components/organisms/FooterHomePage'

export default function Optimization() {
  const optimizationSteps = [
    {
      step: 1,
      title: "Deep Audit",
      description:
        "We manually trace every request path. Automated tools miss 40% of deep issues; we dig until we find every millisecond of lag.",
    },
    {
      step: 2,
      title: "Infrastructure Tuning",
      description:
        "Your server defines your speed limit. We configure advanced caching layers and database queries for instant time-to-first-byte.",
    },
    {
      step: 3,
      title: "Code Clean-up",
      description:
        "Bloated code kills conversion. We surgically remove unused CSS and JS without breaking your design, ensuring immediate painting.",
    },
    {
      step: 4,
      title: "Performance Shield",
      description:
        "Speed drifts over time with updates. We set up 24/7 monitors to catch and fix any regression the moment it happens.",
    },
  ];
  return (
    <div>
      <div>
        <HeroSections
          header={
            <h1 className="text-display-lg leading-display-lg md:text-display-2xl md:leading-display-2xl lg:text-display-3xl lg:leading-display-3xl  font-bold font-display">
              Convert Better with <br />
              <span className="text-brand-primary font-display text-display-lg leading-display-lg md:text-display-2xl md:leading-display-2xl lg:text-display-3xl lg:leading-display-3xl font-bold">
                Sub-1s Speed
              </span>
            </h1>
          }
          IsButton={true}
          IsBrand={true}
          description="While your competitors stay in the slow lane, we re-engineer your website to outperform the 1% of the elite."
          buttonText="Get in Touch"
          smallDescription="Speed Optimization"
          paddingTop={64}
          paddingBottom={32}
        />
      </div>
      {/* Dealy kills */}
      <div className="flex justify-center ">
        <div className="p-4 md:px-4 md:py-8 lg:px-8 lg:py-16 max-w-[1512px]">
        <div className="bg-surface-base rounded-2xl px-4 py-8 md:px-8 md:py-16 md:rounded-3xl lg:px-16 lg:py-32 lg:rounded-4xl  flex flex-col lg:flex-row justify-between items-center gap-8 ">
          <div className="flex flex-col gap-8 w-full lg:w-[50%]  ">
            <span className="text-brand-primary font-mono text-code-base uppercase">
              THE BOTTLENECK
            </span>
            <h1 className="text-display-md leading-display-md  lg:text-display-xl lg:leading-display-xl   text-content-primary font-semibold font-display  ">
              Delay kills revenue. Plain and simple.
            </h1>
            <p className="text-body-md text-black/60 ">
              Research shows that you have less than 3 seconds to keep a visitor
              from bouncing. In the high-stakes world of organic leads, speed is
              not just a metric—it's your bottom line protection.
            </p>
            <div className="w-full md:w-[50%] flex justify-between items-center gap-x-8 ">
              <div className="flex flex-col gap-y-0-5 lg:pr-14 font-semibold">
                <span className="text-display-md leading-display-md  lg:text-display-xl lg:leading-display-xl   text-brand-primary font-semibold font-display ">
                  7%
                </span>
                <div className="flex flex-col">
                  <span className="text-label-sm text-content-faint leading-label-sm font-semibold ">
                    CONVERSION <br className="hidden lg:hidden" /> Increase/ 1s
                  </span>
                </div>
              </div>
              <span className=" w-[2px] h-[50px] border border-border-weak "></span>
              <div className="flex flex-col gap-y-0-5">
                <span className="lg:text-display-md text-display-xs lg:leading-display-md  text-content-subtle font-semibold font-display ">
                  Sub-1s
                </span>
                <div className="flex flex-col">
                  <span className="text-label-sm text-content-faint leading-label-sm font-semibold ">
                    THE STANDARD
                  </span>
                </div>
              </div>
            </div>
          </div>
          <img src="./industry.png" className="w-full  lg:w-[50%]" alt="" />
        </div>
      </div>
      </div>
      {/* Beating Industry Standards */}
      <div className="lg:py-32 md:pb-16 pt-32 pb-8 flex flex-col  lg:gap-y-32 md:gap-y-16 gap-y-8">
        <div className="flex flex-col items-center gap-y-6 ">
          <h2 className="text-display-md leading-display-md  text-center lg:text-display-lg lg:leading-display-lg   text-content-inverse-primarys font-semibold font-display ">
            Beating Industry Standards
          </h2>

          <p className="text-content-muted text-center">
            We engineered tuanlelaw.com to outperform typical competitors by{" "}
            <span className="font-semibold text-content-inverse-primary">
              300%
            </span>
            .
          </p>
        </div>
        <div className="px-4 pb-4 md:px-8 md:pb-8 lg:px-16 lg:pb-16 flex justify-center relative ">
          <img
            src="./ourOptimization.png"
            alt=""
            className="lg:w-[883px] md:w-[690px] w-[354px]"
          />
          <img
            src="./300.png"
            alt=""
            className="absolute lg:-bottom-32 md:-bottom-12 -bottom-9 -z-10 md:w-[463px] lg:w-[912px] w-[237px]"
          />
        </div>
      </div>
      {/* 4 step */}
      <div className="flex justify-center items-center w-full">
        <div className="lg:py-32 lg:px-16  md:pb-16 md:px-8 px-4 pt-32 pb-8 gap-y-16 flex flex-col max-w-[1512px] ">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-display-md leading-display-md  text-content-inverse-primary font-semibold font-display ">
            The 4-Step path to score 100
          </h3>
          <p className="text-body-md text-brand-primary ">
            Our systematic approach to outrunning giants.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 col-span-1 md:gap-8 gap-4">
          {optimizationSteps.map((step) => {
            return (
              <div
                key={step.step}
                className="flex flex-col gap-8 p-8 bg-surface-inverse-level-1 group  border hover:bg-bg-brand-subtle hover:border-brand-primary transition-all ease-in-out duration-200  border-border-inverse-weak rounded-3xl"
              >
                <span className="text-display-lg text-content-inverse-disabled font-display font-semibold transition-all ease-in-out duration-200 group-hover:text-data-heatmap-medium">
                  0{step.step}
                </span>
                <div className="flex flex-col gap-y-2">
                  <h4 className="text-body-lg font-semibold ">{step.title}</h4>
                  <p className="text-body-md font-regular text-content-inverse-muted">
                    We manually trace every request path. Automated tools miss
                    40% of deep issues; we dig until we find every millisecond
                    of lag.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
      {/* Zero changes in appearance. Just raw speed felt */}
      <div className="flex justify-center items-center w-full py-32">
        <div className="lg:px-32 lg:py-16 lg:w-[1220px] w-full md:p-16 p-8 font-display">
          <p className="text-content-inverse-faint text-display-md leading-display-md lg:text-display-lg font-semibold lg:leading-display-lg">
            <span className="text-brand-primary">
              Zero changes in appearance. Just raw speed felt
            </span>
            .We optimize the delivery infrastructure without touching a single
            pixel of your design or SEO structure.
          </p>
        </div>
      </div>
      <div className="lg:px-8 lg:py-32 px-4 py-16 flex justify-center ">
        <div className="max-w-[1400px] lg:rounded-4xl md:rounded-3xl rounded-2xl  bg-surface-base lg:px-8 lg:py-16 md:px-4 md:py-8 px-1 py-4 ">
          <div className="lg:px-16 lg:py-4 md:px-16 md:py-4  p-4 flex lg:flex-row flex-col items-center justify-between gap-x-24 gap-y-16">
            <div className="flex flex-col lg:gap-y-16 md:gap-y-8 gap-y-4 lg:w-[50%] ">
              <span>
                <svg
                  width="41"
                  height="31"
                  viewBox="0 0 41 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41 30.75V15.375H30.75C30.75 9.72469 35.3446 5.125 41 5.125V0C32.522 0 25.625 6.89697 25.625 15.375V30.75H41ZM15.375 30.75V15.375H5.125C5.125 9.72469 9.71956 5.125 15.375 5.125V0C6.89697 0 0 6.89697 0 15.375V30.75H15.375Z"
                    fill="#10B880"
                  />
                </svg>
              </span>
              <h2 className="text-display-md leading-display-md font-semibold text-content-primary font-display">
                Our mobile conversion rates increased by 110% in the first
                month.{" "}
                <span className="text-content-faint">
                  {" "}
                  Their sub-1s load time guarantee is absolute reality.
                </span>
              </h2>
              <div className="flex flex-col gap-y-1">
                <h5 className="text-body-lg italic text-content-primary font-semibold">
                  Hellen Kler
                </h5>
                <span className="text-body-md text-black/60 ">Writer</span>
              </div>
            </div>
            <img src="/Hellen.png" alt="" className="lg:w-[462px]" />
          </div>
        </div>
      </div>
      <FAQSection />
      <Footer />
    </div>
  );
}
