import Image from "next/image";

import { cn } from "@/lib/utils";

type ProjectVisualVariant =
  | "thorz"
  | "nagih"
  | "erp"
  | "wms"
  | "pos"
  | "hres"
  | "inventory"
  | "finance";

type ProjectVisualProps = {
  variant: ProjectVisualVariant;
  compact?: boolean;
  imageSrc?: string;
  imageAlt?: string;
};

const labels: Record<ProjectVisualVariant, string[]> = {
  thorz: ["Company profile", "Contact flow", "Portfolio showcase"],
  nagih: ["Invoice product", "Login UI", "Pricing blocks"],
  erp: ["Planning", "Approvals", "Reports"],
  wms: ["Stock map", "Movement", "Dispatch"],
  pos: ["Transactions", "Catalog", "Checkout"],
  hres: ["People ops", "Attendance", "Admin"],
  inventory: ["Alerts", "Trends", "Snapshots"],
  finance: ["Cash flow", "Summary", "Traces"],
};

const accents: Record<ProjectVisualVariant, string> = {
  thorz: "from-cyan-400/25 via-sky-500/20 to-violet-500/20",
  nagih: "from-emerald-400/25 via-cyan-500/20 to-blue-500/20",
  erp: "from-sky-400/25 via-indigo-500/15 to-violet-500/20",
  wms: "from-emerald-400/25 via-teal-500/18 to-cyan-500/18",
  pos: "from-fuchsia-400/25 via-rose-500/18 to-orange-500/18",
  hres: "from-violet-400/25 via-fuchsia-500/18 to-sky-500/18",
  inventory: "from-cyan-400/25 via-blue-500/18 to-teal-500/18",
  finance: "from-amber-300/25 via-orange-500/18 to-rose-500/18",
};

export function ProjectVisual({
  variant,
  compact = false,
  imageSrc,
  imageAlt,
}: ProjectVisualProps) {
  const items = labels[variant];

  if (imageSrc && imageAlt) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80",
          compact ? "h-44 p-4" : "h-[320px] p-3 sm:h-[420px] sm:p-4",
        )}
      >
        <div className={cn("absolute inset-0 bg-gradient-to-br", accents[variant])} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_40%)]" />
        <div className="relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-rose-300/90" />
              <span className="size-2 rounded-full bg-amber-300/90" />
              <span className="size-2 rounded-full bg-emerald-300/90" />
            </div>
            <div className="rounded-full border border-white/10 bg-slate-950/65 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-white/70 backdrop-blur-sm">
              live preview
            </div>
          </div>
          <Image
            alt={imageAlt}
            className="h-full w-full object-cover object-top"
            fill
            sizes={compact ? "100vw" : "(min-width: 1024px) 50vw, 100vw"}
            src={imageSrc}
          />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80",
        compact ? "h-44 p-4" : "h-[320px] p-5 sm:h-[420px] sm:p-6",
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", accents[variant])} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_40%)]" />
      <div className="relative flex h-full flex-col rounded-[24px] border border-white/10 bg-slate-950/70 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-rose-300/90" />
            <span className="size-2 rounded-full bg-amber-300/90" />
            <span className="size-2 rounded-full bg-emerald-300/90" />
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-white/60">
            {variant}
          </div>
        </div>

        <div className={cn("mt-4 grid flex-1 gap-3", compact ? "grid-rows-[1fr_auto]" : "grid-cols-[1.2fr_.8fr]")}>
          <div className="flex min-h-0 flex-col gap-3 rounded-[20px] border border-white/10 bg-white/5 p-3">
            <div className="h-8 rounded-full bg-white/8" />
            <div className="grid flex-1 gap-3 sm:grid-cols-2">
              <div className="rounded-[18px] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))]" />
              <div className="grid gap-3">
                <div className="rounded-[18px] bg-white/6" />
                <div className="rounded-[18px] bg-white/6" />
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {items.map((item) => (
              <div
                key={item}
                className="rounded-[18px] border border-white/8 bg-white/6 p-3"
              >
                <div className="h-2 w-20 rounded-full bg-white/30" />
                <div className="mt-3 h-8 rounded-2xl bg-white/7" />
                <div className="mt-3 text-sm text-white/70">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
