import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">404 Error</span>
      <h1 className="text-4xl font-bold text-slate-900">Page Not Found</h1>
      <p className="max-w-md text-sm leading-relaxed text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link
        to="/"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>
    </section>
  )
}

export default NotFound
