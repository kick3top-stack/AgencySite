import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Blocks,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Copy,
  Cpu,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

import { NavBar } from "@/components/nav-bar";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { ProjectCard } from "@/components/project-card";
import { TechIcon } from "@/components/tech-icon";
import { BoatSilhouette } from "@/components/ornaments";
import { useLocale } from "@/components/locale-provider";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

import {
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSolidity,
  SiTensorflow,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

function copyToClipboard(text: string) {
  void navigator.clipboard?.writeText(text);
}

export default function Home() {
  const { toast } = useToast();
  const { t } = useLocale();
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const cases = useMemo(
    () => [
      {
        title: "隐私计算 × 链上结算平台",
        summary:
          "为跨境业务构建端到端的可信结算流程，强调合规与审计可追溯，支持高并发与多签风控。",
        stack: ["Solidity", "Node.js", "PostgreSQL", "AWS", "Observability"],
        results: [
          "多签与风控策略：可配置、可回放、可审计",
          "链上交互吞吐优化：减少失败率与费用波动",
          "灰度发布与监控：关键指标告警与追踪",
        ],
      },
      {
        title: "企业级 AI 助手：流程与知识系统",
        summary:
          "打造内部机密知识问答与流程自动化系统，具备权限隔离、可观测性与持续迭代的工程基座。",
        stack: ["Python", "TensorFlow", "React", "RBAC", "Vector Search"],
        results: [
          "权限隔离：部门/项目级别访问控制与审计日志",
          "知识更新：增量索引与可追踪的内容版本",
          "成本控制：缓存策略与分层推理架构",
        ],
      },
      {
        title: "高端多端产品：从设计到上架",
        summary:
          "移动端与 Web 统一体系，强调体验一致性与工程稳定性，支持可扩展的业务增长。",
        stack: ["React", "Mobile", "CI/CD", "SLA", "Analytics"],
        results: [
          "组件体系：统一设计语言与可复用交互",
          "性能基线：首屏与交互延迟达标并持续监控",
          "上线节奏：周迭代发布，零阻塞回滚策略",
        ],
      },
    ],
    [],
  );

  const services = useMemo(
    () => [
      {
        icon: Blocks,
        title: "Blockchain Development",
        tags: ["Solidity", "Audits"],
        bullets: [
          "智能合约架构设计、升级与权限模型",
          "Gas 优化、交易失败率与链上可观测",
          "安全审计配合：静态分析 + 测试覆盖",
          "多签、风控与链下服务协作流程",
        ],
      },
      {
        icon: BrainCircuit,
        title: "AI Solutions",
        tags: ["ML", "RAG"],
        bullets: [
          "企业级 AI 助手：权限隔离、审计与可观测",
          "数据管道与特征工程：可复现与可追踪",
          "RAG/向量检索：知识更新策略与质量评估",
          "模型服务：缓存、分层推理与成本控制",
        ],
      },
      {
        icon: Code2,
        title: "Web Development",
        tags: ["React", "Node"],
        bullets: [
          "高端营销站与企业后台：信息密度与体验平衡",
          "工程化：类型安全、测试、性能预算",
          "可观测：日志、追踪、错误聚合与告警",
          "可扩展架构：模块边界清晰，利于迭代",
        ],
      },
      {
        icon: Smartphone,
        title: "Mobile App Development",
        tags: ["iOS/Android", "Design"],
        bullets: [
          "多端一致性体验：组件系统与交互规范",
          "离线与弱网策略：队列、重试与同步",
          "发布体系：CI/CD、灰度与回滚",
          "指标体系：留存、转化、崩溃率监控",
        ],
      },
    ],
    [],
  );

  const checks = useMemo(
    () => [
      { icon: Sparkles, title: t("checks.agile"), desc: t("checks.agileDesc") },
      { icon: ShieldCheck, title: t("checks.security"), desc: t("checks.securityDesc") },
      { icon: Cpu, title: t("checks.confidential"), desc: t("checks.confidentialDesc") },
      { icon: Cloud, title: t("checks.scalable"), desc: t("checks.scalableDesc") },
      { icon: CheckCircle2, title: t("checks.team"), desc: t("checks.teamDesc") },
    ],
    [t],
  );

  const tech = useMemo(
    () => [
      { icon: <SiSolidity />, name: "Solidity", note: "Smart contracts & tooling" },
      { icon: <SiPython />, name: "Python", note: "Data, ML pipelines, services" },
      { icon: <SiReact />, name: "React", note: "Premium UI systems" },
      { icon: <SiNodedotjs />, name: "Node.js", note: "APIs, workers, real-time" },
      { icon: <SiTensorflow />, name: "TensorFlow", note: "Training & inference" },
      { icon: <FaAws />, name: "AWS", note: "Infra, scaling, observability" },
    ],
    [],
  );

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
    mode: "onChange",
  });

  const submit = form.handleSubmit((values) => {
    // No backend: simulate success
    console.log("[Contact]", values);
    toast({
      title: "Message sent!",
      description: "We’ll reply within 1–2 business days.",
    });
    form.reset();
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        <Hero />

        <Section
          id="about"
          eyebrow={t("section.about.eyebrow")}
          title={t("section.about.title")}
          subtitle={t("section.about.subtitle")}
          variant="paper"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] items-start">
            <Card className="surface-glass p-6 md:p-7 gold-halo">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="grid gap-1">
                  <div className="text-xs font-semibold tracking-wide text-muted-foreground">
                    {t("section.about.studio")}
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-black">
                    {t("section.about.delivery")}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="no-default-active-elevate">
                    {t("section.about.badge1")}
                  </Badge>
                  <Badge variant="secondary" className="no-default-active-elevate">
                    {t("section.about.badge2")}
                  </Badge>
                  <Badge variant="secondary" className="no-default-active-elevate">
                    {t("section.about.badge3")}
                  </Badge>
                </div>
              </div>

              <div className="mt-5 grid gap-4 text-sm text-muted-foreground leading-relaxed">
                <p>{t("section.about.para1")}</p>
                <p>{t("section.about.para2")}</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { k: t("section.about.exp"), v: t("section.about.expV") },
                  { k: t("section.about.rhythm"), v: t("section.about.rhythmV") },
                  { k: t("section.about.quality"), v: t("section.about.qualityV") },
                  { k: t("section.about.launch"), v: t("section.about.launchV") },
                ].map((s) => (
                  <div key={s.k} className="rounded-2xl border bg-card/40 p-4 soft-outline">
                    <div className="text-xs text-muted-foreground">{s.k}</div>
                    <div className="mt-1 font-semibold">{s.v}</div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="relative">
              <div className="absolute -top-6 -right-6 -z-10 h-44 w-44 rounded-full blur-3xl opacity-40 bg-[hsl(var(--accent)/.25)]" />
              <div className="rounded-3xl border p-6 md:p-7 surface-glass">
                <div className="font-display text-xl font-extrabold">{t("section.about.jiangnan")}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {t("section.about.jiangnanDesc")}
                </p>
                <div className="mt-6 relative rounded-2xl border bg-card/35 p-4">
                  <div className="absolute inset-0 opacity-[0.18] text-foreground">
                    <BoatSilhouette className="absolute -bottom-3 left-0 right-0" />
                  </div>
                  <div className="relative">
                    <div className="text-xs font-semibold tracking-wide text-muted-foreground">{t("section.about.traditional")}</div>
                    <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {t("section.about.traditionalDesc")}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      toast({
                        title: "Studio deck",
                        description: "This is a static demo site — deck download not wired.",
                      });
                    }}
                  >
                    {t("section.about.getDeck")}
                  </Button>
                  <Button type="button" variant="default" onClick={() => window.open("https://www.linkedin.com/", "_blank")}>
                    {t("section.about.linkedin")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="services"
          eyebrow={t("section.services.eyebrow")}
          title={t("section.services.title")}
          subtitle={t("section.services.subtitle")}
          variant="cosmic"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} bullets={s.bullets} tags={s.tags} />
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow={t("section.projects.eyebrow")}
          title={t("section.projects.title")}
          subtitle={t("section.projects.subtitle")}
          variant="paper"
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {cases.map((c) => (
              <ProjectCard
                key={c.title}
                title={c.title}
                summary={c.summary}
                results={c.results}
                stack={c.stack}
                onView={() => {
                  setSelectedCase(c.title);
                  toast({
                    title: "Case opened",
                    description: "This is a demo interaction — full case page not included.",
                  });
                }}
              />
            ))}
          </div>

          <div className="mt-6 rounded-3xl border surface-glass p-5 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <div className="font-display text-lg font-extrabold">{t("section.projects.moreTitle")}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {t("section.projects.moreDesc")}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button type="button" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  {t("section.projects.contactUs")}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    toast({
                      title: "Selected case",
                      description: selectedCase ? `Current: ${selectedCase}` : "No case selected yet.",
                    });
                  }}
                >
                  {t("section.projects.selected")}
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="why"
          eyebrow={t("section.why.eyebrow")}
          title={t("section.why.title")}
          subtitle={t("section.why.subtitle")}
          variant="cosmic"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <Card className="surface-glass p-6 md:p-7 gold-halo">
              <div className="font-display text-2xl font-black">{t("section.why.principles")}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {t("section.why.principlesDesc")}
              </p>

              <div className="mt-6 grid gap-3">
                {checks.map((c) => (
                  <div key={c.title} className="rounded-2xl border bg-card/40 p-4 soft-outline">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl border bg-card/60">
                        <c.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold">{c.title}</div>
                        <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid gap-5">
              <Card className="surface-glass p-6 md:p-7">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div>
                    <div className="font-display text-xl font-extrabold">{t("section.why.securityTitle")}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {t("section.why.securityDesc")}
                    </div>
                  </div>
                  <ShieldCheck className="h-6 w-6 text-foreground opacity-80" />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["NDA-friendly", "RBAC", "Audit logs", "Rollback plan", "Threat modeling"].map((t) => (
                    <Badge key={t} variant="secondary" className="no-default-active-elevate">
                      {t}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="surface-glass p-6 md:p-7">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div>
                    <div className="font-display text-xl font-extrabold">{t("section.why.observabilityTitle")}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {t("section.why.observabilityDesc")}
                    </div>
                  </div>
                  <Cpu className="h-6 w-6 text-foreground opacity-80" />
                </div>
                <div className="mt-5 grid gap-3">
                  {[
                    { k: t("section.why.monitor"), v: t("section.why.monitorV") },
                    { k: t("section.why.perf"), v: t("section.why.perfV") },
                    { k: t("section.why.quality"), v: t("section.why.qualityV") },
                  ].map((x) => (
                    <div key={x.k} className="rounded-2xl border bg-card/40 p-4 soft-outline">
                      <div className="text-xs text-muted-foreground">{x.k}</div>
                      <div className="mt-1 font-semibold">{x.v}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Section>

        <Section
          id="stack"
          eyebrow={t("section.stack.eyebrow")}
          title={t("section.stack.title")}
          subtitle={t("section.stack.subtitle")}
          variant="paper"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tech.map((t) => (
              <TechIcon key={t.name} icon={t.icon} name={t.name} note={t.note} />
            ))}
          </div>

          <div className="mt-7 rounded-3xl border surface-glass p-5 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <div className="font-display text-lg font-extrabold">{t("section.stack.alsoTitle")}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {t("section.stack.alsoDesc")}
                </div>
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  toast({
                    title: "Capability note",
                    description: "We can adapt to existing stacks; contact us with constraints.",
                  });
                }}
              >
                {t("section.stack.consult")}
              </Button>
            </div>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow={t("section.contact.eyebrow")}
          title={t("section.contact.title")}
          subtitle={t("section.contact.subtitle")}
          variant="cosmic"
        >
          <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr] items-start">
            <Card className="surface-glass p-6 md:p-7 gold-halo">
              <div className="font-display text-2xl font-black">{t("section.contact.directTitle")}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {t("section.contact.directDesc")}
              </p>

              <div className="mt-5 rounded-2xl border bg-card/40 p-4 soft-outline">
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="mt-1 flex items-center justify-between gap-2 flex-wrap">
                  <div className="font-semibold">hello@nebula-studio.example</div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      copyToClipboard("hello@nebula-studio.example");
                      toast({ title: "Copied", description: "Email address copied to clipboard." });
                    }}
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    {t("section.contact.copy")}
                  </Button>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  { icon: ShieldCheck, title: t("section.contact.confidential"), desc: t("section.contact.confidentialDesc") },
                  { icon: Blocks, title: t("section.contact.deliverable"), desc: t("section.contact.deliverableDesc") },
                  { icon: BrainCircuit, title: t("section.contact.complexity"), desc: t("section.contact.complexityDesc") },
                ].map((x) => (
                  <div key={x.title} className="rounded-2xl border bg-card/40 p-4 soft-outline">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl border bg-card/60">
                        <x.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold">{x.title}</div>
                        <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{x.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Button type="button" onClick={() => window.open("https://www.linkedin.com/", "_blank")}>
                  {t("section.contact.linkedin")}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    toast({
                      title: "Calendar",
                      description: "This is a static demo — scheduling is not wired.",
                    });
                  }}
                >
                  {t("section.contact.schedule")}
                </Button>
              </div>
            </Card>

            <Card className="surface-glass p-6 md:p-7">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div>
                  <div className="font-display text-2xl font-black">{t("section.contact.formTitle")}</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {t("section.contact.formDesc")}
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>{t("section.contact.formValidation")}</span>
                </div>
              </div>

              <form onSubmit={submit} className="mt-6 grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-semibold" htmlFor="name">
                    {t("section.contact.name")}
                  </label>
                  <Input id="name" placeholder={t("section.contact.namePlaceholder")} {...form.register("name")} />
                  {form.formState.errors.name ? (
                    <div className="text-sm text-destructive">{form.formState.errors.name.message}</div>
                  ) : null}
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-semibold" htmlFor="email">
                    {t("section.contact.email")}
                  </label>
                  <Input id="email" type="email" placeholder={t("section.contact.emailPlaceholder")} {...form.register("email")} />
                  {form.formState.errors.email ? (
                    <div className="text-sm text-destructive">{form.formState.errors.email.message}</div>
                  ) : null}
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-semibold" htmlFor="company">
                    {t("section.contact.company")} <span className="text-muted-foreground font-normal">{t("section.contact.companyOptional")}</span>
                  </label>
                  <Input id="company" placeholder={t("section.contact.companyPlaceholder")} {...form.register("company")} />
                  {form.formState.errors.company ? (
                    <div className="text-sm text-destructive">{form.formState.errors.company.message}</div>
                  ) : null}
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-semibold" htmlFor="message">
                    {t("section.contact.message")}
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder={t("section.contact.messagePlaceholder")}
                    {...form.register("message")}
                  />
                  {form.formState.errors.message ? (
                    <div className="text-sm text-destructive">{form.formState.errors.message.message}</div>
                  ) : null}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <div className="text-xs text-muted-foreground">
                    {t("section.contact.disclaimer")}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        form.reset();
                        toast({ title: "Cleared", description: "Form reset." });
                      }}
                    >
                      {t("section.contact.clear")}
                    </Button>
                    <Button type="submit" disabled={!form.formState.isValid || form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? t("section.contact.sending") : t("section.contact.send")}
                    </Button>
                  </div>
                </div>
              </form>

              <div className="mt-6 rounded-2xl border bg-card/35 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl border bg-card/60">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold">{t("section.contact.suggestTitle")}</div>
                    <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {t("section.contact.suggestDesc")}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <footer className="mt-10">
            <div className="h-px divider-ink" />
            <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-foreground">{t("footer.brand")}</span>
                <span>·</span>
                <span>{t("footer.tagline")}</span>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    toast({
                      title: "Privacy",
                      description: "This is a static demo. Add real policy pages if needed.",
                    });
                  }}
                >
                  {t("footer.privacy")}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    toast({
                      title: "Terms",
                      description: "This is a static demo. Add real terms pages if needed.",
                    });
                  }}
                >
                  {t("footer.terms")}
                </Button>
              </div>
            </div>
          </footer>
        </Section>
      </main>
    </div>
  );
}
