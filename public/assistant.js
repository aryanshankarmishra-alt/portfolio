// public/assistant.js
// Client that calls /api/chat to get AI-generated replies

(() => {
  const messagesEl = document.getElementById('messages');
  const form = document.getElementById('form');
  const input = document.getElementById('input');

  function appendMessage(text, cls = 'bot') {
    const el = document.createElement('div');
    el.className = 'msg ' + (cls === 'user' ? 'user' : 'bot');
    el.textContent = text;
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  async function fetchReply(message) {
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ message })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || JSON.stringify(data));
      return data.reply;
    } catch (err) {
      console.error(err);
      return 'Sorry, the assistant is unavailable right now.';
    }
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    appendMessage(text, 'user');
    input.value = '';
    appendMessage('...', 'bot');
    const reply = await fetchReply(text);
    // replace the last bot '...' with the real reply
    const bots = messagesEl.querySelectorAll('.bot');
    if (bots.length) bots[bots.length - 1].textContent = reply;
  });

  appendMessage("Hi — I'm the recruiter assistant for Aryansh. Ask me about technologies, contact info, availability, or the resume.");
})();
