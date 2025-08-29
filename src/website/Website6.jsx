// import React, { useState, useEffect } from 'react';
// import { Phone, Calendar, FileText, Home, BookOpen, ArrowRight, Menu, X, Mail, MapPin, CheckCircle } from 'lucide-react';

// const ITConsultingWebsite = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [visibleSteps, setVisibleSteps] = useState([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
      
//       // Smooth journey steps animation
//       const journeySection = document.getElementById('journey');
//       if (journeySection) {
//         const rect = journeySection.getBoundingClientRect();
//         const windowHeight = window.innerHeight;
//         const sectionTop = rect.top;
//         const sectionHeight = rect.height;
        
//         // Calculate progress more smoothly
//         if (sectionTop < windowHeight * 0.8 && sectionTop + sectionHeight > windowHeight * 0.2) {
//           const progress = Math.max(0, Math.min(1, 
//             (windowHeight * 0.8 - sectionTop) / (sectionHeight * 0.6)
//           ));
          
//           const totalSteps = 5;
//           const smoothStep = progress * totalSteps;
          
//           // Create smooth step-by-step appearance
//           const newVisibleSteps = [];
//           for (let i = 0; i < totalSteps; i++) {
//             if (smoothStep > i) {
//               newVisibleSteps.push(i);
//             }
//           }
//           setVisibleSteps(newVisibleSteps);
//         }
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     handleScroll(); // Initial check
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const journeySteps = [
//     {
//       title: "Consultation Call",
//       description: "Our team will get on a call with you to solve all your doubts related to the DevOps",
//       icon: Phone,
//       color: "bg-purple-100 text-purple-600"
//     },
//     {
//       title: "Pre-Book Your Slot",
//       description: "Pre-book your slot. We take only 25-50 candidates per batch with limited seating",
//       icon: Calendar,
//       color: "bg-green-100 text-green-600"
//     },
//     {
//       title: "Entry Level Test",
//       description: "After pre-booking, an entry-level test will be conducted. Based on your result, you will move on the next step",
//       icon: FileText,
//       color: "bg-yellow-100 text-yellow-600"
//     },
//     {
//       title: "Receive Entry Kit at Home",
//       description: "Once you clear the entry-level test, an entry kit will be sent to your address as a welcoming sign from EMG",
//       icon: Home,
//       color: "bg-pink-100 text-pink-600"
//     },
//     {
//       title: "Start Learning",
//       description: "When the batch starts, you will get access to tutorials, the community, and your mentors. You can start learning immediately.",
//       icon: BookOpen,
//       color: "bg-blue-100 text-blue-600"
//     }
//   ];

//   const services = [
//     {
//       title: "DevOps Consulting",
//       description: "Streamline your development and operations with our expert DevOps solutions.",
//       features: ["CI/CD Pipeline Setup", "Infrastructure as Code", "Container Orchestration"]
//     },
//     {
//       title: "Cloud Migration",
//       description: "Seamlessly migrate your infrastructure to the cloud with minimal downtime.",
//       features: ["AWS/Azure/GCP", "Security Assessment", "Cost Optimization"]
//     },
//     {
//       title: "IT Training",
//       description: "Comprehensive training programs to upskill your team with latest technologies.",
//       features: ["Hands-on Learning", "Expert Mentors", "Industry Certification"]
//     },
//     {
//       title: "System Integration",
//       description: "Integrate disparate systems for improved efficiency and data flow.",
//       features: ["API Development", "Database Integration", "Legacy System Modernization"]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="fixed w-full top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <h1 className="text-2xl font-bold text-gray-900">TechConsult</h1>
//             </div>
            
//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</a>
//               <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
//               <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Services</a>
//               <a href="#journey" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Process</a>
//               <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
//               <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
//                 Get Started
//               </button>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-gray-700 hover:text-blue-600"
//               >
//                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           {isMenuOpen && (
//             <div className="md:hidden bg-white border-t">
//               <div className="px-2 pt-2 pb-3 space-y-1">
//                 <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
//                 <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
//                 <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
//                 <a href="#journey" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Process</a>
//                 <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
//                 <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
//         {/* Background Animation Elements */}
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//           <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
//             {/* Left Content */}
//             <div className="text-left">
//               <div className="inline-block mb-4">
//                 <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
//                   🚀 Leading IT Transformation
//                 </span>
//               </div>
              
//               <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//                 <span className="text-white">Transform</span>
//                 <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
//                   Your Digital
//                 </span>
//                 <br />
//                 <span className="text-white">Future</span>
//               </h1>
              
//               <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
//                 Accelerate your business growth with expert IT consulting, DevOps solutions, 
//                 and cloud transformation services tailored to your success.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 mb-12">
//                 <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center">
//                   Start Your Journey
//                   <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
//                 </button>
//                 <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm">
//                   Watch Demo
//                 </button>
//               </div>
              
//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
//                   <div className="text-sm text-gray-400">Projects</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-cyan-400 mb-1">50+</div>
//                   <div className="text-sm text-gray-400">Experts</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-purple-400 mb-1">99%</div>
//                   <div className="text-sm text-gray-400">Success Rate</div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Right Visual */}
//             <div className="relative">
//               <div className="relative z-10">
//                 {/* Main Console */}
//                 <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-2xl">
//                   <div className="flex items-center mb-4">
//                     <div className="flex space-x-2">
//                       <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                       <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     </div>
//                     <div className="text-gray-400 text-sm ml-4">terminal@techconsult:~$</div>
//                   </div>
                  
//                   <div className="space-y-2 text-sm font-mono">
//                     <div className="text-green-400">$ docker build -t app .</div>
//                     <div className="text-gray-400">Building application...</div>
//                     <div className="text-blue-400">$ kubectl apply -f deployment.yaml</div>
//                     <div className="text-gray-400">deployment.apps/app created</div>
//                     <div className="text-purple-400">$ terraform plan</div>
//                     <div className="text-gray-400">Plan: 15 to add, 0 to change</div>
//                     <div className="text-cyan-400 animate-pulse">$ Starting deployment...</div>
//                   </div>
//                 </div>
                
//                 {/* Floating Cards */}
//                 <div 
//                   className="absolute -top-8 -right-8 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 animate-bounce"
//                   style={{ animationDelay: '0.5s', animationDuration: '3s' }}
//                 >
//                   <div className="text-blue-400 text-sm font-semibold">☁️ Cloud Ready</div>
//                 </div>
                
//                 <div 
//                   className="absolute -bottom-6 -left-6 bg-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-4 animate-bounce"
//                   style={{ animationDelay: '1s', animationDuration: '3s' }}
//                 >
//                   <div className="text-green-400 text-sm font-semibold">🚀 DevOps</div>
//                 </div>
                
//                 <div 
//                   className="absolute top-1/2 -right-12 bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 animate-bounce"
//                   style={{ animationDelay: '1.5s', animationDuration: '3s' }}
//                 >
//                   <div className="text-purple-400 text-sm font-semibold">🔧 Automation</div>
//                 </div>
//               </div>
              
//               {/* Background Glow */}
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl transform scale-110"></div>
//             </div>
//           </div>
//         </div>
        
//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
//           <div className="text-xs mb-2">Scroll to explore</div>
//           <div className="w-6 h-10 border-2 border-gray-600 rounded-full mx-auto relative">
//             <div className="w-1 h-3 bg-blue-400 rounded-full mx-auto mt-2 animate-pulse"></div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">About TechConsult</h2>
//               <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//                 With over 10 years of experience in the IT industry, we've helped hundreds of businesses 
//                 transform their digital infrastructure and achieve their technology goals.
//               </p>
//               <p className="text-gray-600 mb-8 leading-relaxed">
//                 Our team of certified experts specializes in DevOps, cloud migration, and digital transformation. 
//                 We believe in delivering solutions that not only meet your current needs but also scale with your future growth.
//               </p>
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
//                   <div className="text-gray-600">Projects Completed</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
//                   <div className="text-gray-600">Expert Consultants</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
//                   <div className="text-gray-600">Support Available</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
//                   <div className="text-gray-600">Client Satisfaction</div>
//                 </div>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
//                 <div className="bg-white rounded-xl p-6 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
//                   <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
//                     <div className="text-center">
//                       <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                         <span className="text-white text-2xl">🚀</span>
//                       </div>
//                       <p className="text-gray-600 font-semibold">Innovation in Action</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Comprehensive IT solutions tailored to your business needs
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <div 
//                 key={index}
//                 className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
//                 style={{
//                   animationDelay: `${index * 0.1}s`
//                 }}
//               >
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 mb-6">{service.description}</p>
//                 <ul className="space-y-2">
//                   {service.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center text-sm text-gray-500">
//                       <CheckCircle size={16} className="text-green-500 mr-2" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="relative">
//               <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
//                     <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
//                       <span className="text-white text-3xl">⚡</span>
//                     </div>
//                     <h4 className="font-semibold text-gray-900">Fast Deployment</h4>
//                   </div>
//                   <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8">
//                     <div className="w-full h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
//                       <span className="text-white text-3xl">🛡️</span>
//                     </div>
//                     <h4 className="font-semibold text-gray-900">Secure Solutions</h4>
//                   </div>
//                   <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
//                     <div className="w-full h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
//                       <span className="text-white text-3xl">📊</span>
//                     </div>
//                     <h4 className="font-semibold text-gray-900">Analytics</h4>
//                   </div>
//                   <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8">
//                     <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
//                       <span className="text-white text-3xl">🎯</span>
//                     </div>
//                     <h4 className="font-semibold text-gray-900">Targeted Results</h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose TechConsult?</h2>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 We don't just provide solutions; we become your technology partner. Our approach combines 
//                 industry best practices with innovative thinking to deliver exceptional results.
//               </p>
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
//                     <CheckCircle className="text-blue-600" size={20} />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900 mb-2">Proven Expertise</h4>
//                     <p className="text-gray-600">Our team holds industry certifications and has hands-on experience with enterprise-level implementations.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
//                     <CheckCircle className="text-green-600" size={20} />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900 mb-2">Agile Methodology</h4>
//                     <p className="text-gray-600">We follow agile practices to ensure quick delivery and adaptability to changing requirements.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-purple-100 p-2 rounded-lg mr-4 mt-1">
//                     <CheckCircle className="text-purple-600" size={20} />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
//                     <p className="text-gray-600">Round-the-clock monitoring and support to ensure your systems run smoothly.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Technologies Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Work With</h2>
//             <p className="text-xl text-gray-600">Cutting-edge tools and platforms to power your digital transformation</p>
//           </div>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
//             {[
//               { name: 'AWS', color: 'from-orange-400 to-orange-600', icon: '☁️' },
//               { name: 'Docker', color: 'from-blue-400 to-blue-600', icon: '🐳' },
//               { name: 'Kubernetes', color: 'from-indigo-400 to-indigo-600', icon: '⚙️' },
//               { name: 'Jenkins', color: 'from-gray-400 to-gray-600', icon: '🔧' },
//               { name: 'React', color: 'from-cyan-400 to-cyan-600', icon: '⚛️' },
//               { name: 'Node.js', color: 'from-green-400 to-green-600', icon: '💚' },
//               { name: 'Python', color: 'from-yellow-400 to-yellow-600', icon: '🐍' },
//               { name: 'MongoDB', color: 'from-green-500 to-green-700', icon: '🍃' },
//               { name: 'Azure', color: 'from-blue-500 to-blue-700', icon: '☁️' },
//               { name: 'Terraform', color: 'from-purple-400 to-purple-600', icon: '🏗️' },
//               { name: 'Git', color: 'from-red-400 to-red-600', icon: '📝' },
//               { name: 'Linux', color: 'from-gray-600 to-gray-800', icon: '🐧' }
//             ].map((tech, index) => (
//               <div 
//                 key={index}
//                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center group"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                   <span className="text-2xl">{tech.icon}</span>
//                 </div>
//                 <h4 className="font-semibold text-gray-900">{tech.name}</h4>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Case Studies Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
//             <p className="text-xl text-gray-600">Real results from real clients</p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "E-commerce Platform Migration",
//                 company: "RetailCorp",
//                 result: "50% faster deployment",
//                 description: "Migrated legacy e-commerce platform to cloud-native architecture, resulting in improved performance and scalability.",
//                 image: "🛒",
//                 color: "from-blue-500 to-purple-600"
//               },
//               {
//                 title: "DevOps Transformation",
//                 company: "FinanceFirst",
//                 result: "80% reduction in downtime",
//                 description: "Implemented comprehensive DevOps pipeline with automated testing and deployment for a financial services company.",
//                 image: "💰",
//                 color: "from-green-500 to-teal-600"
//               },
//               {
//                 title: "Cloud Infrastructure Setup",
//                 company: "HealthTech Solutions",
//                 result: "60% cost reduction",
//                 description: "Designed and deployed secure, compliant cloud infrastructure for healthcare data processing and analytics.",
//                 image: "🏥",
//                 color: "from-red-500 to-pink-600"
//               }
//             ].map((study, index) => (
//               <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
//                 <div className={`h-48 bg-gradient-to-br ${study.color} flex items-center justify-center`}>
//                   <span className="text-6xl">{study.image}</span>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
//                   <p className="text-blue-600 font-semibold mb-2">{study.company}</p>
//                   <p className="text-gray-600 mb-4">{study.description}</p>
//                   <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
//                     {study.result}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Experts</h2>
//             <p className="text-xl text-gray-600">The talented minds behind your success</p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { name: "Sarah Johnson", role: "DevOps Architect", expertise: "AWS, Kubernetes", avatar: "👩‍💻" },
//               { name: "Michael Chen", role: "Cloud Consultant", expertise: "Azure, Terraform", avatar: "👨‍💼" },
//               { name: "Emily Davis", role: "Full Stack Developer", expertise: "React, Node.js", avatar: "👩‍🔬" },
//               { name: "David Wilson", role: "Security Expert", expertise: "Cybersecurity, Compliance", avatar: "👨‍🔒" }
//             ].map((member, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
//                 <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-3xl">{member.avatar}</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
//                 <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
//                 <p className="text-gray-600 text-sm">{member.expertise}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
//             <p className="text-xl text-gray-600">Don't just take our word for it</p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 quote: "TechConsult transformed our entire infrastructure. The team's expertise and dedication are unmatched.",
//                 author: "John Smith",
//                 position: "CTO, TechStartup Inc.",
//                 rating: 5,
//                 avatar: "👨‍💼"
//               },
//               {
//                 quote: "Outstanding service and support. They delivered exactly what they promised, on time and within budget.",
//                 author: "Lisa Rodriguez",
//                 position: "IT Director, GlobalCorp",
//                 rating: 5,
//                 avatar: "👩‍💼"
//               },
//               {
//                 quote: "The DevOps implementation was seamless. Our deployment time decreased by 70% after working with them.",
//                 author: "Mark Thompson",
//                 position: "Lead Developer, InnovateNow",
//                 rating: 5,
//                 avatar: "👨‍💻"
//               }
//             ].map((testimonial, index) => (
//               <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
//                 <div className="flex mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <span key={i} className="text-yellow-400 text-xl">⭐</span>
//                   ))}
//                 </div>
//                 <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mr-4">
//                     <span className="text-xl">{testimonial.avatar}</span>
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">{testimonial.author}</p>
//                     <p className="text-gray-600 text-sm">{testimonial.position}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Journey Section */}
//       <section id="journey" className="py-24 bg-gray-50 relative">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               JOURNEY
//             </div>
//             <h2 className="text-5xl font-bold text-gray-900 mb-6">
//               How the Journey
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//                 Looks like
//               </span>
//             </h2>
//           </div>

//           <div className="relative max-w-3xl mx-auto">
//             {/* Vertical Timeline Line */}
//             <div className="absolute left-3 top-0 w-0.5 h-full bg-gray-300"></div>
//             <div 
//               className="absolute left-3 top-0 w-0.5 bg-gradient-to-b from-blue-400 via-orange-400 to-yellow-400 transition-all duration-1000 ease-out"
//               style={{
//                 height: `${Math.min(100, (visibleSteps.length / journeySteps.length) * 100)}%`
//               }}
//             ></div>
            
//             {journeySteps.map((step, index) => {
//               const IconComponent = step.icon;
//               const isVisible = visibleSteps.includes(index);
              
//               return (
//                 <div 
//                   key={index} 
//                   className={`relative flex items-start mb-20 last:mb-0 transition-all duration-800 ease-out ${
//                     isVisible 
//                       ? 'opacity-100 translate-y-0' 
//                       : 'opacity-30 translate-y-4'
//                   }`}
//                   style={{ 
//                     transitionDelay: `${index * 200}ms`
//                   }}
//                 >
//                   {/* Timeline Dot */}
//                   <div className="relative z-10 flex-shrink-0">
//                     <div 
//                       className={`w-6 h-6 rounded-full border-2 transition-all duration-500 ${
//                         isVisible 
//                           ? 'bg-white border-gray-400 shadow-md' 
//                           : 'bg-gray-200 border-gray-300'
//                       }`}
//                     ></div>
//                   </div>

//                   {/* Content */}
//                   <div className="ml-8 flex-1 flex items-start justify-between">
//                     {/* Text Content */}
//                     <div className="flex-1 max-w-md">
//                       <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${
//                         isVisible ? 'text-gray-900' : 'text-gray-500'
//                       }`}>
//                         {step.title}
//                       </h3>
//                       <p className={`text-base leading-relaxed transition-colors duration-500 ${
//                         isVisible ? 'text-gray-600' : 'text-gray-400'
//                       }`}>
//                         {step.description}
//                       </p>
//                     </div>
                    
//                     {/* Icon on the Right */}
//                     <div className={`ml-8 transition-all duration-700 ${
//                       isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-30'
//                     }`}>
//                       <div className={`${step.color} p-4 rounded-2xl shadow-lg`}
//                         style={{
//                           boxShadow: isVisible 
//                             ? '0 8px 32px rgba(0, 0, 0, 0.12)' 
//                             : '0 4px 16px rgba(0, 0, 0, 0.06)'
//                         }}
//                       >
//                         <IconComponent size={28} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
//             <p className="text-xl text-gray-600">Ready to transform your business? Let's start the conversation.</p>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
//               <div className="space-y-6">
//                 <div className="flex items-center">
//                   <div className="bg-blue-100 p-3 rounded-lg mr-4">
//                     <Mail className="text-blue-600" size={24} />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Email</p>
//                     <p className="text-gray-600">contact@techconsult.com</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="bg-green-100 p-3 rounded-lg mr-4">
//                     <Phone className="text-green-600" size={24} />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Phone</p>
//                     <p className="text-gray-600">+1 (555) 123-4567</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="bg-purple-100 p-3 rounded-lg mr-4">
//                     <MapPin className="text-purple-600" size={24} />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Office</p>
//                     <p className="text-gray-600">123 Tech Street, Innovation City</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-gray-50 p-8 rounded-xl">
//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
//                   <input 
//                     type="text" 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
//                     placeholder="Your full name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
//                   <input 
//                     type="email" 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
//                   <textarea 
//                     rows="4" 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
//                     placeholder="Tell us about your project..."
//                   ></textarea>
//                 </div>
//                 <button 
//                   className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
//                   onClick={() => alert('Message sent! We will get back to you soon.')}
//                 >
//                   Send Message
//                   <ArrowRight className="ml-2" size={20} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h3 className="text-2xl font-bold mb-4">TechConsult</h3>
//             <p className="text-gray-400 mb-8">Transforming businesses through innovative IT solutions</p>
//             <div className="border-t border-gray-700 pt-8">
//               <p className="text-gray-400">&copy; 2025 TechConsult. All rights reserved.</p>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ITConsultingWebsite;
import React, { useState, useEffect, useRef } from 'react';
import { Phone, Calendar, FileText, Home, BookOpen, ArrowRight, Menu, X, Mail, MapPin, CheckCircle, Check } from 'lucide-react';

const ITConsultingWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Enhanced scroll-based timeline animation
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;

      // Calculate when section enters viewport
      const sectionStart = sectionTop - windowHeight + 200;
      const sectionEnd = sectionTop + sectionHeight - 200;
      
      if (scrollTop >= sectionStart && scrollTop <= sectionEnd) {
        // Calculate progress through the section (0 to 1)
        const progress = Math.max(0, Math.min(1, (scrollTop - sectionStart) / (sectionEnd - sectionStart)));
        setScrollProgress(progress);

        // Calculate which step should be active
        const currentStep = Math.min(
          journeySteps.length - 1,
          Math.floor(progress * journeySteps.length * 1.2) // Slightly faster progression
        );
        setActiveStep(currentStep);
      } else if (scrollTop < sectionStart) {
        setScrollProgress(0);
        setActiveStep(0);
      } else {
        setScrollProgress(1);
        setActiveStep(journeySteps.length - 1);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const journeySteps = [
    {
      title: "Consultation Call",
      description: "Our team will get on a call with you to solve all your doubts related to the DevOps",
      icon: Phone,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Pre-Book Your Slot",
      description: "Pre-book your slot. We take only 25-50 candidates per batch with limited seating",
      icon: Calendar,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Entry Level Test",
      description: "After pre-booking, an entry-level test will be conducted. Based on your result, you will move on the next step",
      icon: FileText,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "Receive Entry Kit at Home",
      description: "Once you clear the entry-level test, an entry kit will be sent to your address as a welcoming sign from EMG",
      icon: Home,
      color: "bg-pink-100 text-pink-600"
    },
    {
      title: "Start Learning",
      description: "When the batch starts, you will get access to tutorials, the community, and your mentors. You can start learning immediately.",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-600"
    }
  ];

  const services = [
    {
      title: "DevOps Consulting",
      description: "Streamline your development and operations with our expert DevOps solutions.",
      features: ["CI/CD Pipeline Setup", "Infrastructure as Code", "Container Orchestration"]
    },
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with minimal downtime.",
      features: ["AWS/Azure/GCP", "Security Assessment", "Cost Optimization"]
    },
    {
      title: "IT Training",
      description: "Comprehensive training programs to upskill your team with latest technologies.",
      features: ["Hands-on Learning", "Expert Mentors", "Industry Certification"]
    },
    {
      title: "System Integration",
      description: "Integrate disparate systems for improved efficiency and data flow.",
      features: ["API Development", "Database Integration", "Legacy System Modernization"]
    }
  ];

  const getStepOpacity = (index) => {
    if (index <= activeStep) return 1;
    if (index === activeStep + 1) return 0.7;
    return 0.3;
  };

  const isDotActive = (index) => index <= activeStep;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">TechConsult</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Services</a>
              <a href="#journey" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Process</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-all duration-300 transform"
              >
                <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-white border-t shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a 
                  href="#home" 
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 transform hover:translate-x-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 transform hover:translate-x-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#services" 
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 transform hover:translate-x-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="#journey" 
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 transform hover:translate-x-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Process
                </a>
                <a 
                  href="#contact" 
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 transform hover:translate-x-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <button 
                  className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Content */}
            <div className="text-left">
              <div className="inline-block mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                  Leading IT Transformation
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Transform</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                  Your Digital
                </span>
                <br />
                <span className="text-white">Future</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                Accelerate your business growth with expert IT consulting, DevOps solutions, 
                and cloud transformation services tailored to your success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center">
                  Start Your Journey
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </button>
                <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm">
                  Watch Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">50+</div>
                  <div className="text-sm text-gray-400">Experts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">99%</div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Console */}
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-2xl">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-gray-400 text-sm ml-4">terminal@techconsult:~$</div>
                  </div>
                  
                  <div className="space-y-2 text-sm font-mono">
                    <div className="text-green-400">$ docker build -t app .</div>
                    <div className="text-gray-400">Building application...</div>
                    <div className="text-blue-400">$ kubectl apply -f deployment.yaml</div>
                    <div className="text-gray-400">deployment.apps/app created</div>
                    <div className="text-purple-400">$ terraform plan</div>
                    <div className="text-gray-400">Plan: 15 to add, 0 to change</div>
                    <div className="text-cyan-400 animate-pulse">$ Starting deployment...</div>
                  </div>
                </div>
                
                {/* Floating Cards */}
                <div 
                  className="absolute -top-8 -right-8 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 animate-bounce"
                  style={{ animationDelay: '0.5s', animationDuration: '3s' }}
                >
                  <div className="text-blue-400 text-sm font-semibold">Cloud Ready</div>
                </div>
                
                <div 
                  className="absolute -bottom-6 -left-6 bg-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-4 animate-bounce"
                  style={{ animationDelay: '1s', animationDuration: '3s' }}
                >
                  <div className="text-green-400 text-sm font-semibold">DevOps</div>
                </div>
                
                <div 
                  className="absolute top-1/2 -right-12 bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 animate-bounce"
                  style={{ animationDelay: '1.5s', animationDuration: '3s' }}
                >
                  <div className="text-purple-400 text-sm font-semibold">Automation</div>
                </div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
          <div className="text-xs mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full mx-auto relative">
            <div className="w-1 h-3 bg-blue-400 rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About TechConsult</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 10 years of experience in the IT industry, we've helped hundreds of businesses 
                transform their digital infrastructure and achieve their technology goals.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of certified experts specializes in DevOps, cloud migration, and digital transformation. 
                We believe in delivering solutions that not only meet your current needs but also scale with your future growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Expert Consultants</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-xl p-6 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl">💼</span>
                      </div>
                      <p className="text-gray-600 font-semibold">Innovation in Action</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              PORTFOLIO
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our successful implementations and transformations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Cloud Infrastructure",
                description: "Scalable AWS deployment with auto-scaling and load balancing",
                imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
                color: "from-blue-500 to-cyan-500",
                tech: ["AWS", "Terraform", "Kubernetes"]
              },
              {
                title: "DevOps Pipeline",
                description: "Complete CI/CD implementation with automated testing",
                imageUrl: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=400&h=300&fit=crop&crop=center",
                color: "from-green-500 to-emerald-500",
                tech: ["Jenkins", "Docker", "GitLab"]
              },
              {
                title: "Monitoring Dashboard",
                description: "Real-time system monitoring and alerting setup",
                imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
                color: "from-purple-500 to-pink-500",
                tech: ["Grafana", "Prometheus", "ELK"]
              },
              {
                title: "Security Implementation",
                description: "Zero-trust security model with compliance automation",
                imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center",
                color: "from-red-500 to-orange-500",
                tech: ["Vault", "Ansible", "SIEM"]
              },
              {
                title: "Database Migration",
                description: "Seamless migration from legacy to cloud-native databases",
                imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
                color: "from-indigo-500 to-blue-500",
                tech: ["MongoDB", "Redis", "PostgreSQL"]
              },
              {
                title: "API Gateway",
                description: "Microservices architecture with centralized API management",
                imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center",
                color: "from-teal-500 to-cyan-500",
                tech: ["Kong", "Istio", "GraphQL"]
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Image Section */}
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                  <img 
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Details Button */}
                  <button className="text-blue-600 font-medium text-sm flex items-center group-hover:text-blue-700 transition-colors duration-300">
                    View Details
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-6 rounded-2xl">
              <div className="text-4xl">🎯</div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Ready to Start Your Project?</h3>
                <p className="text-gray-600">Let's discuss how we can transform your infrastructure</p>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 ml-4">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Journey Section with Scroll Timeline */}
      <section ref={sectionRef} id="journey" className="py-24 bg-gray-50 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              JOURNEY
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              How the Journey
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Looks like
              </span>
            </h2>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Timeline Line - Base */}
            <div className="absolute left-3 top-0 w-0.5 h-full bg-gray-300 rounded-full"></div>
            
            {/* Vertical Timeline Line - Animated Progress */}
            <div
              className="absolute left-3 top-0 w-0.5 rounded-full transition-all duration-300 ease-out"
              style={{
                height: `${scrollProgress * 100}%`,
                background: `linear-gradient(to bottom, 
                  #8b5cf6 0%, 
                  #10b981 25%, 
                  #f59e0b 50%, 
                  #ec4899 75%, 
                  #3b82f6 100%
                )`,
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)'
              }}
            ></div>
            
            {journeySteps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = isDotActive(index);
              const opacity = getStepOpacity(index);
              
              return (
                <div 
                  key={index} 
                  className={`relative flex items-start mb-20 last:mb-0 transition-all duration-700 ease-out`}
                  style={{
                    opacity,
                    transitionDelay: `${Math.max(0, (index - activeStep) * 100)}ms`
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div 
                      className={`w-6 h-6 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                        isActive 
                          ? 'bg-purple-500 border-purple-500' 
                          : 'bg-gray-200 border-gray-300'
                      }`}
                      style={{
                        boxShadow: isActive 
                          ? '0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)'
                          : 'none'
                      }}
                    >
                      {/* Checkmark for active dots */}
                      {isActive && (
                        <Check 
                          size={14} 
                          className="text-white animate-pulse"
                        />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-8 flex-1 flex items-start justify-between">
                    {/* Text Content */}
                    <div className="flex-1 max-w-md">
                      <h3 className={`text-2xl font-bold mb-3 transition-all duration-500 ${
                        isActive ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-base leading-relaxed transition-all duration-500 ${
                        isActive ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Icon on the Right */}
                    <div className={`ml-8 transition-opacity duration-700`}>
                      <div 
                        className={`${step.color} p-4 rounded-2xl shadow-lg transition-all duration-500`}
                        style={{
                          boxShadow: isActive
                            ? '0 8px 32px rgba(0, 0, 0, 0.15), 0 0 20px rgba(255, 255, 255, 0.1) inset'
                            : '0 4px 16px rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        <IconComponent size={28} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Progress Indicator */}
          {/* <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
              <div className="text-sm font-medium text-gray-600">
                Progress: {Math.round(scrollProgress * 100)}%
              </div>
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-600 transition-all duration-300 ease-out"
                  style={{ width: `${scrollProgress * 100}%` }}
                ></div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to transform your business? Let's start the conversation.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">contact@techconsult.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <MapPin className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Office</p>
                    <p className="text-gray-600">123 Tech Street, Innovation City</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                  onClick={() => alert('Message sent! We will get back to you soon.')}
                >
                  Send Message
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">TechConsult</h3>
            <p className="text-gray-400 mb-8">Transforming businesses through innovative IT solutions</p>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">&copy; 2025 TechConsult. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ITConsultingWebsite;