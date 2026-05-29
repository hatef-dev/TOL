import React from 'react';
import { content } from '@/data/content';
import Image from 'next/image';





export const PortfolioSection = () => {
    const caseStudies = content.portfolio.caseStudies;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-[#10B981] text-xs">★</span>
                            ))}
                        </div>
                        <span className="text-sm font-medium uppercase tracking-wider text-gray-500">{content.portfolio.header.rating}</span>
                    </div>
                    <h2 className="font-sans font-bold text-4xl md:text-5xl mb-4 text-[#101424]">
                        {content.portfolio.header.heading.line1}<br />
                        <span className="text-[#10B981]">{content.portfolio.header.heading.line2}</span>
                    </h2>
                </div>

                {/* Main Video/Testimonial Card */}
                <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden mb-16 aspect-video bg-gray-100 group cursor-pointer">
                    <Image
                        src="/images/figma/11778dff6b421559088e740182e154f891922192.png" // Using one of the large images from context
                        alt="Tuan Le - Immigration Attorney"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute bottom-8 left-8 text-white">
                        <h3 className="text-2xl font-bold">{content.portfolio.mainCaseStudy.name}</h3>
                        <p className="text-white/80">{content.portfolio.mainCaseStudy.role}</p>
                    </div>
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                <span className="text-[#10B981] text-3xl ml-1">▶</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Smaller Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Chad */}
                    {caseStudies.map((study, index) => (
                        <div key={index} className="bg-[#f9fafa] p-6 rounded-2xl flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0 bg-gray-300">
                                <Image src={study.image} alt={study.title} fill className="object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#101424]">{study.title}</h4>
                                <p className="text-sm text-gray-500 mb-2">{study.role}</p>
                                 <p className="text-sm text-gray-600 leading-snug">&quot;{study.description}&quot;</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
