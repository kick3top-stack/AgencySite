import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/locale-provider";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  const isZh = locale === "zh";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={isZh ? "Switch to English" : "切换到中文"}
      onClick={() => setLocale(isZh ? "en" : "zh")}
      className="min-w-[2.25rem] font-medium"
    >
      <span className="sr-only">{isZh ? "English" : "中文"}</span>
      {isZh ? "EN" : "中"}
    </Button>
  );
}
