import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import ImageCarousel from '../components/common/ImageCarousel'
import { studentChapter } from '../data/studentChapter'

function StudentChapter() {
  return (
    <>
      <PageHero
        eyebrow="Student's Corner"
        title="Student Chapter"
        description="A student-led community driving technical events, workshops and professional growth."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center"
          >
            <ImageCarousel filenames={studentChapter.images} alt={studentChapter.title} />
            <div>
              <h3 className="text-lg font-bold text-blue-700">{studentChapter.title}</h3>
              <div className="mt-3 flex flex-col gap-3">
                {studentChapter.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-justify text-sm leading-relaxed text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default StudentChapter
