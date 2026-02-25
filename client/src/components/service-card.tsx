import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ServiceCard({
  icon: Icon,
  title,
  bullets,
  tags,
  className,
}: {
  icon: LucideIcon;
  title: string;
  bullets: string[];
  tags: string[];
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn("h-full", className)}
    >
      <Card className="h-full surface-glass gold-halo">
        <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0">
          <div className="grid gap-2 min-w-0">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-card/60">
              <Icon className="h-5 w-5 text-foreground" />
            </div>
            {/* Force the title onto a single line and let it visually overflow instead of being truncated or scrollable. */}
            <CardTitle className="text-xl font-extrabold whitespace-nowrap">
              {title}
            </CardTitle>
          </div>

          {/* Keep all skill tags on a single line; allow them to overflow horizontally so text is never cut off. */}
          <div className="flex flex-nowrap gap-2 justify-end">
            {tags.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="no-default-active-elevate shrink-0 whitespace-nowrap"
              >
                {t}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
