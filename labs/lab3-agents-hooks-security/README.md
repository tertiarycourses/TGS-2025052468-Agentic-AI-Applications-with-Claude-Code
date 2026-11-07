# Lab 3 — Agents, Hooks and Security

**Topic 3 · Agents, Hooks and Security — maps to Activity 3 (slides 68–86) and PP Task 3**

Topic 3 gives your agent helpers, makes it react to events, and then puts controls
around it.

| Mechanism | Trigger | In this lab |
|---|---|---|
| **Sub agents** | **By delegation**: the main agent hands over a focused job | A security-scan sub agent |
| **Page hooks** | **By browser event**: a timer or a click on your website | A 10-second pop-up and a voice greeting |
| **Claude Code hooks** | **By lifecycle event**: fires deterministically inside Claude Code | A dialog when a task finishes, and an audit log |

> **Prerequisite:** Labs 1 and 2 finished. Work in that same project folder.

---

## Parts

| Part | Activity | What you build | File |
|---|---|---|---|
| A | 3A | A security-scan sub agent writing JSON | [`PART-A-security-agent.md`](PART-A-security-agent.md) |
| B | 3B | A pop-up hook that fires after 10 seconds | [`PART-B-popup-hook.md`](PART-B-popup-hook.md) |
| C | 3B | A voice message when the chatbot icon is clicked | [`PART-C-voice-hook.md`](PART-C-voice-hook.md) |
| D | 3B | A Claude Code hook that fires when a task finishes | [`PART-D-claude-code-hooks.md`](PART-D-claude-code-hooks.md) |
| E | 3C | Test, secure and deploy the final version | [`PART-E-final-check.md`](PART-E-final-check.md) |
| F | Take-home | An add-task sub agent | [`PART-F-add-task-agent.md`](PART-F-add-task-agent.md) |
| G | Take-home | `/loop` the security agent on a schedule | [`PART-G-loop.md`](PART-G-loop.md) |

---

## PP Task 3

The Practical Performance paper asks for a screenshot of a hook you built. **Any
hook counts**: the pop-up, the voice hook, a Claude Code hook, or one of your own.

**Checkpoint for the whole lab:** your hooks fire on their own, a sub agent scans on
request, your deny rules and audit log are in place, and the final site is live.
