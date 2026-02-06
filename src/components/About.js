import React, { useState, useEffect } from 'react';
import ProfileImage from './ProfileImage';
import profileImg from '../assets/images/profileImg (2).png';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: 'React', level: 90, color: 'from-blue-400 to-blue-600', icon: 'fab fa-react' },
    { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600', icon: 'fab fa-node-js' },
    { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-yellow-600', icon: 'fab fa-js-square' },
    { name: 'MongoDB', level: 80, color: 'from-green-500 to-emerald-600', icon: 'fas fa-database' }
  ];

  const achievements = [
    { number: '15+', label: 'Projects', icon: 'fas fa-code', delay: '0s' },
    { number: '8+', label: 'Technologies', icon: 'fas fa-tools', delay: '0.2s' },
    { number: '3+', label: 'Years Exp', icon: 'fas fa-calendar', delay: '0.4s' }
  ];
  return (
    <section id="about" className="py-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-success rounded-full blur-3xl animate-pulse animation-delay-6000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary/20 rounded-full animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 relative">
              About{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent animate-pulse">
                Me
              </span>
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 animate-scale-x animation-delay-500"></div>
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 animate-pulse"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            "Crafting digital experiences with{' '}
            <span className="text-primary font-semibold animate-pulse">passion</span>,{' '}
            <span className="text-accent font-semibold animate-pulse animation-delay-200">precision</span>, and{' '}
            <span className="text-success font-semibold animate-pulse animation-delay-400">purpose</span>"
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Left Column - Enhanced Profile Showcase */}
          <div className={`lg:col-span-2 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`}>
            <div className="sticky top-8">
              {/* Enhanced Profile Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
                {/* Enhanced Decorative Background Elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
                
                {/* Profile Image Section - No rotation */}
                <div className="relative mb-8">
                  <div className="relative mx-auto w-48 h-48">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-lg">
                      <ProfileImage 
                        src={profileImg}
                        alt="Provash Chandra Barman - Full Stack Developer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Enhanced Profile Info */}
                <div className="text-center relative z-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2 animate-fade-in-up">
                    Provash Chandra Barman
                  </h3>
                  <p className="text-xl text-primary font-semibold mb-3 animate-fade-in-up animation-delay-200">
                    Full Stack Developer
                  </p>
                  <p className="text-gray-600 mb-6 flex items-center justify-center animate-fade-in-up animation-delay-300">
                    <i className="fas fa-map-marker-alt mr-2 text-red-500 animate-pulse"></i>
                    Dhaka, Bangladesh
                  </p>

                  {/* Enhanced Achievement Stats with Animation */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className={`bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl p-4 text-center transform hover:scale-110 transition-all duration-300 animate-fade-in-up cursor-pointer group`}
                        style={{ animationDelay: achievement.delay }}
                      >
                        <div className="text-2xl font-bold text-primary mb-1 group-hover:animate-pulse">
                          {achievement.number}
                        </div>
                        <div className="text-xs text-primary/80 font-medium flex items-center justify-center">
                          <i className={`${achievement.icon} mr-1 group-hover:animate-bounce`}></i>
                          {achievement.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Quick Skills with Animation */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 animate-fade-in-up animation-delay-400">
                      Specializes In
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {['MERN Stack', 'Full Stack', 'Web Apps', 'API Design'].map((skill, index) => (
                        <span 
                          key={skill}
                          className={`px-3 py-1 bg-gradient-to-r text-white text-xs rounded-full font-medium transform hover:scale-110 transition-all duration-300 animate-fade-in-up cursor-pointer ${
                            index === 0 ? 'from-primary to-accent' :
                            index === 1 ? 'from-success to-emerald-500' :
                            index === 2 ? 'from-accent to-purple-600' :
                            'from-warning to-orange-500'
                          }`}
                          style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="space-y-3 mb-6">
                    <button
                      onClick={() => window.open('/resume.html', '_blank')}
                      className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center animate-fade-in-up animation-delay-600 group"
                    >
                      <i className="fas fa-download mr-2 group-hover:animate-bounce"></i>
                      Download Resume
                    </button>
                    <button
                      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                      className="w-full border-2 border-primary text-primary py-3 rounded-2xl font-semibold hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-700 group"
                    >
                      <i className="fas fa-envelope mr-2 group-hover:animate-bounce"></i>
                      Get In Touch
                    </button>
                  </div>

                  {/* Enhanced Social Links */}
                  <div className="flex justify-center space-x-3">
                    {[
                      { href: 'https://github.com/provash10', icon: 'fab fa-github', color: 'from-secondary to-dark', title: 'GitHub' },
                      { href: 'https://www.linkedin.com/in/provashchandrabarman/', icon: 'fab fa-linkedin', color: 'from-primary to-blue-700', title: 'LinkedIn' },
                      { href: 'mailto:provash20cb@gmail.com', icon: 'fas fa-envelope', color: 'from-danger to-red-600', title: 'Email' },
                      { href: 'https://wa.me/8801710490345', icon: 'fab fa-whatsapp', color: 'from-success to-green-600', title: 'WhatsApp' }
                    ].map((social, index) => (
                      <a
                        key={social.title}
                        href={social.href}
                        target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-${800 + index * 100} group`}
                        title={social.title}
                      >
                        <i className={`${social.icon} text-lg group-hover:animate-pulse`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Content Cards */}
          <div className={`lg:col-span-3 space-y-6 transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`}>
            {/* Enhanced Professional Summary */}
            <div className={`bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl ${activeCard === 0 ? 'ring-4 ring-primary/20' : ''}`}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full -translate-y-12 translate-x-12 animate-pulse"></div>
              <div className="flex items-center mb-6 animate-fade-in-up">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mr-4 animate-bounce">
                  <i className="fas fa-rocket text-white text-lg animate-pulse"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Professional Journey</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in-up animation-delay-200">
                I am <strong className="text-primary animate-pulse">Provash Chandra Barman</strong>, a dedicated Full Stack Web Developer 
                specializing in the <strong className="text-accent animate-pulse animation-delay-300">MERN Stack</strong>. With a passion for creating 
                scalable, user-centric applications, I transform complex business requirements 
                into elegant digital solutions that drive results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400 group">
                  <i className="fas fa-code text-primary text-xl mr-3 group-hover:animate-bounce"></i>
                  <span className="font-medium text-gray-800">Clean Code Advocate</span>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-500 group">
                  <i className="fas fa-lightbulb text-yellow-500 text-xl mr-3 group-hover:animate-bounce"></i>
                  <span className="font-medium text-gray-800">Problem Solver</span>
                </div>
              </div>
            </div>



            {/* Enhanced Vision & Goals */}
            <div className={`bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl ${activeCard === 2 ? 'ring-4 ring-purple-200' : ''}`}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full -translate-y-12 translate-x-12 animate-pulse animation-delay-2000"></div>
              <div className="flex items-center mb-6 animate-fade-in-up animation-delay-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 animate-bounce animation-delay-1000">
                  <i className="fas fa-target text-white text-lg animate-pulse"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vision & Goals</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 animate-fade-in-up animation-delay-500">
                My goal is to contribute to innovative projects that make a meaningful impact. 
                I'm committed to <span className="text-purple-500 font-semibold animate-pulse">continuous learning</span>, staying current with emerging technologies, 
                and delivering <span className="text-pink-500 font-semibold animate-pulse animation-delay-300">high-quality solutions</span> that exceed expectations.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-700">
                <div className="flex items-center">
                  <i className="fas fa-quote-left text-primary text-2xl mr-4 animate-pulse"></i>
                  <p className="text-lg font-medium text-gray-800 italic animate-fade-in-up animation-delay-800">
                    "Passionate about learning, developing, and delivering excellence in every project."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Core Values Section */}
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up animation-delay-800' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Core <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Values</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 animate-pulse"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              The principles that guide my work and professional relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'fas fa-rocket',
                title: 'Innovation',
                description: 'Constantly exploring new technologies and methodologies to deliver cutting-edge solutions that push boundaries and create value.',
                gradient: 'from-primary to-accent',
                delay: '0s'
              },
              {
                icon: 'fas fa-handshake',
                title: 'Collaboration',
                description: 'Building strong partnerships with teams and clients through clear communication, mutual respect, and shared commitment to success.',
                gradient: 'from-success to-emerald-600',
                delay: '0.2s'
              },
              {
                icon: 'fas fa-medal',
                title: 'Excellence',
                description: 'Committed to delivering high-quality code and exceptional user experiences that exceed expectations and set new industry standards.',
                gradient: 'from-warning to-orange-500',
                delay: '0.4s'
              }
            ].map((value, index) => (
              <div 
                key={value.title}
                className={`text-center group transform hover:scale-105 transition-all duration-500 animate-fade-in-up`}
                style={{ animationDelay: value.delay }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 animate-float shadow-lg group-hover:shadow-2xl cursor-pointer`}>
                  <i className={`${value.icon} text-white text-2xl group-hover:animate-bounce`}></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {value.description}
                </p>
                
                {/* Animated progress indicator */}
                <div className="mt-4 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                  <div 
                    className={`h-1 bg-gradient-to-r ${value.gradient} rounded-full transition-all duration-2000 ease-out`}
                    style={{ 
                      width: isVisible ? '100%' : '0%',
                      animationDelay: `${1.5 + index * 0.3}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Interactive Elements */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-purple-500/10 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 animate-fade-in-up animation-delay-1000">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 animate-pulse">
                Let's Build Something Amazing Together!
              </h4>
              <p className="text-gray-600 mb-6 animate-fade-in-up animation-delay-1200">
                Ready to turn your ideas into reality? I'm here to help you create exceptional digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-1400 group"
                >
                  <i className="fas fa-rocket mr-2 group-hover:animate-bounce"></i>
                  Start a Project
                </button>
                <button
                  onClick={() => window.open('/resume.html', '_blank')}
                  className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-1600 group"
                >
                  <i className="fas fa-user mr-2 group-hover:animate-bounce"></i>
                  View Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
