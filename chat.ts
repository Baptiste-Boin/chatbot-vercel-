export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const userInput = req.body.user_input;

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama3-8b-8192',
      messages: [{ role: 'user', content: userInput }],
      max_tokens: 512
    })
  });

  const data = await response.json();
  res.status(200).json({ result: data.choices[0].message.content });
}