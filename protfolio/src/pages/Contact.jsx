import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Open Gmail compose with sender name/email prefilled for easy reply
      const subject = `Message from ${formData.name}`;
      const body = `From: ${formData.name} <${formData.email}>\n\nSubject: ${formData.subject}\n\n${formData.message}`;
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=tiwanamanpreet536@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.open(gmailLink, '_blank');

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text animate-slideUp">
            Get In Touch
          </h1>
          <div className="w-20 h-1 gradient-btn rounded animate-slideUp" style={{ animationDelay: '0.1s' }}></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl animate-slideUp" style={{ animationDelay: '0.2s' }}>
            I'm always interested in hearing about new opportunities and projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: FaEnvelope, label: 'Email', value: 'tiwanamanpreet536@gmail.com', href: 'mailto:tiwanamanpreet536@gmail.com' },
            { icon: FaGithub, label: 'GitHub', value: 'github.com/yourprofile', href: 'https://github.com' },
            { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', href: 'https://linkedin.com' },
          ].map((contact, idx) => (
            <a
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-lg transition-all group animate-slideUp"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <contact.icon className="text-4xl text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {contact.label}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition break-all">
                {contact.value}
              </p>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-slideUp" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Send Me a Message
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 rounded-lg flex items-start gap-3">
                <FaCheckCircle className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-green-800 dark:text-green-200">Email client opened!</p>
                  <p className="text-green-700 dark:text-green-300 text-sm">Your message details have been pre-filled. Complete sending in your email client.</p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-400 rounded-lg flex items-start gap-3">
                <FaExclamationCircle className="text-red-600 dark:text-red-400 mt-1 flex-shrink-0" size={20} />
                <p className="text-red-800 dark:text-red-200">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 text-gray-900 dark:text-white"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 text-gray-900 dark:text-white"
                  placeholder="Message subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 text-gray-900 dark:text-white resize-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full gradient-btn text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-shadow"
              >
                {loading ? 'Opening email...' : (
                  <>
                    Send Message <FaArrowRight />
                  </>
                )}
              </button>

              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Your email client will open with the message pre-filled. Complete and send from your email.
              </p>
            </form>
          </div>

          <div className="hidden md:flex flex-col justify-center animate-fadeIn">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Connect With Me
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  I'm open to internship opportunities, collaboration, and meaningful conversations about web development.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: FaGithub, label: 'GitHub', desc: 'Check out my projects' },
                  { icon: FaLinkedin, label: 'LinkedIn', desc: 'Professional profile' },
                  { icon: FaEnvelope, label: 'Email', desc: 'Direct communication' },
                ].map((social, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    <social.icon className="text-2xl text-purple-600 dark:text-purple-400" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {social.label}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {social.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-center animate-slideUp" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-2xl font-bold mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg mb-6">
            Whether you have an opportunity, question, or just want to chat, I'd love to hear from you.
          </p>
          <a
            href="mailto:tiwanamanpreet536@gmail.com"
            className="inline-block bg-white text-purple-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
