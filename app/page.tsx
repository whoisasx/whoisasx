"use client";

import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Bell,
  BookOpen,
  Code2,
  Database,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Network,
  ShieldCheck,
  Terminal
} from "lucide-react";

const ACTS = ["surface", "signal", "proof", "work", "notes", "stack", "contact"];

const SIGNALS = [
  "agent infra",
  "api pressure",
  "etag guards",
  "sse",
  "websockets",
  "sqlite",
  "rust",
  "go daemon",
  "next.js",
  "distributed systems"
];

const LIFE_THOUGHTS = [
  "Things become more trustworthy when their failure modes are understood.",
  "A calm life is not built by avoiding complexity, but by making complexity visible.",
  "The real work is often not becoming faster, but wasting less energy in the wrong places.",
  "Looking busy matters less than reducing the noise around the work.",
  "Most things break slowly before they break suddenly; early signals deserve attention.",
  "Depth beats display; one thing understood properly is worth more than ten things touched lightly.",
  "Good decisions leave traces: reasons, tradeoffs, and fewer regrets.",
  "Alignment appears when chaos becomes quiet, reliable, and explainable.",
  "Trust is built in the invisible parts: consistency, patience, cleanup, and showing up when nobody is watching.",
  "Reduce noise, preserve signal, and let the truth of the system reveal itself."
];

const METRICS = [
  {
    label: "AO API calls",
    value: "~92%",
    detail: "lower after caching, ETags, tracing, and polling consolidation"
  },
  {
    label: "GraphQL burn",
    value: "~98%",
    detail: "reduced while moving toward larger concurrent agent sessions"
  },
  {
    label: "AO sessions",
    value: "50+",
    detail: "practical sessions per PAT after rate-limit and lifecycle work"
  },
  {
    label: "DSA base",
    value: "1000+",
    detail: "problems solved, LeetCode Knight, 1950+ rating"
  }
];

const WORK = [
  {
    title: "Agent Orchestrator",
    org: "ComposioHQ",
    status: "core contributor",
    icon: Bell,
    href: "https://github.com/ComposioHQ/agent-orchestrator",
    body:
      "I like working near the nervous system of agent products: sessions, signals, notifications, and the small state transitions that decide whether a human trusts the dashboard.",
    mode: "make coordination visible before it turns into chaos",
    impact: [
      "Turned notification delivery into a full product loop: semantic payloads, routing, CLI setup, desktop/web surfaces, integrations, and smoke tests.",
      "Reduced pressure at the source with tracing, ETags, caching, and polling consolidation instead of hiding the problem in UI state.",
      "Spent time on the small reliability edges: liveness races, session status, dashboard child cleanup, YAML/start behavior, and listing correctness."
    ],
    tags: ["TypeScript", "Node", "Next.js", "GitHub API", "notifiers"]
  },
  {
    title: "ReverbCode",
    org: "aoagents",
    status: "core contributor",
    icon: Network,
    href: "https://github.com/aoagents/ReverbCode",
    body:
      "This is the part of engineering I keep coming back to: a local system that runs for a long time, owns its state clearly, and can explain what it is doing without ceremony.",
    mode: "prefer boring durability over clever uncertainty",
    impact: [
      "Worked around SCM observability, provider-neutral observer flows, notification APIs, SSE clients, and delivery runtime.",
      "Helped lay notification foundations for a Go daemon that supervises agent sessions without depending on browser memory.",
      "Kept the backend surface intentionally explicit: readiness, graceful shutdown, PID/port handshake, SQLite records, and lifecycle cleanup."
    ],
    tags: ["Go", "Cobra", "chi", "SQLite", "SSE", "Electron"]
  },
  {
    title: "Agent Guardrails Protocol",
    org: "AgentGuards",
    status: "infra project",
    icon: ShieldCheck,
    href: "https://github.com/AgentGuards/agent-guardrails",
    body:
      "The Web3 work that interests me is not noise. It is where policy, latency, and accountability meet: can an autonomous agent be watched, judged, and stopped fast enough?",
    mode: "treat protocols as enforcement surfaces, not slogans",
    impact: [
      "Used Anchor/Rust, Helius webhooks, a Claude judge, and SSE to connect off-chain observation with on-chain action.",
      "Designed for fast policy response, including suspicious-agent pause paths under three seconds.",
      "Kept the framing practical: threat monitoring, guardrails, and realtime visibility before speculation."
    ],
    tags: ["Rust", "Anchor", "Solana", "Helius", "SSE"]
  },
  {
    title: "Canvora",
    org: "whoisasx",
    status: "product proof",
    icon: Code2,
    href: "https://github.com/whoisasx/Canvora",
    body:
      "Realtime interfaces are psychological before they are technical. If cursors lag, undo feels unsafe, or state jumps, people stop trusting the room.",
    mode: "make collaboration feel quiet, stable, and shared",
    impact: [
      "Built around WebSockets, stable sync, PostgreSQL-backed state, and practical drawing flows instead of feature theatre.",
      "Tracked the experience through latency and concurrency: under 300ms for 95% sessions and support for 1,000+ concurrent users.",
      "Kept this as the main older product because it explains a recurring bias: systems are only good when users can feel the stability."
    ],
    tags: ["Next.js", "WebSockets", "PostgreSQL", "Prisma", "Docker"]
  }
];

const POSTS = [
  {
    title: "AO Notifications System - Implementation Report",
    meta: "12 min · ao / notifications / integrations",
    href: "https://whoisasx.github.io/my-blogs/posts/ao-notifications-system-report/",
    body:
      "Architecture notes for semantic payloads, routing presets, notification center, desktop delivery, Slack, Discord, Gmail, Composio, OpenClaw, webhooks, setup, and smoke tests."
  },
  {
    title: "GitHub API Rate Limiting - Complete Change Log",
    meta: "25 min · github / api / performance",
    href: "https://whoisasx.github.io/my-blogs/posts/github-api-rate-limiting/",
    body:
      "A changelog-style deep dive through REST vs GraphQL pressure, JSONL tracing, ETags, cache design, lifecycle polling, dashboard dedupe, and session-scale constraints."
  }
];

const STACK = [
  { label: "systems", items: ["distributed systems", "api observability", "caching", "realtime delivery"] },
  { label: "backend", items: ["TypeScript", "Go", "Python", "FastAPI", "Node.js", "REST"] },
  { label: "data", items: ["PostgreSQL", "Redis", "SQLite", "Prisma", "SQLAlchemy"] },
  { label: "frontend", items: ["React", "Next.js", "Tailwind", "SSE", "WebSockets"] },
  { label: "infra", items: ["Docker", "GitHub Actions", "Nix", "AWS", "Kubernetes"] },
  { label: "web3", items: ["Rust", "Solana", "Anchor", "Helius"] }
];

const TIMELINE = [
  {
    period: "2021 - 2025",
    title: "B.Tech CSE, NIT Patna",
    detail: "Computer science base, algorithms, operating systems, OOP, and distributed systems."
  },
  {
    period: "2024 - 2025",
    title: "Product systems",
    detail: "Canvora, Memora, realtime collaboration, AI search, and full-stack product loops."
  },
  {
    period: "2025 - 2026",
    title: "Agent + Web3 infra",
    detail: "Solana guardrails, 100xdevs work, devops practice, and agent-safety experiments."
  },
  {
    period: "Mar 2026 - now",
    title: "AO / ReverbCode contributor",
    detail: "Notifications, session lifecycle, API pressure, SCM observability, and local daemon reliability."
  }
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          obs.unobserve(el);
        }
      },
      { threshold: 0.16 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={light ? "kicker light" : "kicker"}>{children}</p>;
}

export default function Home() {
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    let ticking = false;

    const update = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      root.style.setProperty("--p", progress.toFixed(4));
      root.style.setProperty("--chrome", progress > 0.58 ? "#e8f7f2" : "#231a22");
      setDepth(Math.round(progress * 100));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  const signalRef = useReveal();
  const proofRef = useReveal();
  const workRef = useReveal();
  const notesRef = useReveal();
  const stackRef = useReveal();
  const contactRef = useReveal();

  const jumpTo = (label: string) => {
    const el = document.querySelector<HTMLElement>(`[data-screen-label="${label}"]`);
    if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  };

  return (
    <>
      <div className="backdrop" aria-hidden>
        <div className="sky-sheet" />
        <div className="hero-image" />
        <div className="sun" />
        <div className="signal-grid" />
        <div className="water-tint" />
        <div className="vignette" />
        <div className="grain" />
      </div>

      <header className="chrome" aria-label="Portfolio progress">
        <a className="wm" href="#surface" onClick={(event) => {
          event.preventDefault();
          jumpTo("surface");
        }}>
          whoisasx<span>.</span>
        </a>
        <span className="chrome-mid">agent infra / realtime systems / rust protocols</span>
        <span className="depth">{depth}% below surface</span>
      </header>

      <nav className="meter" aria-label="Page sections">
        <div className="meter-track" />
        <div className="meter-fill" />
        <div className="meter-marker" />
        <div className="meter-dots">
          {ACTS.map((act) => (
            <button key={act} className="meter-dot" onClick={() => jumpTo(act)}>
              {act}
            </button>
          ))}
        </div>
      </nav>

      <main className="acts">
        <section id="surface" className="act act-surface" data-screen-label="surface">
          <div className="surface-inner">
            <p className="eyebrow">
              <span>previously: full-stack, devops, web3.</span>
              <span>currently: agent infrastructure.</span>
            </p>
            <h1>Adil Shaikh</h1>
            <p className="role">full-stack engineer with a backend and infrastructure bias</p>
            <p className="hero-copy">
              I work on agent tooling, realtime systems, API-heavy platforms, and developer workflows. The goal is simple:
              make the system observable, reduce unnecessary pressure, and keep the product calm under load.
            </p>
            <div className="hero-actions" aria-label="Primary links">
              <a href="https://github.com/whoisasx" target="_blank" rel="noreferrer">
                <Code2 size={17} aria-hidden /> GitHub
              </a>
              <a href="https://whoisasx.github.io/my-blogs/" target="_blank" rel="noreferrer">
                <BookOpen size={17} aria-hidden /> Notes
              </a>
              <a href="/adilshaikh.pdf" download>
                <FileText size={17} aria-hidden /> Resume
              </a>
              <a href="mailto:adilshaikh4064@gmail.com">
                <Mail size={17} aria-hidden /> Email
              </a>
            </div>
          </div>
          <div className="hero-thoughts" aria-hidden>
            <div className="hero-thought-stage">
              {LIFE_THOUGHTS.map((thought, index) => (
                <span key={thought} style={{ animationDelay: `${index * 4}s` }}>
                  {thought}
                </span>
              ))}
            </div>
          </div>
          <div className="scroll-cue">
            <span>scroll slowly</span>
            <span aria-hidden>↓</span>
          </div>
        </section>

        <section id="signal" className="act act-signal" data-screen-label="signal">
          <div className="signal-noise" aria-hidden>
            {SIGNALS.map((signal, index) => (
              <span key={signal} className={`noise n${index}`}>
                {signal}
              </span>
            ))}
          </div>
          <div ref={signalRef} className="signal-inner reveal">
            <Kicker>[ what keeps showing up ]</Kicker>
            <h2>The interesting work starts when the happy path is already done.</h2>
            <p>
              Most of my recent work lives in the unglamorous parts of products: notification delivery, session
              lifecycle, rate limits, cache behavior, CLI edges, dashboard state, and the exact moment a realtime
              interface stops feeling realtime.
            </p>
            <ul className="signal-list">
              <li><Terminal size={16} aria-hidden /> build the thing end to end, then instrument it</li>
              <li><Activity size={16} aria-hidden /> prefer measured bottlenecks over vague scale claims</li>
              <li><Database size={16} aria-hidden /> keep durable state small, explicit, and recoverable</li>
            </ul>
          </div>
        </section>

        <section id="proof" className="act act-proof" data-screen-label="proof">
          <div ref={proofRef} className="proof-inner reveal">
            <Kicker>[ receipts, not adjectives ]</Kicker>
            <h2>Some numbers are useful because they explain the shape of the work.</h2>
            <div className="metric-grid">
              {METRICS.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <p>{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="act act-work" data-screen-label="work">
          <div ref={workRef} className="work-inner reveal">
            <Kicker>[ current surface area ]</Kicker>
            <h2>Fewer projects. Deeper signal.</h2>
            <div className="work-list">
              {WORK.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="work-card">
                    <div className="work-head">
                      <span className="work-icon"><Icon size={18} aria-hidden /></span>
                      <div>
                        <p>{item.org} · {item.status}</p>
                        <h3>{item.title}</h3>
                      </div>
                      <a className="icon-link" href={item.href} target="_blank" rel="noreferrer" aria-label={`Open ${item.title}`}>
                        <ArrowUpRight size={17} aria-hidden />
                      </a>
                    </div>
                    <div className="work-core">
                      <p className="work-body">{item.body}</p>
                      <div className="work-mode">
                        <span>operating mode</span>
                        <strong>{item.mode}</strong>
                      </div>
                    </div>
                    <ul className="work-points">
                      {item.impact.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                    <div className="tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="notes" className="act act-notes" data-screen-label="notes">
          <div ref={notesRef} className="notes-inner reveal">
            <Kicker>[ writing ]</Kicker>
            <h2>Engineering notes, deep dives, and change logs.</h2>
            <p className="notes-copy">
              My writing is mostly implementation reports: what broke, what changed, which tradeoffs were real, and
              how the final system behaved.
            </p>
            <div className="post-grid">
              {POSTS.map((post) => (
                <a key={post.title} className="post-card" href={post.href} target="_blank" rel="noreferrer">
                  <span><FileText size={16} aria-hidden /> {post.meta}</span>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <em>read note <ArrowUpRight size={13} aria-hidden /></em>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="act act-stack" data-screen-label="stack">
          <div ref={stackRef} className="stack-inner reveal">
            <Kicker light>[ stack and path ]</Kicker>
            <h2>Tools change. The bias stays: ship, measure, simplify.</h2>
            <div className="stack-layout">
              <div className="stack-groups">
                {STACK.map((group) => (
                  <div key={group.label} className="stack-row">
                    <span>{group.label}</span>
                    <div>
                      {group.items.map((item) => (
                        <em key={item}>{item}</em>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="timeline">
                {TIMELINE.map((item) => (
                  <div key={item.title} className="time-row">
                    <span>{item.period}</span>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="act act-contact" data-screen-label="contact">
          <div ref={contactRef} className="contact-inner reveal">
            <Kicker light>[ bottom of the page ]</Kicker>
            <h2>Still around. Still building.</h2>
            <p>
              I am most interested in agent infrastructure, reliable developer tooling, realtime systems, and products
              where the backend has to quietly do the right thing.
            </p>
            <div className="exploring" aria-label="Currently exploring">
              <div className="explore-copy">
                <span>currently exploring</span>
                <h3>letting two difficult directions breathe</h3>
                <p>
                  one pulls me toward how intelligence forms from first principles; the other toward markets where
                  time, memory, and decision-making become almost the same thing.
                </p>
              </div>
              <div className="explore-paths">
                <div>
                  <span>depth</span>
                  <strong>ML core</strong>
                  <em>models, math, training loops, and the parts hidden below APIs</em>
                </div>
                <div>
                  <span>latency</span>
                  <strong>C++ exchanges</strong>
                  <em>matching engines, memory, cache lines, and time as a budget</em>
                </div>
              </div>
            </div>
            <div className="contact-grid">
              <a href="mailto:adilshaikh4064@gmail.com">
                <Mail size={17} aria-hidden />
                <span>email</span>
                <strong>adilshaikh4064@gmail.com</strong>
              </a>
              <a href="https://github.com/whoisasx" target="_blank" rel="noreferrer">
                <Code2 size={17} aria-hidden />
                <span>github</span>
                <strong>@whoisasx</strong>
              </a>
              <a href="https://www.linkedin.com/in/adilshaikh4064/" target="_blank" rel="noreferrer">
                <Network size={17} aria-hidden />
                <span>linkedin</span>
                <strong>/in/adilshaikh4064</strong>
              </a>
              <a href="https://leetcode.com/u/adilshaikh4064/" target="_blank" rel="noreferrer">
                <GraduationCap size={17} aria-hidden />
                <span>leetcode</span>
                <strong>1950+ rating</strong>
              </a>
              <a href="https://x.com/whoisasx" target="_blank" rel="noreferrer">
                <ArrowUpRight size={17} aria-hidden />
                <span>x</span>
                <strong>@whoisasx</strong>
              </a>
              <a href="https://whoisasx.vercel.app/" target="_blank" rel="noreferrer">
                <MapPin size={17} aria-hidden />
                <span>base</span>
                <strong>Noida · Hyderabad · Mumbai · Patna</strong>
              </a>
            </div>
            <button className="back-up" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              back to surface
            </button>
            <p className="sign">made with Next.js · refreshed for 2026 · whoisasx</p>
          </div>
        </section>
      </main>
    </>
  );
}
