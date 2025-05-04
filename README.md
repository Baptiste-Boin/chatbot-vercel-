# Chatbot IA via Groq avec Vercel

## 🚀 Déploiement

1. Clone ce repo
2. Pousse-le sur GitHub
3. Connecte-le à https://vercel.com
4. Ajoute ta variable d’environnement :
   - Key: `GROQ_API_KEY`
   - Value: ta clé Groq API

5. Déploie 🎉

## 🧪 Test

```bash
curl -X POST https://ton-projet.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"user_input": "Salut ! Explique-moi le Big Bang"}'
```