import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ImageOff } from 'lucide-react'
import { getImage } from '../../utils/images'

function ImageCarousel({ filenames, alt }) {
  const [index, setIndex] = useState(0)
  const images = filenames.map((name) => getImage(name)).filter(Boolean)

  if (images.length === 0) {
    return (
      <div className="flex h-64 w-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-100 text-slate-400">
        <ImageOff size={28} />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-sm">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>
      {images.length > 1 && (
        <div className="flex justify-center gap-2">
          {images.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              aria-label={`Show image ${dotIndex + 1}`}
              onClick={() => setIndex(dotIndex)}
              className={`h-2 w-2 rounded-full transition-colors ${
                dotIndex === index ? 'bg-blue-600' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageCarousel
