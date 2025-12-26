import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaShareAlt, FaFilter } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedTech, setSelectedTech] = useState('all');

  const allTechnologies = [...new Set(projects.flatMap((p) => p.technologies))];

  const filteredProjects =
    selectedTech === 'all' ? projects : projects.filter((p) => p.technologies.includes(selectedTech));

  const shareProject = (project) => {
    const shareText = `Check out ${project.title} - ${project.description}`;
    const shareUrl = window.location.href;
    
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: shareText,
        url: shareUrl,
      });
    } else {
      alert('Share: ' + shareText);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text animate-slideUp">
            Projects
          </h1>
          <div className="w-20 h-1 gradient-btn rounded animate-slideUp" style={{ animationDelay: '0.1s' }}></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl animate-slideUp" style={{ animationDelay: '0.2s' }}>
            A collection of my recent work showcasing my skills and experience in full-stack development
          </p>
        </div>

        <div className="mb-12 animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-3 mb-4">
            <FaFilter className="text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Filter by Technology</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedTech('all')}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedTech === 'all'
                  ? 'gradient-btn text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-400'
              }`}
            >
              All Projects
            </button>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedTech === tech
                    ? 'gradient-btn text-white'
                    : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-400'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all animate-slideUp"
              style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="inline-block mb-3 px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-semibold">
                      Project {idx + 1}
                    </div>

                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                      {project.title}
                    </h2>

                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-800 transition cursor-pointer"
                            onClick={() => setSelectedTech(tech)}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, highlightIdx) => (
                          <li key={highlightIdx} className="flex items-start text-gray-700 dark:text-gray-300">
                            <FaArrowRight className="mr-2 mt-1 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition font-semibold"
                      >
                        <FaGithub /> GitHub
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2 gradient-btn text-white rounded-lg transition font-semibold hover:scale-105"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                      <button
                        onClick={() => shareProject(project)}
                        className="flex items-center gap-2 px-6 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition font-semibold"
                      >
                        <FaShareAlt /> Share
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-full h-80 rounded-lg shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              No projects found with that technology.
            </p>
            <button
              onClick={() => setSelectedTech('all')}
              className="px-6 py-2 gradient-btn text-white rounded-lg font-semibold transition-transform hover:scale-105"
            >
              View All Projects
            </button>
          </div>
        )}

        <div className="mt-20 p-8 bg-white dark:bg-gray-900 rounded-lg text-center animate-slideUp" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            More Projects Coming Soon
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I'm constantly working on new projects. Check back soon or follow me on GitHub for the latest updates.
          </p>
          <a
            href="https://github.com/Manpreet-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-btn text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            <FaGithub /> Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
