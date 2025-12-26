import { FaAward, FaCalendar, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Programming for Everybody (Getting Started with Python)',
      issuer: 'Coursera',
      date: '2024',
      description: 'Introduction to Python programming fundamentals, covering basic syntax, data structures, and problem-solving techniques',
      credentialUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~7A27FCCBG98Y/CERTIFICATE_LANDING_PAGE~7A27FCCBG98Y.jpeg',
    },
    {
      id: 2,
      title: 'Python for Data Science, AI & Development',
      issuer: 'Coursera',
      date: '2024',
      description: 'Advanced Python programming for data science applications, AI development, and software engineering',
      credentialUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~DTYAMBK1WXXT/CERTIFICATE_LANDING_PAGE~DTYAMBK1WXXT.jpeg',
    },
    {
      id: 3,
      title: 'Introducing Generative AI with AWS',
      issuer: 'Udacity',
      date: '2024',
      description: 'Introduction to generative AI concepts and implementation using AWS cloud services and machine learning tools',
      credentialUrl: 'https://www.udacity.com/certificate/e/c9ae6bee-5955-11f0-ac8d-979578d77931',
    },
    {
      id: 4,
      title: 'Introduction to Agile Development and Scrum',
      issuer: 'Coursera',
      date: '2024',
      description: 'Understanding Agile methodologies, Scrum framework, sprint planning, and collaborative software development practices',
      credentialUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~DWYFOK2E0GJN/CERTIFICATE_LANDING_PAGE~DWYFOK2E0GJN.jpeg',
    },
    {
      id: 5,
      title: 'Introduction to Git and GitHub',
      issuer: 'Coursera',
      date: '2024',
      description: 'Version control fundamentals using Git and GitHub for collaborative software development and project management',
      credentialUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~IU5KPCTI0AWE/CERTIFICATE_LANDING_PAGE~IU5KPCTI0AWE.jpeg',
    },
    {
      id: 6,
      title: 'Version Control',
      issuer: 'Coursera',
      date: '2024',
      description: 'Advanced version control concepts, branching strategies, merge workflows, and best practices for team collaboration',
      credentialUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~6C5DGT41NGGB/CERTIFICATE_LANDING_PAGE~6C5DGT41NGGB.jpeg',
    },
    {
      id: 7,
      title: 'Prompt Engineering for ChatGPT',
      issuer: 'Coursera',
      date: '2024',
      description: 'Mastering prompt engineering techniques to effectively interact with ChatGPT and other AI language models',
      credentialUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~2OBGRKJTKKI2/CERTIFICATE_LANDING_PAGE~2OBGRKJTKKI2.jpeg',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text animate-slideUp">
            Certifications
          </h1>
          <div className="w-20 h-1 gradient-btn rounded animate-slideUp" style={{ animationDelay: '0.1s' }}></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Professional certifications and credentials that validate my expertise in web development and software engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={cert.id}
              className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-lg transition-all group animate-slideUp"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FaAward className="text-4xl text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {cert.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <FaCalendar size={16} />
                  <span className="text-sm">{cert.date}</span>
                </div>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-semibold"
                >
                  View Credential <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-lg animate-slideUp" style={{ animationDelay: '0.7s' }}>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            More Coming Soon
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            I'm continuously learning and pursuing new certifications to stay updated with the latest technologies and best practices in web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
