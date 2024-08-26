// import React from "react";

import { FaCode, FaLaptopCode } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const ServicesData = [
  {
    id: 1,
    heading: "Desenvolvimento Front-End Moderno",
    text: "Crie interfaces de usuário dinâmicas e responsivas usando as tecnologias mais recentes, garantindo uma experiência envolvente e intuitiva para seus usuários.",
    icon: <FaCode className="text-6xl" />,
  },

  {
    id: 2,
    heading: "Design UX/UI Atraente",
    text: "Transforme suas ideias em designs atraentes e funcionais com foco na experiência do usuário, criando uma navegação intuitiva e visualmente agradável.",
    icon: <AiOutlineUser className="text-6xl" />,
  },

  {
    id: 3,
    heading: "Desenvolvimento de Aplicações Web",
    text: "Construa aplicações web robustas e escaláveis com as melhores práticas de desenvolvimento, garantindo desempenho e segurança de ponta.",
    icon: <FaLaptopCode className="text-6xl" />,
  },
];

const Conhecimento = () => {
  return (
    <div className="shadow-md">
      <div className="container mt-12 items-center pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {ServicesData.map(({ id, heading, text, icon }) => (
            <div key={id} className="space-y-3 text-center p-5">
              <div className="flex justify-center">{icon}</div>
              <h1 className="text-3xl sm:text-2xl lg:text-3xl font-semibold">
                {heading}
              </h1>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conhecimento;
