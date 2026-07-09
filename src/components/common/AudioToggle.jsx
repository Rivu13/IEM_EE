import { Volume2, VolumeX } from 'lucide-react'
import musicSrc from '../../assets/music/music.mp3'
import { useBackgroundAudio } from '../../hooks/useBackgroundAudio'

function AudioToggle({ className = '' }) {
  const { isPlaying, toggle } = useBackgroundAudio(musicSrc)

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
      title={isPlaying ? 'Mute background music' : 'Play background music'}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-blue-300 hover:text-blue-600 ${className}`}
    >
      {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  )
}

export default AudioToggle
