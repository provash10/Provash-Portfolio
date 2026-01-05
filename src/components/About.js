import React from 'react';
import ProfileImage from './ProfileImage';
import profileImg from '../assets/images/profileImg (2).png';

const About = () => {
  return (
    <section id="about" className="py-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-success rounded-full blur-3xl animate-pulse animation-delay-6000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-2"></div>
          <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            "Crafting digital experiences with passion, precision, and purpose"
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Left Column - Profile Showcase */}
          <div className="lg:col-span-2 animate-slide-in-left">
            <div className="sticky top-8">
              {/* Profile Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
                
                {/* Profile Image Section */}
                <div className="relative mb-8">
                  <div className="relative mx-auto w-64 h-64">
                    {/* Animated Border Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-purple-500 animate-spin-slow p-1">
                      <div className="w-full h-full rounded-full bg-white p-2">
                        <div className="w-full h-full rounded-full overflow-hidden animate-float">
                          <ProfileImage 
                            src={profileImg}
                            alt="Provash Chandra Barman - Full Stack Developer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Tech Badges */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg animate-bounce animation-delay-1000">
                      <i className="fab fa-react text-white text-2xl"></i>
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg animate-bounce animation-delay-1500">
                      <i className="fab fa-node-js text-white text-2xl"></i>
                    </div>
                    <div className="absolute top-1/2 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce animation-delay-2000">
                      <i className="fab fa-js-square text-white text-lg"></i>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="absolute top-4 right-4 flex items-center bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      Available
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="text-center relative z-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Provash Chandra Barman</h3>
                  <p className="text-xl text-primary font-semibold mb-3">Full Stack Developer</p>
                  <p className="text-gray-600 mb-6 flex items-center justify-center">
                    <i className="fas fa-map-marker-alt mr-2 text-red-500"></i>
                    Dhaka, Bangladesh
                  </p>

                  {/* Achievement Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">10+</div>
                      <div className="text-xs text-primary/80 font-medium">Projects</div>
                    </div>
                    <div className="bg-gradient-to-br from-success/10 to-success/20 rounded-2xl p-4 text-center">
                      <div className="text-2xl font-bold text-success mb-1">5+</div>
                      <div className="text-xs text-success/80 font-medium">Technologies</div>
                    </div>
                    <div className="bg-gradient-to-br from-accent/10 to-accent/20 rounded-2xl p-4 text-center">
                      <div className="text-2xl font-bold text-accent mb-1">2+</div>
                      <div className="text-xs text-accent/80 font-medium">Years Exp</div>
                    </div>
                  </div>

                  {/* Quick Skills */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Specializes In</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs rounded-full font-medium">MERN Stack</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-success to-emerald-500 text-white text-xs rounded-full font-medium">Full Stack</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-accent to-purple-600 text-white text-xs rounded-full font-medium">Web Apps</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-warning to-orange-500 text-white text-xs rounded-full font-medium">API Design</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 mb-6">
                    <button
                      onClick={() => {
                        alert('Resume download functionality will be implemented when your resume is ready!');
                      }}
                      className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                    >
                      <i className="fas fa-download mr-2"></i>
                      Download Resume
                    </button>
                    <button
                      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                      className="w-full border-2 border-primary text-primary py-3 rounded-2xl font-semibold hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
                    >
                      <i className="fas fa-envelope mr-2"></i>
                      Get In Touch
                    </button>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <a
                      href="https://github.com/provash10"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-secondary to-dark rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
                      title="GitHub"
                    >
                      <i className="fab fa-github text-lg"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/provashchandrabarman/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-primary to-blue-700 rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
                      title="LinkedIn"
                    >
                      <i className="fab fa-linkedin text-lg"></i>
                    </a>
                    <a
                      href="mailto:provash20cb@gmail.com"
                      className="w-12 h-12 bg-gradient-to-br from-danger to-red-600 rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
                      title="Email"
                    >
                      <i className="fas fa-envelope text-lg"></i>
                    </a>
                    <a
                      href="https://wa.me/8801710490345"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-success to-green-600 rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
                      title="WhatsApp"
                    >
                      <i className="fab fa-whatsapp text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content Cards */}
          <div className="lg:col-span-3 space-y-6 animate-slide-in-right">
            {/* Professional Summary */}
            <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full -translate-y-12 translate-x-12"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mr-4">
                  <i className="fas fa-rocket text-white text-lg"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Professional Journey</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I am <strong>Provash Chandra Barman</strong>, a dedicated Full Stack Web Developer 
                specializing in the <strong>MERN Stack</strong>. With a passion for creating 
                scalable, user-centric applications, I transform complex business requirements 
                into elegant digital solutions that drive results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-2xl">
                  <i className="fas fa-code text-primary text-xl mr-3"></i>
                  <span className="font-medium text-gray-800">Clean Code Advocate</span>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-2xl">
                  <i className="fas fa-lightbulb text-yellow-500 text-xl mr-3"></i>
                  <span className="font-medium text-gray-800">Problem Solver</span>
                </div>
              </div>
            </div>

            {/* Technical Expertise */}
            <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-full -translate-y-12 translate-x-12"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                  <i className="fas fa-cogs text-white text-lg"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Technical Expertise</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                My technical journey encompasses modern web development practices, from crafting 
                responsive frontends with React and Tailwind CSS to building robust backend 
                systems with Node.js and Express. I excel in database design, API development, 
                and implementing secure authentication systems.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-2xl">
                  <i className="fab fa-react text-blue-500 text-2xl mb-2"></i>
                  <div className="font-medium text-gray-800">Frontend</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-2xl">
                  <i className="fas fa-server text-green-500 text-2xl mb-2"></i>
                  <div className="font-medium text-gray-800">Backend</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-2xl">
                  <i className="fas fa-database text-purple-500 text-2xl mb-2"></i>
                  <div className="font-medium text-gray-800">Database</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-2xl">
                  <i className="fas fa-tools text-orange-500 text-2xl mb-2"></i>
                  <div className="font-medium text-gray-800">DevTools</div>
                </div>
              </div>
            </div>

            {/* Vision & Goals */}
            <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full -translate-y-12 translate-x-12"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                  <i className="fas fa-target text-white text-lg"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vision & Goals</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                My goal is to contribute to innovative projects that make a meaningful impact. 
                I'm committed to continuous learning, staying current with emerging technologies, 
                and delivering high-quality solutions that exceed expectations.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6">
                <div className="flex items-center">
                  <i className="fas fa-quote-left text-primary text-2xl mr-4"></i>
                  <p className="text-lg font-medium text-gray-800 italic">
                    "Passionate about learning, developing, and delivering excellence in every project."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="animate-fade-in-up animation-delay-800">
          <div className="text-center mb-4">
            <h3 className="text-3xl font-bold text-gray-900">Core Values</h3>
            <p className="text-md text-gray-600 max-w-2xl mx-auto">
              The principles that guide my work and professional relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 animate-float">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Innovation</h4>
              <p className="text-gray-600 leading-relaxed">
                Constantly exploring new technologies and methodologies to deliver 
                cutting-edge solutions that push boundaries and create value.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-success to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 animate-float animation-delay-500">
                <i className="fas fa-handshake text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Collaboration</h4>
              <p className="text-gray-600 leading-relaxed">
                Building strong partnerships with teams and clients through clear 
                communication, mutual respect, and shared commitment to success.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-warning to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 animate-float animation-delay-1000">
                <i className="fas fa-medal text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Excellence</h4>
              <p className="text-gray-600 leading-relaxed">
                Committed to delivering high-quality code and exceptional user 
                experiences that exceed expectations and set new industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;