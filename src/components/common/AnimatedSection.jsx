import { motion } from 'framer-motion'

function AnimatedSection({ as = 'section', className = '', delay = 0, children, ...rest }) {
  const MotionTag = motion[as] ?? motion.section

  return (
    <MotionTag
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

export default AnimatedSection
