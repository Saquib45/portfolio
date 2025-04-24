import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 pt-16 pb-6 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-bold mb-4 gradient-text">
              DEVFOLIO
            </h4>
            <p className="text-gray-400 mb-4">
              Fullstack developer specializing in building exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Saquib45"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/saquibmaniyar10/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'Skills', 'Projects', 'Education', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Software Development','Web Development', 'Frontend Design', 'Backend Systems', 'API Development', 'Database Design'].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 cursor-default">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Nanded/Latur,Maharashtra,india</li>
              <li>saquibmaniyart@gmail.com</li>
              <li>+91 9960844980</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            &copy; {currentYear} Sakib Maniyar. All rights reserved.
          </p>
          <Link
            to="hero"
            smooth={true}
            duration={800}
            className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;