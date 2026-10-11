import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold tracking-wide text-navy-700 uppercase">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-balance text-navy-950 sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="text-lg text-pretty text-muted-foreground">{intro}</p>}
    </div>
  );
}
