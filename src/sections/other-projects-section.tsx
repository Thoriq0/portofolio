import { ArrowRight, ArrowUpRight } from "lucide-react";

import { InteractiveCard } from "@/components/portfolio/interactive-card";
import { ProjectVisual } from "@/components/portfolio/project-visual";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { otherProjects } from "@/data/portfolio";

export function OtherProjectsSection() {
  return (
    <section id="other-projects" className="section-shell">
      <div className="container-shell space-y-12">
        <Reveal>
          <SectionHeading
            label="Other Projects"
            title="A broader system portfolio shaped by operational complexity."
            description="From internal dashboards to workflow-heavy business systems, these projects reflect the day-to-day work of shipping and maintaining enterprise software."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.03}>
              <InteractiveCard>
                <Card data-cursor="spotlight" className="h-full">
                  <CardContent className="flex h-full flex-col gap-5">
                    <ProjectVisual compact variant={project.visual} />

                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-medium text-white">{project.title}</h3>
                      <Badge variant="muted">{project.status}</Badge>
                    </div>

                    <p className="text-sm leading-7 text-white/58">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-sm text-cyan-200">
                        {project.demoUrl ? "Live project" : "Explore system profile"}
                        <ArrowRight className="size-4" />
                      </div>
                      {project.demoUrl ? (
                        <Button asChild size="default" variant="secondary">
                          <a href={project.demoUrl} target="_blank" rel="noreferrer">
                            Live Demo
                            <ArrowUpRight className="size-4" />
                          </a>
                        </Button>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              </InteractiveCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
