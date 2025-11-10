import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from '../components/PageLayout';

type Step = {
  title: string;
  images?: { src: string; alt: string; caption: string }[];
  description: string;
};

type HomeProps = {
  steps: Step[];
};

export default function Home({ steps }: HomeProps) {
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
        <section id="tutorial-portal-paciente" className="text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-14 text-white drop-shadow">
            Guia Visual do Portal
          </h1>
          <ol className="tutorial-list flex flex-col gap-10 items-center">
            {steps.map((step, idx) => (
              <li
                key={idx}
                className="glass-card w-full"
              >
                <button
                  className="btn-primary w-full mb-4 text-2xl flex items-center gap-4 justify-center"
                  onClick={() => setOpenStep(openStep === idx ? null : idx)}
                  aria-expanded={openStep === idx}
                  aria-controls={`tutorial-content-${idx}`}
                >
                  <span className="flex-1 text-left">{step.title}</span>
                  <span
                    className={`text-3xl transition-transform ${openStep === idx ? "rotate-90" : ""}`}
                  >
                    ▶
                  </span>
                </button>
                <div
                  id={`tutorial-content-${idx}`}
                  className={`tutorial-content overflow-hidden transition-all duration-500 ${
                    openStep === idx
                      ? "max-h-[2000px] py-10 px-8 opacity-100"
                      : "max-h-0 py-0 px-8 opacity-0"
                  }`}
                  aria-hidden={openStep !== idx}
                >
                  <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                    {/* Imagens à esquerda */}
                    {step.images && (
                      <div className="flex flex-row md:flex-col gap-4 md:w-1/3 w-full justify-center md:justify-start md:items-start">
                        {step.images.map((img, i) => (
                          <div key={i} className="flex flex-col items-center md:items-start">
                            <img
                              src={img.src}
                              alt={img.alt}
                              className="rounded-xl shadow-lg h-36 w-auto object-contain bg-[#232a36] p-2 border border-white/20 min-w-[80px] max-w-[220px]"
                            />
                            <span className="text-xs text-cyan-300 text-center md:text-left mt-1">{img.caption}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Texto à direita */}
                    <div className="md:w-2/3 w-full flex items-center justify-center md:justify-start">
                      <p
                        className="text-cyan-200 text-lg md:text-xl text-center md:text-left leading-relaxed font-medium"
                        dangerouslySetInnerHTML={{ __html: step.description }}
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-16 flex flex-col items-center gap-2">
            <p className="text-cyan-300 text-xl font-bold">
              Precisa de ajuda?
            </p>
            <Link
              to="/faq"
              className="btn-primary mt-1"
            >
              Acesse o FAQ
            </Link>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}