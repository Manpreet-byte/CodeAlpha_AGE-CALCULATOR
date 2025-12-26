import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideUp">
            <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2 text-lg">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
              Manpreet Singh
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 font-light">
              Full Stack MERN Developer
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              BCA student at Eternal University with a passion for building innovative web solutions. Combining academic excellence (9.34 GPA) with hands-on development experience to create impactful applications.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/projects"
                className="gradient-btn text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
              >
                View Projects <FaArrowRight />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg font-semibold hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex gap-6 text-2xl">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center animate-fadeIn">
            <div className="w-96 h-96 gradient-btn rounded-full opacity-20 absolute"></div>
            <div className="relative w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full shadow-2xl overflow-hidden">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQG4NvPyGy5Ymw/profile-displayphoto-crop_800_800/B4EZmlzwceKcAI-/0/1759423434752?e=1768435200&v=beta&t=gzEsPqtVV_B7ncDQXBpYlFd5LHXKk9K2RJLScPSnZKs"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What I <span className="gradient-text">Specialize In</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend Development',
                description: 'Building responsive, interactive UIs with React, JavaScript, and Tailwind CSS',
                icon: '⚛️',
              },
              {
                title: 'Backend Development',
                description: 'Creating robust APIs and server logic with Node.js and Express.js',
                icon: '🔧',
              },
              {
                title: 'Database Design',
                description: 'Designing and managing databases with MongoDB and Mongoose ODM',
                icon: '🗄️',
              },
            ].map((spec, idx) => (
              <div
                key={idx}
                className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="text-5xl mb-4">{spec.icon}</div>
                <h3 className="text-xl font-bold mb-3">{spec.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
