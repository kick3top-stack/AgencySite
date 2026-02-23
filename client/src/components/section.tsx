import React, { useMemo } from "react";
import { motion, useInView } from "framer-motion";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  variant = "default",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "cosmic" | "paper";
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-20% 0px -10% 0px", once: true });

  const bg = useMemo(() => {
    if (variant === "cosmic") return "bg-inkwash bg-starfield grain-overlay";
    if (variant === "paper") return "bg-inkwash grain-overlay";
    return "bg-inkwash";
  }, [variant]);

  return (
    <section id={id} className={`relative ${bg}`}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div ref={ref} className={`grid gap-10 min-w-0 ${className}`}>
          <motion.header
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
            className="max-w-2xl min-w-0"
          >
            {eyebrow ? (
              <div className="inline-flex items-center gap-2 rounded-full border bg-card/50 px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="break-words">{eyebrow}</span>
              </div>
            ) : null}
            <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight break-words">
              <span className="title-glow">{title}</span>
            </h2>
            {subtitle ? (
              <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed break-words">
                {subtitle}
              </p>
            ) : null}
            <div className="mt-6 h-px w-full divider-ink" />
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
