import { imageRange } from '../utils/imageRange'

export const seminars = [
  {
    id: 'cttc-program',
    title: 'CTTC Program',
    date: '23rd February 2026',
    venue: 'CII Auditorium, IEM Management House',
    images: imageRange('sl', 1, 6),
    paragraphs: [
      'The Department of Electrical Engineering at the Institute of Engineering & Management (IEM), Kolkata, organized an Industry–Institute Interaction Program on 23rd February 2026 in collaboration with the Central Tool Room & Training Centre (CTTC), Bhubaneswar. The event was technically sponsored by IEEE IAS and IEEE IES and guided by faculty members and IEEE advisors.',
      'The main objective of the program was to bridge the gap between academic learning and industrial practices by providing students with insights into real-world applications, emerging technologies, and industry expectations.',
      'Key highlights included expert sessions from CTTC professionals, discussions on advanced manufacturing and automation, interactive sessions with students, and guidance on internships and career opportunities. The event saw active participation from both students and faculty members.',
    ],
  },
  {
    id: 'cwc-installation',
    title: 'Installation of the Core Working Committee (2026) & Technical Seminar',
    date: '30th January, 2026',
    venue: 'CII Auditorium',
    images: imageRange('sl', 7, 5),
    paragraphs: [
      'On January 30th, 2026, the IEEE CSS – IEM Student Branch Chapter conducted a formal session at the CII Auditorium to celebrate the chapter’s trajectory since its inception on August 6, 2025. The event served as a dual-purpose platform: reviewing the milestones of the inaugural year and officially installing the leadership team for the 2026 term. The proceedings included a technical discourse by a distinguished academician and an awards ceremony for outstanding student achievement.',
      'Dr. Kaushik Das Sharma (Professor, University of Calcutta) delivered an expert session. He shared insights from his extensive international career, including fellowships at the University of Manchester, UK and the University of Paris-Est Creteil, France, as well as his roles in the IEEE Transportation Electrification Council.',
    ],
  },
  {
    id: 'career-pathways',
    title: 'Building Career Pathways through Practical Training',
    date: '14th November 2025',
    venue: 'CII Auditorium, IEM Management House',
    speaker: 'Ms. Ilena Dutta, Officer on Special Duty, BOPTER, Government of India',
    images: imageRange('sl', 12, 3),
    paragraphs: [
      'Ms. Ilena Dutta, Officer on Special Duty at the Board of Practical Training (Eastern Region) - BOPTER, Government of India, delivered a comprehensive presentation on "BOPT Connect: Building Career Pathways through Practical Training" on 14th November 2025 at the CII Auditorium. The session focused on strengthening industry-academia collaboration to develop industry-ready skilled professionals through structured apprenticeship and practical training programs under the National Apprenticeship Training Scheme (NATS).',
    ],
  },
  // ...Array.from({ length: 12 }, (_, i) => {
  //   const n = i + 4
  //   return {
  //     id: `seminar-${n}`,
  //     title: `Seminar / Lecture ${n}`,
  //     date: '',
  //     venue: '',
  //     images: imageRange('sl', 15 + i * 3, 3),
  //     paragraphs: ['Add seminar/lecture details here.'],
  //   }
  // }),
]
