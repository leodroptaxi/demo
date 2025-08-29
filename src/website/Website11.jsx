import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Globe, Palette, Megaphone, BarChart3, Shield, Heart, CheckCircle, Star, Users, Trophy, Zap, Play, Pause, Target, Award, Clock, TrendingUp, Rocket, Eye, Lightbulb, MousePointer } from 'lucide-react';

const MarketingAgencyWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      document.documentElement.style.scrollBehavior = 'smooth';
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Process Consulting & BPO",
      description: "Streamline operations with governance frameworks and 24x7 support",
      features: ["Process Optimization", "SOP Management", "Global Delivery"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Modern cloud infrastructure and serverless applications",
      features: ["Cloud Migration", "DevOps Pipelines", "Infrastructure Management"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI & Automation",
      description: "Intelligent automation with AI and machine learning",
      features: ["RPA Solutions", "AI Analytics", "Process Automation"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "IT Consulting",
      description: "Strategic technology roadmaps and governance",
      features: ["IT Strategy", "Technology Assessment", "Digital Transformation"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare Solutions",
      description: "Specialized healthcare and medical billing services",
      features: ["Medical Billing", "Healthcare IT", "Compliance Management"]
    },
    {
      icon: <MousePointer className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Advanced analytics and data architecture solutions",
      features: ["Data Pipelines", "Business Intelligence", "Analytics Platforms"]
    }
  ];

  const industries = [
    { name: "Financial Services", icon: "💰" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Technology", icon: "💻" },
    { name: "Manufacturing", icon: "⚙️" },
    { name: "Retail", icon: "🛒" },
    { name: "Energy & Utilities", icon: "⚡" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        .typography-hero {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
          line-height: 0.85;
          letter-spacing: -0.03em;
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease forwards;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        
        .text-stroke {
          -webkit-text-stroke: 2px black;
          -webkit-text-fill-color: transparent;
        }
        
        .dots-pattern {
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.2;
        }
        
        .floating-tag {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .float-omnidirectional-1 {
          animation: floatOmni1 6s ease-in-out infinite;
        }
        
        .float-omnidirectional-2 {
          animation: floatOmni2 8s ease-in-out infinite;
        }
        
        .float-omnidirectional-3 {
          animation: floatOmni3 7s ease-in-out infinite;
        }
        
        @keyframes floatOmni1 {
          0% { transform: translate(0px, 0px); }
          25% { transform: translate(-8px, -12px); }
          50% { transform: translate(10px, -8px); }
          75% { transform: translate(-5px, 10px); }
          100% { transform: translate(0px, 0px); }
        }
        
        @keyframes floatOmni2 {
          0% { transform: translate(0px, 0px); }
          20% { transform: translate(12px, -6px); }
          40% { transform: translate(-8px, -15px); }
          60% { transform: translate(15px, 8px); }
          80% { transform: translate(-10px, 12px); }
          100% { transform: translate(0px, 0px); }
        }
        
        @keyframes floatOmni3 {
          0% { transform: translate(0px, 0px); }
          30% { transform: translate(-15px, 10px); }
          60% { transform: translate(8px, -12px); }
          90% { transform: translate(12px, 15px); }
          100% { transform: translate(0px, 0px); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-800">
              RoboConsultz
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Work', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-red-500 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">
                Get Quote
              </button>
            </div>

            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-6 py-4 space-y-4">
              {['Home', 'About', 'Services', 'Work', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-600 hover:text-red-500 transition-colors duration-300 py-2"
                >
                  {item}
                </button>
              ))}
              <button className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 dots-pattern"></div>
        
        {/* Floating Service Tags */}
        <div className="absolute top-40 left-8 md:left-32">
          <div className="floating-tag float-omnidirectional-1 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
              IT Solutions
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/3 right-8 md:right-32">
          <div className="floating-tag float-omnidirectional-2 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
              Cloud Services
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/2 right-8 md:right-20">
          <div className="floating-tag float-omnidirectional-3 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
              Consulting
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main Typography - Matching the image exactly */}
            <div className="fade-in mt-12 mb-12">
              <div className="typography-hero text-6xl md:text-8xl lg:text-[8rem] leading-none mb-4">
                <div className="text-black mb-4">ROBOCONSULTZ</div>
                <div className="text-red-500 mb-4">IT CONSULTING &</div>
                <div className="text-black">SERVICES</div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="fade-in stagger-2">
              <button className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                GET A QUOTE
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Why Choose RoboConsultz
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              With over 50 years of combined expertise, we deliver measurable results 
              through innovative IT solutions and proven methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: Users, 
                title: "Expert Team", 
                desc: "Seasoned professionals with deep industry knowledge and technical expertise across multiple domains.",
                color: "text-blue-600" 
              },
              { 
                icon: Globe, 
                title: "Global Delivery", 
                desc: "Follow-the-sun delivery model with onshore, offshore, and nearshore capabilities for maximum efficiency.",
                color: "text-red-500" 
              },
              { 
                icon: Trophy, 
                title: "Proven Results", 
                desc: "Track record of successful implementations with measurable ROI and client satisfaction.",
                color: "text-green-600" 
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl card-hover">
                <item.icon className={`w-12 h-12 mx-auto mb-4 ${item.color}`} />
                <h3 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm card-hover border border-gray-100">
                <div className="text-red-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Recent Work
            </h2>
            <p className="text-xl text-gray-600">
              Explore our latest creative projects and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                client: "TechStart Inc",
                project: "Complete Brand Redesign",
                result: "300% Increase in Brand Recognition",
                description: "Complete brand overhaul including logo design, website development, and marketing materials.",
                category: "Branding"
              },
              {
                client: "RetailMax",
                project: "Digital Marketing Campaign", 
                result: "150% ROI in 6 Months",
                description: "Multi-channel digital marketing strategy with social media, PPC, and content marketing.",
                category: "Digital Marketing"
              },
              {
                client: "HealthPlus Clinic",
                project: "Website & SEO Optimization",
                result: "200% Increase in Online Bookings",
                description: "Modern website design with SEO optimization and conversion rate improvements.",
                category: "Web Development"
              },
              {
                client: "FoodieApp",
                project: "Social Media Strategy",
                result: "500K+ New Followers",
                description: "Creative social media campaigns with influencer partnerships and viral content.",
                category: "Social Media"
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl card-hover border border-gray-100">
                <div className="mb-4">
                  <span className="text-sm text-red-500 font-semibold">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.client}</h3>
                <h4 className="text-lg font-semibold mb-3 text-gray-700">{project.project}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex items-center text-sm text-green-600 font-semibold">
                  <Trophy className="w-4 h-4 mr-2" />
                  {project.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Expertise across diverse industry verticals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl card-hover border border-gray-100">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from businesses we've helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "CEO, TechStart Inc",
                image: "https://images.unsplash.com/photo-1494790108755-2616b72462b0?w=150&h=150&fit=crop&crop=face",
                quote: "RoboConsultz transformed our entire IT infrastructure. Their cloud migration saved us 40% in operational costs.",
                rating: 5
              },
              {
                name: "Michael Chen",
                title: "CTO, DataFlow Solutions",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                quote: "The AI automation solutions they implemented increased our efficiency by 200%. Exceptional service!",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                title: "Operations Director, HealthPlus",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                quote: "Their healthcare IT solutions streamlined our processes and improved patient satisfaction significantly.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm card-hover border border-gray-100">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge technologies we use to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
              { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
              { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
              { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
              { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
              { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
              { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
              { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
              { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
              { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
              { name: "Ansible", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" }
            ].map((tech, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl card-hover border border-gray-100">
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="w-12 h-12 mx-auto mb-3"
                />
                <h3 className="text-sm font-semibold text-gray-800">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>



       {/* Contact Section */}
       <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Ready to Grow Your Brand?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Let's create something amazing together. Get in touch for a free consultation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Clock, title: "Quick Response", desc: "24-hour response guarantee" },
                { icon: Users, title: "Expert Team", desc: "Creative professionals" },
                { icon: Rocket, title: "Fast Delivery", desc: "Quick project turnaround" }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-red-500" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Get A Quote
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 hover:border-red-500 text-gray-700 hover:text-red-500 rounded-full font-semibold transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>
      
      

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">
                CreativeStudio
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                A creative marketing agency dedicated to helping brands tell their story and connect with their audience.
              </p>
              <div className="flex space-x-4">
                {[Globe, Palette, Megaphone, BarChart3].map((Icon, index) => (
                  <Icon key={index} className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors duration-300" />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors duration-300">Brand Design</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300">Digital Marketing</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300">Web Development</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300">SEO & Analytics</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors duration-300">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300">Our Work</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors duration-300">Contact</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CreativeStudio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarketingAgencyWebsite;