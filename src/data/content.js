
import site from '../config/site.js'

export const contact = {
  phone: site.phone,
  phoneHref: site.phoneHref,
  email: site.email,
  complaints: site.complaintsEmail,
  offices: site.offices,
}

export const services = [
  {
    slug: 'web-development',
    category: 'Development & Technology',
    title: 'Website Development',
    desc: 'We design and engineer sophisticated digital platforms that strengthen brand positioning, deliver exceptional user experiences, and create a powerful foundation for business growth. Every website is developed with performance, accessibility, scalability, and conversion in mind.',
    includes: [
      'Corporate and business websites',
      'Conversion-focused landing pages',
      'E-commerce website development',
      'CMS and custom content platforms',
      'Performance and technical SEO',
      'Deployment and launch support',
    ],
    icon: 'web',
  },
  {
    slug: 'software-development',
    category: 'Development & Technology',
    title: 'Software Development',
    desc: 'We develop purpose-built software that transforms complex business requirements into streamlined, intelligent, and connected systems. Our engineering approach focuses on operational efficiency, system reliability, and adaptable architecture that supports evolving business demands.',
    includes: [
      'Custom business applications',
      'CRM and ERP solutions',
      'Admin panels and dashboards',
      'API development and integrations',
      'Database architecture',
      'Cloud deployment and maintenance',
    ],
    icon: 'code',
  },
  {
    slug: 'app-development',
    category: 'Development & Technology',
    title: 'Mobile Application Development',
    desc: 'We create high-quality mobile applications that bring your services closer to customers through intuitive interactions, refined interfaces, and dependable performance. From concept to deployment, every application is engineered for usability, functionality, and long-term scalability.',
    includes: [
      'iOS and Android applications',
      'Cross-platform app development',
      'Mobile UI/UX implementation',
      'Backend and API integration',
      'Push notifications and authentication',
      'App Store and Play Store deployment',
    ],
    icon: 'app',
  },
  {
    slug: 'ai-automation',
    category: 'Development & Technology',
    title: 'AI & Automation Solutions',
    desc: 'We integrate artificial intelligence and intelligent automation into business operations to eliminate repetitive processes, unlock valuable insights, and improve organizational efficiency. Our solutions connect emerging technologies with practical business applications to deliver measurable operational value.',
    includes: [
      'AI-powered business solutions',
      'Intelligent chatbots and assistants',
      'Workflow automation',
      'Third-party API integrations',
      'Automated data processing',
      'AI system integration and optimization',
    ],
    icon: 'ai',
  },
  {
    slug: 'saas-development',
    category: 'Development & Technology',
    title: 'SaaS Product Development',
    desc: 'We engineer scalable software-as-a-service platforms that turn product concepts into secure, market-ready digital products. From product architecture and subscription infrastructure to user management and cloud deployment, we build systems designed for sustainable growth.',
    includes: [
      'SaaS product architecture',
      'Subscription and billing systems',
      'User accounts and access control',
      'Multi-tenant application development',
      'Admin and analytics dashboards',
      'Cloud deployment and scalability',
    ],
    icon: 'saas',
  },
  {
    slug: 'interactive-3d-web',
    category: 'Development & Technology',
    title: 'Interactive & 3D Web Experiences',
    desc: 'We create immersive digital experiences that combine interactive environments, advanced 3D technology, and sophisticated motion design. By bringing products and ideas to life through the browser, we help brands deliver more engaging and memorable digital interactions.',
    includes: [
      'Interactive 3D website experiences',
      'Real-time 3D product visualizations',
      'Web-based 3D animations',
      'Interactive product showcases',
      'Scroll-based visual experiences',
      'Performance-optimized 3D interfaces',
    ],
    icon: 'cube',
  },
  {
    slug: 'seo',
    category: 'Digital Marketing & Growth',
    title: 'Search Engine Optimization',
    desc: 'We develop comprehensive search strategies that improve organic visibility, strengthen search performance, and connect businesses with the audiences that matter. Through technical optimization, strategic content, and continuous performance analysis, we build a sustainable foundation for long-term digital growth.',
    includes: [
      'Comprehensive SEO audits',
      'Keyword and competitor research',
      'On-page SEO optimization',
      'Technical SEO improvements',
      'Local SEO strategy',
      'Performance tracking and reporting',
    ],
    icon: 'seo',
  },
  {
    slug: 'smm',
    category: 'Digital Marketing & Growth',
    title: 'Social Media & Brand Growth',
    desc: 'We develop strategic social media experiences that establish brand authority, strengthen audience relationships, and create consistent digital engagement. Every campaign combines purposeful content, platform-specific strategy, and performance insights to build a recognizable and credible brand presence.',
    includes: [
      'Social media strategy',
      'Content planning and calendars',
      'Creative posts and campaign content',
      'LinkedIn and TikTok management',
      'Community engagement',
      'Social performance reporting',
    ],
    icon: 'smm',
  },
  {
    slug: 'paid-advertising',
    category: 'Digital Marketing & Growth',
    title: 'Paid Advertising & Lead Generation',
    desc: 'We plan and execute performance-driven advertising campaigns that connect businesses with qualified audiences and valuable conversion opportunities. Through strategic targeting, continuous optimization, and measurable campaign analysis, we focus on improving acquisition efficiency and marketing returns.',
    includes: [
      'Paid campaign strategy',
      'Audience and keyword targeting',
      'Google Ads management',
      'Meta advertising campaigns',
      'Conversion tracking setup',
      'Campaign optimization and reporting',
    ],
    icon: 'ads',
  },
  {
    slug: 'email-marketing',
    category: 'Digital Marketing & Growth',
    title: 'Email Marketing',
    desc: 'We design targeted email marketing strategies that turn audience relationships into lasting customer engagement. From personalized campaigns and automated communication journeys to performance optimization, we help businesses deliver relevant messages at every stage of the customer lifecycle.',
    includes: [
      'Email campaign strategy',
      'Professional email templates',
      'Audience segmentation',
      'Automated email sequences',
      'Newsletter management',
      'Campaign analytics and optimization',
    ],
    icon: 'mail',
  },
  {
    slug: 'landing-page-optimization',
    category: 'Digital Marketing & Growth',
    title: 'Landing Page Optimization',
    desc: 'We transform underperforming landing pages into focused digital experiences built around user intent and conversion objectives. By refining messaging, interface structure, user journeys, and interaction patterns, we help businesses reduce friction and improve the effectiveness of their digital campaigns.',
    includes: [
      'Landing page audits',
      'Conversion-focused page design',
      'Clear messaging and CTA refinement',
      'Mobile experience optimization',
      'A/B testing strategy',
      'Conversion performance analysis',
    ],
    icon: 'landing',
  },
  {
    slug: 'graphic-designing',
    category: 'Creative & Visual Design',
    title: 'Graphic Design & Brand Identity',
    desc: 'We create distinctive visual identities and cohesive brand systems that communicate a clear market position and establish lasting recognition. From foundational brand elements to comprehensive creative assets, every design decision is guided by consistency, purpose, and visual distinction.',
    includes: [
      'Logo and brand identity design',
      'Brand guidelines and visual systems',
      'Business stationery',
      'Social media creative design',
      'Marketing and promotional materials',
      'Packaging and advertising design',
    ],
    icon: 'design',
  },
  {
    slug: 'video-editing',
    category: 'Creative & Visual Design',
    title: 'Professional Video Editing',
    desc: 'We transform raw footage into compelling visual content through refined editing, intentional storytelling, and professional post-production. Every production is crafted to communicate the right message, maintain audience attention, and deliver a consistent visual standard across digital platforms.',
    includes: [
      'Promotional and brand videos',
      'Social media video editing',
      'Reels and short-form content',
      'Corporate and presentation videos',
      'Color correction and audio refinement',
      'Platform-specific video formatting',
    ],
    icon: 'video',
  },
  {
    slug: 'motion-graphics',
    category: 'Creative & Visual Design',
    title: 'Motion Graphics & Animation',
    desc: 'We combine visual storytelling, purposeful movement, and sophisticated animation to make ideas more expressive and engaging. From animated brand identities to complex motion sequences, we create visual content that strengthens communication and gives digital experiences a distinctive character.',
    includes: [
      '2D motion graphics',
      'Animated brand elements',
      'Explainer video animations',
      'Logo animation',
      'Promotional visual sequences',
      'Animated social media content',
    ],
    icon: 'motion',
  },
]

export const values = [
  {
    title: 'Value-Driven Solutions',
    desc: 'We deliver thoughtfully planned digital solutions that balance quality, performance and investment, helping businesses achieve meaningful results within their budgets.',
  },
  {
    title: 'Commitment to Excellence',
    desc: 'Quality is built into every stage of our work. From planning and design to development and testing, we focus on delivering reliable solutions with attention to detail.',
  },
  {
    title: 'Efficient Project Delivery',
    desc: 'Our structured workflows and collaborative approach keep projects moving forward, with clear communication and a strong commitment to agreed timelines.',
  },
  {
    title: 'Partnership You Can Rely On',
    desc: 'We work alongside our clients beyond delivery, providing guidance and continued support so they can focus on growing their business with confidence.',
  },
]

export const process = [
  { title: 'Understand', sub: 'We listen' },
  { title: 'Strategize', sub: 'We plan' },
  { title: 'Build', sub: 'We develop' },
  { title: 'Automate', sub: 'We streamline' },
  { title: 'Grow', sub: 'We scale' },
]

export const stats = [
  { label: 'Happy Clients', value: 150, suffix: '+' },
  { label: 'Projects Completed', value: 320, suffix: '+' },
  { label: 'Suppliers with Us', value: 25, suffix: '+' },
]

export const faqs = [
  {
    q: 'What digital services does Bitnex Technologies provide?',
    a: 'We deliver website and software development, mobile applications, AI and automation, SaaS solutions, interactive 3D experiences, digital marketing and creative design services to help businesses build and grow their digital presence.',
  },
  {
    q: 'How does Bitnex approach a new project?',
    a: 'Every engagement begins with understanding your business objectives, audience and requirements. We then define a practical strategy, establish the project scope and move into design, development, testing and delivery.',
  },
  {
    q: 'Can solutions be tailored to our business requirements?',
    a: 'Absolutely. We shape each solution around your goals, workflows, target audience and budget. Our focus is on building practical digital experiences rather than relying on one-size-fits-all approaches.',
  },
  {
    q: 'What makes Bitnex Technologies different?',
    a: 'We combine technical expertise, thoughtful design and a collaborative working process. Our focus is on dependable delivery, clear communication and solutions that support measurable business objectives.',
  },
  {
    q: 'Which technologies do you work with?',
    a: 'Our technology stack includes modern frontend and backend frameworks, mobile development tools, cloud platforms, content management systems, analytics tools and creative software. The selection depends on each project’s requirements.',
  },
  {
    q: 'Do you provide support after project delivery?',
    a: 'Yes. We can provide ongoing maintenance, updates, performance improvements and technical assistance to help your digital products remain reliable as your business evolves.',
  },
]

export const skills = [
  { label: 'IT Services', value: 95 },
  { label: 'Development', value: 90 },
  { label: 'UI Designs', value: 88 },
  { label: 'Product Identity', value: 85 },
  { label: 'Experience', value: 92 },
]

export const posts = [
  {
    slug: 'how-to-use-the-famous-ai-chat-bot',
    title: 'How to use the famous AI chat bot',
    date: 'Mar 12, 2024',
    excerpt: 'Chat GPT is a well-known AI chat bot that helps in customer interaction, participates in conversations and solves queries effectively. Using this robot is easy - register on our website to start your first project!',
  },
  {
    slug: 'how-is-artificial-intelligence-shaping-up-in-2024',
    title: 'How is Artificial Intelligence shaping up in 2024',
    date: 'Feb 28, 2024',
    excerpt: 'Artificial intelligence is the ability of a digital computer or computer-controlled robot to perform tasks normally associated with intelligent beings. It is also described as a man-made intelligent entity that can perform tasks intelligently without specific instructions and has the ability to think and act logically.',
  },
  {
    slug: 'what-is-a-landing-page',
    title: 'What Is a Landing Page',
    date: 'Feb 10, 2024',
    excerpt: 'A landing page is a web page designed to persuade users to take a specific action, such as subscribing to a newsletter, purchasing a product, or responding to an event. Users usually reach landing pages through paid advertising campaigns, but they can also find your landing page through your homepage, social media, organic search results, and email campaigns.',
  },
  {
    slug: 'the-role-of-digital-marketing',
    title: "The Role of Digital Marketing in Today's Business Landscape",
    date: 'Jan 22, 2024',
    excerpt: "In today's business world, digital marketing plays a key role as it helps businesses to effectively reach their target audience on various online platforms. Using digital technologies such as the Internet, social media, search engines, email and mobile applications, businesses can connect with current and potential customers. Digital marketing strategies aim to improve brand visibility, increase website traffic, generate leads and ultimately increase sales. The use of data and analytics allows businesses to tailor their messages to specific demographics, improving conversion rates and return on investment (ROI).",
  },
]
