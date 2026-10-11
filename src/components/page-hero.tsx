import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  breadcrumbs: { name: string; href: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div className="bg-grid absolute inset-0 -z-10 animate-grid-pan [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute -top-40 left-1/3 -z-10 size-[36rem] animate-drift rounded-full bg-navy-700/40 blur-3xl" />
      <div className="absolute -right-20 -bottom-40 -z-10 size-[24rem] animate-drift-reverse rounded-full bg-blue-500/15 blur-3xl" />
      <div className="container-page py-16 sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-6 animate-rise">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="size-3.5" aria-hidden="true" />}
                {i === breadcrumbs.length - 1 ? (
                  <span aria-current="page" className="text-white/90">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white">
                    {crumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <Badge variant="glass" className="mb-5 animate-rise [animation-delay:80ms]">
          {eyebrow}
        </Badge>
        <h1 className="max-w-3xl animate-rise text-4xl font-extrabold tracking-tight text-balance [animation-delay:160ms] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl animate-rise text-lg text-pretty text-white/75 [animation-delay:260ms]">{subtitle}</p>
        {children && (
          <div className="mt-8 flex animate-rise flex-wrap gap-3 [animation-delay:360ms]">{children}</div>
        )}
      </div>
    </section>
  );
}
