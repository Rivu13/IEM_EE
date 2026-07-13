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
          {studentChapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="grid gap-8 py-10 first:pt-0 last:pb-0 lg:grid-cols-[1fr_1.3fr] lg:items-center"
            >
              <ImageCarousel filenames={chapter.images} alt={chapter.title} />
              <div>
                <h3 className="text-lg font-bold text-blue-700">{chapter.title}</h3>
                <div className="mt-3 flex flex-col gap-3">
                  {chapter.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-justify text-sm leading-relaxed text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default StudentChapter
