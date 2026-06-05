# Adil Shaikh

I build full-stack products with a backend bias. Lately, most of my attention sits near agent infrastructure, realtime systems, API pressure, and the small reliability edges that decide whether people trust a product.

Busy is a weak signal. Calm systems tell the truth.

## Now

- Core contributor at [ComposioHQ/agent-orchestrator](https://github.com/ComposioHQ/agent-orchestrator), working around notifications, session lifecycle, API pressure, dashboard state, and product reliability loops.
- Core contributor at [aoagents/ReverbCode](https://github.com/aoagents/ReverbCode), focused on local agent runtime behavior, SCM observability, SSE clients, notifications, and daemon reliability.
- Writing implementation notes at [whoisasx.github.io/my-blogs](https://whoisasx.github.io/my-blogs/).
- Exploring ML core and low-latency exchanges in C++.

## How I Think

| Thought | What it usually means in code |
| --- | --- |
| Make failure visible early. | Logs, traces, status, retries, cleanup, and clear state transitions matter before clever abstractions. |
| Realtime UX is trust management. | Latency, cursors, notifications, and stale state are psychological problems before they are UI problems. |
| Backpressure is a product feature. | Systems should tell users and developers when pressure is real instead of pretending everything is fine. |
| Durable beats dramatic. | Boring state, graceful shutdown, cache correctness, and recovery paths are usually where good software lives. |
| Depth compounds quietly. | One system understood properly is worth more than ten technologies touched lightly. |

## Current Surface Area

| Work | What it really is | Why I care |
| --- | --- | --- |
| [Agent Orchestrator](https://github.com/ComposioHQ/agent-orchestrator) | Agent sessions, notifications, GitHub API pressure, dashboard state, and integration flows. | Agent products need coordination that humans can actually trust. |
| [ReverbCode](https://github.com/aoagents/ReverbCode) | Local runtime, daemon reliability, observer flows, SSE clients, SQLite records, and cleanup paths. | Long-running tools should stay explainable after the browser stops being the source of truth. |
| [Agent Guardrails Protocol](https://github.com/AgentGuards/agent-guardrails) | Rust, Anchor, Solana, Helius webhooks, realtime policy response, and agent safety experiments. | Protocols are interesting when they enforce behavior, not when they only create noise. |
| [Canvora](https://github.com/whoisasx/Canvora) | Realtime collaborative canvas with WebSockets, stable sync, and PostgreSQL-backed state. | Collaboration tools are only good when the room feels stable. |

## Field Notes

- [AO Notifications System - Implementation Report](https://whoisasx.github.io/my-blogs/posts/ao-notifications-system-report/)
- [GitHub API Rate Limiting - Complete Change Log](https://whoisasx.github.io/my-blogs/posts/github-api-rate-limiting/)

Writing is where I slow the system down enough to understand it: what broke, what changed, which tradeoffs were real, and what the final behavior says about the architecture.

## Stack I Reach For

```txt
languages  TypeScript, Go, Python, Rust, C++
backend    Node.js, FastAPI, REST, SSE, WebSockets
data       PostgreSQL, Redis, SQLite, Prisma, SQLAlchemy
infra      Docker, GitHub Actions, Nix, AWS, Kubernetes
web3       Solana, Anchor, Helius
frontend   React, Next.js, Tailwind
```

## Routes

- Website: [whoisasx.vercel.app](https://whoisasx.vercel.app/)
- Notes: [whoisasx.github.io/my-blogs](https://whoisasx.github.io/my-blogs/)
- LinkedIn: [adilshaikh4064](https://www.linkedin.com/in/adilshaikh4064/)
- X: [@whoisasx](https://x.com/whoisasx)
- Email: [adilshaikh4064@gmail.com](mailto:adilshaikh4064@gmail.com)

<details>
<summary>About this repo</summary>

This repository is special because its name matches my GitHub username, so this `README.md` renders on my GitHub profile.

It also contains the current portfolio app.

```bash
npm install
npm run dev
```

Verification:

```bash
npm run lint
npm run build
npm audit --omit=dev
```

</details>
