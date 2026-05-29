'use client';

import { useEffect, useState } from 'react';
import { LucideX } from 'lucide-react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormModal({ isOpen, onClose }: FormModalProps) {
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/45 px-4 py-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Content form"
    >
    
      <div
        className="mx-auto w-full max-w-2xl rounded-2xl bg-[#f8f8f8] p-6 shadow-2xl md:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-end">
          <button
            className="rounded-md p-1 text-neutral-500 transition hover:bg-black/5 hover:text-black"
            aria-label="close modal"
            type="button"
            onClick={onClose}
          >
            <LucideX size={18} />
          </button>
        </div>

        <div className="mb-2">
          <p className="mb-2 text-right text-sm font-sans leading-5 text-black/40">1.Personal Information</p>
          <div className="h-1 w-full rounded bg-gray-200">
            <div className="h-full w-[34%] rounded bg-gray-950" />
          </div>
        </div>

        <form className="space-y-4 ">
            
          <div>
            <label htmlFor="fullName" className="mb-1 block text-sm leading-[20px] font-sans text-black/60">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="Full Name"
              id="fullName"
              className="h-12 w-full rounded-xl border border-black/10 bg-white px-3 text-black outline-none focus:border-black/60"
            />
          </div>
          <div>
            <label htmlFor="Company Name" className="mb-1 block text-sm leading-[20px] font-sm text-black/60">
              Company Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="CompanyName"
              name="Company Name"
              required
              className="h-12 w-full rounded-xl border border-black/10 bg-white px-3 text-black outline-0 focus:border-black/60"
            />

            <p className="mt-2 text-[16px] leading-[20px] text-red-500">*Required</p>
          </div>
          <div className=''>
            <label htmlFor="phone" className="mb-1 block text-[16px] leading-[20px] font-sans text-black/60">
              Phone Number <span className="text-red-600">*</span>
            </label>
         <PhoneInput
            defaultCountry="us"
            value={phone}
            onChange={(value) => setPhone(value)}
            inputProps={{ id: 'phone', name: 'phone', required: true }}
            className="w-full focus:border-black/60"
            inputClassName="!w-full !h-12 !rounded-r-xl !border-black/10 "
            countrySelectorStyleProps={{
                buttonClassName: "!h-12 !border-black/10 !rounded-l-xl",
                dropdownStyleProps: { className: "z-[300]" },
            }}
            />

          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-[16px] leading-[20px] font-sans text-black/60">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="h-12 w-full rounded-xl border border-black/10 bg-white px-3 text-black outline-none focus:border-black/60"
            />
          </div>

          <div className="flex gap-5 pt-2">
            <button
              type="submit"
              className="inline-flex rounded-lg bg-black/95 px-6 py-3.5 font-sans text-[18px] font-semibold leading-[27px] hover:bg-black/85"
            >
              Next{' '}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="white"
                  strokeOpacity="0.8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p className="flex-wrap py-3 font-sans text-[18px] leading-[27px] text-black/40">1/2</p>
          </div>
        </form>
      </div>
    </div>
  );
}

