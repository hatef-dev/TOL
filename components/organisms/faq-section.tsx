"use client";

import React, { useState } from 'react';
import { content } from '@/data/content';

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = content.faq.items;

    return (
        <div className="bg-[var(--base,#050506)] content-stretch flex gap-[var(--responsive-padding-p-md,0px)] items-start justify-center px-[var(--m-0,0px)] py-[var(--responsive-margin-m-lg,128px)] relative shrink-0 w-full">
            <div className="content-start flex flex-[1_0_0] flex-wrap gap-[var(--responsive-margin-m-md,32px_64px)] h-[608px] items-start justify-center min-h-px min-w-px px-[var(--responsive-margin-m-md,64px)] py-[var(--m-0,0px)] relative">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--m-8,32px)] items-start max-w-[600px] min-h-px min-w-[240px] relative">
                    <p className="font-[family-name:var(--font-sans,'Inter_Tight:Bold',sans-serif)] leading-[var(--typography-content-display-sm-lineheight,64px)] max-w-[564px] min-w-full not-italic relative shrink-0 text-[color:var(--primary,rgba(255,255,255,0.95))] text-[length:var(--typography-content-display-sm-fontsize,54px)] tracking-[var(--typography-content-display-sm-letterspacing,-0.05px)] w-[min-content] whitespace-pre-wrap">
                        {content.faq.heading}
                    </p>
                    <p className="font-[family-name:var(--font-sans,'Inter:Regular',sans-serif)] font-[var(--font-normal,400)] leading-[var(--typography-content-body-md-lineheight,27px)] max-w-[500px] min-w-full not-italic relative shrink-0 text-[color:var(--muted,rgba(255,255,255,0.6))] text-[length:var(--typography-content-body-md-fontsize,18px)] tracking-[var(--typography-content-body-md-letterspacing,0px)] w-[min-content] whitespace-pre-wrap">
                        {content.faq.subHeading}
                    </p>
                    <div className="border-[var(--border,1px)] border-[var(--weak,rgba(255,255,255,0.1))] border-solid content-stretch flex gap-[var(--m-2,8px)] items-center justify-center px-[var(--p-4,16px)] py-[var(--p-2-5,10px)] relative rounded-[var(--rounded-lg,8px)] shrink-0">
                        <p className="font-[family-name:var(--font-sans,'Inter:Semi_Bold',sans-serif)] font-[var(--font-semibold,600)] leading-[var(--typography-ui-labels-normal-case-base-lineheight,20px)] not-italic relative shrink-0 text-[color:var(--subtle,rgba(255,255,255,0.8))] text-[length:var(--typography-ui-labels-normal-case-base-fontsize,14px)] tracking-[var(--typography-ui-labels-normal-case-base-letterspacing,0px)]">
                            Read all questions
                        </p>
                        <div className="overflow-clip relative shrink-0 size-[18px]">
                            <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-1/4">
                                <div className="absolute inset-[-8.33%_-6.25%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.25 12.75L12.75 5.25M12.75 5.25H5.25M12.75 5.25V12.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-[240px] relative">
                    {faqs.map((faq, index) => (
                        <button key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)} className="content-stretch flex flex-col gap-[var(--responsive-margin-m-sm,32px)] items-start pt-[var(--responsive-margin-m-sm,32px)] relative shrink-0 w-full">
                            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                                    <p className="flex-[1_0_0] font-[family-name:var(--font-sans,'Inter:Regular',sans-serif)] font-[var(--font-normal,400)] leading-[var(--typography-content-body-lg-lineheight,32px)] min-h-px min-w-px not-italic relative text-[color:var(--primary,rgba(255,255,255,0.95))] text-[length:var(--typography-content-body-lg-fontsize,22px)] text-left tracking-[var(--typography-content-body-lg-letterspacing,0px)] whitespace-pre-wrap">
                                        {faq.question}
                                    </p>
                                </div>
                                <div className="overflow-clip relative shrink-0 size-[24px]">
                                    <div className="absolute inset-[37.5%_20.83%]">
                                        <div className="absolute inset-[-12.5%_-5.36%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {openIndex === index && (
                                <div className="h-0 relative shrink-0 w-full">
                                    <div className="absolute inset-[-1px_0_0_0]">
                                        <div className="bg-[var(--level-1,#f9fafa)] p-[var(--responsive-margin-m-sm,32px)] rounded-[var(--rounded-lg,8px)]">
                                            <p className="text-[color:var(--primary,rgba(0,0,0,0.95))]">{faq.answer || "Answer content would go here."}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
