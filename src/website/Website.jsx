import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Smartphone, Globe, Cog, Bot, Wifi, Menu, X, ArrowRight, CheckCircle, Users, Award, Zap, Shield, Star, Quote } from 'lucide-react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function ITServicesWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-8 max-w-md mx-auto">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">Message Sent!</h3>
            <p className="text-gray-300">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Tools Development",
      description: "Custom software solutions tailored to your business needs, from enterprise applications to specialized tools.",
      features: ["Custom Software", "Enterprise Solutions", "API Development"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "Cross-platform", "UI/UX Design"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Forms & Applications",
      description: "Dynamic web applications and interactive forms that streamline your business processes.",
      features: ["Responsive Design", "Database Integration", "Security First"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Process Improvements",
      description: "RPA, AI, and automation solutions to optimize your workflows and increase efficiency.",
      features: ["RPA Implementation", "AI Integration", "Workflow Optimization"]
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Business Process Outsourcing",
      description: "Comprehensive BPO services to help you focus on core business while we handle operations.",
      features: ["Process Management", "Quality Assurance", "Cost Optimization"]
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "IoT Solutions",
      description: "Internet of Things implementations that connect your devices and provide valuable insights.",
      features: ["Device Integration", "Data Analytics", "Real-time Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              TechSolutions
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
              <a href="#process" className="hover:text-blue-400 transition-colors">Process</a>
              <a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 rounded-lg mt-2 py-4">
              <a href="#home" className="block px-4 py-2 hover:bg-gray-700">Home</a>
              <a href="#services" className="block px-4 py-2 hover:bg-gray-700">Services</a>
              <a href="#portfolio" className="block px-4 py-2 hover:bg-gray-700">Portfolio</a>
              <a href="#process" className="block px-4 py-2 hover:bg-gray-700">Process</a>
              <a href="#testimonials" className="block px-4 py-2 hover:bg-gray-700">Testimonials</a>
              <a href="#about" className="block px-4 py-2 hover:bg-gray-700">About</a>
              <a href="#contact" className="block px-4 py-2 hover:bg-gray-700">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-700/20"></div>
        <div className="absolute inset-0">
          {/* Animated background elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            IT Services & Consulting
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transforming businesses through innovative technology solutions, custom development, and intelligent automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-lg font-semibold transition-all hover:bg-blue-500/10">
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive IT solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="mb-6 text-blue-400 group-hover:text-purple-400 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our successful projects and the innovative solutions we've delivered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="h-48 bg-gradient-to-br from-blue-600/30 to-purple-700/30 flex items-center justify-center">
                <div className="text-center">
                  <Code className="w-16 h-16 text-blue-400 mx-auto mb-2" />
                  <span className="text-gray-300">E-Commerce Platform</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  Custom E-Commerce Solution
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Full-stack e-commerce platform with payment integration, inventory management, and analytics dashboard.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">MongoDB</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="h-48 bg-gradient-to-br from-green-600/30 to-blue-700/30 flex items-center justify-center">
                <div className="text-center">
                  <Smartphone className="w-16 h-16 text-green-400 mx-auto mb-2" />
                  <span className="text-gray-300">Healthcare Mobile App</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  Patient Management App
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Cross-platform mobile application for healthcare providers with appointment scheduling and patient records.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">React Native</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">Firebase</span>
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Redux</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="h-48 bg-gradient-to-br from-purple-600/30 to-pink-700/30 flex items-center justify-center">
                <div className="text-center">
                  <Bot className="w-16 h-16 text-purple-400 mx-auto mb-2" />
                  <span className="text-gray-300">AI Automation Suite</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  RPA & AI Integration
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Intelligent automation system that reduced manual processing time by 80% for a financial services client.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Python</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">TensorFlow</span>
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">UiPath</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="h-48 bg-gradient-to-br from-orange-600/30 to-red-700/30 flex items-center justify-center">
                <div className="text-center">
                  <Wifi className="w-16 h-16 text-orange-400 mx-auto mb-2" />
                  <span className="text-gray-300">Smart Manufacturing</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  IoT Manufacturing System
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Connected factory solution with real-time monitoring, predictive maintenance, and quality control.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">AWS IoT</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">Docker</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Kubernetes</span>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="h-48 bg-gradient-to-br from-teal-600/30 to-cyan-700/30 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-16 h-16 text-teal-400 mx-auto mb-2" />
                  <span className="text-gray-300">Enterprise Web Portal</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  Corporate Intranet Portal
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Comprehensive employee portal with HR management, document sharing, and communication tools.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Angular</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">.NET Core</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">SQL Server</span>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="h-48 bg-gradient-to-br from-indigo-600/30 to-blue-700/30 flex items-center justify-center">
                <div className="text-center">
                  <Cog className="w-16 h-16 text-indigo-400 mx-auto mb-2" />
                  <span className="text-gray-300">Process Automation</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  Supply Chain Optimization
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  End-to-end supply chain automation with inventory tracking, vendor management, and predictive analytics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Vue.js</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">Laravel</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-700/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">1. Discovery</h3>
              <p className="text-gray-400 text-sm">
                We start by understanding your business needs, challenges, and goals through detailed consultation.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-700/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Cog className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">2. Planning</h3>
              <p className="text-gray-400 text-sm">
                Comprehensive project planning with timeline, milestones, and resource allocation for optimal results.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-600/20 to-blue-700/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">3. Development</h3>
              <p className="text-gray-400 text-sm">
                Agile development approach with regular updates and feedback loops to ensure quality delivery.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-600/20 to-red-700/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-10 h-10 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">4. Deployment</h3>
              <p className="text-gray-400 text-sm">
                Seamless deployment with thorough testing, training, and ongoing support for smooth operation.
              </p>
            </div>
          </div>

          {/* Process Flow Visual */}
          <div className="mt-16 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 hidden lg:block"></div>
            <div className="flex justify-between items-center relative z-10">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="bg-gray-900 border-4 border-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-blue-400 font-bold">
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it - hear what our clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-gray-300 mb-6 italic">
                "TechSolutions transformed our entire business process with their RPA implementation. We've seen 70% reduction in manual tasks and significant cost savings."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JS
                </div>
                <div>
                  <h4 className="font-semibold">John Smith</h4>
                  <p className="text-gray-400 text-sm">CEO, Manufacturing Corp</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-gray-300 mb-6 italic">
                "The mobile app they developed for us has revolutionized how we interact with our customers. User engagement increased by 150% within the first month."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MJ
                </div>
                <div>
                  <h4 className="font-semibold">Maria Johnson</h4>
                  <p className="text-gray-400 text-sm">CTO, HealthTech Solutions</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-gray-300 mb-6 italic">
                "Their IoT solution provided us with real-time insights that were impossible before. The predictive maintenance feature alone saved us thousands."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  RD
                </div>
                <div>
                  <h4 className="font-semibold">Robert Davis</h4>
                  <p className="text-gray-400 text-sm">Operations Manager, Smart Factory Inc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We stay at the forefront of technology to deliver cutting-edge solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'React', color: 'from-blue-500 to-cyan-500' },
              { name: 'Node.js', color: 'from-green-500 to-emerald-500' },
              { name: 'Python', color: 'from-yellow-500 to-orange-500' },
              { name: 'AWS', color: 'from-orange-500 to-red-500' },
              { name: 'Docker', color: 'from-blue-500 to-indigo-500' },
              { name: 'MongoDB', color: 'from-green-500 to-teal-500' },
              { name: 'Angular', color: 'from-red-500 to-pink-500' },
              { name: 'Laravel', color: 'from-red-500 to-orange-500' },
              { name: 'Vue.js', color: 'from-green-500 to-cyan-500' },
              { name: 'Flutter', color: 'from-blue-500 to-purple-500' },
              { name: 'TensorFlow', color: 'from-orange-500 to-yellow-500' },
              { name: 'Kubernetes', color: 'from-blue-500 to-purple-500' }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${tech.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                </div>
                <p className="text-gray-300 font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're not just another IT company. We're your technology partners, committed to understanding your unique challenges and delivering solutions that drive real business value.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Expert Team</h4>
                    <p className="text-gray-400">Skilled professionals with years of industry experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Cutting-edge Technology</h4>
                    <p className="text-gray-400">Latest tools and frameworks for optimal results</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">24/7 Support</h4>
                    <p className="text-gray-400">Round-the-clock assistance for your peace of mind</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-700/20 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                    <div className="text-gray-400">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                    <div className="text-gray-400">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                    <div className="text-gray-400">Expert Developers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-pink-400 mb-2">5+</div>
                    <div className="text-gray-400">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT services can help you achieve your goals. Get in touch with our experts today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <p className="text-white font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-white font-semibold">contact@itservices.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Office</p>
                    <p className="text-white font-semibold">123 Business Ave, Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-2">Why Choose Us?</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• 24/7 Expert Support</li>
                <li>• Rapid Response Times</li>
                <li>• Proven Track Record</li>
                <li>• Customized Solutions</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8">
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="cloud-services">Cloud Services</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="it-support">IT Support</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="digital-transformation">Digital Transformation</option>
                  <option value="consulting">IT Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"
                  placeholder="Tell us about your project or requirements..."
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 px-8 py-4 rounded-lg font-semibold text-white transition-all transform hover:scale-[1.02] disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4 md:mb-0">
              TechSolutions
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 TechSolutions. All rights reserved.</p>
              <p className="text-sm mt-1">Transforming businesses through technology</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}