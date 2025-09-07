import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Globe, Bot, Cloud, BarChart3, Shield, Heart, ArrowRight, CheckCircle, Play, Zap, Cpu, Database, Users } from 'lucide-react';

const Website = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  
  const sectionRefs = useRef([]);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check which sections are visible
      const visible = new Set();
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2) {
            visible.add(index);
          }
        }
      });
      setVisibleSections(visible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Bot className="w-16 h-16" />,
      title: "AI & Automation",
      description: "Intelligent workflows that think ahead",
      color: "from-blue-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: <Cloud className="w-16 h-16" />,
      title: "Cloud Solutions",
      description: "Scalable infrastructure for tomorrow",
      color: "from-purple-500 to-pink-600",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: <BarChart3 className="w-16 h-16" />,
      title: "Data Analytics",
      description: "Transform data into decisions",
      color: "from-green-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: <Shield className="w-16 h-16" />,
      title: "Process Excellence",
      description: "Streamlined operations, maximized efficiency",
      color: "from-orange-500 to-red-600",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format"
    }
  ];

  const industries = [
    { name: "Financial Services", growth: "85%", metric: "Process Efficiency", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&auto=format" },
    { name: "Healthcare", growth: "92%", metric: "Billing Accuracy", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop&auto=format" },
    { name: "Retail", growth: "80%", metric: "Reporting Speed", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop&auto=format" },
    { name: "Oil & Gas", growth: "75%", metric: "Safety Compliance", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop&auto=format" }
  ];

  const solutions = [
    { 
      title: "AI-Led Automation", 
      icon: <Bot className="w-12 h-12" />, 
      desc: "Workflows that learn and adapt",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&auto=format"
    },
    { 
      title: "Cloud Migration", 
      icon: <Cloud className="w-12 h-12" />, 
      desc: "Seamless digital transformation",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&auto=format"
    },
    { 
      title: "Healthcare RCM", 
      icon: <Heart className="w-12 h-12" />, 
      desc: "Revenue cycle perfection",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&auto=format"
    },
    { 
      title: "Data Platforms", 
      icon: <BarChart3 className="w-12 h-12" />, 
      desc: "Real-time business intelligence",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format"
    },
    { 
      title: "IoT Operations", 
      icon: <Cpu className="w-12 h-12" />, 
      desc: "Connected smart systems",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop&auto=format"
    },
    { 
      title: "Security First", 
      icon: <Shield className="w-12 h-12" />, 
      desc: "Enterprise-grade protection",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&auto=format"
    }
  ];

  // Animation utility function
  const getAnimationStyle = (index, type = 'fadeUp') => {
    const isVisible = visibleSections.has(index);
    const delay = (index % 4) * 100; // Stagger animations
    
    const baseStyle = {
      transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
    };

    switch (type) {
      case 'fadeUp':
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0px)' : 'translateY(60px)',
        };
      case 'slideLeft':
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0px)' : 'translateX(-100px)',
        };
      case 'slideRight':
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0px)' : 'translateX(100px)',
        };
      case 'scale':
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.8)',
        };
      default:
        return baseStyle;
    }
  };

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ProcessAI
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#solutions" className="hover:text-blue-400 transition-colors">Solutions</a>
              <a href="#industries" className="hover:text-blue-400 transition-colors">Industries</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={parallaxStyle}
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&auto=format"
            alt="Technology Background"
            className="w-full h-full object-cover scale-110"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-black z-20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="text-center z-40 max-w-4xl mx-auto px-6">
          <div 
            style={{
              animation: 'heroFadeIn 2s ease-out forwards',
              opacity: 0
            }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Think Different
              <br />
              <span className="text-4xl md:text-6xl">About Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Where intelligent technology meets human excellence
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all transform hover:scale-105 shadow-2xl">
                Start Your Journey
              </button>
              <button className="border border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Our Story
              </button>
            </div>
          </div>
        </div>

        <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 animate-bounce text-gray-400 z-40" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            ref={el => sectionRefs.current[0] = el}
            className="text-center mb-20"
            style={getAnimationStyle(0, 'fadeUp')}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Innovation
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Four pillars of transformation that reshape how you work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={el => sectionRefs.current[index + 1] = el}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600 transition-all duration-500"
                style={getAnimationStyle(index + 1, 'fadeUp')}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 p-8">
                  <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Impact Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&auto=format"
            alt="Data Visualization"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div 
              ref={el => sectionRefs.current[5] = el}
              style={getAnimationStyle(5, 'slideLeft')}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  80% Faster
                </span>
                <br />
                Decisions
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Real-time analytics that turn complex data into clear insights. 
                Make decisions at the speed of thought.
              </p>
              <div className="flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-gray-300">Instant data processing</span>
              </div>
            </div>
            
            <div 
              ref={el => sectionRefs.current[6] = el}
              className="relative"
              style={getAnimationStyle(6, 'slideRight')}
            >
              <div className="relative w-full h-80 rounded-3xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format"
                  alt="Analytics Dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-[2px] border border-gray-700/50 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-24 h-24 text-blue-400 mx-auto mb-4 animate-pulse" />
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                      Live Analytics
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            ref={el => sectionRefs.current[7] = el}
            className="text-center mb-20"
            style={getAnimationStyle(7, 'fadeUp')}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Solutions
            </h2>
            <p className="text-xl text-gray-400">Built for the future, delivered today</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                ref={el => sectionRefs.current[index + 8] = el}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500"
                style={getAnimationStyle(index + 8, 'scale')}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                  <img 
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="relative z-10 p-8">
                  <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.desc}</p>
                  <ArrowRight className="w-6 h-6 text-blue-400 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Impact */}
      <section id="industries" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div 
            ref={el => sectionRefs.current[14] = el}
            className="text-center mb-20"
            style={getAnimationStyle(14, 'fadeUp')}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
            <p className="text-xl text-gray-400">Measurable results across industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                ref={el => sectionRefs.current[index + 15] = el}
                className="group relative overflow-hidden text-center rounded-3xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all duration-500"
                style={getAnimationStyle(index + 15, 'fadeUp')}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <img 
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="relative z-10 p-8">
                  <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {industry.growth}
                  </div>
                  <div className="text-gray-400 text-sm mb-2">{industry.metric}</div>
                  <h3 className="text-xl font-semibold">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-32 relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&h=1080&fit=crop&auto=format"
            alt="Global Network"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div 
              ref={el => sectionRefs.current[19] = el}
              className="relative"
              style={getAnimationStyle(19, 'slideLeft')}
            >
              <div className="relative w-full h-96 rounded-3xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop&auto=format"
                  alt="Global Operations"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-[2px] border border-gray-700/50 flex items-center justify-center">
                  <Globe className="w-32 h-32 text-blue-400 animate-spin-slow" />
                  
                  {/* Floating elements representing global presence */}
                  <div className="absolute top-20 left-16 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-32 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-24 left-24 w-5 h-5 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-16 right-16 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div 
              ref={el => sectionRefs.current[20] = el}
              style={getAnimationStyle(20, 'slideRight')}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="text-white">Global.</span><br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Always On.
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                24x7 support across time zones. Onshore precision meets offshore scale.
              </p>
              <div className="space-y-4">
                {[
                  "50+ years combined expertise",
                  "Follow-the-Sun delivery model", 
                  "Enterprise-grade security"
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-4"
                    style={{
                      animation: `slideInLeft 0.6s ease-out forwards ${(idx + 1) * 0.2}s`,
                      opacity: 0
                    }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Expertise Showcase */}
      <section className="py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&auto=format"
            alt="Team Collaboration"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div 
              ref={el => sectionRefs.current[21] = el}
              style={getAnimationStyle(21, 'slideLeft')}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="text-white">Human</span><br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Technology amplifies talent. Our people make the difference.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Users className="w-8 h-8" />, label: "Expert Teams" },
                  { icon: <Zap className="w-8 h-8" />, label: "Rapid Delivery" },
                  { icon: <Database className="w-8 h-8" />, label: "Deep Industry Knowledge" },
                  { icon: <Shield className="w-8 h-8" />, label: "Proven Results" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="text-blue-400">{item.icon}</div>
                    <span className="text-gray-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div 
              ref={el => sectionRefs.current[22] = el}
              className="relative"
              style={getAnimationStyle(22, 'slideRight')}
            >
              <div className="relative w-full h-96 rounded-3xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format"
                  alt="Professional Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div 
            ref={el => sectionRefs.current[23] = el}
            style={getAnimationStyle(23, 'fadeUp')}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-16">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Excellence
              </span>
              <br />
              <span className="text-white text-4xl md:text-5xl">by Design</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { 
                number: "24x7", 
                label: "Global Support", 
                icon: <Globe className="w-8 h-8" />,
                image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=200&fit=crop&auto=format"
              },
              { 
                number: "50+", 
                label: "Years Experience", 
                icon: <Shield className="w-8 h-8" />,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&auto=format"
              },
              { 
                number: "100%", 
                label: "Client Success", 
                icon: <CheckCircle className="w-8 h-8" />,
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&auto=format"
              }
            ].map((stat, index) => (
              <div 
                key={index}
                ref={el => sectionRefs.current[index + 24] = el}
                className="group relative overflow-hidden rounded-3xl"
                style={getAnimationStyle(index + 24, 'fadeUp')}
              >
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <img 
                    src={stat.image}
                    alt={stat.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="relative z-10 p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl">
                  <div className="text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&auto=format"
            alt="Business Success"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div 
            ref={el => sectionRefs.current[27] = el}
            className="text-center mb-20"
            style={getAnimationStyle(27, 'fadeUp')}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Success
              </span>
              <br />
              <span className="text-white text-4xl md:text-5xl">Stories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                industry: "Retail",
                result: "80% Reduction",
                metric: "Reporting Time",
                description: "PowerBI integration automated data collection",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&auto=format"
              },
              {
                industry: "Oil & Gas",
                result: "75% Increase",
                metric: "Safety Compliance",
                description: "IoT monitoring reduced downtime",
                image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop&auto=format"
              }
            ].map((study, index) => (
              <div
                key={index}
                ref={el => sectionRefs.current[index + 28] = el}
                className="group relative overflow-hidden rounded-3xl"
                style={getAnimationStyle(index + 28, index % 2 === 0 ? 'slideLeft' : 'slideRight')}
              >
                <div className="relative w-full h-80 rounded-3xl overflow-hidden">
                  <img 
                    src={study.image}
                    alt={study.industry}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                      {study.result}
                    </div>
                    <div className="text-lg text-gray-300 mb-1">{study.metric}</div>
                    <div className="text-gray-400 text-sm">{study.description}</div>
                    <div className="text-blue-400 font-semibold mt-2">{study.industry}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&auto=format"
            alt="Modern Office"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div 
            ref={el => sectionRefs.current[30] = el}
            style={getAnimationStyle(30, 'fadeUp')}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-white">Ready to</span><br />
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Transform?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's build something extraordinary together
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl">
                Get Started Today
              </button>
              <button className="border border-gray-600 px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-800 relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=400&fit=crop&auto=format"
            alt="Technology Footer"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 md:mb-0">
              ProcessAI
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-8">
            © 2025 ProcessAI. Designed for the future.
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes heroFadeIn {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0px);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0px);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1f1f1f;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export default Website;