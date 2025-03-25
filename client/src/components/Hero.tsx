import { motion } from "framer-motion";
import profileImage from "@/constants/data";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-10 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="absolute top-0 left-0 right-0 h-full bg-[url('https://images.unsplash.com/photo-1603575449096-da705f622104?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80')] opacity-10 bg-fixed bg-cover"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-poppins mb-4 text-gray-900">
              <span className="text-primary">Faisal</span>
              <motion.span 
                animate={{ 
                  rotate: [0, 14, -8, 14, -4, 10, 0, 0] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5, 
                  ease: "easeInOut" 
                }}
                className="inline-block ml-2"
              >
                👋
              </motion.span>
            </h1>
            
            <div className="relative h-16 mb-6">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-gray-700 absolute"
              >
                React Developer
              </motion.h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              A passionate developer with expertise in React and a strong academic background. Currently studying Computer Science at University of Liberal Arts Bangladesh.
            </p>
            
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-md transition-colors flex items-center"
              >
                <i className="fas fa-envelope mr-2"></i> Contact Me
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary/5 font-medium rounded-md transition-colors flex items-center"
              >
                <i className="fas fa-code mr-2"></i> View Work
              </motion.a>
            </div>
            
            <div className="flex items-center space-x-6 mt-8">
              <motion.a 
                whileHover={{ y: -3, color: "#4F46E5" }}
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl text-gray-600 hover:text-primary transition-colors"
              >
                <i className="fab fa-github"></i>
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -3, color: "#4F46E5" }}
                href="https://linkedin.com/in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl text-gray-600 hover:text-primary transition-colors"
              >
                <i className="fab fa-linkedin"></i>
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -3, color: "#4F46E5" }}
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl text-gray-600 hover:text-primary transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -3, color: "#4F46E5" }}
                href="mailto:faisal@example.com" 
                className="text-xl text-gray-600 hover:text-primary transition-colors"
              >
                <i className="fas fa-envelope"></i>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full md:w-2/5 relative"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1603575449096-da705f622104?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" 
                  alt="Faisal Ahammad" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute top-0 -right-4 bg-white border border-gray-100 rounded-lg p-3 shadow-lg"
              >
                <div className="text-sm font-mono">
                  <span className="text-gray-500">function</span> <span className="text-primary">developer</span><span className="text-gray-800">()</span> <span className="text-gray-500">{"{"}</span><br />
                  &nbsp;&nbsp;<span className="text-gray-500">return</span> <span className="text-green-500">'React Developer'</span><span className="text-gray-500">;</span><br />
                  <span className="text-gray-500">{"}"}</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -bottom-4 -left-4 bg-white border border-gray-100 rounded-lg p-3 shadow-lg"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-green-500 font-medium">Available for hire</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
