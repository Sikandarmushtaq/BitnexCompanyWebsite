
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { blogPosts } from './blogPosts.js'
import './BlogPageShowcase.css'

gsap.registerPlugin(ScrollTrigger)

// Displays equal-sized blog cards and filters them by category.
export default function BlogPageShowcase() {
  const sectionRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('All Insights')

  const categories = [
    'All Insights',
    ...new Set(blogPosts.map((post) => post.category))
  ]

  const filteredPosts =
    activeCategory === 'All Insights'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory)

  useEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        const cards = gsap.utils.toArray('.blog-page-card')

        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              autoAlpha: 0,
              y: 28
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              delay: (index % 3) * 0.07,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 92%',
                once: true
              }
            }
          )
        })
      }, sectionRef)

      return () => context.revert()
    })

    return () => media.revert()
  }, [activeCategory])

  return (
    <section
      ref={sectionRef}
      id="blog-insights"
      className="blog-page-showcase"
    >
      <div className="blog-page-container">
        <div className="blog-page-heading">
          <span className="blog-page-eyebrow">Explore Our Journal</span>

          <h2>
            Ideas That Move
            <span> Business Forward.</span>
          </h2>

          <p>
            Fresh perspectives on technology, software and digital experiences
            to help businesses make smarter decisions and move forward.
          </p>
        </div>

        <div className="blog-category-wrapper">
          <div className="blog-category-tabs" aria-label="Blog categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`blog-category-tab ${
                  activeCategory === category ? 'active' : ''
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-page-grid">
          {filteredPosts.map((post) => (
            <article className="blog-page-card" key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="blog-card-image-link"
                aria-label={`Read ${post.title}`}
              >
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
              </Link>

              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="blog-card-category">{post.category}</span>
                  <span className="blog-card-read-time">{post.readTime}</span>
                </div>

                <h3>{post.title}</h3>

                <p>{post.excerpt}</p>

                <div className="blog-card-bottom">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="blog-read-more"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="blog-empty-message">
            No articles found in this category.
          </p>
        )}
      </div>
    </section>
  )
}
