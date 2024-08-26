// import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const timeline = [
  {
    period: "Primeiro Ano",
    milestones: [
      {
        title: "Integração e Aprendizado",
        description: "Completar o processo de integração com a equipe e os sistemas da Buzzvel. Foco no aprendizado das ferramentas e processos internos da empresa.",
      },
      {
        title: "Contribuições Iniciais",
        description: "Participar de projetos iniciais, aplicando conhecimentos técnicos e contribuindo para a entrega de resultados significativos.",
      },
      {
        title: "Desenvolvimento de Habilidades",
        description: "Aprimorar habilidades técnicas e de comunicação, e começar a assumir responsabilidades mais complexas.",
      },
    ],
  },
  {
    period: "Dois a Três Anos",
    milestones: [
      {
        title: "Liderança de Projetos",
        description: "Liderar projetos importantes, coordenando equipes e garantindo a entrega dentro dos prazos e padrões estabelecidos.",
      },
      {
        title: "Inovação e Melhoria de Processos",
        description: "Propor e implementar melhorias nos processos existentes, focando na inovação e eficiência.",
      },
      {
        title: "Mentoria e Treinamento",
        description: "Mentorar novos membros da equipe e conduzir sessões de treinamento para compartilhar conhecimentos e práticas recomendadas.",
      },
    ],
  },
  {
    period: "Quatro a Cinco Anos",
    milestones: [
      {
        title: "Gestão de Projetos Estratégicos",
        description: "Gerenciar projetos de alto impacto que alinham com os objetivos estratégicos da empresa e apresentam alto valor agregado.",
      },
      {
        title: "Expansão de Rede de Contatos",
        description: "Expandir a rede de contatos profissionais e representar a Buzzvel em eventos e conferências da indústria.",
      },
      {
        title: "Desenvolvimento de Novas Soluções",
        description: "Liderar o desenvolvimento de novas soluções e tecnologias que posicionem a Buzzvel como uma referência de inovação no mercado.",
      },
    ],
  },
];

const Cronograma = () => {
  return (
    <div className="container mx-auto px-4 lg:px-14 py-16 flex flex-col items-center">
      {/* Título Centralizado */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mb-8">
        Cronograma de Carreira na Buzzvel
      </h2>

      {/* Cronograma Passo a Passo */}
      <div className="flex flex-col gap-12">
        {timeline.map((phase, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-700 text-center mb-4">
              {phase.period}
            </h3>
            <div className="space-y-6">
              {phase.milestones.map((milestone, i) => (
                <div key={i} className="flex items-start">
                  <div className="flex-shrink-0 text-blue-700">
                    <AiOutlineCheckCircle size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold mb-1">{milestone.title}</h4>
                    <p className="text-md text-gray-700">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cronograma;
