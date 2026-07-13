import { motion } from 'framer-motion'
import { FolderOpen, PlayCircle } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import AnimatedSection from '../components/common/AnimatedSection'
import { videoCategories } from '../data/videoLectures'

function YoutubeBlock({ category }) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
      {category.youtubeUrl ? (
        <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
          <iframe
            className="h-full w-full"
            src={category.youtubeUrl}
            title={category.caption}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-100 text-slate-400">
          <PlayCircle size={32} />
        </div>
      )}
      <p className="text-sm font-semibold text-red-700">{category.caption}</p>
      <p className="text-sm text-slate-600">
        <span className="font-semibold">Instructor:</span> {category.instructor}
      </p>
    </div>
  )
}

function DriveLectureGrid({ lectures }) {
  if (lectures.length === 0) {
    return (
      <p className="text-center text-sm text-slate-400">Lectures for this topic will be added soon.</p>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {lectures.map((lecture, index) => (
        <motion.a
          key={lecture.filename}
          href={lecture.driveUrl}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
          className="group flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
        >
          <div className="flex h-24 w-full items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
            <FolderOpen size={28} />
          </div>
          <p className="truncate text-xs font-semibold text-slate-500">{lecture.filename}</p>
          <p className="text-sm text-slate-700">{lecture.caption}</p>
          <p className="text-xs font-semibold text-blue-700">Instructor: {lecture.instructor}</p>
        </motion.a>
      ))}
    </div>
  )
}

function VideoLectures() {
  return (
    <>
      <PageHero
        eyebrow="Student's Corner"
        title="Video Lectures"
        description="Recorded lecture series covering key topics across the electrical engineering curriculum."
      />

      {videoCategories.map((category, index) => (
        <AnimatedSection key={category.id} className={index % 2 === 0 ? 'bg-white py-20' : 'bg-slate-50 py-20'}>
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading title={category.heading} />
            <div className="mt-12">
              {category.type === 'youtube' ? (
                <YoutubeBlock category={category} />
              ) : (
                <DriveLectureGrid lectures={category.lectures} />
              )}
            </div>
          </div>
        </AnimatedSection>
      ))}
    </>
  )
}

export default VideoLectures
