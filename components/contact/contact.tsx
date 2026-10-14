"use client";

import { useState } from "react";
import { site } from "@/data/site";
import Reveal from "@/components/ui/reveal";
import ArrowLink from "@/components/ui/arrow-link";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Failed to send.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-content px-5 py-12 sm:px-8 sm:py-16">
      <div className="grid gap-8">
        <Reveal>
          <div>
            <h2 className="text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl">
              Let&apos;s work together.
            </h2>
            <p className="mt-8 max-w-md text-lg text-muted">
              I&apos;m currently open to opportunities as a Junior Software
              Developer or Full-Stack Developer. Send a message and it lands
              straight in my inbox.
            </p>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
              <ArrowLink href={`mailto:${site.email}`}>Email</ArrowLink>
              <ArrowLink href={site.github}>GitHub</ArrowLink>
              <ArrowLink href={site.linkedin}>LinkedIn</ArrowLink>
              <ArrowLink href={site.resume} external>
                CV
              </ArrowLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:pt-6">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-[30px] border border-line bg-paper p-6 sm:p-8"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-name"
                className="font-mono text-xs uppercase tracking-widest text-muted"
              >
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={update("name")}
                placeholder="Your name…"
                className="border border-line bg-bg px-4 py-3 text-ink placeholder:text-muted/60 focus:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-email"
                className="font-mono text-xs uppercase tracking-widest text-muted"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                spellCheck={false}
                value={form.email}
                onChange={update("email")}
                placeholder="you@example.com…"
                className="border border-line bg-bg px-4 py-3 text-ink placeholder:text-muted/60 focus:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="font-mono text-xs uppercase tracking-widest text-muted"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                autoComplete="off"
                value={form.message}
                onChange={update("message")}
                placeholder="Tell me about your project or opportunity…"
                className="resize-none border border-line bg-bg px-4 py-3 text-ink placeholder:text-muted/60 focus:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center border border-ink bg-ink/90 px-6 py-3 font-mono text-sm uppercase tracking-widest text-bg transition-colors hover:bg-transparent hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "success" ? (
              <p role="status" aria-live="polite" className="font-mono text-sm text-ink">
                Message sent. Thank you, I&apos;ll get back to you soon.
              </p>
            ) : null}

            {status === "error" ? (
              <p role="alert" className="font-mono text-sm text-muted">{error}</p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}