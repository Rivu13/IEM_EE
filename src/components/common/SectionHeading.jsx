import { motion } from 'framer-motion'

function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mx-auto flex max-w-2xl flex-col gap-3 ${alignment}`}
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-slate-600">{description}</p>
      )}
    </motion.div>
  )
}

export default SectionHeading
