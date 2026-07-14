import { motion } from 'framer-motion'
import { Download, Eye, FileText } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import { fdpProgrammes } from '../data/fdp'

import fdp1 from '../assets/pdf/FDP1.pdf'
import fdp2 from '../assets/pdf/FDP2.pdf'
import fdp3 from '../assets/images/FDP3.jpg'
import fdp4 from '../assets/pdf/FDP4.pdf'
import fdp5 from '../assets/pdf/FDP5.pdf'
import fdp6 from '../assets/pdf/FDP6.pdf'
import fdp7 from '../assets/pdf/FDP7.pdf'
import fdp8 from '../assets/pdf/FDP8.pdf'
import fdp9 from '../assets/pdf/FDP9.pdf'
import fdp10 from '../assets/pdf/FDP10.pdf'
import fdp11 from '../assets/pdf/FDP11.pdf'
import fdp12 from '../assets/pdf/FDP12.pdf'

const fdpFiles = {
  1: fdp1,
  2: fdp2,
  3: fdp3,
  4: fdp4,
  5: fdp5,
  6: fdp6,
  7: fdp7,
  8: fdp8,
  9: fdp9,
  10: fdp10,
  11: fdp11,
  12: fdp12,
}

function FdpDocument({ programme }) {
  const src = fdpFiles[programme.id]

  if (programme.isImage) {
    return (
      <img
        src={src}
        alt={programme.title}
        className="h-56 w-full rounded-2xl object-cover shadow-sm lg:h-full"
      />
    )
  }

  return (
    <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-2xl border border-blue-100 bg-linear-to-br from-blue-50 to-white p-6 shadow-sm lg:h-full">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white">
        <FileText size={26} />
      </div>
      <p className="text-sm font-semibold text-slate-700">FDP{programme.id}.pdf</p>
      <div className="flex items-center gap-3">
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
        >
          <Eye size={14} />
          View
        </a>
        <a
          href={src}
          download={`FDP${programme.id}.pdf`}
          className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-semibold text-blue-600 transition-colors hover:border-blue-300"
        >
          <Download size={14} />
          Download
        </a>
      </div>
    </div>
  )
}

function FacultyDevelopmentProgram() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Faculty Development Program"
        description="Faculty development programmes attended by the department, with certificates and reference material."
      />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6">
          {fdpProgrammes.map((programme, index) => (
            <motion.div
              key={programme.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="grid gap-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm lg:grid-cols-[1fr_1.4fr]"
            >
              <FdpDocument programme={programme} />
              <div>
                <h3 className="text-lg font-bold text-slate-900">{programme.title}</h3>
                {programme.venue && (
                  <p className="mt-2 text-sm font-semibold text-slate-700">
                    Venue: {programme.venue}
                  </p>
                )}
                {programme.date && (
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    Date: {programme.date}
                  </p>
                )}
                {programme.coordinators?.length > 0 && (
                  <p className="mt-2 text-sm text-slate-600">
                    Faculty Coordinators: {programme.coordinators.join(', ')}
                  </p>
                )}
                <p className="mt-3 text-justify text-sm leading-relaxed text-slate-600">
                  {programme.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default FacultyDevelopmentProgram
