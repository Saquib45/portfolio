import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const Projects: React.FC = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Smart Contact Manager",
      description: "A full-stack web application to securely manage personal and professional contacts with user authentication. Built using Spring Boot, Thymeleaf, and Tailwind CSS with CRUD operations and role-based access",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5Ic9BMsl1UCj-E2mSzL5K9LyPsfLgJky8g&s",
      technologies: ["Java", "Spring Boot", "SQL", "HTML", "CSS", "JavaScript", "Thymeleaf", "Tailwind CSS"],
      githubUrl: "https://github.com/Saquib45/SmartContactManager",
      // liveUrl: "https://example.com",
    },
    {
      id: 2,
      title: "Real Time Chat Application",
      description: "A real-time chat application enabling seamless one-to-one and group messaging with instant delivery. Built using WebSockets for real-time communication and a modern, responsive UI for a smooth user experience.",
      image: "https://images.pexels.com/photos/27550988/pexels-photo-27550988/free-photo-of-a-person-holding-a-cell-phone-in-front-of-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Java", "Spring Boot", "MongoDB", "HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/Saquib45/ChatApplication.git",
      // liveUrl: "https://example.com",
    },
  
    {
      id: 3,
      title: "College Sports Event Management Portal",
      description: "A dynamic web platform built to streamline the organization of college sports events, including registration, scheduling a user-friendly interface for participants, coordinators, and sports enthusiast to register efficiently.Developed using modern web technologies with responsive design for accessibility across devices.",
      image: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg",
      technologies: ["React", "css", "HTML", "Firebase"],
      githubUrl: "https://github.com/Saquib45/Zenith-25.git",
      liveUrl: "https://www.zenithsggs.in/",

    },

        {
      id: 4,
      title: "AI Medical Assistant",
      description: "An AI-powered medical assistant that provides personalized health advice and symptom analysis. It uses natural language processing to understand user queries and offers recommendations based on a vast medical knowledge base.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHKn-70UnUkxP9rn2sEWGWWSZgAGKmEM4L6A&s",
      technologies: ["Python", "css", "HTML", "MySQL","JAVA","Spring Boot"],
      githubUrl: "https://github.com/Saquib45/Medical-Assistant",
      

    },

  ];

  return (
    <section id="projects" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            A selection of my recent work, showcasing my skills in frontend and backend development,
            as well as my ability to create complete, production-ready applications.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="project-card bg-gray-800 rounded-xl overflow-hidden"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Saquib45"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;