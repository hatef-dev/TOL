import Image from "next/image";

import Link from "next/link";
import CtaSection1 from "./CTASection1";

export default function Footer1() {
  return (
    <div>
      <CtaSection1 />
      <footer className="   max-w-[1384px] justify-center items-center ">
        <div className=" flex-col justify-center mx-auto px-6 py-8 flex  md:flex-row items-center  gap-13">
          <div className="flex items-center text-center gap-2 text-sm text-gray-300">
            ⭐⭐⭐⭐⭐
            <span>4.9/5 RATING</span>
            <span className="opacity-60 hover:text-emerald-500 hover:underline text-white/60 text-xs">
              53+ Google Reviews{" "}
            </span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25"
                stroke="white"
                stroke-opacity="0.4"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="flex items-center text-center gap-7 text-sm">
            <Link
              href="#"
              className="flex items-center gap-2 hover:underline hover:text-emerald-500 text-gray-400"
            >
              {" "}
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.8423 3.97453C23.8423 1.86516 22.2907 0.168281 20.3735 0.168281C17.7767 0.0468748 15.1282 0 12.4217 0H11.5779C8.87792 0 6.2248 0.0468749 3.62792 0.16875C1.71542 0.16875 0.163859 1.875 0.163859 3.98437C0.0466718 5.65266 -0.00301573 7.32141 -0.000203231 8.99016C-0.00489073 10.6589 0.0482343 12.3292 0.159172 14.0011C0.159172 16.1105 1.71073 17.8214 3.62323 17.8214C6.35136 17.948 9.1498 18.0042 11.9951 17.9995C14.8451 18.0089 17.6357 17.9495 20.367 17.8214C22.2842 17.8214 23.8357 16.1105 23.8357 14.0011C23.9482 12.3277 23.9998 10.6589 23.9951 8.98547C24.0057 7.31672 23.9548 5.64641 23.8423 3.97453ZM9.70292 13.5886V4.37766L16.4998 8.98078L9.70292 13.5886Z"
                  fill="white"
                  fill-opacity="0.95"
                />
                <path
                  d="M9.20264 14.5312L9.98389 14.0029L16.7808 9.39453L17.3911 8.98047L16.7798 8.56641L9.98291 3.96387L9.20264 3.43555V14.5312ZM0.658691 13.9844L0.657715 13.9678C0.547547 12.3074 0.494857 10.6483 0.499512 8.99121V8.98926C0.496718 7.33102 0.546356 5.67439 0.662598 4.01953L0.663574 4.00195V3.98438C0.663574 2.105 2.03545 0.669234 3.62744 0.668945H3.63916L3.65088 0.667969C6.23792 0.546555 8.88334 0.500003 11.5776 0.5H12.4214C15.1223 0.5 17.7629 0.547018 20.3501 0.667969H20.3735C21.9724 0.667969 23.3423 2.09718 23.3423 3.97461V3.99121L23.3433 4.00781C23.4549 5.6675 23.5062 7.32598 23.4956 8.98242H23.4946V8.9873C23.4993 10.6494 23.4481 12.3065 23.3364 13.9678L23.3354 13.9844V14.001C23.3354 15.8809 21.9632 17.3213 20.3667 17.3213H20.355L20.3433 17.3223C17.6208 17.45 14.8385 17.5093 11.9966 17.5H11.9946C9.15637 17.5047 6.36524 17.4484 3.646 17.3223L3.63525 17.3213H3.62354C2.03209 17.3213 0.658691 15.8814 0.658691 14.001V13.9844Z"
                  stroke="white"
                  stroke-opacity="0.4"
                />
              </svg>
              YouTube{" "}
            </Link>
            <Link
              href="#"
              className="text-gray-400 gap-2 flex hover:text-emerald-500 hover:underline items-center"
            >
              {" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8205 1.5H3.29437C2.33672 1.5 1.5 2.18906 1.5 3.13547V20.7005C1.5 21.652 2.33672 22.5 3.29437 22.5H20.8153C21.7781 22.5 22.5 21.6464 22.5 20.7005V3.13547C22.5056 2.18906 21.7781 1.5 20.8205 1.5ZM8.00953 19.0045H5.00109V9.65063H8.00953V19.0045ZM6.60938 8.22844H6.58781C5.625 8.22844 5.00156 7.51172 5.00156 6.61453C5.00156 5.70094 5.64141 5.00109 6.62578 5.00109C7.61016 5.00109 8.2125 5.69578 8.23406 6.61453C8.23359 7.51172 7.61016 8.22844 6.60938 8.22844ZM19.0045 19.0045H15.9961V13.89C15.9961 12.6647 15.5583 11.8275 14.4698 11.8275C13.6383 11.8275 13.1461 12.39 12.9272 12.938C12.8452 13.1348 12.8231 13.403 12.8231 13.6767V19.0045H9.81469V9.65063H12.8231V10.9523C13.2609 10.3289 13.9448 9.43172 15.5363 9.43172C17.5111 9.43172 19.005 10.7334 19.005 13.5398L19.0045 19.0045Z"
                  fill="white"
                  fill-opacity="0.95"
                />
                <path
                  d="M3.29395 2H20.8203C21.5202 2 22.0039 2.4828 22 3.13281V20.7002C22 21.417 21.4573 21.9999 20.8154 22H3.29395C2.61553 21.9997 2 21.3784 2 20.7002V3.13574L2.00684 3.02148C2.07034 2.45855 2.59903 2.00019 3.29395 2ZM4.50098 19.5049H8.50977V9.15039H4.50098V19.5049ZM15.5361 8.93164C14.6373 8.93166 13.9669 9.1879 13.457 9.55078C13.4108 9.58372 13.3665 9.61809 13.3232 9.65234V9.15039H9.31445V19.5049H13.3232V13.6768C13.3232 13.4106 13.3476 13.2285 13.3887 13.1299L13.3916 13.123C13.5642 12.6912 13.9124 12.3272 14.4697 12.3271C14.8648 12.3271 15.084 12.4678 15.2275 12.6797C15.3926 12.9235 15.4961 13.3228 15.4961 13.8896V19.5049H19.5049V13.54C19.5049 12.0513 19.108 10.8896 18.3799 10.0957C17.6477 9.29759 16.6362 8.93164 15.5361 8.93164ZM6.62598 4.50098C6.01059 4.50098 5.47158 4.7222 5.08691 5.11523C4.70418 5.5063 4.50202 6.03927 4.50195 6.61426C4.50195 7.76215 5.32417 8.72852 6.58789 8.72852H6.60938C7.23453 8.72852 7.77382 8.50168 8.15625 8.10547C8.53567 7.71212 8.73398 7.18001 8.73438 6.61523V6.60254C8.72106 6.03755 8.5273 5.50869 8.15234 5.11719C7.77346 4.72159 7.24197 4.50102 6.62598 4.50098Z"
                  stroke="white"
                  stroke-opacity="0.4"
                />
              </svg>
              LinkedIn
            </Link>
          </div>
        </div>

        <div className=" mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-white/80">
          <div>
            <div className="py-1 flex">
              <div className=" h-8  ">
                <Image
                  src="/Logo.svg"
                  alt="Logo"
                  className="w-full h-full object-contain"
                  width={120}
                  height={100}
                />
              </div>
            </div>
            <p className="text-[15px] flex items-center gap-2  font-sans leading-snug hover:underline lg:py-2 hover:text-emerald-500 ">
              <span> 333 City Blvd West Suite, #1722 Orange, CA 92868 </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25"
                  stroke="white"
                  stroke-opacity="0.4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
            </p>
            <p className="text-sm">Mon – Fri, 8:00 AM – 5:00 PM PT</p>
            <p className="mt-3 hover:text-emerald-500 hover:underline">
              (714) 868-0259
            </p>
          </div>

          <div>
            <ul className="space-y-2">
              <li className="hover:underline hover:underline-offset-3 hover:text-emerald-500">
                Work
              </li>
              <li className="hover:underline hover:underline-offset-3 hover:text-emerald-500">
                Industries
              </li>
              <li className="hover:underline hover:underline-offset-3 hover:text-emerald-500">
                Testimonials
              </li>
              <li className="hover:underline hover:underline-offset-3 hover:text-emerald-500">
                Case Studies
              </li>
              <li className="hover:underline hover:underline-offset-3 hover:text-emerald-500">
                Blog
              </li>
              <li className="hover:underline hover:underline-offset-3 hover:text-emerald-500">
                Support
              </li>
              <li className="hover:underline hover:underline-offset-3 hover:text-emerald-500">
                MAS
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li className="hover:underline hover:underline-offset-3 hover:text-emerald-500">
                SEO
              </li>
              <li className="hover:underline hover:underline-offset-3 hover:text-emerald-500">
                AI Search Optimization
              </li>
              <li className="hover:underline hover:underline-offset-3 hover:text-emerald-500">
                GBP Optimization
              </li>
              <li className="hover:underline-offset-3 hover:text-emerald-500">
                Website Speed optimization
              </li>
              <li className="hover:underline-offset-3 hover:text-emerald-500">
                Web Design
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t  mx-auto border-gray-800 pt-5  justify-between gap-5  text-white/60 text-sm flex flex-row ">
          <p className="pb-5 text-xs">&copy; 2004-2026 TopOrganicLeads</p>
          <div className="flex px-3 gap-4 text-xs">
            <Link href="#" className="text-white/65  hover:text-emerald-500">
              Privacy policy
            </Link>
            <Link href="#" className="text-white/60 hover:text-emerald-500">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
