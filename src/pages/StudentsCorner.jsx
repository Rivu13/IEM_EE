import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import AnimatedSection from '../components/common/AnimatedSection'
import { studentHighlights } from '../data/content'

const faculty = [
  { name: 'Dr. A. Sengupta', designation: 'Head of Department, Professor', specialization: 'Power Systems' },
  { name: 'Dr. R. Chatterjee', designation: 'Associate Professor', specialization: 'Power Electronics & Drives' },
  { name: 'Dr. S. Mukherjee', designation: 'Associate Professor', specialization: 'Renewable Energy Systems' },
  { name: 'Prof. M. Dutta', designation: 'Assistant Professor', specialization: 'Control Systems' },
]

const recruiters = ['Tata Power', 'Adani Power', 'Siemens', 'ABB', 'L&T Electrical', 'CESC Limited']

function StudentsCorner() {
  return (
    <>
      <PageHero
        eyebrow="Student's Corner"
        title="Life Beyond the Classroom"
        description="Clubs, projects, placements and everything that makes the student experience at IEM EE unforgettable."
      />

      <AnimatedSection className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Student Life" title="Clubs, Projects & Placements" />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {studentHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-4 rounded-2xl border border-slate-100 p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <item.icon size={22} />
                </div>
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="faculty" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Meet the Team" title="Our Faculty" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((member) => (
              <div key={member.name} className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{member.name}</h3>
                <p className="text-xs text-blue-600">{member.designation}</p>
                <p className="text-xs text-slate-500">{member.specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="placements" className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Careers"
            title="Placements"
            description="Our graduates go on to build careers with leading names in the power and energy sector."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {recruiters.map((name) => (
              <span
                key={name}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-700"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

export default StudentsCorner
