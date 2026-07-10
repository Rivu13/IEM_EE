import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ImageOff, X } from 'lucide-react'
import { getImage } from '../../utils/images'

function LightboxGallery({ filenames, alt }) {
  const [openIndex, setOpenIndex] = useState(null)
  const images = filenames.map((name) => getImage(name)).filter(Boolean)

  if (images.length === 0) {
    return (
      <div className="flex h-40 w-full items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-100 text-slate-400">
        <ImageOff size={24} />
      </div>
    )
  }

  const showPrev = () => setOpenIndex((i) => (i - 1 + images.length) % images.length)
  const showNext = () => setOpenIndex((i) => (i + 1) % images.length)

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group overflow-hidden rounded-xl border border-slate-100 shadow-sm transition-shadow duration-200 hover:shadow-xl"
          >
            <img
              src={src}
              alt={alt}
              className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-36"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-6"
            onClick={() => setOpenIndex(null)}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpenIndex(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X size={20} />
            </button>

            {images.length > 1 && (
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation()
                  showPrev()
                }}
                className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-8"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            <motion.img
              key={openIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={images[openIndex]}
              alt={alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            />

            {images.length > 1 && (
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation()
                  showNext()
                }}
                className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-8"
              >
                <ChevronRight size={22} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default LightboxGallery
