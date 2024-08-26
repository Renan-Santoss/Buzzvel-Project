import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ReactLogo from './Img/react.svg';
import TailwindLogo from './Img/tailwind.svg';
import JavaScriptLogo from './Img/javascript.svg';
import TypeScriptLogo from './Img/typescript.svg';
import CssLogo from './Img/css.svg';


const logos = [
  { src: ReactLogo, alt: 'React Logo' },
  { src: TailwindLogo, alt: 'Tailwind Logo' },
  { src: JavaScriptLogo, alt: 'JavaScript Logo' },
  { src: TypeScriptLogo, alt: 'TypeScript Logo' },
  { src: CssLogo, alt: 'CSS Logo' },
];

const Experiencia = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 } // Adjust the visibility percentage needed to trigger the event
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto container'>
      <div className='text-center my-8'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mb-4 font-bold text-gray-900'>
          As Principais Tecnologias que Utilizo
        </h2>
        <p className='text-lg text-gray-700'>
          Como desenvolvedor, tenho o privilégio de trabalhar com algumas das mais avançadas linguagens e tecnologias disponíveis. Abaixo, você encontrará as ferramentas que utilizo para criar soluções robustas e inovadoras para meus clientes.
          <span className='text-blue-700 font-semibold'>
            Com a minha experiência, estou preparado para oferecer projetos de alta qualidade e atender às suas necessidades tecnológicas.
          </span>
        </p>
        <div 
          className='my-12 flex flex-wrap justify-center gap-8'
          ref={sectionRef} 
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className='w-20 h-20 flex items-center justify-center'
              initial={{ x: '100vw', opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: '100vw', opacity: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <img src={logo.src} className='w-full h-full object-contain' alt={logo.alt} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiencia;
