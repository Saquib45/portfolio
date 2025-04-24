import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Home, Code, Briefcase, GraduationCap, User, Mail, Menu, X } from 'lucide-react';

const FloatingNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', icon: <Home size={18} />, target: 'hero' },
    { name: 'Skills', icon: <Code size={18} />, target: 'skills' },
    { name: 'Projects', icon: <Briefcase size={18} />, target: 'projects' },
    { name: 'Education', icon: <GraduationCap size={18} />, target: 'education' },
    { name: 'About', icon: <User size={18} />, target: 'about' },
    { name: 'Contact', icon: <Mail size={18} />, target: 'contact' },
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleMenu}
        className={`w-12 h-12 rounded-full flex items-center justify-center ${
          isOpen ? 'bg-primary text-white' : 'bg-gray-800 text-white'
        } shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none`}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div className="absolute right-0 bottom-16 p-2 bg-gray-800 rounded-lg shadow-xl">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.target}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FloatingNav;