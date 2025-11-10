type SocialLinkProps = {
  name: string;
  icon: string;
  url: string;
  description: string;
};

export const SocialLink = ({ name, icon, url, description }: SocialLinkProps) => {
  return (
    <div className="flex items-start space-x-6 p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="flex-shrink-0">
        <img src={icon} alt={name} className="w-12 h-12" />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            {name}
          </a>
        </h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};