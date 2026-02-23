import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectCard({
  title,
  summary,
  results,
  stack,
  image,
  link,
  resultsLabel = "Results",
  linkAriaLabel,
  onView,
}: {
  title: string;
  summary: string;
  results: string[];
  stack: string[];
  image?: string;
  /** External link (e.g. to site homepage). When set, the card button opens this URL. */
  link?: string;
  resultsLabel?: string;
  linkAriaLabel?: string;
  onView: () => void;
}) {
  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <Card className="surface-glass gold-halo flex h-full flex-col overflow-hidden">
        {image ? (
          <div className="relative w-full shrink-0 aspect-video overflow-hidden border-b bg-muted/30">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover object-top"
            />
          </div>
        ) : null}
        <CardHeader className="flex shrink-0 flex-row items-start justify-between gap-2 space-y-0">
          <div className="grid min-w-0 gap-1">
            <CardTitle className="text-xl font-extrabold break-words">{title}</CardTitle>
            <p className="text-sm text-muted-foreground leading-relaxed break-words line-clamp-3">{summary}</p>
          </div>

          {link ? (
            <Button type="button" variant="outline" size="icon" className="shrink-0" asChild>
              <a href={link} target="_blank" rel="noopener noreferrer" aria-label={linkAriaLabel ?? "Open website"}>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          ) : (
            <Button type="button" variant="outline" size="icon" className="shrink-0" onClick={onView} aria-label="View case details">
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          )}
        </CardHeader>

        <CardContent className="flex min-h-0 flex-1 flex-col pt-0">
          <div className="mt-3 flex shrink-0 flex-wrap gap-2">
            {stack.map((stackItem) => (
              <Badge key={stackItem} variant="secondary" className="no-default-active-elevate">
                {stackItem}
              </Badge>
            ))}
          </div>

          <div className="mt-5 flex min-h-0 flex-1 flex-col gap-2">
            <div className="shrink-0 text-xs font-semibold tracking-wide text-muted-foreground">{resultsLabel}</div>
            <ul className="min-h-0 space-y-2 text-sm text-muted-foreground">
              {results.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
