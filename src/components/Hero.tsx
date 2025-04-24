import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-gray-900 z-0"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -70, 0],
            y: [0, 40, 0],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-lg md:text-xl text-accent mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="gradient-text">Sakib Maniyar</span>
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-3xl text-gray-300 mb-8 h-16 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <TypeAnimation
              sequence={[
                'Fullstack Developer',
                2000,
                'Software Developer',
                2000,
                'Problem Solver',
                2000,
                'Code Craftsman',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="font-jetbrains"
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-70}
              className="btn btn-primary"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-70}
              className="btn btn-outline"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <Link
            to="skills"
            smooth={true}
            duration={800}
            className="cursor-pointer"
          >
            <ChevronDown className="w-8 h-8 text-gray-400 hover:text-white transition-colors" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;