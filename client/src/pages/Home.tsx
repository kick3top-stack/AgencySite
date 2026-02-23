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
      { icon: Sparkles, title: "敏捷开发", desc: "每周可演示、可验收的迭代节奏，降低不确定性。" },
      { icon: ShieldCheck, title: "安全优先", desc: "从模型到合约，从权限到审计，默认按高安全标准交付。" },
      { icon: Cpu, title: "机密系统经验", desc: "内部系统与保密流程友好：默认 NDA、最小权限、全程留痕。" },
      { icon: Cloud, title: "可扩展架构", desc: "指标驱动的性能基线，支持增长的模块化架构。" },
      { icon: CheckCircle2, title: "四人核心团队", desc: "沟通链路短、工程质量稳定、责任清晰到人。" },
    ],
    [],
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
          eyebrow="WHO WE ARE"
          title="以精品工匠精神，做高可信系统"
          subtitle="我们不是“外包工厂”。我们是一支四人核心团队，专注高难度工程交付：从安全、可扩展、可观测，到上线后的持续演进。"
          variant="paper"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] items-start">
            <Card className="surface-glass p-6 md:p-7 gold-halo">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="grid gap-1">
                  <div className="text-xs font-semibold tracking-wide text-muted-foreground">
                    星云软件工作室 · Boutique Studio
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-black">
                    小队制交付，责任到人
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="no-default-active-elevate">
                    4-person core
                  </Badge>
                  <Badge variant="secondary" className="no-default-active-elevate">
                    Security-first
                  </Badge>
                  <Badge variant="secondary" className="no-default-active-elevate">
                    Ship-ready
                  </Badge>
                </div>
              </div>

              <div className="mt-5 grid gap-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  我们擅长把复杂问题拆解为清晰的系统边界：核心域、数据域与权限域。用可测试、可维护、可扩展的方式，把产品真正交付到生产环境。
                </p>
                <p>
                  我们的审美来自中国传统的“留白与克制”，工程精神来自现代软件的“可验证与可演进”。
                  这两者融合，就是我们持续打磨的交付方式。
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { k: "经验", v: "多年工程交付" },
                  { k: "节奏", v: "周迭代可演示" },
                  { k: "质量", v: "测试/审计友好" },
                  { k: "上线", v: "可观测可回滚" },
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
                <div className="font-display text-xl font-extrabold">江南意象 · 低饱和装饰</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  我们把文化元素作为“氛围层”，从不抢走内容与功能的注意力：像墨色淡入纸面，像雾气掠过水面。
                </p>
                <div className="mt-6 relative rounded-2xl border bg-card/35 p-4">
                  <div className="absolute inset-0 opacity-[0.18] text-foreground">
                    <BoatSilhouette className="absolute -bottom-3 left-0 right-0" />
                  </div>
                  <div className="relative">
                    <div className="text-xs font-semibold tracking-wide text-muted-foreground">传统元素 · 仅 5–10% 不透明度</div>
                    <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      小舟、远山、薄雾——作为现代界面中的“呼吸”，让科技更有温度。
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
                    获取工作室介绍
                  </Button>
                  <Button type="button" variant="default" onClick={() => window.open("https://www.linkedin.com/", "_blank")}>
                    LinkedIn（占位）
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="services"
          eyebrow="SERVICES"
          title="四大能力，覆盖从 0 到 1 的关键路径"
          subtitle="从链上安全到 AI 工程化，从 Web 体验到移动端上架——我们以同一套高标准交付。"
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
          eyebrow="CASE STUDIES"
          title="案例：以结果为导向的工程交付"
          subtitle="以下为匿名化案例，展示我们在架构、性能、安全与上线节奏上的能力。"
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
                <div className="font-display text-lg font-extrabold">想看更接近你行业的案例？</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  发送你的需求与约束条件，我们会以保密方式提供匹配的交付方案与时间线。
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button type="button" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  联系我们
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
                  当前选中
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="why"
          eyebrow="WHY US"
          title="为什么选择我们"
          subtitle="我们用工程纪律保证交付，用文化审美保证体验。"
          variant="cosmic"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <Card className="surface-glass p-6 md:p-7 gold-halo">
              <div className="font-display text-2xl font-black">交付原则</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                把“能跑”变成“可运营”。把“可用”打磨成“可信”。把“上线”升级为“持续进化”。
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
                    <div className="font-display text-xl font-extrabold">安全与保密默认开启</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      适配内部系统与机密项目：最小权限、审计留痕、发布可回滚。
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
                    <div className="font-display text-xl font-extrabold">工程可观测与质量基线</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      日志、追踪、错误聚合、性能预算——上线后依然可控、可迭代。
                    </div>
                  </div>
                  <Cpu className="h-6 w-6 text-foreground opacity-80" />
                </div>
                <div className="mt-5 grid gap-3">
                  {[
                    { k: "监控", v: "关键指标告警与追踪" },
                    { k: "性能", v: "首屏/交互延迟预算" },
                    { k: "质量", v: "测试覆盖与审计配合" },
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
          eyebrow="TECH STACK"
          title="技术栈：稳、快、可扩展"
          subtitle="我们选择成熟的工程栈，并用一致的交付标准把它们变成可长期维护的产品。"
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
                <div className="font-display text-lg font-extrabold">我们也支持你的既有栈</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  迁移、重构与接手旧系统同样擅长——以可控风险推进。
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
                咨询兼容性
              </Button>
            </div>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="CONTACT"
          title="联系：用一封信息开始"
          subtitle="我们会在 1–2 个工作日内回复。此表单为前端演示：提交会显示提示，不会实际发送。"
          variant="cosmic"
        >
          <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr] items-start">
            <Card className="surface-glass p-6 md:p-7 gold-halo">
              <div className="font-display text-2xl font-black">直接联系</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                如果你更希望邮件沟通，复制以下地址即可。我们支持 NDA 与保密流程。
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
                    复制
                  </Button>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  { icon: ShieldCheck, title: "保密默认开启", desc: "NDA、最小权限、审计留痕。" },
                  { icon: Blocks, title: "工程可验收", desc: "可演示、可验收、可追踪的交付物。" },
                  { icon: BrainCircuit, title: "复杂度友好", desc: "链上、AI、系统集成都能落地。" },
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
                  LinkedIn（占位）
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
                  预约通话（演示）
                </Button>
              </div>
            </Card>

            <Card className="surface-glass p-6 md:p-7">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div>
                  <div className="font-display text-2xl font-black">联系表单</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    请尽量提供目标、时间线、预算范围与任何约束条件。
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>前端校验</span>
                </div>
              </div>

              <form onSubmit={submit} className="mt-6 grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-semibold" htmlFor="name">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" {...form.register("name")} />
                  {form.formState.errors.name ? (
                    <div className="text-sm text-destructive">{form.formState.errors.name.message}</div>
                  ) : null}
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-semibold" htmlFor="email">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="you@company.com" {...form.register("email")} />
                  {form.formState.errors.email ? (
                    <div className="text-sm text-destructive">{form.formState.errors.email.message}</div>
                  ) : null}
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-semibold" htmlFor="company">
                    Company <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <Input id="company" placeholder="Company / organization" {...form.register("company")} />
                  {form.formState.errors.company ? (
                    <div className="text-sm text-destructive">{form.formState.errors.company.message}</div>
                  ) : null}
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-semibold" htmlFor="message">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us what you're building, constraints, timeline, and success criteria..."
                    {...form.register("message")}
                  />
                  {form.formState.errors.message ? (
                    <div className="text-sm text-destructive">{form.formState.errors.message.message}</div>
                  ) : null}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <div className="text-xs text-muted-foreground">
                    By submitting, you agree this is a demo submission (no real email sent).
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
                      清空
                    </Button>
                    <Button type="submit" disabled={!form.formState.isValid || form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? "Sending..." : "发送信息"}
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
                    <div className="font-semibold">建议信息结构</div>
                    <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      目标（What）/ 约束（Constraints）/ 时间线（When）/ 成功指标（Success metrics）/ 现有系统（If any）
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
                <span className="font-display font-extrabold text-foreground">星云软件工作室</span>
                <span>·</span>
                <span>Cosmic craft, Jiangnan soul</span>
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
                  Privacy
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
                  Terms
                </Button>
              </div>
            </div>
          </footer>
        </Section>
      </main>
    </div>
  );
}
