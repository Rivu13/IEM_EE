import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import ImageCarousel from '../components/common/ImageCarousel'
import { industrialTours } from '../data/industrialTour'

function IndustrialTour() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Industrial Tour"
        description="Industry visits organized for students to gain first-hand exposure to real-world electrical engineering practices."
      />

      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-5xl flex-col divide-y divide-slate-100 px-6">
          {industrialTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="grid gap-8 py-10 first:pt-0 last:pb-0 lg:grid-cols-[1fr_1.3fr] lg:items-center"
            >
              <ImageCarousel filenames={tour.images} alt={tour.title} />
              <div>
                <h3 className="text-lg font-bold text-blue-700">{tour.title}</h3>
                {tour.date && (
                  <p className="mt-1 text-sm font-semibold text-red-700">{tour.date}</p>
                )}
                {tour.coordinator && (
                  <p className="text-sm font-semibold text-amber-700">
                    Faculty coordinator: {tour.coordinator}
                  </p>
                )}
                <div className="mt-3 flex flex-col gap-3">
                  {tour.paragraphs.map((paragraph, pIndex) => (
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

export default IndustrialTour
