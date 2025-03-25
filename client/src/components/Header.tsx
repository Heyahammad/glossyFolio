import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      // Check if page is scrolled for header styling
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      sections.forEach(section => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
          current = sectionElement.getAttribute('id') || '';
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          <a 
            href="#home" 
            className="text-2xl font-bold font-poppins"
            onClick={() => handleNavClick("home")}
          >
            <span className="text-primary">F</span>
            <span className={`${scrolled ? 'text-gray-800' : 'text-white'}`}>aisal</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={`nav-link ${scrolled ? 'text-gray-700' : 'text-gray-100'} hover:text-primary transition-colors relative text-sm font-medium`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-primary"
                    layoutId="activeSection"
                  />
                )}
              </a>
            ))}
          </div>
          
          <button 
            className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-primary focus:outline-none`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="md:hidden py-4 bg-white rounded-lg shadow-lg"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  className={`py-2 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors ${activeSection === item.id ? 'text-primary font-medium' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
