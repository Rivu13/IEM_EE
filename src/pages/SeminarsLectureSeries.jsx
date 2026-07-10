import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import ImageCarousel from '../components/common/ImageCarousel'
import { seminars } from '../data/seminars'

function SeminarsLectureSeries() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Seminars & Lecture Series"
        description="Expert talks, technical seminars and industry-institute interaction sessions hosted by the department."
      />

      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-5xl flex-col divide-y divide-slate-100 px-6">
          {seminars.map((seminar, index) => (
            <motion.div
              key={seminar.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="grid gap-8 py-10 first:pt-0 last:pb-0 lg:grid-cols-[1fr_1.3fr] lg:items-center"
            >
              <ImageCarousel filenames={seminar.images} alt={seminar.title} />
              <div>
                <h3 className="text-lg font-bold text-slate-900 underline decoration-blue-200 decoration-2 underline-offset-4">
                  {seminar.title}
                </h3>
                {seminar.date && (
                  <p className="mt-2 text-sm">
                    <span className="font-semibold text-slate-500">Event Date:</span>{' '}
                    <span className="text-slate-700">{seminar.date}</span>
                  </p>
                )}
                {seminar.venue && (
                  <p className="text-sm">
                    <span className="font-semibold text-slate-500">Venue:</span>{' '}
                    <span className="text-slate-700">{seminar.venue}</span>
                  </p>
                )}
                {seminar.speaker && (
                  <p className="text-sm">
                    <span className="font-semibold text-slate-500">Speaker:</span>{' '}
                    <span className="text-slate-700">{seminar.speaker}</span>
                  </p>
                )}
                <div className="mt-3 flex flex-col gap-3">
                  {seminar.paragraphs.map((paragraph, pIndex) => (
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

export default SeminarsLectureSeries
