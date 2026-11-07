# Lab 2 — Commands, Tools and Skills

**Topic 2 · Commands, Tools and Skills — maps to Activity 2 (slides 54–67) and PP Task 2**

Lab 1 got your site built and deployed. Now you automate the repetitive parts, give
Claude a real browser, and use a skill to lift the design.

> **Prerequisite:** Lab 1 finished: a deployed site with a GitHub repo. Work in that
> same project folder.

---

## Three triggers, side by side

| | Slash command | MCP tool | Skill |
|---|---|---|---|
| **Trigger** | **Manually**: only when you type `/gitpush` | **On demand**: Claude calls it when the task needs a browser | **On demand**: Claude loads it when your request matches its description |
| **Lives in** | `.claude/commands/gitpush.md` | `.mcp.json` (project) | `.claude/skills/<name>/SKILL.md` |
| **It is** | A saved prompt | An external server exposing tools | A folder of instructions |

---

## Parts

| Part | Activity | What you do | File |
|---|---|---|---|
| A | 2A | The `/gitpush` custom command | [`PART-A-custom-command.md`](PART-A-custom-command.md) |
| B | 2B | Playwright MCP and a screenshot in the README | [`PART-B-playwright-mcp.md`](PART-B-playwright-mcp.md) |
| C | 2B | Merge the screenshot step into `/gitpush` | [`PART-C-combine.md`](PART-C-combine.md) |
| D | 2D | Install the skills | [`PART-D-install-skills.md`](PART-D-install-skills.md) |
| E | 2D | Security hardening pass | [`PART-E-security.md`](PART-E-security.md) |
| F | 2D | Kanban-tracked revamp | [`PART-F-kanban.md`](PART-F-kanban.md) |
| G | 2D | Green redesign | [`PART-G-green-ux.md`](PART-G-green-ux.md) |

Activity 2C, testing the enquiry form with Playwright, is written up step by step in
the Learner Guide.

---

## PP Task 2

The Practical Performance paper asks for a screenshot of your site after a redesign
done with an Agent Skill. In class, Activity 2D uses `frontend-design` for the redesign
and `seo-audit` for the search pass. Parts D to G go further with three more skills, and
any design skill counts. Take the screenshot once your redesign is live.

**Checkpoint for the whole lab:** `/gitpush` commits your work, refreshes the README
screenshot and pushes; the skills sit under `.claude/skills/`; and the live site shows
your redesign.
