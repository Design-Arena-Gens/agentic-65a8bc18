/* eslint-disable react/no-array-index-key */
"use client";

import { useMemo, useState } from "react";

type Persona = "educational" | "entertainment" | "vlog" | "gaming" | "review";
type ProductionLevel = "solo" | "small-team" | "studio";
type GrowthGoal = "retention" | "subscribers" | "community";

const personaLabels: Record<Persona, string> = {
  educational: "Educational explainer",
  entertainment: "Entertainment / comedy",
  vlog: "Lifestyle vlog",
  gaming: "Gaming playthrough",
  review: "Product review"
};

const productionLabels: Record<ProductionLevel, string> = {
  solo: "Solo creator",
  "small-team": "Small team",
  studio: "Studio setup"
};

const goalLabels: Record<GrowthGoal, string> = {
  retention: "Improve watch time",
  subscribers: "Increase subscribers",
  community: "Boost comments & shares"
};

const hookIdeas: Record<Persona, string[]> = {
  educational: [
    "Start with a surprising stat and pose a question it creates.",
    "Promise an outcome within a timeframe (e.g., “In the next 3 minutes…”).",
    "Use a before/after visual right at the beginning."
  ],
  entertainment: [
    "Cold open with the funniest payoff moment in the video.",
    "Break the fourth wall and give the audience a mission.",
    "Use a trending meme format but twist it to fit your theme."
  ],
  vlog: [
    "Tease the day's biggest moment within the first 5 seconds.",
    "Use quick snapshots of key events to set expectations.",
    "Address the viewer directly with an intimate question."
  ],
  gaming: [
    "Show the clutch moment instantly, then rewind to the start.",
    "Challenge the audience to beat your score or speed.",
    "Hook with a bold claim about the strategy you're about to prove."
  ],
  review: [
    "Lead with the verdict, then explain how you got there.",
    "Reveal an unexpected strength/weakness up front.",
    "Compare to a popular alternative and promise a side-by-side."
  ]
};

const retentionMoves: Record<ProductionLevel, string[]> = {
  solo: [
    "Batch record B-roll and drop visuals every 7–10 seconds.",
    "Use jump cuts on every sentence or idea change.",
    "Layer captions with bold keywords to reset attention."
  ],
  "small-team": [
    "Mix A-roll with over-the-shoulder shots to break monotony.",
    "Design chapter cards with on-brand motion graphics.",
    "Score the edit with dynamic music and audible beat drops."
  ],
  studio: [
    "Switch between multiple camera angles to reinforce key lines.",
    "Integrate motion-tracked UI callouts around you.",
    "Use light changes synced with topic transitions."
  ]
};

const goalPlays: Record<GrowthGoal, string[]> = {
  retention: [
    "Insert a “viewer checkpoint” every 90 seconds summarizing key value.",
    "Set up open loops by teasing what happens later before ad breaks.",
    "Cut the outro and replace with a teaser for the next video."
  ],
  subscribers: [
    "Frame the subscribe CTA as membership into a named community.",
    "Tie the subscribe button to a tangible reward or challenge.",
    "Use pattern interrupts: fast j-cut to you pointing at a graphic CTA."
  ],
  community: [
    "Ask a polarizing but respectful question and pin the best answer.",
    "Run a micro-challenge that requires viewers to duet or stitch.",
    "Highlight a viewer comment mid-video and invite more responses."
  ]
};

const cadenceTemplates = [
  {
    label: "Momentum Mode (3x week)",
    description: "Best when experimenting with formats and trending topics.",
    beats: [
      "Monday: Short-form teaser introducing the week's narrative.",
      "Wednesday: Flagship video with layered storytelling (8–12 min).",
      "Saturday: Live Q&A or premiere to harvest community insights."
    ]
  },
  {
    label: "Authority Builder (2x week)",
    description: "Ideal for evergreen educational or review content.",
    beats: [
      "Tuesday: Deep-dive tutorial with chapters and downloadable resources.",
      "Friday: Case study or comparison video; add lead magnet CTA."
    ]
  },
  {
    label: "Event Pulse (1x week + Shorts)",
    description: "Perfect if you rely on larger, cinematic releases.",
    beats: [
      "Wed/Thu: Cinematic main video with high production polish.",
      "Mon/Fri: Shorts recapping highlights or reacting to comments.",
      "Sun: Community post surveying next video decision."
    ]
  }
];

const InsightBadge = ({ title, detail }: { title: string; detail: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner backdrop-blur">
    <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">{title}</p>
    <p className="mt-2 text-base text-slate-100">{detail}</p>
  </div>
);

const SectionTitle = ({ label }: { label: string }) => (
  <h3 className="text-lg font-semibold text-brand-100">{label}</h3>
);

type CustomPlan = {
  hook: string[];
  retention: string[];
  goals: string[];
};

const buildPlan = (persona: Persona, production: ProductionLevel, goal: GrowthGoal): CustomPlan => ({
  hook: hookIdeas[persona],
  retention: retentionMoves[production],
  goals: goalPlays[goal]
});

const EngagementPlanner = () => {
  const [persona, setPersona] = useState<Persona>("educational");
  const [production, setProduction] = useState<ProductionLevel>("solo");
  const [goal, setGoal] = useState<GrowthGoal>("retention");

  const plan = useMemo(() => buildPlan(persona, production, goal), [persona, production, goal]);

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl shadow-black/60 backdrop-blur-lg">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md space-y-3">
          <h2 className="text-2xl font-semibold text-white">Custom Engagement Engine</h2>
          <p className="text-sm text-slate-300">
            Mix and match your format, resources, and growth objective. We&apos;ll map the hooks,
            retention beats, and conversion plays that match.
          </p>
        </div>
        <div className="grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
          <label className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
            <span className="font-semibold text-white">Channel vibe</span>
            <select
              className="rounded-xl border border-white/10 bg-slate-950/60 p-2"
              value={persona}
              onChange={(event) => setPersona(event.target.value as Persona)}
            >
              {Object.entries(personaLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
            <span className="font-semibold text-white">Production muscle</span>
            <select
              className="rounded-xl border border-white/10 bg-slate-950/60 p-2"
              value={production}
              onChange={(event) => setProduction(event.target.value as ProductionLevel)}
            >
              {Object.entries(productionLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
            <span className="font-semibold text-white">Primary goal</span>
            <select
              className="rounded-xl border border-white/10 bg-slate-950/60 p-2"
              value={goal}
              onChange={(event) => setGoal(event.target.value as GrowthGoal)}
            >
              {Object.entries(goalLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-brand-500/20 bg-brand-500/10 p-6">
          <SectionTitle label="Hook scripts" />
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            {plan.hook.map((item, index) => (
              <li key={`hook-${index}`} className="rounded-xl bg-white/5 p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-teal-400/20 bg-teal-400/10 p-6">
          <SectionTitle label="Retention moves" />
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            {plan.retention.map((item, index) => (
              <li key={`retention-${index}`} className="rounded-xl bg-white/5 p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-orange-400/20 bg-orange-400/10 p-6">
          <SectionTitle label="Conversion plays" />
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            {plan.goals.map((item, index) => (
              <li key={`goal-${index}`} className="rounded-xl bg-white/5 p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {cadenceTemplates.map((cadence) => (
          <InsightBadge
            key={cadence.label}
            title={cadence.label}
            detail={[cadence.description, ...cadence.beats].join(" ")}
          />
        ))}
      </div>
    </section>
  );
};

export default EngagementPlanner;
