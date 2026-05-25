import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { InteractiveCard } from "@/components/portfolio/interactive-card";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { aboutHighlights } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <Reveal>
            <SectionHeading
              label="About"
              title="I build with production constraints in mind."
              description="I have spent 1 year and 5 months at PT Global Digital Solutions Indo working on enterprise applications, mostly in environments where the real job is understanding existing systems, fixing what is already live, and improving flows without breaking the business around them."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <InteractiveCard>
              <Card data-cursor="spotlight">
                <CardContent className="space-y-7">
                  <div className="grid gap-4 lg:grid-cols-[0.84fr_1fr]">
                    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/4">
                      <Image
                        alt="Portrait of Thoriq"
                        className="h-full w-full object-cover object-top"
                        height={770}
                        priority
                        sizes="(min-width: 1024px) 28vw, 100vw"
                        src="/thor-portrait.jpg"
                        width={640}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent px-5 py-5">
                        <div className="text-lg font-medium text-white">Thoriq</div>
                        <div className="text-xs uppercase tracking-[0.22em] text-white/55">
                          Fullstack Developer
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                      <div className="rounded-[24px] border border-white/8 bg-white/4 p-5">
                        <div className="text-xs uppercase tracking-[0.24em] text-white/42">
                          Specialty
                        </div>
                        <div className="mt-3 text-xl font-medium text-white">
                          Practical fullstack development
                        </div>
                      </div>
                      <div className="rounded-[24px] border border-white/8 bg-white/4 p-5">
                        <div className="text-xs uppercase tracking-[0.24em] text-white/42">
                          Domain exposure
                        </div>
                        <div className="mt-3 text-xl font-medium text-white">
                          ERP, WMS, POS, HRIS
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 rounded-[24px] border border-white/8 bg-white/[0.03] p-5 text-sm leading-7 text-white/64">
                    <p>
                      I am the kind of developer who is comfortable working inside systems that
                      are already running, already used by real teams, and already full of edge
                      cases.
                    </p>
                    <p>
                      A lot of my experience comes from fixing bugs, maintaining production
                      applications, and building features under deadlines across ERP, warehouse,
                      POS, and HRIS projects. That has shaped how I approach development:
                      understand the flow first, keep the change clear, and make sure it still
                      works for the people who depend on it every day.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {aboutHighlights.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-4"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan-200" />
                        <p className="text-sm leading-7 text-white/66">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </InteractiveCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
