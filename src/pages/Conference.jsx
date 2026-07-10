import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import LightboxGallery from '../components/common/LightboxGallery'
import { conferences } from '../data/conferences'

function Conference() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Conference"
        description="Conferences attended and organized by the Department of Electrical Engineering."
      />

      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-5xl flex-col divide-y divide-slate-100 px-6">
          {conferences.map((conference, index) => (
            <motion.div
              key={conference.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="flex flex-col gap-5 py-10 first:pt-0 last:pb-0"
            >
              <div>
                <h3 className="text-lg font-bold text-blue-700">{conference.title}</h3>
                <p className="mt-2 text-justify text-sm leading-relaxed text-slate-600">
                  {conference.details}
                </p>
              </div>
              <LightboxGallery filenames={conference.images} alt={conference.title} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Conference
