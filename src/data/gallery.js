import { imageRange } from '../utils/imageRange'

const captions = [
  'APTECH 2021',
  'ASHRAE IEM Student Chapter Inauguration ceremony',
  'IEM UEM Kolkata Marathon 2022',
  'Industrial Training at Jaipur',
  'INNOVATION 2022',
  'ISHRAE IEM Model Student Chapter Award',
  'NSDC 2021-2022',
  'Site visit for SDI Competition',
  'Solar Decathlon India 2021-22 (Winner)',
  'Sunref India Programme Launch',
]

const items = captions.map((caption, index) => ({
  id: `gallery-${index + 1}`,
  caption,
  images: imageRange('gal', index * 3 + 1, 3, 'png'),
}))

export const gallerySections = Array.from({ length: 5 }, (_, sectionIndex) =>
  items.slice(sectionIndex * 2, sectionIndex * 2 + 2)
)
