import { Link } from 'react-router-dom';
import { HOSPITAL_NAME, HOSPITAL_LOGO } from '../config/hospital';

const NavHeader = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 rounded-b-2xl shadow-xl border-b border-white/10 min-h-[72px] backdrop-blur-xl glass-section">
        <div className="flex items-center gap-4">
          <img
            src={HOSPITAL_LOGO}
            alt={HOSPITAL_NAME}
            className="h-14 w-auto drop-shadow-xl min-w-[56px] min-h-[56px] max-h-[64px]"
          />
          <span className="text-3xl font-black tracking-tight text-white select-none">
            {HOSPITAL_NAME}
          </span>
        </div>
        <nav className="flex gap-4">
          <Link to="/" className="btn-secondary">
            Início
          </Link>
          <Link to="/faq" className="btn-secondary">
            Perguntas
          </Link>
          <Link to="/integrantes" className="btn-secondary">
            Equipe
          </Link>
          <Link to="/contato" className="btn-secondary">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavHeader;