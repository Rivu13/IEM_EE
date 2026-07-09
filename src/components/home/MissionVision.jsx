import { motion } from 'framer-motion'
import { Target, Telescope } from 'lucide-react'
import { missionPoints, vision } from '../../data/missionVision'

function MissionVision() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 rounded-2xl border border-slate-100 bg-slate-50 p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Telescope size={22} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Vision of the Department</h3>
            <p className="text-justify text-base leading-relaxed text-slate-600">{vision}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5 rounded-2xl border border-slate-100 bg-slate-50 p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Target size={22} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Mission of the Department</h3>
            <div className="flex flex-col gap-3">
              {missionPoints.map((point) => (
                <p key={point.code} className="text-justify text-sm leading-relaxed text-slate-600">
                  <span className="font-bold text-blue-600">{point.code}: </span>
                  {point.text}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
