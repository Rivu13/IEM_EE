import { motion } from 'framer-motion'
import { ImageOff } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import lab1 from '../assets/images/lab1.jpg'
import lab2 from '../assets/images/lab2.jpg'
import { classroomCaption, labs } from '../data/labs'
import { getImage } from '../utils/images'

function LabImage({ filename, alt }) {
  const src = getImage(filename)

  if (!src) {
    return (
      <div className="flex h-56 w-full items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-100 text-slate-400 lg:h-full">
        <ImageOff size={28} />
      </div>
    )
  }

  return <img src={src} alt={alt} className="h-56 w-full rounded-xl object-cover lg:h-full" />
}

function LaboratoryInfrastructure() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Laboratory and Infrastructure"
        description="Well-equipped laboratories and classrooms supporting hands-on learning across every domain of Electrical Engineering."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <img src={lab1} alt="Classroom" className="h-64 w-full rounded-2xl object-cover shadow-sm" />
            <img src={lab2} alt="Classroom" className="h-64 w-full rounded-2xl object-cover shadow-sm" />
          </div>
          <p className="mt-6 text-center text-sm font-semibold text-cyan-600">{classroomCaption}</p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6">
          {labs.map((lab, index) => (
            <motion.div
              key={lab.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="grid gap-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm lg:grid-cols-[1fr_1.4fr]"
            >
              <LabImage filename={lab.image} alt={lab.title} />
              <div>
                <h3 className="text-lg font-bold text-blue-700">{lab.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{lab.description}</p>
                {lab.equipment.length > 0 && (
                  <>
                    <p className="mt-4 text-sm font-bold text-slate-800">
                      Some Notable Equipment:
                    </p>
                    <ul className="mt-2 flex flex-col gap-1.5">
                      {lab.equipment.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default LaboratoryInfrastructure
