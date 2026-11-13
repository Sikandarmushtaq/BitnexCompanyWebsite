
import { Link, useParams } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import CursorFollower from '../components/CursorFollower.jsx'
import { blogPosts } from '../components/blog/blogPosts.js'
import NotFound from './NotFound.jsx'

// Loads and displays the complete article matching the URL slug.
export default function BlogPost() {
  const { slug } = useParams()

  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return <NotFound />
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-[#000000] text-white">
      <CursorFollower enabled={true} />
      <Navbar />

      <article className="px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/70 transition-colors duration-300 hover:border-[#45BEB3] hover:text-[#45BEB3]"
          >
            Back to Blog
          </Link>

          <header className="max-w-4xl mx-auto mt-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#45BEB3]">
              {post.category}
            </span>

            <h1 className="mt-5 text-balance text-3xl font-bold leading-tight tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
              {post.title}
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-base leading-8 text-white/60 sm:text-lg">
              {post.excerpt}
            </p>

            <span className="inline-block mt-5 text-xs font-medium text-white/40">
              {post.readTime}
            </span>
          </header>

          <div className="mt-12 overflow-hidden border rounded-2xl border-white/10">
            <img
              src={post.image}
              alt={post.title}
              className="block max-h-[560px] w-full object-cover"
            />
          </div>

          <div className="max-w-3xl mx-auto mt-14">
            {post.sections.map((section, index) => (
              <section
                key={`${post.slug}-${index}`}
                className="mb-12"
              >
                <h2 className="mb-5 text-2xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                  {section.heading}
                </h2>

                <div className="space-y-5">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={`${post.slug}-${index}-${paragraphIndex}`}
                      className="text-[15px] leading-8 text-white/65 sm:text-base sm:leading-9"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="max-w-3xl pt-12 mx-auto mt-16 border-t border-white/10">
            <div className="rounded-2xl border border-white/10 bg-[#090d0d] p-7 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#45BEB3]">
                Let's Build Something Better
              </span>

              <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Have an idea for your next digital project?
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
                Let's discuss how the right technology and a thoughtful
                development strategy can help move your business forward.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-[#45BEB3] px-7 py-3 text-sm font-bold text-black transition-colors duration-300 hover:bg-white"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="text-sm font-semibold text-[#45BEB3] transition-colors duration-300 hover:text-white"
            >
              Explore More Articles
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
