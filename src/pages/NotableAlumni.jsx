import { motion } from 'framer-motion'
import { ImageOff } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import { getImage } from '../utils/images'
import { featuredAlumnus, alumniSections } from '../data/alumni'

function AlumniCard({ alumnus, index = 0 }) {
  const src = getImage(alumnus.image)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
    >
      {src ? (
        <img src={src} alt={alumnus.name} className="h-56 w-full object-cover" />
      ) : (
        <div className="flex h-56 w-full items-center justify-center bg-slate-100 text-slate-400">
          <ImageOff size={24} />
        </div>
      )}
      <div className="flex flex-col gap-1 p-5">
        <h3 className="text-base font-bold text-red-800">{alumnus.name}</h3>
        {alumnus.batch && (
          <p className="text-sm text-slate-600">
            <span className="font-semibold">Batch:</span> {alumnus.batch}
          </p>
        )}
        <p className="text-sm text-slate-600">
          <span className="font-semibold">Current Position:</span> {alumnus.position}
        </p>
        <a
          href={alumnus.linkedin}
          target="_blank"
          rel="noreferrer"
          className="mt-1 text-sm font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
        >
          Linkedin
        </a>
      </div>
    </motion.div>
  )
}

function NotableAlumni() {
  return (
    <>
      <PageHero
        eyebrow="Student's Corner"
        title="Notable Alumni"
        description="Celebrating graduates who have gone on to build outstanding careers across the globe."
      />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto flex max-w-3xl justify-center px-6">
          <div className="w-full max-w-xs">
            <AlumniCard alumnus={featuredAlumnus} />
          </div>
        </div>
      </section>

      {alumniSections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className={sectionIndex % 2 === 0 ? 'bg-white py-16' : 'bg-slate-50 py-16'}
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {section.map((alumnus, memberIndex) => (
                <AlumniCard key={memberIndex} alumnus={alumnus} index={memberIndex} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export default NotableAlumni
