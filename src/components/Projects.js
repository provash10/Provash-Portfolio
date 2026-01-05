import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
  const navigate = useNavigate();

  const handleViewMore = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="py-12 bg-gradient-to-br from-slate-100/50 via-gray-50 to-purple-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-2"></div>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-primary px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
                    >
                      <i className="fab fa-github mr-2"></i>
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.shortDescription}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleViewMore(project.id)}
                    className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-info-circle mr-2"></i>
                    View Details
                  </button>
                  
                  <div className="flex space-x-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                      title="Live Demo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                      title="GitHub Repository"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Projects Button */}
        {projects.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => {
                // You can implement a "View All Projects" page or expand the grid
                alert('More projects coming soon!');
              }}
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              View All Projects
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Working Together?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;