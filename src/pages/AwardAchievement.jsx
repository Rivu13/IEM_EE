import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import ImageCarousel from '../components/common/ImageCarousel'
import { awards } from '../data/awards'

function AwardAchievement() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Award & Achievement"
        description="Recognitions earned by our students and faculty in academics, sports and innovation."
      />

      <div className="flex flex-col">
        {awards.map((award, index) => {
          const isDark = index % 2 === 1
          return (
            <motion.section
              key={award.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className={isDark ? 'bg-slate-900 py-14' : 'bg-slate-50 py-14'}
            >
              <div className="mx-auto grid max-w-5xl gap-8 px-6 lg:grid-cols-[1fr_1.6fr] lg:items-center">
                <div className="mx-auto w-full max-w-xs">
                  <ImageCarousel filenames={award.images} alt={award.title} />
                </div>
                <div>
                  <h3
                    className={`text-lg font-bold underline decoration-2 underline-offset-4 ${
                      isDark ? 'text-cyan-300 decoration-cyan-300/40' : 'text-blue-700 decoration-blue-200'
                    }`}
                  >
                    {award.title}
                  </h3>
                  <div className="mt-3 flex flex-col gap-3">
                    {award.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className={`text-justify text-sm leading-relaxed ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )
        })}
      </div>
    </>
  )
}

export default AwardAchievement
