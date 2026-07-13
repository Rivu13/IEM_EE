import { motion } from 'framer-motion'
import { PlayCircle } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import AnimatedSection from '../components/common/AnimatedSection'
import { getImage } from '../utils/images'
import { innovateOn, videoShowcases, developedModels } from '../data/modelDeveloped'

function ModelDeveloped() {
  return (
    <>
      <PageHero
        eyebrow="Student's Corner"
        title="Model Developed"
        description="Hardware projects and innovative models built by students of the department."
      />

      <AnimatedSection className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{innovateOn.title}</h2>
          <div className="mt-5 flex flex-col gap-4">
            {innovateOn.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-justify text-sm leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {innovateOn.prizeWinners.map((winner) => (
              <div key={winner.group} className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-sm font-bold text-amber-800">
                  {winner.position} — {winner.group}
                </p>
                <p className="mt-2 text-sm text-slate-700">{winner.members}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {innovateOn.photos.map((filename) => {
              const src = getImage(filename)
              return src ? (
                <img
                  key={filename}
                  src={src}
                  alt="INNOVATE-ON showcase"
                  className="h-32 w-full rounded-xl object-cover shadow-sm sm:h-36"
                />
              ) : null
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Student Projects" title="Video Demonstrations" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {videoShowcases.map((video, index) => {
              const src = getImage(video.thumbnail)
              return (
                <motion.a
                  key={video.id}
                  href={video.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative flex h-52 w-full items-center justify-center overflow-hidden bg-slate-900">
                    {src && (
                      <img
                        src={src}
                        alt={video.title}
                        className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-50"
                      />
                    )}
                    <PlayCircle size={48} className="relative text-white" />
                  </div>
                  <div className="p-5">
                    <p className="text-base font-bold text-indigo-700">{video.title}</p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      {video.members.join(', ')}
                    </p>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Student Projects" title="Models Developed" />
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {developedModels.map((model, index) => {
              const src = getImage(model.image)
              return (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
                >
                  {src && <img src={src} alt={model.title} className="h-32 w-full object-cover sm:h-36" />}
                  <p className="p-3 text-center text-xs font-bold text-orange-700">{model.title}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

export default ModelDeveloped
