import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import ImageCarousel from '../components/common/ImageCarousel'
import { studentsCompetitions } from '../data/studentsCompetition'

function StudentsCompetition() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Students Competition"
        description="Aptitude tests, poster competitions and hackathons that showcase student talent."
      />

      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-5xl flex-col divide-y divide-slate-100 px-6">
          {studentsCompetitions.map((competition, index) => (
            <motion.div
              key={competition.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="grid gap-8 py-10 first:pt-0 last:pb-0 lg:grid-cols-[1fr_1.3fr] lg:items-start"
            >
              <ImageCarousel filenames={competition.images} alt={competition.title} />
              <div>
                <h3 className="text-lg font-bold text-emerald-700">{competition.title}</h3>
                {competition.date && (
                  <p className="mt-1 text-sm font-semibold italic text-slate-500">
                    Date: {competition.date}
                  </p>
                )}
                <div className="mt-3 flex flex-col gap-3">
                  {competition.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-justify text-sm leading-relaxed text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {competition.results?.length > 0 && (
                  <div className="mt-4 flex flex-col gap-2 rounded-xl border border-amber-100 bg-amber-50 p-4">
                    {competition.results.map((result) => (
                      <p key={result} className="flex items-start gap-2 text-sm font-medium text-amber-800">
                        <Trophy size={15} className="mt-0.5 shrink-0" />
                        {result}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default StudentsCompetition
