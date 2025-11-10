type ContactInfoProps = {
  title: string;
  items: string[];
};

export const ContactInfo = ({ title, items }: ContactInfoProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="space-y-2 text-gray-600">
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};