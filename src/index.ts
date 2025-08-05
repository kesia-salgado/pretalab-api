import express from "express";
import { transactions } from "./data";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({ message: "Transactions API v1" });
});

app.get("/transactions", (_req, res) => {
  res.json({ transactions });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;
