import { imageRange } from '../utils/imageRange'

const alumniImages = imageRange('alumni', 1, 17, 'jpeg')

export const featuredAlumnus = {
  name: 'Add Alumnus Name',
  batch: '2010-2014',
  position: 'Add current position here',
  linkedin: '#',
  image: alumniImages[0],
}

export const alumniSections = [
  [
    {
      name: 'Suraj Mitra',
      batch: '2015-2019',
      position: 'Analog Test Engineer @ Texas Instruments',
      linkedin: '#',
      image: alumniImages[1],
    },
    {
      name: 'Rahul Raj',
      batch: '2014-2018',
      position: 'Air Traffic Controller @ Airport Authority of India',
      linkedin: '#',
      image: alumniImages[2],
    },
    {
      name: 'Sandeep Barnwal',
      batch: '2015-2019',
      position: 'Senior Section Engineer @ Indian Railway',
      linkedin: '#',
      image: alumniImages[3],
    },
    {
      name: 'Imran Khan',
      batch: '2014-2018',
      position: 'Senior Power Systems Engineer @ Tesla',
      linkedin: '#',
      image: alumniImages[4],
    },
  ],
  ...Array.from({ length: 3 }, (_, sectionIndex) =>
    Array.from({ length: 4 }, (_, memberIndex) => ({
      name: 'Add Alumnus Name',
      batch: '',
      position: 'Add current position here',
      linkedin: '#',
      image: alumniImages[5 + sectionIndex * 4 + memberIndex],
    }))
  ),
]
