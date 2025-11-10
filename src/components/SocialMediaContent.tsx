import { SocialLink } from './SocialLink';
import facebookIcon from '../assets/imagens/facebook-icon.png';
import instagramIcon from '../assets/imagens/instagram-icon.png';
import linkedinIcon from '../assets/imagens/linkedin-icon.png';

export const SocialMediaContent = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: facebookIcon,
      url: 'https://www.facebook.com/HCFMUSP',
      description: 'Siga-nos no Facebook para atualizações diárias sobre eventos, histórias inspiradoras e informações importantes sobre saúde.'
    },
    {
      name: 'Instagram',
      icon: instagramIcon,
      url: 'https://www.instagram.com/hcfmusp',
      description: 'Conecte-se conosco no Instagram para ver fotos e vídeos dos bastidores, histórias de pacientes e dicas de saúde.'
    },
    {
      name: 'LinkedIn',
      icon: linkedinIcon,
      url: 'https://www.linkedin.com/company/hcfmusp',
      description: 'Acompanhe o HC no LinkedIn para notícias sobre pesquisas médicas, oportunidades profissionais e avanços na área da saúde.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
          Nossas Redes Sociais
        </h1>

        <div className="space-y-8">
          {socialLinks.map((social) => (
            <SocialLink
              key={social.name}
              name={social.name}
              icon={social.icon}
              url={social.url}
              description={social.description}
            />
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-600">
            Siga-nos nas redes sociais para ficar por dentro das últimas notícias,
            eventos e informações importantes sobre saúde.
          </p>
        </div>
      </div>
    </div>
  );
};