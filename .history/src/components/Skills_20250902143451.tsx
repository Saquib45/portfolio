// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// interface Skill {
//   name: string;
//   icon: string;
//   category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
// }

// const Skills: React.FC = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5 },
//     },
//   };

//   const skills: Skill[] = [
//     // Frontend
//     { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'frontend' },
//     { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'frontend' },
//     { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'frontend' },
//     { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
//     { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', category: 'frontend' },
    
//     // Backend
//     { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'backend' },
//     { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', category: 'backend' },
//     { name: 'Hibernate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg', category: 'backend' },
    
//     // Database
//     { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database' },
//     { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database' },

    
//     // Tools
//     { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'tools' },
//     { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', category: 'tools' },
//     { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'tools' },
//     { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools' },
//     { name: 'intellij', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg', category: 'tools' },
//     { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'tools' },

//     //Other
//     { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', category: 'other' },
//     { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg', category: 'other' },
//     { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', category: 'other' },
//     { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg', category: 'other' },
    
//   ];

//   const categories = [
//     { id: 'frontend', name: 'Frontend' },
//     { id: 'backend', name: 'Backend' },
//     { id: 'database', name: 'Database' },
//     { id: 'tools', name: 'Tools ' },
//     { id: 'other', name: 'Other tech stacks ' },

//   ];

//   return (
//     <section id="skills" className="section-padding bg-gray-900">
//       <div className="container-custom">
//         <div className="text-center mb-16">
//           <h2 className="section-title inline-block">
//             <span className="gradient-text">Skills & Technologies</span>
//           </h2>
//           <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
//             A comprehensive collection of technologies I've worked with throughout my career.
//             From frontend frameworks to backend technologies, databases, datastructure and algorithm.
//           </p>
//         </div>

//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="space-y-12"
//         >
//           {categories.map((category) => (
//             <div key={category.id} className="mb-12">
//               <h3 className="text-xl mb-6 font-semibold text-accent border-l-4 border-accent pl-3">
//                 {category.name}
//               </h3>
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//                 {skills
//                   .filter((skill) => skill.category === category.id)
//                   .map((skill, index) => (
//                     <motion.div
//                       key={index}
//                       variants={itemVariants}
//                       className="skill-card flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-800/70"
//                     >
//                       <img 
//                         src={skill.icon} 
//                         alt={skill.name} 
//                         className="w-12 h-12 mb-2" 
//                       />
//                       <span className="text-sm text-gray-300">{skill.name}</span>
//                     </motion.div>
//                   ))}
//               </div>
//             </div>
//           ))}
//         </motion.div>

//         <div className="mt-16 text-center">
//           <div className="inline-flex items-center justify-center gap-8 p-6 bg-gray-800 rounded-xl">
//             <div className="flex flex-col items-center">
//               <a href=""><span className="text-3xl font-bold text-accent">650+</span></a>
//               <span className="text-sm text-gray-400">LeetCode Problems</span>
//             </div>
//             <div className="h-12 w-px bg-gray-700"></div>
//             <div className="flex flex-col items-center">
//               <a href="https://www.geeksforgeeks.org/user/saquibmab6ui/">
//                 <span className="text-3xl font-bold text-secondary">150+</span>
//               </a>
//                 <span className="text-sm text-gray-400">GeeksforGeeks Problems</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   ); 
// };

// export default Skills; 





import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  icon: string;
  category: 'languages' | 'bigdata' | 'web' | 'cloud' | 'database' | 'tools' | 'concepts';
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const skills: Skill[] = [
    // Languages
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'languages' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', category: 'languages' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'languages' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'languages' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'languages' },
    { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'languages' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'languages' },

    // Big Data
    { name: 'Hadoop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg', category: 'bigdata' },
    { name: 'Hive', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachehive/apachehive-original.svg', category: 'bigdata' },
    { name: 'Spark', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg', category: 'bigdata' },
    { name: 'PySpark', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'bigdata' },
    { name: 'MapReduce', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg', category: 'bigdata' },

    // Web Technology
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', category: 'web' },
    { name: 'Hibernate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg', category: 'web' },
    { name: 'JDBC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'web' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'web' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'web' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', category: 'web' },

    // Cloud
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'cloud' },
    { name: 'Azure Synapse', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'cloud' },
    { name: 'Azure Data Factory', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'cloud' },

    // Database
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database' },

    // Tools
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'tools' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'tools' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', category: 'tools' },
    { name: 'Cloudinary', icon: 'https://res.cloudinary.com/cloudinary-marketing/image/upload/v1622146400/brand/Cloud%20Glyph/cloudinary_cloud_glyph_blue_png.png', category: 'tools' },
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', category: 'tools' },
    { name: 'Databricks', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/databricks/databricks-original.svg', category: 'tools' },
    { name: 'Workbench', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'tools' },

    // Concepts
    { name: 'DSA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'concepts' },
    { name: 'OOP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'concepts' },
    { name: 'DBMS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'concepts' },
    { name: 'ETL/ELT Pipelines', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg', category: 'concepts' },
  ];

  const categories = [
    { id: 'languages', name: 'Languages' },
    { id: 'bigdata', name: 'Big Data' },
    { id: 'web', name: 'Web Technology' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'database', name: 'Database' },
    { id: 'tools', name: 'Tools' },
    { id: 'concepts', name: 'Concepts' },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            A comprehensive collection of technologies I've worked with throughout my career.
            From frontend frameworks to backend technologies, big data, cloud, databases, and core CS concepts.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {categories.map((category) => (
            <div key={category.id} className="mb-12">
              <h3 className="text-xl mb-6 font-semibold text-accent border-l-4 border-accent pl-3">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="skill-card flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-800/70"
                    >
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-12 h-12 mb-2" 
                      />
                      <span className="text-sm text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-8 p-6 bg-gray-800 rounded-xl">
            <div className="flex flex-col items-center">
              <a href="https://leetcode.com/u/saquib6789/">
                <span className="text-3xl font-bold text-accent">700+</span>
              </a>
              <span className="text-sm text-gray-400">LeetCode Problems</span>
            </div>
            <div className="h-12 w-px bg-gray-700"></div>
            <div className="flex flex-col items-center">
              <a href="https://www.geeksforgeeks.org/user/saquibmab6ui/">
                <span className="text-3xl font-bold text-secondary">150+</span>
              </a>
              <span className="text-sm text-gray-400">GeeksforGeeks Problems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  ); 
};

export default Skills;
