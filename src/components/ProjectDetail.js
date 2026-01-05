import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-primary hover:text-blue-700 transition-colors duration-300"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Portfolio
          </button>
        </div>
      </div>

      {/* Project Hero */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.name}</h1>
            <p className="text-xl max-w-2xl mx-auto">{project.shortDescription}</p>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{project.fullDescription}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenges Faced</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="fas fa-exclamation text-red-500 text-sm"></i>
                    </div>
                    <p className="text-gray-700">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Improvements */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Future Improvements</h2>
              <div className="space-y-4">
                {project.improvements.map((improvement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="fas fa-lightbulb text-blue-500 text-sm"></i>
                    </div>
                    <p className="text-gray-700">{improvement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Links</h3>
              <div className="space-y-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300"
                >
                  <i className="fab fa-github mr-2"></i>
                  GitHub Repository
                </a>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-2 bg-primary/10 text-primary text-sm rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Like This Project?</h3>
              <p className="text-white/90 mb-4">
                Let's discuss how I can help bring your ideas to life!
              </p>
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full bg-white text-primary py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((otherProject) => (
                <div 
                  key={otherProject.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer card-hover"
                  onClick={() => navigate(`/project/${otherProject.id}`)}
                >
                  <img 
                    src={otherProject.image} 
                    alt={otherProject.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">{otherProject.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{otherProject.shortDescription}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;