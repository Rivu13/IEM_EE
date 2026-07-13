import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import ImageCarousel from '../components/common/ImageCarousel'
import { studentChapters } from '../data/studentChapter'

function StudentChapter() {
  return (
    <>
      <PageHero
        eyebrow="Student's Corner"
        title="Student Chapter"
        description="A student-led community driving technical events, workshops and professional growth."
      />

      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-6xl flex-col divide-y divide-slate-100 px-6">
          {studentChapters.map((chapter, index) => {
            // Check if this chapter has activities
            if (chapter.activities) {
              return (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                  className="py-10 first:pt-0 last:pb-0"
                >
                  <h3 className="mb-8 text-center text-2xl font-bold text-blue-700">{chapter.title}</h3>
                  <div className="grid gap-8 lg:grid-cols-3">
                    {chapter.activities.map((activity, aIndex) => (
                      <motion.div
                        key={aIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: aIndex * 0.1 }}
                        className="flex flex-col gap-4 rounded-lg border border-slate-200 p-6 shadow-sm"
                      >
                        {activity.images && <ImageCarousel filenames={activity.images} alt={activity.title} />}
                        <h4 className="text-lg font-bold text-blue-700">{activity.title}</h4>
                        <div className="flex flex-col gap-3">
                          {activity.paragraphs.map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-justify text-sm leading-relaxed text-slate-600">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            }

            // Regular chapter layout
            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                className="grid gap-8 py-10 first:pt-0 last:pb-0 lg:grid-cols-[1fr_1.3fr] lg:items-center"
              >
                {chapter.images && <ImageCarousel filenames={chapter.images} alt={chapter.title} />}
                <div>
                  <h3 className="text-lg font-bold text-blue-700">{chapter.title}</h3>
                  <div className="mt-3 flex flex-col gap-3">
                    {chapter.paragraphs && chapter.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-justify text-sm leading-relaxed text-slate-600">
                        {paragraph}
                      </p>
                    ))}
                    {chapter.committee && (
                      <div className="mt-4 rounded-lg bg-blue-50 p-4">
                        <h4 className="mb-3 font-semibold text-blue-700">THE CORE WORKING COMMITTEE (CWC):</h4>
                        <div className="grid gap-2 md:grid-cols-2">
                          {chapter.committee.map((member, mIndex) => (
                            <div key={mIndex} className="text-sm text-slate-600">
                              <span className="font-medium text-blue-600">{member.position}:</span> {member.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default StudentChapter
