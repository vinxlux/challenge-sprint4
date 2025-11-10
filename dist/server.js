import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
let usuarios = [
  { id: 1, nome: "Vin\xEDcius Luis", telefone: "11999999999", email: "vinicius@email.com", cpf: "12345678900" }
];
app.get("/api/users", (_req, res) => {
  res.json({ status: 200, data: usuarios });
});
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = usuarios.find((u) => u.id === id);
  if (!user) return res.status(404).json({ erro: "Usu\xE1rio n\xE3o encontrado" });
  res.json({ status: 200, data: user });
});
app.post("/api/users", (req, res) => {
  const novo = req.body;
  if (!novo?.nome || !novo?.telefone || !novo?.email || !novo?.cpf) {
    return res.status(400).json({ erro: "Todos os campos s\xE3o obrigat\xF3rios", recebido: novo });
  }
  const id = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;
  const novoUsuario = { id, nome: novo.nome, telefone: novo.telefone, email: novo.email, cpf: novo.cpf };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});
app.put("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = usuarios.findIndex((u) => u.id === id);
  if (index === -1) return res.status(404).json({ erro: "Usu\xE1rio n\xE3o encontrado" });
  const dados = req.body;
  if (!dados?.nome || !dados?.telefone || !dados?.email || !dados?.cpf) {
    return res.status(400).json({ erro: "Todos os campos s\xE3o obrigat\xF3rios", recebido: dados });
  }
  usuarios[index] = { ...usuarios[index], ...dados, id };
  res.json({ status: 200, data: usuarios[index] });
});
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = usuarios.findIndex((u) => u.id === id);
  if (index === -1) return res.status(404).json({ erro: "Usu\xE1rio n\xE3o encontrado" });
  usuarios.splice(index, 1);
  res.json({ status: 200, mensagem: "Usu\xE1rio exclu\xEDdo com sucesso" });
});
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
app.listen(PORT, "0.0.0.0", () => console.log(`API (TS) rodando em http://localhost:${PORT}`));
