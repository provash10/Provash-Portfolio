import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "fas fa-laptop-code",
      skills: [
        { name: "HTML5", level: 95, icon: "fab fa-html5", color: "bg-orange-500" },
        { name: "CSS3", level: 90, icon: "fab fa-css3-alt", color: "bg-blue-500" },
        { name: "JavaScript", level: 88, icon: "fab fa-js-square", color: "bg-yellow-500" },
        { name: "React", level: 85, icon: "fab fa-react", color: "bg-cyan-500" },
        { name: "Tailwind CSS", level: 90, icon: "fas fa-wind", color: "bg-teal-500" },
        { name: "Bootstrap", level: 85, icon: "fab fa-bootstrap", color: "bg-purple-500" }
      ]
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      skills: [
        { name: "Node.js", level: 80, icon: "fab fa-node-js", color: "bg-green-600" },
        { name: "Express.js", level: 78, icon: "fas fa-code", color: "bg-gray-600" },
        { name: "PHP", level: 75, icon: "fab fa-php", color: "bg-indigo-600" },
        { name: "Laravel", level: 70, icon: "fab fa-laravel", color: "bg-red-500" }
      ]
    },
    {
      title: "Database",
      icon: "fas fa-database",
      skills: [
        { name: "MongoDB", level: 80, icon: "fas fa-leaf", color: "bg-green-500" },
        { name: "MySQL", level: 75, icon: "fas fa-database", color: "bg-blue-600" }
      ]
    },
    {
      title: "Tools & Others",
      icon: "fas fa-tools",
      skills: [
        { name: "Git", level: 85, icon: "fab fa-git-alt", color: "bg-orange-600" },
        { name: "GitHub", level: 85, icon: "fab fa-github", color: "bg-gray-800" },
        { name: "VS Code", level: 90, icon: "fas fa-code", color: "bg-blue-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-4 bg-gradient-to-br from-white via-slate-50 to-blue-50/50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-success rounded-full blur-3xl animate-pulse animation-delay-3000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">My Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-2"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-8 card-hover">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <i className={`${category.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <i className={`${skill.icon} text-xl mr-3 text-gray-700`}></i>
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `slideIn 1.5s ease-out ${skillIndex * 0.1}s both`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">What Makes Me Different</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Creativity combined with technical skills helps me build interfaces that are both beautiful and functional. 
              I focus on writing clean, maintainable code and creating exceptional user experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-paint-brush text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Creative Design</h4>
                <p className="text-sm opacity-90">Beautiful and intuitive user interfaces</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-code text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Clean Code</h4>
                <p className="text-sm opacity-90">Maintainable and scalable solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-rocket text-2xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Performance</h4>
                <p className="text-sm opacity-90">Fast and optimized applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;