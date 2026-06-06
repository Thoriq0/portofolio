import { BriefcaseBusiness, Sparkles } from "lucide-react";

import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experiencePoints } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <div className="container-shell space-y-12">
        <Reveal>
          <SectionHeading
            label="Experience"
            title="Delivering reliable product work inside complex business environments."
            description="Over the last 1 year and 7 months at PT.Global Edutek Solusindo, I have worked on enterprise software with a mix of bug fixing, maintenance, feature delivery, and workflow optimization."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <Card>
            <CardContent className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-5">
                <Badge variant="accent" className="w-fit">
                  PT.Global Edutek Solusindo
                </Badge>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                    Fullstack Developer
                  </h3>
                  <p className="mt-2 text-white/56">
                    1 year 7 months · Coordinated with Rafael · Fast-moving enterprise delivery
                  </p>
                </div>
                <div className="rounded-[26px] border border-white/8 bg-white/4 p-5">
                  <div className="flex items-center gap-3 text-sm text-white/68">
                    <BriefcaseBusiness className="size-4 text-cyan-200" />
                    Day-to-day scope
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/58">
                    Fixing production issues, maintaining existing systems, building new features,
                    and supporting dynamic business logic across ERP, warehouse, POS, and HRIS
                    environments.
                  </p>
                </div>
              </div>

              <div className="relative space-y-5">
                <div className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-cyan-300/60 via-white/10 to-transparent" />
                {experiencePoints.map((point) => (
                  <div key={point.title} className="relative pl-12">
                    <span className="absolute left-0 top-2 grid size-8 place-items-center rounded-full border border-cyan-300/20 bg-cyan-300/10">
                      <Sparkles className="size-3.5 text-cyan-200" />
                    </span>
                    <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                      <h4 className="text-lg font-medium text-white">{point.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-white/58">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
