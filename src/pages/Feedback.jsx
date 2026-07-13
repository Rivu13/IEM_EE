import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import { feedbackContent } from '../data/feedback'

function Feedback() {
  return (
    <>
      <PageHero
        eyebrow="More"
        title="Stakeholder's Feedback"
        description="Feedback collected from students, teachers, employers and alumni to drive continuous improvement."
      />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 py-20"
      >
        <div className="mx-auto max-w-4xl px-6 text-slate-300">
          <p className="text-justify text-sm leading-relaxed">{feedbackContent.intro}</p>

          <p className="mt-6 text-justify text-sm leading-relaxed">
            <span className="font-bold text-amber-300">Objective:</span> {feedbackContent.objective}
          </p>

          <h2 className="mt-10 text-xl font-bold text-cyan-300">Methodology:</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {feedbackContent.methodology.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-sm leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                {point}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-xl font-bold text-cyan-300">Analysis:</h2>
          <p className="mt-4 text-justify text-sm leading-relaxed">{feedbackContent.analysis}</p>

          <h2 className="mt-10 text-xl font-bold text-cyan-300">
            Activities conducted for better results and holistic development:
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {feedbackContent.activities.map((activity) => (
              <li key={activity} className="flex items-start gap-3 text-sm leading-relaxed">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-300" />
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              src={`${feedbackContent.formUrl}?embedded=true`}
              title="Stakeholder Feedback Form"
              className="h-[80vh] w-full"
            >
              Loading form…
            </iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Feedback
