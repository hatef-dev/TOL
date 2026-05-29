import React from 'react';
import { content } from '@/data/content';
import Image from 'next/image';

export const TestimonialSection = () => {
    return (
        <div className="content-stretch flex gap-[var(--responsive-margin-m-md,0px)] items-center justify-center px-[var(--m-0,0px)] py-[var(--responsive-margin-m-md,64px)] relative shrink-0 w-full">
            <div className="content-center flex flex-[1_0_0] flex-wrap gap-[64px] items-center justify-center max-w-[1512px] min-h-px min-w-px px-[var(--responsive-margin-m-lg,128px)] relative">
                <div className="content-stretch flex flex-[1_0_0] gap-[var(--responsive-padding-p-md,0px)] items-center max-w-[750px] min-h-px min-w-[240px] relative">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--m-8,32px)] items-start justify-center min-h-px min-w-px relative">
                        <div className="absolute aspect-[847/801] bottom-[-351.84px] left-[calc(50%+44.95px)] top-0 translate-x-[-50%]">
                            <svg width="847" height="801" viewBox="0 0 847 801" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H847V801H0V0Z" fill="url(#pattern)"/>
                                <defs>
                                    <linearGradient id="pattern" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{stopColor:'#f9fafa', stopOpacity:0.1}}/>
                                        <stop offset="100%" style={{stopColor:'#f9fafa', stopOpacity:0}}/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="h-[25px] relative shrink-0 w-[125px]">
                            <svg width="125" height="25" viewBox="0 0 125 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 0L15.4542 9.65925H25.5L17.3292 15.5817L20.2834 25.2407L12.5 19.3185L4.71663 25.2407L7.67083 15.5817L-0.5 9.65925H9.54583L12.5 0Z" fill="#FFD700"/>
                                <path d="M37.5 0L40.4542 9.65925H50.5L42.3292 15.5817L45.2834 25.2407L37.5 19.3185L29.7166 25.2407L32.6708 15.5817L24.5 9.65925H34.5458L37.5 0Z" fill="#FFD700"/>
                                <path d="M62.5 0L65.4542 9.65925H75.5L67.3292 15.5817L70.2834 25.2407L62.5 19.3185L54.7166 25.2407L57.6708 15.5817L49.5 9.65925H59.5458L62.5 0Z" fill="#FFD700"/>
                                <path d="M87.5 0L90.4542 9.65925H100.5L92.3292 15.5817L95.2834 25.2407L87.5 19.3185L79.7166 25.2407L82.6708 15.5817L74.5 9.65925H84.5458L87.5 0Z" fill="#FFD700"/>
                                <path d="M112.5 0L115.454 9.65925H125.5L117.329 15.5817L120.283 25.2407L112.5 19.3185L104.717 25.2407L107.671 15.5817L99.5 9.65925H109.546L112.5 0Z" fill="#FFD700"/>
                            </svg>
                        </div>
                        <p className="font-[family-name:var(--font-sans,'Inter_Tight:SemiBold',sans-serif)] leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-[color:var(--primary,rgba(0,0,0,0.95))] tracking-[var(--typography-content-headings-h4-letterspacing,0px)] w-[min-content] whitespace-pre-wrap">
                             <span className="font-['Inter_Tight:SemiBold',sans-serif] leading-[46px] text-[35px] text-[rgba(0,0,0,0.4)]">{`&quot;`}</span>
                              <span className="font-['Inter_Tight:SemiBold',sans-serif] leading-[46px] text-[35px] text-[rgba(0,0,0,0.4)]">{content.testimonials.main.quote}</span>
                        </p>
                        <div className="content-center flex flex-wrap gap-[var(--responsive-margin-m-md,32px_64px)] items-center relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col gap-[var(--m-1,4px)] items-start not-italic relative shrink-0">
                                <p className="font-[family-name:var(--font-sans,'Inter:Semi_Bold',sans-serif)] font-[var(--font-semibold,600)] leading-[var(--typography-content-body-lg-lineheight,32px)] relative shrink-0 text-[color:var(--primary,rgba(0,0,0,0.95))] text-[length:var(--typography-content-body-lg-fontsize,22px)] tracking-[var(--typography-content-body-lg-letterspacing,0px)]">
                                    {content.testimonials.main.author}
                                </p>
                                <p className="font-[family-name:var(--font-sans,'Inter:Regular',sans-serif)] font-[var(--font-normal,400)] leading-[var(--typography-content-body-md-lineheight,27px)] relative shrink-0 text-[color:var(--muted,rgba(0,0,0,0.6))] text-[length:var(--typography-content-body-md-fontsize,18px)] tracking-[var(--typography-content-body-md-letterspacing,0px)]">
                                    {content.testimonials.main.role}
                                </p>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0">
                                <div className="h-[33.7px] relative shrink-0 w-[150px]">
                                    <svg width="150" height="34" viewBox="0 0 150 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="150" height="34" fill="#f9fafa"/>
                                        <text x="75" y="22" textAnchor="middle" fill="#000" fontFamily="Inter" fontSize="18" fontWeight="600">ilmfinity</text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[507px] relative shrink-0 w-[433px]">
                    <Image
                        src={content.testimonials.main.image}
                        alt={content.testimonials.main.author}
                        width={433}
                        height={507}
                        className="object-cover rounded-[var(--rounded-2xl,16px)]"
                    />
                </div>
            </div>
        </div>
    );
};
