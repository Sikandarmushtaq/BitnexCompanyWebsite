
import site from '../config/site.js'

export const contact = {
  phone: site.phone,
  phoneHref: site.phoneHref,
  email: site.email,
  complaints: site.complaintsEmail,
  offices: site.offices,
}

export const services = [
  // Development & Technology
  {
    slug: 'web-development',
    category: 'Development & Technology',
    title: 'Website Development',
    desc: 'We engineer high-performance websites that combine refined design, seamless functionality and scalable technology to strengthen your digital presence.',
    includes: [
      'Corporate and business websites',
      'Conversion-focused landing pages',
      'E-commerce website development',
      'CMS and custom content platforms',
      'Performance and technical SEO',
      'Deployment and launch support',
    ],
    tech: ['React', 'Next.js', 'WordPress', 'Shopify', 'Tailwind CSS'],
    icon: 'web',
  },
  {
    slug: 'software-development',
    category: 'Development & Technology',
    title: 'Software Development',
    desc: 'We build tailored software solutions that simplify complex operations, connect business workflows and support long-term organizational growth.',
    includes: [
      'Custom business applications',
      'CRM and ERP solutions',
      'Admin panels and dashboards',
      'API development and integrations',
      'Database architecture',
      'Cloud deployment and maintenance',
    ],
    tech: ['Node.js', 'Python', '.NET', 'PostgreSQL', 'AWS'],
    icon: 'code',
  },
  {
    slug: 'app-development',
    category: 'Development & Technology',
    title: 'Mobile Application Development',
    desc: 'We create intuitive mobile applications with polished user experiences, reliable performance and the flexibility to grow with your audience.',
    includes: [
      'iOS and Android applications',
      'Cross-platform app development',
      'Mobile UI/UX implementation',
      'Backend and API integration',
      'Push notifications and authentication',
      'App Store and Play Store deployment',
    ],
    tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    icon: 'app',
  },
  {
    slug: 'ai-automation',
    category: 'Development & Technology',
    title: 'AI & Automation Solutions',
    desc: 'We integrate intelligent technologies and automated workflows to reduce repetitive work, improve decision-making and make business operations more efficient.',
    includes: [
      'AI-powered business solutions',
      'Intelligent chatbots and assistants',
      'Workflow automation',
      'Third-party API integrations',
      'Automated data processing',
      'AI system integration and optimization',
    ],
    tech: ['Python', 'OpenAI API', 'Node.js', 'LangChain', ' n8n'],
    icon: 'ai',
  },
  {
    slug: 'saas-development',
    category: 'Development & Technology',
    title: 'SaaS Product Development',
    desc: 'We transform product ideas into scalable SaaS platforms, with secure architecture, intuitive interfaces and the infrastructure needed to support growing users.',
    includes: [
      'SaaS product architecture',
      'Subscription and billing systems',
      'User accounts and access control',
      'Multi-tenant application development',
      'Admin and analytics dashboards',
      'Cloud deployment and scalability',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS'],
    icon: 'saas',
  },
  {
    slug: 'interactive-3d-web',
    category: 'Development & Technology',
    title: 'Interactive & 3D Web Experiences',
    desc: 'We create immersive digital experiences using interactive 3D elements, motion and modern web technologies to make brands more engaging and memorable.',
    includes: [
      'Interactive 3D website experiences',
      'Real-time 3D product visualizations',
      'Web-based 3D animations',
      'Interactive product showcases',
      'Scroll-based visual experiences',
      'Performance-optimized 3D interfaces',
    ],
    tech: ['Three.js', 'React Three Fiber', 'GSAP', 'WebGL', 'Blender'],
    icon: 'cube',
  },
  // {
  //   slug: 'fix-bug-error',
  //   category: 'Development & Technology',
  //   title: 'Technical Support & Bug Fixing',
  //   desc: 'We diagnose and resolve technical issues with precision, restoring functionality, improving stability and keeping your digital products running reliably.',
  //   includes: [
  //     'Website and application bug fixes',
  //     'Broken layouts and form repairs',
  //     'Performance troubleshooting',
  //     'Plugin and dependency conflict resolution',
  //     'API and integration debugging',
  //     'Ongoing technical maintenance',
  //   ],
  //   tech: ['React', 'Node.js', 'WordPress', 'PHP', 'JavaScript'],
  //   icon: 'bug',
  // },

  // Digital Marketing & Growth
  {
    slug: 'seo',
    category: 'Digital Marketing & Growth',
    title: 'Search Engine Optimization',
    desc: 'We strengthen your search visibility through technical improvements, strategic content and data-driven optimization that attracts relevant organic traffic.',
    includes: [
      'Comprehensive SEO audits',
      'Keyword and competitor research',
      'On-page SEO optimization',
      'Technical SEO improvements',
      'Local SEO strategy',
      'Performance tracking and reporting',
    ],
    tech: ['Google Search Console', 'Google Analytics', 'Ahrefs', 'SEMrush'],
    icon: 'seo',
  },
  {
    slug: 'smm',
    category: 'Digital Marketing & Growth',
    title: 'Social Media & Brand Growth',
    desc: 'We build a consistent social presence through strategic content, audience engagement and platform-specific campaigns that strengthen brand recognition.',
    includes: [
      'Social media strategy',
      'Content planning and calendars',
      'Creative posts and campaign content',
      'LinkedIn and TikTok management',
      'Community engagement',
      'Social performance reporting',
    ],
    tech: ['Meta Business Suite', 'LinkedIn', 'TikTok', 'Canva'],
    icon: 'smm',
  },
  {
    slug: 'paid-advertising',
    category: 'Digital Marketing & Growth',
    title: 'Paid Advertising & Lead Generation',
    desc: 'We plan and manage targeted advertising campaigns designed to reach qualified audiences, generate meaningful leads and improve marketing returns.',
    includes: [
      'Paid campaign strategy',
      'Audience and keyword targeting',
      'Google Ads management',
      'Meta advertising campaigns',
      'Conversion tracking setup',
      'Campaign optimization and reporting',
    ],
    tech: ['Google Ads', 'Meta Ads', 'Google Analytics', 'Google Tag Manager'],
    icon: 'ads',
  },
  {
    slug: 'email-marketing',
    category: 'Digital Marketing & Growth',
    title: 'Email Marketing',
    desc: 'We create focused email campaigns and automated customer journeys that nurture relationships, communicate value and support consistent business growth.',
    includes: [
      'Email campaign strategy',
      'Professional email templates',
      'Audience segmentation',
      'Automated email sequences',
      'Newsletter management',
      'Campaign analytics and optimization',
    ],
    tech: ['Mailchimp', 'Klaviyo', 'Brevo', 'HubSpot'],
    icon: 'mail',
  },
  {
    slug: 'landing-page-optimization',
    category: 'Digital Marketing & Growth',
    title: 'Landing Page Optimization',
    desc: 'We refine landing page structure, messaging and user journeys to reduce friction, improve engagement and turn more visitors into qualified leads.',
    includes: [
      'Landing page audits',
      'Conversion-focused page design',
      'Clear messaging and CTA refinement',
      'Mobile experience optimization',
      'A/B testing strategy',
      'Conversion performance analysis',
    ],
    tech: ['Google Analytics', 'Hotjar', 'Microsoft Clarity', 'Google Tag Manager'],
    icon: 'landing',
  },

  // Creative & Visual Design
  {
    slug: 'graphic-designing',
    category: 'Creative & Visual Design',
    title: 'Graphic Design & Brand Identity',
    desc: 'We develop distinctive visual identities and purposeful creative assets that communicate your brand values and create a consistent presence across platforms.',
    includes: [
      'Logo and brand identity design',
      'Brand guidelines and visual systems',
      'Business stationery',
      'Social media creative design',
      'Marketing and promotional materials',
      'Packaging and advertising design',
    ],
    tech: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Canva'],
    icon: 'design',
  },
  {
    slug: 'video-editing',
    category: 'Creative & Visual Design',
    title: 'Professional Video Editing',
    desc: 'We turn raw footage into polished visual content through thoughtful storytelling, precise editing and platform-ready production that keeps audiences engaged.',
    includes: [
      'Promotional and brand videos',
      'Social media video editing',
      'Reels and short-form content',
      'Corporate and presentation videos',
      'Color correction and audio refinement',
      'Platform-specific video formatting',
    ],
    tech: ['Adobe Premiere Pro', 'DaVinci Resolve', 'After Effects', 'CapCut'],
    icon: 'video',
  },
  {
    slug: 'motion-graphics',
    category: 'Creative & Visual Design',
    title: 'Motion Graphics & Animation',
    desc: 'We bring ideas to life through purposeful motion design, animated visuals and engaging transitions that make complex messages easier to understand.',
    includes: [
      '2D motion graphics',
      'Animated brand elements',
      'Explainer video animations',
      'Logo animation',
      'Promotional visual sequences',
      'Animated social media content',
    ],
    tech: ['Adobe After Effects', 'Adobe Illustrator', 'Blender', 'Lottie'],
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
