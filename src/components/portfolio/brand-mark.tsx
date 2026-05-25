import Image from "next/image";

import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex size-10 items-center justify-center", className)}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-300/40 via-sky-500/25 to-violet-400/30 blur-md" />
      <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-slate-950/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
        <Image
          alt="Thorz brand logo"
          className="size-10 object-cover"
          height={1024}
          priority
          src="/thors-light.png"
          width={1024}
        />
      </div>
    </div>
  );
}
