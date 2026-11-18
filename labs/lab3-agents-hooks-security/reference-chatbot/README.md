# Reference — RAG Chatbot with a Voice Greeting

The finished version of [Part C](../PART-C-voice-hook.md), and the site behind the
Demo 2 slide. Compare it with your own build after you finish the part.

| File | What it holds |
|---|---|
| `knowledge.json` | The knowledge base: 10 short IT help articles |
| `script.js` | Retrieve (keyword overlap, best two), answer (from the retrieved article, with its source) and the voice hook |
| `index.html`, `styles.css` | The page, the chatbot icon and the chat panel |

## Run it

The page reads `knowledge.json` with `fetch`, which browsers block for a file opened
from disk. Serve the folder instead:

```
python3 -m http.server 8000
```

Then open http://localhost:8000 and click the round icon at the bottom-right.
On GitHub Pages it runs as it is.

## Try

- "How do I reset my password?" answers from *Reset your password*.
- "I cannot connect to the VPN" answers from *Connect to the VPN*.
- "What is the capital of France?" gets "I don't know that one yet."
