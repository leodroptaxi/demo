import React, { useState, useEffect, useRef } from 'react';

const ITServicesWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('development');
  const [activeFaq, setActiveFaq] = useState(null);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const logosContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);

      // Animate logos based on scroll direction
      if (logosContainerRef.current) {
        const speed = 0.5;
        const translateX = scrollDirection === 'down' 
          ? -currentScrollY * speed 
          : -currentScrollY * speed;
        
        logosContainerRef.current.style.transform = `translateX(${translateX}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, scrollDirection]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = {
    development: [
      {
        title: 'Web Development',
        description: 'Custom web applications built with modern technologies',
        icon: '💻'
      },
      {
        title: 'Mobile Apps',
        description: 'iOS and Android applications for wider reach',
        icon: '📱'
      },
      {
        title: 'E-Commerce',
        description: 'Online stores with secure payment integration',
        icon: '🛒'
      }
    ],
    cloud: [
      {
        title: 'Cloud Migration',
        description: 'Seamless transition to cloud infrastructure',
        icon: '☁️'
      },
      {
        title: 'Server Management',
        description: '24/7 monitoring and maintenance of your servers',
        icon: '🖥️'
      },
      {
        title: 'Database Solutions',
        description: 'Scalable and secure database architectures',
        icon: '🗃️'
      }
    ],
    security: [
      {
        title: 'Security Audit',
        description: 'Comprehensive analysis of your security posture',
        icon: '🔍'
      },
      {
        title: 'Data Protection',
        description: 'Encryption and access control solutions',
        icon: '🔒'
      },
      {
        title: 'Compliance',
        description: 'Meet industry regulations and standards',
        icon: '📋'
      }
    ]
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechCorp',
      content: 'The team delivered our project ahead of schedule with exceptional quality. Their expertise in cloud solutions helped us scale efficiently.',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager at InnovateCo',
      content: 'Their development process is transparent and collaborative. We felt involved every step of the way.',
      avatar: '👨‍💼'
    },
    {
      name: 'Jessica Williams',
      role: 'Director at GlobalBank',
      content: 'The security solutions implemented have significantly reduced our vulnerability to threats. Highly recommended!',
      avatar: '👩‍💻'
    }
  ];

  // Team members data
  const teamMembers = [
    {
      name: 'Alex Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      description: 'Full-stack developer with 10+ years of experience in web technologies.'
    },
    {
      name: 'Sophia Williams',
      role: 'UX/UI Designer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      description: 'Creative designer focused on creating intuitive user experiences.'
    },
    {
      name: 'Marcus Johnson',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      description: 'Infrastructure expert specializing in cloud solutions and automation.'
    },
    {
      name: 'Elena Chen',
      role: 'Data Scientist',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      description: 'Data analytics professional with expertise in AI and machine learning.'
    }
  ];

  // Client logos data
  const clients = [
    { name: 'Google', logo: '🔍' },
    { name: 'Microsoft', logo: 'Ⓜ️' },
    { name: 'Amazon', logo: '📦' },
    { name: 'Netflix', logo: '🎬' },
    { name: 'Spotify', logo: '🎵' },
    { name: 'Airbnb', logo: '🏠' },
    { name: 'Tesla', logo: '⚡' },
    { name: 'Uber', logo: '🚗' },
    { name: 'Apple', logo: '🍎' },
    { name: 'Facebook', logo: '👍' },
    { name: 'Twitter', logo: '🐦' },
    { name: 'LinkedIn', logo: '💼' },
    { name: 'Instagram', logo: '📸' },
    { name: 'Slack', logo: '💬' },
    { name: 'Dropbox', logo: '📁' },
    { name: 'Adobe', logo: '🎨' },
    { name: 'Salesforce', logo: '☁️' },
    { name: 'Intel', logo: '🔌' },
    { name: 'IBM', logo: '💻' },
    { name: 'Samsung', logo: '📱' }
  ];

  // Duplicate the clients array to create a seamless loop
  const duplicatedClients = [...clients, ...clients];

  // Pricing data
  const pricingPlans = [
    {
      title: 'Starter',
      price: '$2,499',
      description: 'Perfect for small businesses and startups',
      features: ['Up to 5 pages', 'Basic SEO', '1 GB hosting', 'Email support'],
      recommended: false
    },
    {
      title: 'Professional',
      price: '$4,999',
      description: 'Ideal for growing businesses',
      features: ['Up to 15 pages', 'Advanced SEO', '5 GB hosting', 'Priority support', 'Basic analytics'],
      recommended: true
    },
    {
      title: 'Enterprise',
      price: '$9,999',
      description: 'For large organizations with complex needs',
      features: ['Unlimited pages', 'Premium SEO', '20 GB hosting', '24/7 support', 'Advanced analytics', 'SSL certificate'],
      recommended: false
    }
  ];

  // FAQ data
  const faqItems = [
    {
      question: 'How long does a typical project take?',
      answer: 'The timeline depends on the project complexity. A simple website can take 2-4 weeks, while a complex web application can take 3-6 months.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer various support packages to ensure your digital solutions continue to perform optimally after launch.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of technologies including React, Node.js, Python, AWS, and many others depending on project requirements.'
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We often collaborate with in-house teams to augment their capabilities and bring specialized expertise.'
    }
  ];

  // Blog data
  const blogPosts = [
    {
      title: 'The Future of Web Development in 2023',
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
      date: 'May 15, 2023',
      category: 'Development'
    },
    {
      title: 'How Cloud Computing is Transforming Businesses',
      excerpt: 'Understanding the impact of cloud technologies on modern business operations.',
      date: 'April 28, 2023',
      category: 'Cloud'
    },
    {
      title: 'Essential Cybersecurity Practices for Remote Work',
      excerpt: 'Key security measures every company should implement with a remote workforce.',
      date: 'March 12, 2023',
      category: 'Security'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 border-b border-gray-700">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              TechSolutions
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition-colors">Services</button>
            <button onClick={() => scrollToSection('team')} className="hover:text-blue-400 transition-colors">Our Team</button>
            <button onClick={() => scrollToSection('work')} className="hover:text-blue-400 transition-colors">Our Work</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-blue-400 transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors">Contact</button>
          </div>
          
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-md p-4 absolute w-full">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors py-2">Home</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition-colors py-2">Services</button>
              <button onClick={() => scrollToSection('team')} className="hover:text-blue-400 transition-colors py-2">Our Team</button>
              <button onClick={() => scrollToSection('work')} className="hover:text-blue-400 transition-colors py-2">Our Work</button>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-blue-400 transition-colors py-2">Pricing</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors py-2">About</button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors w-full">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block">Transform Your</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Business Digitally</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We provide cutting-edge IT solutions to help businesses thrive in the digital age. From development to security, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={() => scrollToSection('contact')} className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition-colors">
                Get Started
              </button>
              <button onClick={() => scrollToSection('services')} className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-medium transition-colors">
                Our Services
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
              <div className="relative bg-gray-800 p-6 rounded-xl shadow-2xl transform rotate-3">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
                <p className="text-gray-400">Let us help you accelerate your business growth</p>
              </div>
              <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-blue-500 rounded-xl opacity-50"></div>
              <div className="absolute -top-5 -right-5 w-16 h-16 bg-purple-500 rounded-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted By Industry Leaders</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We've had the privilege of working with some of the most innovative companies in the world.
            </p>
          </div>
          
          {/* Animated Logos Container */}
          <div className="overflow-hidden relative">
            <div 
              ref={logosContainerRef}
              className="flex whitespace-nowrap py-4"
            >
              {duplicatedClients.map((client, index) => (
                <div 
                  key={index} 
                  className="inline-flex justify-center items-center mx-8 bg-gray-800 rounded-2xl p-6 min-w-[180px] h-32 transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
                >
                  <div className="text-5xl">{client.logo}</div>
                  <span className="sr-only">{client.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll direction indicator */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center bg-gray-700 px-4 py-2 rounded-full">
              <span className="mr-2">Scroll direction:</span>
              <span className={`font-bold ${scrollDirection === 'down' ? 'text-green-400' : 'text-blue-400'}`}>
                {scrollDirection === 'down' ? 'Down → Logos moving right to left' : 'Up → Logos moving left to right'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a comprehensive range of IT services tailored to meet your business needs and drive growth.
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-gray-700 p-1 rounded-lg">
              {['development', 'cloud', 'security'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md transition-colors ${activeTab === tab ? 'bg-blue-500' : 'hover:bg-gray-600'}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services[activeTab].map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                <button className="mt-4 text-blue-400 hover:text-blue-300 flex items-center">
                  Learn more
                  <span className="ml-1">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Images */}
      <section id="team" className="py-20 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our talented professionals are dedicated to delivering exceptional solutions for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <div className="text-blue-400 mb-3">{member.role}</div>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                  <div className="flex mt-4 space-x-3">
                    <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <span className="text-sm">📱</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <span className="text-sm">✉️</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <span className="text-sm">🔗</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition-colors">
              View All Team Members
            </button>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Check out some of our recent projects and success stories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(item => (
              <div key={item} className="bg-gray-800 rounded-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-r from-blue-400/30 to-purple-500/30 flex items-center justify-center">
                  <div className="text-5xl">{item % 3 === 0 ? '📊' : item % 3 === 1 ? '🛠️' : '🔧'}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title {item}</h3>
                  <p className="text-gray-400 mb-4">Short description of the project and the solutions we provided.</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'AWS'].map((tech, i) => (
                      <span key={i} className="bg-gray-700 px-3 py-1 rounded-full text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that works best for your business needs. All plans include our standard quality guarantee.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gray-800 rounded-xl p-8 transform hover:-translate-y-2 transition-transform duration-300 ${plan.recommended ? 'border-2 border-blue-500 relative' : ''}`}>
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <div className="text-3xl font-bold mb-4 text-blue-400">{plan.price}</div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.recommended ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6">
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqItems.map((faq, index) => (
              <div key={index} className="mb-6 bg-gray-800 rounded-xl overflow-hidden">
                <button 
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  <span className="text-xl">{activeFaq === index ? '−' : '+'}</span>
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-6 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest trends and insights in technology and business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-r from-blue-400/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-5xl">{post.category === 'Development' ? '💻' : post.category === 'Cloud' ? '☁️' : '🔒'}</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-blue-400">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <button className="text-blue-400 hover:text-blue-300 flex items-center">
                    Read more
                    <span className="ml-1">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition-colors">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
              <p className="text-gray-300 mb-6">
                We are a team of passionate IT professionals dedicated to delivering exceptional solutions that drive business growth. With years of experience across various industries, we have the expertise to tackle even the most complex challenges.
              </p>
              <p className="text-gray-300 mb-8">
                Our mission is to empower businesses with technology that simplifies processes, enhances security, and creates new opportunities for innovation and growth.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition-colors">
                Learn More About Us
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-blue-500 rounded-2xl transform rotate-6"></div>
                <div className="w-64 h-64 bg-purple-500 rounded-2xl absolute top-6 left-6 -z-10 transform -rotate-3 flex items-center justify-center">
                  <div className="text-6xl">👥</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to transform your business? Contact us today for a free consultation.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input type="text" id="name" className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea id="message" rows="5" className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition-colors w-full">
                  Send Message
                </button>
              </form>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-gray-800 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <div className="font-bold">Address</div>
                      <div className="text-gray-400">123 Tech Street, San Francisco, CA 94103</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📞</div>
                    <div>
                      <div className="font-bold">Phone</div>
                      <div className="text-gray-400">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">✉️</div>
                    <div>
                      <div className="font-bold">Email</div>
                      <div className="text-gray-400">info@techsolutions.com</div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h4 className="font-bold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {['📘', '🐦', '📸', '💼'].map((icon, index) => (
                      <button key={index} className="bg-gray-700 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                        <span className="text-xl">{icon}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6 md:mb-0">
              TechSolutions
            </div>
            <div className="flex space-x-6">
              <button className="hover:text-blue-400 transition-colors">Privacy Policy</button>
              <button className="hover:text-blue-400 transition-colors">Terms of Service</button>
              <button className="hover:text-blue-400 transition-colors">FAQ</button>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-800">
            <p>© {new Date().getFullYear()} TechSolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ITServicesWebsite;