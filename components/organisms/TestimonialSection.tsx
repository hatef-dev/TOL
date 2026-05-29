import Image from "next/image";

const TestimonialSection: React.FC = () => {
  return (
    <section className="w-full mx-auto overflow-hidden rounded-2xl bg-white px-6 md:px-12 lg:px-[128px] lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row">
        <div className="order-1 w-full lg:order-1 lg:w-3/5">
       
          <div className="mb-6 flex text-brand-primary">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xl">
                ★
              </span>
            ))}
          </div>

          <h3 className="mb-8 text-heading-3 font-sans font-semibold text-content-primary ">
            {'"'}Very friendly and professional, keeping me updated along the way.
            <span className="font-sans font-semibold text-heading-3 text-content-faint">
              {" "}
              I was very happy with their services and would recommend them.
            </span>
            {'"'}
          </h3>

          <div className="flex items-center gap-x-[66px]">
            <div>
              <h4 className="text-[22px] font-semibold font-sans text-content-primary">Ebrahim Behbahani</h4>
              <p className="text-[18px] leading-[27px] font-sans text-black/60">Studio Director, Imfinity</p>
            </div>
        
            <Image src="/images/ilmfinity.png" alt="Imfinity logo" priority width={140} height={100} />
          </div>
        </div>

        <div className="order-2 relative w-full lg:order-2 lg:w-2/5">
          <Image
            src="/Ebrahim-Photo(1).png"
            alt="Ebrahim Behbahani"
            width={750}
            height={650}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
