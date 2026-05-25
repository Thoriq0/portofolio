import { ArrowUpRight, Mail, MapPin, MessagesSquare } from "lucide-react";

import { ContactForm } from "@/components/portfolio/contact-form";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { contactLinks } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell pb-20">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-8">
              <SectionHeading
                label="Contact"
                title="Need help shipping features or improving an existing product?"
                description="If you are working on a live product and need someone who can step into existing systems, fix issues, and keep delivery moving, I am open to collaborating."
              />

              <Card>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-white/62">
                    <MessagesSquare className="size-4 text-cyan-200" />
                    Open for freelance, product work, and frontend-heavy collaboration.
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/62">
                    <Mail className="size-4 text-cyan-200" />
                    Best for project briefs, feature requests, and partnership discussions.
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/62">
                    <MapPin className="size-4 text-cyan-200" />
                    Based in Indonesia, collaborative across remote teams.
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    className="glass-panel flex items-center justify-between rounded-[24px] border border-white/10 px-5 py-4 transition-transform duration-300 hover:-translate-y-1"
                    href={item.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em] text-white/38">
                        {item.label}
                      </div>
                      <div className="mt-2 text-white">{item.value}</div>
                    </div>
                    <ArrowUpRight className="size-4 text-cyan-200" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Card>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/38">
                    Contact form
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                    Share the idea, product, or problem space.
                  </h3>
                </div>
                <ContactForm />
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
