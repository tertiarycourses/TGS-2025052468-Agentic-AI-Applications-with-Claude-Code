# Part B — A Pop-up That Fires After 10 Seconds

**Objective:** Build the first hook from the class demo. The event is a timer: the
visitor does nothing, and 10 seconds after the page loads a dialog appears.

This is a **page hook**. It lives in `script.js` and runs in the visitor's browser,
not in Claude Code. You still do not write it by hand: you ask Claude Code.

---

## Step 1 — Ask for the hook

**Prompt:**

```
Add a pop-up dialog hook to my website.

Trigger:
- Start a timer when the page loads. After 10 seconds, open the dialog.
- Show it once per visitor: remember it in localStorage and do not show it again.

Dialog:
- A headline and one short sentence that promote our free consultation.
- A single "Got it" button that closes it.
- Dim the page behind the dialog so attention goes to the message.

Requirements:
- Vanilla JS in script.js and CSS in styles.css. No frameworks.
- Accessible: move focus into the dialog when it opens, Escape closes it, and
  focus returns to the page afterwards.
- Responsive on mobile.
```

---

## Step 2 — Test it with Playwright

**Prompt:**

```
Use the Playwright MCP tool to test the pop-up:

1. Clear localStorage, open the site and confirm no dialog shows at first.
2. Wait 10 seconds and confirm the dialog opens.
3. Click "Got it" and confirm it closes.
4. Reload, wait 10 seconds and confirm it does NOT open a second time.
5. Save a screenshot of the open dialog as screenshots/popup-hook.png.

Report pass or fail for each check.
```

---

**Checkpoint:** The dialog opens 10 seconds after the first visit and never again
for that visitor, and `screenshots/popup-hook.png` shows it open.

> **PP Task 3** asks for a screenshot of a hook you built. This one qualifies.

⬅️ Back: [Part A](PART-A-security-agent.md) · ➡️ Next: [Part C — Voice hook](PART-C-voice-hook.md)
