import { imageRange } from '../utils/imageRange'

export const innovateOn = {
  title: 'INNOVATE-ON',
  paragraphs: [
    'INNOVATE-ON, organized under HELLO STRIDE 5.0 by IEM UG Campus, aims to be a vibrant platform where students turn innovative ideas and imagination into engineering reality. Held at the Institute of Engineering & Management (IEM), the event showcased participants\' designs, devices and demonstrated hardware projects that highlighted creativity, problem-solving and technical excellence.',
    'This year\'s edition witnessed enthusiastic participation from several teams of students, each bringing unique and functional hardware solutions across domains such as automation, renewable energy and smart embedded systems. The projects reflected originality, feasibility and the spirit of innovation-driven engineering.',
    'All the judges present, including alumni and faculty members, were impressed and appreciated the projects. The judges agreed that the standard of competition was so good that it was difficult to choose the winners, but after having a deep and lengthy discussion, the winners were finally announced. They are:',
  ],
  prizeWinners: [
    { position: '1st Prize Winner', group: 'Group 03', members: 'Add winner names here' },
    { position: '2nd Prize Winner', group: 'Group 08', members: 'Add winner names here' },
    { position: '3rd Prize Winner', group: 'Group 02', members: 'Add winner names here' },
  ],
  photos: imageRange('model', 1, 4, 'jpeg'),
}

export const videoShowcases = [
  {
    id: 'wifi-projector',
    title: 'Wifi Based Smart Projector Screen',
    thumbnail: 'model5.jpeg',
    videoUrl: '#',
    members: [
      'Ankit Sen (EE Batch 2019)',
      'Nilanjan Koyalia (EE Batch 2019)',
      'Agomoni Roy Chaudhary (EE Batch 2019)',
      'Kaustav Debnath (EE Batch 2019)',
      'Akash Paul (EE Batch 2019)',
      'Kaustav Ghosh (EE Batch 2019)',
    ],
  },
  {
    id: 'car-parking-sensor',
    title: 'Car Parking Sensor',
    thumbnail: 'model6.jpeg',
    videoUrl: '#',
    members: [
      'Chirag Verma (EE Batch 2019)',
      'Shubham Kumar (EE Batch 2019)',
      'Sujal Kumar (EE Batch 2019)',
      'Nivedita Bose (EE Batch 2019)',
      'Ankita Roy (EE Batch 2019)',
    ],
  },
]

export const developedModels = [
  { title: 'Weather Forecast Sensor', image: 'model7.jpeg' },
  { title: 'Solar Flexible Car', image: 'model8.jpeg' },
  { title: 'Automated Controlled Lamp', image: 'model9.jpeg' },
  { title: 'LPG Gas Leakage Alarm', image: 'model10.jpeg' },
  { title: 'Microcontroller based temperature and humidity controller', image: 'model11.jpeg' },
  { title: 'Power Generation through Speed Breaker', image: 'model12.jpeg' },
  { title: 'Generation Transmission & Distribution System', image: 'model13.jpeg' },
  { title: 'Solar Tracking System', image: 'model14.jpeg' },
]
