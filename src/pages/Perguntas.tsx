import { useState } from "react";
import { PageLayout } from '../components/PageLayout';

const perguntas = [
  {
    pergunta: "Como faço para acessar a teleconsulta?",
    resposta: "Você pode acessar a teleconsulta pelo menu principal, clicando em 'Entrar na Teleconsulta'. Certifique-se de estar logado e com a câmera e microfone liberados."
  },
  {
    pergunta: "Quais navegadores são suportados?",
    resposta: "Recomendamos o uso do Google Chrome ou Microsoft Edge para melhor compatibilidade."
  },
  {
    pergunta: "Como cadastrar minha senha?",
    resposta: "No primeiro acesso, você será direcionado para cadastrar uma senha segura. Siga as instruções na tela."
  },
  {
    pergunta: "Posso acessar pelo celular?",
    resposta: "Sim! O sistema é responsivo e funciona em smartphones Android e iOS."
  },
  {
    pergunta: "O que fazer se não conseguir entrar?",
    resposta: "Verifique sua conexão de internet, permissões de câmera/microfone e tente novamente. Se o problema persistir, entre em contato com o suporte."
  }
];

export default function Perguntas() {
  const [aberta, setAberta] = useState<number | null>(null);

  return (
    <PageLayout>
      <main className="max-w-3xl mx-auto pt-32 pb-32 px-2 sm:px-6">
        <section className="text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-14 bg-gradient-to-r from-[#1976d2] to-[#d32f2f] bg-clip-text text-transparent drop-shadow">
            Perguntas
          </h1>
          <ul className="flex flex-col gap-6 items-stretch">
            {perguntas.map((item, idx) => (
              <li key={idx} className="bg-white/90 rounded-2xl shadow border border-[#bbdefb]/60">
                <button
                  className="w-full text-left px-8 py-6 text-xl font-bold text-[#1976d2] flex items-center justify-between focus:outline-none"
                  onClick={() => setAberta(aberta === idx ? null : idx)}
                  aria-expanded={aberta === idx}
                  aria-controls={`resposta-${idx}`}
                >
                  <span>{item.pergunta}</span>
                  <span className={`text-2xl transition-transform ${aberta === idx ? "rotate-90" : ""}`}>▶</span>
                </button>
                <div
                  id={`resposta-${idx}`}
                  className={`overflow-hidden transition-all duration-500 ${aberta === idx ? "max-h-[500px] py-6 px-8 opacity-100" : "max-h-0 py-0 px-8 opacity-0"}`}
                  aria-hidden={aberta !== idx}
                >
                  <div className="text-[#d32f2f] text-lg text-left leading-relaxed font-medium">
                    {item.resposta}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </PageLayout>
  );
}
