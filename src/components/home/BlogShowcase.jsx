import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './BlogShowcase.css'

import blogHero from '../../assets/blogs/blog-hero.jpg'
import blogAI from '../../assets/blogs/blog-ai.jpg'
import blogWeb from '../../assets/blogs/blog-web.jpg'
import blogApp from '../../assets/blogs/blog-app.jpg'
import blogVideo from '../../assets/blogs/blog-video.jpg'
import blogGraphic from '../../assets/blogs/blog-graphic.jpg'

gsap.registerPlugin(ScrollTrigger)

const journalItems = [
  {
    image: blogHero,
    category: 'THE BITNEX Blogs',
    title: 'Ideas That Shape Tomorrow.',
    description:
      'A closer look at the ideas, technology and creativity shaping the digital world. Explore perspectives that inspire better ways to build and grow.',
    intro: true,
  },
  {
    image: blogAI,
    category: 'AI & AUTOMATION',
    title: 'Beyond Automation. Into Intelligence.',
    description:
      'Discover how artificial intelligence helps businesses work smarter and make better decisions. Explore practical ways automation can simplify everyday operations.',
  },
  {
    image: blogWeb,
    category: 'WEB DEVELOPMENT',
    title: 'Building Digital Experiences That Matter.',
    description:
      'Great websites combine thoughtful design with reliable technology. Learn how modern tools create faster, more useful and scalable digital experiences.',
  },
  {
    image: blogApp,
    category: 'APP DEVELOPMENT',
    title: 'From Ideas to Applications.',
    description:
      'Successful apps start with understanding real user needs. Explore the process of turning an idea into a smooth and valuable mobile experience.',
  },
  {
    image: blogVideo,
    category: 'VIDEO EDITING',
    title: 'Every Frame Tells a Story.',
    description:
      'Strong video content is built through timing, rhythm and visual storytelling. Discover editing techniques that make every moment more engaging.',
  },
  {
    image: blogGraphic,
    category: 'GRAPHIC DESIGN',
    title: 'Design Is More Than What You See.',
    description:
      'Good design gives a brand a clear and memorable voice. Explore how color, typography and visual identity shape the way people connect with a business.',
  },
]

// Displays one journal image with its title and short description.
function JournalCard({ item, cardRef }) {
  return (
    <article
      ref={cardRef}
      className={`journal-card ${item.intro ? 'journal-card-intro' : ''}`}
    >
      <div className="journal-card-image">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>

      <div className="journal-card-content">
        <span className="journal-card-category">{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  )
}

// Animates each journal card smoothly as it enters the viewport.
function useJournalAnimations(gridRef) {
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const context = gsap.context(() => {
      const media = gsap.matchMedia()

      media.add('(prefers-reduced-motion: no-preference)', () => {
        const cards = gsap.utils.toArray('.journal-card', grid)

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            {
              autoAlpha: 0,
              y: 48,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              immediateRender: false,
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                once: true,
              },
            }
          )
        })
      })

      return () => media.revert()
    }, grid)

    return () => context.revert()
  }, [gridRef])
}

// Renders the Bitnex journal gallery.
export default function BlogShowcase() {
  const gridRef = useRef(null)

  useJournalAnimations(gridRef)

  return (
    <section id="blogs" className="blog-showcase">
      <div className="container-x blog-showcase-container">
        <header className="blog-showcase-heading">
          <span>THE BITNEX Blogs</span>
          <h2>Ideas That Shape Tomorrow.</h2>
          <p>Perspectives on technology, innovation and creative thinking.</p>
        </header>

        <div ref={gridRef} className="journal-grid">
          {journalItems.map((item) => (
            <JournalCard key={item.category} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
