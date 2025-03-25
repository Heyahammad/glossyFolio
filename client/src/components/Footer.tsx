import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#home" className="text-2xl font-bold font-poppins text-white mb-4 inline-block">
              <span className="text-primary">F</span>aisal<span className="text-primary">.</span>
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              A passionate React developer with a strong academic background and an eye for creating
              beautiful, functional user interfaces.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <i className="fas fa-map-marker-alt w-5 text-primary"></i>
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fas fa-envelope w-5 text-primary"></i>
                <span>faisal@example.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fas fa-phone w-5 text-primary"></i>
                <span>+880 1XXX XXXXXX</span>
              </li>
            </ul>
            
            <div className="flex space-x-4 mt-6">
              <motion.a 
                whileHover={{ y: -5, color: "#4F46E5" }}
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 text-gray-300 hover:text-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center"
              >
                <i className="fab fa-github"></i>
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -5, color: "#4F46E5" }}
                href="https://linkedin.com/in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 text-gray-300 hover:text-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center"
              >
                <i className="fab fa-linkedin-in"></i>
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -5, color: "#4F46E5" }}
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 text-gray-300 hover:text-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center"
              >
                <i className="fab fa-twitter"></i>
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {currentYear} Faisal Ahammad. All rights reserved.
            </p>
          </div>
          
          <div>
            <p className="text-gray-500 text-sm">
              Made with <span className="text-red-500">❤️</span> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
