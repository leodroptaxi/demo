import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const observerRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CTO",
      content: "Their expertise transformed our legacy systems into a modern, scalable platform. Outstanding results!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      company: "GlobalTech Solutions",
      role: "CEO",
      content: "Professional, reliable, and innovative. They delivered beyond our expectations on time and budget.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      company: "InnovateNow",
      role: "Head of IT",
      content: "The cloud migration was seamless. Their team's knowledge and support made all the difference.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  // Smooth testimonial transition
  const changeTestimonial = (newIndex) => {
    if (newIndex === currentTestimonial) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  // Auto-rotate testimonials with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      changeTestimonial((currentTestimonial + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentTestimonial]);

  return (
    <section className="py-20 bg-white overflow-hidden" data-animate id="testimonials">
      <div className="lg:w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${visibleSections.has('testimonials') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 animate-fade-in-delay">Trusted by businesses worldwide for exceptional results</p>
        </div>
        
        <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ease-out ${visibleSections.has('testimonials') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 ease-in-out">
            <div className="flex items-center justify-center mb-6">
              <Quote className={`w-12 h-12 text-blue-600 transform transition-all duration-500 ease-in-out ${isTransitioning ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`} />
            </div>
            
            <div className="text-center relative min-h-[200px] flex flex-col justify-center">
              <div className={`transition-all duration-300 ease-in-out transform ${isTransitioning ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
                <p className="text-xl text-gray-700 mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="relative group">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 transition-all duration-300 group-hover:ring-blue-200 group-hover:scale-110"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white transition-all duration-300 group-hover:scale-110"></div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 transition-colors duration-300 hover:text-blue-600">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-blue-600 font-medium">{testimonials[currentTestimonial].role}</p>
                    <p className="text-gray-600">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-1">
                  {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current transform transition-all duration-300 hover:scale-125"
                      style={{
                        animationDelay: `${i * 100}ms`,
                        animation: !isTransitioning ? 'starGlow 2s ease-in-out infinite alternate' : 'none'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => changeTestimonial(index)}
                className={`h-3 rounded-full transition-all duration-500 ease-in-out transform hover:scale-125 ${
                  index === currentTestimonial 
                    ? 'bg-blue-600 w-8 shadow-lg' 
                    : 'bg-gray-300 w-3 hover:bg-gray-400 hover:w-6'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes starGlow {
          from {
            filter: brightness(1);
          }
          to {
            filter: brightness(1.2) drop-shadow(0 0 5px rgba(255, 193, 7, 0.5));
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        html {
          scroll-behavior: smooth;
        }

        * {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;