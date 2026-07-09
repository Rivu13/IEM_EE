import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import AnimatedSection from '../common/AnimatedSection'
import Announcements from './Announcements'
import { stats } from '../../data/content'

function About() {
  return (
    <AnimatedSection className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            About the Department
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Engineering the Grids That Power Tomorrow
          </h2>
          <p className="text-justify text-base leading-relaxed text-slate-600">
            With the advent of industry 4.0, there is a growing demand of Electrical Engineers with adequate knowledge of IoT, Artificial Intelligence and Coding. The department of Electrical Engineering of   Institute of Engineering & Management, is making the best effort to turn out highly trained, employable and capable technocrats with leadership skill in modern technology.
          </p>
          <p className="text-justify text-base leading-relaxed text-slate-600">
            The pedagogy, general discipline and extra-curricular activities are so designed as to bring out competent and successful engineers. As far as department is concerned, excellence in academics, innovative practical work and research are the key parameters. The department of Electrical Engineering, established in 2013, has a fine blend of academically competent, industrially experienced as well as dynamic and young faculties fostering learning with their analytical and practical teaching methodology.
          </p>
          <p className="text-justify text-base leading-relaxed text-slate-600">
We encourage project based learning and emphasize on teaching the concepts and not the mere facts. Students are not only prepared to develop the skills for tests but also to pursue the knowledge to innovate. We make constant endeavor to inculcate the spirit of team work.          </p>
          <p className="text-justify text-base leading-relaxed text-slate-600">
The Electrical Engineering department has specialized faculties in all domains of Electrical Engineering. The academic and research activities in the department focus on frontier technologies such as power quality studies, application of micro-processors and micro-controllers, smart grid design, non-conventional energy sources etc. </p>          <div className="flex items-center gap-3 pt-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Zap size={20} />
            </div>
            <p className="text-sm font-semibold text-slate-800">
              Approved by AICTE &middot; Affiliated to MAKAUT &middot; NBA Accredited
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-2 rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center shadow-sm"
              >
                <span className="text-4xl font-extrabold text-blue-600">{stat.value}</span>
                <span className="text-sm font-medium text-slate-600">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <Announcements />
        </div>
      </div>
    </AnimatedSection>
  )
}

export default About
