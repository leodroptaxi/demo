import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Phone, Mail, MapPin } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 I'm your virtual assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState('');
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced bot responses with more comprehensive coverage
  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon')) {
      return "Hello there! 😊 Welcome to our website. I'm here to help you learn more about our services and answer any questions you might have. What would you like to know?";
    }
    
    // Name introduction
    if (message.includes('my name is') || message.includes('i am') || message.includes('call me')) {
      const nameMatch = message.match(/(?:my name is|i am|call me) ([a-zA-Z]+)/);
      if (nameMatch) {
        setUserName(nameMatch[1]);
        return `Nice to meet you, ${nameMatch[1]}! 🤝 How can I assist you today?`;
      }
    }
    
    // Services related queries
    if (message.includes('service') || message.includes('what do you do') || message.includes('what do you offer')) {
      return "We offer a comprehensive range of digital services including:\n\n🔸 Web Development (React, Node.js, PHP)\n🔸 Mobile App Development (iOS & Android)\n🔸 UI/UX Design\n🔸 Digital Marketing & SEO\n🔸 E-commerce Solutions\n🔸 Custom Software Development\n\nWhich service interests you the most?";
    }
    
    // Web development
    if (message.includes('web development') || message.includes('website') || message.includes('web design')) {
      return "Our web development team specializes in creating modern, responsive websites using the latest technologies like React, Node.js, and more. We build:\n\n✅ Corporate websites\n✅ E-commerce platforms\n✅ Web applications\n✅ Landing pages\n✅ CMS solutions\n\nWould you like to discuss your web project requirements?";
    }
    
    // Mobile app development
    if (message.includes('mobile app') || message.includes('app development') || message.includes('ios') || message.includes('android')) {
      return "We develop high-quality mobile applications for both iOS and Android platforms! Our mobile solutions include:\n\n📱 Native iOS & Android apps\n📱 Cross-platform development\n📱 UI/UX design for mobile\n📱 App store optimization\n📱 Maintenance & support\n\nDo you have a mobile app idea you'd like to discuss?";
    }
    
    // Pricing inquiries
    if (message.includes('price') || message.includes('cost') || message.includes('pricing') || message.includes('budget') || message.includes('how much')) {
      return "Our pricing varies based on project complexity and requirements. We offer:\n\n💰 Competitive rates\n💰 Flexible payment plans\n💰 Free initial consultation\n💰 Detailed project estimates\n\nI'd recommend scheduling a free consultation where we can discuss your specific needs and provide a customized quote. Would you like me to help you get in touch with our team?";
    }
    
    // Contact information
    if (message.includes('contact') || message.includes('reach') || message.includes('phone') || message.includes('email') || message.includes('address')) {
      return "Here's how you can reach us:\n\n📞 Phone: +1 (555) 123-4567\n📧 Email: info@yourcompany.com\n📍 Address: 123 Business St, City, State 12345\n\nYou can also fill out our contact form on the website, and our team will get back to you within 24 hours. Would you like me to help you with anything specific?";
    }
    
    // Team and company info
    if (message.includes('team') || message.includes('about') || message.includes('company') || message.includes('who are you')) {
      return "We're a passionate team of 25+ skilled professionals including developers, designers, project managers, and digital strategists. Our team has:\n\n👥 5+ years average experience\n👥 Expertise in latest technologies\n👥 Proven track record with 200+ projects\n👥 Commitment to quality and innovation\n\nCheck out our About and Team sections to meet our amazing crew!";
    }
    
    // Portfolio and projects
    if (message.includes('portfolio') || message.includes('work') || message.includes('projects') || message.includes('examples')) {
      return "We're proud of our diverse portfolio! We've completed 200+ successful projects including:\n\n🏆 E-commerce platforms\n🏆 Corporate websites\n🏆 Mobile applications\n🏆 SaaS solutions\n🏆 Marketing campaigns\n\nYou can view detailed case studies and examples in our Projects section. Would you like to know about any specific type of project?";
    }
    
    // Technologies
    if (message.includes('technology') || message.includes('tech stack') || message.includes('programming') || message.includes('languages')) {
      return "We work with cutting-edge technologies:\n\n🔧 Frontend: React, Vue.js, Angular, HTML5, CSS3\n🔧 Backend: Node.js, Python, PHP, Java\n🔧 Mobile: React Native, Flutter, Swift, Kotlin\n🔧 Database: MongoDB, MySQL, PostgreSQL\n🔧 Cloud: AWS, Google Cloud, Azure\n\nWhat technology are you most interested in?";
    }
    
    // Process and methodology
    if (message.includes('process') || message.includes('how do you work') || message.includes('methodology') || message.includes('timeline')) {
      return "Our proven development process ensures success:\n\n1️⃣ Discovery & Planning\n2️⃣ Design & Wireframing\n3️⃣ Development & Testing\n4️⃣ Review & Feedback\n5️⃣ Launch & Support\n\nTypical project timelines range from 4-16 weeks depending on complexity. We keep you updated throughout the entire process!";
    }
    
    // Support and maintenance
    if (message.includes('support') || message.includes('maintenance') || message.includes('help') || message.includes('assistance')) {
      return "We provide comprehensive support services:\n\n🛠️ 24/7 technical support\n🛠️ Regular updates & maintenance\n🛠️ Performance monitoring\n🛠️ Security updates\n🛠️ Content management\n\nOur support doesn't end at launch - we're here for the long term!";
    }
    
    // Consultation and next steps
    if (message.includes('consultation') || message.includes('meeting') || message.includes('discuss') || message.includes('next step')) {
      return "Great! I'd love to help you take the next step. Here's what we can do:\n\n📅 Schedule a free 30-minute consultation\n📋 Discuss your project requirements\n📊 Get a detailed project proposal\n📞 Connect you with our project manager\n\nWould you like me to help you schedule a consultation call?";
    }
    
    // Gratitude responses
    if (message.includes('thank') || message.includes('thanks') || message.includes('appreciate')) {
      const response = userName ? 
        `You're very welcome, ${userName}! 😊 I'm happy I could help.` : 
        "You're very welcome! 😊 I'm happy I could help.";
      return `${response} Is there anything else you'd like to know about our services?`;
    }
    
    // Goodbye responses
    if (message.includes('bye') || message.includes('goodbye') || message.includes('see you') || message.includes('talk later')) {
      const response = userName ? 
        `Goodbye, ${userName}! 👋` : 
        "Goodbye! 👋";
      return `${response} Thanks for visiting our website. Feel free to reach out anytime you need assistance. Have a great day!`;
    }
    
    // Default helpful response
    return "That's a great question! While I'd love to give you a detailed answer, I think our team would be better equipped to help you with the specifics. Here are a few options:\n\n💬 Continue chatting with me for general questions\n📞 Call us for immediate assistance\n📧 Send us an email for detailed inquiries\n📝 Fill out our contact form\n\nWhat would work best for you?";
  };

  const handleSendMessage = (e) => {
    e.preventDefault?.();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, Math.random() * 1000 + 1000); // Random delay between 1-2 seconds
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Quick action buttons
  const quickActions = [
    { text: "Our Services", action: "What services do you offer?" },
    { text: "Get Quote", action: "I'd like to get a pricing quote" },
    { text: "Contact Info", action: "How can I contact you?" },
    { text: "View Portfolio", action: "Show me your portfolio" }
  ];

  const handleQuickAction = (action) => {
    setInputMessage(action);
    // Trigger send message
    setTimeout(() => {
      const event = { preventDefault: () => {} };
      handleSendMessage(event);
    }, 100);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 relative group"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
          
          {/* Notification dot */}
          {!isOpen && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
              1
            </div>
          )}
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {isOpen ? 'Close Chat' : 'Need Help? Chat with us!'}
          </div>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200 transform transition-all duration-300 scale-100 opacity-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">AI Assistant</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-sm opacity-90">Online now</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                    : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-600'
                }`}>
                  {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                
                <div className={`max-w-xs ${message.sender === 'user' ? 'text-right' : ''}`}>
                  <div className={`inline-block p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-sm shadow-lg'
                      : 'bg-white text-gray-800 rounded-bl-sm shadow-md border border-gray-100'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 px-1">
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-bl-sm shadow-md border border-gray-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions (show only at the start) */}
            {messages.length <= 1 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 text-center">Quick actions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action.action)}
                      className="p-2 text-xs bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200 border border-blue-200"
                    >
                      {action.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(e)}
                placeholder="Type your message..."
                className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              We typically reply in a few minutes
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;