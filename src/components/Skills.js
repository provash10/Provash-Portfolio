import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: "fas fa-code",
      iconColor: "text-cyan-400",
      borderColor: "border-cyan-500/50",
      glowColor: "shadow-cyan-500/20",
      skills: [
        { 
          name: "React", 
          level: 90, 
          icon: "fab fa-react", 
          color: "from-cyan-400 to-blue-500",
          bgColor: "bg-cyan-500/10"
        },
        { 
          name: "JavaScript", 
          level: 90, 
          icon: "fab fa-js-square", 
          color: "from-yellow-400 to-orange-500",
          bgColor: "bg-yellow-500/10"
        },
        { 
          name: "Tailwind", 
          level: 95, 
          icon: "fas fa-wind", 
          color: "from-cyan-300 to-teal-500",
          bgColor: "bg-cyan-500/10"
        },
        { 
          name: "HTML/CSS", 
          level: 88, 
          icon: "fab fa-html5", 
          color: "from-orange-400 to-red-500",
          bgColor: "bg-orange-500/10"
        }
      ]
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      iconColor: "text-green-400",
      borderColor: "border-green-500/50",
      glowColor: "shadow-green-500/20",
      skills: [
        { 
          name: "Node.js", 
          level: 88, 
          icon: "fab fa-node-js", 
          color: "from-green-400 to-emerald-500",
          bgColor: "bg-green-500/10"
        },
        { 
          name: "MongoDB", 
          level: 90, 
          icon: "fas fa-leaf", 
          color: "from-green-400 to-green-600",
          bgColor: "bg-green-500/10"
        },
        { 
          name: "Express.js", 
          level: 88, 
          icon: "fas fa-code", 
          color: "from-gray-400 to-gray-600",
          bgColor: "bg-gray-500/10"
        },
        { 
          name: "Rest Api", 
          level: 90, 
          icon: "fas fa-plug", 
          color: "from-green-300 to-green-500",
          bgColor: "bg-green-500/10"
        }
      ]
    },
    {
      title: "Tools",
      icon: "fas fa-tools",
      iconColor: "text-orange-400",
      borderColor: "border-orange-500/50",
      glowColor: "shadow-orange-500/20",
      skills: [
        { 
          name: "Git", 
          level: 90, 
          icon: "fab fa-git-alt", 
          color: "from-red-400 to-red-600",
          bgColor: "bg-red-500/10"
        },
        { 
          name: "VS Code", 
          level: 93, 
          icon: "fas fa-code", 
          color: "from-blue-400 to-blue-600",
          bgColor: "bg-blue-500/10"
        },
        { 
          name: "Figma", 
          level: 95, 
          icon: "fab fa-figma", 
          color: "from-purple-400 to-pink-500",
          bgColor: "bg-purple-500/10"
        },
        { 
          name: "Postman", 
          level: 90, 
          icon: "fas fa-paper-plane", 
          color: "from-orange-400 to-red-500",
          bgColor: "bg-orange-500/10"
        }
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-12 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500 rounded-full blur-3xl animate-pulse animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse animation-delay-5000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-orange-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-green-400 to-orange-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </div>

        {/* Skills Grid - 4 boxes per row */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          {skillCategories.flatMap(category => 
            category.skills.map((skill, index) => (
              <div 
                key={`${category.title}-${skill.name}`}
                className={`${skill.bgColor} rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:scale-105 group cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="mb-4">
                    <i className={`${skill.icon} text-4xl text-gray-300 group-hover:text-white transition-colors duration-300`}></i>
                  </div>
                  <h4 className="font-semibold text-lg text-gray-200 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </h4>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom Section */}
        <div className={`mt-16 text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in-up animation-delay-800' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
            <h4 className="text-3xl font-bold text-white mb-4">
              Ready to Build Something <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Amazing</span>?
            </h4>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Let's collaborate and turn your ideas into reality with modern technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 group"
              >
                <i className="fas fa-rocket mr-2 group-hover:animate-bounce"></i>
                Start Project
              </button>
              <button
                onClick={() => window.open('/resume.html', '_blank')}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 hover:scale-105 transition-all duration-300 group"
              >
                <i className="fas fa-download mr-2 group-hover:animate-bounce"></i>
                View Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;