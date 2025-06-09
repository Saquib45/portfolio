


import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', target: 'hero' },
    { name: 'Skills', target: 'skills' },
    { name: 'Projects', target: 'projects' },
    { name: 'Education', target: 'education' },
    { name: 'About', target: 'about' },
    { name: 'Contact', target: 'contact' },
  ];

  const resumeUrl="https://drive.google.com/file/d/1O4lbIxSQN_SU1oB-XvpzUmOlI5AfxBdz/view?usp=sharing";
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          <Link
            to="hero"
            className="text-xl font-jetbrains font-bold gradient-text cursor-pointer"
            smooth={true}
            duration={500}
          >
            DEV<span className="text-white">FOLIO</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.target}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 cursor-pointer"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/Saquib45"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/saquibmaniyar10/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              {/* Resume Button for Desktop */}
              <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-primary/80 transition"
                >
                  Resume
              </a>
            </div>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-gray-400 hover:text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center">
          <ul className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.target}
                  className="text-xl text-gray-300 hover:text-primary transition-colors"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center space-y-6 mt-12">
            <div className="flex space-x-6">
              <a
                href="https://github.com/Saquib45"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/saquibmaniyar10/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>

            {/* Resume Button for Mobile */}
            <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-primary/80 transition"
              >
                Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
