import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import ImageCarousel from '../components/common/ImageCarousel'
import { mouList } from '../data/mou'

function Mou() {
  return (
    <>
      <PageHero
        eyebrow="More"
        title="Memorandum of Understanding (MoU)"
        description="Academic and industry collaborations undertaken by the Department of Electrical Engineering."
      />

      <div className="flex flex-col">
        {mouList.map((mou, index) => {
          const isDark = index % 2 === 1
          return (
            <motion.section
              key={mou.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className={isDark ? 'bg-slate-900 py-14' : 'bg-slate-50 py-14'}
            >
              <div className="mx-auto grid max-w-5xl gap-8 px-6 lg:grid-cols-[1fr_1.6fr] lg:items-center">
                <div className="mx-auto w-full max-w-xs">
                  <ImageCarousel filenames={mou.images} alt={mou.title} />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${isDark ? 'text-cyan-300' : 'text-blue-700'}`}>
                    {mou.title}
                  </h3>
                  <div className="mt-3 flex flex-col gap-3">
                    {mou.paragraphs.map((paragraph, pIndex) => (
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
                  {mou.highlights && (
                    <>
                      {mou.highlightsTitle && (
                        <p className={`mt-4 text-sm font-bold ${isDark ? 'text-amber-300' : 'text-amber-700'}`}>
                          {mou.highlightsTitle}
                        </p>
                      )}
                      <ul className="mt-2 flex flex-col gap-1.5">
                        {mou.highlights.map((point) => (
                          <li
                            key={point}
                            className={`flex items-start gap-2 text-sm ${
                              isDark ? 'text-slate-300' : 'text-slate-600'
                            }`}
                          >
                            <CheckCircle2
                              size={16}
                              className={`mt-0.5 shrink-0 ${isDark ? 'text-cyan-300' : 'text-blue-600'}`}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {mou.closingParagraph && (
                    <p
                      className={`mt-4 text-justify text-sm leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {mou.closingParagraph}
                    </p>
                  )}
                </div>
              </div>
            </motion.section>
          )
        })}
      </div>
    </>
  )
}

export default Mou
