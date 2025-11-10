import { useState } from "react";
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Integrantes from "../pages/Integrantes";
import { PageLayout } from '../components/PageLayout';

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

type FaqProps = {
  faqs: FaqItem[];
};

export default function Faq({ faqs }: FaqProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <PageLayout>
      {/* Sidebar para mobile */}
      {sidebarOpen && (
        <nav
          id="sidebar"
          className="fixed top-0 left-0 h-full w-64 shadow-2xl z-[100] md:hidden transition-all border-r border-[#bbdefb]/60 bg-gradient-to-br from-blue-50 via-red-50 to-red-100"
        >
          <ul className="flex flex-col items-start gap-6 p-8">
            <li>
              <img
                src="src/assets/imagens/logo.png"
                className="logo h-14 w-auto mb-4 min-w-[56px] min-h-[56px] max-h-[56px]"
                alt="Logo do Site"
              />
            </li>
            <li>
              <Link to="/" className="text-[#1976d2] font-semibold hover:text-[#d32f2f] text-lg">Início</Link>
            </li>
            <li>
              <Link to="/faq" className="text-[#1976d2] font-semibold hover:text-[#d32f2f] text-lg">Perguntas</Link>
            </li>
            <li>
              <Link to="/integrantes" className="text-[#1976d2] font-semibold hover:text-[#d32f2f] text-lg">Equipe</Link>
            </li>
            <li>
              <Link to="/contato" className="text-[#1976d2] font-semibold hover:text-[#d32f2f] text-lg">Contato</Link>
            </li>
          </ul>
          <button
            aria-label="Fechar menu"
            className="absolute top-4 right-4 text-3xl"
            onClick={() => setSidebarOpen(false)}
          >
            &times;
          </button>
        </nav>
      )}
      {/* Main */}
      <main className="max-w-5xl mx-auto pt-10 pb-32 px-2 sm:px-6">
        <section className="text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-14 text-white drop-shadow">
            Perguntas Frequentes (FAQ)
          </h1>
          <ol className="faq-list flex flex-col gap-10 items-center">
            {faqs.map((faq, idx) => (
              <li key={idx} className="glass-card w-full">
                <button
                  className="btn-primary w-full mb-4 text-2xl flex items-center gap-4 justify-center"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-content-${idx}`}
                >
                  <span className="flex-1 text-left">{faq.question}</span>
                  <span className={`text-3xl transition-transform ${openIndex === idx ? "rotate-90" : ""}`}>▶</span>
                </button>
                <div
                  id={`faq-content-${idx}`}
                  className={`faq-content overflow-hidden transition-all duration-500 ${
                    openIndex === idx
                      ? "max-h-[2000px] py-10 px-8 opacity-100"
                      : "max-h-0 py-0 px-8 opacity-0"
                  }`}
                  aria-hidden={openIndex !== idx}
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-cyan-200 text-lg md:text-xl text-center md:text-left leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-16 flex flex-col items-center gap-2">
            <p className="text-cyan-300 text-xl font-bold">
              Não encontrou sua dúvida?
            </p>
            <Link
              to="/contato"
              className="btn-primary mt-1"
            >
              Fale com o Suporte
            </Link>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

// Exemplo de configuração de rotas
const faqList: FaqItem[] = [
  {
    question: "O que é o Portal do Paciente HC?",
    answer: (
      <>
        É uma plataforma online para pacientes do Hospital das Clínicas acessarem informações e serviços de saúde.
        <a className="faq-saiba-mais ml-2" href="/#tutorial-portal-paciente">Saiba mais</a>
      </>
    ),
  },
  {
    question: "Como faço para acessar o Portal?",
    answer: (
      <>
        Basta acessar o site do Hospital das Clínicas e clicar no link do Portal do Paciente.
        <a className="faq-saiba-mais ml-2" href="/#tutorial-portal-paciente">Saiba mais</a>
      </>
    ),
  },
  {
    question: "Preciso de cadastro para usar o Portal?",
    answer: (
      <>
        Sim, é necessário criar uma conta utilizando seus dados pessoais e informações do hospital.
        <a className="faq-saiba-mais ml-2" href="/#tutorial-portal-paciente">Saiba mais</a>
      </>
    ),
  },
  {
    question: "Quais serviços estão disponíveis?",
    answer: (
      <>
        Consulta de exames, agendamento de consultas, histórico médico e informações de contato.
        <a className="faq-saiba-mais ml-2" href="/#tutorial-portal-paciente">Saiba mais</a>
      </>
    ),
  },
  {
    question: "Como agendar uma consulta?",
    answer: (
      <>
        No menu do Portal, selecione "Agendar Consulta" e siga as instruções na tela.
        <a className="faq-saiba-mais ml-2" href="/#tutorial-portal-paciente">Saiba mais</a>
      </>
    ),
  },
  {
    question: "Onde encontro meus exames?",
    answer: (
      <>
        Após login, acesse o menu "Exames" para visualizar resultados e laudos disponíveis.
        <a className="faq-saiba-mais ml-2" href="/#tutorial-portal-paciente">Saiba mais</a>
      </>
    ),
  },
  {
    question: "Como atualizar meus dados pessoais?",
    answer: (
      <>
        No Portal, vá até "Perfil" e edite suas informações pessoais conforme necessário.
        <a className="faq-saiba-mais ml-2" href="/#tutorial-portal-paciente">Saiba mais</a>
      </>
    ),
  },
  {
    question: "Esqueci minha senha, o que fazer?",
    answer: (
      <>
        Clique em "Esqueci minha senha" na tela de login e siga as orientações para redefinir.
        <a className="faq-saiba-mais ml-2" href="/#tutorial-portal-paciente">Saiba mais</a>
      </>
    ),
  },
  {
    question: "Como entrar em contato com o suporte?",
    answer: (
      <>
        Use a opção "Contato" no menu para enviar dúvidas ou problemas ao suporte do Portal.
        <a className="faq-saiba-mais ml-2" href="/contato">Saiba mais</a>
      </>
    ),
  },
  {
    question: "Quem são os responsáveis pelo Portal?",
    answer: (
      <>
        O Portal é mantido por uma equipe dedicada do Hospital das Clínicas e parceiros.
        <a className="faq-saiba-mais ml-2" href="/integrantes">Saiba mais</a>
      </>
    ),
  },
  {
    question: "Onde posso acompanhar novidades e atualizações?",
    answer: (
      <>
        Acompanhe as redes sociais oficiais do Hospital das Clínicas para novidades.
        <a className="faq-saiba-mais ml-2" href="/redes-sociais">Saiba mais</a>
      </>
    ),
  },
  {
    question: "O Portal é seguro?",
    answer: (
      <>
        Sim, todas as informações são protegidas por protocolos de segurança e privacidade.
        <a className="faq-saiba-mais ml-2" href="/#tutorial-portal-paciente">Saiba mais</a>
      </>
    ),
  },
];
const steps: any[] = [/* ...your steps data... */];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home steps={steps} />} />
        <Route path="/faq" element={<Faq faqs={faqList} />} />
        <Route path="/integrantes" element={<Integrantes />} /> {/* Adicione esta linha */}
        {/* ...outras rotas... */}
      </Routes>
    </BrowserRouter>
  );
}

export { App };