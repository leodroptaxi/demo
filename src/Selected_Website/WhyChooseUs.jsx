import React, { useState, useEffect, useRef } from 'react';
import { Rocket, HeartHandshake, Eye, Lock } from 'lucide-react';

const WhyChooseUsSection = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef(null);

  const whyChooseUs = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Rapid Deployment",
      description: "Get your solutions up and running faster with our streamlined development process and proven methodologies."
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Client-Centric Approach",
      description: "We prioritize your success with personalized attention, transparent communication, and ongoing support."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Innovation Focus",
      description: "Stay ahead of the competition with cutting-edge technologies and forward-thinking solutions."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Your data and systems are protected with bank-level security measures and compliance standards."
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
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50" data-animate id="why-choose-us">
      <div className="lg:w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center space-y-4 mb-16 transform transition-all duration-1000 ${visibleSections.has('why-choose-us') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Why Choose TechSolutions?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise with business acumen to deliver solutions that drive real results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 text-center group ${visibleSections.has('why-choose-us') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-blue-600 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;