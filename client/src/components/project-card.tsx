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
  onView,
}: {
  title: string;
  summary: string;
  results: string[];
  stack: string[];
  onView: () => void;
}) {
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
      <Card className="surface-glass gold-halo">
        <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0">
          <div className="grid gap-1">
            <CardTitle className="text-xl font-extrabold">{title}</CardTitle>
            <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>
          </div>

          <Button type="button" variant="outline" size="icon" onClick={onView} aria-label="View case details">
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="mt-3 flex flex-wrap gap-2">
            {stack.map((t) => (
              <Badge key={t} variant="secondary" className="no-default-active-elevate">
                {t}
              </Badge>
            ))}
          </div>

          <div className="mt-5 grid gap-2">
            <div className="text-xs font-semibold tracking-wide text-muted-foreground">Results</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {results.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
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
