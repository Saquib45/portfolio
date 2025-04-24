// import React, { useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
// import emailjs from '@emailjs/browser';

// const Contact: React.FC = () => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
  
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState('');
  
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitError('');
    
//     try {
//       const templateParams = {
//         to_email: 'saquibmaniyart@gmail.com',
//         from_name: formData.name,
//         from_email: formData.email,
//         subject: formData.subject,
//         message: formData.message,
//       };

//       await emailjs.send(
//         'service_907wplg', // Replace with your EmailJS service ID
//         'template_1kubjpb', // Replace with your EmailJS template ID
//         templateParams,
//         'U5R8r0rwNVDyyyXwj' // Replace with your EmailJS public key
//       );

//       setSubmitSuccess(true);
//       setFormData({ name: '', email: '', subject: '', message: '' });
      
//       // Reset success message after 5 seconds
//       setTimeout(() => setSubmitSuccess(false), 5000);
//     } catch (error) {
//       setSubmitError('Failed to send message. Please try again later.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="section-padding bg-gray-900 relative">
//       <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
//       <div className="container-custom relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="section-title inline-block">
//             <span className="gradient-text">Keep In Touch</span>
//           </h2>
//           <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
//             Have a project in mind or just want to say hello? Feel free to reach out to me.
//             I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
//           </p>
//         </div>

//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.6 }}
//           className="grid grid-cols-1 lg:grid-cols-3 gap-8"
//         >
//           <div className="lg:col-span-2">
//             <div className="bg-gray-800 rounded-xl p-8">
//               <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
//               {submitSuccess && (
//                 <div className="mb-6 p-4 bg-green-900/30 border border-green-500 text-green-200 rounded-lg">
//                   Thank you for your message! I'll get back to you soon.
//                 </div>
//               )}

//               {submitError && (
//                 <div className="mb-6 p-4 bg-red-900/30 border border-red-500 text-red-200 rounded-lg">
//                   {submitError}
//                 </div>
//               )}
              
//               <form ref={formRef} onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
//                       Your Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="input bg-gray-700"
//                       placeholder="John Doe"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
//                       Your Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="input bg-gray-700"
//                       placeholder="john@example.com"
//                     />
//                   </div>
//                 </div>
                
//                 <div className="mb-6">
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="input bg-gray-700"
//                     placeholder="Project Inquiry"
//                   />
//                 </div>
                
//                 <div className="mb-6">
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
//                     Your Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={5}
//                     className="input bg-gray-700"
//                     placeholder="Hello, I'm interested in working with you on..."
//                   ></textarea>
//                 </div>
                
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="btn btn-primary w-full flex items-center justify-center"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <Send className="mr-2" size={18} />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
          
//           <div>
//             <div className="bg-gray-800 rounded-xl p-8 mb-8">
//               <h3 className="text-xl font-bold mb-6">Contact Information</h3>
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <div className="mr-4 p-3 bg-primary/20 rounded-lg">
//                     <Mail className="text-primary" size={20} />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-white">Email</h4>
//                     <a href="mailto:saquibmaniyart@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
//                       saquibmaniyart@gmail.com
//                     </a>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="mr-4 p-3 bg-secondary/20 rounded-lg">
//                     <MapPin className="text-secondary" size={20} />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-white">Location</h4>
//                     <p className="text-gray-400">
//                       San Francisco, California
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="mr-4 p-3 bg-accent/20 rounded-lg">
//                     <Phone className="text-accent" size={20} />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-white">Phone</h4>
//                     <a href="tel:+12345678900" className="text-gray-400 hover:text-accent transition-colors">
//                       +1 (234) 567-8900
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-gray-800 rounded-xl p-8">
//               <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
//               <div className="flex flex-wrap gap-4">
//                 <a
//                   href="https://github.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center w-12 h-12 bg-gray-700 hover:bg-primary/20 rounded-full transition-colors"
//                 >
//                   <Github className="text-white" size={22} />
//                 </a>
//                 <a
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center w-12 h-12 bg-gray-700 hover:bg-accent/20 rounded-full transition-colors"
//                 >
//                   <Linkedin className="text-white" size={22} />
//                 </a>
//                 <a
//                   href="https://twitter.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center w-12 h-12 bg-gray-700 hover:bg-secondary/20 rounded-full transition-colors"
//                 >
//                   <Twitter className="text-white" size={22} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;