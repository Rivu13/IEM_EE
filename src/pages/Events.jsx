import { motion } from 'framer-motion'
import { CalendarDays } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import AnimatedSection from '../components/common/AnimatedSection'
import { events } from '../data/content'

const pastHighlights = [
  {
    date: '14 Feb 2026',
    title: 'Alumni Interaction Session',
    description: 'Alumni working in the power sector shared career insights and mentorship with current students.',
  },
  {
    date: '20 Jan 2026',
    title: 'Workshop on PLC & SCADA Systems',
    description: 'A hands-on industrial automation workshop conducted in partnership with a leading automation firm.',
  },
]

function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="News & Events"
        description="Workshops, seminars and symposiums that bring the department community together."
      />

      <AnimatedSection className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Upcoming" title="Upcoming Events" />
          <div className="mt-12 flex flex-col gap-5">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-7 shadow-sm sm:flex-row sm:items-start sm:gap-6"
              >
                <span className="flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  <CalendarDays size={14} /> {event.date}
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{event.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Highlights" title="Past Event Highlights" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {pastHighlights.map((event) => (
              <div key={event.title} className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                  {event.date}
                </span>
                <h3 className="mt-2 text-base font-bold text-slate-900">{event.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

export default Events
