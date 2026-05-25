"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = "idle" | "submitting" | "success";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setState("submitting");

    window.setTimeout(() => {
      setState("success");

      window.setTimeout(() => {
        setState("idle");
        form.reset();
      }, 2200);
    }, 1100);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-white/68">
          Name
          <Input required name="name" placeholder="Your name" />
        </label>
        <label className="space-y-2 text-sm text-white/68">
          Email
          <Input required name="email" type="email" placeholder="you@company.com" />
        </label>
      </div>

      <label className="space-y-2 text-sm text-white/68">
        Project context
        <Input name="subject" placeholder="What are we building?" />
      </label>

      <label className="space-y-2 text-sm text-white/68">
        Message
        <Textarea
          required
          name="message"
          placeholder="Tell me about the product, constraints, and what kind of help you need."
        />
      </label>

      <div className="flex flex-col gap-6 pt-3 sm:gap-7">
        <p className="max-w-sm text-sm leading-6 text-white/46">
          Typical response for inbound collaborations: within 24 hours.
        </p>
        <div className="flex justify-start sm:justify-end">
          <Button
            className="min-w-[220px]"
            size="lg"
            type="submit"
            disabled={state === "submitting"}
          >
            {state === "submitting" ? "Sending..." : "Start a conversation"}
            <Send className="size-4" />
          </Button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {state === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100"
            aria-live="polite"
          >
            <CheckCircle2 className="size-4" />
            Thanks, your message is queued in this demo flow.
          </motion.div>
        ) : null}
      </AnimatePresence>
    </form>
  );
}
