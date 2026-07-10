import { imageRange } from '../utils/imageRange'

export const conferences = Array.from({ length: 11 }, (_, i) => {
  const n = i + 1
  return {
    id: `conference-${n}`,
    title: `Conference ${n}`,
    details: 'Add conference details here — event name, date, venue and a short description.',
    images: imageRange(`conf${n}-`, 1, 4, 'jpg'),
  }
})
