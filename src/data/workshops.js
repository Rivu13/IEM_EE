import { imageRange } from '../utils/imageRange'

export const workshops = [
  {
    id: 'matlab-power-systems',
    title: 'Workshop on Modeling and Analysis of Power Systems in MATLAB',
    date: '10th - 11th January, 2026',
    organizer: 'ICT-IEM',
    expert: 'Dr. Mala Da',
    images: imageRange('work', 1, 5, 'jpeg'),
    paragraphs: [
      'A two days workshop on "Modeling and Analysis of Power Systems in MATLAB" was successfully organised on 10th and 11th January, 2026, from 10:00 AM to 12:00 PM, by ICT-IEM On Campus in collaboration with the Department of Electrical Engineering (EE) and the Department of Electrical & Electronics Engineering (EEE). The workshop aimed to strengthen the conceptual understanding of power systems and to introduce students to modern computational tools for analysis and simulation using MATLAB.',
      'The workshop sessions were conducted by Dr. Mala Da, Associate Professor, Department of Electrical Engineering, NIT Patna, who shared her extensive academic and research experience with the participants. The topics covered during the workshop included the fundamentals of power systems, modeling of power generation systems, such as three-phase sources and DC sources, transmission line modeling, classification and modeling of different types of electrical loads, and load flow analysis techniques. Each topic was explained in a structured manner, starting from basic principles and gradually progressing to practical implementation.',
    ],
  },
  {
    id: 'future-mobility',
    title: 'Workshop on Future Mobility: EV Power Train, ADAS and Grid Interaction',
    date: '8th - 10th September, 2025',
    organizer: "IEM Students' Chapter and IEEE IAS SBC",
    images: imageRange('work', 6, 2, 'jpeg'),
    paragraphs: [
      'The Department of Electrical Engineering successfully conducted a 3-day hands-on Workshop on Future Mobility: EV Powertrain, ADAS & Grid Interaction from 8th-10th September, 2025 in MATLAB-SIMULATION platform in association with IEM Students\' Chapter on Campus & IEEE IAS SBC.',
    ],
    topics: [
      'EV Powertrain Models',
      'Battery Management System',
      'ADAS Modules - Lane Departure, ABS, ACC',
      'Grid-forming based EV power control',
    ],
  },
  {
    id: 'v2g-charging',
    title: 'Workshop on Designing EV Smart Charging Scheduling Based on V2G Control Mode',
    date: '',
    organizer: '',
    images: imageRange('work', 8, 2, 'jpeg'),
    paragraphs: ['Add workshop details here.'],
  },
  ...Array.from({ length: 10 }, (_, i) => {
    const n = i + 4
    return {
      id: `workshop-${n}`,
      title: `Workshop ${n}`,
      date: '',
      organizer: '',
      images: imageRange('work', 10 + i * 3, 3, 'jpeg'),
      paragraphs: ['Add workshop details here.'],
    }
  }),
]
