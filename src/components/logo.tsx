import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={cn("size-9", className)}>
      <rect width="40" height="40" rx="10" fill="var(--navy-900)" />
      <path
        d="M9 13l4.6 14L20 15.5 26.4 27 31 13"
        fill="none"
        stroke="white"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="31" cy="30.5" r="2.4" fill="oklch(0.78 0.11 245)" />
    </svg>
  );
}

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={inverted ? "[&>rect]:fill-white/10" : undefined} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-lg font-extrabold tracking-tight",
            inverted ? "text-white" : "text-navy-900",
          )}
        >
          Wartel
        </span>
        <span
          className={cn(
            "text-[0.65rem] font-semibold tracking-[0.28em] uppercase",
            inverted ? "text-white/60" : "text-muted-foreground",
          )}
        >
          Trading
        </span>
      </span>
    </span>
  );
}
