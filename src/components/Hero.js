import React, { useState, useEffect } from 'react';
import ProfileImage from './ProfileImage';
// Import your profile image
import profileImg from '../assets/images/profileImg (1).png';

const Hero = () => {
  // Animated titles with colors
  const titles = [
    { text: 'Full Stack Web Developer !!!', gradient: 'from-yellow-300 to-orange-400' },
    { text: 'MERN Stack Developer !!!', gradient: 'from-green-300 to-emerald-400' }, 
    { text: 'Frontend Developer !!', gradient: 'from-blue-300 to-cyan-400' }
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsAnimating(false);
      }, 500); // Half second for fade out, then change text
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  const handleResumeDownload = () => {
    // Open resume in new tab for now (since we have HTML version)
    window.open('/resume.html', '_blank');
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-primary via-blue-600 to-accent flex items-center justify-center relative overflow-hidden pt-24 pb-16">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Row - Content Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[10vh] py-2">
          {/* Left Side - Content */}
          <div className="text-left animate-slide-in-left">
            {/* Main Content */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 animate-fade-in-up">
              Hi, I'm <span className="text-yellow-300 animate-pulse">Provash!</span>
            </h1>
            
            <h2 className={`text-xl md:text-3xl font-semibold text-white/90 mb-2 animate-fade-in-up animation-delay-200 transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}>
              <span className={`bg-gradient-to-r ${titles[currentTitleIndex].gradient} bg-clip-text text-transparent font-bold`}>
                {titles[currentTitleIndex].text}
              </span>
            </h2>
            
            <p className="text-lg text-white/80 mb-2 mt-4 leading-relaxed animate-fade-in-up animation-delay-400">
              Passionate about learning, developing, and delivering excellence. 
              I specialize in MERN Stack development and love building real-world applications.
            </p>

            {/* Location */}
            <p className="text-white/70 mb-4 animate-fade-in-up animation-delay-500">
              <i className="fas fa-map-marker-alt mr-2"></i>
              Dhaka, Bangladesh
            </p>

            {/* Action Buttons and Social Links */}
            <div className="animate-fade-in-up animation-delay-600">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                 <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleResumeDownload}
                      className="bg-white text-primary px-6 py-2 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center transform hover:shadow-lg text-sm"
                    >
                      <i className="fas fa-download"></i>
                      Download Resume
                    </button>
                    
                    <button
                      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                      className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 transform hover:shadow-lg text-sm"
                    >
                      Get In Touch
                    </button>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/provash10"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 hover:scale-125 transition-all duration-300 transform hover:shadow-lg border border-white/30"
                      title="GitHub"
                    >
                      <i className="fab fa-github text-lg"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/provashchandrabarman/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:scale-125 transition-all duration-300 transform hover:shadow-lg border border-white/30"
                      title="LinkedIn"
                    >
                      <i className="fab fa-linkedin text-lg"></i>
                    </a>
                    <a
                      href="mailto:provash20cb@gmail.com"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 hover:scale-125 transition-all duration-300 transform hover:shadow-lg border border-white/30"
                      title="Email"
                    >
                      <i className="fas fa-envelope text-lg"></i>
                    </a>
                    <a
                      href="https://wa.me/8801710490345"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-green-500 hover:scale-125 transition-all duration-300 transform hover:shadow-lg border border-white/30"
                      title="WhatsApp"
                    >
                      <i className="fab fa-whatsapp text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Main Profile Container */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center animate-float overflow-hidden">
                <div className="w-72 h-72 lg:w-88 lg:h-88 animate-pulse-slow">
                  <ProfileImage 
                    src={profileImg}
                    alt="Provash Chandra Barman"
                    className="w-full h-full"
                  />
                </div>
              </div>
              
              {/* Decorative Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80 animate-bounce animation-delay-1000"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-pink-400 rounded-full opacity-60 animate-bounce animation-delay-2000"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-blue-400 rounded-full opacity-70 animate-bounce animation-delay-1500"></div>
              
              {/* Rotating Ring */}
              <div className="absolute inset-0 border-2 border-dashed border-white/40 rounded-full animate-spin-slow"></div>
              
              {/* Tech Icons Floating Around */}
              <div className="absolute top-8 right-8 text-white animate-float animation-delay-500">
                <i className="fab fa-react text-2xl opacity-80"></i>
              </div>
              <div className="absolute bottom-12 left-8 text-white animate-float animation-delay-1000">
                <i className="fab fa-node-js text-2xl opacity-80"></i>
              </div>
              <div className="absolute top-1/2 right-0 text-white animate-float animation-delay-1500">
                <i className="fab fa-js-square text-2xl opacity-80"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;