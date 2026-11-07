# Labs — Agentic AI Applications with Claude Code (TGS-2025052468)

Hands-on labs for the WSQ course **Agentic AI Applications with Claude Code**.

**Register for the course:** [tertiarycourses.com.sg](https://www.tertiarycourses.com.sg/wsq-agentic-ai-applications-with-claude-code.html)

---

## One topic, one activity, one lab, one PP task

Each lab is a self-contained folder. They build on one another: Lab 1 creates the
website that Labs 2 and 3 then extend.

| Lab | Topic | What you do | Evidence for | Folder |
|---|---|---|---|---|
| **1** | Topic 1 — Claude Code Fundamentals | Build and deploy a site with the **7-step workflow** | PP Task 1 | [`lab1-seven-steps/`](lab1-seven-steps/) |
| **2** | Topic 2 — Commands, Tools and Skills | A **custom command**, **Playwright MCP** and a **skill-driven redesign** | PP Task 2 | [`lab2-commands-tools-skills/`](lab2-commands-tools-skills/) |
| **3** | Topic 3 — Agents, Hooks and Security | A **sub agent**, your own **hooks**, and the **security** controls | PP Task 3 | [`lab3-agents-hooks-security/`](lab3-agents-hooks-security/) |

---

## The thread running through all three

Every lab demonstrates a different **trigger**: the thing that causes Claude to load
or run something. The whole course is organised around that idea.

| Mechanism | Trigger | Lab |
|---|---|---|
| `CLAUDE.md` | Every session | 1 (Step 4) |
| Tools / MCP | On demand | 2 |
| Skills | On demand | 2 |
| Slash commands | Manually | 2 |
| Sub agents | By delegation | 3 |
| Hooks | By event | 3 |
| `/loop` | On a schedule | 3 (take-home) |

---

## Before you start

- **Claude Code** signed in — terminal, VS Code extension, Desktop app, or the cloud at [claude.ai/code](https://claude.ai/code)
- **Node.js** (LTS) — [nodejs.org](https://nodejs.org)
- A **GitHub account**
- A browser

```bash
claude --version
node --version
```

---

## How to work through them

Start at [`lab1-seven-steps/README.md`](lab1-seven-steps/README.md) and follow
the steps in order. Every step file gives you:

- the **exact prompt** to paste
- what you should see happen
- a **checkpoint** to confirm before moving on

Do not skip the checkpoints — later labs assume the earlier ones actually
worked.

---

## Sample sites

Finished builds you can read for reference live in
[`lab1-seven-steps/sample-sites/`](lab1-seven-steps/sample-sites/) — a bridal
booking page, an interior-design studio site, and a lead-generation app. The
lab's own reference deliverable is in
[`lab1-seven-steps/reference-site/`](lab1-seven-steps/reference-site/).

---

## Legacy activity guide

The earlier single-file walkthrough is kept at
[`course-activities.md`](course-activities.md) for reference. The three lab
folders above supersede it.

---

© Tertiary Infotech Academy Pte Ltd · UEN 201200696W
