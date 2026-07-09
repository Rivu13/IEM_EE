import { motion } from 'framer-motion'
import { CalendarClock } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import { routineHeading, routineLinks, semesterNotice } from '../data/classRoutine'

function ClassRoutine() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Class Routine"
        description="Current semester schedules for all batches."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center text-sm font-semibold text-cyan-600"
          >
            {semesterNotice}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm"
          >
            <h3 className="text-center text-base font-bold uppercase tracking-wide text-cyan-600 underline">
              {routineHeading}
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {routineLinks.map((item) => (
                <li
                  key={item.year}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-white px-5 py-4 text-sm"
                >
                  <span className="flex items-center gap-3 font-semibold text-slate-800">
                    <CalendarClock size={18} className="text-blue-600" />
                    B.Tech EE <span className="text-emerald-600">{item.year}</span>
                  </span>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-blue-600 underline decoration-dotted hover:text-blue-700"
                  >
                    {item.batch}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ClassRoutine
