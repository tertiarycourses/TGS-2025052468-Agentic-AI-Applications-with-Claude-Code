# Learner Guide — Agentic AI Applications with Claude Code

TGS Ref No: TGS-2025052468 · Version 2.2 · Tertiary Infotech Academy Pte Ltd (UEN 201200696W)

The Word and PDF versions carry the figures.

### How to Use This Guide

This learner guide follows the three topics of the course and contains step-by-step instructions for every hands-on activity. Keep it open beside Claude Code as you work. During the open-book assessment you may refer to this guide, the slides and any approved materials.

By the end of the course you will have built, deployed, tested, secured and optimised a real software-development company website — entirely with Claude Code.

One topic, one activity, one PP task. Topic 1 and Activity 1 give you the evidence for PP Task 1; Topic 2 and Activity 2 for PP Task 2; Topic 3 and Activity 3 for PP Task 3. Keep each screenshot as you go.

What you need before you start:

- A computer with internet access (macOS, Linux or Windows)
- Claude Code installed and signed in
- A GitHub account
- Node.js installed (for npx commands)
## Topic 1 — Claude Code Fundamentals

### 1.1 Overview of Claude Code

Claude Code is an agentic coding tool that runs in your terminal, IDE, desktop app or browser. Instead of autocompleting code line by line, you give it a goal in plain English and it plans the work, edits files, runs commands, uses tools, and verifies the result.

Key ideas:

- Terminal-native — runs where you already work.
- Agentic — plans and executes multi-step tasks.
- Tool-using — reads/writes files, runs bash, calls MCP servers.
- Extensible — custom commands, skills, sub agents and hooks.
#### The Claude product family

Anthropic offers several Claude products — all powered by the same Claude models, differing in where they run and who they’re for:

- Claude.ai — the chat assistant on web, desktop and mobile for everyday tasks.
- Claude Code — agentic coding tool in your terminal, IDE, desktop app and browser.
- Claude Cowork — desktop agent for non-developers to automate files and tasks.
- Claude Design — generates polished UI and frontend designs.
- Claude for Microsoft — Claude inside Microsoft 365 and Outlook.
- Claude for Chrome — browser agent that navigates and acts on the web for you.
- Claude for Science — speeds up research workflows for scientists and labs.
#### The evolution of AI engineering (2023 → 2026)

As models grow more capable, the work shifts from wording a single prompt to engineering the whole system around the model:

- 2023 — Prompt Engineering: craft the wording of a single prompt to get good output.
- 2024 — Context Engineering: curate what the model sees — files, memory and tools.
- 2025 — Harness Engineering: build the system around the model — loop, tools, verification.
- 2026 — Harness Systems: agents run long tasks autonomously (Claude Code, Cowork, Codex).
#### What Claude Code can do

Claude Code handles real engineering tasks end to end — you describe the outcome and it does the work: build features and whole apps, debug & fix errors, refactor & improve existing code, and automate git, tests, deployment and CI/CD. Common use cases: marketing sites and landing pages, internal web tools, full-stack apps, mobile apps, scripts and automations, and data tasks.

#### The agentic loop in action

Example — you ask: “Build a responsive software-dev website with an enquiry form, then test it.”

- Gather context — reads the folder and CLAUDE.md to understand the existing site and conventions.
- Plan — drafts the approach (hero, testimonials and enquiry form sections) for you to approve.
- Take action — writes index.html, styles.css and script.js with form validation.
- Verify work — opens the page via the Playwright MCP and submits the form to test it.
- Repeat — spots a validation bug, fixes script.js, re-tests, then reports done.
#### What is harness engineering?

A harness is the system built around the model — the agentic loop, tool access, context and memory management, and verification and guardrails — that turns a capable model into an agent which can complete long-running tasks. Harness engineering is designing that scaffolding (and stripping it back as models improve). Examples of harness systems include Claude Code, Claude Cowork, OpenAI Codex, Gemini CLI, OpenClaw and Hermes Agent. The guiding principle: build the simplest harness that works, and re-examine it with every new, more capable model.

#### An AI agent works like a person

You already know how an agent works, because you are one. Your brain thinks, plans and decides; your body — hands, eyes and tools — does the work; and food gives both the energy to keep going. An AI agent has the same three parts. The model is the brain: it reasons and proposes the next step. The harness is the body: tools, memory, skills and controls that carry the step out. Tokens are the food: every file read, every reasoning step and every reply spends them.

*Figure 1 — Brain + body need food to do work; model + harness need tokens to do work*

In Claude Code: Claude Opus or Sonnet is the brain, Claude Code is the body, and your Claude plan or API credits pay for the tokens. No tokens, no work — a long task that runs out of budget stops half done, so your token budget is the agent’s running cost.

#### What makes an AI agent: a model inside a working system

The model is one part out of seven. The other six turn a chatbot into a worker that finishes the job — and each has a home in Claude Code that you will use in this course.

*Figure 2 — An AI agent is a model inside a working system of seven parts*

| Part | What it does — and where it lives in Claude Code |
|---|---|
| Model | Reasons and proposes the next action — Claude Opus, Sonnet or Haiku; switch with /model. |
| Tools | Read, calculate, browse, render — built-in tools such as Read, Edit and Bash, plus MCP servers (Topic 2). |
| Skills | Reusable procedures and checks — .claude/skills/<name>/SKILL.md (Topic 2). |
| Memory | Approved persistent facts — CLAUDE.md and memory files (/memory). |
| Knowledge base | Curated evidence and versions — your repo, docs and @-mentioned files. |
| Instructions | Goal, policy and output contract — your prompt plus CLAUDE.md rules. |
| Runtime controls | Loop, permissions, limits and logs — permission modes, hooks and settings.json. |

Tip: a more capable model cannot make up for missing access, poor sources or an unverified action. When an agent gets something wrong, check the six parts around the model first.

### 1.2 The Agentic Loop

Every task Claude Code performs runs the same repeating cycle:

- Gather context — read files, run searches, use tools to understand the task.
- Plan — decide the approach and, for bigger tasks, confirm the plan before making changes.
- Take action — edit code, run commands, call tools to make progress.
- Verify work — run tests, lint, view output to check the result is correct.
- Repeat — feed results back as new context and loop until the goal is met.

Why it matters:

- Give direction, not micro-steps — state the goal and constraints clearly.
- Verification is everything — give Claude a way to check its own work (tests, linters, screenshots).
- Steer mid-loop — review the plan, interrupt and course-correct.
- Context is the fuel — what Claude can see determines what it can do.
### 1.3 Context Engineering

Context engineering is curating exactly what Claude sees so it has the right information and nothing that wastes its limited context window.

| Tool | Purpose |
|---|---|
| CLAUDE.md | Project memory loaded every session. Generate with /init. |
| @ mentions | Pull specific files or folders into context on demand. |
| /compact | Summarise the conversation to reclaim context space. |
| /clear | Wipe the slate for a fresh, unrelated task. |

Best practices: keep CLAUDE.md short and high-signal; pull in only what’s needed with @file; /compact at natural breakpoints; /clear between unrelated tasks.

### 1.4 Setting Up Claude Code

Claude Code runs on four surfaces — the same agentic loop everywhere:

- Terminal (CLI): install once, then run claude in any project folder.
- macOS/Linux: curl -fsSL https://claude.ai/install.sh | bash
- Windows (PowerShell): irm https://claude.ai/install.ps1 | iex
- IDE (VS Code): install the Claude Code extension (also works in Cursor and JetBrains). Gives inline diffs, @-mentions with line ranges, and plan review. The extension bundles its own CLI for the chat panel; install the standalone CLI too if you want to run claude in the integrated terminal. Tip: you don’t have to install the CLI by hand — in VS Code just ask Claude Code: “install claude cli in the terminal for me”.
- Desktop app: a full GUI for parallel sessions, scheduled tasks (Routines), and connectors.
- Cloud (claude.ai/code): open it in any browser, with nothing to install. The session runs on an Anthropic-managed VM, works on a clone of your GitHub repo, and keeps running after you close your laptop.

Sign in once with any paid Claude plan (Pro, Max, Team, Enterprise) or a Console account.

Pricing (as of June 2026 — verify at claude.com/pricing): Claude Code is included in subscription plans from Pro ($17/mo annual, $20 monthly) upward — Max (from $100/mo, 5× or 20× usage), Team ($20/seat standard, $100/seat premium), and Enterprise ($20/seat + usage at API rates). It’s also available pay-as-you-go via the API, billed per million tokens (input / output): Opus 4.8 $5 / $25, Sonnet 4.6 $3 / $15, Haiku 4.5 $1 / $5.

### 1.5 How Claude Code Works — Built-in Tools

Tools are what make Claude Code agentic. Each tool result feeds back into the loop. The built-in tools fall into five categories:

| Category | What Claude can do |
|---|---|
| File operations | Read, edit, create, rename and reorganise files |
| Search | Find files by pattern, grep content, explore the codebase |
| Execution | Run shell commands, tests, builds and git |
| Web | Search the web, fetch docs, look up errors |
| Code intelligence | See type errors/warnings, jump to definitions (with plugins) |

Claude also has tools for spawning subagents and asking you questions. Extend the base set with skills, MCP, hooks and subagents.

### 1.6 The Context Window

Claude’s context window holds the system prompt, CLAUDE.md, auto memory, your conversation, file reads, command output, loaded skills, and MCP tool names. As you work, it fills up.

- Run /context to see what’s using space; /mcp for per-server cost.
- Near the limit, Claude auto-compacts: it clears old tool outputs first, then summarises the conversation. Detail from early in the chat can be lost — put persistent rules in CLAUDE.md.
- MCP tool schemas are deferred (loaded on demand); subagents run in their own context, so they don’t bloat yours.
### 1.7 Memory Files

Each session starts fresh. Two mechanisms carry knowledge across sessions:

- CLAUDE.md — you write it: instructions, conventions, build/test commands. Generate a starter with /init. Keep it under ~200 lines. Scopes: project (./CLAUDE.md or ./.claude/CLAUDE.md), user (~/.claude/CLAUDE.md), or managed (organisation). Loaded in full every session.
- Auto memory — Claude writes it: learnings and patterns it discovers. Stored as MEMORY.md (plus topic files) per repository under ~/.claude/projects/<project>/memory/. The first 200 lines / 25KB load each session. Browse and edit with /memory.
### 1.8 Permission Modes

Permission modes control how often Claude pauses to ask. Press Shift+Tab to cycle modes (the current mode shows in the status bar).

| Mode | Runs without asking |
|---|---|
| default | Reads only — asks before edits and shell commands |
| acceptEdits | Reads, file edits, and common filesystem commands (mkdir, mv, cp…) |
| plan | Reads only — explores and proposes a plan without editing source |
| auto | Everything, with background safety checks (research preview) |
| dontAsk | Only pre-approved tools (for locked-down CI) |
| bypassPermissions | Everything (isolated containers/VMs only) |

You can also pre-approve specific commands in .claude/settings.json.

### 1.9 Dangerous Skip Permissions (bypassPermissions)

bypassPermissions (a.k.a. --dangerously-skip-permissions) disables permission prompts and safety checks so tool calls run immediately.

- It offers no protection against prompt injection or unintended actions.
- Use it only in isolated environments — containers, VMs, dev containers without internet access.
- It refuses to start as root/sudo and cannot be entered mid-session (restart with the flag).
- Prefer auto mode for far fewer prompts with background safety checks.

Start it (in a sandbox only):

```
claude --permission-mode bypassPermissions   # or --dangerously-skip-permissions
```

Allow bypass mode in VS Code and Claude Desktop. Both apps hide the Bypass permissions mode until you allow it in Settings. Turn it on only for trusted, sandboxed projects.

*Figure 3 — VS Code: gear icon → Settings*

- 1 Gear icon — bottom-left of VS Code.
- 2 Settings — or press Ctrl+, (Cmd+, on Mac); search “Claude Code” and tick “Allow dangerously skip permissions”, then pick Bypass permissions in the prompt-box mode menu.
*Figure 4 — Claude Desktop: Settings → Claude Code → Sessions*

- 1 Settings → Claude Code — open the Claude Code page in Desktop settings.
- 2 Allow bypass permissions mode — toggle it on to make Bypass available in the mode menu.
- 3 Keep computer awake (optional) — stops the machine sleeping during long runs.
### 1.10 Managing Sessions

A session is a saved conversation tied to a project directory, stored locally as you work.

| Command | What it does |
|---|---|
| claude --continue | Resume the most recent session in this directory |
| claude --resume | Open the session picker to browse/search |
| claude --resume <name> | Resume a named session directly |
| /rename <name> | Name the current session so it’s findable |
| /branch <name> | Fork the conversation to try a different approach |
| /clear · /compact · /context | Manage context within a session |

Run parallel sessions on different branches with git worktrees (claude --worktree <name>).

### 1.11 Scheduled Tasks (Desktop Routines)

Scheduled tasks start a new Claude session automatically — great for daily code reviews, dependency audits, or morning briefings.

- In the Desktop app, click Routines → New routine → Local.
- Set a Name, Instructions (what Claude should do), working folder, and permission mode.
- Pick a Schedule: Manual, Hourly, Daily, Weekdays, or Weekly — or just describe it (“every 6 hours”).
- Run now once and approve any permission prompts so future runs don’t stall.

Local tasks run only while the app is open and your machine is awake. For runs that fire even when your computer is off, use cloud Routines.

> Tip: you can create one by asking in plain language — “set up a daily code review that runs every morning at 9am.”

### 1.12 Keep Working Toward a Goal (/goal)

/goal sets a completion condition and Claude keeps working across turns until it’s met. After each turn, a small fast model (Haiku) checks the condition; the goal clears automatically once satisfied.

| Command | What it does |
|---|---|
| /goal <condition> | Set a verifiable end state and start working toward it |
| /goal | Check status: turns, tokens, and the latest reason |
| /goal clear | Remove an active goal before it’s met |

Write conditions Claude can prove in the transcript, e.g. all tests in test/auth pass and the lint step is clean. Bound long runs with a clause like or stop after 20 turns.

### Activity 1 — Build & Deploy a Website

Goal: Build a single-page responsive website for a software development company, then push it to GitHub and deploy it on GitHub Pages.

This activity runs in two parts: Activity 1a covers Steps 1–3 (Goal & Features → Plan → Execute/build), then we cover context engineering in class, and Activity 1b covers Steps 4–7 (Context /init → Commit → Deploy → CI/CD) and presenting your live GitHub Pages link.

PP Task 1: keep a screenshot of your live site showing the hero, the three testimonials and the enquiry form.

#### Step-by-step

- Create a project folder and open a terminal there:
```
mkdir software-dev-site && cd software-dev-site
```

- Launch Claude Code (claude) or open the Claude Code panel in VS Code.

Get set up in VS Code. Before Step 1, install the extension and dock Claude Code beside your files.

Install the Claude Code extension in VS Code. Install only the official extension published by Anthropic — an extension can read your whole codebase.

*Figure 5 — Installing “Claude Code for VS Code” from the Marketplace*

- 1 Open Extensions — click the Extensions icon or press Ctrl+Shift+X (Cmd+Shift+X on Mac).
- 2 Search “claude” — type claude in the Marketplace search box.
- 3 Pick “Claude Code for VS Code” — select the result published by Anthropic.
- 4 Check the publisher — look for the blue verified tick and anthropic.com; skip look-alike extensions.
- 5 Install & keep it updated — click Install and leave Auto Update ticked.

Move Claude Code to the secondary side bar. Right-click the Claude icon → Move To → Secondary Side Bar. Your files stay on the left, the editor in the middle and Claude Code on the right.

*Figure 6 — Right-click the Claude icon → Move To → Secondary Side Bar*

*Figure 7 — VS Code with Claude Code docked in the secondary side bar*

- 1 Files on the left — the Explorer shows your project folder (kanban8).
- 2 Claude Code on the right — chat with Claude while you watch files change in the editor.
- 3 New session & history — + starts a fresh session (Figure 8); the clock icon reopens past sessions.
- 4 Prompt box — Ctrl+Esc focuses Claude; / opens commands; choose Plan mode and the model here.
*Figure 8 — The New session button*

Or use the Claude Desktop app. Prefer a GUI? Open the Claude Desktop app, switch to the Code tab and point it at a project folder — it runs the same agentic loop as the CLI.

*Figure 9 — Claude Code in the Claude Desktop app (Code tab)*

- 1 Open the Code tab — click the </> icon at the top-left to switch from Chat to Claude Code.
- 2 Choose your project folder — pick a folder (here kanban8); Claude reads and edits files only inside it.
- 3 Describe the task — type your goal in plain English and press Enter.
- 4 Check folder, mode & model — the status bar shows the folder, permission mode (Plan) and model (Sonnet 5.5 · Medium).
- 5 Sessions grouped by project — the sidebar lists past sessions under each project; click one to resume. “Import Claude Code CLI sessions” brings your terminal history in.

Save your project as an environment. A saved environment holds your project folder, so every new session opens in software-dev-site. Open the environment selector under the prompt box and choose New environment at the bottom of the menu. No environment under the prompt box? You have the earlier layout: choose the project folder directly, as in Figure 9.

*Figure 10 — New environment: choose where it runs, name it and add your project folder*

- 1 Choose where it runs — Local is your machine. Cloud is an Anthropic-managed VM. SSH is a remote machine. Remote Control is different: the session stays on your machine, and you steer it from your phone or a browser.
- 2 Name it after the project — software-dev-site is easy to spot in the selector later.
- 3 Add your project folder — click + Add and pick software-dev-site. Every session from this environment starts there.
- 4 Leave the variables empty for now — later, enter one KEY=value per line. Only sessions from this environment get them.
- 5 Create environment — select it under the prompt box, then type your first prompt.

Or run it in the cloud. Open claude.ai/code in any browser, with nothing to install. Claude Code runs on an Anthropic-managed VM and keeps going after you close your laptop, so you can check on it from your browser, phone or desktop. It works on a clone of your GitHub repo, not your local folder, so try it once Step 5 has pushed your site. Cloud sessions are available on Pro, Max, Ultra and Team plans, and for Enterprise users with premium seats or Chat + Claude Code seats. They count toward your plan’s limits, with no separate charge for the VM.

*Figure 11 — A cloud session: open claude.ai/code, connect GitHub, describe the task, review the changes*

From your terminal, claude --cloud "your task" starts a new cloud session for the current repo, and claude --teleport pulls a cloud session back down to your machine. Handoff from the CLI runs one way: you cannot push a running terminal session up to the cloud.

Complete the 7-step build workflow:

- Step 1 — Goal & Features. Draft a detailed build prompt (use ChatGPT to expand your idea), then paste the website prompt below into Claude Code.
- Step 2 — Plan Mode. Press Shift+Tab to enter Plan mode and let Claude propose a plan; review it before approving.
- Step 3 — Execute (Bypass Permissions). Approve the plan and let Claude build the site hands-free. To enable bypass-permissions mode in VS Code: Settings → Extensions → Claude Code → enable “Allow dangerously skip permissions”, then pick Bypass permissions in the prompt-box mode selector (CLI: claude --dangerously-skip-permissions). Use this only in a trusted/sandboxed project. See Figures 3–4 in section 1.9.
- Step 4 — Context Engineering (/init). Run /init to generate a CLAUDE.md so Claude remembers the project’s structure and conventions. (See the example CLAUDE.md below.)
- Verify the build — open index.html in a browser; submit the enquiry form empty (errors show) and valid (confirmation + data logged to console).
- Step 5 — Commit to GitHub. Create an empty repository on github.com, then let Claude Code push your code.
- 1 Click New — on github.com go to Repositories and click the green New button.
*Figure 12 — The New repository button on GitHub*

*Figure 13 — Create a new repository — owner, name and description*

- 1 Owner — keep your own GitHub account.
- 2 Repository name — e.g. software-dev-site (kanban8 in the screenshot); a green tick means the name is free. Use lowercase-with-hyphens — the name becomes part of your GitHub Pages URL.
- 3 Description (optional) — one line about the project.
*Figure 14 — Configuration — keep the repository empty*

- 1 Visibility: Public — free GitHub Pages hosting needs a public repository.
- 2 No template — start from a blank repository.
- 3 README: Off — Claude writes the README in Step 6.
- 4 No .gitignore, no license — files created here would clash with your first push (the “rejected — fetch first” error).
- 5 Create repository — click the green button.
*Figure 15 — Quick setup — the repository URL and git commands*

- 1 Copy the HTTPS URL — click the copy icon beside https://github.com/<you>/<repo>.git.
- 2 The git commands — init → add → commit → branch -M main → remote add origin → push. You don’t need to type them — ask Claude:
> Commit all files and push this project to https://github.com/<username>/software-dev-site.git on the main branch.

Approve the GitHub sign-in when asked (or run gh auth login first), then refresh the repository page — your files appear, ready for Step 6. Prefer the GitHub CLI? This creates the repo and pushes in one go:

```
git init && git add . && git commit -m "Initial website"
gh repo create software-dev-site --public --source=. --push
```

- Step 6 — Deployment (GitHub Pages via GitHub Actions) — ask Claude:
> Create a GitHub Actions workflow that deploys this site to GitHub Pages on every push to main, then enable Pages for the repo.

- Add a README, then visit https://<your-username>.github.io/software-dev-site/.
- Step 7 — CI/CD. Push a small change and confirm the GitHub Action automatically rebuilds and redeploys the site.
##### Example CLAUDE.md

```
# CLAUDE.md

## What this is
Single-page marketing site. HTML + CSS + vanilla JS — no framework, no build step.

## Running
Open index.html directly in a browser. No dev server.

## Architecture
- index.html  — sections: #home, #services, #testimonials, #contact
- styles.css  — design tokens in :root variables; mobile-first
- script.js   — enquiry-form validation (one DOMContentLoaded handler)
```

Reference repo: https://github.com/alfredang/softwaredevleopment

#### The Website Prompt

> Build a single-page, responsive website for a software development company using HTML, CSS, and vanilla JavaScript only (no frameworks). Output everything in one index.html file with inline <style> and <script>, or split into index.html, styles.css, and script.js — your choice.

> Goal: A modern, professional landing page that markets custom software development services and captures leads through an enquiry form.

> Sections (in order):

> 1. Hero Section — Full-width banner with a strong headline (e.g. “We Build Software That Scales”) and a one-line subheadline. Short supporting paragraph. Primary CTA button (“Get a Quote”) that smooth-scrolls to the enquiry form. Clean gradient or solid background, large readable typography, centered content. Optional navbar with logo and anchor links (Home, Services, Testimonials, Contact).

> 2. Testimonial Section — Section heading (e.g. “What Our Clients Say”). 3 testimonial cards, each with: client quote, client name, role/company, and avatar placeholder (initials circle or image). Responsive grid: 3 columns on desktop, 1 column on mobile. Subtle card shadows and hover effect.

> 3. Enquiry Form Section — Section heading (e.g. “Get in Touch”). Fields: Name (required), Email (required), Phone (optional), Service interested in (dropdown), Message (textarea, required). Submit button. Submission handled in JavaScript: intercept submit with event.preventDefault(); validate fields (required checks + email regex) and show inline error messages; on success show a confirmation message (“Thanks! We’ll be in touch shortly.”) and reset the form; log the collected form data as an object to the console. Include a commented-out fetch() example showing how to POST to an API endpoint.

> Styling Requirements: Mobile-first and fully responsive (flexbox/grid + media queries). Consistent palette (CSS variables for primary, accent, background, text). Modern font stack or a Google Font. Smooth scrolling. Accessible: semantic HTML5, a label for every input, sufficient contrast.

> Deliverable: Working, copy-paste-ready code that runs by opening the file in a browser — no build step.

## Topic 2 — Commands, Tools and Skills

### 2.0 The .claude Directory

Claude Code keeps its configuration in two places — your user folder (applies to every project) and the project folder (shared with your team via version control).

User scope — ~/.claude/: settings.json (settings, hooks), CLAUDE.md (personal memory), agents/, skills/, commands/, projects/<project>/ (session transcripts + memory/), and plugins/. MCP servers and per-project local config live in ~/.claude.json.

Project scope — <project>/.claude/: settings.json (shared) and settings.local.json (personal, gitignored), CLAUDE.md and rules/, commands/ (slash commands), skills/<name>/SKILL.md, agents/<name>.md (sub agents). Project MCP servers live in .mcp.json at the repo root.

User scope applies everywhere; project scope is committed so your whole team shares the same commands, skills, agents and settings.

User level vs project level — where each customisation lives. Every customisation can be stored at two levels. User level (~/.claude/) applies to ALL your projects; project level (<project>/.claude/) applies only to that ONE project and travels with it in git (slide 56):

Commands — user: ~/.claude/commands/<name>.md; project: <project>/.claude/commands/<name>.md.

MCP tools — user: ~/.claude.json (claude mcp add -s user …); project: <project>/.mcp.json (claude mcp add -s project …).

Skills — user: ~/.claude/skills/<name>/SKILL.md; project: <project>/.claude/skills/<name>/SKILL.md.

CLAUDE.md — user: ~/.claude/CLAUDE.md (your personal memory); project: <project>/CLAUDE.md (shared with the team).

Hooks — user: the "hooks" block in ~/.claude/settings.json; project: the "hooks" block in <project>/.claude/settings.json.

Keep personal preferences at user level; commit team-shared rules, commands, skills and hooks at project level. Both levels load together — where they conflict, project settings take precedence.

### 2.1 Custom Commands

Custom commands are reusable prompts saved as Markdown files. Typing a slash command runs a multi-step workflow the same way every time.

- Location: .claude/commands/ in your project (or ~/.claude/commands/ for personal commands).
- Create one: make name.md — the filename becomes /name.
- Reload: restart Claude Code to pick up new commands.
- Arguments: use $ARGUMENTS to pass input into the command.
### 2.2 MCP Tools

The Model Context Protocol (MCP) is an open standard that lets Claude Code connect to external tools and data sources through a common interface.

- MCP Server — exposes tools/data (e.g. Playwright, GitHub, databases).
- MCP Client — Claude Code connects to servers and calls their tools.
- Transport — stdio or HTTP/SSE; transport-agnostic.
- Tools — each server publishes callable actions Claude can use.

Playwright MCP lets Claude drive a real browser — open pages, click, fill forms and capture screenshots.

Connecting a server. Register a server with claude mcp add, then verify with claude mcp list and manage in-session with /mcp. Servers are saved at one of three scopes:

| Scope | Stored in | Available to |
|---|---|---|
| local (default) | ~/.claude.json (this project) | Only you, this project |
| project | .mcp.json in the repo root | Everyone who clones the repo |
| user | ~/.claude.json (top level) | Only you, all projects |

```
# hosted (HTTP) server
claude mcp add --transport http docs https://code.claude.com/docs/mcp

# local (stdio) server, shared with the team via .mcp.json
claude mcp add playwright -s project -- npx -y @playwright/mcp@latest

claude mcp list
```

### 2.3 Agent Skills

Skills are reusable folders of instructions (SKILL.md) plus optional scripts and resources that teach Claude a specialised task. Claude loads a skill only when it is relevant.

- SKILL.md — name, description and instructions Claude follows on demand.
- Project skills — live in .claude/skills/, shared with your repo and team.
- Install — npx skills add <repo> --skill <name>.
- Customise — edit the skill to fit your project.

Inside a SKILL.md. Open any skill and the front matter — the lines between the two --- markers — holds just two fields: name and description. Everything below is the body. Figure 16 shows the redesign-existing-projects skill, which lifts an existing website to premium quality, saved at .claude/skills/redesign-existing-projects/SKILL.md.

*Figure 16 — Inside a SKILL.md: the description decides when the skill fires*

- 1 name — the skill’s ID. Type /redesign-existing-projects to run it by hand.
- 2 description — the trigger. Claude keeps only this line in context and loads the full skill when your request matches it.
- 3 The body — the playbook — Scan → Diagnose → Fix. It loads only when the skill fires, so a long checklist costs nothing until then.
- 4 The folder — a skill is a folder, not a file: SKILL.md plus any helpers. This one ships its own agents/ subfolder.

Tip: write the description like a job ad — what the skill does, plus the words a user would type when they need it.

SKILL.md vs CLAUDE.md. Both are Markdown instruction files, and both tell Claude how you want work done. The difference is when Claude loads them — and that difference decides which one you should reach for.

| SKILL.md — loaded on demand | CLAUDE.md — loaded every session |
|---|---|
| Trigger: Claude reads the skill's name + description and loads the body only when the task matches. | Trigger: read automatically at the start of every session — always in context. |
| Scope: one specialised capability — a workflow, an output format, a house standard. | Scope: project-wide facts — stack, conventions, commands to run, things not to do. |
| Cost: costs no context until it fires, so you can keep dozens installed. | Cost: spends context on every single turn, so keep it tight and high-value. |
| Lives in: .claude/skills/<name>/SKILL.md (or ~/.claude/skills/ for all projects). | Lives in: CLAUDE.md at the project root (or ~/.claude/CLAUDE.md for all projects). |

Rule of thumb: put stable project facts in CLAUDE.md; put specialised, occasional procedures in a skill. If you find yourself writing "when I ask you to do X, follow these ten steps" in CLAUDE.md, that is a skill trying to escape.

### Activity 2 — Commands, Tools and Skills

Goal: Automate your publishing, give Claude a real browser, and use a skill to lift the design. You work through four parts, 2A to 2D, on the Activity 1 website. Lab 2 (labs/lab2-commands-tools-skills/) holds the exact prompts.

PP Task 2 asks for a screenshot of your redesigned site, which you produce in Activity 2D.

### Activity 2A — Create a /gitpush Custom Command

Goal: Create a custom command that automates pushing, documenting, deploying and securing your project.

#### Step-by-step

- Create the commands folder in your project:
```
mkdir -p .claude/commands
```

- Create the file .claude/commands/gitpush.md with the following content:
```
---
description: Push code to GitHub, create README, deploy Pages, secure the repo
---

Perform the following steps for this project:

1. Push/update all the code to GitHub (commit any changes first).
2. Create or update a README that documents the project.
3. Create a GitHub Page via GitHub Actions.
4. Update the repository "About" section and add the GitHub Pages link.
5. Run a security scan to make sure no sensitive data (API keys, secrets,
   passwords, personal data) is published to the internet.

Target repository / notes: $ARGUMENTS
```

- Restart Claude Code so the new command is detected.
- Run the command:
```
/gitpush software-dev-site
```

- Verify the repo has a README, GitHub Pages is live, the About section shows the Pages link, and the security scan reported no leaked secrets.
### Activity 2B — Install & Use Playwright MCP

Goal: Install the Playwright MCP tool at the project level, screenshot your website and push it to GitHub.

#### Step-by-step

- Install Playwright MCP at the project level:
```
claude mcp add playwright -s project npx @playwright/mcp@latest
```

- Restart Claude Code and approve the browser permissions when prompted.
- Confirm the server is connected:
```
/mcp
```

- Ask Claude to screenshot your site:
> Use the Playwright MCP tool to open my deployed website (https://<your-username>.github.io/software-dev-site/) and capture a full-page screenshot. Save it as screenshot.png.

- Add the screenshot to the README:
> Add screenshot.png to the README under a “Preview” heading, then commit and push to GitHub.

- Verify the screenshot renders correctly in your GitHub README.
### Activity 2C — Test the Enquiry Form with Playwright

Goal: Use the Playwright MCP tool to test the enquiry form end-to-end and confirm submissions reach your email.

#### Step-by-step

- Wire the form to email. Ask Claude to send form submissions to angch@tertiaryinfotech.com — for example using a form service such as Formspree, or a fetch() POST to your endpoint:
> Connect the enquiry form so submissions are emailed to angch@tertiaryinfotech.com (use Formspree or a fetch to an endpoint).

- Open the site with Playwright:
> Use the Playwright MCP tool to open my deployed site (https://<your-username>.github.io/software-dev-site/).

- Fill and submit the form with test data:
> Fill the enquiry form with name “Test User”, email “test@example.com”, a sample message, then submit it.

- Verify the on-page result — confirm the success message (“Thanks! We’ll be in touch shortly.”) appears and the form data is logged/captured.
- Check your inbox — confirm the enquiry email actually arrives at angch@tertiaryinfotech.com.
- Re-run the test after any change so every enquiry reliably reaches your email, then commit and push.
### Activity 2D — Redesign Your Site With a Skill

Goal: Install and run two skills to improve your website’s design and SEO, then keep a screenshot of the redesign for PP Task 2.

#### Step-by-step

- Install the frontend-design skill at the project level:
```
npx skills add https://github.com/anthropics/skills --skill frontend-design
```

- (This installs into .claude/skills/.)
- Customise the frontend design — ask Claude:
```
Using the frontend-design skill, redesign my website to look modern and
professional and appeal to software-development clients. Improve the hero,
testimonials and form styling while keeping it responsive.
```

- Install the SEO audit skill:
```
npx skills add https://github.com/coreyhaines31/marketingskills --skill seo-audit
```

- Run the SEO audit:
```
Run the seo-audit skill on my website and apply the recommended changes
(title tags, meta description, headings, alt text, Open Graph, etc.).
```

- Commit and push the improvements to GitHub.
## Topic 3 — Agents, Hooks and Security

### 3.1 Sub Agents

Sub agents are specialised assistants with their own prompt, tools and context window. Delegate focused jobs — like security review or UX critique — to keep the main thread clean.

- Create with /agents, then choose Project to save under .claude/agents/.
- Give a clear role — describe purpose, tools and when to invoke it.
- Isolated context — each sub agent runs in its own context window.

Inside a sub agent file. A sub agent is one Markdown file in .claude/agents/. Its front matter sets five fields — name and description (required), plus tools, skills and model — and everything below the second --- is its system prompt:

```
---
name: security-scanner
description: Scan for vulns & hardening
tools: Read, Grep, Glob, Bash
skills:
  - cybersecurity-analyst
model: sonnet
---
You are a security reviewer...
```

Figure 17 shows a full example from a real project: security-scanner, a specialist you hire in eight lines.

*Figure 17 — Inside a sub agent: the front matter sets the job, tools, model and preloaded skill*

- 1 name + description — the job title and the trigger. Say “run a security audit” and Claude delegates to security-scanner.
- 2 tools — an allowlist — Read, Grep, Glob, Bash, Write. Leave a tool off and the agent cannot use it; omit the field and it inherits every tool.
- 3 model: sonnet — runs on Sonnet whatever model you chat with — a faster, cheaper worker for one narrow job.
- 4 skills — preloads the full cybersecurity-analyst skill at start-up, so the agent arrives knowing the playbook.
- 5 The body — the system prompt — its role, its rules (work read-only) and its deliverable, a Word report.

Skill or sub agent? A skill’s front matter has only name and description, because a skill runs inside whichever agent loads it. A sub agent adds tools, skills and model, because it is a separate agent with its own context window. Agent = model + harness; skill = a playbook any agent can load; sub agent = a helper agent with its own context — and its skills: line hands it the playbook.

Why use sub agents? Reach for one when a side task would flood your main conversation with search results, logs or file contents you won’t reference again. Sub agents help you:

- Preserve context — exploration and logs stay in the sub agent’s own window; only the summary returns to your main conversation.
- Enforce constraints — limit exactly which tools the sub agent may use.
- Reuse & specialise — reuse configurations across projects (user-level agents) and give each a focused system prompt for its domain.
- Control costs — route narrow tasks to a faster, cheaper model.

Define a custom sub agent when you keep spawning the same kind of worker with the same instructions.

### 3.2 Hooks

Hooks are shell commands that run automatically at defined points in Claude Code’s lifecycle.

| Event | When it runs |
|---|---|
| PreToolUse | Before a tool — validate or block an action. |
| PostToolUse | After a tool — auto-format or test. |
| Notification | When Claude needs input or finishes. |
| Stop | When a task ends — cleanup or checks. |

Hooks are configured in .claude/settings.json under "hooks".

Automating with hooks. Hooks are deterministic — they always run at their event rather than relying on the model to choose to. Common uses: auto-format after edits, run tests, block risky commands, or send notifications. Add a "hooks" block with a matcher and a command; hooks receive event context on stdin as JSON. Example — format files after every edit:

```
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "hooks": [{ "type": "command", "command": "npx prettier --write ." }]
    }]
  }
}
```

Stop it before, or act on it after. PreToolUse runs after Claude has prepared a tool call and before the call runs, so it can validate the input and block the call. PostToolUse runs only after the tool succeeds. It reads the outcome in tool_response and starts the next step, but it cannot undo what already ran. A failed tool call goes to a separate event, PostToolUseFailure.

*Figure 18 — PreToolUse checks before the call; PostToolUse acts on the outcome*

| PreToolUse: check before the call | PostToolUse: act on the outcome |
|---|---|
| Validate a form: block a booking with an empty name or a bad email. | Process the refund: the lookup tool returns “eligible”, so the hook sends the refund to processing. |
| Block a risky command: deny rm -rf before it touches a file. | Format and test: run Prettier and the tests after every Edit or Write. |
| Protect secrets: refuse any edit to .env. | Write the audit trail: append each tool call to a log you can trace later. |
| Cap the amount: deny a refund tool call over your limit. | Announce success: play a sound or speak when the job lands. |

Try it: the labs/.claude/hooks folder holds two working examples, validate-booking.js (PreToolUse) and booking-success-tts.sh (PostToolUse). The refund case is an illustration: the same pattern applies to any tool whose result should start the next step.

Hooks in action on a web page. The same idea — run something automatically when an event happens — also powers engagement features on a website. These page-event hooks live in the site’s script.js and run in the visitor’s browser (not in Claude Code); you simply ask Claude Code, in plain English, to build them. You build your own in Activity 3B.

Demo 1 — Pop-up after 10 seconds. A timer starts when the page loads; stay on the page for 10 seconds and a dialog pops up with a key message — no click needed.

*Figure 19 — A timed hook — the dialog pops up 10 seconds after the page loads*

- 1 The 10-second pop-up — after 10 s the dialog opens and the page behind is dimmed, so attention goes to the message.
- 2 One clear message — a headline, a short sentence and the key facts (When / Where) at a glance.
- 3 Easy to dismiss — Got it closes the dialog and remembers it, so it shows only once per visitor.
```
// script.js — runs in the visitor's browser
setTimeout(() => {
  if (!localStorage.getItem('briefingSeen'))
    showBriefing();      // open the dialog
}, 10000);               // 10 s after load
```

Demo 2 — Voice message on chatbot click. Click the chat icon and the assistant speaks a greeting as the chat panel opens, then offers one-tap topics that open WhatsApp.

*Figure 20 — An event hook — clicking the chat icon plays a voice message and opens the chat panel*

- 1 Click the chat icon — the round WhatsApp button (bottom-right) is the trigger; the click event fires the hook.
- 2 Voice greeting + welcome — the assistant says “Hi, I am your assistant. How can I help you today?” as the panel opens.
- 3 Quick-reply topics — one-tap buttons for the most common questions, so the visitor need not type.
- 4 Hand-off to WhatsApp — picking a topic opens WhatsApp with the question ready to send.
```
// script.js — Web Speech API (speech synthesis)
chatIcon.addEventListener('click', () => {
  openPanel();
  speechSynthesis.speak(new SpeechSynthesisUtterance(
    'Hi, I am your assistant. How can I help you today?'));
});
```

Tip: browsers block sound until the visitor interacts with the page — that is why the voice greeting plays on the click, not on page load.

### 3.3 AI Security

An agent acts on your behalf, so its mistake is an action, not just a wrong answer. Five controls keep what it can see and do safe, reviewable and accountable: data control, permission control, human in the loop, traceability and right-sized models.

Data control: sort first, connect second. In April 2023 Samsung engineers uploaded internal source code to ChatGPT; by May the company had restricted generative AI on its own devices. Label your data before any agent touches it. Figure 21 uses four tiers: the meter shows how much of each tier the AI may see, down to none for NRIC numbers and API keys.

*Figure 21 — Four data classifications, and how much of each the AI may see*

Read deny rules in .claude/settings.json make Claude’s file tools refuse a path. They also cover commands Claude Code recognises, such as cat, but not every script, so keep your most sensitive data out of the project folder altogether.

Permission control: authorise the verb, not just the agent. Authentication proves who the agent is. Authorisation decides what it may do: read, write, edit, delete, send, pay. In July 2025 Replit’s AI agent deleted SaaStr’s production database during a code freeze, as SaaStr’s founder reported and Replit’s CEO acknowledged. Delete was a verb it should never have held.

*Figure 22 — An authorisation matrix: each agent gets only the verbs its job needs*

Claude Code checks deny rules, then ask rules, then allow rules, and the first match wins, so an allow rule cannot carve a hole in a deny. Google splits Gmail access the same way: gmail.readonly reads your mail, gmail.send sends it.

Human in the loop: put the gate where the damage would be. In February 2024 a Canadian tribunal held Air Canada liable for wrong refund advice from its website chatbot (Moffatt v. Air Canada). Two patterns keep people in charge. A human gate stops the agent until someone approves the action. Escalation hands the whole case to a person, because the agent should not decide at all.

*Figure 23 — Route each action by risk: auto-run, human gate or escalate (thresholds are illustrative)*

Claude Code gives you three gates: plan mode reviews the whole approach, an ask rule pauses on one command, and a PreToolUse hook can return ask.

Traceability: the log is how you find the leak. Figure 24 walks through an illustrative data leak. A hidden instruction on a web page makes the agent upload customers.csv to a paste site. Because a PostToolUse hook wrote every tool call to an audit log, you can answer who asked, what it touched and where it went, and then contain it.

*Figure 24 — A data-leak timeline, and the log line that proves it (illustrative scenario)*

Under Singapore’s PDPA, you must assess a suspected breach within 30 calendar days, and if it is notifiable, tell PDPC no later than 3 calendar days after you determine that. A breach is notifiable if it is likely to cause significant harm or affects 500 or more individuals. Claude Code also keeps session transcripts under ~/.claude/projects/.

Right-sized models: more power, harder to control. Anthropic will not release Claude Mythos Preview generally: it can find and exploit software flaws at a level beyond all but the most skilled humans, and Anthropic says it needs better safeguards first. As a rule of thumb, the more capable the model, the longer it runs on its own and the further a mistake reaches, so the more control you must add.

*Figure 25 — Control effort climbs with capability (a rule of thumb, not a benchmark)*

Start with the smallest model, prove it with your own checks, and step up only when the checks fail. A sub agent’s model field makes this one line: model: haiku.

Sources: Bloomberg, 2 May 2023 (Samsung); Fortune, 23 Jul 2025 (Replit); Moffatt v. Air Canada, 2024 BCCRT 149; PDPC, Guide on Managing and Notifying Data Breaches under the PDPA; anthropic.com/glasswing, 7 Apr 2026; code.claude.com/docs (hooks, permissions); developers.google.com/workspace/gmail/api/auth/scopes.

### Activity 3 — Agents, Hooks and Security

Goal: Give your agent helpers, make your site react to events, then secure and ship it. You work through three parts, 3A to 3C. Lab 3 (labs/lab3-agents-hooks-security/) holds the exact prompts.

PP Task 3 asks for a screenshot of a hook you built. Any hook counts.

### Activity 3A — Create Custom Sub Agents

Goal: Create two project sub agents — one for security, one for UI/UX & lead optimisation.

#### Step-by-step

- Create the security sub agent. Run:
```
/agents
```

- Choose Create new agent → Project, then describe it:
> A security review agent that scans this website for vulnerabilities (XSS, exposed secrets, insecure form handling, missing headers) and recommends hardening measures.

- This saves to .claude/agents/.
- Open the new file in .claude/agents/ and check its front matter: name, description, tools, skills and model (see Figure 17).
- Run the security agent and apply its recommended fixes.
- Install the lead-magnets skill:
```
npx skills add https://github.com/coreyhaines31/marketingskills --skill lead-magnets
```

- Create a UI/UX sub agent via /agents (Project) with this role:
> An expert UI/UX engineer that reviews the website and, using the lead-magnets skill, optimises it for lead capture and conversion.

- Run the UI/UX agent, apply improvements, then commit and push.
### Activity 3B — Build Your Own Hooks

Goal: Build the two hooks from the demo: a pop-up 10 seconds after the page loads, and a voice message when a visitor clicks the chatbot icon.

Both are page hooks. They live in script.js and run in the visitor’s browser, and you do not write them by hand: you ask Claude Code. Claude Code’s own hooks are a different thing: shell commands in .claude/settings.json that fire on its lifecycle events.

#### Step-by-step

- Add the pop-up hook — ask Claude Code:
> Add a pop-up dialog hook to my website. Start a timer when the page loads and open the dialog after 10 seconds. Show it once per visitor using localStorage. Give it a headline, one short sentence and a “Got it” button. Dim the page behind it. Use vanilla JS in script.js.

- Add the chatbot icon and voice hook — ask Claude Code:
> Add a round chatbot icon fixed to the bottom-right corner of every page. When the visitor clicks it, open a small chat panel and speak this with the Web Speech API: “Hi, I am your assistant. How can I help you today?”

- Test with Playwright — ask Claude to use the Playwright MCP tool to wait 10 seconds and confirm the dialog opens once, then click the icon and confirm the panel opens. Playwright cannot hear the voice, so click the icon yourself and listen.
- Push to GitHub and confirm both hooks work on the live site.
- Keep your evidence — take a screenshot of a hook you built, for PP Task 3.

Tip: browsers block sound until the visitor interacts with the page, so the voice plays on the click, not on page load.

### Activity 3C — Test, Secure & Deploy

Goal: Put the AI security controls to work on your own project, then ship the final version.

#### Step-by-step

- Test the enquiry form with Playwright MCP:
> Use the Playwright MCP tool to fill in and submit the enquiry form with test data, and confirm the success message appears.

- Run a final security scan — run your security sub agent from Activity 3A and fix every critical and high finding.
- Add deny rules — ask Claude:
> Update .claude/settings.json. Merge with what is there. Deny reading .env and anything under secrets/, and ask before any git push.

- Run the lead-magnet UX review and apply what you agree with.
- Deploy the final version — run /gitpush, then verify the live site end to end.
- Check your three PP screenshots: the live site (Task 1), the redesign (Task 2) and your hook (Task 3).
### Key Concepts Summary — What Triggers What

Claude Code can be extended in six ways. They differ mainly in what makes Claude load them: some are always present, some are pulled in only when relevant, some you fire yourself, and some are fired by an event or by another agent. Choosing the right mechanism is mostly a question of matching the trigger to the job.

| Mechanism | Trigger — when it loads / runs |
|---|---|
| CLAUDE.md | Every session. Project memory, read automatically at the start of each session, so it is always in context. Generate with /init and keep it short and high-signal. |
| Skills (SKILL.md) | On demand. Claude matches the skill's name and description against the task and loads it only when relevant — so it costs no context until it fires. |
| Tools (built-in & MCP) | On demand. Claude invokes tools itself during the agentic loop whenever the job needs them — reading files, searching, running commands, driving a browser via MCP. |
| Slash commands | Manually. Reusable prompts saved in .claude/commands/; they run only when you type /<name> yourself. Use them for multi-step workflows you repeat. |
| Hooks | By event. Shell commands configured in .claude/settings.json that fire deterministically at lifecycle events (PreToolUse, PostToolUse, Notification, Stop) — they always run, rather than relying on the model to choose to. |
| Sub agents | By delegation. Specialised assistants with their own prompt, tools and context window, spawned when the main agent delegates a focused job and reports only the summary back. |

Why it matters: anything loaded every session competes for the context window. Keep CLAUDE.md tight, and push specialised or occasional procedures out into skills, commands, hooks and sub agents — so Claude carries only what the current task actually needs.

### Lab Materials

The hands-on labs live in the labs folder of the course repository, so you can clone them and keep working after class. Each lab folder contains a README that indexes its parts, and every step gives you the exact prompt to paste, what you should see, and a checkpoint to confirm before moving on.

| Lab | What you build |
|---|---|
| Lab 1 — labs/lab1-seven-steps/ | Topic 1, Activity 1, PP Task 1. The 7-step build workflow end to end: goal & features, plan mode, execute, /init context, commit to GitHub, GitHub Pages deployment and CI/CD. Includes a finished reference site and three sample sites (bridal booking, interior design, lead generator). |
| Lab 2 — labs/lab2-commands-tools-skills/ | Topic 2, Activity 2, PP Task 2. Build a /gitpush custom slash command; install Playwright MCP and screenshot the live site into the README; install skills at project level and use them to harden, plan and redesign the Lab 1 website. |
| Lab 3 — labs/lab3-agents-hooks-security/ | Topic 3, Activity 3, PP Task 3. A security-scan sub agent that writes security-scan.json; a pop-up hook; a voice hook on the chatbot icon; a Stop hook in Claude Code; then the final test, secure and deploy. An add-task sub agent and /loop are take-home parts. |

Labs repository: https://github.com/tertiarycourses/TGS-2025052468-Agentic-AI-Applications-with-Claude-Code/tree/main/labs

### Quick Command Reference

| Command | What it does |
|---|---|
| claude | Launch Claude Code |
| claude --continue / --resume | Resume the last / a chosen session |
| /init | Generate CLAUDE.md project memory |
| /memory | Browse & edit CLAUDE.md and auto memory |
| /context | See what’s using the context window |
| /compact | Summarise conversation to save context |
| /clear | Clear context for a new task |
| @file | Mention a file/folder to add to context |
| Shift+Tab | Cycle permission modes (default → acceptEdits → plan) |
| /rename · /branch | Name / fork the current session |
| /goal <condition> | Keep working until a condition is met |
| /mcp | View & manage connected MCP servers |
| /agents | Create / manage sub agents |
| /gitpush | Your custom push-deploy-secure command |
| claude mcp add <name> -s project <cmd> | Add an MCP server at project level |
| npx skills add <repo> --skill <name> | Install a skill |

### Support

If you have any enquiries during or after the class, contact us:

- Email: enquiry@tertiaryinfotech.com
- Tel: +65 6100 0613

Courseware & assessment: Download the courseware and complete the Written Assessment (WA) and Practical Performance (PP) on the LMS at https://lms-tms.tertiaryinfotech.com/.

Assessment flow (follow in order at the assessment step):

- Complete the TRAQOM survey — scan the TRAQOM QR code on the LMS.
- Take the Assessment Digital Attendance.
- Complete the Assessment (WA + PP).
- Submit your assessment answers on the LMS (https://lms-tms.tertiaryinfotech.com/).
- Sign the Assessment Summary Record.

Remember to complete your AM, PM and Assessment digital attendance, and the certification & TRAQOM survey at ai-lms-tms.tertiaryinfo.tech.

