import express from "express";
import { runPipeline } from "./pipeline/index.js";

const app = express();
app.use(express.json());

app.post("/generate", (req, res) => {
  try {
    const result = runPipeline(req.body.input);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});