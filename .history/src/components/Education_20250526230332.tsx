import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const education: EducationItem[] = [
    // {
    //   degree: "Master of Science in Computer Science",
    //   institution: "Stanford University",
    //   period: "2019 - 2021",
    //   description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on 'Neural Network Optimization Techniques for Real-time Applications'."
    // },
    {
      degree: "Bachelor of Technology in Electronics and Telecommunication Engineering",
      institution: "Shri Guru Gobind Singhji Institute  Of Engineering And Information Technology",
      period: "2022-2026",
      description: "I am currently in my third year of engineering, actively pursuing a degree in Electronics and Telecommunication Engineering.With a strong academic foundation, I have maintained a CGPA of 8.3 so far.I'm passionate about technology and constantly working to enhance my skills in software development."
    },
    {
      degree: "Data Structure And Algorithm | Full Stack Web Development",
      institution: "Coding Academy",
      period: "Regularly",
      description: "My learning journey began with mastering Data Structures and Algorithms, building a strong foundation in problem-solving and logic.Alongside, I explored Web Development, gaining hands-on experience with HTML, CSS, JavaScript, and modern frameworks like React and Spring Boot.This combination has helped me grow as a well-rounded developer, capable of building efficient and dynamic applications."
    },
  ];

  return (
    <section id="education" className="section-padding bg-gray-900 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            My academic journey and qualifications that have shaped my understanding of computer science and software development.
          </p>
        </div>
        
        {/* Decorative code background */}
        <div className="absolute inset-0 opacity-5 text-xs font-mono overflow-hidden pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {`function algorithm${i}() { const data = processInput(); return optimize(transform(data)); }`}
            </div>
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <div className="absolute left-6 top-6 bottom-6 w-1 bg-gradient-to-b from-primary via-accent to-secondary"></div>
          
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-12 ml-12 relative"
            >
              <div className="absolute -left-16 top-0 w-8 h-8 bg-gray-800 border-4 border-primary rounded-full"></div>
              <div className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full mb-3">
                  {item.period}
                </span>
                <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                <h4 className="text-lg text-accent mb-3">{item.institution}</h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <div className="mt-12 text-center relative z-10">
          <a
            href="#"
            className="inline-flex items-center text-accent hover:text-primary transition-colors"
          >
            <span>View Certifications</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Education;