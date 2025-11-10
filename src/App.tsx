import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faq from "./pages/Faq";
import Clientes from "./pages/Clientes";
import Perguntas from "./pages/Perguntas";
import Home from "./pages/Home";
import Integrantes from "./pages/Integrantes";
import Contact from "./pages/Contact";
import SocialMedia from "./pages/SocialMedia";

// Tipos e constantes centralizados aqui:
type Step = {
  title: string;
  images?: { src: string; alt: string; caption: string }[];
  description: string;
};

const steps: Step[] = [
  {
    title: "Comece Instalando o App",
    images: [
      {
        src: "/src/assets/imagens/playstore.png",
        alt: "Play Store",
        caption: "Baixe para Android na Play Store.",
      },
      {
        src: "/src/assets/imagens/appstore.png",
        alt: "App Store",
        caption: "Baixe para iOS na App Store.",
      },
    ],
    description:
      'Procure por <b>Portal do Paciente HC</b> na loja do seu celular, toque em <b>Instalar</b> e aguarde o download.',
  },
  {
    title: "Acesse com Seu Cadastro",
    images: [
      {
        src: "/src/assets/imagens/pagina-inicial.png",
        alt: "Tela Inicial do App",
        caption: "Página inicial do aplicativo.",
      },
    ],
    description:
      'Abra o app, clique em <b>Acessar o Portal</b> e entre com seu CPF e senha. Se for seu primeiro acesso, clique em <b>Primeiro Acesso</b>.',
  },
  {
    title: "Crie Sua Senha",
    images: [
      {
        src: "/src/assets/imagens/cadastrar-senha.png",
        alt: "Cadastrar Senha",
        caption: "Tela para criar senha.",
      },
      {
        src: "/src/assets/imagens/cadastro-cpf.png",
        alt: "Cadastro de CPF",
        caption: "Informe CPF e data de nascimento.",
      },
    ],
    description:
      'Clique em <b>CADASTRAR SENHA</b>, preencha seu CPF e data de nascimento e depois clique em <b>LOCALIZAR PACIENTE</b>.',
  },
  {
    title: "Confirme Seus Dados",
    images: [
      {
        src: "/src/assets/imagens/pergunta-ano.png",
        alt: "Pergunta Ano de Nascimento",
        caption: "Informe o ano de nascimento.",
      },
      {
        src: "/src/assets/imagens/pergunta-mae.png",
        alt: "Pergunta Nome da Mãe",
        caption: "Informe o nome da mãe.",
      },
      {
        src: "/src/assets/imagens/campos-senha.png",
        alt: "Campos para Cadastrar Senha",
        caption: "Crie e confirme sua senha.",
      },
      {
        src: "/src/assets/imagens/cadastro-sucesso.png",
        alt: "Senha Cadastrada com Sucesso",
        caption: "Cadastro realizado com sucesso.",
      },
    ],
    description:
      "Responda as perguntas de segurança, crie sua senha e finalize o cadastro.",
  },
  {
    title: "Atualize Suas Informações",
    images: [
      {
        src: "/src/assets/imagens/acessar-conta.png",
        alt: "Tela de Acessar Conta",
        caption: "Acesse sua conta.",
      },
      {
        src: "/src/assets/imagens/menu-principal.png",
        alt: "Menu Principal",
        caption: "Menu principal do app.",
      },
      {
        src: "/src/assets/imagens/campos-dados.png",
        alt: "Campos de Dados",
        caption: "Atualize e-mail e telefone.",
      },
    ],
    description:
      "No menu, acesse <b>Meus Dados</b> e mantenha seu e-mail e telefone atualizados.",
  },
  {
    title: "Veja e Entre na Consulta",
    images: [
      {
        src: "/src/assets/imagens/entrar-teleconsulta.png",
        alt: "Entrar na Teleconsulta",
        caption: "Botão para entrar na consulta.",
      },
      {
        src: "/src/assets/imagens/sala-espera.png",
        alt: "Sala de Espera",
        caption: "Aguarde na sala virtual.",
      },
      {
        src: "/src/assets/imagens/card-teleconsulta.png",
        alt: "Card Teleconsulta",
        caption: "Detalhes da consulta.",
      },
    ],
    description:
      "Acesse <b>Minhas Agendas</b> ou <b>Teleconsulta</b>, confira os detalhes e clique em <b>Entrar na Teleconsulta</b> no horário marcado.",
  },
  {
    title: "Participe da Teleconsulta",
    images: [
      {
        src: "/src/assets/imagens/termo-aceite.png",
        alt: "Termo de Aceite",
        caption: "Aceite o termo de consentimento.",
      },
      {
        src: "/src/assets/imagens/permissao-camera.png",
        alt: "Permissão de Câmera",
        caption: "Permita o uso da câmera.",
      },
      {
        src: "/src/assets/imagens/opcoes-webcam.png",
        alt: "Opções da Webcam",
        caption: "Configure a webcam.",
      },
      {
        src: "/src/assets/imagens/permissao-microfone.png",
        alt: "Permissão de Microfone",
        caption: "Permita o uso do microfone.",
      },
      {
        src: "/src/assets/imagens/confirmar-audio.png",
        alt: "Confirmação de áudio",
        caption: "Teste o áudio.",
      },
      {
        src: "/src/assets/imagens/conectando-audio.png",
        alt: "Conectando ao Teste de Áudio",
        caption: "Conectando áudio.",
      },
      {
        src: "/src/assets/imagens/icone-camera-off.png",
        alt: "Ícone Câmera Desligada",
        caption: "Câmera desligada.",
      },
      {
        src: "/src/assets/imagens/consulta-video.png",
        alt: "Consulta em Vídeo",
        caption: "Consulta por vídeo.",
      },
      {
        src: "/src/assets/imagens/dentro-da-teleconsulta.png",
        alt: "Participando da Teleconsulta",
        caption: "Você na teleconsulta.",
      },
    ],
    description:
      "Aceite o termo, permita câmera e microfone, configure se necessário e participe da consulta no horário agendado.",
  },
  {
    title: "Finalize e Avalie",
    images: [
      {
        src: "/src/assets/imagens/fim-teleconsulta.png",
        alt: "Fim da Teleconsulta",
        caption: "Finalização da consulta.",
      },
      {
        src: "/src/assets/imagens/resposta-registrada.png",
        alt: "Resposta Registrada",
        caption: "Avaliação registrada.",
      },
    ],
    description:
      "Ao terminar, avalie o atendimento se solicitado e veja a mensagem de agradecimento.",
  },
  {
    title: "Explore Outras Funções",
    images: [
      {
        src: "src/assets/imagens/menu-principal.png",
        alt: "Menu Principal",
        caption:
          "Acesse resultados, receitas e diário de saúde pelo menu.",
      },
    ],
    description:
      "No menu principal, acesse <b>Meus Resultados</b>, <b>Minhas Receitas</b> e <b>Diário de Saúde</b> para acompanhar sua saúde.",
  },
];

const faqList = [
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home steps={steps} />} />
        <Route path="/faq" element={<Faq faqs={faqList} />} />
        <Route path="/perguntas" element={<Perguntas />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/contato" element={<Contact />} />
  <Route path="/redes-sociais" element={<SocialMedia />} />
  <Route path="/clientes" element={<Clientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
