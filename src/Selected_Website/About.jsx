import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Globe, Zap, Laptop, Sparkles, Server, Smartphone, Database } from 'lucide-react';

const About = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef(null);

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
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50" data-animate>
      <div className="lg:w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`text-center mb-20 transform transition-all duration-1000 ${visibleSections.has('about') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-purple-500/30">
            <Sparkles className="w-4 h-4 text-blue-800" />
            <span className="text-blue-800 text-sm font-medium">About Our Company</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            We Build
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Digital </span>
            Excellence
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into powerful digital solutions that drive growth, 
            innovation, and success for businesses worldwide.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">

      
       
          <div className={`space-y-8 transform transition-all duration-1000 ${visibleSections.has('about') ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Innovating the Future of Technology
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                With over a decade of experience, we've been at the forefront of technological innovation, 
                helping businesses transform their operations and achieve unprecedented growth.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to bridge the gap between complex technology and business success, 
                providing solutions that are not just cutting-edge, but also practical and sustainable.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Globe className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-sm text-gray-600">Serving clients across 25+ countries</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Zap className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Average project completion in 6 weeks</p>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className={`relative transform transition-all duration-1000 ${visibleSections.has('about') ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 group">
                  <Laptop className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Web Development</h4>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 group">
                  <Server className="w-8 h-8 text-green-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Cloud Solutions</h4>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 group">
                  <Smartphone className="w-8 h-8 text-purple-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">Mobile Apps</h4>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 group">
                  <Database className="w-8 h-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Data Analytics</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;