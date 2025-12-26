export const skills = {
  languages: [
    { name: 'JavaScript (ES6+)' },
    { name: 'Python' },
    { name: 'HTML5' },
    { name: 'CSS3' },
  ],
  frameworks: [
    { name: 'React.js' },
    { name: 'Node.js' },
    { name: 'Express.js' },
  ],
  tools: [
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'RESTful APIs' },
    { name: 'JWT Authentication' },
    { name: 'VS Code' },
  ],
  databases: [
    { name: 'MongoDB' },
    { name: 'MySQL' },
  ],
  competencies: [
    { name: 'Full Stack Development (MERN)' },
    { name: 'Data Structures & Algorithms (DSA)' },
    { name: 'Problem Solving' },
    { name: 'API Design & Integration' },
    { name: 'Database Design & Management' },
    { name: 'Authentication & Authorization (JWT)' },
    { name: 'Responsive Web Development' },
    { name: 'Debugging' },
    { name: 'Team Collaboration' },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'Task Management Dashboard',
    description: 'A full-stack task management application with drag-and-drop Kanban board, authentication, and real-time updates. Features include task filtering, priority levels, due dates, and activity history.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1540350881486-6e9dc0c2b5eb?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://magical-churros-c34070.netlify.app/login',
    highlights: ['Drag-and-drop functionality', 'User authentication', 'Real-time updates', 'Responsive design'],
  },
  {
    id: 2,
    title: 'Country Explorer App',
    description: 'An interactive web application to explore countries worldwide with detailed information. Features include country search, filtering by region, displaying key statistics, and responsive design for all devices.',
    technologies: ['React', 'REST API', 'Tailwind CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://superlative-eclair-177366.netlify.app/',
    highlights: ['Country search', 'Regional filtering', 'Detailed statistics', 'Responsive design'],
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'A real-time weather application that provides current weather conditions, forecasts, and detailed meteorological data. Features include location-based weather, temperature conversions, and beautiful weather visualizations.',
    technologies: ['React', 'Weather API', 'Tailwind CSS', 'JavaScript', 'Geolocation'],
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://lucent-pegasus-e2476f.netlify.app/',
    highlights: ['Real-time weather data', 'Location-based search', 'Weather forecasts', 'Responsive design'],
  },
  {
    id: 4,
    title: 'AI Chatbot Application',
    description: 'An intelligent chatbot powered by Google Gemini AI that provides real-time conversational responses. Features include natural language processing, context-aware replies, and a clean user interface for seamless interaction.',
    technologies: ['React', 'Google Gemini AI', 'Tailwind CSS', 'JavaScript', 'API Integration'],
    image: 'https://images.unsplash.com/photo-1677442d019cecf8978f72e7d7f9c4e5?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://aiigemini-frontend.vercel.app/',
    highlights: ['Gemini AI Integration', 'Real-time responses', 'Conversational UI', 'Modern design'],
  },
];

export const experience = [
  {
    type: 'education',
    title: 'Bachelor in Computer Applications (with HwR)',
    organization: 'Eternal University, Baru Sahib',
    date: 'July 2024 - June 2028',
    description: 'Pursuing a degree in Computer Applications with focus on web development and software engineering.',
    highlights: ['GPA: 9.34', 'Data Structures', 'Web Development', 'Databases', 'Software Engineering'],
  },
  {
    type: 'experience',
    title: 'Member - Certificate',
    organization: 'Training and Placement Cell',
    date: 'February 2025 - July 2025',
    description: 'Academic Leadership and Peer Mentorship',
    highlights: [
      'Spearheaded excellence initiatives and coordinated group leaders to streamline educational workflows',
      'Facilitated collaborative peer-learning environments to enhance knowledge sharing and community engagement',
      'Recognized for pivotal contributions in managing group dynamics and driving academic program success',
    ],
  },
  {
    type: 'volunteer',
    title: 'Volunteer',
    organization: 'Akal Connect',
    date: 'January 2024 - Present',
    description: 'Community Outreach and Social Impact',
    highlights: [
      'Orchestrated communication and support initiatives to strengthen community engagement and connectivity',
      'Worked within cross-functional teams to deliver essential services and streamline volunteer operations',
      'Driven by commitment to service, contributing to successful execution of local outreach programs',
    ],
  },
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: 'FaGithub' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'FaLinkedin' },
  { name: 'Email', url: 'mailto:your.email@gmail.com', icon: 'FaEnvelope' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'FaTwitter' },
];

export const portfolioData = {
  skills,
  projects,
  experience,
  socialLinks,
};
