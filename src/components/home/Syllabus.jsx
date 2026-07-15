import { motion } from 'framer-motion'
import { CheckCircle2, Download, GraduationCap } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { extraSubjects, minorDegree, syllabusLinks, syllabusStructure } from '../../data/syllabus'

function Syllabus() {
  return (
    <section id="syllabus" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Academics" title="Syllabus Structure" />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
          >
            <h3 className="text-base font-bold text-slate-900">Curriculum Highlights</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {syllabusStructure.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-7 text-base font-bold text-slate-900">
              Extra Subjects for Competitive Exam Preparation
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {extraSubjects.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900">{minorDegree.title}</h3>
              <p className="text-justify text-sm leading-relaxed text-slate-600">{minorDegree.description}</p>
              <a
                href={minorDegree.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                For detailed programme &mdash; Click Here
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
            >
              <h3 className="text-base font-bold text-slate-900">Syllabus Link</h3>
              <div className="mt-5 flex flex-col gap-3">
                {syllabusLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    download={link.fileName}
                    className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-600"
                  >
                    {link.label}
                    <Download size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Syllabus
