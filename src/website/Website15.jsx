import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Globe, Zap, Shield, BarChart3, Heart, CheckCircle } from 'lucide-react';

const Website = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      
      // Determine active section based on scroll position
      const sectionHeight = window.innerHeight;
      const currentSection = Math.floor(newScrollY / sectionHeight);
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      id: 'hero',
      bgImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop',
      title: 'Think Different',
      subtitle: 'About Business',
      description: 'Where intelligence meets excellence'
    },
    {
      id: 'ai',
      bgImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop',
      title: 'AI',
      subtitle: 'Revolution',
      description: 'Intelligent workflows that never sleep',
      stat: '95%',
      statLabel: 'Automation Rate'
    },
    {
      id: 'cloud',
      bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop',
      title: 'Cloud',
      subtitle: 'Native',
      description: 'Scalable. Secure. Seamless.',
      stat: '99.9%',
      statLabel: 'Uptime'
    },
    {
      id: 'data',
      bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop',
      title: 'Data',
      subtitle: 'Insights',
      description: 'Real-time intelligence for instant decisions',
      stat: '80%',
      statLabel: 'Faster Decisions'
    },
    {
      id: 'global',
      bgImage: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&h=1080&fit=crop',
      title: 'Global',
      subtitle: 'Reach',
      description: '24x7 support across all time zones',
      stat: '24x7',
      statLabel: 'Always On'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=800&fit=crop',
      result: '92%',
      metric: 'Billing Accuracy',
      icon: <Heart className="w-12 h-12" />
    },
    {
      name: 'Financial',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=800&fit=crop',
      result: '85%',
      metric: 'Process Efficiency',
      icon: <Shield className="w-12 h-12" />
    },
    {
      name: 'Retail',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop',
      result: '80%',
      metric: 'Reporting Speed',
      icon: <BarChart3 className="w-12 h-12" />
    },
    {
      name: 'Energy',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=800&fit=crop',
      result: '75%',
      metric: 'Safety Compliance',
      icon: <Zap className="w-12 h-12" />
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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
      </nav>

      {/* Hero Full-Screen Sections */}
      {sections.map((section, sectionIndex) => (
        <section 
          key={section.id} 
          className="h-screen relative overflow-hidden flex items-center justify-center"
        >
          {/* Background Image with Parallax */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
            }}
          >
            <img 
              src={section.bgImage}
              alt={section.title}
              className="w-full h-full object-cover"
              style={{ 
                filter: sectionIndex === 0 ? 'brightness(0.4)' : 'brightness(0.3) contrast(1.2)'
              }}
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-20"></div>
          
          {/* Content */}
          <div className="relative z-30 text-center max-w-6xl mx-auto px-6">
            <div 
              className={`transform transition-all duration-1000 ${
                activeSection === sectionIndex || (sectionIndex === 0 && activeSection === 0)
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-16 scale-95'
              }`}
            >
              {sectionIndex === 0 ? (
                // Hero content
                <>
                  <h1 className="text-7xl md:text-9xl font-bold mb-6 leading-none">
                    <div className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      {section.title}
                    </div>
                    <div className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {section.subtitle}
                    </div>
                  </h1>
                  <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-light">
                    {section.description}
                  </p>
                  <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <button className="bg-white text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                      Start Your Journey
                    </button>
                    <button className="border border-white/30 px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                      <Play className="w-5 h-5" />
                      Watch Demo
                    </button>
                  </div>
                </>
              ) : (
                // Other sections content
                <>
                  <div className="text-8xl md:text-9xl font-bold mb-6 leading-none">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {section.title}
                    </div>
                    <div className="text-white text-5xl md:text-6xl font-light">
                      {section.subtitle}
                    </div>
                  </div>
                  
                  <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
                    {section.description}
                  </p>
                  
                  {section.stat && (
                    <div className="inline-block px-8 py-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                      <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                        {section.stat}
                      </div>
                      <div className="text-gray-300">{section.statLabel}</div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Scroll indicator for hero */}
          {sectionIndex === 0 && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          )}
        </section>
      ))}

      {/* Solutions Visual Grid */}
      <section id="solutions" className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
              Solutions
            </h2>
            <p className="text-xl text-gray-400">Innovation in action</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Automation",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=600&fit=crop",
                icon: "🤖"
              },
              {
                title: "Cloud Migration", 
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=600&fit=crop",
                icon: "☁️"
              },
              {
                title: "Data Analytics",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=600&fit=crop",
                icon: "📊"
              },
              {
                title: "Process Excellence",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=600&fit=crop",
                icon: "⚡"
              },
              {
                title: "Healthcare RCM",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=600&fit=crop",
                icon: "🏥"
              },
              {
                title: "Security First",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=600&fit=crop",
                icon: "🔐"
              }
            ].map((solution, index) => (
              <div
                key={index}
                className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <img 
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/70"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                    {solution.title}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Results */}
      <section id="industries" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-8">
              Results
            </h2>
            <p className="text-xl text-gray-400">Measurable impact across industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105"
              >
                <img 
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                <div className="absolute top-8 left-8 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    {industry.result}
                  </div>
                  <div className="text-gray-300 text-sm mb-2">{industry.metric}</div>
                  <div className="text-white font-semibold">{industry.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-8">
              Success
            </h2>
            <p className="text-xl text-gray-400">Transformations that inspire</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Retail Case Study */}
            <div className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
                alt="Retail Transformation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  80%
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Faster Reporting</h3>
                <p className="text-gray-300">PowerBI integration revolutionized retail analytics</p>
                <div className="mt-4 flex items-center text-blue-400">
                  <span className="mr-2">Retail Industry</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Energy Case Study */}
            <div className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
                alt="Energy Transformation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  75%
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Safety Boost</h3>
                <p className="text-gray-300">IoT monitoring enhanced safety compliance</p>
                <div className="mt-4 flex items-center text-blue-400">
                  <span className="mr-2">Oil & Gas</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Excellence */}
      <section className="py-32 bg-black relative">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
            alt="Team"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-none mb-8">
                Human
                <br />
                <span className="text-white">Excellence</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 font-light mb-12">
                Technology amplifies talent. People deliver results.
              </p>
              
              <div className="space-y-6">
                {[
                  '50+ Years Combined Experience',
                  'Follow-the-Sun Delivery',
                  'Enterprise-Grade Security'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop", 
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop"
              ].map((img, index) => (
                <div 
                  key={index}
                  className="aspect-[3/4] rounded-2xl overflow-hidden group"
                >
                  <img 
                    src={img}
                    alt="Team Member"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="h-screen relative flex items-center justify-center">
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
            alt="Future Office"
            className="w-full h-full object-cover scale-110"
            style={{ filter: 'brightness(0.25) contrast(1.3)' }}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h2 className="text-7xl md:text-9xl font-bold mb-8 leading-none">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Ready?</span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-16 font-light">
            Your transformation starts here
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-12 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-110 shadow-2xl">
              Get Started
            </button>
            <button className="border-2 border-white/30 text-white px-12 py-5 rounded-full text-xl font-semibold hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 md:mb-0">
              ProcessAI
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-8">
            © 2025 ProcessAI. Built for the future.
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #000;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .text-9xl { 
            font-size: 4rem; 
            line-height: 0.85;
          }
          .text-8xl { 
            font-size: 3.5rem; 
            line-height: 0.9;
          }
          .text-7xl { 
            font-size: 3rem; 
            line-height: 0.9;
          }
          .text-6xl { 
            font-size: 2.5rem; 
            line-height: 0.9;
          }
        }
        
        /* Performance */
        img {
          will-change: transform;
        }
        
        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Website;