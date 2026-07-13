import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
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
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-yellow-400/40 bg-yellow-400/10 mx-auto">
            <Award size={26} className="text-yellow-400" />
          </div>
          <p className="mt-8 text-lg font-semibold italic leading-relaxed text-yellow-100">
            {engineersPledge[0]}
          </p>
          <div className="mx-auto mt-8 h-px w-16 bg-yellow-400/30" />
          <div className="mt-8 flex flex-col gap-6">
            {engineersPledge.slice(1).map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-slate-300">
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
