import React from 'react';
import { content } from '@/data/content';

export const WhoWeAre = () => {
    const industries = content.brandStrip.industries;

    return (
        <div className="bg-[var(--base,#050506)] content-stretch flex flex-col items-center py-[128px] relative rounded-bl-[var(--rounded-3xl,24px)] rounded-br-[var(--rounded-3xl,24px)] shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[var(--m-32,128px)] items-center justify-center px-[var(--responsive-margin-m-md,64px)] relative shrink-0 w-[1512px]">
                <div className="content-stretch flex flex-col gap-[16px] items-start justify-center not-italic pb-[var(--m-0,0px)] relative shrink-0 w-full whitespace-pre-wrap">
                    <p className="font-[family-name:var(--font-sans,'Inter:Regular',sans-serif)] font-[var(--font-normal,400)] leading-[var(--typography-ui-code-lg-lineheight,27px)] relative shrink-0 text-[color:var(--default,#10b880)] text-[length:var(--typography-ui-code-lg-fontsize,18px)] tracking-[var(--tracking-normal,0px)] w-full">
                        EXCLUSIVE PARTNERSHIP
                    </p>
                    <p className="font-[family-name:var(--font-sans,'Inter_Tight:SemiBold',sans-serif)] leading-[0] relative shrink-0 text-[0px] text-[color:var(--inverse-primary,rgba(255,255,255,0.95))] tracking-[var(--typography-content-headings-h3-letterspacing,0px)] w-full">
                        <span className="font-['Inter_Tight:SemiBold',sans-serif] leading-[58px] text-[44px] text-[rgba(255,255,255,0.4)]">{content.brandStrip.heading.line1}</span>
                        <span className="leading-[var(--typography-content-headings-h3-lineheight,36px)] text-[28px]"> {content.brandStrip.heading.line2}</span>
                        <span className="leading-[var(--typography-content-headings-h3-lineheight,36px)] text-[28px] text-[rgba(255,255,255,0.4)]"> {content.brandStrip.subHeading}</span>
                    </p>
                </div>
                <div className="content-stretch flex flex-col gap-[var(--m-32,128px)] items-start relative shrink-0 w-full">
                    <div className="content-start flex flex-wrap gap-[var(--m-4,16px)] items-start overflow-clip px-[var(--m-0,0px)] relative shrink-0 w-full">
                        {industries.map((industry, index) => (
                            <button key={index} className="bg-[var(--default,rgba(255,255,255,0.15))] content-stretch flex flex-[1_0_0] gap-[var(--m-4,16px)] items-center max-w-[335px] min-h-px min-w-[330px] p-[var(--m-8,32px)] relative rounded-[var(--rounded-xl,12px)]">
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--m-1,4px)] items-start justify-center min-h-px min-w-px relative">
                                    <p className="font-[family-name:var(--font-sans,'Inter:Medium',sans-serif)] font-[var(--font-medium,500)] leading-[var(--typography-content-body-lg-lineheight,27px)] not-italic relative shrink-0 text-[color:var(--inverse-primary,rgba(255,255,255,0.95))] text-[length:var(--typography-content-body-lg-fontsize,18px)] tracking-[var(--typography-content-body-lg-letterspacing,0px)] w-full whitespace-pre-wrap">
                                        {industry}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="content-stretch flex flex-col gap-[var(--m-8,32px)] items-center justify-center pb-[var(--m-0,0px)] pt-[var(--p-0,0px)] relative shrink-0 w-full">
                        <p className="font-[family-name:var(--font-sans,'Inter:Regular',sans-serif)] font-[var(--font-normal,400)] leading-[var(--typography-content-body-lg-lineheight,27px)] not-italic relative shrink-0 text-[color:var(--inverse-subtle,rgba(255,255,255,0.8))] text-[length:var(--typography-content-body-lg-fontsize,18px)] tracking-[var(--typography-content-body-lg-letterspacing,0px)]">
                             Didn&apos;t find your business category?
                        </p>
                        <button className="bg-[var(--default,rgba(255,255,255,0.15))] border-[var(--border,1px)] border-[var(--weak,rgba(255,255,255,0.1))] border-solid content-stretch flex gap-[var(--m-2,8px)] items-center justify-center px-[var(--p-6,24px)] py-[var(--p-3-5,14px)] relative rounded-[var(--rounded-lg,8px)] shrink-0">
                            <p className="font-[family-name:var(--font-sans,'Inter:Semi_Bold',sans-serif)] font-[var(--font-semibold,600)] leading-[var(--typography-ui-labels-normal-case-lg-lineheight,27px)] not-italic relative shrink-0 text-[color:var(--inverse-primary,rgba(255,255,255,0.95))] text-[length:var(--typography-ui-labels-normal-case-lg-fontsize,18px)] tracking-[var(--typography-ui-labels-normal-case-lg-letterspacing,0px)]">
                                Find Out if You Qualify
                            </p>
                            <div className="overflow-clip relative shrink-0 size-[24px]">
                                <div className="absolute inset-[20.83%_37.5%]">
                                    <div className="absolute inset-[-5.36%_-12.5%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
