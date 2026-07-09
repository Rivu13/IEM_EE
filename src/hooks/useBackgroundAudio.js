import { useEffect, useRef, useState } from 'react'

export function useBackgroundAudio(src, { initiallyPlaying = false } = {}) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio(src)
    audio.loop = true
    audio.volume = 0.35
    audioRef.current = audio

    if (initiallyPlaying) {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
    }

    return () => {
      audio.pause()
      audioRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
    }
  }

  return { isPlaying, toggle }
}
