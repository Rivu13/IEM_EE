import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import AnimatedSection from '../components/common/AnimatedSection'
import ImageCarousel from '../components/common/ImageCarousel'
import LightboxGallery from '../components/common/LightboxGallery'
import {
  placementHighlights,
  placementSliderImages,
  topRecruiters,
  placementBatchDetails,
} from '../data/placement'

function Placement() {
  return (
    <>
      <PageHero
        eyebrow="Student's Corner"
        title="Placement & Higher Studies"
        description="Guiding students towards rewarding careers in industry and academia."
      />

      <AnimatedSection className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Training & Placement
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {placementHighlights.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-600" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <ImageCarousel filenames={placementSliderImages} alt="Placement highlights" />
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Careers" title="Few Top Recruiters" />
          <div className="mt-12">
            <LightboxGallery filenames={topRecruiters.map((recruiter) => recruiter.image)} alt="Recruiter logo" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading title="Details of Placement and Higher Studies of Previous Years" />
          <motion.a
            href={placementBatchDetails.featured.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mt-8 inline-block text-lg font-bold text-slate-900 underline decoration-2 underline-offset-4 hover:text-blue-700"
          >
            {placementBatchDetails.featured.label}
          </motion.a>
          <ul className="mt-4 flex flex-col items-center gap-3">
            {placementBatchDetails.previous.map((batch) => (
              <li key={batch.label}>
                <a
                  href={batch.href}
                  className="text-base font-semibold text-slate-700 underline decoration-1 underline-offset-4 hover:text-blue-700"
                >
                  {batch.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>
    </>
  )
}

export default Placement
