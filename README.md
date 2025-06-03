# 🦙 Ollama Chat Playground

A monorepo experiment for running an AI chatbot locally using [Ollama](https://ollama.com/) + [LLaMA 3](https://ollama.com/library/llama3), with a Next.js frontend and Express backend — no external APIs required.

---

## 🧱 Tech Stack

- **Frontend**: Next.js (App Router), TailwindCSS, React
- **Backend**: Express.js (TypeScript)
- **Local LLM**: Ollama running LLaMA 3
- **Monorepo**: Managed with [pnpm workspaces](https://pnpm.io/workspaces)

---

## 📁 Project Structure

```
ollama-chat-playground/
├── apps/
│   ├── web/       # Next.js frontend (AmberSky UI)
│   └── server/    # Express API backend
├── package.json   # Root workspace configuration
├── pnpm-workspace.yaml
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ollama-chat-playground.git
cd ollama-chat-playground
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start Ollama locally (if not running already)

```bash
ollama run llama3
```

### 4. Start the monorepo (frontend + backend)

```bash
pnpm dev
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:3001/api/chat](http://localhost:3001/api/chat)

---

## 🧠 How It Works

- The frontend sends a request to `/api/chat`
- This routes to the Express backend at `localhost:3001`
- The backend talks to the local Ollama instance and returns a response

---

## 🛠 Scripts

From the root:

```bash
pnpm dev          # Run both web and server concurrently
pnpm dev:web      # Run frontend only
pnpm dev:server   # Run backend only
```

---

## 📦 Environment Variables

If needed, create `.env` files inside `apps/web` and `apps/server`.  
Right now, the API URLs are hardcoded for local development.

---

## 💬 Chat Example

In the AmberSky interface, click the 💬 button to open a modal and start chatting with AmberAI, powered by LLaMA 3 running on your machine.

---

## 📄 License

MIT
