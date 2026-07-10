import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import ImageCarousel from '../components/common/ImageCarousel'
import { outreachProgrammes } from '../data/outreach'

function OutreachProgram() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Outreach Program"
        description="Faculty participation in seminars, summits and industry-academia collaboration programmes."
      />

      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-5xl flex-col divide-y divide-slate-100 px-6">
          {outreachProgrammes.map((programme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="grid gap-8 py-10 first:pt-0 last:pb-0 lg:grid-cols-[1fr_1.3fr] lg:items-center"
            >
              <ImageCarousel filenames={programme.images} alt="Outreach programme" />
              <div className="flex flex-col gap-3">
                {programme.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-justify text-sm leading-relaxed text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default OutreachProgram
