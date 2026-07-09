import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import hodPhoto from '../../assets/images/HOD.jpg'
import { hodMessage } from '../../data/hod'

function HodMessage() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.6fr_1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Message from the HOD
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A Word From Our Head of Department
          </h2>
          <div className="flex flex-col gap-4">
            {hodMessage.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-justify text-base leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center gap-4 rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm"
        >
          <img
            src={hodPhoto}
            alt={hodMessage.name}
            className="h-40 w-40 rounded-full border-4 border-blue-50 object-cover"
          />
          <div>
            <p className="text-lg font-bold text-slate-900">{hodMessage.name}</p>
            <p className="mt-1 text-sm font-semibold text-blue-600">{hodMessage.designation}</p>
            <p className="mt-1 text-sm text-slate-500">{hodMessage.department}</p>
          </div>
          <a
            href={`mailto:${hodMessage.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition-colors hover:border-blue-300 hover:text-blue-600"
          >
            <Mail size={14} />
            {hodMessage.email}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HodMessage
