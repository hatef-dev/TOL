"use client";
import React, { useRef, useEffect } from 'react';
import { content } from '@/data/content';
import { gsap } from 'gsap';

import { Magnifer, LaptopMinimalistic, MapPoint, ArrowRight } from '@solar-icons/react/ssr';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    linkText: string;
    backgroundImage?: string;
}


const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, linkText, backgroundImage }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const shadowRef = useRef<HTMLDivElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const linkRef = useRef<HTMLParagraphElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        const shadow = shadowRef.current;
        const background = backgroundRef.current;
        const desc = descriptionRef.current;
        const link = linkRef.current;
        const arrow = arrowRef.current;

        if (!card) return;

        // Create hover timeline
        const hoverTimeline = gsap.timeline({ paused: true });

        // Border animation
        hoverTimeline.to(card, {
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.1)',
            duration: 0.3,
            ease: 'power2.out'
        }, 0);

        // Shadow position animation
        if (shadow) {
            hoverTimeline.to(shadow, {
                left: -8,
                top: 18,
                duration: 0.5,
                ease: 'power2.out'
            }, 0);
        }

        // Background image animation
        if (background) {
            hoverTimeline.to(background, {
                left: 'calc(2.88%-1px)',
                right: 'calc(-26.41%-1px)',
                top: 'calc(50%+83.5px)',
                y: '-50%',
                filter: 'blur(0px)',
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out'
            }, 0);
        }

        // Description animation
        if (desc) {
            hoverTimeline.to(desc, {
                filter: 'blur(1.5px)',
                opacity: 0.2,
                duration: 0.4,
                ease: 'power2.out'
            }, 0);
        }

        // Link color animation
        if (link) {
            hoverTimeline.to(link, {
                color: '#10b880',
                textDecoration: 'underline',
                duration: 0.3,
                ease: 'power2.out'
            }, 0);
        }

        // Arrow color animation
        if (arrow) {
            hoverTimeline.to(arrow, {
                color: 'rgba(55,155,117,1)',
                duration: 0.3,
                ease: 'power2.out'
            }, 0);
        }

        const handleMouseEnter = () => hoverTimeline.play();
        const handleMouseLeave = () => hoverTimeline.reverse();

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
            hoverTimeline.kill();
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="bg-[var(--level-1,#f9fafa)] content-stretch flex mt-10 flex-col gap-[var(--responsive-margin-m-sm,32px)] h-[500px] items-start min-w-[240px] overflow-clip px-[var(--responsive-padding-p-sm,32px)] py-[var(--m-8,32px)] relative rounded-[var(--rounded-2xl,16px)] w-[450.667px] border-transparent border-solid"
            style={{ borderWidth: 0 }}
        >
            {/* Shadow Element */}
            <div
                ref={shadowRef}
                className="absolute flex items-center justify-center h-[407.538px] left-[-7px] top-[19px] w-[407.527px]"
            >
                <div className="flex-none rotate-[46.04deg]">
                    <div className="h-[288.001px] relative w-[288.431px]">
                        <div className="absolute inset-[-80.56%_-80.44%]">
                            <svg width="288" height="288" viewBox="0 0 288 288" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="144" cy="144" rx="143.5" ry="143.5" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--m-8,32px)] items-start min-h-px min-w-px p-[var(--m-0,0px)] relative w-full">
                {/* Header */}
                <div className="content-stretch flex gap-[var(--m-4,16px)] items-center relative shrink-0 w-full">
                    <div className="overflow-clip relative shrink-0 size-[32px]">
                        <div className="absolute inset-[5.21%]">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                                {icon}
                            </div>
                        </div>
                    </div>
                    <p className="flex-[1_0_0] font-[family-name:var(--font-sans,'Inter_Tight:SemiBold',sans-serif)] leading-[var(--typography-content-headings-h5-lineheight,36px)] min-h-px min-w-px not-italic relative text-[color:var(--primary,rgba(0,0,0,0.95))] text-[length:var(--typography-content-headings-h5-fontsize,28px)] tracking-[var(--typography-content-headings-h5-letterspacing,0px)] whitespace-pre-wrap">
                        {title}
                    </p>
                    <div className="content-stretch flex gap-[var(--m-2,8px)] items-center p-[var(--p-0,0px)] relative rounded-[var(--rounded-full,240px)] shrink-0">
                        <p
                            ref={linkRef}
                            className="font-[family-name:var(--font-sans,'Inter:Regular',sans-serif)] font-[var(--font-normal,400)] leading-[var(--typography-content-body-sm-lineheight,20px)] not-italic relative shrink-0 text-[length:var(--typography-content-body-sm-fontsize,14px)] tracking-[var(--typography-content-body-sm-letterspacing,0px)] text-[color:var(--muted,rgba(0,0,0,0.6))]"
                        >
                            {linkText}
                        </p>
                        <div className="overflow-clip relative shrink-0 size-[18px]">
                            <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-1/4">
                                <div
                                    ref={arrowRef}
                                    className="absolute inset-[-8.33%_-6.25%]"
                                >
                                    <ArrowRight
                                        size={18}
                                        className="text-[rgba(0,0,0,1)]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--responsive-margin-m-md,0px)] items-start min-h-px min-w-px relative w-full">
                    <p
                        ref={descriptionRef}
                        className="font-[family-name:var(--font-sans,'Inter:Regular',sans-serif)] font-[var(--font-normal,400)] leading-[var(--typography-content-body-lg-lineheight,32px)] not-italic relative shrink-0 text-[color:var(--primary,rgba(0,0,0,0.95))] text-[length:var(--typography-content-body-lg-fontsize,22px)] tracking-[var(--typography-content-body-lg-letterspacing,0px)] w-full whitespace-pre-wrap"
                    >
                        {description}
                    </p>
                </div>
            </div>

            {/* Background Image */}
            {backgroundImage && (
                <div
                    ref={backgroundRef}
                    className="absolute blur-[2.5px] h-[475.666px] left-[13px] opacity-20 top-[100px] w-[567.029px]"
                >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                            className="absolute h-[156.1%] left-[-20.97%] max-w-none top-[-24.7%] w-[130.95%]"
                            alt=""
                            src={backgroundImage}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export { ServiceCard };
export type { ServiceCardProps };

export const ServicesSection = () => {
    const services = content.services.items.map(item => ({
        title: item.title,
        description: item.description,
        linkText: item.linkText,
        icon: item.title.includes("SEO") ? <Magnifer className="w-full h-full" /> :
            item.title.includes("Web Design") ? <LaptopMinimalistic className="w-full h-full" /> :
                <MapPoint className="w-full h-full" />,
        backgroundImage: item.backgroundImage
    }));

    return (
        <div className="bg-[var(--base,#050506)] content-stretch flex flex-col gap-[var(--m-4,0px)] items-center overflow-clip px-[var(--responsive-margin-m-sm,32px)] py-[var(--responsive-margin-m-md,64px)] relative shrink-0 w-full mt-36">
            <div className="bg-[var(--base,white)] content-stretch flex flex-col gap-[var(--responsive-margin-m-lg,128px)] items-center overflow-clip pb-[var(--responsive-margin-m-sm,32px)] pt-[var(--responsive-margin-m-lg,128px)] px-[var(--responsive-margin-m-sm,32px)] relative rounded-[var(--responsive-border-radius-r-sm,24px)] shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[var(--responsive-margin-m-sm,32px)] items-start max-w-[1512px] relative shrink-0 w-full">
                    <div className="content-stretch flex items-center pb-[var(--responsive-margin-m-sm,32px)] relative shrink-0 w-full">
                        <div className="flex-[1_0_0] font-[family-name:var(--font-sans,'Inter_Tight:Bold',sans-serif)] h-full leading-[0] max-w-[920px] min-h-px min-w-px not-italic relative text-[0px] text-[color:var(--faint,rgba(0,0,0,0.4))] tracking-[var(--typography-content-display-sm-letterspacing,-0.05px)] whitespace-pre-wrap">
                            <p className="font-['Inter_Tight:Bold',sans-serif] leading-[64px] mb-0 text-[54px] text-[rgba(0,0,0,0.95)]">{content.services.heading.line1}</p>
                            <p className="leading-[var(--typography-content-display-sm-lineheight,64px)]">{content.services.heading.line2}</p>
                        </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="content-start flex flex-wrap gap-[var(--m-4,16px)] items-start relative shrink-0 w-full">
                            {services.map((service, index) => (
                                <ServiceCard key={index} {...service} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
