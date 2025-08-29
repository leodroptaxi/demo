
import React, { useState, useEffect,useRef } from 'react';
import { Menu, X, ArrowRight, CheckCircle, Users, Code, Cloud, Shield, Phone, Mail, MapPin, Star, ChevronLeft, ChevronRight } from 'lucide-react';

import { motion } from 'framer-motion'
import { FaWhatsapp, } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";

const JobCard = ({ imageUrl, alt }) => (
  <motion.div
    className="overflow-hidden flex-shrink-0 h-24 lg:h-32"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <img
      src={imageUrl}
      alt={alt}
      className="w-full h-full object-contain"
    />
  </motion.div>
);

const ScrollingRow = ({ images, direction = 'left', speed = 20 }) => {
  const animationName = direction === 'left' ? 'scroll-left' : 'scroll-right';

  return (
    <motion.div
      className="overflow-hidden whitespace-nowrap"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div
        className="inline-flex hover:pause"
        style={{
          width: 'max-content',
          animation: `${animationName} ${speed}s linear infinite`
        }}
      >
        {/* First set */}
        {images.map((image, index) => (
          <JobCard key={`first-${index}`} {...image} />
        ))}
        {/* Duplicate for seamless loop */}
        {images.map((image, index) => (
          <JobCard key={`second-${index}`} {...image} />
        ))}
        {/* Triple for mobile */}
        {images.map((image, index) => (
          <JobCard key={`third-${index}`} {...image} />
        ))}
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .inline-flex {
            animation-duration: ${speed + 10}s !important;
          }
        }
      `}</style>
    </motion.div>
  );
};





const IT = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  
  
    const [scrollProgress, setScrollProgress] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const containerRef = useRef(null);
  
    const sections = [
      {
        id: 1,
        icon: "",
        boxTitle: 'Complete Beginners Welcome',
        boxSubtitle:
          'No design background? No problem. Learn UI/UX from scratch and build a strong foundation.',
      },
      {
        id: 2,
        icon: "",
        boxTitle: 'Career Changers',
        boxSubtitle:
          'Get the basics of UX design so you can switch into a new design role',
      },
      {
        id: 3,
        icon: "",
        boxTitle: 'Graphic Designers Ready to Transition',
        boxSubtitle:
          'Move beyond visuals and start designing interactive digital products with real user focus.',
      },
      {
        id: 4,
        icon: "",
        boxTitle: 'Developers, Decode Design',
        boxSubtitle:
          'Understand design principles and create better UI while working smoothly with design teams.',
      },
    ]
  
    useEffect(() => {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }
  
      checkIsMobile()
      window.addEventListener('resize', checkIsMobile)
  
      return () => window.removeEventListener('resize', checkIsMobile)
    }, [])
  
    useEffect(() => {
      const handleScroll = () => {
        if (!containerRef.current) return
  
        const rect = containerRef.current.getBoundingClientRect()
        const containerHeight = rect.height
        const windowHeight = window.innerHeight
  
        if (rect.bottom > 0 && rect.top < windowHeight) {
          if (rect.top <= 0) {
            const progress = Math.abs(rect.top) / (containerHeight - windowHeight)
            setScrollProgress(Math.max(0, Math.min(1, progress)))
  
            // Determine active section based on scroll progress
            Math.min(sections.length - 1, Math.floor(progress * sections.length))
          } else {
            setScrollProgress(0)
          }
        }
      }
  
      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()
  
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  
    const getBoxTransform = (index) => {
      const totalBoxes = sections.length
      const boxDuration = 1 / totalBoxes
      const boxStart = index * boxDuration
      const boxEnd = (index + 1) * boxDuration
  
      if (isMobile) {
        if (index === 0) {
          if (scrollProgress === 0) {
            return {
              transform: `translateX(0%)`,
              opacity: 1,
              scale: 1,
            }
          } else if (scrollProgress > boxEnd) {
            return {
              transform: `translateX(-100%)`,
              opacity: 0,
              scale: 0.8,
            }
          } else {
            const localProgress = scrollProgress / boxDuration
            const smoothProgress = Math.pow(localProgress, 0.8)
            const translateX = -(smoothProgress * 100)
            const opacity =
              localProgress > 0.7 ? 1 - (localProgress - 0.7) * 3.33 : 1
            const scale = 1 - localProgress * 0.1
  
            return {
              transform: `translateX(${translateX}%)`,
              opacity: Math.max(0, Math.min(1, opacity)),
              scale: Math.max(0.8, scale),
            }
          }
        }
  
        if (index === totalBoxes - 1) {
          if (scrollProgress < boxStart) {
            return {
              transform: `translateX(100%)`,
              opacity: 0,
              scale: 0.8,
            }
          } else {
            const localProgress = Math.min(
              1,
              (scrollProgress - boxStart) / (boxDuration * 0.8)
            )
            const smoothProgress = Math.pow(localProgress, 0.9)
            const translateX = 100 - smoothProgress * 100
            const opacity = localProgress < 0.2 ? localProgress * 5 : 1
            const scale = 0.8 + localProgress * 0.2
  
            return {
              transform: `translateX(${Math.max(0, translateX)}%)`,
              opacity: Math.max(0, Math.min(1, opacity)),
              scale: Math.min(1, scale),
            }
          }
        }
  
        // Middle boxes - more distinct transitions
        if (scrollProgress < boxStart) {
          return {
            transform: `translateX(100%)`,
            opacity: 0,
            scale: 0.8,
          }
        } else if (scrollProgress > boxEnd) {
          return {
            transform: `translateX(-100%)`,
            opacity: 0,
            scale: 0.8,
          }
        } else {
          const localProgress = (scrollProgress - boxStart) / boxDuration
  
          let translateX = 0
          let opacity = 1
          let scale = 1
  
          if (localProgress < 0.5) {
            // Coming in from right
            translateX = 100 - localProgress * 2 * 100
            opacity = localProgress < 0.3 ? localProgress * 3.33 : 1
            scale = 0.8 + localProgress * 2 * 0.2
          } else {
            // Going out to left
            translateX = -((localProgress - 0.5) * 2 * 100)
            opacity = localProgress > 0.7 ? 1 - (localProgress - 0.7) * 3.33 : 1
            scale = 1 - (localProgress - 0.5) * 2 * 0.2
          }
  
          return {
            transform: `translateX(${translateX}%)`,
            opacity: Math.max(0, Math.min(1, opacity)),
            scale: Math.max(0.8, Math.min(1, scale)),
          }
        }
      } else {
        // Desktop: Original smooth overlapping transitions
        const overlapAmount = 0.1
        const extendedBoxStart = Math.max(0, boxStart - overlapAmount)
        const extendedBoxEnd = Math.min(1, boxEnd + overlapAmount)
  
        if (index === 0) {
          if (scrollProgress === 0) {
            return {
              transform: `translateX(0%)`,
              opacity: 1,
              scale: 1,
            }
          } else if (scrollProgress > extendedBoxEnd) {
            return {
              transform: `translateX(-100%)`,
              opacity: 0,
              scale: 0.8,
            }
          } else {
            const localProgress =
              scrollProgress / (boxDuration + overlapAmount * 2)
            const smoothProgress = Math.pow(localProgress, 0.7)
            const translateX = -(smoothProgress * 100)
            const opacity =
              localProgress > 0.6 ? 1 - (localProgress - 0.6) * 2.5 : 1
            const scale = 1 - localProgress * 0.2
  
            return {
              transform: `translateX(${translateX}%)`,
              opacity: Math.max(0, Math.min(1, opacity)),
              scale: Math.max(0.8, scale),
            }
          }
        }
  
        if (index === totalBoxes - 1) {
          if (scrollProgress < extendedBoxStart) {
            return {
              transform: `translateX(100%)`,
              opacity: 0,
              scale: 0.8,
            }
          } else {
            const localProgress = Math.min(
              1,
              (scrollProgress - extendedBoxStart) / (boxDuration * 0.7)
            )
            const smoothProgress = Math.pow(localProgress, 0.8)
            const translateX = 100 - smoothProgress * 100
            const opacity = localProgress < 0.3 ? localProgress * 3.33 : 1
            const scale = 0.8 + localProgress * 0.2
  
            return {
              transform: `translateX(${Math.max(0, translateX)}%)`,
              opacity: Math.max(0, Math.min(1, opacity)),
              scale: Math.min(1, scale),
            }
          }
        }
  
        if (scrollProgress < extendedBoxStart) {
          return {
            transform: `translateX(100%)`,
            opacity: 0,
            scale: 0.8,
          }
        } else if (scrollProgress > extendedBoxEnd) {
          return {
            transform: `translateX(-100%)`,
            opacity: 0,
            scale: 0.8,
          }
        } else {
          const localProgress =
            (scrollProgress - extendedBoxStart) /
            (extendedBoxEnd - extendedBoxStart)
          const smoothProgress = Math.pow(localProgress, 0.8)
          const translateX = 100 - smoothProgress * 200
  
          let opacity = 1
          if (localProgress < 0.2) {
            opacity = localProgress * 5
          } else if (localProgress > 0.8) {
            opacity = 1 - (localProgress - 0.8) * 5
          }
  
          const scale = 0.8 + Math.sin(localProgress * Math.PI) * 0.2
  
          return {
            transform: `translateX(${translateX}%)`,
            opacity: Math.max(0, Math.min(1, opacity)),
            scale: Math.max(0.8, Math.min(1, scale)),
          }
        }
      }
    }

  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs with cutting-edge technologies."
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for enhanced performance and cost efficiency."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and maintain compliance."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "IT Consulting",
      description: "Strategic IT consulting to optimize your technology infrastructure and drive business growth."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      text: "Outstanding service and expertise. They transformed our entire IT infrastructure and improved our efficiency by 40%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      text: "Professional team that delivered exactly what we needed. Their cloud migration saved us thousands in operational costs.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Global Solutions",
      text: "Incredible attention to detail and customer service. They're now our go-to IT partner for all projects.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-800">TechFlow</h1>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Home</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">About</a>
                <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">Contact</a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Transform Your Business with
              <span className="text-blue-600 block">Cutting-Edge IT Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
              We provide comprehensive IT services and consultancy to help your business thrive in the digital age. 
              From software development to cloud solutions, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Get Started
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-6">
                  <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                    Learn more →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose TechFlow?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over a decade of experience, we've helped hundreds of businesses transform their operations through innovative technology solutions.
              </p>
              
              <div className="space-y-4">
                {[
                  "10+ years of industry experience",
                  "500+ successful projects delivered",
                  "24/7 customer support",
                  "Certified IT professionals",
                  "Proven track record of success"
                ].map((item, index) => (
                  <div key={index} className="flex items-center animate-slide-in-left" style={{animationDelay: `${index * 0.1}s`}}>
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-blue-600">500+</div>
                      <div className="text-gray-600">Projects</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600">10+</div>
                      <div className="text-gray-600">Years</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600">50+</div>
                      <div className="text-gray-600">Experts</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600">24/7</div>
                      <div className="text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div
        ref={containerRef}
        className="w-full bg-black relative"
        style={{ height: `${sections.length * 100}vh` }}
      >
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center min-h-screen">
            {/* Mobile: Top - Visual Boxes (order-first) */}
            {/* Desktop: Right Side - Interactive Visual Boxes */}
            <div className="w-full md:flex-1 flex items-center justify-center relative h-64 sm:h-72 md:h-full min-h-[280px] sm:min-h-[320px] md:min-h-0 order-first md:order-last">
              {sections.map((section, index) => {
                const transform = getBoxTransform(index)
                return (
                  <div
                    key={section.id}
                    className="absolute transition-all duration-100 ease-out"
                    style={{
                      transform: `${transform.transform} scale(${transform.scale})`,
                      opacity: transform.opacity,
                    }}
                  >
                    <div className="relative group">
                      {/* Main Box - Increased mobile sizes */}
                      <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center p-6 sm:p-8 md:p-8 shadow-2xl">
                        {/* Icon */}
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                          {section.icon ? (
                            <img
                              src={section.icon}
                              alt="img1"
                              className="w-20 sm:w-24 md:w-24"
                            />
                          ) : null}
                        </div>

                        {/* Content */}
                        <div className="text-center space-y-2 sm:space-y-2 md:space-y-4">
                          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white leading-tight">
                            {section.boxTitle}
                          </h3>
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 opacity-80 leading-tight">
                            {section.boxSubtitle}
                          </p>
                          <div className="w-10 sm:w-12 md:w-16 h-1 sm:h-1 md:h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
                        </div>

                        {/* Step Number */}
                        <div className="absolute top-4 sm:top-4 md:top-4 lg:top-6 right-4 sm:right-4 md:right-4 lg:right-6 text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white/10">
                          {String(section.id).padStart(2, '0')}
                        </div>
                      </div>

                      {/* Floating Elements - Scaled for mobile */}
                      <div className="absolute -top-2 sm:-top-2 md:-top-4 -right-2 sm:-right-2 md:-right-4 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-400/30 animate-pulse"></div>
                      <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 -left-3 sm:-left-4 md:-left-6 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 bg-purple-500/20 rounded-lg backdrop-blur-sm border border-purple-400/30"></div>
                      <div className="absolute top-1/4 -left-2 sm:-left-3 md:-left-4 w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 bg-pink-500/20 rounded-full backdrop-blur-sm border border-pink-400/30"></div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Mobile: Bottom - Content */}
            {/* Desktop: Left Side - Fixed Title, Changing Content */}
            <div className="w-full z-10 md:flex-1 text-white space-y-3 sm:space-y-4 md:space-y-6 md:pr-8 lg:pr-16 max-w-full md:max-w-2xl pt-2 sm:pt-4 md:pt-0 pb-4 sm:pb-6 md:pb-0 order-last md:order-first">
              {/* Fixed Title */}
              <div className="space-y-2 text-center md:text-left">
                <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight px-2 sm:px-0">
                  Who is this course for?
                </h1>
                <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto md:mx-0"></div>
              </div>

              {/* Dynamic Content */}
              <div>
                <p className="text-center text-sm md:text-left md:text-lg">
                  We are proud to present the success of our UI/UX & Product
                  Design Strategy Program.
                </p>
              </div>

              <div
                className="pt-2 sm:pt-2 md:pt-4 px-2 sm:px-0"
                onClick={() => setEnquiryModal(true)}
              >
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg sm:rounded-xl px-4 sm:px-5 md:px-8 py-2 sm:py-2.5 md:py-3 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 text-xs sm:text-sm md:text-base font-medium transform hover:scale-105 w-full md:w-auto min-h-[40px] sm:min-h-[44px]">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Start Learning Today</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>



      </div>

      <div className="py-6 sm:py-8 md:py-12 relative overflow-hidden">
        {/* Background Circle */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Single centered circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-300/35 to-purple-300/35 rounded-full blur-3xl"></div>
        </div>

        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4 px-4">
            Aug-2025 Live Job
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 px-4">
            Opening in LinkedIn
          </h2>
        </motion.div>

        {/* Scrolling Rows
        <div className="relative z-10">
          <ScrollingRow images={row1Images} direction="left" speed={20} />
          <ScrollingRow images={row2Images} direction="right" speed={22} />
          <ScrollingRow images={row3Images} direction="left" speed={25} />
        </div> */}
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <a
       href="https://wa.me/919876543210?text=I%20want%20more%20info"  // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Phone Button */}
     
    </div> 
    <div className='fixed bottom-6 left-6 flex flex-col gap-3 z-50'>
       <a
        href="tel:+919876543210" // replace with your phone number
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
      >
        <MdLocalPhone size={22} />
      </a>
    </div>


    </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">Ready to transform your business? Let's talk!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">info@techflow.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-gray-300">123 Tech Street, Digital City, DC 12345</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  onClick={() => alert('Message sent! We\'ll get back to you soon.')}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">TechFlow</h3>
            <p className="text-gray-400 mb-4">Transforming businesses through technology</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Support</a>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-400">© 2025 TechFlow. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default IT;