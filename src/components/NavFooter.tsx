import { Link } from 'react-router-dom';

const NavFooter = () => {
  return (
    <footer
      className="z-10 flex justify-center gap-8 items-center h-20 rounded-t-2xl text-lg shadow-xl fixed bottom-0 left-0 w-full border-t border-white/10 glass-section"
    >
      <Link to="/contato" className="btn-secondary">
        Contato
      </Link>
      <Link to="/redes-sociais" className="btn-secondary">
        Redes Sociais
      </Link>
      <Link to="/clientes" className="btn-secondary">
        Adicionar Cliente
      </Link>
    </footer>
  );
};

export default NavFooter;