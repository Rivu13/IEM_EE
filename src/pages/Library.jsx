import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import lib1 from '../assets/images/lib1.png'
import lib2 from '../assets/images/lib2.png'
import lib3 from '../assets/images/lib3.jpg'
import { digitalResources, libraryIntro, opacNotice } from '../data/library'

function Library() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Library"
        description="A 24x7 resource hub supporting research, coursework and lifelong learning."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center text-sm font-semibold leading-relaxed text-slate-700"
          >
            {libraryIntro}
          </motion.p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <img src={lib1} alt="Library reading area" className="h-64 w-full rounded-2xl object-cover shadow-sm" />
            <img src={lib2} alt="Digital library resources" className="h-64 w-full rounded-2xl object-cover shadow-sm" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
          >
            <h3 className="text-base font-bold text-slate-900">
              Institute has following Digital Library Resources:
            </h3>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {digitalResources.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="shrink-0 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl border border-slate-100 bg-slate-50 p-8 sm:flex-row"
        >
          <img src={lib3} alt="Library OPAC QR code" className="h-40 w-40 shrink-0 rounded-xl border border-slate-200 bg-white object-contain p-2 shadow-sm" />
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-slate-900">{opacNotice.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {opacNotice.text}{' '}
              <a
                href={opacNotice.href}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-600 underline decoration-dotted hover:text-blue-700"
              >
                {opacNotice.linkLabel}
              </a>
            </p>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Library
