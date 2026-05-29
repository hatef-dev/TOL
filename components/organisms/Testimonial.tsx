const ExclusivePartnership: React.FC = () => {
  const industries = [
    "Law Firms", "Medical Clinics", "Flooring Companies", "Roofing Companies",
    "Commercial Cleaning", "Restaurant Design", "Fire Suppression", "Auto Glass"
  ];

  return (
    <section className="bg-[#050505] py-24 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl  mx-auto">
        <div className="flex gap-4 mb-6 text-[10px] font-black tracking-[0.2em] uppercase">
          <span className="text-emerald-500">Exclusive</span>
          <span className="text-emerald-900">Partnership</span>
        </div>
        
        <h2 className="text-[22px] lg:text-[40px] font-sans font-[600] tracking-[0.5] text-white/40 mb-20  leading-[58px]">
          We only Work with <span className="text-white">One Partner per Area.</span> Is that You?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {industries.map((item) => (
            <div key={item} className="bg-[#151515] border border-white/5 p-8 rounded-xl hover:bg-[#1a1a1a] transition-all group">
              <h3 className="text-white font-bold text-lg mb-3">{item}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Expelling some thing about this business that we cover and partnership.
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center gap-6">
          <p className="text-gray-500 text-sm">Didn{"'"}t find your business category?</p>
          <button className="flex items-center gap-2 bg-[#222] border border-white/10 text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-white hover:text-black transition-all group">
            Find Out if You Qualify 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExclusivePartnership;