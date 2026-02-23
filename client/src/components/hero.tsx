import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MountainMist } from "@/components/ornaments";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function Hero() {
  const particles = useMemo(() => {
    const count = 14;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.round(randomBetween(4, 96))}%`,
      top: `${Math.round(randomBetween(8, 82))}%`,
      size: Math.round(randomBetween(6, 14)),
      delay: randomBetween(0, 2.4),
      duration: randomBetween(4.6, 8.4),
      opacity: randomBetween(0.12, 0.26),
    }));
  }, []);

  return (
    <section className="relative overflow-hidden bg-inkwash bg-starfield grain-overlay">
      <div
        className="absolute inset-0 animate-nebula"
        style={{
          background:
            "radial-gradient(900px 520px at 20% 20%, hsl(var(--nebula-1) / 0.45), transparent 65%), radial-gradient(800px 480px at 75% 15%, hsl(var(--nebula-2) / 0.42), transparent 62%), radial-gradient(700px 520px at 50% 85%, hsl(var(--gold-glow) / 0.18), transparent 65%), linear-gradient(180deg, hsl(var(--background)), hsl(var(--background)))",
        }}
      />

      <MountainMist className="absolute inset-0 opacity-90" />

      {/* Faint ancient armor silhouette (abstract) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 right-[-120px] h-[520px] w-[520px] rounded-full opacity-[0.08] blur-[1px]"
        style={{
          background:
            "conic-gradient(from 180deg, transparent 0 40%, hsl(var(--accent)) 52%, transparent 62% 100%)",
          maskImage:
            "radial-gradient(closest-side, rgba(0,0,0,0.85), transparent 72%)",
        }}
      />

      {/* Floating particles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.65), rgba(255,255,255,0) 70%)",
              opacity: p.opacity,
              filter: "drop-shadow(0 0 12px rgba(198,167,94,.18))",
            }}
            initial={{ y: 0 }}
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
              className="inline-flex items-center gap-2 rounded-full border bg-card/35 px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground surface-glass"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>精工小队 · 只做高难度与高标准</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-5 text-5xl md:text-7xl font-black tracking-tight title-glow"
            >
              <span className="nebula-text">星云</span>
              <span className="ml-2">之上</span>
              <span className="block mt-2 text-3xl md:text-4xl text-muted-foreground font-semibold">
                以江南气韵，造未来系统
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              星云软件工作室是一支四人核心团队的精品技术工作室，专注于区块链、AI、Web 与移动端系统开发。
              我们以安全、可扩展与可交付为先，交付可直接上线与持续迭代的高端产品。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Button type="button" onClick={() => scrollToSection("contact")}>
                开始一个项目
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button type="button" variant="outline" onClick={() => scrollToSection("contact")}>
                联系我们
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl"
            >
              {[
                { k: "核心成员", v: "4 人" },
                { k: "交付方式", v: "敏捷迭代" },
                { k: "项目类型", v: "企业级系统" },
                { k: "保密等级", v: "默认 NDA" },
              ].map((stat) => (
                <div key={stat.k} className="rounded-2xl border bg-card/40 p-3 surface-glass soft-outline">
                  <div className="text-xs text-muted-foreground">{stat.k}</div>
                  <div className="mt-1 font-display text-lg font-extrabold">{stat.v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative"
          >
            <div className="rounded-3xl border surface-glass p-6 md:p-7 gold-halo">
              <div className="font-display text-xl font-extrabold">我们擅长的交付节奏</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                从需求定稿到生产发布，我们提供可追踪、可验收的工程流程——每周都有可演示的成果。
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  { title: "Discovery / 需求与边界", desc: "目标、风险、时间线与交付物明确" },
                  { title: "Build / 工程实现", desc: "高标准编码、测试、审计与性能基线" },
                  { title: "Ship / 上线与运维", desc: "监控、可观测性、灰度发布与迭代计划" },
                ].map((s) => (
                  <div key={s.title} className="rounded-2xl border bg-card/40 p-4 soft-outline">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <div className="font-semibold">{s.title}</div>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border bg-card/35 p-4">
                <div className="text-xs font-semibold tracking-wide text-muted-foreground">一句话承诺</div>
                <div className="mt-2 text-sm md:text-base leading-relaxed">
                  <span className="font-semibold">不做“能跑就行”。</span>
                  我们交付的是可长期维护、可被信任、能承载增长的系统。
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -z-10 -inset-10 blur-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(closest-side at 30% 35%, hsl(var(--accent) / 0.25), transparent 70%), radial-gradient(closest-side at 80% 65%, hsl(var(--primary) / 0.22), transparent 70%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
