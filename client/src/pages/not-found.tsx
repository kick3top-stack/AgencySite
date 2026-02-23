import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NavBar } from "@/components/nav-bar";
import { useLocale } from "@/components/locale-provider";
import { Sparkles } from "lucide-react";

export default function NotFound() {
  const { t } = useLocale();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <Card className="surface-glass p-8 gold-halo">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl border bg-card/60">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <h1 className="font-display text-3xl font-black tracking-tight">{t("notfound.title")}</h1>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {t("notfound.desc")}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="/" className="inline-flex">
                  <Button type="button">{t("notfound.home")}</Button>
                </Link>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => window.history.back()}
                >
                  {t("notfound.back")}
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
