import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import { assignmentLinks } from '../data/assignments'

function Assignments() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Assignment"
        description="Batch-wise assignment links for currently enrolled students."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm"
          >
            <h3 className="text-lg font-bold text-slate-900">Assignment Link:</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {assignmentLinks.map((item) => (
                <li
                  key={item.batch}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-white px-5 py-4 text-sm font-medium text-slate-700"
                >
                  <span className="flex items-center gap-3">
                    <FileText size={18} className="text-blue-600" />
                    {item.batch}
                  </span>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-blue-600 underline decoration-dotted hover:text-blue-700"
                  >
                    {item.label}
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

export default Assignments
