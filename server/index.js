// Simple Express proxy to OpenAI for the recruiter assistant.
// Run with: NODE_ENV=development node index.js
// This server expects OPENAI_API_KEY in the environment. Do NOT commit your API key.

require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_KEY) {
  console.warn('OPENAI_API_KEY not set — the chat endpoint will fail without it.');
}

// Serve the public directory so assistant.html can be served by the same server if desired
app.use(express.static(path.join(__dirname, '..', 'public')));

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Missing message' });

  try {
    const systemPrompt = `
You are the recruiter assistant for "Aryanshankarmishra". Use the following facts when relevant:
- Name: Aryanshankarmishra
- Role: Frontend Engineer / Full-stack developer
- Tech: TypeScript, React, Next.js, Tailwind/CSS, Node.js
- Contact: aryanshankarmishra@gmail.com
- LinkedIn: https://www.linkedin.com/in/aryanshankarmishra
- GitHub: https://github.com/aryanshankarmishra-alt
Keep answers concise (1-4 sentences) and professional. If the user asks for the resume, provide the portfolio link: https://github.com/aryanshankarmishra-alt/portfolio#readme
`;

    const payload = {
      model: 'gpt-4',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      max_tokens: 400,
      temperature: 0.1
    };

    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENAI_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await r.json();
    if (!r.ok) {
      return res.status(r.status).json({ error: data });
    }
    const reply = data.choices?.[0]?.message?.content || 'Sorry, no response';
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Server error' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Assistant server listening on ${port}`));
