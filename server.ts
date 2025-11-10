import express, { Request, Response } from 'express';
import cors from 'cors';

interface Usuario {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  cpf: string;
}

const app = express();
app.use(cors());
app.use(express.json());

let usuarios: Usuario[] = [
  { id: 1, nome: 'Vinícius Luis', telefone: '11999999999', email: 'vinicius@email.com', cpf: '12345678900' },
];

app.get('/api/users', (_req: Request, res: Response) => {
  res.json({ status: 200, data: usuarios });
});

app.get('/api/users/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = usuarios.find(u => u.id === id);
  if (!user) return res.status(404).json({ erro: 'Usuário não encontrado' });
  res.json({ status: 200, data: user });
});

app.post('/api/users', (req: Request, res: Response) => {
  const novo = req.body as Partial<Usuario>;
  if (!novo?.nome || !novo?.telefone || !novo?.email || !novo?.cpf) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios', recebido: novo });
  }
  const id = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;
  const novoUsuario: Usuario = { id, nome: novo.nome, telefone: novo.telefone, email: novo.email, cpf: novo.cpf };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

app.put('/api/users/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = usuarios.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).json({ erro: 'Usuário não encontrado' });
  const dados = req.body as Partial<Usuario>;
  if (!dados?.nome || !dados?.telefone || !dados?.email || !dados?.cpf) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios', recebido: dados });
  }
  usuarios[index] = { ...usuarios[index], ...dados, id } as Usuario;
  res.json({ status: 200, data: usuarios[index] });
});

app.delete('/api/users/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = usuarios.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).json({ erro: 'Usuário não encontrado' });
  usuarios.splice(index, 1);
  res.json({ status: 200, mensagem: 'Usuário excluído com sucesso' });
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
app.listen(PORT, '0.0.0.0', () => console.log(`API (TS) rodando em http://localhost:${PORT}`));

export {};
