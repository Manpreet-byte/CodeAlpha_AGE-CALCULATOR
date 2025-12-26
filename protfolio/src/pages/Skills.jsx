import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const getCategoryIcon = (category) => {
    const icons = {
      languages: '📝',
      frameworks: '⚛️',
      tools: '🛠️',
      databases: '🗄️',
      competencies: '🎯',
    };
    return icons[category] || '💻';
  };

  const getCategoryLabel = (category) => {
    const labels = {
      languages: 'Languages',
      frameworks: 'Tools / Frameworks',
      tools: 'Tools / Frameworks',
      databases: 'Databases',
      competencies: 'Core Competencies',
    };
    return labels[category] || category;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text animate-slideUp">
            Skills & Expertise
          </h1>
          <div className="w-20 h-1 gradient-btn rounded animate-slideUp" style={{ animationDelay: '0.1s' }}></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Proficient in modern web technologies with hands-on experience in building full-stack applications
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, categorySkills], categoryIdx) => (
            <div key={category} className="animate-slideUp" style={{ animationDelay: `${0.3 + categoryIdx * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">{getCategoryIcon(category)}</span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {getCategoryLabel(category)}
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categorySkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-lg transition-shadow group"
                  >
                    <p className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
