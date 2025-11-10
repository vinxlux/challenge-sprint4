import { getAll, createUser, Usuario } from '../_data';

const send = (res: any, status: number, data: any) => res.status(status).json({ status, data });

export default function handler(req: any, res: any) {
  const { method } = req;
  try {
    if (method === 'GET') {
      const users = getAll();
      return send(res, 200, users);
    }

    if (method === 'POST') {
      const novo = req.body as Partial<Usuario>;
      if (!novo?.nome || !novo?.telefone || !novo?.email || !novo?.cpf) {
        return send(res, 400, { erro: 'Todos os campos são obrigatórios', recebido: novo });
      }
      const created = createUser(novo as Omit<Usuario, 'id'>);
      return send(res, 201, created);
    }

    res.setHeader('Allow', ['GET', 'POST']);
    return send(res, 405, { erro: `Método ${method} não permitido` });
  } catch (err) {
    console.error('API /api/users error:', err);
    return send(res, 500, { erro: 'Erro interno no servidor' });
  }
}
