import React from "react";
import { cn } from "@/lib/utils";

export function BoatSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 260"
      className={cn("w-full h-auto", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M92 178c86 34 186 50 308 50 178 0 320-34 420-101"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M164 176c40-12 88-18 145-18 78 0 144 10 198 30"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M260 150c-18 34-48 56-88 66 42 6 86 9 132 9 156 0 292-30 408-90-52 10-110 15-174 15-104 0-196-14-278-42z"
        fill="currentColor"
        opacity="0.10"
      />
      <path
        d="M408 78c34 20 64 42 88 66"
        stroke="currentColor"
        strokeOpacity="0.16"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M408 78c8 48 10 92 6 132"
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M720 120c28 16 56 34 84 54"
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M690 64c52 24 96 56 132 96"
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MountainMist({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 opacity-80",
        className,
      )}
      style={{
        background:
          "radial-gradient(900px 400px at 20% 20%, hsl(var(--accent) / 0.12), transparent 60%), radial-gradient(800px 420px at 80% 30%, hsl(var(--primary) / 0.12), transparent 58%), linear-gradient(180deg, transparent, hsl(var(--background) / 0.65))",
      }}
    />
  );
}
