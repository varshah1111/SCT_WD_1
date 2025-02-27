import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Briefcase, Mail, ChevronDown } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white text-gray-900 shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-indigo-600' : 'text-white'
              }`}>
                ByteBridge
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Home', icon: <Home size={18} /> },
                { name: 'About', icon: <Info size={18} /> },
                { name: 'Services', icon: <ChevronDown size={18} /> },
                { name: 'Portfolio', icon: <Briefcase size={18} /> },
                { name: 'Contact', icon: <Mail size={18} /> },
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className={`flex items-center gap-1 font-medium transition-all duration-300 hover:text-indigo-400 relative group ${
                    scrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item.icon}
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-indigo-600' : 'bg-indigo-400'
                  }`}></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen 
              ? 'max-h-screen opacity-100 py-4' 
              : 'max-h-0 opacity-0'
          } ${scrolled ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              {[
                { name: 'Home', icon: <Home size={18} /> },
                { name: 'About', icon: <Info size={18} /> },
                { name: 'Services', icon: <ChevronDown size={18} /> },
                { name: 'Portfolio', icon: <Briefcase size={18} /> },
                { name: 'Contact', icon: <Mail size={18} /> },
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className={`flex items-center gap-2 py-2 px-4 rounded-md transition-all duration-300 ${
                    scrolled 
                      ? 'hover:bg-gray-100 hover:text-indigo-600' 
                      : 'hover:bg-gray-800 hover:text-indigo-400'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              RESPONSIVE<br />LANDING PAGE
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get work done faster and better with us
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-medium transition-colors duration-300">
                Get Started
              </button>
              <button className="px-6 py-3 border border-white hover:bg-white hover:text-gray-900 rounded-md font-medium transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-80 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center">
              <p className="text-2xl font-bold">Interactive UI</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-700 p-6 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-indigo-500 rounded-full mb-4 flex items-center justify-center">
                  <span className="font-bold">{item}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Our Mission & Vision {item}</h3>
                <p className="text-gray-300">
                  We aim to revolutionize the way businesses interact with technology, making innovation accessible to everyone.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3,4].map((item) => (
              <div key={item} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3">Web & App Development {item}</h3>
                <p className="text-gray-300 mb-4">
                  Custom website design & development
Mobile app development (iOS & Android)
E-commerce solutions (Shopify, WooCommerce, etc.)
UI/UX design & prototyping
                </p>
                <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium">Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-medium transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-400">© 2025 HORIZON. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;