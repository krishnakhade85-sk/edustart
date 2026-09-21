import type { Metadata } from "next";
import Link from "next/link";
import { NavigationBar } from "@/components/nav/NavigationBar";

export const metadata: Metadata = {
  title: "EduStart — A World to Explore",
  description:
    "A safe, age-adaptive digital world where children can think, discover, create, make, ask, and explore — powered by curiosity.",
};

/* ── Zone cards — the seven core areas of EduStart ── */
const ZONES = [
  {
    id: "discover",
    label: "Discover",
    emoji: "🔭",
    tagline: "25 worlds. Infinite curiosity.",
    description:
      "Explore space, animals, machines, art, history, and more. Every experience leads somewhere unexpected.",
    href: "/discover",
    className: "zone-discover",
    delay: "0ms",
  },
  {
    id: "think",
    label: "Think",
    emoji: "🧠",
    tagline: "Patterns. Puzzles. Possibilities.",
    description:
      "Reasoning challenges across spatial, numerical, logical, and creative thinking. Not a score — a journey.",
    href: "/think",
    className: "zone-think",
    delay: "60ms",
  },
  {
    id: "create",
    label: "Create",
    emoji: "🎨",
    tagline: "No wrong answers.",
    description:
      "Draw, write stories, compose, design, imagine. A blank canvas that grows with you.",
    href: "/create",
    className: "zone-create",
    delay: "120ms",
  },
  {
    id: "make",
    label: "Make",
    emoji: "🔧",
    tagline: "Build. Break. Try again.",
    description:
      "Build a bicycle. Engineer a bridge. Design a rocket. Experiment until it works — and then wonder why.",
    href: "/make",
    className: "zone-make",
    delay: "180ms",
  },
  {
    id: "ask",
    label: "Ask",
    emoji: "💬",
    tagline: "Questions, not answers.",
    description:
      "An AI guide that helps you think — not think for you. Ask anything. The guide asks back.",
    href: "/ask",
    className: "zone-ask",
    delay: "240ms",
  },
  {
    id: "journey",
    label: "My Journey",
    emoji: "🗺️",
    tagline: "Here's what you've explored.",
    description:
      "Your curiosity map. See the territories you've visited, the questions you've asked, the things you've built.",
    href: "/journey",
    className: "zone-journey",
    delay: "300ms",
  },
  {
    id: "world",
    label: "World at Your Age",
    emoji: "🌍",
    tagline: "Same age. Different world.",
    description:
      "What does an 11-year-old's day look like in Mumbai? Tokyo? Lagos? Discover everyday childhood across the planet.",
    href: "/world",
    className: "zone-world",
    delay: "360ms",
  },
] as const;

/* ── Age bands ── */
const AGE_BANDS = [
  { range: "4–6",   label: "Early Explorer",       color: "#f59e0b" },
  { range: "7–9",   label: "Curious Learner",       color: "#10b981" },
  { range: "10–12", label: "Active Thinker",         color: "#06b6d4" },
  { range: "13–15", label: "Independent Explorer",   color: "#7c3aed" },
  { range: "16–17", label: "Deep Diver",             color: "#f43f5e" },
] as const;

/* ── Static star positions (avoids hydration mismatch) ── */
const STARS = [
  { top: "8%",  left: "12%", size: 2, delay: "0s",    duration: "3.2s" },
  { top: "15%", left: "80%", size: 1, delay: "0.4s",  duration: "2.8s" },
  { top: "28%", left: "55%", size: 2, delay: "0.8s",  duration: "3.6s" },
  { top: "42%", left: "5%",  size: 1, delay: "1.2s",  duration: "2.4s" },
  { top: "60%", left: "90%", size: 2, delay: "0.6s",  duration: "3.1s" },
  { top: "72%", left: "35%", size: 1, delay: "1.6s",  duration: "2.7s" },
  { top: "85%", left: "65%", size: 2, delay: "0.2s",  duration: "3.4s" },
  { top: "20%", left: "25%", size: 1, delay: "2.0s",  duration: "2.9s" },
  { top: "50%", left: "72%", size: 2, delay: "0.9s",  duration: "3.3s" },
  { top: "38%", left: "88%", size: 1, delay: "1.4s",  duration: "2.6s" },
  { top: "90%", left: "18%", size: 2, delay: "0.3s",  duration: "3.8s" },
  { top: "5%",  left: "45%", size: 1, delay: "1.8s",  duration: "2.5s" },
] as const;

export default function HomePage() {
  return (
    <>
      <NavigationBar />

      {/* Star field */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {STARS.map((star, i) => (
          <span
            key={i}
            className="star animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <main data-main style={{ position: "relative", zIndex: 1 }}>

        {/* ══ HERO ══════════════════════════════════════════════════ */}
        <section
          className="relative min-h-[92dvh] flex flex-col items-center justify-center px-4 text-center"
          aria-labelledby="hero-heading"
        >
          {/* Glow orbs */}
          <div
            aria-hidden="true"
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Badge */}
          <div className="animate-slide-up" style={{ animationDelay: "0ms" }}>
            <span
              className="inline-flex items-center gap-2 text-xs font-800 tracking-widest uppercase px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.35)",
                color: "#c084fc",
                letterSpacing: "0.12em",
              }}
            >
              <span className="animate-twinkle">✦</span>
              Safe · Age-Adaptive · Curiosity-First
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="animate-slide-up font-black leading-none tracking-tight mb-6"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              animationDelay: "80ms",
              maxWidth: "900px",
            }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #f8f4ff 0%, #c084fc 40%, #818cf8 70%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "block",
              }}
            >
              A world to explore.
            </span>
            <span
              style={{
                background: "linear-gradient(135deg, #fbbf24 0%, #f97316 60%, #f43f5e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "block",
              }}
            >
              A mind to discover.
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="animate-slide-up text-lg sm:text-xl leading-relaxed max-w-2xl mb-10"
            style={{
              color: "var(--color-text-secondary)",
              animationDelay: "160ms",
            }}
          >
            EduStart is a safe, age-adaptive digital space where children aged 4–17
            can{" "}
            <strong style={{ color: "var(--color-text-primary)", fontWeight: 700 }}>
              think, discover, create, make, ask, and explore
            </strong>{" "}
            — without being told who they are.
          </p>

          {/* CTA buttons */}
          <div
            className="animate-slide-up flex flex-col sm:flex-row gap-3 justify-center"
            style={{ animationDelay: "240ms" }}
          >
            <Link href="/start" className="btn-primary text-base">
              Start Exploring ✦
            </Link>
            <Link href="/parent" className="btn-secondary text-base">
              Parent & Guardian →
            </Link>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
            aria-hidden="true"
          >
            <div
              className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
              style={{ border: "1.5px solid var(--color-border)" }}
            >
              <div
                className="w-1 h-2.5 rounded-full animate-float"
                style={{
                  background: "var(--color-violet-light)",
                  animationDelay: "0.3s",
                }}
              />
            </div>
          </div>
        </section>

        {/* ══ PHILOSOPHY ════════════════════════════════════════════ */}
        <section
          className="py-20 px-4 max-w-4xl mx-auto text-center"
          aria-labelledby="philosophy-heading"
        >
          <blockquote>
            <p
              className="font-black leading-snug mb-6"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                color: "var(--color-text-primary)",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.25)" }}>"</span>
              The AI should help them explore.
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #c084fc 0%, #38bdf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                It should never become the destination.
              </span>
              <span style={{ color: "rgba(255,255,255,0.25)" }}>"</span>
            </p>
            <footer
              className="text-sm font-700 tracking-wide uppercase"
              style={{ color: "var(--color-text-muted)", letterSpacing: "0.1em" }}
            >
              EduStart Core Philosophy
            </footer>
          </blockquote>
        </section>

        {/* ══ ZONES GRID ════════════════════════════════════════════ */}
        <section
          className="py-16 px-4 max-w-7xl mx-auto"
          aria-labelledby="zones-heading"
        >
          <div className="text-center mb-14">
            <h2
              id="zones-heading"
              className="font-black mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              Seven worlds.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #fbbf24 0%, #f97316 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                One explorer.
              </span>
            </h2>
            <p
              className="text-base max-w-xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Every zone is a different kind of curiosity. Start anywhere. Follow what interests you.
            </p>
          </div>

          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 list-none"
            role="list"
          >
            {ZONES.map((zone) => (
              <li key={zone.id} className={zone.id === "world" ? "sm:col-span-2 lg:col-span-1" : ""}>
                <Link
                  href={zone.href}
                  id={`zone-${zone.id}`}
                  className={`glass zone-card ${zone.className} flex flex-col gap-3 p-6 h-full no-underline block`}
                  style={{
                    animationDelay: zone.delay,
                    textDecoration: "none",
                    color: "inherit",
                    minHeight: "200px",
                  }}
                >
                  {/* Icon */}
                  <span
                    className="zone-icon text-4xl block"
                    role="img"
                    aria-label={zone.label}
                  >
                    {zone.emoji}
                  </span>

                  {/* Label */}
                  <div>
                    <span
                      className="text-xs font-800 tracking-widest uppercase block mb-1"
                      style={{ color: "var(--zone-color)", letterSpacing: "0.1em" }}
                    >
                      {zone.label}
                    </span>
                    <strong
                      className="text-base font-800 block"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {zone.tagline}
                    </strong>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {zone.description}
                  </p>

                  {/* Arrow */}
                  <span
                    className="text-sm font-700 mt-auto"
                    style={{ color: "var(--zone-color)" }}
                    aria-hidden="true"
                  >
                    Explore →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ══ AGE BANDS ══════════════════════════════════════════════ */}
        <section
          className="py-20 px-4 max-w-5xl mx-auto"
          aria-labelledby="ages-heading"
        >
          <div className="text-center mb-12">
            <h2
              id="ages-heading"
              className="font-black mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              Every age.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #22d3ee 0%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                A different experience.
              </span>
            </h2>
            <p
              className="text-base max-w-lg mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              The same topic — a jet engine, a bicycle, the ocean — explained
              differently for every developmental stage. Not shorter. Rebuilt.
            </p>
          </div>

          <ul
            className="flex flex-col sm:flex-row gap-4 justify-center list-none"
            role="list"
          >
            {AGE_BANDS.map((band) => (
              <li key={band.range}>
                <div
                  className="glass flex flex-col items-center gap-2 px-6 py-5 rounded-2xl text-center"
                  style={{
                    borderColor: `color-mix(in srgb, ${band.color} 25%, transparent)`,
                    minWidth: "120px",
                  }}
                >
                  <span
                    className="text-2xl font-black"
                    style={{ color: band.color }}
                  >
                    {band.range}
                  </span>
                  <span
                    className="text-xs font-700 leading-tight"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {band.label}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Age adaptation example */}
          <div
            className="glass-strong mt-12 p-8 rounded-3xl"
            style={{ border: "1px solid rgba(124,58,237,0.20)" }}
          >
            <p
              className="text-xs font-800 uppercase tracking-widest mb-6 text-center"
              style={{ color: "var(--color-violet-light)", letterSpacing: "0.12em" }}
            >
              Example: "How does a jet fly?"
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  age: "4–6",
                  color: "#f59e0b",
                  text: "An engine pushes the airplane forward very fast. That push is called thrust.",
                },
                {
                  age: "10–12",
                  color: "#06b6d4",
                  text: "Explore lift, drag, thrust, and weight — four forces that work against each other to keep a jet airborne.",
                },
                {
                  age: "16–17",
                  color: "#7c3aed",
                  text: "Angle of attack, pressure distribution, propulsion systems, and aircraft performance curves.",
                },
              ].map((ex) => (
                <div
                  key={ex.age}
                  className="rounded-xl p-4"
                  style={{
                    background: `color-mix(in srgb, ${ex.color} 8%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${ex.color} 20%, transparent)`,
                  }}
                >
                  <span
                    className="age-badge mb-3"
                    style={{
                      background: `color-mix(in srgb, ${ex.color} 20%, transparent)`,
                      color: ex.color,
                    }}
                  >
                    Age {ex.age}
                  </span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {ex.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PROMISE ════════════════════════════════════════════════ */}
        <section
          className="py-24 px-4 max-w-4xl mx-auto text-center"
          aria-labelledby="promise-heading"
        >
          <div
            className="glass-strong rounded-3xl p-12"
            style={{
              border: "1px solid rgba(124,58,237,0.25)",
              boxShadow: "0 0 80px rgba(124,58,237,0.10)",
            }}
          >
            <span className="text-4xl mb-6 block">✦</span>
            <h2
              id="promise-heading"
              className="font-black mb-6"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
            >
              The system will never say:
              <br />
              <span
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "0.75em",
                  fontStyle: "italic",
                }}
              >
                "This is who you are."
              </span>
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Instead, it will say:{" "}
              <em style={{ color: "var(--color-text-primary)", fontStyle: "normal", fontWeight: 700 }}>
                "Here's what you've explored. Here's what you tried. Here's what you seem curious about.
                And here's something you haven't discovered yet."
              </em>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/start" className="btn-primary">
                Begin the journey ✦
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn more
              </Link>
            </div>
          </div>
        </section>

        {/* ══ FOOTER ═════════════════════════════════════════════════ */}
        <footer
          className="py-10 px-4 text-center"
          style={{ borderTop: "1px solid var(--color-border)" }}
          role="contentinfo"
        >
          <p
            className="text-xs font-600"
            style={{ color: "var(--color-text-muted)" }}
          >
            EduStart — A personalized map of discovery, not an AI destination.
            <br className="sm:hidden" />
            {" "}Built with care for children aged 4–17.{" "}
            <Link
              href="/parent"
              style={{ color: "var(--color-text-secondary)" }}
              className="underline-offset-2 hover:underline"
            >
              Parent & Guardian area →
            </Link>
          </p>
        </footer>

      </main>
    </>
  );
}
