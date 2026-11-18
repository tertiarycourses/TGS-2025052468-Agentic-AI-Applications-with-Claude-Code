# Part C — A RAG Chatbot with a Voice Greeting

**Objective:** Build a text-based RAG chatbot for your website, then add the second
hook from the class demo: the visitor clicks the chatbot icon, and the assistant says
"I am an IT assistant. How can I help you?"

Browsers block sound until the visitor interacts with the page. That is why the
voice plays on the click and not on page load.

---

## Step 1 — Build the text-based RAG chatbot

RAG means retrieve first, answer second. The chatbot looks up the best-matching
articles in a knowledge base and builds its reply only from them, so it cannot make
up an answer.

**Prompt:**

```
Build a text-based RAG chatbot for my website. It is an IT assistant.

Knowledge base:
- Create knowledge.json with 10 short IT help articles: reset a password, connect
  to VPN, connect to Wi-Fi, set up a printer, report a phishing email, request
  software, set up email on a phone, share a file, book a meeting room, replace
  a laptop.
- Each article has an id, a title and an answer of two or three sentences.

Chat panel:
- A round chatbot icon fixed to the bottom-right corner of every page, above all
  other content, with an aria-label.
- Clicking the icon opens a small chat panel with a welcome message, a text box
  and a Send button.

Retrieve, then answer:
- When the visitor sends a question, score every article in knowledge.json against
  the question by keyword overlap, and take the best two.
- Build the reply only from those two articles, and show each article title under
  the reply as the source.
- If no article scores above the threshold, reply: "I don't know that one yet.
  Please contact the IT helpdesk." Never make up an answer.

Requirements:
- Vanilla JS in script.js and CSS in styles.css. No frameworks, no API key and
  no backend, so it runs on GitHub Pages.
- Keyboard reachable; Enter sends the question and Escape closes the panel.
- On mobile the panel must not cover the whole screen.
```

> **Where is the model?** This chatbot does the retrieval in the browser and a
> template writes the reply, so the site needs no API key. In production you pass
> the retrieved passages to Claude to write the answer, as the refund chatbot on
> slide 80 does.

---

## Step 2 — Add the voice hook

**Prompt:**

```
Add a voice hook to the chatbot.

- When the visitor clicks the chatbot icon, speak this with the browser's
  Web Speech API (speechSynthesis.speak):
  "I am an IT assistant. How can I help you?"
- Show the same sentence as the welcome message in the chat panel.
- Speak only when the panel opens, not when it closes.
- If the browser has no speechSynthesis, skip the voice silently.
```

---

## Step 3 — Test it

**Prompt:**

```
Use the Playwright MCP tool to test the chatbot:

1. Open the site and confirm the icon is visible at the bottom-right.
2. Click it and confirm the panel opens with the welcome message.
3. Confirm speechSynthesis.speak was called on the click.
4. Ask "How do I reset my password?" and confirm the reply comes from the
   password article and names it as the source.
5. Ask "What is the capital of France?" and confirm the chatbot says it does
   not know.
6. Confirm Escape closes the panel.
7. Save a screenshot of the open panel as screenshots/voice-hook.png.

Report pass or fail for each check.
```

Playwright cannot hear the voice. Open the site yourself, click the icon, and
listen.

---

Compare your build with the finished version in [`reference-chatbot/`](reference-chatbot/),
the site shown on the Demo 2 slide.

**Checkpoint:** Clicking the icon opens the panel, you hear "I am an IT assistant.
How can I help you?", and the chatbot answers a password question from its
knowledge base.

⬅️ Back: [Part B](PART-B-popup-hook.md) · ➡️ Next: [Part D — A Claude Code hook](PART-D-claude-code-hooks.md)
