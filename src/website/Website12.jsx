import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, ChevronDown, Globe, Bot, Cloud, BarChart3, Shield, Activity, CheckCircle, Phone, Mail, MapPin, Star, Users, Briefcase, Target } from 'lucide-react';

const CompleteBusiness = () => {
  const [scrollY, setScrollY] = useState(0);
  const [imageTransform, setImageTransform] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculate transform based on scroll position
      const transform = -currentScrollY * 0.3;
      setImageTransform(transform);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'solutions', 'industries', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Premium service images
  const serviceImages = [
    {
      title: "AI & Machine Learning",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=500&fit=crop&crop=center",
      overlay: "AI & Machine Learning"
    },
    {
      title: "Cloud Solutions", 
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=500&fit=crop&crop=center",
      overlay: "Cloud Solutions"
    },
    {
      title: "Process Consulting",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=500&fit=crop&crop=center",
      overlay: "Process Consulting"
    },
    {
      title: "Data Analytics",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=500&fit=crop&crop=center",
      overlay: "Data Analytics"
    },
    {
      title: "Application Development",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=500&fit=crop&crop=center",
      overlay: "Custom Development"
    },
    {
      title: "RPA & Automation",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=500&fit=crop&crop=center",
      overlay: "RPA & Automation"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="flex items-center justify-between px-6 lg:px-12 py-4">
          <div className="text-2xl lg:text-3xl font-light text-black tracking-wide">
            Process<span className="italic font-normal text-green-600">Excellence</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {['home', 'about', 'services', 'solutions', 'industries', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors text-sm font-medium ${
                  activeSection === section 
                    ? 'text-green-600' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden lg:flex border border-gray-800 rounded-full px-5 py-2.5 items-center space-x-2 hover:bg-black hover:text-white transition-all duration-300 text-sm font-medium"
          >
            <span>Contact us</span>
            <ArrowUpRight size={14} />
          </button>

          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 p-6">
            {['home', 'about', 'services', 'solutions', 'industries', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left py-3 capitalize text-gray-600 hover:text-black transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-12 bg-gradient-to-br from-green-50 via-green-100 to-yellow-50">
        <div className="px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              {/* Left Content */}
              <div className="lg:col-span-5 space-y-6 lg:space-y-8 lg:pt-8">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-600 font-medium text-sm lg:text-base">Empowering Business Excellence</span>
                </div>
                
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  Simplify decision-making, streamline operations, and unlock growth through AI, Cloud, Data & Automation.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Global Presence</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bot className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">AI & RPA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Cloud className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Cloud & Data</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Process Excellence</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Large Typography */}
              <div className="lg:col-span-7 relative">
                <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.85] tracking-tight">
                  <span className="block text-black">Intelligent</span>
                  <span className="block text-outline">Technology</span>
                  <span className="block text-green-600">Solutions</span>
                </h1>
                
                {/* Floating CTA Button */}
                <div className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="w-32 h-32 lg:w-40 lg:h-40 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-105 transition-all duration-300 group shadow-xl"
                  >
                    <div className="text-center">
                      <div className="text-white font-medium text-sm lg:text-base mb-1">Let's Transform</div>
                      <div className="text-white text-xs">Your Business</div>
                      <ArrowUpRight size={20} className="mx-auto mt-2 text-white group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Images Section */}
        <div className="relative py-12 lg:py-20 overflow-hidden perspective-1000">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 top-0 w-96 h-96 transform -translate-x-48 -translate-y-24 rotate-45">
              <div className="w-full h-full bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 rounded-full opacity-40 blur-xl transform rotate-45"></div>
            </div>
            <div className="absolute right-0 bottom-0 w-[30rem] h-[30rem] transform translate-x-48 translate-y-24 -rotate-45">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full opacity-40 blur-2xl transform -rotate-12"></div>
            </div>
          </div>
          
          <div className="relative transform-gpu">
            <div 
              className="flex space-x-4 lg:space-x-6 transition-transform duration-75 ease-out px-6"
              style={{ 
                transform: `translateX(${imageTransform}px) perspective(1000px) rotateY(-15deg)`,
                width: 'calc(100% + 600px)',
                transformStyle: 'preserve-3d'
              }}
            >
              {serviceImages.concat(serviceImages).map((service, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-64 lg:w-72 h-80 lg:h-96 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl relative transform hover:rotateY-5 transition-all duration-300 hover:scale-105 group"
                >
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600" 
                    style={{ display: 'none' }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-lg lg:text-xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {service.overlay}
                    </h3>
                    <div className="w-12 h-1 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
                Your Partner for <span className="text-green-600">Operational Excellence</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are a trusted partner in advisory, technology, and process solutions, with over 50 years of combined consulting expertise across industries. Our unique blend of process excellence and next-gen technology enables clients to scale, optimize, and stay competitive.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Years Combined Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Global Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 w-full">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Users className="w-8 h-8 text-green-600 mb-4" />
                    <div className="text-sm font-medium">Global Team</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Target className="w-8 h-8 text-blue-600 mb-4" />
                    <div className="text-sm font-medium">Proven Results</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Briefcase className="w-8 h-8 text-purple-600 mb-4" />
                    <div className="text-sm font-medium">Industry Expertise</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Star className="w-8 h-8 text-orange-600 mb-4" />
                    <div className="text-sm font-medium">Excellence Driven</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Comprehensive <span className="text-green-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end services, from business strategy to technology execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Process Consulting & BPO",
                description: "Streamline and optimize processes with governance frameworks and 24x7 support",
                features: ["SOP Management", "Follow-the-Sun Delivery", "Process Optimization"]
              },
              {
                icon: <Bot className="w-8 h-8" />,
                title: "IT Consulting",
                description: "Technology roadmaps aligned with business goals and stakeholder engagement",
                features: ["IT Assessments", "Technology Roadmaps", "Governance Design"]
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Cloud Solutions",
                description: "Serverless applications, DevOps pipelines, and cloud optimization",
                features: ["Cloud Migration", "DevOps Pipelines", "IoT Deployment"]
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Data Engineering & Analytics",
                description: "Real-time dashboards and scalable data processing architectures",
                features: ["Data Pipelines", "Real-time Analytics", "Cost Optimization"]
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Application Development",
                description: "Cloud-native, secure, and scalable applications for modern enterprises",
                features: ["Mobile & Web Apps", "Cloud-native Design", "Future-ready Solutions"]
              },
              {
                icon: <Bot className="w-8 h-8" />,
                title: "Artificial Intelligence",
                description: "Computer Vision, NLP, and predictive analytics for smarter decisions",
                features: ["Computer Vision", "Natural Language Processing", "Predictive Analytics"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Tailored <span className="text-green-600">Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We don't just deliver services — we build solutions that create measurable value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Led Automation",
                description: "Intelligent workflows & bots to eliminate manual effort",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop&crop=center"
              },
              {
                title: "Custom Workflow Apps",
                description: "Timesheet, Expense, HR, and Operations applications",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=center"
              },
              {
                title: "Cloud Migration & Optimization",
                description: "Seamless, cost-effective transition to the cloud",
                image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop&crop=center"
              },
              {
                title: "Data Analytics Platforms",
                description: "Reporting dashboards that drive real-time decisions",
                image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop&crop=center"
              }
            ].map((solution, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-200">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Case Studies */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-black mb-12">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-2xl p-8">
                <div className="text-green-600 font-bold text-sm mb-2">RETAIL CASE STUDY</div>
                <h4 className="text-xl font-bold text-black mb-4">80% Reduction in Reporting Time</h4>
                <p className="text-gray-600">Automated data collection & PowerBI integration transformed reporting workflows for a major retail client.</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-8">
                <div className="text-blue-600 font-bold text-sm mb-2">OIL & GAS CASE STUDY</div>
                <h4 className="text-xl font-bold text-black mb-4">Enhanced Safety & Reduced Downtime</h4>
                <p className="text-gray-600">IoT-enabled monitoring solutions improved safety compliance and operational efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Industry <span className="text-green-600">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We bring specialized expertise across multiple industries with proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Financial Services & Insurance",
                description: "Process automation, claims, compliance",
                color: "bg-blue-500"
              },
              {
                title: "Retail & E-commerce",
                description: "Sales data automation, customer insights",
                color: "bg-purple-500"
              },
              {
                title: "Oil & Gas / Engineering",
                description: "IoT integration, smart operations, safety monitoring",
                color: "bg-orange-500"
              },
              {
                title: "Technology & SaaS",
                description: "Cloud-native apps, DevOps, scalable platforms",
                color: "bg-green-500"
              },
              {
                title: "Healthcare",
                description: "Medical billing, RCM, AI-driven compliance solutions",
                color: "bg-red-500"
              },
              {
                title: "BPO Operations",
                description: "Global delivery, back-office excellence",
                color: "bg-indigo-500"
              }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className={`w-12 h-12 ${industry.color} rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="text-green-400">Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Delivery",
                description: "Onshore, offshore & nearshore presence"
              },
              {
                icon: <Bot className="w-8 h-8" />,
                title: "Next-Gen Tech",
                description: "AI, Cloud, RPA, and Data-driven solutions"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Proven Results",
                description: "Measurable client outcomes and case studies"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Stakeholder-First",
                description: "Strong governance and client-centric approach"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-green-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Let's <span className="text-green-600">Connect</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our experts today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 rounded-full p-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 rounded-full p-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Email</h3>
                  <p className="text-gray-600">contact@processexcellence.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 rounded-full p-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Office</h3>
                  <p className="text-gray-600">Global offices - US, UK, India</p>
                </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="Company Name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all">
                    <option>Select a service</option>
                    <option>AI & Automation</option>
                    <option>Cloud Solutions</option>
                    <option>Data Analytics</option>
                    <option>Process Consulting</option>
                    <option>Application Development</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <ArrowUpRight size={16} className="group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-light mb-6">
                Process<span className="italic font-normal text-green-400">Excellence</span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering businesses with intelligent technology solutions for operational excellence.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Globe size={16} />
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Mail size={16} />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Process Consulting</li>
                <li className="hover:text-white transition-colors cursor-pointer">IT Consulting</li>
                <li className="hover:text-white transition-colors cursor-pointer">Cloud Solutions</li>
                <li className="hover:text-white transition-colors cursor-pointer">Data Analytics</li>
                <li className="hover:text-white transition-colors cursor-pointer">AI & Automation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Financial Services</li>
                <li className="hover:text-white transition-colors cursor-pointer">Retail & E-commerce</li>
                <li className="hover:text-white transition-colors cursor-pointer">Oil & Gas</li>
                <li className="hover:text-white transition-colors cursor-pointer">Healthcare</li>
                <li className="hover:text-white transition-colors cursor-pointer">Technology</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+1 (555) 123-4567</li>
                <li>contact@processexcellence.com</li>
                <li>Global offices</li>
                <li>US, UK, India</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ProcessExcellence. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        .text-outline {
          -webkit-text-stroke: 2px #e5e7eb;
          -webkit-text-fill-color: transparent;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @media (max-width: 768px) {
          .text-outline {
            -webkit-text-stroke: 1px #e5e7eb;
          }
        }
      `}</style>
    </div>
  );
};

export default CompleteBusiness;