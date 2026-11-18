// A text-based RAG chatbot with a voice hook. No framework, no API key, no backend.
const GREETING = 'I am an IT assistant. How can I help you?';
const DONT_KNOW = "I don't know that one yet. Please contact the IT helpdesk.";
const STOP = new Set('a an and are as at be by can do for from how i in is it me my of on or the to what when where with you your'.split(' '));
const THRESHOLD = 0.25;   // share of the question's keywords an article must match

const icon = document.getElementById('chat-icon');
const panel = document.getElementById('chat-panel');
const log = document.getElementById('chat-log');
const form = document.getElementById('chat-form');
const input = document.getElementById('chat-input');
let knowledge = [];
let greeted = false;

fetch('knowledge.json')
  .then((r) => r.json())
  .then((data) => { knowledge = data; })
  .catch(() => say('bot', 'I cannot read knowledge.json. Open this page through a web server, not as a file.'));

const words = (text) => text.toLowerCase().match(/[a-z0-9-]+/g)?.filter((w) => !STOP.has(w)) ?? [];

// RETRIEVE: score every article by keyword overlap and keep the best two.
function retrieve(question) {
  const asked = [...new Set(words(question))];
  if (!asked.length) return [];
  return knowledge
    .map((article) => {
      const title = new Set(words(article.title));
      const body = new Set(words(article.answer));
      const hits = asked.reduce((n, w) => n + (title.has(w) ? 2 : body.has(w) ? 1 : 0), 0);
      return { article, score: hits / (asked.length * 2) };
    })
    .filter((hit) => hit.score >= THRESHOLD)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);
}

// ANSWER: build the reply only from what was retrieved, and name the source.
function answer(question) {
  const hits = retrieve(question);
  if (!hits.length) return { text: DONT_KNOW, sources: [] };
  // name the second article only when it matched nearly as well as the first
  const close = hits.filter((hit) => hit.score >= hits[0].score * 0.75);
  return { text: hits[0].article.answer, sources: close.map((hit) => hit.article.title) };
}

function say(who, text, sources = []) {
  const bubble = document.createElement('div');
  bubble.className = `msg ${who}`;
  bubble.textContent = text;
  if (sources.length) {
    const source = document.createElement('span');
    source.className = 'source';
    source.textContent = `Source: ${sources.join(' · ')}`;
    bubble.append(source);
  }
  log.append(bubble);
  log.scrollTop = log.scrollHeight;
}

function openPanel() {
  panel.hidden = false;
  icon.setAttribute('aria-expanded', 'true');
  if (!greeted) { say('bot', GREETING); greeted = true; }
  input.focus();
}
function closePanel() {
  panel.hidden = true;
  icon.setAttribute('aria-expanded', 'false');
  icon.focus();
}

// THE VOICE HOOK: the click is the event; the greeting is spoken only when the panel opens.
icon.addEventListener('click', () => {
  if (!panel.hidden) return closePanel();
  openPanel();
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    speechSynthesis.speak(new SpeechSynthesisUtterance(GREETING));
  }
});
document.getElementById('chat-close').addEventListener('click', closePanel);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) closePanel(); });
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const question = input.value.trim();
  if (!question) return;
  say('user', question);
  const reply = answer(question);
  say('bot', reply.text, reply.sources);
  input.value = '';
});
