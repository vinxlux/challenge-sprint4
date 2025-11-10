import { Link } from 'react-router-dom';
import logo from '../assets/imagens/logo.png';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-12" src={logo} alt="HC Logo" />
            </Link>
          </div>
          <nav className="flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Início
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              FAQ
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Contato
            </Link>
            <Link to="/redes-sociais" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Redes Sociais
            </Link>
            <Link to="/integrantes" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Integrantes
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;