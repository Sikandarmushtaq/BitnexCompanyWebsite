import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-x text-center">
        <p className="font-display text-7xl font-extrabold text-teal">404</p>
        <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
        <p className="mt-3">The page you’re looking for doesn’t exist or has moved.</p>
        <Link to="/" className="btn-primary mt-8">Back to home</Link>
      </div>
    </section>
  )
}
