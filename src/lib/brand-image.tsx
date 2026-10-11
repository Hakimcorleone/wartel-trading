import { ImageResponse } from "next/og";

import { getDictionary, type Locale } from "@/i18n";
import { regNoFull } from "@/lib/site";

const NAVY_950 = "#0a1838";
const NAVY_900 = "#0f2350";
const SKY = "#93c5fd";

function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <rect width="40" height="40" rx="10" fill={NAVY_900} />
      <path
        d="M9 13l4.6 14L20 15.5 26.4 27 31 13"
        fill="none"
        stroke="#fff"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="31" cy="30.5" r="2.4" fill="#7fb2ee" />
    </svg>
  );
}

export function squareLogo(size: number) {
  return new ImageResponse(<Mark size={size} />, { width: size, height: size });
}

export function ogImage(locale: Locale) {
  const dict = getDictionary(locale);
  const hero = dict.home.hero;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "white",
          backgroundColor: NAVY_950,
          backgroundImage: `radial-gradient(circle at 85% 10%, #1d3f86 0%, ${NAVY_950} 55%)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", borderRadius: 18, border: "2px solid rgba(255,255,255,0.15)" }}>
            <Mark size={76} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, fontWeight: 800 }}>Wartel</div>
            <div style={{ fontSize: 18, letterSpacing: 8, color: "rgba(255,255,255,0.6)" }}>TRADING</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>{hero.titleLine1}</div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, color: SKY }}>{hero.titleLine2}</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          <div style={{ display: "flex" }}>{hero.eyebrow}</div>
          <div style={{ display: "flex" }}>SSM {regNoFull}</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
