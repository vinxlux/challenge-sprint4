import { getById, updateUser, deleteUser, Usuario } from '../_data';

const send = (res: any, status: number, data: any) => res.status(status).json({ status, data });

export default function handler(req: any, res: any) {
  const { method } = req;
  const { id } = req.query || {};
  try {
    if (!id) return send(res, 400, { erro: 'ID é obrigatório' });

    if (method === 'GET') {
      const user = getById(id);
      if (!user) return send(res, 404, { erro: 'Usuário não encontrado' });
      return send(res, 200, user);
    }

    if (method === 'PUT') {
      const dados = req.body as Partial<Usuario>;
      if (!dados?.nome || !dados?.telefone || !dados?.email || !dados?.cpf) {
        return send(res, 400, { erro: 'Todos os campos são obrigatórios', recebido: dados });
      }
      const updated = updateUser(id, dados as Partial<Omit<Usuario, 'id'>>);
      if (!updated) return send(res, 404, { erro: 'Usuário não encontrado' });
      return send(res, 200, updated);
    }

    if (method === 'DELETE') {
      const ok = deleteUser(id);
      if (!ok) return send(res, 404, { erro: 'Usuário não encontrado' });
      return send(res, 200, { mensagem: 'Usuário excluído com sucesso' });
    }

    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    return send(res, 405, { erro: `Método ${method} não permitido` });
  } catch (err) {
    console.error('API /api/users/[id] error:', err);
    return send(res, 500, { erro: 'Erro interno no servidor' });
  }
}
