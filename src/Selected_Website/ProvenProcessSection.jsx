import React, { useState, useEffect, useRef } from 'react';
import { Lightbulb, FileText, Code, Rocket } from 'lucide-react';

const ProvenProcessSection = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef(null);

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your requirements, challenges, and goals to create a comprehensive project roadmap.",
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Strategic Planning",
      description: "Our team develops a detailed strategy with timelines, milestones, and resource allocation.",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using agile methodologies with continuous testing and quality assurance.",
      icon: <Code className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Seamless deployment with ongoing maintenance, monitoring, and 24/7 technical support.",
      icon: <Rocket className="w-8 h-8" />
    }
  ];

  // Enhanced Intersection Observer for smoother animations
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

  return (
    <section className="py-20 bg-gray-50" data-animate id="process">
      <div className="lg:w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center space-y-4 mb-16 transform transition-all duration-1000 ${visibleSections.has('process') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Our Proven Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A systematic approach that ensures project success from concept to deployment
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 transform -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={index} 
                className={`relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 text-center group ${visibleSections.has('process') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 250}ms` }}
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                
                <div className="pt-8">
                  <div className="text-blue-600 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenProcessSection;