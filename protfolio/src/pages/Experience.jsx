import { FaBriefcase, FaCalendar, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      title: 'Member - Certificate',
      organization: 'Training and Placement Cell',
      type: 'experience',
      date: 'February 2025 - July 2025',
      description: 'Academic Leadership and Peer Mentorship',
      highlights: [
        'Spearheaded excellence initiatives and coordinated group leaders to streamline educational workflows',
        'Facilitated collaborative peer-learning environments to enhance knowledge sharing and community engagement',
        'Recognized for pivotal contributions in managing group dynamics and driving academic program success',
      ],
    },
    {
      id: 2,
      title: 'Volunteer',
      organization: 'Akal Connect',
      type: 'volunteer',
      date: 'January 2024 - Present',
      description: 'Community Outreach and Social Impact',
      highlights: [
        'Orchestrated communication and support initiatives to strengthen community engagement and connectivity',
        'Worked within cross-functional teams to deliver essential services and streamline volunteer operations',
        'Driven by commitment to service, contributing to successful execution of local outreach programs',
      ],
    },
  ];

  const getIcon = (type) => {
    const icons = {
      experience: '💼',
      volunteer: '🤝',
    };
    return icons[type] || '📌';
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text animate-slideUp">
            Experience
          </h1>
          <div className="w-20 h-1 gradient-btn rounded animate-slideUp" style={{ animationDelay: '0.1s' }}></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl animate-slideUp" style={{ animationDelay: '0.2s' }}>
            My professional experience, volunteer work, and leadership contributions
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <div
              key={exp.id}
              className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-lg transition-all animate-slideUp"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-5xl flex-shrink-0">
                  {getIcon(exp.type)}
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-3">
                    {exp.organization}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <FaCalendar size={16} />
                    <span>{exp.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg font-semibold">
                {exp.description}
              </p>

              {exp.highlights && (
                <div className="space-y-3">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <FaCheckCircle className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={16} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 rounded-lg animate-slideUp" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Key Achievements
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" size={18} />
              <span>Successfully coordinated academic excellence initiatives with measurable impact on student outcomes</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" size={18} />
              <span>Led peer mentorship programs that enhanced knowledge sharing across academic groups</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" size={18} />
              <span>Demonstrated strong commitment to community service through consistent volunteer contributions</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
