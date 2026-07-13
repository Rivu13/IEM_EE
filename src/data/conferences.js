import { imageRange } from '../utils/imageRange'

export const conferences = [
  {
    id: 'conference-1',
    title: 'IEMRE 2025',
    details:
      'The Department of Electrical Engineering (EE) and Electrical & Electronics Engineering (EEE), IEM Kolkata, organized the 5th International Conference on Innovation in Energy Management and Renewable Resources (IEMRE 2025) from 12th to 14th September 2025. The three-day conference served as a global platform to discuss recent advances in renewable energy, power systems, and sustainable technologies. Distinguished speakers from premier institutes such as IIT Kharagpur, IIT Indore, IIT Roorkee, DTU Denmark, and NIT Patna delivered insightful keynote lectures. The event featured multiple technical sessions, paper presentations, and an international workshop by Dr. Imran Khan, Tesla, Australia.The conference successfully fostered collaboration between academia and industry, promoting innovation in energy management and renewable systems. With over 100 participants, IEMRE 2025 concluded with a valedictory session that emphasized continued research and global cooperation toward a sustainable energy future.',
    images: imageRange('conf', 1, 4, 'jpg'),
  },
  {
    id: 'conference-2',
    title: 'International Conference on Robotics',
    details:
      'Held on 10 February 2026. Researchers presented papers on robotics, automation, and intelligent systems.',
    images: imageRange('conf', 1, 4, 'jpg'),
  },
  {
    id: 'conference-3',
    title: 'Conference 3',
    details: 'Your description here.',
    images: imageRange('conf', 1, 4, 'jpg'),
  },

  // ...continue for all 11 conferences
]