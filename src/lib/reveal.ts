import type { CSSProperties } from "react";

type Direction = "up" | "left" | "right" | "zoom";

/** Spread onto an element to fade it in on scroll; `index` staggers siblings. */
export function reveal(index = 0, direction: Direction = "up", step = 90) {
  return {
    "data-reveal": direction === "up" ? "" : direction,
    style: { "--reveal-delay": `${index * step}ms` } as CSSProperties,
  };
}
