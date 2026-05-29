'use client'
import React from "react";
import HeroSection from "../components/organisms/heroSection";
import ServiceCardd from "../components/organisms/ServiceCardd"

import PartnershipSection from "../components/organisms/Exclusive";
import RealRevenous from '../components/organisms/RealRevenue'
import AboutSection from "../components/organisms/AboutSection";
import TeamTopOrganic from "../components/organisms/AboutContainer"
import FAQSection from "../components/organisms/FAQ";

import Footer from '@/components/organisms/FooterHomePage'


 function HomePage (){
    return (
        <main className="min-h-screen bg-[#050506]">
            <HeroSection 
            
            header={
                <h1 className="text-display-lg leading-display-lg md:text-display-2xl md:leading-display-2xl lg:text-display-3xl lg:leading-display-3xl  font-bold font-display">
                Get Customers, <br />
                <span className="text-brand-primary font-display text-display-lg leading-display-lg md:text-display-2xl md:leading-display-2xl lg:text-display-3xl lg:leading-display-3xl font-bold">
                  Then Pay
                </span>
              </h1>
            }
            description="No Upfront Fees. No Monthly Retainers."
            buttonText="Check Availability"
            IsButton={true}
            IsBrand={true}
            />
            <ServiceCardd />
            <PartnershipSection/> 
             <RealRevenous/>
            <AboutSection/>
            <TeamTopOrganic/>
            <FAQSection/>
            <Footer />
        </main>
    )
};

export default HomePage;
