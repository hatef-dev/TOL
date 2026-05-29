

export default function CtaSection() {
  return (
    <div className="pt-6"> 
    <div className="max-w-6xl   mx-auto px-4">
      <div className="bg-white  rounded-3xl py-30 px-6 text-center shadow-xl">
        <p className="font-mono text-sm leading-tight text-emerald-500">LIMITED AVAILIBILITY</p>
        <h2 className="lg:text-[68px] lg:eading-[72px] font-[600] text-black/95 md:text-4xl tracking-[-0.5px] font-sans ">
          <br /> 
          Ready to pay only for the <br/>
          sales you close?
        </h2>

        <p className="mt-4  text-center text-lg leading-[32px] text-black/60 font-sans ">
       Connect with an expert. We{"'"}ll audit your current process and see if
       <br/>your business qualifies for our Pay-Per-Sale partnership.
        </p>

        <button className="mt-8  text-xl leading-[32px] inline-flex items-center font-sans font-semibold gap-2 bg-black/90 text-white px-6 py-3 rounded-lg hover:bg-black/50 transition">
          Check Availability
          <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.75 0.75L6.75 7.75L0.75 14.75" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
          <span> </span>
        </button>
      </div>
    </div>
    </div>
  );
}
