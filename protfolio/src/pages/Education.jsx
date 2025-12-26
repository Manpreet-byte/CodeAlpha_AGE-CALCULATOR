import { FaGraduationCap, FaCalendar, FaStar } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: 'Bachelor in Computer Applications (with HwR)',
      organization: 'Eternal University, Baru Sahib',
      date: 'July 2024 - June 2028',
      description: 'Pursuing a degree in Computer Applications with focus on web development and software engineering.',
      gpa: '9.34',
      courses: ['Data Structures', 'Web Development', 'Databases', 'Software Engineering'],
    },
    {
      id: 2,
      title: 'Higher Secondary Education (12th)',
      organization: 'Akal Academy Ajitsar Ratia',
      date: 'Completed 2024',
      description: 'Completed higher secondary education in Humanities stream with outstanding academic performance.',
      gpa: '97.4%',
      courses: ['Humanities Stream'],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text animate-slideUp">
            Education
          </h1>
          <div className="w-20 h-1 gradient-btn rounded animate-slideUp" style={{ animationDelay: '0.1s' }}></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl animate-slideUp" style={{ animationDelay: '0.2s' }}>
            My academic background and educational achievements
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <div
              key={edu.id}
              className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-lg transition-all animate-slideUp"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <FaGraduationCap className="text-5xl text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.title}
                  </h3>
                  <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-3">
                    {edu.organization}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <FaCalendar size={16} />
                    <span>{edu.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {edu.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold text-gray-900 dark:text-white">GPA</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {edu.gpa}
                  </p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Relevant Courses
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 rounded-lg animate-slideUp" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Academic Focus
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            My academic journey focuses on building a strong foundation in computer science fundamentals while mastering practical web development skills. I believe in learning by doing, combining theoretical knowledge with real-world project experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Core Subjects</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">DSA, Web Dev, Databases, Software Engineering</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Specialization</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Full Stack MERN Development</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Approach</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Theory + Hands-on Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
