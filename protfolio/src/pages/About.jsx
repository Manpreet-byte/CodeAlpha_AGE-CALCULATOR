const About = () => {
  return (
    <div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text animate-slideUp">
            About Me
          </h1>
          <div className="w-20 h-1 gradient-btn rounded mb-12 animate-slideUp" style={{ animationDelay: '0.1s' }}></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2 space-y-6 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Hello! 👋
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm Manpreet Singh, a dedicated Full Stack MERN developer and BCA student at Eternal University, Baru Sahib. With a strong academic record (GPA 9.34) and a passion for technology, I specialize in building modern, scalable web applications. My journey in web development is driven by curiosity and a commitment to creating solutions that make a real difference.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  My Journey
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  My path in technology began with excellence in academics, scoring 97.4% in my 12th grade. Now pursuing my BCA degree, I've developed expertise in the MERN stack while maintaining academic excellence. I've earned multiple certifications in Python, AI, Agile Development, and Version Control, demonstrating my commitment to continuous learning and staying current with industry trends.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  What Drives Me
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Beyond coding, I'm actively involved in community service through Akal Connect and have contributed to academic leadership as a member of the Training and Placement Cell. I believe in combining technical skills with strong communication and teamwork. I'm passionate about leveraging technology to solve real-world problems and am actively seeking internship opportunities to apply my skills in professional environments.
                </p>
              </div>
            </div>

            <div className="md:col-span-1 animate-fadeIn">
              <div className="sticky top-32 p-8 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-lg">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  Quick Facts
                </h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 font-bold mr-3">🎓</span>
                    <span>BCA Student (GPA: 9.34)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 font-bold mr-3">🏆</span>
                    <span>97.4% in 12th Grade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 font-bold mr-3">💼</span>
                    <span>Seeking Internships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 font-bold mr-3">🚀</span>
                    <span>MERN Stack Developer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 font-bold mr-3">📜</span>
                    <span>7 Professional Certifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 font-bold mr-3">🤝</span>
                    <span>Community Volunteer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Technical Interests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  Frontend
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Crafting beautiful, responsive interfaces with React and modern CSS. I enjoy working with state management, hooks, and component architecture.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  Backend
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Building scalable APIs with Node.js and Express. I'm passionate about creating clean, maintainable server-side code with proper error handling.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  Database
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Designing efficient MongoDB schemas and writing optimized queries. I understand data relationships and performance optimization.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  DevOps
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Interested in deployment, containerization, and CI/CD pipelines. I'm continuously learning about modern development workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
