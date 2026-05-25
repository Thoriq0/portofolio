import { ArrowUpRight, GitBranch } from "lucide-react";

import { InteractiveCard } from "@/components/portfolio/interactive-card";
import { MagneticButton } from "@/components/portfolio/magnetic-button";
import { ProjectVisual } from "@/components/portfolio/project-visual";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuredProjects } from "@/data/portfolio";

export function FeaturedProjectsSection() {
  return (
    <section id="featured-projects" className="section-shell">
      <div className="container-shell space-y-12">
        <Reveal>
          <SectionHeading
            label="Featured Projects"
            title="Selected live projects that reflect real frontend execution."
            description="These two featured projects point to actual GitHub repositories and live demos, so the showcase is now tied to real shipped work instead of placeholder concepts."
          />
        </Reveal>

        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <InteractiveCard>
                <Card data-cursor="spotlight">
                  <CardContent className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
                    <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                      <ProjectVisual
                        imageAlt={project.imageAlt}
                        imageSrc={project.imageSrc}
                        variant={project.visual}
                      />
                    </div>

                    <div className="space-y-6">
                      <Badge variant="accent" className="w-fit">
                        Featured
                      </Badge>
                      <div className="space-y-4">
                        <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white">
                          {project.title}
                        </h3>
                        <p className="text-base leading-8 text-white/62">
                          {project.description}
                        </p>
                        <p className="text-sm leading-7 text-white/48">{project.summary}</p>
                      </div>

                      <div className="space-y-3">
                        {project.impact.map((item) => (
                          <div
                            key={item}
                            className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/62"
                          >
                            {item}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <Badge key={item}>{item}</Badge>
                        ))}
                      </div>

                      <div className="flex flex-col gap-3 sm:flex-row">
                        <MagneticButton>
                          <Button asChild size="lg">
                            <a href={project.demoUrl} rel="noreferrer" target="_blank">
                              Live Demo
                              <ArrowUpRight />
                            </a>
                          </Button>
                        </MagneticButton>
                        <MagneticButton>
                          <Button asChild size="lg" variant="secondary">
                            <a href={project.githubUrl} rel="noreferrer" target="_blank">
                              GitHub
                              <GitBranch />
                            </a>
                          </Button>
                        </MagneticButton>
                      </div>
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
