## Observações finais

Legenda: atualize os nomes dos integrantes e o link do GitHub antes de submeter.

Se quiser, eu posso:


Obrigado — atualize os dados do grupo antes de submeter.
Este repositório contém a aplicação frontend desenvolvida em React + Vite + Tailwind e a API implementada como funções serverless em TypeScript para deploy no Vercel.

Este README apresenta todas as informações pertinentes para manipular o sistema, conforme solicitado.

---

## a) Tecnologias

- React 19
- Vite
- TypeScript
- Tailwind CSS
- Vercel (serverless functions)
- Node.js (ambiente de execução)

---

## b) Integrantes

Lista dos integrantes, RMs, turma e links (preencha os URLs do GitHub/LinkedIn quando disponíveis):

### Mathaus Victor Souza
- RM: 564146
- Turma: 1TDSPJ
![Mathaus](src/assets/imagens/mathaus.jpg)

### Carlos Alberto Guedes
- RM: 566022
- Turma: 1TDSPJ
![Carlos](src/assets/imagens/carlos.jpg)

### Vinícius L. E. M. Garcia
- RM: 563340
- Turma: 1TDSPJ
![Vinícius](src/assets/imagens/vinicius.jpg)

---

## c) Imagens relacionadas ao projeto

Todas as imagens e assets visuais estão em `src/assets/imagens/`.

Exemplos relevantes (nomes de ficheiros):

- `logo.png` — logotipo do projeto
- `icone.png` — ícone principal
- `pagina-inicial.png`, `menu-principal.png`, `login.png` — telas e mockups
- `vinicius.jpg`, `carlos.jpg`, `mathaus.jpg` — fotos dos integrantes

Como inserir uma imagem no Markdown:

```md
![Logo](src/assets/imagens/logo.png)
```

---

## d) Ícones relacionados ao projeto

Os ícones e pequenos assets estão também em `src/assets/imagens/`. Exemplos:

- `github-icon.png`
- `linkedin-icon.png`
- `instagram-icon.png`
- `facebook-icon.png`

Exemplo de uso no Markdown:

```md
![GitHub](src/assets/imagens/github-icon.png)
```

---

## e) Estrutura de pastas do projeto

Estrutura resumida (arquivos e pastas mais relevantes):

```
/(raiz)
├─ api/                      # Funções serverless (TypeScript)
│  ├─ _data.ts               # armazenamento em memória e helpers
│  └─ users/
│     ├─ index.ts            # GET list, POST create
│     └─ [id].ts             # GET by id, PUT, DELETE
├─ public/                   # arquivos estáticos
├─ src/
│  ├─ assets/
│  │  └─ imagens/            # imagens e ícones do projeto
│  ├─ components/            # componentes React reutilizáveis
│  ├─ pages/                 # páginas (Home, Contact, Clientes, Faq, Integrantes...)
│  ├─ styles/                # Tailwind / CSS
│  ├─ App.tsx
│  └─ main.tsx
├─ vercel.json               # Configuração do Vercel (builds e rotas)
├─ package.json
└─ tsconfig*.json
```

Descrição das pastas principais:

- `api/` — local onde ficam as funções serverless responsáveis pelos endpoints da API. Em produção no Vercel cada arquivo vira um endpoint.
- `src/pages/Clientes.tsx` — página que implementa o CRUD de clientes (formulário e listagem) consumindo `/api/users`.
- `src/components/` — componentes reutilizáveis (Header, Footer, PageLayout, etc.).

---

## f) Como manipular o sistema (instruções de uso)

1) Instalar dependências (no Windows PowerShell):

```powershell
npm install
```

2) Rodar o frontend em desenvolvimento:

```powershell
npm run dev
# então abra http://localhost:5173
```

3) Testar as funções serverless localmente (opcional):

```powershell
npx vercel dev
```

> Observação: no modo de desenvolvimento, se você usar `vite` e tiver um servidor local, configure o proxy em `vite.config.ts` para encaminhar `/api` para o servidor local (ou use `npx vercel dev` para simular produção serverless).

---

## g) Endpoints principais (API serverless)

- GET /api/users — retorna lista de usuários
- GET /api/users/:id — retorna usuário por id
- POST /api/users — cria usuário (body JSON: { nome, telefone, email, cpf })
- PUT /api/users/:id — atualiza usuário
- DELETE /api/users/:id — remove usuário

---

## h) Link do repositório (GitHub)

Insira o link do repositório do grupo abaixo (substitua o placeholder):

https://github.com/

---

## i) Observações finais e checklist antes da entrega

- Atualize os nomes em **Integrantes**.
- Adicione o link do repositório em **Link do repositório (GitHub)**.
- Se desejar, eu removo o stub `api/users.ts` para ficar apenas a implementação por pasta (`api/users/index.ts` e `api/users/[id].ts`).

Fim.