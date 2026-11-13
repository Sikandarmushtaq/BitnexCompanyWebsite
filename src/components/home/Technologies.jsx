
import { useEffect, useState } from 'react'

const categories = [
  {
    id: 'web',
    label: 'Web Development',
    subtitle: 'Modern web technologies and development frameworks.',
    technologies: [
      { name: 'React', icon: 'react', color: '61DAFB', desc: 'A component-based JavaScript library for building interactive user interfaces.' },
      { name: 'Next.js', icon: 'nextdotjs', color: 'FFFFFF', desc: 'A React framework for production-ready web applications.' },
      { name: 'JavaScript', icon: 'javascript', color: 'F7DF1E', desc: 'A core programming language for interactive web experiences.' },
      { name: 'TypeScript', icon: 'typescript', color: '3178C6', desc: 'JavaScript with static types for scalable applications.' },
      { name: 'Node.js', icon: 'nodedotjs', color: '5FA04E', desc: 'A JavaScript runtime for server-side applications.' },
      { name: 'Express.js', icon: 'express', color: 'FFFFFF', desc: 'A lightweight framework for building web APIs and backend services.' },
      { name: 'MongoDB', icon: 'mongodb', color: '47A248', desc: 'A document database for flexible application data.' },
      { name: 'PostgreSQL', icon: 'postgresql', color: '4169E1', desc: 'A powerful relational database system.' },
      { name: 'Tailwind CSS', icon: 'tailwindcss', color: '06B6D4', desc: 'A utility-first CSS framework for custom responsive interfaces.' },
      { name: 'HTML5', icon: 'html5', color: 'E34F26', desc: 'The standard markup language for structuring web content.' },
      { name: 'CSS3', icon: 'css3', color: '1572B6', desc: 'The styling language behind modern web interfaces.' },
      // { name: 'Vite', icon: 'vite', color: '646CFF', desc: 'A fast development and build tool for modern frontend projects.' },
      { name: 'Redux', icon: 'redux', color: '764ABC', desc: 'Predictable state management for JavaScript applications.' },
      { name: 'Prisma', icon: 'prisma', color: 'FFFFFF', desc: 'A modern database toolkit and ORM for application development.' },
      // { name: 'Git', icon: 'git', color: 'F05032', desc: 'Version control for managing and tracking code changes.' },
      // { name: 'GitHub', icon: 'github', color: 'FFFFFF', desc: 'A platform for code collaboration and software development.' },
    ],
  },
  {
    id: 'app',
    label: 'App Development',
    subtitle: 'Tools for building mobile applications and digital products.',
    technologies: [
      { name: 'Flutter', icon: 'flutter', color: '02569B', desc: 'A UI framework for building cross-platform mobile applications.' },
      { name: 'Dart', icon: 'dart', color: '0175C2', desc: 'A programming language used to build Flutter applications.' },
      { name: 'React Native', icon: 'react', color: '61DAFB', desc: 'A framework for building native mobile applications with React.' },
      { name: 'Android', icon: 'android', color: '3DDC84', desc: 'A platform for developing applications for Android devices.' },
      { name: 'Kotlin', icon: 'kotlin', color: '7F52FF', desc: 'A modern programming language for Android and backend development.' },
      { name: 'Swift', icon: 'swift', color: 'F05138', desc: 'A programming language for building applications across Apple platforms.' },
      { name: 'Firebase', icon: 'firebase', color: 'DD2C00', desc: 'A development platform offering authentication, databases and app services.' },
      { name: 'Expo', icon: 'expo', color: 'FFFFFF', desc: 'A framework and platform for developing React Native applications.' },
      { name: 'Java', icon: 'java', color: 'ED8B00', desc: 'A widely used programming language for application development.' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    subtitle: 'Intelligent systems, machine learning and workflow automation.',
    technologies: [
      { name: 'Python', icon: 'python', color: '3776AB', desc: 'A versatile language used in automation, data science and AI.' },
      { name: 'TensorFlow', icon: 'tensorflow', color: 'FF6F00', desc: 'A machine learning platform for developing intelligent models.' },
      { name: 'PyTorch', icon: 'pytorch', color: 'EE4C2C', desc: 'A deep learning framework for research and production.' },
      { name: 'OpenAI', icon: 'openai', color: 'FFFFFF', desc: 'AI models and APIs for intelligent application experiences.' },
      { name: 'Hugging Face', icon: 'huggingface', color: 'FFD21E', desc: 'Tools and models for machine learning and natural language processing.' },
      { name: 'FastAPI', icon: 'fastapi', color: '009688', desc: 'A modern Python framework for building high-performance APIs.' },
      { name: 'n8n', icon: 'n8n', color: 'EA4B71', desc: 'Workflow automation for connecting applications and services.' },
      { name: 'Jupyter', icon: 'jupyter', color: 'F37626', desc: 'An interactive environment for data science and experimentation.' },
    ],
  },
  {
    id: 'video',
    label: 'Video Editing',
    subtitle: 'Professional tools for video production and motion content.',
    technologies: [
      { name: 'Premiere Pro', icon: 'adobepremierepro', color: '9999FF', desc: 'Professional video editing and production software.' },
      { name: 'After Effects', icon: 'adobeaftereffects', color: '9999FF', desc: 'Motion graphics and visual effects software.' },
      { name: 'DaVinci Resolve', icon: 'blackmagicdesign', color: 'FFFFFF', desc: 'Professional video editing, color grading and post-production.' },
      { name: 'Blender', icon: 'blender', color: 'E87D0D', desc: '3D creation software for modeling, animation and visual effects.' },
      { name: 'Audacity', icon: 'audacity', color: '0000CC', desc: 'Audio editing and recording software.' },
      { name: 'CapCut', icon: 'capcut', color: 'FFFFFF', desc: 'Video editing tools for social and creative content.' },
    ],
  },
  {
    id: 'design',
    label: 'Graphic Design',
    subtitle: 'Creative software for visual identity and digital experiences.',
    technologies: [
      { name: 'Photoshop', icon: 'adobephotoshop', color: '31A8FF', desc: 'Image editing, photo manipulation and digital artwork.' },
      { name: 'Illustrator', icon: 'adobeillustrator', color: 'FF9A00', desc: 'Vector graphics and professional illustration software.' },
      { name: 'InDesign', icon: 'adobeindesign', color: 'FF3366', desc: 'Professional layout and publishing design software.' },
      { name: 'Figma', icon: 'figma', color: 'F24E1E', desc: 'Collaborative interface design and prototyping.' },
      { name: 'Canva', icon: 'canva', color: '00C4CC', desc: 'A visual design platform for creative content.' },
      { name: 'CorelDRAW', icon: 'coreldraw', color: '00A859', desc: 'Vector illustration and graphic design software.' },
      { name: 'Blender', icon: 'blender', color: 'E87D0D', desc: '3D design and visual creation software.' },
    ],
  },
  {
    id: 'engineering',
    label: 'Programming',
    subtitle: 'Programming languages and engineering development tools.',
    technologies: [
      { name: 'C++', icon: 'cplusplus', color: '00599C', desc: 'A high-performance programming language for software and systems.' },
      { name: 'Java', icon: 'java', color: 'ED8B00', desc: 'An object-oriented language for enterprise and application development.' },
      { name: 'C#', icon: 'csharp', color: '512BD4', desc: 'A programming language for applications and software development.' },
      { name: 'PHP', icon: 'php', color: '777BB4', desc: 'A server-side language for dynamic websites and applications.' },
      { name: 'Python', icon: 'python', color: '3776AB', desc: 'A general-purpose programming language for software and automation.' },
      { name: 'Go', icon: 'go', color: '00ADD8', desc: 'A compiled language designed for efficient software and services.' },
      { name: 'Rust', icon: 'rust', color: 'FFFFFF', desc: 'A systems programming language focused on performance and safety.' },
      // { name: 'VS Code', icon: 'visualstudiocode', color: '007ACC', desc: 'A code editor for software development and debugging.' },
    ],
  },
]

// Renders a technology logo with a fallback when its image cannot load.
function TechnologyLogo({ technology }) {
  return (
    <div className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.045] transition-all duration-500 group-hover:border-[#45BEB3]/30 group-hover:bg-[#45BEB3]/[0.08]">
      <img
        src={`https://cdn.simpleicons.org/${technology.icon}/${technology.color}`}
        alt={technology.name}
        loading="lazy"
        className="object-contain transition-transform duration-500 h-7 w-7 group-hover:scale-110"
        onError={(event) => {
          event.currentTarget.style.display = 'none'
          event.currentTarget.nextElementSibling.style.display = 'grid'
        }}
      />

      <span
        className="absolute inset-0 hidden place-items-center font-display text-sm font-bold text-[#45BEB3]"
        aria-hidden="true"
      >
        {technology.name.slice(0, 2).toUpperCase()}
      </span>
    </div>
  )
}

// Displays the selected technology information in a glass modal.
function TechnologyModal({ technology, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-5 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="technology-modal-title"
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-[#0B1411]/95 p-8 shadow-[0_25px_100px_rgba(0,0,0,0.65)]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#45BEB3]/15 blur-3xl"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close technology details"
          className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-[#45BEB3]/50 hover:text-white"
        >
          ×
        </button>

        <div className="relative z-10">
          <TechnologyLogo technology={technology} />

          <p className="mt-7 font-display text-xs font-semibold uppercase tracking-[0.22em] text-[#45BEB3]">
            Technology overview
          </p>

          <h3
            id="technology-modal-title"
            className="mt-3 font-display text-3xl font-extrabold tracking-[-0.045em] text-white"
          >
            {technology.name}
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/60">
            {technology.desc}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="mt-8 inline-flex items-center rounded-full border border-[#45BEB3]/40 bg-[#45BEB3]/10 px-6 py-3 font-display text-sm font-semibold text-[#45BEB3] transition-all duration-300 hover:bg-[#45BEB3] hover:text-[#050807]"
          >
            Close details
          </button>
        </div>
      </div>
    </div>
  )
}

// Creates the full-screen interactive technologies showcase.
export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState('web')
  const [selectedTechnology, setSelectedTechnology] = useState(null)

  const currentCategory =
    categories.find((category) => category.id === activeCategory) ||
    categories[0]

  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-[#000000] py-20 text-white sm:py-24">
      <div className="relative z-10 w-full mx-auto container-x">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-[#45BEB3]">
            Our Technology Stack
          </span>

          <h2 className="mt-4 font-display text-[clamp(2.8rem,6.5vw,6rem)] font-extrabold leading-[0.92] tracking-[-0.055em] text-white">
            Technologies
            <span className="block text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.85)]">
              We Use<span className="text-[#45BEB3]">.</span>
            </span>
          </h2>

          <p className="max-w-xl mx-auto mt-5 text-sm leading-7 text-white/50 sm:text-base">
            Powered by modern tools, frameworks and creative technologies.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-10 sm:mt-12">
          <div
            role="tablist"
            aria-label="Technology categories"
            className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-2"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category.id

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(category.id)
                    setSelectedTechnology(null)
                  }}
                  className={`flex min-h-[48px] w-full items-center justify-center rounded-full border px-2 py-2 text-center font-display text-[10px] font-semibold leading-tight transition-all duration-300 sm:min-h-0 sm:w-auto sm:px-5 sm:py-3 sm:text-sm ${
                    isActive
                      ? 'border-[#45BEB3]/60 bg-[#45BEB3]/15 text-[#65D7C8] shadow-[0_0_24px_rgba(69,190,179,0.09)]'
                      : 'border-white/10 bg-white/[0.035] text-white/55 hover:border-[#45BEB3]/35 hover:bg-[#45BEB3]/[0.07] hover:text-white'
                  }`}
                >
                  {category.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected category description */}
        <div className="mt-8 text-center">
          <p
            key={currentCategory.id}
            className="animate-[techFade_.35s_ease_both] text-xs tracking-wide text-white/40 sm:text-sm"
          >
            {currentCategory.subtitle}
          </p>
        </div>

        {/* Technology cards */}
        <div
          key={currentCategory.id}
className="grid max-w-6xl grid-cols-4 gap-2 mx-auto mt-7 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
        >
          {currentCategory.technologies.map((technology, index) => (
            <button
              key={technology.name}
              type="button"
              onClick={() => setSelectedTechnology(technology)}
              aria-label={`View ${technology.name} details`}
              className="group relative flex min-h-[116px] min-w-0 items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-left opacity-0 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#45BEB3]/45 hover:bg-[#45BEB3]/[0.09] hover:shadow-[0_12px_35px_rgba(69,190,179,0.08)] animate-[techCardIn_.5s_ease_forwards] sm:min-h-[126px] sm:gap-4 sm:p-4"
              style={{
                animationDelay: `${index * 45}ms`,
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#45BEB3]/0 blur-3xl transition-colors duration-500 group-hover:bg-[#45BEB3]/15"
              />

              <div className="relative z-10 flex flex-col items-start min-w-0 gap-3">
                <TechnologyLogo technology={technology} />

                <span className="truncate font-display text-xs font-semibold text-white/85 transition-colors duration-300 group-hover:text-[#65D7C8] sm:text-sm">
                  {technology.name}
                </span>
              </div>

              <span className="absolute right-3 top-3 text-xs text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#45BEB3]">
                ↗
              </span>
            </button>
          ))}
        </div>

        {/* Bottom label */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <span className="w-10 h-px bg-white/15" />
          <span className="font-display text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
            Built with the right tools
          </span>
          <span className="w-10 h-px bg-white/15" />
        </div>
      </div>

      {/* Technology details modal */}
      {selectedTechnology && (
        <TechnologyModal
          technology={selectedTechnology}
          onClose={() => setSelectedTechnology(null)}
        />
      )}

      {/* Local animation styles */}
      <style>{`
        @keyframes techCardIn {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes techFade {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[techCardIn_\\.5s_ease_forwards\\],
          .animate-\\[techFade_\\.35s_ease_both\\] {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  )
}
