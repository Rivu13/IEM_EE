import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import { engineersPledge } from '../data/engineersPledge'

function EngineersPledge() {
  return (
    <>
      <PageHero
        eyebrow="More"
        title="Engineer's Pledge"
        description="The creed every engineer of this department carries into practice."
      />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 py-20"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-yellow-400 sm:text-3xl">
            Engineer&apos;s Pledge
          </h2>
          <div className="mt-8 flex flex-col gap-5">
            {engineersPledge.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-white">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default EngineersPledge
