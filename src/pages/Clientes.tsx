import { useState, useEffect } from "react";
import { PageLayout } from '../components/PageLayout';

export default function Clientes() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', cpf: '' });
  const [status, setStatus] = useState<string | null>(null);
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function fetchUsuarios() {
    setLoading(true);
    try {
      const res = await fetch('/api/users');
      if (!res.ok) {
        const txt = await res.text().catch(() => '');
        console.error('fetchUsuarios error:', res.status, txt);
        setUsuarios([]);
      } else {
        const json = await res.json();
        setUsuarios(json.data || []);
      }
    } catch {
      setUsuarios([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchUsuarios();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    try {
      const url = editingId ? `/api/users/${editingId}` : '/api/users';
      const method = editingId ? 'PUT' : 'POST';
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setStatus(editingId ? 'Cliente atualizado com sucesso!' : 'Cliente cadastrado com sucesso!');
        setForm({ nome: '', email: '', telefone: '', cpf: '' });
        setEditingId(null);
        fetchUsuarios();
      } else {
        const contentType = response.headers.get('content-type') || '';
        let errorBody: any = null;
        if (contentType.includes('application/json')) {
          errorBody = await response.json().catch(() => null);
        } else {
          errorBody = await response.text().catch(() => null);
        }
        console.error('submit error', response.status, errorBody);
        if (response.status === 404) {
          setStatus('Erro: Usuário não encontrado. Voltando para modo de cadastro. (404)');
          setEditingId(null);
        } else {
          const errMsg = typeof errorBody === 'object' ? (errorBody?.erro || JSON.stringify(errorBody)) : String(errorBody || response.statusText || '');
          setStatus(`Erro ao cadastrar/atualizar: ${response.status} ${errMsg}`);
        }
      }
    } catch {
      setStatus('Erro de conexão com a API. Verifique se o servidor está rodando.');
    }
  }

  async function handleDelete(id: number) {
    if (!confirm('Tem certeza que deseja excluir este cliente?')) return;
    try {
      const res = await fetch(`/api/users/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setStatus('Cliente excluído com sucesso');
        fetchUsuarios();
      } else {
        const ct = res.headers.get('content-type') || '';
        const err = ct.includes('application/json') ? await res.json().catch(() => null) : await res.text().catch(() => null);
        console.error('delete error', res.status, err);
        setStatus('Erro ao excluir: ' + (err?.erro || String(err) || res.statusText));
      }
    } catch {
      setStatus('Erro de conexão ao excluir.');
    }
  }

  function startEdit(u: any) {
    setEditingId(u.id);
    setForm({ nome: u.nome || '', email: u.email || '', telefone: u.telefone || '', cpf: u.cpf || '' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function cancelEdit() {
    setEditingId(null);
    setForm({ nome: '', email: '', telefone: '', cpf: '' });
    setStatus(null);
  }

  return (
    <PageLayout>
      <main className="max-w-xl mx-auto pt-32 pb-32 px-2 sm:px-6">
        <section className="glass-card text-center">
          <h1 className="text-4xl font-black mb-8 text-white drop-shadow">Adicionar Cliente</h1>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={form.nome}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-[#232a36] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-[#232a36] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <input
              type="tel"
              name="telefone"
              placeholder="Telefone"
              value={form.telefone}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-[#232a36] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              value={form.cpf || ''}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-[#232a36] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <div className="flex gap-4">
              <button type="submit" className="btn-primary w-full text-xl">{editingId ? 'Salvar' : 'Cadastrar'}</button>
              {editingId && (
                <button type="button" onClick={cancelEdit} className="btn-secondary">Cancelar</button>
              )}
            </div>
          </form>
          {status && <p className="mt-6 text-cyan-300 font-bold">{status}</p>}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-cyan-200 mb-4">Clientes cadastrados</h2>
            <div className="max-h-64 overflow-y-auto rounded-lg border border-white/10 bg-[#232a36]/60 p-4">
              {loading ? (
                <p className="text-cyan-300">Carregando...</p>
              ) : usuarios.length === 0 ? (
                <p className="text-cyan-300">Nenhum cliente cadastrado.</p>
              ) : (
                <ul className="flex flex-col gap-4">
                  {usuarios.map(u => (
                    <li key={u.id} className="bg-[#181c24] rounded-lg p-3 text-left text-white shadow flex justify-between items-start">
                      <div>
                        <span className="font-bold text-cyan-300">{u.nome}</span><br />
                        <span className="text-cyan-200">Email:</span> {u.email}<br />
                        <span className="text-cyan-200">Telefone:</span> {u.telefone}<br />
                        <span className="text-cyan-200">CPF:</span> {u.cpf}
                      </div>
                      <div className="flex flex-col gap-2">
                        <button onClick={() => startEdit(u)} className="btn-secondary">Editar</button>
                        <button onClick={() => handleDelete(u.id)} className="btn-secondary">Excluir</button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
