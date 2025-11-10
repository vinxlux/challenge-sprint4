import express, { Request, Response } from 'express';
import cors from 'cors';
import { Usuario, usuarios, getAll, getById, createUser, updateUser, deleteUser } from '../api/_data.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/users', (_req: Request, res: Response) => {
  const users = getAll();
  res.json({ status: 200, data: users });
});

app.get('/api/users/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = getById(id);
  if (!user) return res.status(404).json({ erro: 'Usuário não encontrado' });
  res.json({ status: 200, data: user });
});

app.post('/api/users', (req: Request, res: Response) => {
  const novo = req.body as Partial<Usuario>;
  if (!novo?.nome || !novo?.telefone || !novo?.email || !novo?.cpf) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios', recebido: novo });
  }
  const created = createUser(novo as Omit<Usuario, 'id'>);
  res.status(201).json(created);
});

app.put('/api/users/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const dados = req.body as Partial<Usuario>;
  if (!dados?.nome || !dados?.telefone || !dados?.email || !dados?.cpf) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios', recebido: dados });
  }
  const updated = updateUser(id, dados as Partial<Omit<Usuario, 'id'>>);
  if (!updated) return res.status(404).json({ erro: 'Usuário não encontrado' });
  res.json({ status: 200, data: updated });
});

app.delete('/api/users/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const ok = deleteUser(id);
  if (!ok) return res.status(404).json({ erro: 'Usuário não encontrado' });
  res.json({ status: 200, mensagem: 'Usuário excluído com sucesso' });
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
app.listen(PORT, '0.0.0.0', () => console.log(`API (TS) rodando em http://localhost:${PORT}`));

export {};