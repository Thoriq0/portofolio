import { marqueeItems } from "@/data/portfolio";

export function TechMarquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="space-y-4">
      <div className="marquee">
        <div className="marquee-track gap-4">
          {items.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="rounded-full border border-white/8 bg-white/4 px-4 py-2 text-sm text-white/72"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="marquee marquee-reverse">
        <div className="marquee-track gap-4">
          {items.map((item, index) => (
            <div
              key={`${item}-reverse-${index}`}
              className="rounded-full border border-cyan-400/10 bg-cyan-400/6 px-4 py-2 text-sm text-cyan-100/80"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
