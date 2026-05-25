import { BrandMark } from "@/components/portfolio/brand-mark";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="container-shell flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BrandMark className="size-8" />
          <div>
            <div className="text-sm font-medium text-white">Thoriq</div>
            <div className="text-xs uppercase tracking-[0.22em] text-white/38">
              Fullstack Developer
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
