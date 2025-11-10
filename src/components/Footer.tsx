import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Hospital das Clínicas</h3>
            <p className="text-gray-300 text-sm">
              HCFMUSP - Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-white text-sm">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/redes-sociais" className="text-gray-300 hover:text-white text-sm">
                  Redes Sociais
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-gray-300 text-sm mb-2">
              Av. Dr. Enéas Carvalho de Aguiar, 255
            </p>
            <p className="text-gray-300 text-sm mb-2">
              Cerqueira César - São Paulo - SP
            </p>
            <p className="text-gray-300 text-sm">
              CEP: 05403-000
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300 text-sm">
            © {new Date().getFullYear()} Hospital das Clínicas FMUSP. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;