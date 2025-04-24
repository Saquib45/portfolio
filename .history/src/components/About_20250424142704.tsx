import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Book, Coffee, Award } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">
            <span className="gradient-text">About Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Developer working"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex gap-4">
                <div className="text-center px-4">
                  <p className="text-3xl font-bold text-primary">2+</p>
                  <p className="text-sm text-gray-400">Years<br />Experience</p>
                </div>
                <div className="text-center px-4 border-l border-gray-700">
                  <p className="text-3xl font-bold text-secondary">5-+</p>
                  <p className="text-sm text-gray-400">Completed<br />Projects</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Passionate Fullstack Developer & Problem Solver
            </h3>
            <p className="text-gray-300 mb-6">
              I'm a fullstack developer with a passion for creating efficient, user-friendly web applications. With over 5 years of experience in the software industry, I've developed a deep understanding of both frontend and backend technologies.
            </p>
            <p className="text-gray-300 mb-6">
              My expertise spans across the entire software development lifecycle, from conceptualization and design to implementation and deployment. I enjoy tackling complex problems and am constantly exploring new technologies to enhance my skills.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-primary/20 rounded-lg">
                  <Code className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Clean Code</h4>
                  <p className="text-sm text-gray-400">Writing maintainable, efficient code is my priority</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-secondary/20 rounded-lg">
                  <Book className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Continuous Learning</h4>
                  <p className="text-sm text-gray-400">Always expanding my knowledge and skills</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-accent/20 rounded-lg">
                  <Coffee className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Problem Solver</h4>
                  <p className="text-sm text-gray-400">Finding elegant solutions to complex challenges</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-primary/20 rounded-lg">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Detail Oriented</h4>
                  <p className="text-sm text-gray-400">Attention to detail in every project</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;