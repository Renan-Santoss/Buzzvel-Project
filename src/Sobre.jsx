import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Timeline from "../src/Img/timeline.png";

const Sobre = () => {

  const containerControls = useAnimation();
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          containerControls.start("visible");
        }
      },
      { threshold: 0.1 } // Ajuste a porcentagem de visibilidade necessária para acionar o evento
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [containerControls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white mb-12">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={containerControls}
        variants={containerVariants}
        className="bg-black p-12 w-full max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-12 rounded-xl mx-4"
      >
        <div className="pb-9">
          <div className="md:w-2/3">
            <h2 className="text-5xl mb-5 text-white">Sobre Mim</h2>
            <p className="text-white mb-4">
              Olá, meu nome é Renan, tenho 20 anos, e sou apaixonado por
              desenvolver sites, especialmente pela criação de interfaces
              modernas e intuitivas. Nos últimos anos, venho me dedicando a
              aprender e aprimorar minhas habilidades em tecnologias Front-End,
              buscando sempre criar experiências digitais que sejam tanto
              funcionais quanto visualmente atraentes.
            </p>
            <p className="text-white mb-4">
              Meu objetivo é contribuir com a criação de soluções inovadoras em
              uma equipe de desenvolvimento, aplicando minhas habilidades em
              HTML, CSS, JavaScript, e frameworks como React. Quero ajudar a
              entregar produtos de alta qualidade que melhorem a experiência do
              usuário e agreguem valor ao negócio.
            </p>
            <p className="text-white mb-4">
              Continuo me atualizando e ampliando meus conhecimentos na área. No
              momento estou estudando na Origamid para aprofundar minhas
              habilidades em desenvolvimento Front-End.
            </p>
          </div>
          <img src={Timeline} alt="Timeline" />
        </div>
      </motion.div>
    </div>
  );
};

export default Sobre;
