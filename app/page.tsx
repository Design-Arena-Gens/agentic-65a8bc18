import { ArrowUpRight, Sparkles, Target, Users } from "lucide-react";
import EngagementPlanner from "@/components/interactive-plan";

const stats = [
  {
    label: "Average hook drop-off",
    value: "18%",
    detail: "Benchmark against top 5% creators in your niche."
  },
  {
    label: "Optimal video cadence",
    value: "2.3 / week",
    detail: "Blend long-form anchors with Shorts to stay top-of-feed."
  },
  {
    label: "Comment conversion",
    value: "12.7%",
    detail: "When CTAs invite story sharing, replies triple."
  }
];

const momentumSignals = [
  {
    title: "Hook clarity score",
    description: "Does the first 5 seconds promise a transformation or emotion?"
  },
  {
    title: "Pace signature",
    description: "Alternate tension & relief every 40 seconds to prevent inertia."
  },
  {
    title: "Retention anchor",
    description: "Design a moment around minute 3 that is impossible to skip."
  }
];

const flywheel = [
  {
    name: "Discover",
    points: [
      "Research playlists that consistently trend for your niche.",
      "Reverse-engineer top intros and note pacing beats."
    ]
  },
  {
    name: "Capture",
    points: [
      "Stack pattern interrupts via jump cuts, text flashes, silent pauses.",
      "Pause after delivering value to highlight the CTA."
    ]
  },
  {
    name: "Deepen",
    points: [
      "Respond to comments with short-form replies that reference the video.",
      "Add viewers to a narrative arc: “Episode 2 drops Friday”."
    ]
  }
];

const resourceStacks = [
  {
    headline: "Hook lab",
    bullet: [
      "Film three opening variations per video; run 24-hour CTR split test.",
      "Index best performers in Notion and reuse structures monthly."
    ]
  },
  {
    headline: "Retention radar",
    bullet: [
      "Drop YouTube Studio audience retention graph into our template.",
      "Tag each dip with what happened in the edit to spot weak beats."
    ]
  },
  {
    headline: "Conversation engine",
    bullet: [
      "Stack pinned comment > community tab poll > Instagram story Q&A.",
      "Screenshot viewer wins and feature them in the next upload."
    ]
  }
];

const IconCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
    <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-500/20 text-brand-100">
      {icon}
    </div>
    <p className="text-lg font-semibold text-white">{title}</p>
    <p className="text-sm text-slate-300">{description}</p>
  </div>
);

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-brand-500/10 px-3 py-1 text-brand-100">{children}</span>
);

const HomePage = () => (
  <main className="gradient-bg">
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16 md:px-10">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-10 shadow-2xl shadow-black/60">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-transparent to-purple-500/10" />
        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-6">
            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              <Highlight>Hook frameworks</Highlight>
              <Highlight>Retention science</Highlight>
              <Highlight>Community flywheel</Highlight>
            </div>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Make every viewer stay, react, and return to your YouTube videos.
            </h1>
            <p className="text-base text-slate-200 md:text-lg">
              Deploy a full-stack engagement system: from scroll-stopping intros to community rituals
              that keep comments alive for days.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-200">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-400"
              >
                Blueprint your next upload <ArrowUpRight className="size-4" />
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white/80 transition hover:border-white/40"
              >
                Browse retention labs
              </button>
            </div>
          </div>
          <div className="flex w-full max-w-sm flex-col gap-4 rounded-3xl border border-white/10 bg-white/10 p-6 text-sm text-slate-100 backdrop-blur md:w-auto">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-brand-500/20 p-3 text-brand-200">
                <Sparkles className="size-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-brand-200">Engagement pulse</p>
                <p className="text-lg font-semibold text-white">Creator cockpit</p>
              </div>
            </div>
            <div className="grid gap-3">
              {momentumSignals.map((signal) => (
                <div key={signal.title} className="rounded-2xl bg-slate-900/60 p-3">
                  <p className="font-semibold text-white">{signal.title}</p>
                  <p className="text-xs text-slate-300">{signal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 text-slate-100 md:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-black/40"
          >
            <p className="text-xs uppercase tracking-wide text-brand-200">{item.label}</p>
            <p className="mt-4 text-4xl font-semibold text-white">{item.value}</p>
            <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
          </div>
        ))}
      </section>

      <EngagementPlanner />

      <section className="grid gap-6 md:grid-cols-3">
        <IconCard
          icon={<Target className="size-6" />}
          title="Narrative funnels"
          description="Segment viewer journeys into awareness, obsession, and conversion episodes."
        />
        <IconCard
          icon={<Users className="size-6" />}
          title="Community rituals"
          description="Engineer comment prompts that activate viewer-to-viewer conversation."
        />
        <IconCard
          icon={<ArrowUpRight className="size-6" />}
          title="Feedback loop"
          description="Turn analytics into editing notes with our signal → action frameworks."
        />
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-lg shadow-black/50">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="max-w-xl space-y-3">
            <h2 className="text-3xl font-semibold text-white">3-part engagement flywheel</h2>
            <p className="text-sm text-slate-300">
              Map your viewer lifecycle. Align every edit, comment reply, and CTA with the journey
              they&apos;re currently on.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-slate-200">
            <span className="size-2 rounded-full bg-emerald-400" />
            Updated for 2024 algorithm shifts
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {flywheel.map((stage) => (
            <div key={stage.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-wide text-brand-200">{stage.name}</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {stage.points.map((point) => (
                  <li key={point} className="rounded-xl bg-slate-950/60 p-3 text-xs sm:text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl shadow-black/50">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-white">Retention lab toolkit</h2>
            <p className="text-sm text-slate-300">
              Plug these experiments into your next seven uploads. Track CTR, AVD, and comment depth
              to measure impact.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40"
          >
            Duplicate Notion workspace
          </button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {resourceStacks.map((stack) => (
            <div key={stack.headline} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-wide text-brand-200">{stack.headline}</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {stack.bullet.map((item) => (
                  <li key={item} className="rounded-xl bg-slate-950/60 p-3 text-xs sm:text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  </main>
);

export default HomePage;
