import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Check, Users, Award, Shield, Menu, X, Star, Heart, Globe, Zap, ChevronRight, Mail, Phone, MapPin, Calendar, Briefcase, Target, TrendingUp, Camera, Code, Palette, Rocket, Coffee, Clock, ArrowLeft, ChevronLeft, MousePointer, Sparkles, Eye, Diamond, PlayCircle, Pause, Volume2, Maximize, BarChart, PieChart, Activity, Layers, Network, Brain, ChevronDown } from 'lucide-react';

export default function ProfessionalModernWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [skillsInView, setSkillsInView] = useState(false);
  
  const servicesScrollRef = useRef(null);
  const portfolioScrollRef = useRef(null);
  const expertiseScrollRef = useRef(null);
  const videoSectionRef = useRef(null);
  const analyticsRef = useRef(null);
  const mindMapRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if analytics section is in view for animations
      if (analyticsRef.current) {
        const rect = analyticsRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setSkillsInView(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Horizontal scroll functions
  const scrollHorizontal = (ref, direction) => {
    const scrollAmount = 320;
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Video data
  const videos = [
    {
      id: 1,
      title: "Brand Transformation Journey",
      description: "Watch how we revolutionized a startup's complete brand identity",
      thumbnail: "bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800",
      duration: "3:24",
      category: "Branding"
    },
    {
      id: 2,
      title: "E-commerce Success Story",
      description: "A luxury fashion brand's digital transformation",
      thumbnail: "bg-gradient-to-br from-rose-500 via-pink-600 to-purple-700",
      duration: "4:17",
      category: "E-commerce"
    },
    {
      id: 3,
      title: "Tech Startup Platform",
      description: "Building a SaaS platform from concept to launch",
      thumbnail: "bg-gradient-to-br from-blue-500 via-cyan-600 to-teal-700",
      duration: "5:32",
      category: "SaaS"
    },
    {
      id: 4,
      title: "Mobile App Innovation",
      description: "Creating intuitive mobile experiences that users love",
      thumbnail: "bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700",
      duration: "2:58",
      category: "Mobile"
    }
  ];

  // Analytics data
  const analyticsData = [
    { name: 'Brand Strategy', value: 95, color: 'violet' },
    { name: 'Web Development', value: 92, color: 'blue' },
    { name: 'UI/UX Design', value: 96, color: 'emerald' },
    { name: 'Digital Marketing', value: 88, color: 'rose' },
    { name: 'Content Creation', value: 90, color: 'amber' },
    { name: 'Consulting', value: 85, color: 'cyan' }
  ];

  const pieChartData = [
    { name: 'Web Development', value: 35, color: 'from-blue-500 to-blue-700' },
    { name: 'Design', value: 30, color: 'from-purple-500 to-purple-700' },
    { name: 'Strategy', value: 20, color: 'from-emerald-500 to-emerald-700' },
    { name: 'Marketing', value: 15, color: 'from-rose-500 to-rose-700' }
  ];

  const mindMapNodes = [
    { id: 'center', x: 50, y: 50, title: 'Digital Excellence', color: 'violet', size: 'large' },
    { id: 'strategy', x: 20, y: 20, title: 'Strategy', color: 'blue', size: 'medium' },
    { id: 'design', x: 80, y: 25, title: 'Design', color: 'purple', size: 'medium' },
    { id: 'develop', x: 75, y: 75, title: 'Development', color: 'emerald', size: 'medium' },
    { id: 'marketing', x: 25, y: 80, title: 'Marketing', color: 'rose', size: 'medium' },
    { id: 'analytics', x: 10, y: 50, title: 'Analytics', color: 'amber', size: 'small' },
    { id: 'innovation', x: 90, y: 50, title: 'Innovation', color: 'cyan', size: 'small' }
  ];

  const features = [
    { icon: Diamond, title: 'Premium Craftsmanship', desc: 'Every pixel perfected with meticulous attention to detail and artistic precision.', color: 'violet', gradient: 'from-violet-500 to-purple-600' },
    { icon: Rocket, title: 'Lightning Performance', desc: 'Blazing fast experiences that captivate and engage from the first interaction.', color: 'cyan', gradient: 'from-cyan-500 to-blue-600' },
    { icon: Sparkles, title: 'Innovation First', desc: 'Cutting-edge solutions that push boundaries and redefine possibilities.', color: 'pink', gradient: 'from-pink-500 to-rose-600' },
    { icon: Eye, title: 'Vision Realized', desc: 'Transforming bold ideas into stunning digital experiences that inspire.', color: 'emerald', gradient: 'from-emerald-500 to-teal-600' }
  ];

  const services = [
    { 
      icon: Palette, 
      title: 'Brand Identity Design', 
      desc: 'Crafting unique visual identities that tell your story with elegance and impact.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
      color: 'rose',
      gradient: 'from-rose-500 to-pink-600',
      bgPattern: 'bg-gradient-to-br from-rose-50 to-pink-50'
    },
    { 
      icon: Code, 
      title: 'Web Development', 
      desc: 'Building responsive, high-performance websites with modern technologies.',
      features: ['React Development', 'E-commerce', 'CMS Integration'],
      color: 'blue',
      gradient: 'from-blue-500 to-indigo-600',
      bgPattern: 'bg-gradient-to-br from-blue-50 to-indigo-50'
    },
    { 
      icon: Camera, 
      title: 'Creative Direction', 
      desc: 'Guiding visual narratives that captivate audiences and drive engagement.',
      features: ['Art Direction', 'Photography', 'Content Strategy'],
      color: 'purple',
      gradient: 'from-purple-500 to-violet-600',
      bgPattern: 'bg-gradient-to-br from-purple-50 to-violet-50'
    },
    { 
      icon: Rocket, 
      title: 'Digital Marketing', 
      desc: 'Strategic campaigns that amplify your reach and accelerate growth.',
      features: ['SEO Strategy', 'Social Media', 'Analytics'],
      color: 'emerald',
      gradient: 'from-emerald-500 to-green-600',
      bgPattern: 'bg-gradient-to-br from-emerald-50 to-green-50'
    },
    { 
      icon: Target, 
      title: 'UX/UI Design', 
      desc: 'Designing intuitive interfaces that delight users and drive conversions.',
      features: ['User Research', 'Wireframing', 'Prototyping'],
      color: 'amber',
      gradient: 'from-amber-500 to-orange-600',
      bgPattern: 'bg-gradient-to-br from-amber-50 to-orange-50'
    },
    { 
      icon: Coffee, 
      title: 'Consultation', 
      desc: 'Strategic guidance to transform your vision into actionable success.',
      features: ['Strategy Planning', 'Market Analysis', 'Growth Roadmap'],
      color: 'cyan',
      gradient: 'from-cyan-500 to-teal-600',
      bgPattern: 'bg-gradient-to-br from-cyan-50 to-teal-50'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', color: 'emerald', icon: Award },
    { number: '98%', label: 'Client Satisfaction', color: 'blue', icon: Heart },
    { number: '50+', label: 'Team Members', color: 'purple', icon: Users },
    { number: '24/7', label: 'Support Available', color: 'rose', icon: Clock }
  ];

  const portfolio = [
    { title: 'Luxury Fashion Brand', category: 'E-commerce', image: 'bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600', color: 'rose', year: '2024' },
    { title: 'Tech Startup Platform', category: 'SaaS', image: 'bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-600', color: 'blue', year: '2024' },
    { title: 'Creative Agency Site', category: 'Portfolio', image: 'bg-gradient-to-br from-purple-400 via-violet-500 to-indigo-600', color: 'purple', year: '2023' },
    { title: 'Restaurant Chain App', category: 'Mobile', image: 'bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600', color: 'emerald', year: '2024' },
    { title: 'Financial Dashboard', category: 'FinTech', image: 'bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-600', color: 'amber', year: '2023' },
    { title: 'Healthcare Portal', category: 'Healthcare', image: 'bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600', color: 'cyan', year: '2024' }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Navigation - Professional */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-slate-100' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">NEXUS</span>
              <span className="text-violet-600">STUDIO</span>
            </div>
            
            {/* Professional Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Videos', href: '#videos' },
                { name: 'Analytics', href: '#analytics' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-slate-700 hover:text-slate-900 transition-all duration-300 relative font-semibold group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button className="ml-8 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden text-slate-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Professional & Clean */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="mb-6">
            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 text-sm font-bold rounded-full border border-violet-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Professional Digital Solutions
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-slate-900">Elevate Your</span>
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Digital Presence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            We deliver enterprise-grade digital solutions that drive measurable results 
            and accelerate business growth through strategic innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 hover:border-violet-300 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section id="videos" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-violet-900/20 to-slate-900"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              Our Work in <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Motion</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Experience our process and see the transformations we've created for businesses worldwide.
            </p>
          </div>

          {/* Featured Video */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className={`aspect-video ${videos[currentVideo].thumbnail} flex items-center justify-center relative group cursor-pointer`}
                   onClick={() => setIsVideoPlaying(!isVideoPlaying)}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                
                {!isVideoPlaying ? (
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-12 h-12 text-white ml-1" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{videos[currentVideo].title}</h3>
                    <p className="text-slate-200">{videos[currentVideo].description}</p>
                  </div>
                ) : (
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto">
                      <Pause className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-white">Video Playing...</p>
                  </div>
                )}

                {/* Video Controls */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-4">
                    <button className="text-white hover:text-violet-300 transition-colors">
                      <Volume2 className="w-6 h-6" />
                    </button>
                    <span className="text-white font-medium">{videos[currentVideo].duration}</span>
                  </div>
                  <button className="text-white hover:text-violet-300 transition-colors">
                    <Maximize className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Video Info */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-slate-800 rounded-full text-sm font-bold">
                  {videos[currentVideo].category}
                </span>
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <div 
                key={video.id}
                className={`group cursor-pointer transition-all duration-300 ${
                  currentVideo === index ? 'scale-105' : 'hover:scale-105'
                }`}
                onClick={() => setCurrentVideo(index)}
              >
                <div className={`aspect-video ${video.thumbnail} rounded-xl overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-white font-bold text-sm mb-1">{video.title}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 text-xs">{video.category}</span>
                      <span className="text-white/80 text-xs">{video.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics & Data Visualization Section */}
      <section id="analytics" ref={analyticsRef} className="py-24 px-6 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Data-Driven <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our performance metrics and capabilities demonstrate our commitment to delivering exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Bar Chart */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <BarChart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Service Proficiency</h3>
                    <p className="text-slate-600">Our expertise across core competencies</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {analyticsData.map((item, index) => (
                    <div key={item.name} className="relative">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-slate-700">{item.name}</span>
                        <span className={`font-bold text-${item.color}-600`}>{item.value}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 h-4 rounded-full transition-all duration-1000 ease-out shadow-sm`}
                          style={{ 
                            width: skillsInView ? `${item.value}%` : '0%',
                            transitionDelay: `${index * 200}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pie Chart */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                    <PieChart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Service Mix</h3>
                    <p className="text-slate-600 text-sm">Project distribution</p>
                  </div>
                </div>
                
                {/* Pie Chart Visual */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {pieChartData.reduce((acc, item, index) => {
                      const angle = (item.value / 100) * 360;
                      const startAngle = acc.currentAngle;
                      const endAngle = startAngle + angle;
                      const largeArc = angle > 180 ? 1 : 0;
                      
                      const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                      const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                      const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
                      const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);
                      
                      const pathData = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`;
                      
                      acc.paths.push(
                        <path
                          key={index}
                          d={pathData}
                          className={`fill-current text-${item.name.toLowerCase().includes('web') ? 'blue' : 
                                     item.name.toLowerCase().includes('design') ? 'purple' :
                                     item.name.toLowerCase().includes('strategy') ? 'emerald' : 'rose'}-500 
                                     hover:brightness-110 transition-all duration-300 cursor-pointer`}
                          style={{
                            animationDelay: `${index * 200}ms`,
                            opacity: skillsInView ? 1 : 0,
                            transform: skillsInView ? 'scale(1)' : 'scale(0)',
                            transition: 'all 0.6s ease-out'
                          }}
                        />
                      );
                      
                      acc.currentAngle = endAngle;
                      return acc;
                    }, { paths: [], currentAngle: 0 }).paths}
                  </svg>
                </div>
                
                {/* Legend */}
                <div className="space-y-3">
                  {pieChartData.map((item, index) => (
                    <div key={item.name} className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full bg-${
                        item.name.toLowerCase().includes('web') ? 'blue' : 
                        item.name.toLowerCase().includes('design') ? 'purple' :
                        item.name.toLowerCase().includes('strategy') ? 'emerald' : 'rose'
                      }-500`}></div>
                      <span className="text-sm font-medium text-slate-700 flex-1">{item.name}</span>
                      <span className="text-sm font-bold text-slate-900">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mind Map */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Our Ecosystem</h3>
                <p className="text-slate-600">Interconnected services that drive success</p>
              </div>
            </div>
            
            <div ref={mindMapRef} className="relative h-96 bg-gradient-to-br from-slate-50 to-white rounded-xl overflow-hidden">
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                {mindMapNodes.filter(node => node.id !== 'center').map((node, index) => (
                  <line
                    key={node.id}
                    x1="50%"
                    y1="50%"
                    x2={`${node.x}%`}
                    y2={`${node.y}%`}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${index * 300}ms`,
                      opacity: skillsInView ? 1 : 0,
                      transition: 'opacity 0.8s ease-out'
                    }}
                  />
                ))}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Mind Map Nodes */}
              {mindMapNodes.map((node, index) => (
                <div
                  key={node.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                    node.size === 'large' ? 'w-24 h-24' : 
                    node.size === 'medium' ? 'w-16 h-16' : 'w-12 h-12'
                  } bg-gradient-to-br from-${node.color}-500 to-${node.color}-600 rounded-full 
                  flex items-center justify-center text-white font-bold shadow-xl cursor-pointer
                  hover:scale-110 transition-all duration-300 group`}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    zIndex: 10,
                    opacity: skillsInView ? 1 : 0,
                    transform: `translate(-50%, -50%) scale(${skillsInView ? 1 : 0})`,
                    transition: `all 0.6s ease-out ${index * 150}ms`
                  }}
                >
                  <span className={`${node.size === 'large' ? 'text-sm' : 'text-xs'} text-center px-1`}>
                    {node.title}
                  </span>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {node.title} Services
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced with Animation */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 to-purple-900/20"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group"
              >
                <div className="mb-6 flex justify-center">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className={`text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-slate-300 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Professional */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Why Choose <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">NEXUS</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence drives everything we do, delivering solutions that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group relative"
              >
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Horizontal Scrolling Enhanced */}
      <section id="services" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive digital solutions designed to propel your business forward.
            </p>
            <div className="flex items-center justify-center gap-4 text-slate-500">
              <MousePointer className="w-5 h-5" />
              <span className="text-sm font-medium">Scroll horizontally to explore</span>
            </div>
          </div>
          
          {/* Horizontal scroll controls */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-4">
              <button 
                onClick={() => scrollHorizontal(servicesScrollRef, 'left')}
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-slate-100"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button 
                onClick={() => scrollHorizontal(servicesScrollRef, 'right')}
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-slate-100"
              >
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>
          
          <div 
            ref={servicesScrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-8"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="flex-shrink-0 w-80 group"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className={`${service.bgPattern} p-8 rounded-2xl shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 h-full relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <div className={`w-5 h-5 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-medium text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105`}>
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Enhanced */}
      <section id="portfolio" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Showcasing successful projects that have transformed businesses and exceeded expectations.
            </p>
            <div className="flex items-center justify-center gap-4 text-slate-500">
              <MousePointer className="w-5 h-5" />
              <span className="text-sm font-medium">Explore our case studies</span>
            </div>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="flex gap-4">
              <button 
                onClick={() => scrollHorizontal(portfolioScrollRef, 'left')}
                className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollHorizontal(portfolioScrollRef, 'right')}
                className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div 
            ref={portfolioScrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-8"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {portfolio.map((project, index) => (
              <div 
                key={project.title}
                className="flex-shrink-0 w-96 group"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
                  <div className={`h-64 ${project.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 rounded-full text-sm font-semibold">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <button className="px-4 py-2 bg-white/90 backdrop-blur-sm text-slate-800 rounded-xl font-semibold hover:bg-white transition-colors duration-300 flex items-center gap-2">
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r from-${project.color}-500 to-${project.color}-600 text-white rounded-full text-sm font-semibold mb-3`}>
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">
                      {project.title}
                    </h3>
                    <button className={`text-${project.color}-600 hover:text-${project.color}-700 font-semibold flex items-center gap-2 transition-all duration-300`}>
                      Explore Project
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Professional */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Let's Build <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Let's discuss your project and create something extraordinary.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-slate-300 mb-1">hello@nexusstudio.com</p>
                  <p className="text-slate-300">projects@nexusstudio.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-slate-300 mb-1">+1 (555) 123-NEXUS</p>
                  <p className="text-slate-300">+1 (555) 456-STUDIO</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-slate-300 mb-1">123 Innovation Street</p>
                  <p className="text-slate-300">San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Start Your Project</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-violet-400 text-white placeholder-slate-300"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-violet-400 text-white placeholder-slate-300"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-violet-400 text-white placeholder-slate-300"
                />
                
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-violet-400 text-white placeholder-slate-300 resize-none"
                ></textarea>
                
                <button className="w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Clean & Professional */}
      <footer className="py-16 px-6 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-black mb-4">
                <span className="text-white">NEXUS</span>
                <span className="text-violet-400">STUDIO</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                Professional digital solutions that drive business growth and create lasting impact.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Globe, color: 'from-blue-500 to-cyan-600' },
                  { icon: Heart, color: 'from-rose-500 to-pink-600' },
                  { icon: Star, color: 'from-amber-500 to-orange-600' }
                ].map((social, index) => (
                  <div 
                    key={index}
                    className={`w-10 h-10 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110`}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                {['Web Development', 'Brand Design', 'Digital Marketing', 'Consulting'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-300 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                {['About', 'Portfolio', 'Contact', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-300 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">
              © 2024 NEXUS STUDIO. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );}