import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl space-y-5", className)}>
      <div className="section-label">
        <Sparkles className="size-3.5 text-cyan-200" />
        {label}
      </div>
      <div className="space-y-4">
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="max-w-xl text-base leading-8 text-white/62 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
