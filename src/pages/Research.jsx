import { motion } from 'framer-motion'
import { FlaskConical } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import AnimatedSection from '../components/common/AnimatedSection'
import { facilities, researchAreas } from '../data/content'

const publications = [
  {
    title: 'Optimal Placement of Distributed Generation in Radial Distribution Networks',
    venue: 'IEEE Transactions on Power Systems, 2025',
  },
  {
    title: 'A Hybrid Control Strategy for Grid-Connected Solar PV Inverters',
    venue: 'International Journal of Renewable Energy Research, 2025',
  },
  {
    title: 'Machine Learning Based Fault Diagnosis in Induction Motors',
    venue: 'National Conference on Electrical Engineering, 2024',
  },
]

function Research() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Advancing Power & Energy Engineering"
        description="Faculty-led research groups exploring the technologies that will define the future of electrical systems."
      />

      <AnimatedSection id="areas" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Focus Areas" title="Our Research Areas" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col gap-4 rounded-2xl border border-slate-100 p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <area.icon size={22} />
                </div>
                <h3 className="text-base font-bold text-slate-900">{area.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="publications" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Publications" title="Recent Research Output" />
          <div className="mt-12 flex flex-col gap-4">
            {publications.map((pub) => (
              <div
                key={pub.title}
                className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <FlaskConical size={20} className="mt-0.5 shrink-0 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{pub.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{pub.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="labs" className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Infrastructure"
            title="Labs & Facilities"
            description="Dedicated laboratories that give students and researchers direct, hands-on access to the tools of the trade."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {facilities.map((facility) => (
              <div
                key={facility}
                className="rounded-xl border border-slate-100 bg-slate-50 px-6 py-5 text-sm font-medium text-slate-700"
              >
                {facility}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

export default Research
