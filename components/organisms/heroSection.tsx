"use client";
import React, { useState } from "react";
import { LucideArrowUpRight, LucideX, LucideChevronDown } from "lucide-react";
import { HeroBackground } from "@/components/molecules/hero-background";
import { Phone } from "lucide-react";
import Image from "next/image";
import FormModal from "@/components/atoms/FormModal";

import { motion, AnimatePresence } from "framer-motion";

interface Industry {
  name: string;
}

const industries: Industry[] = [
  { name: "Law Firms" },
  { name: "Commercial Cleaning" },
  { name: "Medical Clinics" },
  { name: "Restaurant Design" },
  { name: "Flooring Companies" },
  { name: "Fire Suppression" },
  { name: "Roofing Companies" },
  { name: "Auto Glass" },
];

const HeroSection = (props: {
  description: string;
  buttonText?: string;
  smallDescription?: string;
  paddingTop?: number;
  paddingBottom?: number;
  header?: React.ReactNode;
  IsButton?: boolean;
  IsBrand?: boolean;
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="relative w-full  text-white overflow-hidden font-sans">
      <HeroBackground />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[9]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.8'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
          opacity: 0.2,
          mixBlendMode: "screen",
        }}
      />

      <nav className="relative z-[100] flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-2 font-bold text-md tracking-tighter">
          <div className="flex items-center gap-2">
            <div className=" h-8 flex items-center justify-center">
              <svg
                width="241"
                height="38"
                viewBox="0 0 241 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.59701 8.15864H15.4746L6.87761 36.1311H0L8.59701 8.15864Z"
                  fill="#00CC99"
                />
                <path
                  d="M19.9881 4.66207H26.8657L17.194 36.1311H10.3164L19.9881 4.66207Z"
                  fill="#00CC99"
                />
                <path
                  d="M31.3791 1.16551H38.2567L27.5104 36.1311H20.6328L31.3791 1.16551Z"
                  fill="white"
                />
                <path
                  d="M228.839 28.0027C227.697 28.0027 226.734 27.8195 225.951 27.4531C225.167 27.0867 224.588 26.5849 224.213 25.9477C223.854 25.3104 223.715 24.5936 223.796 23.797H227.077C227.06 24.1316 227.134 24.4342 227.297 24.7051C227.46 24.9759 227.705 25.191 228.032 25.3503C228.358 25.4936 228.766 25.5653 229.256 25.5653C229.696 25.5653 230.072 25.5016 230.382 25.3742C230.692 25.2467 230.928 25.0715 231.092 24.8484C231.271 24.6254 231.369 24.3785 231.385 24.1077C231.402 23.8209 231.32 23.5979 231.141 23.4386C230.977 23.2633 230.733 23.12 230.406 23.0085C230.08 22.8969 229.696 22.8014 229.256 22.7217C228.684 22.6102 228.138 22.4668 227.615 22.2916C227.093 22.1004 226.636 21.8774 226.244 21.6225C225.853 21.3676 225.543 21.057 225.314 20.6905C225.102 20.3082 225.004 19.8542 225.02 19.3285C225.069 18.5638 225.331 17.8868 225.804 17.2973C226.293 16.7079 226.946 16.2459 227.762 15.9114C228.595 15.5609 229.549 15.3857 230.626 15.3857C232.112 15.3857 233.262 15.7202 234.078 16.3893C234.911 17.0584 235.31 17.9664 235.278 19.1134H232.12C232.087 18.7152 231.899 18.4045 231.557 18.1815C231.23 17.9584 230.79 17.8469 230.235 17.8469C229.664 17.8469 229.198 17.9664 228.839 18.2054C228.48 18.4284 228.293 18.7072 228.276 19.0417C228.276 19.2648 228.358 19.4639 228.521 19.6391C228.701 19.7984 228.962 19.9418 229.305 20.0693C229.647 20.1808 230.072 20.2843 230.577 20.3799C231.23 20.5233 231.818 20.6826 232.34 20.8578C232.862 21.0331 233.311 21.2481 233.686 21.503C234.062 21.742 234.339 22.0447 234.519 22.4111C234.698 22.7775 234.772 23.2315 234.739 23.7731C234.707 24.6334 234.429 25.3821 233.907 26.0193C233.385 26.6566 232.683 27.1504 231.802 27.5009C230.937 27.8354 229.949 28.0027 228.839 28.0027Z"
                  fill="white"
                />
                <path
                  d="M214.9 28.003C213.889 28.003 213.015 27.764 212.281 27.2861C211.563 26.7922 211.016 26.1311 210.641 25.3027C210.282 24.4584 210.127 23.5105 210.176 22.4591C210.225 21.4395 210.429 20.5076 210.788 19.6633C211.163 18.803 211.661 18.0543 212.281 17.4171C212.918 16.7798 213.644 16.286 214.46 15.9355C215.276 15.5691 216.157 15.3859 217.104 15.3859C218.067 15.3859 218.85 15.5611 219.454 15.9116C220.058 16.2462 220.506 16.6842 220.8 17.2259L222 10.5111H225.305L222.22 27.7162H219.282L219.209 26.0674C218.915 26.4019 218.564 26.7205 218.156 27.0232C217.748 27.3259 217.275 27.5649 216.736 27.7401C216.198 27.9153 215.586 28.003 214.9 28.003ZM216.271 25.1832C216.973 25.1832 217.61 25.008 218.181 24.6575C218.752 24.2911 219.209 23.8052 219.552 23.1999C219.911 22.5945 220.107 21.9175 220.139 21.1687C220.172 20.5634 220.082 20.0456 219.87 19.6155C219.658 19.1694 219.34 18.8269 218.915 18.588C218.507 18.3331 218.009 18.2056 217.422 18.2056C216.72 18.2056 216.084 18.3809 215.512 18.7313C214.958 19.0659 214.509 19.5279 214.166 20.1173C213.823 20.7067 213.636 21.3758 213.603 22.1246C213.57 22.714 213.652 23.2397 213.848 23.7017C214.06 24.1637 214.37 24.5301 214.778 24.8009C215.186 25.0558 215.684 25.1832 216.271 25.1832Z"
                  fill="white"
                />
                <path
                  d="M200.878 28.0027C199.932 28.0027 199.164 27.8593 198.577 27.5726C198.006 27.2699 197.581 26.8716 197.304 26.3778C197.043 25.868 196.929 25.3104 196.961 24.7051C196.994 23.8767 197.255 23.1598 197.745 22.5544C198.234 21.9491 198.92 21.4791 199.801 21.1446C200.699 20.81 201.743 20.6428 202.934 20.6428H205.97C206.084 20.0533 206.092 19.5674 205.994 19.1851C205.913 18.7868 205.717 18.4921 205.407 18.301C205.097 18.1098 204.656 18.0142 204.085 18.0142C203.481 18.0142 202.934 18.1496 202.445 18.4204C201.972 18.6753 201.629 19.0736 201.417 19.6152H198.21C198.455 18.755 198.879 18.0142 199.483 17.3929C200.087 16.7557 200.821 16.2618 201.686 15.9114C202.567 15.5609 203.53 15.3857 204.575 15.3857C205.733 15.3857 206.696 15.5848 207.463 15.9831C208.247 16.3654 208.802 16.915 209.128 17.6319C209.471 18.3487 209.544 19.2249 209.348 20.2604L208.002 27.716H205.113L205.162 25.8999C204.917 26.2025 204.648 26.4893 204.354 26.7601C204.077 27.015 203.759 27.238 203.4 27.4292C203.041 27.6044 202.649 27.7398 202.225 27.8354C201.817 27.9469 201.368 28.0027 200.878 28.0027ZM202.102 25.5175C202.51 25.5175 202.902 25.4458 203.277 25.3025C203.653 25.1432 203.987 24.9361 204.281 24.6812C204.575 24.4104 204.819 24.1077 205.015 23.7731C205.227 23.4227 205.382 23.0562 205.48 22.6739V22.6261H202.959C202.469 22.6261 202.045 22.6978 201.686 22.8412C201.327 22.9686 201.049 23.1598 200.854 23.4147C200.658 23.6536 200.552 23.9404 200.535 24.2749C200.503 24.6732 200.633 24.9839 200.927 25.2069C201.221 25.414 201.612 25.5175 202.102 25.5175Z"
                  fill="white"
                />
                <path
                  d="M189.604 28.0027C188.478 28.0027 187.507 27.7797 186.691 27.3336C185.892 26.8876 185.28 26.2583 184.855 25.4458C184.447 24.6334 184.276 23.6855 184.341 22.6022C184.374 21.5986 184.578 20.6667 184.953 19.8064C185.345 18.9302 185.875 18.1655 186.544 17.5124C187.214 16.8433 187.997 16.3256 188.895 15.9592C189.792 15.5768 190.788 15.3857 191.881 15.3857C192.991 15.3857 193.937 15.6087 194.721 16.0547C195.504 16.5008 196.092 17.1062 196.483 17.8708C196.875 18.6355 197.046 19.5196 196.998 20.5233C196.998 20.8578 196.957 21.2003 196.875 21.5508C196.81 21.8853 196.736 22.196 196.655 22.4827H186.667L187.01 20.5233H193.717C193.782 19.9816 193.725 19.5276 193.546 19.1612C193.366 18.7789 193.089 18.4921 192.713 18.301C192.354 18.1098 191.93 18.0142 191.44 18.0142C190.869 18.0142 190.323 18.1417 189.8 18.3965C189.294 18.6355 188.862 19.0099 188.503 19.5196C188.144 20.0294 187.891 20.6746 187.744 21.4552L187.622 22.1482C187.507 22.7695 187.524 23.3271 187.67 23.8209C187.834 24.2988 188.119 24.6812 188.527 24.9679C188.935 25.2387 189.441 25.3742 190.045 25.3742C190.665 25.3742 191.196 25.2467 191.636 24.9918C192.077 24.7369 192.436 24.4103 192.713 24.0121H196.092C195.716 24.7608 195.202 25.4379 194.549 26.0432C193.913 26.6486 193.17 27.1265 192.322 27.477C191.489 27.8275 190.584 28.0027 189.604 28.0027Z"
                  fill="white"
                />
                <path
                  d="M172.343 27.7164L175.354 10.9893H178.659L176.113 25.2074H183.629L183.163 27.7164H172.343Z"
                  fill="white"
                />
                <path
                  d="M162.626 28.0027C161.5 28.0027 160.521 27.7717 159.689 27.3097C158.873 26.8477 158.252 26.2105 157.828 25.398C157.42 24.5856 157.24 23.6457 157.289 22.5783C157.338 21.5588 157.559 20.6189 157.95 19.7586C158.358 18.8824 158.905 18.1178 159.591 17.4646C160.276 16.8114 161.068 16.3017 161.965 15.9353C162.863 15.5689 163.834 15.3857 164.878 15.3857C166.461 15.3857 167.726 15.7998 168.673 16.6282C169.619 17.4566 170.093 18.6036 170.093 20.0693H166.617C166.6 19.4639 166.38 18.9939 165.956 18.6594C165.548 18.3249 165.025 18.1576 164.389 18.1576C163.72 18.1576 163.108 18.3408 162.553 18.7072C162.014 19.0577 161.582 19.5435 161.255 20.1648C160.929 20.7861 160.741 21.495 160.692 22.2916C160.676 22.7536 160.717 23.1678 160.815 23.5342C160.913 23.9006 161.068 24.2112 161.28 24.4661C161.492 24.721 161.745 24.9201 162.039 25.0635C162.349 25.191 162.7 25.2547 163.091 25.2547C163.532 25.2547 163.94 25.183 164.315 25.0396C164.707 24.8803 165.05 24.6573 165.344 24.3705C165.654 24.0838 165.882 23.7413 166.029 23.343H169.53C169.171 24.267 168.648 25.0794 167.963 25.7804C167.294 26.4813 166.502 27.0309 165.588 27.4292C164.674 27.8115 163.687 28.0027 162.626 28.0027Z"
                  fill="white"
                />
                <path
                  d="M151.723 27.716L153.902 15.6724H157.207L155.028 27.716H151.723ZM156.179 14.0953C155.575 14.0953 155.085 13.92 154.71 13.5696C154.335 13.2032 154.147 12.7651 154.147 12.2553C154.147 11.7136 154.335 11.2676 154.71 10.9171C155.085 10.5666 155.575 10.3914 156.179 10.3914C156.783 10.3914 157.272 10.5666 157.648 10.9171C158.039 11.2676 158.235 11.7136 158.235 12.2553C158.235 12.7651 158.039 13.2032 157.648 13.5696C157.256 13.92 156.766 14.0953 156.179 14.0953Z"
                  fill="white"
                />
                <path
                  d="M138.23 27.716L140.384 15.6724H143.298L143.249 17.5841C143.738 16.915 144.358 16.3813 145.109 15.9831C145.876 15.5848 146.733 15.3857 147.68 15.3857C148.74 15.3857 149.581 15.6087 150.201 16.0547C150.821 16.5008 151.237 17.1221 151.45 17.9186C151.678 18.7152 151.694 19.663 151.499 20.7622L150.226 27.716H146.945L148.145 21.0729C148.308 20.133 148.235 19.4081 147.924 18.8984C147.614 18.3726 147.019 18.1098 146.137 18.1098C145.583 18.1098 145.068 18.2372 144.595 18.4921C144.138 18.7311 143.738 19.0816 143.396 19.5435C143.069 20.0055 142.841 20.5631 142.71 21.2163L141.535 27.716H138.23Z"
                  fill="white"
                />
                <path
                  d="M129.569 28.0027C128.623 28.0027 127.855 27.8593 127.268 27.5726C126.697 27.2699 126.272 26.8716 125.995 26.3778C125.734 25.868 125.62 25.3104 125.652 24.7051C125.685 23.8767 125.946 23.1598 126.436 22.5544C126.925 21.9491 127.611 21.4791 128.492 21.1446C129.39 20.81 130.434 20.6428 131.625 20.6428H134.661C134.775 20.0533 134.783 19.5674 134.686 19.1851C134.604 18.7868 134.408 18.4921 134.098 18.301C133.788 18.1098 133.347 18.0142 132.776 18.0142C132.172 18.0142 131.625 18.1496 131.136 18.4204C130.663 18.6753 130.32 19.0736 130.108 19.6152H126.901C127.146 18.755 127.57 18.0142 128.174 17.3929C128.778 16.7557 129.512 16.2618 130.377 15.9114C131.258 15.5609 132.221 15.3857 133.266 15.3857C134.424 15.3857 135.387 15.5848 136.154 15.9831C136.938 16.3654 137.493 16.915 137.819 17.6319C138.162 18.3487 138.235 19.2249 138.039 20.2604L136.693 27.716H133.804L133.853 25.8999C133.608 26.2025 133.339 26.4893 133.045 26.7601C132.768 27.015 132.45 27.238 132.091 27.4292C131.732 27.6044 131.34 27.7398 130.916 27.8354C130.508 27.9469 130.059 28.0027 129.569 28.0027ZM130.793 25.5175C131.201 25.5175 131.593 25.4458 131.968 25.3025C132.344 25.1432 132.678 24.9361 132.972 24.6812C133.266 24.4104 133.51 24.1077 133.706 23.7731C133.918 23.4227 134.074 23.0562 134.171 22.6739V22.6261H131.65C131.16 22.6261 130.736 22.6978 130.377 22.8412C130.018 22.9686 129.74 23.1598 129.545 23.4147C129.349 23.6536 129.243 23.9404 129.226 24.2749C129.194 24.6732 129.324 24.9839 129.618 25.2069C129.912 25.414 130.304 25.5175 130.793 25.5175Z"
                  fill="white"
                />
                <path
                  d="M117.246 33.2598C116.153 33.2598 115.206 33.1324 114.406 32.8775C113.607 32.6226 113.003 32.2403 112.595 31.7305C112.17 31.2207 111.975 30.5835 112.007 29.8188C112.04 29.1656 112.244 28.5682 112.619 28.0266C112.978 27.485 113.492 26.9991 114.161 26.5689C114.831 26.1388 115.622 25.7645 116.536 25.4458L117.515 27.0469C116.667 27.3018 116.055 27.6204 115.679 28.0027C115.304 28.401 115.108 28.8231 115.092 29.2692C115.075 29.6037 115.165 29.8905 115.361 30.1294C115.573 30.3684 115.875 30.5436 116.267 30.6552C116.675 30.7667 117.132 30.8224 117.638 30.8224C118.454 30.8224 119.139 30.6711 119.694 30.3684C120.249 30.0657 120.535 29.6117 120.551 29.0063C120.583 28.624 120.461 28.3054 120.184 28.0505C119.906 27.7956 119.343 27.6363 118.494 27.5726C117.744 27.5248 117.058 27.4451 116.438 27.3336C115.834 27.2062 115.296 27.0628 114.822 26.9035C114.365 26.7283 113.974 26.5371 113.647 26.33C113.337 26.1229 113.084 25.9078 112.888 25.6848L112.986 25.1352L116.046 22.4588L118.25 23.1996L114.676 26.1388L115.9 24.49C116.063 24.6015 116.234 24.7051 116.414 24.8007C116.609 24.8962 116.83 24.9839 117.075 25.0635C117.336 25.1272 117.654 25.191 118.029 25.2547C118.405 25.3184 118.87 25.3742 119.425 25.4219C120.453 25.5016 121.277 25.6848 121.897 25.9715C122.534 26.2424 122.991 26.6088 123.268 27.0708C123.546 27.5328 123.66 28.0903 123.611 28.7435C123.578 29.6037 123.293 30.3764 122.754 31.0614C122.232 31.7464 121.497 32.2801 120.551 32.6624C119.604 33.0607 118.503 33.2598 117.246 33.2598ZM118.837 24.1555C117.907 24.1555 117.115 23.9962 116.463 23.6775C115.826 23.343 115.345 22.889 115.018 22.3155C114.708 21.742 114.569 21.0968 114.602 20.3799C114.651 19.44 114.928 18.5957 115.434 17.8469C115.957 17.0982 116.65 16.5008 117.515 16.0547C118.397 15.6087 119.368 15.3857 120.428 15.3857C121.375 15.3857 122.167 15.5609 122.803 15.9114C123.456 16.2459 123.937 16.6999 124.247 17.2734C124.557 17.831 124.688 18.4682 124.639 19.1851C124.606 20.1091 124.329 20.9534 123.807 21.7181C123.301 22.4668 122.615 23.0642 121.75 23.5103C120.885 23.9404 119.914 24.1555 118.837 24.1555ZM119.278 21.7181C119.996 21.7181 120.592 21.5189 121.065 21.1207C121.538 20.7065 121.791 20.1648 121.824 19.4958C121.856 18.9541 121.701 18.5479 121.359 18.2771C121.032 18.0062 120.575 17.8708 119.988 17.8708C119.27 17.8708 118.666 18.0779 118.176 18.4921C117.703 18.8904 117.45 19.4241 117.417 20.0932C117.385 20.6189 117.54 21.0251 117.882 21.3118C118.242 21.5827 118.707 21.7181 119.278 21.7181ZM122.02 17.9425L121.873 15.6724H126.965L126.597 17.608L122.02 17.9425Z"
                  fill="white"
                />
                <path
                  d="M104.953 27.716L107.107 15.6724H110.069L109.996 17.8469C110.388 17.3372 110.837 16.907 111.342 16.5566C111.865 16.1901 112.436 15.9034 113.056 15.6963C113.676 15.4892 114.329 15.3857 115.015 15.3857L114.427 18.8028H113.276C112.787 18.8028 112.322 18.8585 111.881 18.97C111.457 19.0656 111.065 19.2409 110.706 19.4958C110.363 19.7347 110.069 20.0613 109.825 20.4755C109.58 20.8897 109.4 21.4074 109.286 22.0287L108.258 27.716H104.953Z"
                  fill="white"
                />
                <path
                  d="M95.382 28.0032C93.8969 28.0032 92.5994 27.6766 91.4897 27.0235C90.3799 26.3703 89.5312 25.4782 88.9437 24.3471C88.3562 23.2001 88.1032 21.8858 88.1848 20.4043C88.2338 19.0502 88.5275 17.7837 89.0661 16.6048C89.621 15.426 90.3554 14.3984 91.2693 13.5223C92.1833 12.6301 93.2441 11.9372 94.4518 11.4433C95.6595 10.9495 96.9488 10.7025 98.3197 10.7025C99.8048 10.7025 101.102 11.0291 102.212 11.6823C103.322 12.3354 104.162 13.2355 104.734 14.3825C105.321 15.5136 105.582 16.8119 105.517 18.2776C105.452 19.6476 105.142 20.922 104.587 22.1009C104.048 23.2798 103.322 24.3153 102.408 25.2074C101.494 26.0836 100.433 26.7686 99.2255 27.2624C98.0341 27.7563 96.753 28.0032 95.382 28.0032ZM95.8227 25.1118C96.6713 25.1118 97.4629 24.9445 98.1973 24.61C98.948 24.2754 99.609 23.8134 100.18 23.224C100.751 22.6187 101.2 21.9177 101.527 21.1212C101.869 20.3087 102.065 19.4246 102.114 18.4687C102.163 17.481 102.033 16.6287 101.722 15.9119C101.412 15.179 100.931 14.6135 100.278 14.2152C99.6416 13.817 98.8419 13.6178 97.8791 13.6178C97.0304 13.6178 96.2307 13.7851 95.48 14.1197C94.7456 14.4383 94.0927 14.9003 93.5215 15.5056C92.9503 16.0951 92.4934 16.788 92.1506 17.5846C91.8079 18.3811 91.6202 19.2573 91.5876 20.2131C91.5223 21.2008 91.6529 22.0611 91.9793 22.7939C92.3057 23.5267 92.7953 24.1002 93.4481 24.5144C94.1009 24.9127 94.8924 25.1118 95.8227 25.1118Z"
                  fill="white"
                />
                <path
                  d="M69.6557 32.9731L72.7891 15.6724H75.7268L75.7758 17.3451C76.1022 16.9628 76.4694 16.6282 76.8774 16.3415C77.2854 16.0388 77.7505 15.8078 78.2728 15.6485C78.795 15.4733 79.3662 15.3857 79.9864 15.3857C81.0309 15.3857 81.9203 15.6326 82.6548 16.1264C83.4055 16.6043 83.9685 17.2575 84.3439 18.0859C84.7356 18.9143 84.907 19.8542 84.858 20.9056C84.809 21.8774 84.5969 22.8014 84.2215 23.6775C83.8461 24.5378 83.3402 25.2945 82.7037 25.9477C82.0672 26.5849 81.3328 27.0867 80.5005 27.4531C79.6845 27.8195 78.8032 28.0027 77.8566 28.0027C77.2691 28.0027 76.7305 27.9231 76.2409 27.7637C75.7676 27.6044 75.3596 27.3894 75.0169 27.1186C74.6741 26.8318 74.3967 26.5052 74.1845 26.1388L72.9605 32.9731H69.6557ZM77.6118 25.183C78.3136 25.183 78.9419 25.0157 79.4968 24.6812C80.068 24.3466 80.525 23.8846 80.8677 23.2952C81.2104 22.7058 81.3981 22.0367 81.4307 21.2879C81.4797 20.6985 81.3899 20.1728 81.1614 19.7108C80.9493 19.2488 80.631 18.8824 80.2067 18.6116C79.7987 18.3408 79.2928 18.2054 78.6889 18.2054C77.9872 18.2054 77.3507 18.3806 76.7795 18.7311C76.2246 19.0656 75.7758 19.5356 75.433 20.1409C75.0903 20.7304 74.8945 21.4074 74.8455 22.1721C74.8129 22.7615 74.9026 23.2872 75.1148 23.7492C75.3433 24.1953 75.6697 24.5458 76.094 24.8007C76.5183 25.0555 77.0243 25.183 77.6118 25.183Z"
                  fill="white"
                />
                <path
                  d="M63.2354 28.0027C62.1256 28.0027 61.1627 27.7637 60.3467 27.2858C59.5307 26.792 58.9105 26.1229 58.4862 25.2786C58.0619 24.4342 57.8823 23.4704 57.9476 22.3872C57.9803 21.3995 58.1924 20.4835 58.5841 19.6391C58.9758 18.7789 59.498 18.0381 60.1509 17.4168C60.82 16.7796 61.587 16.2857 62.452 15.9353C63.317 15.5689 64.2554 15.3857 65.2673 15.3857C66.377 15.3857 67.3399 15.6246 68.156 16.1025C68.972 16.5804 69.5921 17.2416 70.0165 18.0859C70.4571 18.9143 70.653 19.8781 70.604 20.9773C70.555 21.9809 70.3347 22.9129 69.943 23.7731C69.5513 24.6174 69.0209 25.3582 68.3518 25.9954C67.6827 26.6327 66.9156 27.1265 66.0506 27.477C65.1857 27.8275 64.2472 28.0027 63.2354 28.0027ZM63.676 25.2069C64.3288 25.2069 64.9082 25.0396 65.4141 24.7051C65.9364 24.3546 66.3526 23.8687 66.6626 23.2474C66.9891 22.6261 67.1686 21.9092 67.2012 21.0968C67.2502 20.4755 67.1767 19.9498 66.9809 19.5196C66.785 19.0736 66.4994 18.739 66.1241 18.516C65.765 18.293 65.3407 18.1815 64.8511 18.1815C64.2146 18.1815 63.6352 18.3567 63.113 18.7072C62.6071 19.0577 62.1909 19.5435 61.8645 20.1648C61.5544 20.7702 61.3749 21.4791 61.3259 22.2916C61.2933 22.9129 61.3749 23.4465 61.5707 23.8926C61.7666 24.3227 62.044 24.6493 62.4031 24.8723C62.7784 25.0954 63.2028 25.2069 63.676 25.2069Z"
                  fill="white"
                />
                <path
                  d="M50.1779 27.7164L52.7484 13.5461H47.7299L48.195 10.9893H61.5124L61.0472 13.5461H56.0287L53.4828 27.7164H50.1779Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex ml-auto items-center gap-8 text-[15px] text-gray-400">
          <li className="hover:text-brand-primary cursor-pointer group transition-colors text-content-inverse-primary flex items-center gap-1.5">
            Services{" "}
            <LucideChevronDown
              className="group-hover:-rotate-180 transition-transform duration-200"
              size={14}
            />
          </li>

          {/* Industries Dropdown */}
          <li
            className="relative group cursor-pointer py-2"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-1 group hover:text-brand-primary transition-colors text-inverse-primary text-content-inverse-primary">
              Industries{" "}
              <LucideChevronDown
                className="group-hover:-rotate-180 transition-transform duration-200"
                size={14}
              />
            </div>

            <AnimatePresence>
              {activeDropdown === "industries" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl shadow-2xl mt-2 grid grid-cols-2 gap-4"
                >
                  {industries.map((item) => (
                    <div
                      key={item.name}
                      className="text-gray-400 hover:text-white transition-colors py-1"
                    >
                      {item.name}
                    </div>
                  ))}
                  <div className="col-span-2 mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                    <p className="text-xs text-gray-500">
                      Didn not find your business category?
                    </p>
                    <button className="bg-white/5 px-4 py-2 rounded-lg text-xs flex items-center gap-2 hover:bg-white/10">
                      Find Out if You Qualify <LucideArrowUpRight size={12} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li className="flex items-center gap-1 group hover:text-brand-primary cursor-pointer transition-colors text-content-inverse-primary">
            Resources{" "}
            <LucideChevronDown
              className="group-hover:-rotate-180 transition-transform duration-200"
              size={14}
            />
          </li>
          <li className="hover:text-brand-primary cursor-pointer transition-colors text-content-inverse-primary">
            Testimonials
          </li>
          <li className="hover:text-brand-primary cursor-pointer transition-colors text-content-inverse-primary">
            FAQs
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Burger Menu Button */}
          <button
            className="relative lg:hidden z-[110] p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <LucideX size={32} />
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M20 8L4 8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20 16L4 16"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-4 lg:ml-8 xl:ml-10">
          <div className="relative">
            <button className="flex items-center gap-2 bg-white/15 border border-white/10  px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-white/25 transition-all ease-in-out active:scale-95">
              <Phone size={17} />
              <span className="font-sans font-semibold text-[16px] leading-[20px]">
                Talk to Us
              </span>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#050505] pt-28 px-8 flex flex-col gap-6 lg:hidden"
          >
            {[
              "Case Studies",
              "Industries",
              "Resources",
              "Testimonials",
              "FAQ",
            ].map((item) => (
              <div
                key={item}
                className="text-2xl font-bold border-b border-white/5 pb-4 flex justify-between items-center"
              >
                {item} <LucideChevronDown size={20} className="text-gray-500" />
              </div>
            ))}
            <button className="mt-8 w-full bg-emerald-500 text-black  py-4 rounded-xl font-bold  active:scale-[0.98] transition-transform">
              Speak to an Expert
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <main
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{
          paddingTop: `${props.paddingTop || 128}px`,
          paddingBottom: `${props.paddingBottom || 64}px`,
        }}
      >
        <div className="flex flex-col justify-center items-center gap-16 pt-8">
          <div className="flex flex-col items-center justify-center pb-8 gap-16">
            <div className="px-10 flex flex-col items-center justify-center gap-y-8 ">
              <p className="text-brand-primary  text-code-lg ">
                {props.smallDescription}
              </p>
              {/* <h1 className="text-display-lg leading-display-lg md:text-display-2xl md:leading-display-2xl lg:text-display-3xl lg:leading-display-3xl  font-bold font-display">
                {props.title}, <br />
                <span className="text-brand-primary font-display text-display-lg leading-display-lg md:text-display-2xl md:leading-display-2xl lg:text-display-3xl lg:leading-display-3xl font-bold">
                  {props.subtitle}
                </span>
              </h1> */}
              {props.header}
              <p className=" text-body-lg font-regular text-content-inverse-subtle w-full lg:w-[54%] md:w-[60%] ">
                {props.description}
              </p>
            </div>
            {props.IsButton && (
              <button
                disabled={!props.IsButton}
                className="group relative flex items-center gap-3 bg-bg-inverse-strong  text-label-base text-content-primary  font-semibold  px-8 py-4 rounded-lg  text-ls hover:bg-white/80 transition-all "
                onClick={() => setIsContactModalOpen(true)}
                type="button"
              >
                {props.buttonText}
                <svg
                  className="text-border-very-strong"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12H20M20 12L14 6M20 12L14 18"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            )}
            {/* <button
              disabled={!props.IsButton}
              className="group relative flex items-center gap-3 bg-bg-inverse-strong  text-label-base text-content-primary  font-semibold  px-8 py-4 rounded-lg  text-ls hover:bg-white/80 transition-all "
              onClick={() => setIsContactModalOpen(true)}
              type="button"
            >
              {props.buttonText}
              <svg
                className="text-border-very-strong"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="black"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button> */}
          </div>

          <div className="  flex flex-col md:flex-row  items-center gap-4 animate-fade-in">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i: number) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-[#050505] bg-neutral-800 overflow-hidden shadow-xl"
                >
                  <Image
                    src={`https://i.pravatar.cc/100?u=${i}`}
                    alt="Client"
                    className="w-full h-full object-cover"
                    width={40}
                    height={40}
                  />
                </div>
              ))}
            </div>
            <div className="flex  gap-x-4">
              <div className="flex gap-2 ">
                <Image
                  src="/images/Google.png"
                  alt="google"
                  width={32}
                  height={33}
                />
              </div>
              <div className="flex flex-col gap-1 text-xs font-medium md:text-sm">
                <div className="flex text-emerald-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.09503 0.345482C6.24471 -0.115173 6.89641 -0.115172 7.04609 0.345484L8.25441 4.06433C8.32135 4.27034 8.51333 4.40982 8.72994 4.40982H12.6402C13.1245 4.40982 13.3259 5.02963 12.9341 5.31433L9.77062 7.61271C9.59538 7.74003 9.52205 7.96571 9.58899 8.17172L10.7973 11.8906C10.947 12.3512 10.4197 12.7343 10.0279 12.4496L6.86445 10.1512C6.68921 10.0239 6.45191 10.0239 6.27667 10.1512L3.11322 12.4496C2.72137 12.7343 2.19413 12.3512 2.3438 11.8906L3.55213 8.17172C3.61907 7.96571 3.54574 7.74003 3.37049 7.61271L0.207052 5.31433C-0.184805 5.02963 0.0165844 4.40982 0.500946 4.40982H4.41117C4.62779 4.40982 4.81977 4.27034 4.8867 4.06433L6.09503 0.345482Z"
                          fill="#00A47B"
                        />
                      </svg>
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-[16px] leading-[20px] font-bold text-white/95">
                    4.9/5 RATING
                  </span>
                  <a
                    href="#"
                    className="inline-flex items-center text-[16px] ease-in-out duration-150 gap-1 group text-sm leading-[20px] text-white/60 no-underline transition-all "
                  >
                    <span className="group-hover:text-brand-primary duration-150">
                      52+ Verified Reviews
                    </span>
                    <svg
                      className="group-hover:text-white duration-150"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25"
                        stroke="currentColor"
                        strokeOpacity="0.7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {props.IsBrand && (
            <div className="relative z-20 w-full   px-4 md:px-6 ">
              <div className="mx-auto w-full max-w-screen-xl ">
                <div className="grid grid-cols-2 place-items-center gap-x-6 gap-y-4 sm:gap-x-8 md:grid-cols-4 md:gap-6 lg:flex lg:flex-wrap lg:justify-center lg:items-center lg:gap-x-[40px]">
                  <div className="flex h-7 items-center justify-center lg:h-auto">
                    <Image
                      src="/assets/imifinityCompany.png"
                      alt="imifinity"
                      width={60}
                      height={60}
                      className="h-5 w-auto object-contain  lg:h-4"
                    />
                  </div>

                  <div className="flex h-7 items-center justify-center lg:h-auto">
                    <Image
                      src="/assets/tuanle.svg"
                      alt="tuanle"
                      width={60}
                      height={60}
                      className=" w-auto object-contain h-5 lg:h-4"
                    />
                  </div>

                  <div className="flex h-8 items-center justify-center gap-1 lg:h-auto">
                    <Image
                      src="/assets/Vector.svg"
                      alt="vector"
                      width={30}
                      height={30}
                      className="h-3 w-3 opacity-13 sm:h-4 sm:w-4"
                    />
                    <Image
                      src="/assets/Eco.svg"
                      alt="eco"
                      width={110}
                      height={100}
                      className="h-5 w-auto object-contain  lg:h-4 text-gray-600"
                    />
                  </div>

                  <p className="font-sans text-[22.27px] italic font-bold leading-[22.27px] uppercase">
                    <span className="text-white">APS</span>
                    <span className="text-[#AAA]">-Hoods</span>
                  </p>
                </div>
              </div>
            </div>
          )}
          {/* <div className="relative z-20 w-full   px-4 md:px-6 ">
            <div className="mx-auto w-full max-w-screen-xl ">
              <div className="grid grid-cols-2 place-items-center gap-x-6 gap-y-4 sm:gap-x-8 md:grid-cols-4 md:gap-6 lg:flex lg:flex-wrap lg:justify-center lg:items-center lg:gap-x-[40px]">
                <div className="flex h-7 items-center justify-center lg:h-auto">
                  <Image
                    src="/assets/imifinityCompany.png"
                    alt="imifinity"
                    width={60}
                    height={60}
                    className="h-5 w-auto object-contain  lg:h-4"
                  />
                </div>

                <div className="flex h-7 items-center justify-center lg:h-auto">
                  <Image
                    src="/assets/tuanle.svg"
                    alt="tuanle"
                    width={60}
                    height={60}
                    className=" w-auto object-contain h-5 lg:h-4"
                  />
                </div>

                <div className="flex h-8 items-center justify-center gap-1 lg:h-auto">
                  <Image
                    src="/assets/Vector.svg"
                    alt="vector"
                    width={30}
                    height={30}
                    className="h-3 w-3 opacity-13 sm:h-4 sm:w-4"
                  />
                  <Image
                    src="/assets/Eco.svg"
                    alt="eco"
                    width={110}
                    height={100}
                    className="h-5 w-auto object-contain  lg:h-4 text-gray-600"
                  />
                </div>

                <p className="font-sans text-[22.27px] italic font-bold leading-[22.27px] uppercase">
                  <span className="text-white">APS</span>
                  <span className="text-[#AAA]">-Hoods</span>
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </main>

      <FormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default HeroSection;
