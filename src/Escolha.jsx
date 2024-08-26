// import React from "react";
import Buzzvel from "./Img/buzzvel.png";

function Escolha() {
  return (
    <div className="container px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0 md:w-1/2">
          <img
            src={Buzzvel}
            alt="Site Buzzvel"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-gray-800">
            Por que escolher a Buzzvel?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          Acredito que trabalhar na Buzzvel será uma experiência valiosa para minha vida profissional, pois será meu primeiro emprego na área que tenho estudado e me dedicado. Estou entusiasmado para aplicar meus conhecimentos e minha energia em um ambiente que compartilha meus interesses e objetivos. Estou ansioso para colaborar com a equipe em projetos inovadores e contribuir para o crescimento e visibilidade da empresa.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Escolha;
