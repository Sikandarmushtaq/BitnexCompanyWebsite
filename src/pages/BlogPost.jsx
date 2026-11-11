import { Link, useParams } from 'react-router-dom'
import { posts } from '../data/content.js'
import NotFound from './NotFound.jsx'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <NotFound />
  return (
    <article className="section">
      <div className="container-x max-w-3xl">
        <Link to="/blog" className="font-display text-sm font-semibold text-teal-dark hover:text-navy">Back to blog</Link>
        <p className="mt-8 text-sm text-slate-500">{post.date}</p>
        <h1 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl">{post.title}</h1>
        <div className="mt-8 h-1.5 w-16 rounded-full bg-teal" />
        <p className="mt-8 text-lg leading-relaxed">{post.excerpt}</p>
        <p className="mt-5 text-lg leading-relaxed">
          Want help putting this into practice for your business? <Link to="/contact" className="font-semibold text-teal-dark underline underline-offset-4">Talk to our team</Link>.
        </p>
      </div>
    </article>
  )
}
