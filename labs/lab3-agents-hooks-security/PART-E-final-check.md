# Part E — Test, Secure and Deploy

**Objective:** Put the five AI security controls to work on your own project, then
ship the final version.

---

## Step 1 — Re-test the enquiry form

**Prompt:**

```
Use the Playwright MCP tool to fill in and submit the enquiry form with test data.
Confirm the success message appears. Report pass or fail.
```

---

## Step 2 — Re-run the security scan

**Prompt:**

```
Use the security-scanner agent to scan the website, then fix every critical and
high finding and scan again to confirm they are resolved.
```

---

## Step 3 — Data control and permission control

**Prompt:**

```
Update .claude/settings.json. Merge with what is there; do not overwrite it.

- Deny reading .env and anything under secrets/.
- Ask before any git push.

Show me the final permissions block.
```

It should contain:

```json
{
  "permissions": {
    "ask": ["Bash(git push *)"],
    "deny": ["Read(./.env)", "Read(./secrets/**)"]
  }
}
```

Claude Code checks deny, then ask, then allow, and the first match wins.

---

## Step 4 — Traceability

**Prompt:**

```
Add a PostToolUse hook that appends the time, tool name and tool input of every
tool call to logs/audit.log. Add logs/ to .gitignore. Merge with my existing hooks.
```

Restart Claude Code, run any small task, then read `logs/audit.log`.

---

## Step 5 — Deploy and collect your evidence

Push to GitHub and open the live site. Check that you have your three PP
screenshots:

| PP task | Screenshot | From |
|---|---|---|
| Task 1 | The live site: hero, three testimonials, enquiry form | Lab 1 |
| Task 2 | The site after your skill-driven redesign | Lab 2 |
| Task 3 | A hook you built | Lab 3 |

---

**Checkpoint:** The form passes, the scan shows no critical or high findings, the
deny rules are in place, `logs/audit.log` is filling up, and the live site shows
your final version.

⬅️ Back: [Part D](PART-D-claude-code-hooks.md) · ➡️ Take-home: [Part F — Add-task agent](PART-F-add-task-agent.md)
