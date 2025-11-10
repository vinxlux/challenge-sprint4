export type Usuario = {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  cpf: string;
};

export let usuarios: Usuario[] = [
  { id: 1, nome: 'Vinícius Luis', telefone: '11999999999', email: 'vinicius@email.com', cpf: '12345678900' }
];

export const getAll = (): Usuario[] => usuarios;
export const getById = (id: number | string): Usuario | undefined => usuarios.find(u => u.id === Number(id));
export const createUser = (data: Omit<Usuario, 'id'>): Usuario => {
  const id = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;
  const novo: Usuario = { id, ...data } as Usuario;
  usuarios.push(novo);
  return novo;
};
export const updateUser = (id: number | string, data: Partial<Omit<Usuario, 'id'>>): Usuario | null => {
  const idx = usuarios.findIndex(u => u.id === Number(id));
  if (idx === -1) return null;
  usuarios[idx] = { ...usuarios[idx], ...data, id: Number(id) } as Usuario;
  return usuarios[idx];
};
export const deleteUser = (id: number | string): boolean => {
  const idx = usuarios.findIndex(u => u.id === Number(id));
  if (idx === -1) return false;
  usuarios.splice(idx, 1);
  return true;
};

export default {} as const;
