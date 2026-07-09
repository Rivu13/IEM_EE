import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, PlayCircle } from 'lucide-react'
import heroVideo from '../../assets/videos/hero-video.mp4'
import { accreditations } from '../../data/content'

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-slate-950">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/45 to-slate-950/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white"
          >
            NBA Accredited &middot; Department of Electrical Engineering
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl"
          >
            Power Your Future in{' '}
            <span className="text-blue-400">Electrical Engineering</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
          >
            Join one of India&apos;s leading Electrical Engineering departments —
            where rigorous academics, hands-on research and industry-driven
            innovation come together to build tomorrow&apos;s energy engineers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-colors hover:bg-blue-700"
            >
              Admissions Enquiry
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/research"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              <PlayCircle size={18} />
              Discover Research
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Accredited &amp; Ranked By
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {accreditations.map(({ label, sub, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5">
                    <Icon size={20} className="text-blue-300" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-white">{label}</p>
                    <p className="text-xs text-slate-400">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
