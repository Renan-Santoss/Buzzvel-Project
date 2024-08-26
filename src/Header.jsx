import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { link: 'Sobre', path: '/' },
    { link: 'Cronograma', path: '/' },
    { link: 'Por que Buzzvel?', path: '/' },
  
  ];

  const handleWhatsAppRedirect = () => {
    window.location.href = 'https://wa.me/5521965765383';
  };

  return (
    <header className='w-full bg-white fixed top-0 left-0 right-0 shadow-lg'>
      <nav className={`py-4 lg:px-14 px-4 ${sticky ? "sticky top-0 left-0 right-0 border-0 bg-white duration-100" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
          <a href="#" className='text-2xl flex items-center space-x-3'><span className='text-red-800'>B</span>uzzvel Project</a>

          <ul className='md:flex space-x-12 hidden cursor-pointer '>
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className='block text-base hover:text-blue-700'
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className='space-x-12 lg:flex hidden items-center'>
            <button
              onClick={handleWhatsAppRedirect}
              className='bg-blue-700 border-2 border-blue-700 text-white py-2 px-4 transition-all duration-300 rounded-full hover:bg-transparent hover:text-black hover:border-1 hover:border-blue-700'
            >
              Entre em Contato
            </button>
          </div>

          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-black focus:outline-none'>
              {menuOpen ? (<FaTimes className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)}
            </button>
          </div>
        </div>

        <div className={`space-y-4 px-4 mt-16 py-7 bg-white ${menuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              className='block text-base hover:text-blue-700'
              onClick={() => setMenuOpen(false)} // Close the menu on click
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
