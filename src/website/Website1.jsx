import { useState, useEffect } from 'react';
import { ArrowRight, Play, Check, Users, Award, Shield, Menu, X, Star, Heart, Globe, Zap, ChevronRight, Mail, Phone, MapPin, Calendar, Briefcase, Target, TrendingUp } from 'lucide-react';

export default function ClassicWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: Award, title: 'Premium Quality', desc: 'Meticulously crafted with attention to every detail and exceptional standards.', color: 'emerald' },
    { icon: Shield, title: 'Reliable & Secure', desc: 'Built with enterprise-grade security and proven reliability you can trust.', color: 'blue' },
    { icon: Users, title: 'Expert Support', desc: 'Dedicated team of professionals ready to assist you every step of the way.', color: 'purple' }
  ];

  const services = [
    { 
      icon: Briefcase, 
      title: 'Strategic Consulting', 
      desc: 'Transform your business with expert strategic guidance and innovative solutions.',
      features: ['Market Analysis', 'Growth Strategy', 'Risk Assessment'],
      color: 'indigo'
    },
    { 
      icon: Target, 
      title: 'Digital Solutions', 
      desc: 'Modern digital experiences that engage your audience and drive results.',
      features: ['Web Development', 'Mobile Apps', 'Cloud Integration'],
      color: 'rose'
    },
    { 
      icon: TrendingUp, 
      title: 'Growth Marketing', 
      desc: 'Data-driven marketing strategies that accelerate your business growth.',
      features: ['SEO Optimization', 'Content Strategy', 'Analytics'],
      color: 'amber'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Happy Clients', color: 'emerald' },
    { number: '99.9%', label: 'Uptime', color: 'blue' },
    { number: '24/7', label: 'Support', color: 'purple' },
    { number: '5 Star', label: 'Rating', color: 'rose' }
  ];

  const testimonials = [
    { 
      name: 'Elizabeth Morgan', 
      role: 'CEO, Heritage Solutions',
      content: 'The quality and attention to detail exceeded our expectations. A truly professional experience from start to finish.',
      avatar: 'EM',
      rating: 5
    },
    { 
      name: 'James Richardson', 
      role: 'Director, Classic Enterprises',
      content: 'Exceptional service and outstanding results. The team understood our vision and delivered beyond what we imagined.',
      avatar: 'JR',
      rating: 5
    },
    { 
      name: 'Catherine Walsh', 
      role: 'Founder, Elegant Designs',
      content: 'A seamless experience with remarkable outcomes. Their expertise and professionalism are truly unmatched.',
      avatar: 'CW',
      rating: 5
    }
  ];

  const portfolio = [
    { title: 'Heritage Bank Redesign', category: 'Financial Services', image: 'bg-gradient-to-br from-emerald-400 to-emerald-600', color: 'emerald' },
    { title: 'Luxury Resort Platform', category: 'Hospitality', image: 'bg-gradient-to-br from-blue-400 to-blue-600', color: 'blue' },
    { title: 'Tech Startup Brand', category: 'Technology', image: 'bg-gradient-to-br from-purple-400 to-purple-600', color: 'purple' },
    { title: 'Fashion E-commerce', category: 'Retail', image: 'bg-gradient-to-br from-rose-400 to-rose-600', color: 'rose' },
    { title: 'Medical Practice Portal', category: 'Healthcare', image: 'bg-gradient-to-br from-indigo-400 to-indigo-600', color: 'indigo' },
    { title: 'Investment Firm Site', category: 'Finance', image: 'bg-gradient-to-br from-amber-400 to-amber-600', color: 'amber' }
  ];

  const teamMembers = [
    { name: 'Sarah Mitchell', role: 'Creative Director', avatar: 'SM', color: 'emerald' },
    { name: 'David Chen', role: 'Technical Lead', avatar: 'DC', color: 'blue' },
    { name: 'Emma Thompson', role: 'Strategy Consultant', avatar: 'ET', color: 'purple' },
    { name: 'Michael Rodriguez', role: 'Design Manager', avatar: 'MR', color: 'rose' }
  ];

  const blogPosts = [
    { 
      title: 'The Future of Digital Excellence', 
      excerpt: 'Exploring emerging trends and technologies shaping the digital landscape.',
      date: 'March 15, 2024',
      category: 'Technology',
      color: 'indigo'
    },
    { 
      title: 'Crafting Timeless Brand Experiences', 
      excerpt: 'How to create brand identities that stand the test of time.',
      date: 'March 10, 2024',
      category: 'Branding',
      color: 'rose'
    },
    { 
      title: 'Strategic Growth in Modern Markets', 
      excerpt: 'Proven strategies for sustainable business growth and market expansion.',
      date: 'March 5, 2024',
      category: 'Strategy',
      color: 'amber'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      emerald: 'text-emerald-600 bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
      blue: 'text-blue-600 bg-blue-50 border-blue-200 hover:bg-blue-100',
      purple: 'text-purple-600 bg-purple-50 border-purple-200 hover:bg-purple-100',
      rose: 'text-rose-600 bg-rose-50 border-rose-200 hover:bg-rose-100',
      indigo: 'text-indigo-600 bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
      amber: 'text-amber-600 bg-amber-50 border-amber-200 hover:bg-amber-100'
    };
    return colorMap[color] || 'text-slate-600 bg-slate-50 border-slate-200 hover:bg-slate-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50 border-b border-slate-200/60' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-serif font-bold text-slate-800 tracking-tight">
              <span className="text-emerald-600">Elegant</span>Solutions
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10">
              {[
                { name: 'Home', color: 'emerald' },
                { name: 'Services', color: 'blue' },
                { name: 'Portfolio', color: 'purple' },
                { name: 'About', color: 'rose' },
                { name: 'Contact', color: 'indigo' }
              ].map((item) => (
                <a 
                  key={item.name} 
                  href="#" 
                  className="text-slate-600 hover:text-slate-900 transition-all duration-300 relative font-medium tracking-wide group"
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-${item.color}-600 transition-all duration-300 ease-out group-hover:w-full`}></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-600 hover:text-slate-900 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="pt-6 pb-4 space-y-4">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="block text-slate-600 hover:text-slate-900 transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Enhanced background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, #10b981 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="mb-8 animate-slideInUp opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white text-sm font-medium rounded-full tracking-wide shadow-lg">
              ✨ Crafted with Excellence
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 text-slate-900 leading-tight animate-slideInUp opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Timeless
            <br />
            <span className="font-medium italic bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Elegance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slideInUp opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Where sophisticated design meets exceptional functionality. 
            We create experiences that stand the test of time with grace and refinement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slideInUp opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <button className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-lg font-medium transition-all duration-300 ease-out flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-emerald-800/20 transform hover:-translate-y-0.5">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group px-8 py-4 bg-transparent hover:bg-slate-50 text-slate-700 border-2 border-slate-300 hover:border-emerald-400 hover:text-emerald-600 rounded-lg font-medium transition-all duration-300 ease-out flex items-center gap-3 transform hover:-translate-y-0.5">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fadeIn opacity-0 group"
                style={{ 
                  animationDelay: `${1 + index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className={`text-3xl md:text-4xl font-serif font-bold mb-2 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-slate-300 font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-slate-900">
              Why Choose <span className="text-emerald-600">Excellence</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Our commitment to quality and attention to detail sets us apart in every aspect of what we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center group animate-slideInUp opacity-0"
                style={{ 
                  animationDelay: `${1.5 + index * 0.2}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className={`w-20 h-20 bg-${feature.color}-50 border border-${feature.color}-200 rounded-full flex items-center justify-center mb-8 mx-auto group-hover:bg-${feature.color}-600 group-hover:text-white transition-all duration-500 ease-out transform group-hover:scale-110 shadow-lg`}>
                  <feature.icon className={`w-10 h-10 text-${feature.color}-600 group-hover:text-white transition-colors duration-500`} />
                </div>
                <h3 className="text-2xl font-serif font-medium mb-6 text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light text-lg">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-slate-900">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive solutions tailored to meet your unique business needs and objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/60 border border-slate-200/60 hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-500 ease-out transform hover:-translate-y-2 animate-slideInUp opacity-0 group"
                style={{ 
                  animationDelay: `${2 + index * 0.2}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className={`w-16 h-16 bg-${service.color}-50 border border-${service.color}-200 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${service.color}-600 group-hover:border-${service.color}-600 transition-all duration-300`}>
                  <service.icon className={`w-8 h-8 text-${service.color}-600 group-hover:text-white transition-colors duration-300`} />
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4 text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light mb-6">
                  {service.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <Check className={`w-4 h-4 text-${service.color}-600`} />
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full px-6 py-3 border-2 border-${service.color}-200 text-${service.color}-600 hover:bg-${service.color}-600 hover:text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group`}>
                  Learn More
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-slate-900">
              Our <span className="text-purple-600">Portfolio</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Discover some of our most impactful projects and the results we've achieved for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div 
                key={project.title}
                className="group animate-slideInUp opacity-0"
                style={{ 
                  animationDelay: `${2.5 + index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/60 border border-slate-200/60 overflow-hidden hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-500 ease-out transform hover:-translate-y-2">
                  <div className={`h-48 ${project.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className={`inline-flex items-center px-3 py-1 bg-${project.color}-50 text-${project.color}-600 rounded-full text-sm font-medium mb-3`}>
                      {project.category}
                    </div>
                    <h3 className="text-xl font-serif font-medium mb-2 text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <button className={`text-${project.color}-600 hover:text-${project.color}-700 font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300`}>
                      View Project
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-slate-900">
              Meet Our <span className="text-rose-600">Team</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Talented professionals dedicated to delivering exceptional results and exceeding expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="text-center group animate-slideInUp opacity-0"
                style={{ 
                  animationDelay: `${3 + index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/60 border border-slate-200/60 hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-500 ease-out transform hover:-translate-y-2">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${member.color}-400 to-${member.color}-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-serif font-medium mb-2 text-slate-900">
                    {member.name}
                  </h3>
                  <p className={`text-${member.color}-600 font-medium mb-3`}>
                    {member.role}
                  </p>
                  <div className="flex justify-center space-x-3">
                    <div className={`w-8 h-8 bg-${member.color}-50 hover:bg-${member.color}-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer`}>
                      <Heart className="w-4 h-4" />
                    </div>
                    <div className={`w-8 h-8 bg-${member.color}-50 hover:bg-${member.color}-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer`}>
                      <Globe className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-slate-900">
              Latest <span className="text-indigo-600">Insights</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Stay updated with our latest thoughts, trends, and insights from the world of business and design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.title}
                className="bg-white rounded-2xl shadow-lg shadow-slate-200/60 border border-slate-200/60 overflow-hidden hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-500 ease-out transform hover:-translate-y-2 animate-slideInUp opacity-0 group"
                style={{ 
                  animationDelay: `${3.5 + index * 0.2}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className={`h-48 bg-gradient-to-br from-${post.color}-400 to-${post.color}-600 relative`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-white/90 text-${post.color}-600 rounded-full text-sm font-medium`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-serif font-medium mb-3 text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-light mb-4">
                    {post.excerpt}
                  </p>
                  <button className={`text-${post.color}-600 hover:text-${post.color}-700 font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300`}>
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-slate-900">
              Client <span className="text-amber-600">Testimonials</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Hear from those who have experienced the difference of working with true professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/60 border border-slate-200/60 hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-500 ease-out transform hover:-translate-y-1 animate-slideInUp opacity-0"
                style={{ 
                  animationDelay: `${4 + index * 0.2}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed font-light italic">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 text-white rounded-full flex items-center justify-center font-medium shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{testimonial.name}</p>
                    <p className="text-slate-600 text-sm font-light">{testimonial.role}</p>
                  </div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-white">
              Get In <span className="text-emerald-400">Touch</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Ready to start your project? Let's discuss how we can bring your vision to life with elegance and precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Email Us</h3>
                  <p className="text-slate-300">hello@elegantsolutions.com</p>
                  <p className="text-slate-300">support@elegantsolutions.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Call Us</h3>
                  <p className="text-slate-300">+1 (555) 123-4567</p>
                  <p className="text-slate-300">+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Visit Us</h3>
                  <p className="text-slate-300">123 Elegant Street</p>
                  <p className="text-slate-300">New York, NY 10001</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="block text-sm font-medium mb-2 text-slate-300">First Name</div>
                    <div className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300 text-white">
                      John
                    </div>
                  </div>
                  <div>
                    <div className="block text-sm font-medium mb-2 text-slate-300">Last Name</div>
                    <div className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300 text-white">
                      Doe
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="block text-sm font-medium mb-2 text-slate-300">Email</div>
                  <div className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300 text-white">
                    john@example.com
                  </div>
                </div>
                
                <div>
                  <div className="block text-sm font-medium mb-2 text-slate-300">Subject</div>
                  <div className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300 text-white">
                    Project Inquiry
                  </div>
                </div>
                
                <div>
                  <div className="block text-sm font-medium mb-2 text-slate-300">Message</div>
                  <div className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300 text-white h-24">
                    Tell us about your project...
                  </div>
                </div>
                
                <button className="w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-lg font-medium transition-all duration-300 ease-out flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:shadow-emerald-800/20 transform hover:-translate-y-0.5">
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-serif font-bold mb-4">
                <span className="text-emerald-400">Elegant</span>Solutions
              </div>
              <p className="text-slate-300 leading-relaxed font-light mb-6 max-w-md">
                Crafting timeless digital experiences with sophistication and excellence. 
                Where innovation meets elegance.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Heart, color: 'emerald' },
                  { icon: Globe, color: 'blue' },
                  { icon: Zap, color: 'purple' },
                  { icon: Star, color: 'rose' }
                ].map((social, index) => (
                  <div 
                    key={index}
                    className={`w-10 h-10 bg-${social.color}-600 hover:bg-${social.color}-500 rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer`}
                  >
                    <social.icon className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                {['Strategy', 'Design', 'Development', 'Marketing', 'Consulting'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-light">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                {['About', 'Team', 'Careers', 'Contact', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-light">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 font-light">
              © 2024 ElegantSolutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 font-light">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}