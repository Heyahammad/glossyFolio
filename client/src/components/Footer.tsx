import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-secondary py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold font-poppins text-white">
              <span className="text-primary">F</span>aisal<span className="text-accent">.</span>
            </a>
          </div>
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {currentYear} Faisal Ahammad. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <motion.a 
              whileHover={{ y: -5, color: "#EC4899" }}
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl text-gray-300 hover:text-accent transition-colors"
            >
              <i className="fab fa-github"></i>
            </motion.a>
            
            <motion.a 
              whileHover={{ y: -5, color: "#EC4899" }}
              href="https://linkedin.com/in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl text-gray-300 hover:text-accent transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            
            <motion.a 
              whileHover={{ y: -5, color: "#EC4899" }}
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl text-gray-300 hover:text-accent transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </motion.a>
            
            <motion.a 
              whileHover={{ y: -5, color: "#EC4899" }}
              href="mailto:faisal@example.com" 
              className="text-xl text-gray-300 hover:text-accent transition-colors"
            >
              <i className="fas fa-envelope"></i>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
