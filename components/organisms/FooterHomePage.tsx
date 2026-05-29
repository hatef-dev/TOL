import CtaSection from "@/components/organisms/CTASection";
import Image from "next/image";

import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <CtaSection />
      <footer className="flex justify-center ">
        <div className="w-full max-w-[1384px]">
          <div className="w-full  lg:flex-row flex-col justify-center  px-6 py-8 flex  md:flex-row items-center  gap-13">
            <div className="flex items-center text-center gap-x-1 text-sm text-gray-300">
              {[...Array(5)].map((_, index) => (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.48376 0.690722C6.78311 -0.230589 8.08652 -0.230588 8.38587 0.690722L9.45544 3.98252C9.58931 4.39454 9.97327 4.6735 10.4065 4.6735H13.8677C14.8364 4.6735 15.2392 5.91312 14.4555 6.48252L11.6553 8.51696C11.3048 8.7716 11.1582 9.22297 11.292 9.63499L12.3616 12.9268C12.661 13.8481 11.6065 14.6142 10.8228 14.0448L8.0226 12.0104C7.67211 11.7557 7.19752 11.7557 6.84703 12.0104L4.04686 14.0448C3.26315 14.6142 2.20867 13.8481 2.50802 12.9268L3.57759 9.63499C3.71146 9.22297 3.5648 8.7716 3.21432 8.51696L0.414147 6.48252C-0.369566 5.91312 0.0332093 4.6735 1.00193 4.6735H4.46313C4.89636 4.6735 5.28031 4.39454 5.41419 3.98252L6.48376 0.690722Z"
                    fill="#FFC40C"
                  />
                </svg>
              ))}
              <span className="text-body-base font-semibold text-inverse-subtle">
                4.9/5 RATING
              </span>
              <span className=" cursor-pointer hover:text-brand-primary  text-white/60 text-body-sm hover:underline">
                52+ Google Reviews{" "}
              </span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.75 9.75L9.75 0.75M9.75 0.75H3M9.75 0.75V7.5"
                  stroke="white"
                  stroke-opacity="0.4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div className="flex items-center text-center hover:underline-offset-2 gap-7 text-sm">
              <Link
                href="#"
                className="flex items-center hover:text-emerald-500 hover:underline gap-2 text-gray-400"
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
                    d="M23.8425 3.97453C23.8425 1.86516 22.2909 0.168281 20.3738 0.168281C17.7769 0.0468748 15.1284 0 12.4219 0H11.5781C8.87814 0 6.22501 0.0468749 3.62814 0.16875C1.71564 0.16875 0.164073 1.875 0.164073 3.98437C0.0468854 5.65266 -0.00280211 7.32141 1.03924e-05 8.99016C-0.00467711 10.6589 0.0484479 12.3292 0.159385 14.0011C0.159385 16.1105 1.71095 17.8214 3.62345 17.8214C6.35157 17.948 9.15001 18.0042 11.9953 17.9995C14.8453 18.0089 17.6359 17.9495 20.3672 17.8214C22.2844 17.8214 23.8359 16.1105 23.8359 14.0011C23.9484 12.3277 24 10.6589 23.9953 8.98547C24.0059 7.31672 23.955 5.64641 23.8425 3.97453ZM9.70314 13.5886V4.37766L16.5 8.98078L9.70314 13.5886Z"
                    fill="white"
                    fill-opacity="0.95"
                  />
                  <path
                    d="M9.20285 14.5312L9.9841 14.0029L16.781 9.39453L17.3913 8.98047L16.78 8.56641L9.98312 3.96387L9.20285 3.43555V14.5312ZM0.658905 13.9844L0.657928 13.9678C0.547761 12.3074 0.495071 10.6483 0.499725 8.99121V8.98926C0.496932 7.33102 0.54657 5.67439 0.662811 4.01953L0.663788 4.00195V3.98438C0.663788 2.105 2.03566 0.669234 3.62766 0.668945H3.63937L3.65109 0.667969C6.23813 0.546555 8.88355 0.500003 11.5779 0.5H12.4216C15.1225 0.5 17.7632 0.547018 20.3503 0.667969H20.3737C21.9726 0.667969 23.3425 2.09718 23.3425 3.97461V3.99121L23.3435 4.00781C23.4552 5.6675 23.5064 7.32598 23.4958 8.98242H23.4948V8.9873C23.4995 10.6494 23.4483 12.3065 23.3366 13.9678L23.3357 13.9844V14.001C23.3357 15.8809 21.9635 17.3213 20.3669 17.3213H20.3552L20.3435 17.3223C17.621 17.45 14.8387 17.5093 11.9968 17.5H11.9948C9.15659 17.5047 6.36545 17.4484 3.64621 17.3223L3.63547 17.3213H3.62375C2.0323 17.3213 0.658905 15.8814 0.658905 14.001V13.9844Z"
                    stroke="white"
                    stroke-opacity="0.4"
                  />
                </svg>
                YouTube{" "}
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-emerald-500 hover:underline gap-2 flex items-center"
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

          <div className="  px-5 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4 text-sm justify-between text-white/80">
            <div className="lg:col-span-2 col-span-1">
              <div className=" flex">
                <div className=" w-[300px] h-[46.62px]  ">
                  <Image
                    src="/Logo.svg"
                    alt="Logo"
                    className="w-full h-full object-contain"
                    width={120}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-8 mt-8">
                <div className="flex flex-col gap-y-4 w-[380px]">
                  <p className="flex items-center gap-2 text-[15px] justify-between   hover:underline hover:text-brand-primary">
                    <span className="text-content-inverse-subtle">
                      333 City Blvd West Suite, #1722 <br /> Orange, CA 92868
                    </span>
                    <svg
                      className="shrink-0 text-border-inverse-strong"
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.75 9.75L9.75 0.75M9.75 0.75H3M9.75 0.75V7.5"
                        stroke="white"
                        strokeOpacity="0.4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </p>

                  <p className="text-body-sm text-content-inverse-muted">
                    Mon – Fri, 8:00 AM – 5:00 PM PT
                  </p>
                </div>
                <p className=" hover:text-brand-primary hover:underline text-content-inverse-subtle ">
                  (714) 868-0259
                </p>
              </div>
            </div>

            <div>
              <ul className="flex flex-col gap-y-2-5 font-sans text-body-md font-regular">
                <li className="">
                  <a
                    href=""
                    className="hover:underline hover:underline-offset-3 hover:text-brand-primary"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="">
                  <a
                    href=""
                    className="hover:underline hover:underline-offset-3 hover:text-brand-primary"
                  >
                    Industries
                  </a>
                </li>
                <li className="">
                  <a
                    href=""
                    className="hover:underline hover:underline-offset-3 hover:text-brand-primary"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="">
                  <a
                    href=""
                    className="hover:underline hover:underline-offset-3 hover:text-brand-primary"
                  >
                    Case Studies
                  </a>
                </li>
                <li className="">
                  <a
                    href=""
                    className="hover:underline hover:underline-offset-3 hover:text-brand-primary"
                  >
                    Blog
                  </a>
                </li>
                <li className="">
                  <a
                    href=""
                    className="hover:underline hover:underline-offset-3 hover:text-brand-primary"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="flex flex-col gap-y-2-5 font-sans text-body-md">
                <li className="">
                  <a
                    href=""
                    className="hover:underline hover:underline-offset-3 hover:text-brand-primary"
                  >
                    SEO
                  </a>
                </li>
                <li className="">
                  <a
                    href=""
                    className="hover:underline hover:underline-offset-3 hover:text-brand-primary"
                  >
                    AI Search Optimization
                  </a>
                </li>
                <li className="">
                  <a
                    href=""
                    className="hover:underline hover:underline-offset-3 hover:text-brand-primary"
                  >
                    GBP Optimization
                  </a>
                </li>
                <li className="">
                  <a
                    href=""
                    className="hover:underline hover:underline-offset-3 hover:text-brand-primary"
                  >
                    Website Speed optimization
                  </a>
                </li>
                <li className="">
                  <a
                    href=""
                    className="hover:underline hover:underline-offset-3 hover:text-brand-primary"
                  >
                    Web Design
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t   border-gray-800 pt-5  justify-between gap-5  text-white/60 text-sm flex flex-row ">
            <p className="pb-5 text-xs">&copy; 2004-2026 TopOrganicLeads</p>
            <div className="flex px-3 gap-4 text-xs">
              <Link href="#" className="text-white/65 hover:text-emerald-500  ">
                Privacy policy
              </Link>
              <Link href="#" className="text-white/65 hover:text-emerald-500">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
