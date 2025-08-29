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
      
      animStyle.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      
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

const ModernWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Clear success message after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  // Icons
  const ChevronDownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="6,9 12,15 18,9"/>
    </svg>
  );
  
  const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
  
  const XIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12,5 19,12 12,19"/>
    </svg>
  );

  const PlayIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5,3 19,12 5,21"/>
    </svg>
  );

  const QuoteIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.1">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
    </svg>
  );

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    {
      title: "AI & Automation",
      description: "Intelligent automation solutions powered by artificial intelligence and machine learning.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop&crop=center"
    },
    {
      title: "Robotic Process Automation",
      description: "Streamline repetitive tasks with advanced RPA solutions for maximum efficiency.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop&crop=center"
    },
    {
      title: "Digital Transformation",
      description: "Complete business transformation with cutting-edge technology integration.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop&crop=center"
    }
  ];

  const portfolio = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Brand Identity",
      category: "Design",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Analytics Dashboard",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      role: "CEO, TechCorp",
      content: "Exceptional work quality and attention to detail. They transformed our vision into reality.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Lisa Wang",
      role: "Founder, StartupXYZ",
      content: "Professional, creative, and delivered beyond our expectations. Highly recommended.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Alex Turner",
      role: "Marketing Director, InnovateCo",
      content: "The team delivered exactly what we needed on time and within budget. Couldn't be happier!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Maria Rodriguez",
      role: "Product Manager, TechStart",
      content: "Their attention to detail and creative solutions exceeded our expectations. Truly outstanding work!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    }
  ];

  // Technology stack data
  const technologies = [
    { name: 'React', icon: '⚛️', description: 'Frontend library for interactive UIs' },
    { name: 'Node.js', icon: '🟢', description: 'Server-side JavaScript runtime' },
    { name: 'Next.js', icon: '▲', description: 'React framework for production' },
    { name: 'Tailwind CSS', icon: '💨', description: 'Utility-first CSS framework' },
    { name: 'MongoDB', icon: '🍃', description: 'NoSQL database for modern apps' },
    { name: 'GraphQL', icon: '📊', description: 'Query language for APIs' },
    { name: 'AWS', icon: '☁️', description: 'Cloud infrastructure services' },
    { name: 'Figma', icon: '🎨', description: 'Collaborative design platform' },
  ];

  // Pricing plans data
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: 'month',
      description: 'Perfect for small businesses and startups',
      features: ['Up to 5 pages', 'Basic SEO', '1 GB hosting', 'Email support', '3 revisions'],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: 'month',
      description: 'Ideal for growing businesses',
      features: ['Up to 15 pages', 'Advanced SEO', '5 GB hosting', 'Priority support', '10 revisions', 'E-commerce functionality'],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: '$249',
      period: 'month',
      description: 'For large organizations with complex needs',
      features: ['Unlimited pages', 'Premium SEO', 'Unlimited hosting', '24/7 support', 'Unlimited revisions', 'Advanced analytics', 'Custom integrations'],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-light">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-extralight tracking-wider bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              ROBOCONSULTZ
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm tracking-wide transition-all duration-300 hover:text-emerald-600 relative ${
                    activeSection === item.id ? 'text-emerald-600' : 'text-gray-500'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-300"></div>
                  )}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-gray-600"
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
                className="text-2xl font-light tracking-wider text-gray-700 hover:text-emerald-600 transition-colors"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            id="hero-content"
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-extralight tracking-wider leading-tight">
              We Create
              <span className="block font-light bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Digital Excellence</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses through intelligent automation, AI solutions, and cutting-edge robotics technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 text-sm tracking-wide hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center gap-3 group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowRightIcon />
              </button>
              
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="border border-emerald-300 text-emerald-700 px-8 py-4 text-sm tracking-wide hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300 flex items-center gap-3"
              >
                <PlayIcon />
                View Our Work
              </button>
            </div>
          </motion.div>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-emerald-400 cursor-pointer"
          onClick={() => scrollToSection('about')}
          style={{
            animation: 'float 3s ease-in-out infinite'
          }}
        >
          <ChevronDownIcon />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} id="about-text" className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-extralight tracking-wide">
                About <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">RoboConsultz</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  RoboConsultz is a cutting-edge digital consultancy that specializes in automation, 
                  AI integration, and intelligent business solutions. Our team combines strategic 
                  thinking with innovative technology to deliver transformative results.
                </p>
                
                <p>
                  With expertise in robotics, artificial intelligence, and digital transformation, 
                  we help businesses streamline operations, enhance productivity, and stay ahead 
                  in the rapidly evolving technological landscape.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-light bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">150+</div>
                  <div className="text-sm tracking-wide text-gray-500">Automation Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">98%</div>
                  <div className="text-sm tracking-wide text-gray-500">Efficiency Improvement</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} id="about-image" className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=center" 
                alt="Our team working"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} id="services-header" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-wide mb-6">
              Our <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive automation and AI solutions tailored to your business transformation needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ y: -5 }}
                id={`service-${i}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-emerald-200"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-light mb-4 text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} id="portfolio-header" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-wide mb-6">
              Recent <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of our recent projects and creative solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ y: -5 }}
                id={`portfolio-${i}`}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-teal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-sm font-light">View Project</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm tracking-wide text-emerald-600 font-medium">{project.category}</div>
                  <h3 className="text-2xl font-light text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-gradient-to-br from-cyan-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} id="team-header" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-wide mb-6">
              Our <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the talented individuals behind our creative solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ y: -5 }}
                id={`team-${i}`}
                className="text-center group"
              >
                <div className="relative mb-6 mx-auto w-48 h-48">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500 border-4 border-white shadow-lg group-hover:shadow-xl"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">{member.name}</h3>
                <p className="text-emerald-600 tracking-wide font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} id="testimonials-header" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-wide mb-6">
              What <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                id={`testimonial-${i}`}
                className="relative p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <QuoteIcon />
                <p className="text-lg text-gray-600 leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-emerald-100"
                  />
                  <div>
                    <div className="font-light text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-emerald-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            id="tech-header"
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Our <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use cutting-edge technologies to build fast, scalable, and secure solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ y: -5, scale: 1.02 }}
                id={`tech-${i}`}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center group border border-gray-100"
              >
                <div className="text-3xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} id="pricing-header" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-wide mb-6">
              Simple <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your project needs and budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ y: -5 }}
                id={`pricing-${i}`}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 shadow-lg scale-105' 
                    : 'bg-white border-gray-200 hover:border-emerald-200 hover:shadow-md'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-light text-gray-900 mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-light text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-8">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl'
                    : 'border border-emerald-300 text-emerald-700 hover:bg-emerald-50'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} id="contact-header" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-wide mb-6">
              Let's Create Something <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Amazing</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your vision to life? We'd love to hear about your project and explore how we can help.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} id="contact-form" className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-light text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-light text-gray-300 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-light text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, goals, and how we can help..."
                ></textarea>
              </div>
              
              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-4 text-sm tracking-wide hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-lg ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRightIcon />}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="mt-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg">
                    <p className="text-green-300 text-sm">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="text-3xl font-extralight tracking-wider bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
                ROBOCONSULTZ
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Leading digital consultancy specializing in AI automation, robotics integration, 
                and intelligent business transformation solutions.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:info@roboconsultz.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  info@roboconsultz.com
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-medium text-white mb-6">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    AI & Automation
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    Robotic Process Automation
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    Digital Transformation
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    Consulting Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-medium text-white mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('portfolio')} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    Our Work
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('team')} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    Team
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2025 RoboConsultz. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, 0px); }
          50% { transform: translate(-50%, -10px); }
        }
      `}</style>
    </div>
  );
};

export default ModernWebsite;