import {
  Boxes,
  Braces,
  Database,
  GitBranch,
  Layers3,
  Server,
} from "lucide-react";

import { InteractiveCard } from "@/components/portfolio/interactive-card";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { TechMarquee } from "@/components/portfolio/tech-marquee";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { techStack } from "@/data/portfolio";

const iconMap = {
  Frontend: Layers3,
  Language: Braces,
  Styling: Layers3,
  Backend: Server,
  Database: Database,
  Ops: Boxes,
  Workflow: GitBranch,
  Integration: Braces,
};

export function TechStackSection() {
  return (
    <section id="stack" className="section-shell">
      <div className="container-shell space-y-12">
        <Reveal>
          <SectionHeading
            label="Tech Stack"
            title="A practical stack for product velocity, maintainability, and real business workflows."
            description="Frontend polish meets enterprise pragmatism here: modern React and Next.js for UI, Laravel and CodeIgniter for backend systems, and solid database and integration work underneath."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <TechMarquee />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {techStack.map((item, index) => {
            const Icon = iconMap[item.category as keyof typeof iconMap] ?? Layers3;

            return (
              <Reveal key={item.name} delay={index * 0.03}>
                <InteractiveCard>
                  <Card data-cursor="spotlight">
                    <CardContent className="space-y-6">
                      <div className={`h-1.5 rounded-full bg-gradient-to-r ${item.accent}`} />
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-white/38">
                            {item.category}
                          </p>
                          <h3 className="mt-3 text-xl font-medium text-white">{item.name}</h3>
                        </div>
                        <div className="grid size-12 place-items-center rounded-2xl border border-white/8 bg-white/5">
                          <Icon className="size-5 text-cyan-200" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-white/54">
                          Built for reliable features, maintenance, and evolving product flows.
                        </p>
                        <Badge variant={item.level === "Core" ? "accent" : "muted"}>
                          {item.level}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </InteractiveCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
