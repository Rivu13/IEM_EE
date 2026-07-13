import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import ImageCarousel from '../components/common/ImageCarousel'
import { gallerySections } from '../data/gallery'

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Photo Gallery"
        description="Moments from events, competitions and activities across the department."
      />

      {gallerySections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className={sectionIndex % 2 === 0 ? 'bg-white py-16' : 'bg-slate-50 py-16'}
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 sm:grid-cols-2">
              {section.map((item, itemIndex) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <ImageCarousel filenames={item.images} alt={item.caption} />
                  <p className="text-center text-sm font-bold text-slate-900">{item.caption}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export default Gallery
