import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function TechIcon({
  icon,
  name,
  note,
  className,
}: {
  icon: React.ReactNode;
  name: string;
  note: string;
  className?: string;
}) {
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
      <Card className={cn("p-4 surface-glass", className)}>
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl border bg-card/60">
            <div className="text-2xl">{icon}</div>
          </div>
          <div className="min-w-0">
            <div className="font-semibold leading-tight">{name}</div>
            <div className="text-xs text-muted-foreground leading-tight">{note}</div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
