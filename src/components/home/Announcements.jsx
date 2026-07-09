import { motion } from 'framer-motion'
import { ArrowUpRight, Megaphone } from 'lucide-react'
import { announcements } from '../../data/announcements'

function Announcements() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <Megaphone size={16} />
        </div>
        <h3 className="text-base font-bold text-slate-900">Announcements</h3>
      </div>

      <ul className="mt-4 flex flex-col divide-y divide-slate-100">
        {announcements.map((item) => (
          <li key={item.text} className={`border-l-4 ${item.accent} py-3 pl-4`}>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {item.date}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.text}</p>
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                {item.linkLabel}
                <ArrowUpRight size={13} />
              </a>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Announcements
