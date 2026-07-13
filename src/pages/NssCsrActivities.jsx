import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import ImageCarousel from '../components/common/ImageCarousel'
import { nssRows, nssClosingStatement } from '../data/nssActivities'

function EventCard({ event, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
    >
      <div>
        <h3 className="text-base font-bold text-emerald-700">{event.title}</h3>
        <p className="mt-1 text-sm font-semibold text-red-700">{event.department}</p>
      </div>
      <div className="flex flex-col gap-3">
        {event.paragraphs.map((paragraph, pIndex) => (
          <p key={pIndex} className="text-justify text-sm leading-relaxed text-slate-600">
            {paragraph}
          </p>
        ))}
      </div>
      <ImageCarousel filenames={event.images} alt={event.title} />
    </motion.div>
  )
}

function NssCsrActivities() {
  return (
    <>
      <PageHero
        eyebrow="Student's Corner"
        title="NSS & CSR Activities"
        description="Team UTTARAN — the department's social outreach initiative giving back to the community."
      />

      {nssRows.map((row, rowIndex) => (
        <section key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white py-16' : 'bg-slate-50 py-16'}>
          <div className="mx-auto max-w-6xl px-6">
            <div className={`grid gap-8 ${row.length > 1 ? 'lg:grid-cols-2' : 'mx-auto max-w-3xl'}`}>
              {row.map((event, eventIndex) => (
                <EventCard key={event.id} event={event} index={eventIndex} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 py-20"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {nssClosingStatement.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300">{nssClosingStatement.paragraph}</p>
        </div>
      </motion.section>
    </>
  )
}

export default NssCsrActivities
