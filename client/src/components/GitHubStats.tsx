import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function GitHubStats() {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });

  // Sample GitHub contribution grid data
  const contributionGrid = Array(28).fill(0).map(() => Math.random());

  const languages = [
    { name: "JavaScript", percent: 45, color: "bg-yellow-500" },
    { name: "React", percent: 30, color: "bg-blue-500" },
    { name: "CSS/HTML", percent: 15, color: "bg-pink-500" },
    { name: "Java", percent: 10, color: "bg-orange-500" }
  ];

  const recentRepos = [
    {
      name: "E-commerce Platform",
      description: "Online shopping platform with cart and payment integration",
      visibility: "Public",
      stars: 12,
      forks: 5,
      language: "JavaScript",
      languageColor: "text-yellow-500"
    },
    {
      name: "Weather Dashboard",
      description: "Weather forecast application with location tracking",
      visibility: "Public",
      stars: 8,
      forks: 3,
      language: "React",
      languageColor: "text-blue-500"
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio website with project showcase",
      visibility: "Public",
      stars: 5,
      forks: 2,
      language: "HTML/CSS",
      languageColor: "text-pink-500"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-2">GitHub <span className="text-primary">Contributions</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-dark-DEFAULT rounded-lg p-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1603575449096-da705f622104?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" 
                  alt="Faisal Ahammad GitHub" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins">Faisal Ahammad</h3>
                <p className="text-gray-400">@faisal-ahammad</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="text-xl font-bold">25</div>
                <div className="text-gray-400 text-sm">Repositories</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="text-xl font-bold">120+</div>
                <div className="text-gray-400 text-sm">Contributions</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="text-xl font-bold">15</div>
                <div className="text-gray-400 text-sm">Followers</div>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-dark-secondary/50 rounded-lg p-6"
          >
            <h4 className="text-lg font-bold mb-4">Contribution Graph</h4>
            <div className="grid grid-cols-7 gap-2">
              {contributionGrid.map((value, index) => {
                const opacity = Math.max(0.1, value);
                
                return (
                  <motion.div 
                    key={index}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.01 }}
                    className={`aspect-square bg-primary rounded-sm`}
                    style={{ opacity }}
                  />
                );
              })}
            </div>
          </motion.div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-dark-secondary/50 rounded-lg p-6"
            >
              <h4 className="text-lg font-bold mb-4">Top Languages</h4>
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{language.name}</span>
                      <span>{language.percent}%</span>
                    </div>
                    <div className="w-full bg-dark-tertiary rounded-full h-2.5">
                      <motion.div 
                        className={`${language.color} h-2.5 rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${language.percent}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-dark-secondary/50 rounded-lg p-6"
            >
              <h4 className="text-lg font-bold mb-4">Recent Repositories</h4>
              <div className="space-y-4">
                {recentRepos.map((repo, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className={`${index < recentRepos.length - 1 ? 'border-b border-dark-tertiary' : ''} pb-3`}
                  >
                    <div className="flex justify-between items-center">
                      <h5 className="font-medium">{repo.name}</h5>
                      <span className="text-xs bg-dark-tertiary px-2 py-1 rounded">{repo.visibility}</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{repo.description}</p>
                    <div className="flex items-center mt-2 text-xs text-gray-400">
                      <span className="flex items-center mr-3"><i className="fas fa-star mr-1"></i> {repo.stars}</span>
                      <span className="flex items-center mr-3"><i className="fas fa-code-branch mr-1"></i> {repo.forks}</span>
                      <span className="flex items-center">
                        <i className={`fas fa-circle ${repo.languageColor} mr-1 text-xs`}></i> {repo.language}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
