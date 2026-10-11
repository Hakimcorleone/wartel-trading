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
        <li key={step.title} className="relative flex flex-col gap-3 rounded-2xl border bg-white p-6">
          <span className="flex size-10 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-semibold text-navy-950">{step.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
