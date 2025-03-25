import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function About() {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });
  
  const stats = [
    { 
      icon: "fas fa-laptop-code", 
      value: "10+", 
      label: "Projects Completed" 
    },
    { 
      icon: "fas fa-code", 
      value: "5+", 
      label: "Technologies" 
    },
    { 
      icon: "fas fa-award", 
      value: "5.0", 
      label: "SSC & HSC GPA" 
    },
    { 
      icon: "fas fa-book", 
      value: "3", 
      label: "Years of Study" 
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-2">About <span className="text-primary">Me</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 mb-8 md:mb-0"
          >
            <h3 className="text-2xl font-bold mb-4 font-poppins text-gray-800">Who am I?</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I'm Faisal Ahammad, a dedicated Computer Science student at the University of Liberal Arts Bangladesh, currently in my 3rd year with a strong CGPA of 3.84.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I'm passionate about creating responsive and user-friendly web applications using React and other modern technologies. My academic excellence extends back to my school days where I achieved a GPA of 5.0 in both HSC and SSC examinations.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Currently, I'm expanding my skillset by learning AI and Machine Learning alongside my expertise in React, JavaScript, CSS, Java, and C.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg p-4 shadow-md flex-1 min-w-[140px] border border-gray-100"
              >
                <h4 className="font-bold text-lg mb-1 font-poppins text-gray-800">Education</h4>
                <p className="text-gray-600">CSE Student</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg p-4 shadow-md flex-1 min-w-[140px] border border-gray-100"
              >
                <h4 className="font-bold text-lg mb-1 font-poppins text-gray-800">Experience</h4>
                <p className="text-gray-600">React Development</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg p-4 shadow-md flex-1 min-w-[140px] border border-gray-100"
              >
                <h4 className="font-bold text-lg mb-1 font-poppins text-gray-800">CGPA</h4>
                <p className="text-primary text-xl font-bold">3.84</p>
              </motion.div>
            </div>
            
            <div className="mt-8">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-md transition-colors"
              >
                <i className="fas fa-paper-plane mr-2"></i> Get In Touch
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="w-full md:w-1/2 grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center justify-center text-center transform transition-all hover:shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <i className={`${stat.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                <p className="text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
