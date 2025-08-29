import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Database, Shield, Cloud, Users, Award, Mail, Phone, MapPin, Menu, X, ArrowRight, CheckCircle, Star, Zap, Globe, Monitor, TrendingUp, BarChart3, Layers, Settings, Laptop, Smartphone, Server, Lock, Brain, Lightbulb, Target, Rocket, Building, Clock, FileText, ExternalLink } from 'lucide-react';
import Cursor from "../assets/cursor3.png"

const ProfessionalITWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Enterprise-grade applications tailored to your specific business requirements with scalable architecture and modern technologies.",
      features: ["Web Applications", "Mobile Development", "API Integration", "Legacy Modernization"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions & Migration",
      description: "Seamless cloud transformation services to optimize performance, reduce costs, and enhance scalability across all platforms.",
      features: ["AWS/Azure Migration", "Cloud Architecture", "DevOps Implementation", "Cost Optimization"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions protecting your digital assets with advanced threat detection and compliance frameworks.",
      features: ["Security Audits", "Penetration Testing", "Compliance Solutions", "24/7 Monitoring"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics & BI",
      description: "Transform raw data into actionable insights with advanced analytics, machine learning, and intelligent reporting systems.",
      features: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Real-time Dashboards"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "IT Infrastructure",
      description: "Robust, scalable infrastructure solutions designed for high performance, reliability, and future-ready technology stacks.",
      features: ["Network Design", "System Architecture", "Performance Optimization", "Infrastructure Management"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Strategic consulting and implementation services to modernize business processes and accelerate digital innovation.",
      features: ["Strategy Development", "Process Automation", "Technology Integration", "Change Management"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", description: "Successfully delivered across industries" },
    { number: "98%", label: "Client Satisfaction", description: "Consistently high-quality results" },
    { number: "24/7", label: "Support Coverage", description: "Round-the-clock technical assistance" },
    { number: "15+", label: "Years Experience", description: "Proven track record of excellence" }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "TensorFlow", category: "AI/ML" },
    { name: "Blockchain", category: "Emerging" }
  ];

  const industries = [
    { name: "Healthcare", icon: <Shield className="w-6 h-6" />, projects: "120+" },
    { name: "Finance", icon: <BarChart3 className="w-6 h-6" />, projects: "85+" },
    { name: "E-commerce", icon: <Globe className="w-6 h-6" />, projects: "200+" },
    { name: "Manufacturing", icon: <Settings className="w-6 h-6" />, projects: "90+" },
    { name: "Education", icon: <Brain className="w-6 h-6" />, projects: "60+" },
    { name: "Real Estate", icon: <Building className="w-6 h-6" />, projects: "75+" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We dive deep into your business requirements, current infrastructure, and future goals to create a comprehensive project roadmap.",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "02", 
      title: "Strategy & Planning",
      description: "Our experts design a tailored solution architecture with detailed timelines, milestones, and resource allocation.",
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Development & Implementation", 
      description: "Using agile methodologies, we build and deploy your solution with continuous testing and quality assurance.",
      icon: <Code className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "We ensure smooth deployment, provide comprehensive training, and continuously optimize for peak performance.",
      icon: <Rocket className="w-8 h-8" />
    }
  ];

  const caseStudies = [
    {
      title: "Global Bank Digital Transformation",
      industry: "Financial Services",
      challenge: "Legacy system modernization and security enhancement",
      solution: "Cloud migration, API integration, and advanced security implementation",
      results: ["40% reduction in processing time", "99.9% system uptime", "Enhanced security compliance"],
      tech: ["AWS", "Microservices", "React", "Node.js"]
    },
    {
      title: "Healthcare Data Analytics Platform",
      industry: "Healthcare",
      challenge: "Real-time patient data analysis and reporting",
      solution: "AI-powered analytics platform with predictive modeling",
      results: ["30% faster diagnosis", "Improved patient outcomes", "Cost reduction of 25%"],
      tech: ["Python", "TensorFlow", "MongoDB", "Docker"]
    },
    {
      title: "E-commerce Scalability Solution",
      industry: "Retail",
      challenge: "Handle 10x traffic growth during peak seasons",
      solution: "Auto-scaling cloud infrastructure with CDN optimization",
      results: ["Zero downtime during Black Friday", "50% faster page loads", "35% increase in conversions"],
      tech: ["Kubernetes", "Redis", "PostgreSQL", "AWS"]
    }
  ];
  useEffect(() => {
    const createGlitter = (x, y) => {
      const glitter = document.createElement("div");
      glitter.className = "glitter";
      glitter.style.left = `${x}px`;
      glitter.style.top = `${y}px`;

      document.body.appendChild(glitter);
      setTimeout(() => glitter.remove(), 800);
    };

    const handleMouseMove = (e) => {
      // Cursor hotspot (adjust for your PNG)
      const cursorOffsetX = 0; // Horizontal alignment
      const cursorOffsetY = 0; // Vertical alignment

      // Glitter appears slightly above the tip
      const glitterOffsetY = -16; // Move glitter 15px above tip

      const tipX = e.clientX + cursorOffsetX;
      const tipY = e.clientY + cursorOffsetY + glitterOffsetY;

      for (let i = 0; i < 3; i++) {
        createGlitter(
          tipX + (Math.random() - 0.5) * 15,
          tipY + (Math.random() - 0.5) * 15
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  const certifications = [
    "AWS Certified Solutions Architect",
    "Microsoft Azure Expert",
    "Google Cloud Professional",
    "Certified Ethical Hacker (CEH)",
    "PMP Project Management",
    "ISO 27001 Security"
  ];

  return (
    <div className="min-h-screen bg-white">
      
      <style jsx global>{`
  * {
    cursor: url(${Cursor}) 0 0, auto !important; /* Cursor tip */
  }
  .glitter {
    position: fixed;
    width: 12px;
    height: 12px;
    background: gold;
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    pointer-events: none;
    animation: glitterFade 0.8s ease-out forwards;
    box-shadow: 0 0 8px gold;
  }
  @keyframes glitterFade {
    from {
      transform: scale(1) translateY(0) rotate(0deg);
      opacity: 1;
    }
    to {
      transform: scale(0.5) translateY(-10px) rotate(45deg);
      opacity: 0;
    }
  }
`}</style>


      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-yellow-200' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                <Layers className="w-6 h-6 text-black" />
              </div>
              <span className="ml-3 text-2xl font-bold text-black">TechFlow</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'Process', 'Case Studies', 'Technologies', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-800 hover:text-yellow-600 font-medium transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <div className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-300">
                Get Started
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-yellow-200">
            <div className="px-6 py-4 space-y-4">
              {['Home', 'Services', 'Process', 'Case Studies', 'Technologies', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="block text-gray-800 hover:text-yellow-600 font-medium">
                  {item}
                </a>
              ))}
              <button className="w-full bg-yellow-500 text-black py-2 rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-yellow-50 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              Enterprise IT Solutions 
              <span className="block text-yellow-600">That Drive Results</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Partner with industry-leading experts to transform your technology infrastructure, 
              secure your digital assets, and accelerate business growth through innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-black hover:text-yellow-400 transition-colors duration-300">
                View Services
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black border-t border-yellow-400">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-300">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to optimize your operations, enhance security, 
              and drive digital transformation across your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-yellow-400 hover-grow">
                <div className="text-yellow-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-800">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning & Innovation Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-gray-50 to-yellow-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-yellow-600 font-medium mb-4 tracking-wide">Future-Forward Technology. Limitless Possibilities.</div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                Where Vision Meets <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">Reality</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We believe in the power of transformative technology to reshape entire industries. 
                Our approach combines cutting-edge artificial intelligence, quantum computing principles, 
                and human-centered design to create solutions that don't just solve today's problems—they 
                anticipate tomorrow's opportunities. This is our <strong className="text-yellow-600">NEXUS methodology</strong>: 
                <span className="font-semibold text-black"> Navigate. Evolve. eXcel. Unify. Scale.</span>
              </p>
              
              <button 
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl"
                
              >
                Discover the Future with Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              {/* AI Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-2 rounded-lg font-bold text-sm z-20 shadow-lg">
                5M+
                <div className="text-xs font-normal">AI Innovations</div>
              </div>
              
              {/* Main futuristic device container */}
              <div 
                className="relative bg-white p-4 rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border-2 border-yellow-200"
             
              >
                <div className="aspect-video bg-gradient-to-br from-yellow-100 via-gray-100 to-yellow-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black rounded-lg flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent animate-pulse"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                      <Brain className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-yellow-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Neural network visualization */}
              <div 
                className="absolute -bottom-8 -right-8 bg-white p-3 rounded-xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-10 border border-yellow-200"
            
              >
                <div className="w-48 h-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Lightbulb className="w-4 h-4 text-black" />
                    </div>
                    <div className="text-yellow-400 text-xs">Neural Processing</div>
                  </div>
                  
                  <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-2 left-2 w-16 h-1 bg-yellow-400/50 rounded"></div>
                  <div className="absolute bottom-4 left-2 w-12 h-1 bg-yellow-500/50 rounded"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-16 -left-6 w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Target className="w-6 h-6 text-black" />
              </div>
              
              <div className="absolute top-32 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Rocket className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From initial consultation to final deployment, we follow a structured approach that ensures 
              successful project delivery every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-yellow-50 to-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover-grow text-center h-full border border-yellow-200">
                  <div className="text-6xl font-bold text-yellow-400/30 mb-4">{process.step}</div>
                  <div className="text-yellow-600 mb-4 flex justify-center">
                    {process.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{process.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{process.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-yellow-600/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Success Stories</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real projects, real results. See how we've helped leading organizations transform their technology landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover-grow border border-yellow-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    {study.industry}
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-yellow-600 transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-black mb-4">{study.title}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Challenge</h4>
                    <p className="text-gray-700 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-2">Solution</h4>
                    <p className="text-gray-700 text-sm">{study.solution}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-black mb-3">Key Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-800">
                        <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs border border-yellow-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Technologies We Master</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We stay ahead of the curve with cutting-edge technologies and frameworks to deliver future-ready solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-8">Our Technology Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-yellow-50 transition-colors duration-300 border border-yellow-200 hover-grow">
                    <div className="font-semibold text-black">{tech.name}</div>
                    <div className="text-sm text-gray-600">{tech.category}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-8">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg hover:bg-yellow-50 transition-colors duration-300 hover-grow text-center border border-yellow-200">
                    <div className="text-yellow-600 mb-3 flex justify-center">
                      {industry.icon}
                    </div>
                    <div className="font-semibold text-black mb-1">{industry.name}</div>
                    <div className="text-sm text-gray-600">{industry.projects} projects</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-black mb-8">Professional Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-100 to-yellow-200 px-4 py-2 rounded-full border border-yellow-300">
                  <div className="flex items-center">
                    <Award className="w-4 h-4 text-yellow-600 mr-2" />
                    <span className="text-sm font-medium text-black">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Trusted IT Partner for Enterprise Success
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                For over 15 years, TechFlow has been delivering exceptional IT solutions to enterprises 
                worldwide. Our team of certified experts combines deep technical knowledge with strategic 
                business insight to deliver measurable results that drive sustainable growth.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-yellow-600 mr-3" />
                  <div>
                    <div className="font-semibold text-black">15+ Years</div>
                    <div className="text-gray-600 text-sm">Industry Experience</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-yellow-600 mr-3" />
                  <div>
                    <div className="font-semibold text-black">200+ Experts</div>
                    <div className="text-gray-600 text-sm">Certified Professionals</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-yellow-600 mr-3" />
                  <div>
                    <div className="font-semibold text-black">50+ Countries</div>
                    <div className="text-gray-600 text-sm">Global Presence</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-yellow-600 mr-3" />
                  <div>
                    <div className="font-semibold text-black">ISO Certified</div>
                    <div className="text-gray-600 text-sm">Quality Standards</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 border border-yellow-300">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Industry Recognition</h3>
                    <p className="text-gray-700">Award-winning solutions recognized by leading technology organizations and industry bodies.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 border border-yellow-300">
                    <Shield className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Security-First Approach</h3>
                    <p className="text-gray-700">All solutions built with enterprise-grade security frameworks and compliance standards from day one.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 border border-yellow-300">
                    <Users className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Expert Team</h3>
                    <p className="text-gray-700">Certified professionals with extensive experience across all major cloud platforms and emerging technologies.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-gray-50 p-8 rounded-2xl border border-yellow-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow hover-grow border border-yellow-200">
                  <Globe className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-black">Global</div>
                  <div className="text-gray-600">Reach</div>
                </div>
                <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow hover-grow border border-yellow-200">
                  <Code className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-black">Modern</div>
                  <div className="text-gray-600">Technologies</div>
                </div>
                <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow hover-grow border border-yellow-200">
                  <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-black">Rapid</div>
                  <div className="text-gray-600">Deployment</div>
                </div>
                <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow hover-grow border border-yellow-200">
                  <Monitor className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-black">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
              
              {/* Mission Statement */}
              <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-lg font-semibold text-black mb-3 text-center">Our Mission</h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  "To empower businesses through innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage in the digital age."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Meet the experienced professionals leading our technical innovation and driving client success across the globe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-xl text-center border-2 border-yellow-200 hover:shadow-lg transition-all hover-grow">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-100 to-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center border border-yellow-300">
                <Users className="w-12 h-12 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Alexandra Thompson</h3>
              <p className="text-yellow-600 font-medium mb-4">Chief Technology Officer</p>
              <p className="text-gray-700 text-sm mb-4">15+ years in Enterprise Architecture and Cloud Strategy. Former Microsoft Azure Solutions Architect.</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs border border-yellow-300">Cloud Architecture</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs border border-gray-300">Enterprise Solutions</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center border-2 border-yellow-200 hover:shadow-lg transition-all hover-grow">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-100 to-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center border border-yellow-300">
                <Shield className="w-12 h-12 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">David Chen</h3>
              <p className="text-yellow-600 font-medium mb-4">Lead Security Consultant</p>
              <p className="text-gray-700 text-sm mb-4">Certified Ethical Hacker with 12+ years in Cybersecurity and Risk Management. ISO 27001 Lead Auditor.</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs border border-yellow-300">Cybersecurity</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs border border-gray-300">Compliance</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center border-2 border-yellow-200 hover:shadow-lg transition-all hover-grow">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-100 to-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center border border-yellow-300">
                <Code className="w-12 h-12 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Rachel Martinez</h3>
              <p className="text-yellow-600 font-medium mb-4">Solutions Architect</p>
              <p className="text-gray-700 text-sm mb-4">Full-stack developer turned architect with 10+ years in Software Engineering and System Integration.</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs border border-yellow-300">Software Engineering</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs border border-gray-300">System Integration</span>
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div className="bg-gradient-to-r from-yellow-50 to-gray-50 p-8 rounded-2xl border border-yellow-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-black mb-4">Our Core Values</h3>
              <p className="text-gray-700">The principles that guide every decision and interaction at TechFlow</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center border border-yellow-300">
                  <Target className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-black mb-2">Excellence</h4>
                <p className="text-gray-700 text-sm">Delivering exceptional quality in every project</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center border border-yellow-300">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-black mb-2">Collaboration</h4>
                <p className="text-gray-700 text-sm">Working together to achieve shared success</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center border border-yellow-300">
                  <Lightbulb className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-black mb-2">Innovation</h4>
                <p className="text-gray-700 text-sm">Embracing cutting-edge solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center border border-yellow-300">
                  <Shield className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-black mb-2">Integrity</h4>
                <p className="text-gray-700 text-sm">Transparent and ethical business practices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Hear from enterprise leaders who have transformed their operations and achieved measurable results with our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl border-2 border-yellow-200 hover:shadow-lg transition-all hover-grow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-800 mb-6 italic leading-relaxed">
                "TechFlow delivered exceptional results on our digital transformation project. Their cloud migration strategy 
                reduced our infrastructure costs by 40% while improving system performance significantly. The team's expertise 
                and professionalism exceeded our expectations at every stage."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-gray-100 rounded-full flex items-center justify-center mr-4 border border-yellow-300">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="font-bold text-black">Sarah Johnson</div>
                  <div className="text-yellow-600 text-sm font-medium">Chief Technology Officer</div>
                  <div className="text-gray-600 text-sm">Global Manufacturing Corp</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl border-2 border-yellow-200 hover:shadow-lg transition-all hover-grow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-800 mb-6 italic leading-relaxed">
                "Outstanding cybersecurity implementation that protected us from three major attack attempts in the first month alone. 
                The 24/7 monitoring and rapid response team give us complete peace of mind. Their compliance framework 
                saved us months of regulatory preparation."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-gray-100 rounded-full flex items-center justify-center mr-4 border border-yellow-300">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="font-bold text-black">Michael Chen</div>
                  <div className="text-yellow-600 text-sm font-medium">VP of Technology</div>
                  <div className="text-gray-600 text-sm">Financial Services Inc</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl border-2 border-yellow-200 hover:shadow-lg transition-all hover-grow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-800 mb-6 italic leading-relaxed">
                "Their custom software development approach perfectly aligned with our complex healthcare requirements. 
                The patient management system they built has improved our operational efficiency by 35% and enhanced 
                patient satisfaction scores significantly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-gray-100 rounded-full flex items-center justify-center mr-4 border border-yellow-300">
                  <Code className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="font-bold text-black">Emily Rodriguez</div>
                  <div className="text-yellow-600 text-sm font-medium">IT Director</div>
                  <div className="text-gray-600 text-sm">Healthcare Solutions Ltd</div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Logos */}
          <div className="text-center">
            <p className="text-gray-700 mb-8">Trusted by leading organizations worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {['Microsoft', 'Amazon', 'Google', 'IBM', 'Oracle'].map((company, index) => (
                <div key={index} className="bg-gray-200 px-6 py-3 rounded-lg text-gray-700 font-semibold border border-yellow-200">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Start Your Digital Transformation</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to transform your IT infrastructure? Get in touch with our experts to discuss your requirements 
              and discover how we can accelerate your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-yellow-50 to-gray-50 p-8 rounded-xl border border-yellow-200">
                <h3 className="text-2xl font-bold text-black mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 border border-yellow-300">
                      <Mail className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-black">Email Us</div>
                      <div className="text-gray-700">contact@techflow.com</div>
                      <div className="text-gray-600 text-sm">We respond within 2 hours</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 border border-yellow-300">
                      <Phone className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-black">Call Us</div>
                      <div className="text-gray-700">+1 (555) 123-4567</div>
                      <div className="text-gray-600 text-sm">Mon-Fri, 8AM-8PM EST</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 border border-yellow-300">
                      <MapPin className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-black">Visit Us</div>
                      <div className="text-gray-700">123 Business Center, Tech District</div>
                      <div className="text-gray-600 text-sm">New York, NY 10001</div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Options */}
                <div className="mt-8 pt-6 border-t border-yellow-200">
                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-yellow-500 text-black px-4 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-300 text-sm">
                      Schedule Call
                    </button>
                    <button className="border border-black text-black px-4 py-3 rounded-lg font-medium hover:bg-black hover:text-yellow-400 transition-colors duration-300 text-sm">
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl border-2 border-yellow-200">
              <h3 className="text-2xl font-bold text-black mb-6">Send us a Message</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name *" 
                    className="w-full px-4 py-3 border-2 border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name *" 
                    className="w-full px-4 py-3 border-2 border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="email" 
                    placeholder="Email Address *" 
                    className="w-full px-4 py-3 border-2 border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 border-2 border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <input 
                  type="text" 
                  placeholder="Company Name *" 
                  className="w-full px-4 py-3 border-2 border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                />
                
                <select className="w-full px-4 py-3 border-2 border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all">
                  <option value="">Select Service Interest</option>
                  <option value="software-development">Custom Software Development</option>
                  <option value="cloud-solutions">Cloud Solutions & Migration</option>
                  <option value="cybersecurity">Cybersecurity Services</option>
                  <option value="data-analytics">Data Analytics & BI</option>
                  <option value="it-infrastructure">IT Infrastructure</option>
                  <option value="digital-transformation">Digital Transformation</option>
                </select>
                
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your project requirements *" 
                  className="w-full px-4 py-3 border-2 border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none resize-none transition-all"
                ></textarea>
                
                <div className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <label className="text-sm text-gray-700">
                    I agree to receive communications from TechFlow about products, services, and industry insights. 
                    You can unsubscribe at any time.
                  </label>
                </div>
                
                <button 
                  type="button" 
                  className="w-full bg-yellow-500 text-black py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-yellow-200 mb-8 leading-relaxed">
              Join 500+ enterprises who trust TechFlow to deliver innovative solutions that drive results. 
              Let's discuss how we can accelerate your digital transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-colors duration-300">
                Schedule Consultation
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-black py-16 border-t-2 border-yellow-400">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Layers className="w-6 h-6 text-black" />
                </div>
                <span className="ml-3 text-2xl font-bold text-white">TechFlow</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Enterprise IT solutions that drive business transformation and sustainable growth. 
                Partner with us to accelerate your digital journey and achieve measurable results.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-yellow-400" />
                  <span>contact@techflow.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-yellow-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-yellow-400" />
                  <span>New York, NY 10001</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors border border-yellow-400">
                  <Globe className="w-5 h-5 text-yellow-400 hover:text-black" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors border border-yellow-400">
                  <Code className="w-5 h-5 text-yellow-400 hover:text-black" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors border border-yellow-400">
                  <Users className="w-5 h-5 text-yellow-400 hover:text-black" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors border border-yellow-400">
                  <Mail className="w-5 h-5 text-yellow-400 hover:text-black" />
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                {['Software Development', 'Cloud Solutions', 'Cybersecurity', 'Data Analytics', 'IT Infrastructure', 'Digital Transformation'].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Industries */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Industries</h3>
              <ul className="space-y-3">
                {['Healthcare', 'Finance', 'E-commerce', 'Manufacturing', 'Education', 'Real Estate'].map((industry, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                      {industry}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    White Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Support Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="border-t border-yellow-400 pt-12 mb-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-yellow-400">
              <div className="max-w-2xl">
                <h3 className="text-white font-semibold text-xl mb-4">Stay Updated</h3>
                <p className="text-gray-300 mb-6">
                  Get the latest insights on enterprise technology trends, best practices, and industry innovations delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 px-4 py-3 bg-gray-800 text-white border-2 border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                  />
                  <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-yellow-400 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-300 text-sm mb-4 md:mb-0">
                © 2025 TechFlow. All rights reserved. | Privacy Policy | Terms of Service | Cookie Policy
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300 text-sm">SOC 2 Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300 text-sm">ISO 27001 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalITWebsite;