import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import { patents } from '../data/patents'

function Patent() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Patents Application Details of EE Department"
        description="Patents filed by the faculty members of the Department of Electrical Engineering."
      />

      <div className="flex flex-col">
        {patents.map((patent, index) => {
          const isDark = index % 2 === 1
          return (
            <motion.section
              key={patent.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className={isDark ? 'bg-slate-900 py-16' : 'bg-slate-50 py-16'}
            >
              <div className="mx-auto max-w-4xl px-6">
                <h3
                  className={`text-xl font-bold leading-snug ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {patent.title}
                </h3>
                <p className={`mt-3 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {patent.office}
                </p>
                <p className={`mt-1 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Application number: {patent.applicationNumber}. Date: {patent.date}
                </p>

                <div className="mt-6 flex flex-col gap-1">
                  <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {patent.inventor.name}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {patent.inventor.designation}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {patent.inventor.department}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {patent.inventor.institute}
                  </p>
                </div>
              </div>
            </motion.section>
          )
        })}
      </div>
    </>
  )
}

export default Patent
