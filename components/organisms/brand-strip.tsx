import { content } from '@/data/content';

export const BrandStrip = () => {
    const industries = content.brandStrip.industries;

    return (
        <section className="py-20 bg-[#030806] text-white border-y border-white/10">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/3">
                        <h3 className="font-sans text-3xl font-bold mb-4">
                            {content.brandStrip.heading.line1} <br />
                            <span className="text-[#10B981]">{content.brandStrip.heading.line2}</span>
                        </h3>
                        <p className="text-white/60 text-lg">
                            {content.brandStrip.subHeading}
                        </p>
                    </div>

                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {industries.map((industry, index) => (
                                <div key={index} className="bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-center hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                                    <span className="text-sm font-medium text-gray-300">{industry}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
