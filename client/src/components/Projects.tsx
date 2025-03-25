import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Projects() {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "react",
      technologies: ["React", "Node.js", "MongoDB"],
      liveDemo: "#",
      repository: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "javascript",
      technologies: ["JavaScript", "HTML/CSS", "Local Storage"],
      liveDemo: "#",
      repository: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application with forecast and location tracking.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "react",
      technologies: ["React", "Weather API", "Geolocation"],
      liveDemo: "#",
      repository: "#"
    },
    {
      id: 4,
      title: "Data Analysis Tool",
      description: "Data visualization and analysis tool built with Java and JavaFX.",
      image: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "other",
      technologies: ["Java", "JavaFX", "Data Analysis"],
      liveDemo: "#",
      repository: "#"
    },
    {
      id: 5,
      title: "Quiz Application",
      description: "Interactive quiz app with multiple categories and difficulty levels.",
      image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80",
      category: "javascript",
      technologies: ["JavaScript", "HTML/CSS", "RESTful API"],
      liveDemo: "#",
      repository: "#"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Personal portfolio website built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      category: "react",
      technologies: ["React", "Tailwind CSS", "Responsive"],
      liveDemo: "#",
      repository: "#"
    }
  ];

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "react", name: "React" },
    { id: "javascript", name: "JavaScript" },
    { id: "other", name: "Other" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" ref={ref} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-2">My <span className="text-primary">Projects</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 flex flex-wrap justify-center gap-4"
        >
          {filters.map((filter) => (
            <motion.button 
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 ${activeFilter === filter.id ? 'bg-primary' : 'bg-dark-secondary hover:bg-primary'} text-white rounded-lg transition-colors`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="project-card bg-dark-secondary rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="project-image h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-poppins">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:text-accent transition-colors flex items-center gap-2"
                    >
                      <i className="fas fa-link"></i> Live Demo
                    </a>
                    <a 
                      href={project.repository} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:text-accent transition-colors flex items-center gap-2"
                    >
                      <i className="fab fa-github"></i> Repository
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 bg-dark-secondary hover:bg-primary text-white font-medium rounded-lg transition-colors"
          >
            <i className="fab fa-github mr-2"></i> More Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
