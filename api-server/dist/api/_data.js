export let usuarios = [
    { id: 1, nome: 'Vinícius Luis', telefone: '11999999999', email: 'vinicius@email.com', cpf: '12345678900' }
];
export const getAll = () => usuarios;
export const getById = (id) => usuarios.find(u => u.id === Number(id));
export const createUser = (data) => {
    const id = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;
    const novo = { id, ...data };
    usuarios.push(novo);
    return novo;
};
export const updateUser = (id, data) => {
    const idx = usuarios.findIndex(u => u.id === Number(id));
    if (idx === -1)
        return null;
    usuarios[idx] = { ...usuarios[idx], ...data, id: Number(id) };
    return usuarios[idx];
};
export const deleteUser = (id) => {
    const idx = usuarios.findIndex(u => u.id === Number(id));
    if (idx === -1)
        return false;
    usuarios.splice(idx, 1);
    return true;
};
export default {};
