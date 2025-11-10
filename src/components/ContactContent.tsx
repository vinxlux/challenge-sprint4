import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export const ContactContent = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado');
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-12 text-blue-800">Entre em Contato</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-8">
            <ContactInfo
              title="Hospital das Clínicas - HCFMUSP"
              items={[
                "Endereço: Av. Dr. Enéas Carvalho de Aguiar, 255 - Cerqueira César",
                "São Paulo - SP, 05403-000",
                "Telefone: (11) 2661-0000",
                "E-mail: contato@hc.fm.usp.br"
              ]}
            />

            <ContactInfo
              title="Horário de Atendimento"
              items={[
                "Segunda a Sexta: 7h às 19h",
                "Sábado: 7h às 13h",
                "Domingos e Feriados: Apenas Emergências"
              ]}
            />

            <ContactInfo
              title="Central de Agendamento"
              items={[
                "Telefone: (11) 2661-6000",
                "Segunda a Sexta: 8h às 17h"
              ]}
            />
          </div>
        </div>

        <ContactForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};