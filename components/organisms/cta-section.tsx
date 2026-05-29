import React from 'react';
import { content } from '@/data/content';
import { Button } from '../atoms/button';

export const CTASection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-[#030806] to-[#0a4d3c] text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                        {content.cta.heading.line1}
                        <br />
                        <span className="text-[#10B981]">{content.cta.heading.line2}</span>
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                        {content.cta.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="primary"
                            size="lg"
                            className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg"
                        >
                            {content.cta.buttons.primary}
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-lg"
                        >
                            {content.cta.buttons.secondary}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
