"use client";

import { useEffect, useRef, useState } from "react";

const menuItems = [
  { id: "section1", title: "Mobile SEO Optimization: The Secrets of a Mobile-Friendly Site" },
  { id: "section2", title: "Common Problems of Websites on Mobile Devices" },
  { id: "section3", title: "SEO for  Mobile Phones: Essential Strategies and Techniques" },
];

export default function VerticalNav() {
  const [activeId, setActiveId] = useState(() => {
    if (typeof window === "undefined") return menuItems[0].id;

    const hashId = window.location.hash.replace("#", "");
    return menuItems.some((item) => item.id === hashId) ? hashId : menuItems[0].id;
  });
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0, opacity: 1 });

  const navRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const hoverLeaveTimerRef = useRef<number | null>(null);

  const visualId = hoveredId ?? activeId;

  const clearHoverLeaveTimer = () => {
    if (hoverLeaveTimerRef.current !== null) {
      window.clearTimeout(hoverLeaveTimerRef.current);
      hoverLeaveTimerRef.current = null;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (current) setActiveId(current.target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0.25, 0.5, 0.75] },
    );

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      clearHoverLeaveTimer();
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const navEl = navRef.current;
    const currentEl = itemRefs.current[visualId];

    if (!navEl || !currentEl) return;

    const navRect = navEl.getBoundingClientRect();
    const currentRect = currentEl.getBoundingClientRect();

    setIndicatorStyle({
      top: currentRect.top - navRect.top,
      height: currentRect.height,
      opacity: 20,
    });
  }, [visualId]);

  useEffect(() => {
    const handleResize = () => {
      const navEl = navRef.current;
      const currentEl = itemRefs.current[hoveredId ?? activeId];

      if (!navEl || !currentEl) return;

      const navRect = navEl.getBoundingClientRect();
      const currentRect = currentEl.getBoundingClientRect();

      setIndicatorStyle({
        top: currentRect.top - navRect.top,
        height: currentRect.height,
        opacity: 1,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeId, hoveredId]);

  return (
    <nav
      ref={navRef}
      onMouseEnter={clearHoverLeaveTimer}
      onMouseLeave={() => {
        clearHoverLeaveTimer();
        hoverLeaveTimerRef.current = window.setTimeout(() => {
          setHoveredId(null);
          hoverLeaveTimerRef.current = null;
        }, 80);
      }}
      className="relative  flex  flex-col gap-6 border-l-2 border-gray-100 py-4 "
    >
      <div
        className="absolute left-[-2px] w-[2px] bg-emerald-500 transition-all duration-300 ease-out"
        style={{
          top: `${indicatorStyle.top}px`,
          height: `${indicatorStyle.height}px`,
          opacity: indicatorStyle.opacity,
        }}
      />

      {menuItems.map((item) => (
        <a
          key={item.id}
          ref={(el) => {
            itemRefs.current[item.id] = el;
          }}
          href={`#${item.id}`}
          onMouseEnter={() => {
            clearHoverLeaveTimer();
            setHoveredId(item.id);
          }}
          onFocus={() => setHoveredId(item.id)}
          onBlur={() => setHoveredId(null)}
          onClick={() => setActiveId(item.id)}
          aria-current={activeId === item.id ? "true" : undefined}
          className={`text-md leading-tight transition-colors duration-300 ${
            visualId === item.id ? "font-medium text-gray-900" : "text-gray-400"
          }`}
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
}
