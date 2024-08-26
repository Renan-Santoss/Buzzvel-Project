import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io"; // Importando o ícone de seta

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleWhatsAppRedirect = () => {
    window.location.href = "https://wa.me/5521965765383"; // Adicione o link de contato
  };

  return (
    <div className="bg-black shadow-md mt-12">
      <main className="sm:mt-0 container">
        <div className="min-h-[500px] flex items-center justify-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="space-y-6 p-12 text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
            >
              Olá, equipe Buzzvel. <p>Eu sou o Renan, um{" "}</p>
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Desenvolvedor Front-End
              </span> 
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-white">
              Estou entusiasmado em compartilhar este projeto com vocês. Estou à
              disposição para discutir os detalhes e avançar para as próximas
              etapas, garantindo que possamos alcançar nossos objetivos com
              excelência.
            </motion.p>

            <motion.div variants={itemVariants} className="flex justify-center">
              <button
                onClick={handleWhatsAppRedirect}
                className="bg-blue-700 border-2 border-blue-700 text-white py-2 px-4 flex items-center transition-all duration-300 rounded-full hover:bg-transparent hover:text-white hover:border-blue-700"
              >
                Entre em Contato
                <IoIosArrowForward className="ml-2 text-lg" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
