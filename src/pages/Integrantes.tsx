import { PageLayout } from '../components/PageLayout';

type Integrante = {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  github: string;
  linkedin: string;
};

const integrantes: Integrante[] = [
  {
    nome: "Mathaus Victor Souza",
    rm: "564146",
    turma: "1TDSPJ",
    foto: "/src/assets/imagens/Mathaus.jpg",
    github: "https://github.com/Mathausz",
    linkedin: "https://www.linkedin.com/in/mathaus-marcelino-677baa331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    nome: "Carlos Alberto Guedes",
    rm: "566022",
    turma: "1TDSPJ",
    foto: "/src/assets/imagens/Carlos.jpg",
    github: "https://github.com/carlosguedesneto",
    linkedin: "https://www.linkedin.com/in/carlos-alberto-13782a353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    nome: "Vinícius L. E. M. Garcia",
    rm: "563340",
    turma: "1TDSPJ",
    foto: "/src/assets/imagens/Vinicius.jpg",
    github: "https://github.com/vinxlux",
    linkedin: "https://linkedin.com/in/vinícius-luis-90ba05309",
  },
];

export default function Integrantes() {
  return (
    <PageLayout>
      <main className="max-w-5xl mx-auto pt-10 pb-32 px-2 sm:px-6">
        <section className="text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-24 text-white drop-shadow">
            Lista de Integrantes
          </h1>
          <ol className="flex flex-col md:flex-row flex-wrap gap-10 items-center justify-center">
            {integrantes.map((item, idx) => (
              <li key={idx} className="glass-card w-full md:w-96 relative flex flex-col items-center justify-center">
                <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-32 h-32 flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-50 to-red-100 rounded-full shadow-lg">
                  <img
                    src={item.foto}
                    alt={`Foto de ${item.nome}`}
                    className="rounded-full object-cover w-28 h-28 border-4 border-white bg-white"
                  />
                </div>
                <div className="flex flex-col items-center mt-20">
                  <span className="text-lg font-bold text-cyan-200 text-center">{item.nome}</span>
                  <span className="text-base text-cyan-300 mt-2">RM: {item.rm}</span>
                  <span className="text-base text-cyan-200">Turma: {item.turma}</span>
                  <div className="flex gap-4 mt-4">
                    <a href={item.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                      <img src="/src/assets/imagens/github-icon.png" alt="GitHub" className="w-8 h-8" />
                    </a>
                    <a href={item.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                      <img src="/src/assets/imagens/linkedin-icon.png" alt="LinkedIn" className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </PageLayout>
  );
}