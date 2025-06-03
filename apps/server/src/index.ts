import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  // Simulación por ahora
  res.json({
    reply: `Echo from Ollama (simulated): ${message}`
  });

  // Más adelante se puede conectar con tu instancia local:
  // const ollamaResponse = await fetch("http://localhost:11434/api/generate", {...})
});

app.listen(port, () => {
  console.log(`✅ Server listening at http://localhost:${port}`);
});
