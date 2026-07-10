import { imageRange } from '../utils/imageRange'

export const studentsCompetitions = [
  {
    id: 'aptech',
    title: 'APTECH 2025-2026 (Aptitude Competition)',
    date: '21st December, 2025 & 27th January, 2026',
    images: imageRange('sc', 1, 5),
    paragraphs: [
      "The IEI-IEM Students' Chapter (EE), Department of Electrical Engineering, IEM Kolkata, successfully organised the 7th Edition of APTECH 2025-2026, a flagship aptitude-based technical competition aimed at enhancing analytical thinking, problem-solving skills, and competitive examination preparedness among students. The event was conducted in two stages — an online Preliminary Round followed by an offline Final Round.",
      'The Preliminary Round, held on 21st December, 2025, was conducted in online mode and was open to students from all streams, including participants outside the IEM-IEM group. The round assessed conceptual understanding, general aptitude and analytical skills. Based on performance, the top-performing candidates were shortlisted for the Final Round.',
      'The Final Round was conducted on 27th January, 2026, at the IEM Management House, commencing from 4:15 PM onwards. The shortlisted participants competed in a highly engaging and competitive environment, showcasing their aptitude, logical reasoning, and quantitative abilities.',
    ],
    results: ['Winner: Nishtha Das — EE — 2nd Year', 'Runner Up: Chirag Das — EE — 3rd Year'],
  },
  {
    id: 'poster-on',
    title: 'POSTER-ON (POSTER MAKING COMPETITION)',
    date: '31st of October, 2025',
    images: imageRange('sc', 6, 5),
    paragraphs: [
      'POSTER-ON 2025, organised under SKILLS STRIKE 5.0 by IET-IEM On Campus, was a technical poster-making competition aimed at showcasing students\' ability to present engineering research, technology, and technological concepts through creative visual representation. Held on 31st October 2025 at the Institute of Engineering & Management (IEM), Management House, the event provided a vibrant platform for participants to merge creativity with technical knowledge.',
      'The competition encouraged participants to communicate complex engineering ideas with clarity and precision while highlighting real-world applications and innovative solutions. Each poster reflected a balance of analytical thinking, research understanding and design excellence, bringing technology and creativity together in a single theme.',
    ],
    results: [
      '1st Prize Winner (Group C6): Shubhranil Bera, Ankit Hazra, Abhimanyu Ganguly, Arka Halder, Anushrree Konar, Sumjeet Parija',
      '2nd Prize Winner (Group C4): Sejda Das, Arya Bhattacharya, Rahi Chatterjee, Anushka Basra, Sangeeta Bhattacharjee, Aarohi Chatterjee',
      '3rd Prize Winner (Group C6): Aman Dey, Arpita Sinha Roy, Nilakshata Sinha Roy, Anwitha Chattopadhyay, Aditya Guha, Sneha Chowdhury',
    ],
  },
  {
    id: 'hive-control',
    title: 'Hive Control: Smart Home Control App Development (Using No-Code Platform)',
    date: '1st and 3rd of September 2025',
    images: imageRange('sc', 11, 3),
    paragraphs: [
      'Organised by the Department of Electrical & Electronics Engineering (EEE) and Department of Electrical Engineering (EE), in association with the IEEE Control System Society IEM Student Branch Chapter, and technically co-sponsored by the IEEE Joint CS-IMS Chapter.',
      'Round 1 — Quiz Event: the first round consisted of a quiz session held on 1st September, where participants actively took part and showcased their knowledge; 22 teams participated, of which 4 teams qualified.',
      'Round 2 — Main Event: the second round was held on 3rd September, where qualified participants presented their ideas and prototypes and engaged with the audience and judges. The session formally began with a welcome speech and the arrival of the Chief Guest.',
    ],
  },
  ...Array.from({ length: 10 }, (_, i) => {
    const n = i + 4
    return {
      id: `students-competition-${n}`,
      title: `Students Competition ${n}`,
      date: '',
      images: imageRange('sc', 14 + i * 3, 3),
      paragraphs: ['Add competition details here.'],
      results: [],
    }
  }),
]
