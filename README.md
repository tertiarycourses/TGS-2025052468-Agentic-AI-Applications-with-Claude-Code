<div align="center">

# 🤖 WSQ – Agentic AI Applications with Claude Code

**Go from a plain-English goal to a deployed, tested application — in one day.**

[![Register](https://img.shields.io/badge/📝_Register-Enrol_Now-D97757?style=for-the-badge)](https://www.tertiarycourses.com.sg/wsq-agentic-ai-applications-with-claude-code.html)
[![WSQ Funded](https://img.shields.io/badge/WSQ-SkillsFuture_Funded-3A7D7B?style=flat-square)](https://www.tertiarycourses.com.sg/wsq-agentic-ai-applications-with-claude-code.html)
[![Course Code](https://img.shields.io/badge/TGS-2025052468-21201C?style=flat-square)](https://www.tertiarycourses.com.sg/wsq-agentic-ai-applications-with-claude-code.html)
[![Duration](https://img.shields.io/badge/Duration-1_Day_(8h)-6B6862?style=flat-square)](#course-details)
[![Level](https://img.shields.io/badge/Level-Beginner_to_Intermediate-6B6862?style=flat-square)](#course-details)
[![Assessment](https://img.shields.io/badge/Assessment-WA_%2B_PP-6B6862?style=flat-square)](#course-details)

**[📝 Register for this course →](https://www.tertiarycourses.com.sg/wsq-agentic-ai-applications-with-claude-code.html)**

</div>

---

## About This Course

A hands-on, one-day WSQ course on building real applications with **Claude Code**, Anthropic's agentic coding tool. Learners go from a plain-English goal to a deployed, tested website using the agentic loop, context engineering, custom slash commands, MCP tools, agent skills, sub agents, hooks and AI security controls.

The course follows one simple structure: one topic, one activity, one lab, one Practical Performance task, culminating in final testing, security and deployment checks. It suits developers, technical professionals and technically-minded non-developers who want to work productively with an AI coding agent.

## Learning Outcomes

By the end of this course, learners will be able to:

| # | Learning Outcome |
|---|---|
| **LO1** | Explain the agentic loop and apply context-engineering techniques in Claude Code. |
| **LO2** | Create custom slash commands, connect MCP tools and apply agent skills to extend Claude Code. |
| **LO3** | Use sub agents and hooks to automate specialised tasks, and apply AI security controls. |
| **LO4** | Build, deploy, test, secure and optimise a real website end-to-end with Claude Code. |

## Course Topics & Labs

| Topic | Covers | Activity & lab | PP task |
|---|---|---|---|
| **1 — Claude Code Fundamentals** | The Claude product family — Claude (Chat + Cowork) vs Claude Code; a brief history of AI, 2023–2026 (prompt → context → harness engineering → AI agents); what makes an AI agent — model + harness + tokens, and the seven parts around the model; setup on four surfaces (Terminal, VS Code, Desktop, and the cloud at `claude.ai/code`); pricing and plan limits (`/usage`); the agentic loop & built-in tools; context engineering and the context window (reading the `/context` breakdown, `/compact`, `/clear`); memory files (`CLAUDE.md` vs auto memory, `/init`, `/memory`); permission modes, including the Claude Desktop mode menu, and the dangers of bypass permissions; sessions, scheduled tasks (Routines) and `/goal`; the 7-step build workflow. | **Activity 1 · [Lab 1](labs/lab1-seven-steps/)** — build & deploy a website with the 7-step workflow | **Task 1** — the live site |
| **2 — Commands, Tools and Skills** | The `.claude` directory; custom slash commands and arguments; MCP architecture and connecting servers; Playwright MCP; agent skills and installation; inside a `SKILL.md` (front matter: `name`, `description`); `SKILL.md` vs `CLAUDE.md`. | **Activity 2 · [Lab 2](labs/lab2-commands-tools-skills/)** — a custom command, Playwright MCP tests, a skill-driven redesign | **Task 2** — the redesigned site |
| **3 — Agents, Hooks and Security** | Sub agents (front matter: `name`, `description`, `tools`, `skills`, `model`) and agent teams; hooks, with `PreToolUse` and `PostToolUse` use cases, including a RAG refund chatbot where `PreToolUse` validates the request and `PostToolUse` processes the refund; the **5 principles of AI security** — data control, permission control, human in the loop, traceability and right-sized models, one visual slide each; a key-concepts recap of **what triggers what**. | **Activity 3 · [Lab 3](labs/lab3-agents-hooks-security/)** — a security sub agent, your own hooks, then test, secure & deploy | **Task 3** — a hook you built |

> Lab files are included in this repository under [`labs/`](labs/). Each lab lives in its own folder with the exact prompts for every step.

## Tools Used

| Tool | Purpose |
|---|---|
| [Claude Code](https://claude.com/claude-code) | The agentic coding tool used throughout the course |
| [VS Code](https://code.visualstudio.com/) | Primary IDE for the labs |
| [Node.js](https://nodejs.org/) | Runtime for local dev servers and tooling |
| [GitHub](https://github.com/) | Version control, GitHub Pages deployment and CI/CD |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Browser automation for testing the built site |
| [LMS-TMS](https://lms-tms.tertiaryinfotech.com/) | Courseware delivery and assessment |

## Courseware

The current public courseware package (slide deck v27.0, 13 Nov 2026):

| Material | Editable | PDF |
|---|---|---|
| Slide deck (95 slides) | [PPTX](<courseware/Agentic AI Applications with Claude Code - v27.pptx>) | [PDF](<courseware/Agentic AI Applications with Claude Code - v27.pdf>) |
| Learner Guide (v2.4) | [DOCX](<courseware/LG-Agentic AI Applications with Claude Code.docx>) | [PDF](<courseware/LG-Agentic AI Applications with Claude Code.pdf>) |
| Lesson Plan (v2.5) | [DOCX](<courseware/LP-Agentic AI Applications with Claude Code.docx>) | [PDF](<courseware/LP-Agentic AI Applications with Claude Code.pdf>) |

The Learner Guide is also available as [Markdown](<courseware/LG-Agentic AI Applications with Claude Code.md>).

## Repository Structure

```
.
├── courseware/                  # Trainer & learner materials
│   ├── Agentic AI Applications with Claude Code - v27.pptx   # Slide deck (95 slides)
│   ├── Agentic AI Applications with Claude Code - v27.pdf
│   ├── LG-Agentic AI Applications with Claude Code.docx      # Learner Guide  (v2.4)
│   ├── LG-Agentic AI Applications with Claude Code.pdf
│   ├── LG-Agentic AI Applications with Claude Code.md
│   ├── LP-Agentic AI Applications with Claude Code.docx      # Lesson Plan    (v2.5)
│   └── LP-Agentic AI Applications with Claude Code.pdf
├── labs/                       # One lab per topic
│   ├── lab1-seven-steps/
│   ├── lab2-commands-tools-skills/
│   └── lab3-agents-hooks-security/
└── README.md
```

> **Distribution boundary:** this public repository contains the courseware and labs only. The confidential `assessment/` folder (question papers and answer keys), the Facilitator Guide and Assessment Plan (trainer-only, issued through the LMS-TMS), source references, internal build tooling and archived versions are deliberately excluded.

## Course Details

| | |
|---|---|
| **Course Title** | WSQ – Agentic AI Applications with Claude Code |
| **TGS Reference** | TGS-2025052468 |
| **Duration** | 1 day (8 hours, 9:00 AM – 6:00 PM) |
| **Level** | Beginner to Intermediate |
| **Assessment** | Written Assessment (30 min) + Practical Performance (30 min) — both open book, on the LMS |
| **Mode** | Classroom / synchronous e-learning, hands-on |
| **Certification** | WSQ Statement of Attainment (SOA) |
| **Provider** | Tertiary Infotech Academy Pte Ltd (UEN 201200696W) |

### Funding

Eligible learners and employers may receive **up to 70% course fee funding**. Eligibility and terms apply. Learners must also meet the course attendance and assessment requirements; see the [course registration page](https://www.tertiarycourses.com.sg/wsq-agentic-ai-applications-with-claude-code.html) for current details.

## Contact

**Tertiary Infotech Academy Pte Ltd** · UEN 201200696W

- 🌐 [Course page & registration](https://www.tertiarycourses.com.sg/wsq-agentic-ai-applications-with-claude-code.html)
- 📧 enquiry@tertiaryinfotech.com
- ☎️ +65 6100 0613
- 🎓 [LMS-TMS](https://lms-tms.tertiaryinfotech.com/) — courseware & assessment

---

<div align="center">

### Ready to build with Claude Code?

**[📝 Register for this course →](https://www.tertiarycourses.com.sg/wsq-agentic-ai-applications-with-claude-code.html)**

© 2026 Tertiary Infotech Academy Pte Ltd · UEN 201200696W

</div>
