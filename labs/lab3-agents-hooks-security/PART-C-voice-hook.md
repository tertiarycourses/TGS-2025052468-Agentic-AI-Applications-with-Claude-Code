# Part C — A Voice Message on the Chatbot Icon

**Objective:** Build the second hook from the class demo. The event is a click: the
visitor clicks the chatbot icon, and the assistant speaks a greeting.

Browsers block sound until the visitor interacts with the page. That is why the
voice plays on the click and not on page load.

---

## Step 1 — Ask for the hook

**Prompt:**

```
Add a chatbot icon and a voice hook to my website.

Icon:
- A round chatbot icon fixed to the bottom-right corner of every page, above all
  other content, with an aria-label.

Hook:
- When the visitor clicks the icon, open a small chat panel with a welcome message
  and 3 suggested questions.
- On the same click, speak this with the browser's Web Speech API
  (speechSynthesis.speak): "Hi, I am your assistant. How can I help you today?"
- If the browser has no speechSynthesis, skip the voice silently.

Requirements:
- Vanilla JS in script.js and CSS in styles.css. No frameworks.
- Keyboard reachable; Escape closes the panel.
- On mobile the panel must not cover the whole screen.
```

---

## Step 2 — Test it

**Prompt:**

```
Use the Playwright MCP tool to test the chatbot icon:

1. Open the site and confirm the icon is visible at the bottom-right.
2. Click it and confirm the panel opens with the welcome message and 3 questions.
3. Confirm speechSynthesis.speak was called on the click.
4. Confirm Escape closes the panel.
5. Save a screenshot of the open panel as screenshots/voice-hook.png.

Report pass or fail for each check.
```

Playwright cannot hear the voice. Open the site yourself, click the icon, and
listen.

---

**Checkpoint:** Clicking the icon opens the panel and you hear the greeting.

⬅️ Back: [Part B](PART-B-popup-hook.md) · ➡️ Next: [Part D — A Claude Code hook](PART-D-claude-code-hooks.md)
