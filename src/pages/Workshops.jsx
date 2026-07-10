import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import LightboxGallery from '../components/common/LightboxGallery'
import { workshops } from '../data/workshops'

function Workshops() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Workshops"
        description="Hands-on technical workshops conducted for students and faculty of the department."
      />

      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-5xl flex-col divide-y divide-slate-100 px-6">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="flex flex-col gap-5 py-10 first:pt-0 last:pb-0"
            >
              <div>
                <h3 className="text-lg font-bold text-cyan-700">{workshop.title}</h3>
                <div className="mt-1 flex flex-wrap gap-x-6 text-sm text-slate-500">
                  {workshop.date && <span>Event Date: {workshop.date}</span>}
                  {workshop.organizer && <span>Organized by: {workshop.organizer}</span>}
                  {workshop.expert && <span>Expert: {workshop.expert}</span>}
                </div>
                <div className="mt-3 flex flex-col gap-3">
                  {workshop.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-justify text-sm leading-relaxed text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {workshop.topics && (
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {workshop.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-600" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <LightboxGallery filenames={workshop.images} alt={workshop.title} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Workshops
