'use client';

import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react'

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: 'Do you really not charge anything until I sign up clients?',
    answer: 'Yes, we offer various payment plans tailored to different business needs and budgets.',
  },
  {
    question: 'How do you know which clients you have brought in? ',
    answer: 'Our pricing is transparent and based on the scope of services, whether hourly, project-based, or monthly retainer.',
  },
  {
    question: 'How much do you charge once clients come in?',
    answer: 'We use a combination of on-page optimization, technical SEO, content marketing, and link building.',
  },
  {
    question: 'How do you optimize websites for AI search engines?',
    answer: 'We focus on technical SEO foundation, keyword research, and content strategy to build authority from scratch.',
  },
  {
    question: 'How do you approach SEO for local businesses?',
    answer: 'Regular updates, accurate information, collecting reviews, and posting photos are key.',
  },
  {
    question: 'How can I effectively respond to customer reviews on GMB?',
    answer: 'Respond promptly, professionally, and personalize your responses to show appreciation and address concerns.',
  },
];

const FAQSection = () => {
 
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        
        
        <div className="md:w-1/3">
          <h2 className="text-[54px] leading-[64px] tracking-[-0.5px] text-white/95 font-semibold font-sans mb-4">FAQ</h2>
          <p className="text-white/60 mb-8 text-md leading-[27px">
            Get the clarity you need. This is your resource for understanding our process, services, and how we deliver results that grow your business.
          </p>
          <button className="flex items-center gap-2 text-[16px] leading-[20px] bg-white/15 px-5  font-semibold text-white  py-3 rounded-lg hover:bg-white/30 hover:border-white/40 border border-white/20 transition duration-300">
            Read all Questions
            <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 9H15M15 9L10.5 4.5M15 9L10.5 13.5" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
          </button>
        </div>

        
        <div className="md:w-2/3 space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-white/10">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full text-white/95 py-5 text-left text-[22px] leading-[32px] font-sans  hover:text-gray-300 transition"
              >
                {item.question}
                <ChevronDownIcon
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-400">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;