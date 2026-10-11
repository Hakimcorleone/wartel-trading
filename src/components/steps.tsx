import { reveal } from "@/lib/reveal";
import { cn } from "@/lib/utils";

export function Steps({
  steps,
  className,
}: {
  steps: { title: string; description: string }[];
  className?: string;
}) {
  return (
    <ol className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {steps.map((step, i) => (
        <li
          key={step.title}
          {...reveal(i, "up", 150)}
          className="group relative flex flex-col gap-3 rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <span className="relative flex size-10 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white transition-transform duration-300 group-hover:scale-110">
            <span
              className="absolute inset-0 animate-pulse-ring rounded-full bg-navy-700"
              style={{ animationDelay: `${i * 600}ms` }}
              aria-hidden="true"
            />
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-semibold text-navy-950">{step.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
