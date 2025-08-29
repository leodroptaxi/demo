import React, { useState, useEffect } from 'react';

// Smooth motion implementation
const motion = {
  div: ({ children, className, style, animate, initial, transition, whileHover, whileInView, ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
      
      const element = document.getElementById(props.id);
      if (element) observer.observe(element);
      
      return () => {
        if (element) observer.unobserve(element);
      };
    }, [props.id]);

    const getAnimationStyle = () => {
      let animStyle = { ...style };
      
      if (initial && !isVisible) {
        if (initial.opacity !== undefined) animStyle.opacity = initial.opacity;
        if (initial.y) animStyle.transform = `translateY(${initial.y}px)`;
        if (initial.x) animStyle.transform = `translateX(${initial.x}px)`;
        if (initial.scale) animStyle.transform = `scale(${initial.scale})`;
      }
      
      if (whileHover && isHovered) {
        if (whileHover.scale) animStyle.transform = `scale(${whileHover.scale})`;
        if (whileHover.y) animStyle.transform = `${animStyle.transform || ''} translateY(${whileHover.y}px)`;
      }
      
      animStyle.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      
      return animStyle;
    };

    return (
      <div 
        className={className} 
        style={getAnimationStyle()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {children}
      </div>
    );
  }
};

const ModernYellowWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'team', 'technology', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Handle contact form
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    // Form submission logic would go here
    alert('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  // Icons
  const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
  
  const XIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12,5 19,12 12,19"/>
    </svg>
  );

  const ChevronDownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6,9 12,15 18,9"/>
    </svg>
  );

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Team', id: 'team' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }]
  const testimonials = [
    {
      name: "David Mitchell",
      role: "CEO, AutoTech Industries",
      content: "RoboConsultz transformed our manufacturing process with AI automation. Production efficiency increased by 300%.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      company: "AutoTech Industries"
    },
    {
      name: "Lisa Zhang",
      role: "CTO, SmartLogistics", 
      content: "Their robotics integration saved us millions in operational costs. Truly innovative solutions that deliver results.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      company: "SmartLogistics"
    },
    {
      name: "Robert Johnson",
      role: "Operations Director, FutureMed",
      content: "The AI-powered predictive maintenance system has revolutionized how we manage our medical equipment.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      company: "FutureMed"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Research Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "PhD in Machine Learning with 12+ years in AI research and development."
    },
    {
      name: "Marcus Rodriguez", 
      role: "Robotics Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in robotic systems integration and automation solutions."
    },
    {
      name: "Priya Patel",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      bio: "Specializes in predictive analytics and machine learning algorithms."
    },
    {
      name: "James Kim",
      role: "Solutions Architect",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Designs scalable AI infrastructure and automation frameworks."
    }
  ];

  const services = [
    {
      title: "AI Automation",
      description: "Intelligent automation solutions that streamline your business processes and increase efficiency.",
      icon: "🤖"
    },
    {
      title: "Robotic Integration",
      description: "Seamless integration of robotic systems into your existing workflows and operations.",
      icon: "⚙️"
    },
    {
      title: "Smart Consulting",
      description: "Strategic consulting to help businesses adopt and implement cutting-edge technology solutions.",
      icon: "🧠"
    }
  ];

  const portfolio = [
    {
      title: "Manufacturing Automation",
      category: "Robotics",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      title: "AI Customer Service Bot",
      category: "AI Solutions",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
    },
    {
      title: "Smart Warehouse System",
      category: "Automation",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop"
    },
    {
      title: "Predictive Maintenance AI",
      category: "AI Solutions",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-black">
              ROBOCONSULTZ<span className="text-yellow-400">.</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-yellow-500 relative ${
                    activeSection === item.id ? 'text-yellow-500' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 transition-all duration-300"></div>
                  )}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl font-medium text-gray-800 hover:text-yellow-500 transition-colors"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-yellow-50 to-white">
        {/* Background geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-black opacity-10 rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-300 rounded-full opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            id="hero-content"
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
              <span className="text-black">Robotic.</span><br />
              <span className="text-yellow-400">Intelligence.</span><br />
              <span className="text-black">Solutions.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We leverage cutting-edge robotics and AI technology to transform businesses and create intelligent automation solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-10 py-4 font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-3 group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                GET STARTED
                <ArrowRightIcon />
              </button>
              
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="border-2 border-black text-black px-10 py-4 font-bold text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                VIEW WORK
              </button>
            </div>
          </motion.div>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-yellow-400 cursor-pointer animate-bounce"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDownIcon />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} id="about-text" className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight">
                About <span className="text-yellow-400">RoboConsultz</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  We are a cutting-edge robotics and AI consulting firm specializing in intelligent automation solutions. 
                  Our team combines deep technical expertise with strategic business insight to transform how companies operate.
                </p>
                
                <p>
                  From manufacturing automation to AI-powered customer service, we help businesses harness the power of 
                  robotics and artificial intelligence to achieve unprecedented efficiency and growth.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-400 mb-2">50+</div>
                  <div className="text-sm tracking-wide text-gray-400">AI Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-400 mb-2">99%</div>
                  <div className="text-sm tracking-wide text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-400 mb-2">24/7</div>
                  <div className="text-sm tracking-wide text-gray-400">Support</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} id="about-image" className="relative">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop" 
                  alt="Robotics and AI technology"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-yellow-400/20"></div>
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-yellow-400 -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} id="services-header" className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
              Our <span className="text-yellow-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive robotics and AI solutions tailored to transform your business operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ y: -5 }}
                id={`service-${i}`}
                className="bg-gray-50 p-8 hover:bg-yellow-50 transition-all duration-500 group border-l-4 border-transparent hover:border-yellow-400"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-black transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} id="portfolio-header" className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
              Our <span className="text-yellow-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our latest robotics and AI implementations across various industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ y: -5 }}
                id={`portfolio-${i}`}
                className="group cursor-pointer bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-bold text-yellow-500 mb-2 tracking-wide uppercase">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-yellow-400/20 rotate-45 animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-yellow-400/15 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} id="technology-header" className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
              Our <span className="text-yellow-400">Technology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies powering the future of automation and intelligent systems.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} id="tech-content" className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-yellow-400 mb-6">
                  Advanced AI & Machine Learning
                </h3>
                
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Our proprietary AI algorithms learn and adapt to your business processes, 
                    providing intelligent automation that gets smarter over time.
                  </p>
                  
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Neural Network Processing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Computer Vision Systems</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Natural Language Processing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Predictive Analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} id="tech-visual" className="relative">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop" 
                  alt="AI and machine learning technology"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent rounded-lg"></div>
                
                {/* Tech stats overlay */}
                <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-yellow-400 font-bold text-2xl">99.9%</div>
                  <div className="text-white text-sm">Accuracy Rate</div>
                </div>
                
                <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-yellow-400 font-bold text-2xl">24/7</div>
                  <div className="text-white text-sm">Operation</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technology Stack */}
          <motion.div initial={{ opacity: 0, y: 30 }} id="tech-stack" className="space-y-12">
            <h3 className="text-4xl font-bold text-center text-white mb-12">
              Technology <span className="text-yellow-400">Stack</span>
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-gray-800 hover:bg-gray-700 p-8 rounded-lg transition-all duration-300 border border-gray-700 hover:border-yellow-400">
                  <div className="text-4xl mb-4">🧠</div>
                  <h4 className="text-yellow-400 font-bold text-lg mb-2">TensorFlow</h4>
                  <p className="text-gray-400 text-sm">Deep Learning Framework</p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gray-800 hover:bg-gray-700 p-8 rounded-lg transition-all duration-300 border border-gray-700 hover:border-yellow-400">
                  <div className="text-4xl mb-4">🔬</div>
                  <h4 className="text-yellow-400 font-bold text-lg mb-2">PyTorch</h4>
                  <p className="text-gray-400 text-sm">Machine Learning Library</p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gray-800 hover:bg-gray-700 p-8 rounded-lg transition-all duration-300 border border-gray-700 hover:border-yellow-400">
                  <div className="text-4xl mb-4">🤖</div>
                  <h4 className="text-yellow-400 font-bold text-lg mb-2">ROS</h4>
                  <p className="text-gray-400 text-sm">Robot Operating System</p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gray-800 hover:bg-gray-700 p-8 rounded-lg transition-all duration-300 border border-gray-700 hover:border-yellow-400">
                  <div className="text-4xl mb-4">☁️</div>
                  <h4 className="text-yellow-400 font-bold text-lg mb-2">AWS</h4>
                  <p className="text-gray-400 text-sm">Cloud Infrastructure</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} id="team-header" className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
              Meet Our <span className="text-yellow-400">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented professionals dedicated to bringing your vision to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ y: -5 }}
                id={`team-${i}`}
                className="text-center group bg-gray-50 hover:bg-yellow-50 p-6 transition-all duration-500"
              >
                <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-yellow-500 font-bold mb-3 tracking-wide uppercase text-sm">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} id="testimonials-header" className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
              Client <span className="text-yellow-400">Reviews</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ y: -5 }}
                id={`testimonial-${i}`}
                className="relative p-8 bg-gray-900 hover:bg-gray-800 transition-all duration-500 group border-l-4 border-yellow-400"
              >
                <div className="absolute top-6 right-6 text-yellow-400 opacity-20 text-4xl">
                  "
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-8 relative z-10 group-hover:text-white transition-colors duration-300">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 object-cover border-2 border-yellow-400"
                  />
                  <div>
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    <div className="text-yellow-400 text-sm font-medium">{testimonial.role}</div>
                    <div className="text-gray-400 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} id="contact-header" className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
              Let's <span className="text-yellow-400">Talk</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Let's discuss how we can help your business grow.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} id="contact-form" className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                    NAME
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border-2 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <div className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                    EMAIL
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border-2 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <div className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                  MESSAGE
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 border-2 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <div className="text-center pt-4">
                <button 
                  onClick={handleSubmit}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-12 py-4 font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  SEND MESSAGE
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t-2 border-yellow-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-white mb-4 md:mb-0">
              ROBOCONSULTZ<span className="text-yellow-400">.</span>
            </div>
            <div className="text-gray-400 text-sm font-medium">
              © 2025 ROBOCONSULTZ. Powering the future with intelligent automation.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernYellowWebsite;