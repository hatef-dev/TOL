import React from 'react';

const PartnershipSection = () => {
  const industries = [
    "Law Firms", "Medical Clinics", "Flooring Companies", "Roofing Companies",
    "Commercial Cleaning", "Restaurant Design", "Fire Suppression", "Auto Glass"
  ];

  return (
    <section className="py-24 px-6 lg:py-10 max-w-7xl bg-amber-400 mx-auto  border-white/10">
      <div className="max-w-7xl  mx-auto">
        <p className="text-emerald-500 mt-5 uppercase leading-[32px] font-mono text-[22px] text-center mb-4">
          EXCLUSIVE PARTNERSHIP
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-400 mb-20 max-w-3xl mx-auto">
          We only Work with <span className="text-white">One Partner per Area.</span> Is that You?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 hover:bg-black/40  lg:grid-cols-4 gap-4 mb-16">
          {industries.map(industry => (
            <div key={industry} className="bg-[#111] border border-white/5 p-8 rounded-2xl  hover:border-emerald-500/50 transition-colors">
              <h3 className="text-white font-bold text-lg mb-2">{industry}</h3>
              <p className="text-gray-500 text-sm">Explaining something about this business that we cover and partnership.</p>
            </div>
          ))}
        </div>

        <div className="text-center gap-2">
          <p className="text-gray-500 mb-6">Didn{"'"}t find your business category?</p>
          <button className="bg-[#1a1a1a] border border-white/10  px-8 py-3 rounded-xl text-sm font-bold hover:bg-white ">
            Find Out if You Qualify <svg  className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L15 12L9 19" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;