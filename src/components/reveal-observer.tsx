"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Reveals every [data-reveal] element the first time it scrolls into view. */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-visible])");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.setAttribute("data-visible", ""));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-visible", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
