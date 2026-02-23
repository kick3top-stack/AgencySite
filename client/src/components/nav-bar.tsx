import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLocale } from "@/components/locale-provider";
import { cn } from "@/lib/utils";

const navItemKeys = [
  { id: "about", key: "nav.about" },
  { id: "services", key: "nav.services" },
  { id: "projects", key: "nav.projects" },
  { id: "why", key: "nav.why" },
  { id: "stack", key: "nav.stack" },
  { id: "contact", key: "nav.contact" },
] as const;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export function NavBar() {
  const [location] = useLocation();
  const onHome = location === "/" || location === "";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const chrome = useMemo(
    () =>
      cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b" : "bg-transparent",
      ),
    [scrolled],
  );

  return (
    <header className={chrome}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-[72px] flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex items-center gap-3"
            >
              <Link
                href="/"
                className="group inline-flex items-center gap-3 focus-ring rounded-md"
                onClick={(e) => {
                  if (onHome) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                <div className="relative grid h-10 w-10 place-items-center rounded-xl border bg-card/70 surface-glass">
                  <div
                    className="absolute inset-0 rounded-xl opacity-70 animate-nebula"
                    style={{
                      background:
                        "radial-gradient(22px 22px at 30% 30%, hsl(var(--accent) / .35), transparent 60%), radial-gradient(30px 30px at 70% 70%, hsl(var(--primary) / .32), transparent 62%)",
                    }}
                  />
                  <span className="relative font-display text-lg font-black nebula-text">{t("nav.logo")}</span>
                </div>
                <div className="leading-tight min-w-0 break-words">
                  <div className="font-display text-sm sm:text-base font-extrabold tracking-tight">
                    {t("nav.brand")}
                  </div>
                  <div className="text-xs text-muted-foreground hidden sm:block">
                    {t("nav.tagline")}
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          <div className="hidden md:flex items-center gap-2 min-w-0">
            <nav className="flex items-center gap-1 min-w-0 flex-shrink">
              {navItemKeys.map((item) => (
                <Button
                  key={item.id}
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground"
                >
                  {t(item.key)}
                </Button>
              ))}
            </nav>
            <div className="ml-2 flex shrink-0 items-center gap-2">
              <Button
                type="button"
                variant="default"
                onClick={() => scrollToSection("contact")}
                className="shadow-lg shadow-black/5 whitespace-nowrap"
              >
                {t("nav.cta")}
              </Button>
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>

          <div className="md:hidden flex shrink-0 items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <div className={cn("md:hidden overflow-hidden", open ? "max-h-[420px]" : "max-h-0")}>
          <div className="pb-4 pt-1">
            <div className="grid gap-2 rounded-2xl border bg-card/60 p-3 surface-glass">
              {navItemKeys.map((item) => (
                <Button
                  key={item.id}
                  type="button"
                  variant="ghost"
                  className="justify-start text-muted-foreground"
                  onClick={() => {
                    setOpen(false);
                    scrollToSection(item.id);
                  }}
                >
                  {t(item.key)}
                </Button>
              ))}
              <div className="h-px divider-ink" />
              <Button
                type="button"
                variant="default"
                onClick={() => {
                  setOpen(false);
                  scrollToSection("contact");
                }}
              >
                {t("nav.cta")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
