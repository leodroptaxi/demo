import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Globe, Bot, Cloud, BarChart3, Shield, Activity, CheckCircle, Users, Star, Phone, Mail, MapPin } from 'lucide-react';

const RoboConsultzWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  // Smooth scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'industries', label: 'Industries' },
    { id: 'contact', label: 'Contact' }
  ];

  // Services data
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Process Consulting & BPO",
      description: "Streamline and optimize processes with governance frameworks and 24x7 support",
      features: ["SOP Management", "Follow-the-Sun Delivery", "Process Optimization"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Serverless applications, DevOps pipelines, and cloud orchestration",
      features: ["Cloud Migration", "DevOps Implementation", "IoT Integration"]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Data Engineering & Analytics",
      description: "Real-time dashboards and advanced analytics with scalable architectures",
      features: ["Data Pipelines", "Real-time Analytics", "Cost Optimization"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI & RPA",
      description: "Intelligent automation across Finance, Insurance, Retail, and Oil & Gas",
      features: ["Computer Vision", "NLP Analytics", "Enterprise Bots"]
    }
  ];

  // Solutions data
  const solutions = [
    { title: "AI-Led Automation", desc: "Intelligent workflows & bots to eliminate manual effort" },
    { title: "Custom Workflow Apps", desc: "Timesheet, Expense, HR, and Operations applications" },
    { title: "Cloud Migration & Optimization", desc: "Seamless, cost-effective transition to the cloud" },
    { title: "Data Analytics Platforms", desc: "Reporting dashboards that drive real-time decisions" },
    { title: "Industry Accelerators", desc: "Pre-built frameworks for Retail, Insurance, Oil & Gas, Healthcare" },
    { title: "IoT & Smart Operations", desc: "Real-time device monitoring & process automation" }
  ];

  // Industries data
  const industries = [
    { name: "Financial Services & Insurance", desc: "Process automation, claims, compliance" },
    { name: "Retail & E-commerce", desc: "Sales data automation, customer insights" },
    { name: "Oil & Gas / Engineering", desc: "IoT integration, smart operations, safety monitoring" },
    { name: "Technology & SaaS", desc: "Cloud-native apps, DevOps, scalable platforms" },
    { name: "Healthcare", desc: "Medical billing, RCM, AI-driven compliance solutions" },
    { name: "BPO Operations", desc: "Global delivery, back-office excellence" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 transition-all duration-500 ease-out">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200/50 z-50 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
              <Bot className="w-8 h-8 text-emerald-600 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">RoboConsultz</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 hover:scale-105 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 transition-all duration-500 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg mt-2 transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
              Empowering Businesses with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 animate-gradient-x">
                Process Excellence
              </span>
              <span className="block">& Intelligent Technology</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Simplify decision-making, streamline operations, and unlock growth through AI, Cloud, Data & Automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button 
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Transform Your Business</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-500 transform hover:scale-105"
              >
                Explore Services
              </button>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
              {[
                { icon: <Globe className="w-8 h-8" />, title: "Global Presence", desc: "Onshore, Offshore & Nearshore delivery for 24x7 support" },
                { icon: <Bot className="w-8 h-8" />, title: "AI & RPA", desc: "Smarter workflows and intelligent automation" },
                { icon: <Cloud className="w-8 h-8" />, title: "Cloud & Data", desc: "Secure, scalable, and optimized IT ecosystems" },
                { icon: <BarChart3 className="w-8 h-8" />, title: "Process Consulting", desc: "Driving efficiency and operational excellence" },
                { icon: <Activity className="w-8 h-8" />, title: "Medical Billing", desc: "End-to-end revenue cycle management" },
                { icon: <Shield className="w-8 h-8" />, title: "Secure IT", desc: "Compliance-driven, resilient, and future-ready" }
              ].map((feature, index) => (
                <div key={index} 
                  className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-emerald-100 hover:border-emerald-200 animate-fade-in-up" 
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="text-emerald-600 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-teal-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Partner for 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"> Operational Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a trusted partner in advisory, technology, and process solutions, with over 50 years of combined consulting expertise across industries. Our unique blend of process excellence and next-gen technology enables clients to scale, optimize, and stay competitive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "50+", label: "Years Experience", desc: "Combined consulting expertise" },
              { number: "24/7", label: "Global Support", desc: "Follow-the-sun delivery model" },
              { number: "100%", label: "Client Success", desc: "Proven measurable outcomes" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end services, from business strategy to technology execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-emerald-100 hover:border-emerald-200">
                <div className="text-emerald-600 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
                      <span className="group-hover:text-emerald-600 transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transformative Solutions
            </h2>
            <p className="text-xl opacity-90">
              We don't just deliver services — we build solutions that create measurable value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-white/20 hover:border-white/40">
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="opacity-90 leading-relaxed">{solution.desc}</p>
              </div>
            ))}
          </div>

          {/* Case Studies */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
              <h4 className="text-2xl font-bold mb-4">Retail Success Story</h4>
              <p className="opacity-90 mb-4 leading-relaxed">
                Automated data collection & PowerBI integration reduced reporting time by 80%
              </p>
              <div className="text-4xl font-bold text-yellow-300">80% Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
              <h4 className="text-2xl font-bold mb-4">Oil & Gas Innovation</h4>
              <p className="opacity-90 mb-4 leading-relaxed">
                IoT-enabled monitoring reduced downtime and increased safety compliance
              </p>
              <div className="text-4xl font-bold text-green-300">Zero Downtime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600">
              Specialized knowledge across multiple industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl border-2 border-emerald-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">{industry.name}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">RoboConsultz</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Global delivery model with onshore, offshore & nearshore presence",
              "AI, Cloud, RPA, and Data-driven solutions for next-gen enterprises",
              "Proven case studies with measurable client outcomes",
              "Stakeholder-first approach and strong governance"
            ].map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 group p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-500">
                <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-lg text-gray-700 group-hover:text-emerald-600 transition-colors duration-300">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-teal-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Partner for 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"> Operational Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a trusted partner in advisory, technology, and process solutions, with over 50 years of combined consulting expertise across industries. Our unique blend of process excellence and next-gen technology enables clients to scale, optimize, and stay competitive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "50+", label: "Years Experience", desc: "Combined consulting expertise" },
              { number: "24/7", label: "Global Support", desc: "Follow-the-sun delivery model" },
              { number: "100%", label: "Client Success", desc: "Proven measurable outcomes" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Roadmap Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Process Roadmap</span>
            </h2>
            <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
              A structured journey from concept to implementation
            </p>
          </div>

          <div className="relative">
            {/* Animated Road */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full transform -translate-y-1/2 opacity-30"></div>
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white rounded-full transform -translate-y-1/2 animate-road-dash"></div>

            {/* Roadmap Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { 
                  step: "01", 
                  title: "Discovery", 
                  desc: "Understanding your business needs and challenges",
                  icon: "🔍"
                },
                { 
                  step: "02", 
                  title: "Strategy", 
                  desc: "Crafting a tailored solution roadmap",
                  icon: "📋"
                },
                { 
                  step: "03", 
                  title: "Implementation", 
                  desc: "Agile development with regular checkpoints",
                  icon: "⚡"
                },
                { 
                  step: "04", 
                  title: "Optimization", 
                  desc: "Continuous improvement and scaling",
                  icon: "🚀"
                }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  {/* Animated Milestone */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full border-4 border-white shadow-lg animate-milestone-pulse" style={{ animationDelay: `${index * 0.5}s` }}></div>
                  
                  {/* Content Card */}
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 mt-12">
                    <div className="text-4xl mb-4 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>{item.icon}</div>
                    <div className="text-emerald-300 text-sm font-bold mb-2">STEP {item.step}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-emerald-200 opacity-90">{item.desc}</p>
                  </div>

                  {/* Animated Arrow (except last) */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-emerald-400 text-2xl animate-arrow-float">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Moving Car Animation */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-2xl animate-car-drive">
              🚗
            </div>
          </div>
        </div>
      </section>

      {/* Animated Solar System Section */}
      <section className="py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
        {/* Stars Background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Technology Universe</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Explore our constellation of services orbiting around your business success
            </p>
          </div>

          {/* Solar System Container */}
          <div className="relative w-full max-w-4xl mx-auto h-96 md:h-[500px]">
            {/* Central Sun (Your Business) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full shadow-2xl animate-solar-pulse">
              <div className="absolute inset-2 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs md:text-sm">YOUR BUSINESS</span>
              </div>
              {/* Sun Rays */}
              <div className="absolute inset-0 animate-spin-slow">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-6 bg-yellow-300 opacity-60"
                    style={{
                      transform: `rotate(${i * 45}deg)`,
                      transformOrigin: '50% 50px'
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Orbiting Services */}
            {[
              { service: "AI & RPA", color: "from-emerald-500 to-teal-500", size: "w-12 h-12", orbit: "w-48 h-48", duration: "animate-orbit-slow", icon: "🤖" },
              { service: "Cloud", color: "from-blue-500 to-cyan-500", size: "w-10 h-10", orbit: "w-64 h-64", duration: "animate-orbit-medium", icon: "☁️" },
              { service: "Data Analytics", color: "from-purple-500 to-pink-500", size: "w-14 h-14", orbit: "w-80 h-80", duration: "animate-orbit-fast", icon: "📊" },
              { service: "Process BPO", color: "from-indigo-500 to-blue-500", size: "w-11 h-11", orbit: "w-96 h-96", duration: "animate-orbit-slower", icon: "⚙️" },
              { service: "Medical Billing", color: "from-green-500 to-emerald-500", size: "w-9 h-9", orbit: "w-56 h-56", duration: "animate-orbit-reverse", icon: "🏥" }
            ].map((planet, index) => (
              <div key={index} className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${planet.orbit} ${planet.duration}`}>
                {/* Orbit Path */}
                <div className="absolute inset-0 border border-white/20 rounded-full"></div>
                
                {/* Planet */}
                <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${planet.size} bg-gradient-to-r ${planet.color} rounded-full shadow-lg hover:scale-125 transition-transform duration-300 group cursor-pointer`}>
                  <div className="absolute inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-lg">
                    {planet.icon}
                  </div>
                  
                  {/* Service Label */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {planet.service}
                  </div>
                </div>
              </div>
            ))}

            {/* Shooting Stars */}
            <div className="absolute top-1/4 left-0 w-full h-1">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-shooting-star"></div>
            </div>
            <div className="absolute top-3/4 right-0 w-full h-1">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-shooting-star-reverse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* Service Details on Hover */}
          <div className="mt-16 text-center">
            <p className="text-purple-200 text-lg">
              ✨ Hover over the planets to explore our services ✨
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Transform Your Business
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Ready to unlock your organization's potential? Tell us about your vision and we'll make it reality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info Cards */}
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-2xl font-bold mb-8 text-emerald-300">Get In Touch</h3>
                
                <div className="space-y-6">
                  {[
                    { icon: <Phone className="w-6 h-6" />, title: "Call Us", info: "+1 (555) 123-4567", desc: "Mon-Fri 9AM-6PM EST" },
                    { icon: <Mail className="w-6 h-6" />, title: "Email Us", info: "hello@roboconsultz.com", desc: "We'll respond within 24 hours" },
                    { icon: <MapPin className="w-6 h-6" />, title: "Global Presence", info: "Worldwide Offices", desc: "Onshore, Offshore & Nearshore" }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl">
                      <div className="text-emerald-400 mt-1 group-hover:scale-110 transition-transform duration-300">
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{contact.title}</h4>
                        <p className="text-emerald-300 font-medium mb-1">{contact.info}</p>
                        <p className="text-sm opacity-70">{contact.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modern Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="group">
                    <label className="block text-sm font-medium text-emerald-300 mb-2 group-focus-within:text-emerald-400 transition-colors duration-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                      placeholder="John"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="group">
                    <label className="block text-sm font-medium text-emerald-300 mb-2 group-focus-within:text-emerald-400 transition-colors duration-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-sm font-medium text-emerald-300 mb-2 group-focus-within:text-emerald-400 transition-colors duration-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                    placeholder="john.doe@company.com"
                  />
                </div>

                {/* Company */}
                <div className="group">
                  <label className="block text-sm font-medium text-emerald-300 mb-2 group-focus-within:text-emerald-400 transition-colors duration-300">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                    placeholder="Your Company Name"
                  />
                </div>

                {/* Service Interest */}
                <div className="group">
                  <label className="block text-sm font-medium text-emerald-300 mb-2 group-focus-within:text-emerald-400 transition-colors duration-300">
                    Service of Interest
                  </label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 hover:bg-white/10">
                    <option value="" className="bg-gray-800">Select a service...</option>
                    <option value="process-consulting" className="bg-gray-800">Process Consulting & BPO</option>
                    <option value="cloud-solutions" className="bg-gray-800">Cloud Solutions</option>
                    <option value="data-analytics" className="bg-gray-800">Data Engineering & Analytics</option>
                    <option value="ai-rpa" className="bg-gray-800">AI & RPA</option>
                    <option value="medical-billing" className="bg-gray-800">Medical Billing</option>
                    <option value="custom-development" className="bg-gray-800">Application Development</option>
                  </select>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-sm font-medium text-emerald-300 mb-2 group-focus-within:text-emerald-400 transition-colors duration-300">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 hover:bg-white/10 resize-none"
                    placeholder="Tell us about your project, challenges, and goals..."
                  ></textarea>
                </div>

                {/* Budget Range */}
                <div className="group">
                  <label className="block text-sm font-medium text-emerald-300 mb-2 group-focus-within:text-emerald-400 transition-colors duration-300">
                    Budget Range
                  </label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 hover:bg-white/10">
                    <option value="" className="bg-gray-800">Select budget range...</option>
                    <option value="under-50k" className="bg-gray-800">Under $50,000</option>
                    <option value="50k-100k" className="bg-gray-800">$50,000 - $100,000</option>
                    <option value="100k-250k" className="bg-gray-800">$100,000 - $250,000</option>
                    <option value="250k-500k" className="bg-gray-800">$250,000 - $500,000</option>
                    <option value="500k-plus" className="bg-gray-800">$500,000+</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Start Your Transformation</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>

                {/* Privacy Notice */}
                <p className="text-xs opacity-70 text-center leading-relaxed">
                  By submitting this form, you agree to our privacy policy. We'll use your information to provide you with relevant content and services. You can unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl border border-white/20 backdrop-blur-sm hover:bg-gradient-to-r hover:from-emerald-500/30 hover:via-teal-500/30 hover:to-cyan-500/30 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg opacity-90 mb-6">
              Schedule a free consultation with our experts and discover how we can transform your business.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-teal-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-6 group cursor-pointer">
            <Bot className="w-8 h-8 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">RoboConsultz</span>
          </div>
          <p className="opacity-80 text-lg leading-relaxed">
            © 2025 RoboConsultz. Empowering businesses with process excellence and intelligent technology.
          </p>
          <div className="mt-6 flex justify-center space-x-8 text-sm opacity-70">
            <span className="hover:text-emerald-400 transition-colors duration-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-emerald-400 transition-colors duration-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-emerald-400 transition-colors duration-300 cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default RoboConsultzWebsite;