// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (
    <footer className="bg-black text-white pt-10">
     
      
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-8 text-gray-400 text-sm pb-8">
        <div>
          <h2 className="text-white font-semibold mb-2">Sobre o Buzzvel Project</h2>
          <ul>
            <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-white">Serviços</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contato</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-2">Termos Legais</h2>
          <ul>
            <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-white">Política de Cookies</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-2">Siga-nos</h2>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Renan-Santoss" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
            <a href="https://x.com/RenanS_3107" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
            <a href="https://www.instagram.com/renan.santos31/" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
            <a href="https://www.linkedin.com/in/renan-santos-7b77a42a3/" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center pt-6 border-t border-gray-700 text-gray-400 text-sm pb-8">
        <span>© 2024 - Buzzvel Project. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
