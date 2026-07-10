import { imageRange } from '../utils/imageRange'

export const industrialTours = [
  {
    id: 'wbreda',
    title: 'West Bengal Renewable Energy Development Agency (WBREDA)',
    date: '16.01.2026',
    coordinator: 'Prof. Debasis Jana',
    images: imageRange('it', 1, 4),
    paragraphs: [
      "On 16th January, 2026, the IEI - IEM Students' Chapter (EE), Department of Electrical Engineering, IEM Kolkata, successfully organized an educational industry visit to the West Bengal Renewable Energy Development Agency (WBREDA), Bidyut Shakti Bhawan, Sector V, Kolkata. The visit was aimed at providing students with industry-oriented exposure to the design, deployment, and operational aspects of solar power plants.",
      "The interaction offered students a valuable opportunity to gain practical insights into modern solar energy technologies and their real-world applications. Experts from WBREDA shared their extensive experience in renewable energy projects and highlighted the growing importance of solar power in meeting sustainable energy demands. The session helped students understand how theoretical concepts learned in classrooms are implemented at the industry level, particularly in large-scale solar installations.",
    ],
  },
  {
    id: 'mg-motor',
    title: 'MG Motor India Ltd',
    date: '13.01.2026',
    coordinator: 'Prof. (Dr.) Sourav Das, Prof. (Dr.) Unmesha Ray',
    images: imageRange('it', 5, 3),
    paragraphs: [
      'An industrial visit was organized by the IEEE IAS IEM Student Branch Chapter in association with the IEEE IES IEM Student Branch Chapter to MG Motor India Ltd, Halol, Gujarat, on 13th January 2026. The visit was planned to provide students with first-hand exposure to the automobile manufacturing industry and to help them understand modern vehicle production techniques, assembly line operations, and industrial management practices.',
      '07 students from the Electrical Engineering Department, Institute of Engineering and Management (IEM), Kolkata, attended the industrial visit.',
    ],
  },
  {
    id: 'polycab',
    title: 'POLYCAB INDIA LTD.',
    date: '21.08.2025',
    coordinator: 'Prof. (Dr) Sourav Das',
    images: imageRange('it', 8, 3),
    paragraphs: [
      'As part of the ongoing collaboration between the Department of Electrical Engineering, IEM Kolkata, and Polycab India Ltd, Halol, Gujarat, an industry visit was conducted on 21st August 2025. This collaboration stems from the Memorandum of Understanding (MoU) signed in July 2025, which remains valid for three years.',
      'The primary objective of this visit was to strengthen the academia-industry linkage through discussions on student internships, placement opportunities, and consultancy projects.',
    ],
  },
  ...Array.from({ length: 12 }, (_, i) => {
    const n = i + 4
    return {
      id: `industrial-tour-${n}`,
      title: `Industrial Tour ${n}`,
      date: '',
      coordinator: '',
      images: imageRange('it', 11 + i * 3, 3),
      paragraphs: ['Add industrial tour details here.'],
    }
  }),
]
