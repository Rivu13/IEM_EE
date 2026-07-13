import { imageRange } from '../utils/imageRange'

export const studentChapters = [
  {
    id: 'iem-ee-students-chapter',
    title: 'IEM EE Students\' Chapter',
    images: imageRange('StudentChapter', 1, 3, 'png'),
    paragraphs: [
      'The Students\' Chapter of the Department of Electrical Engineering brings together students who share a passion for technology, innovation and professional growth beyond the classroom. Affiliated with premier professional bodies such as IEEE and IEI, the chapter provides a platform for students to organize and participate in technical workshops, seminars, industrial visits and competitions.',
      'Through the chapter, students take on leadership roles in planning events, mentoring juniors and collaborating with faculty coordinators to bridge the gap between academic learning and industry practice. Membership offers access to a wider professional network, exposure to cutting-edge developments in electrical engineering, and opportunities to represent the department at national and international forums.',
    ],
  },
  ...Array.from({ length: 7 }, (_, i) => {
    const n = i + 2
    return {
      id: `student-chapter-${n}`,
      title: `Student Chapter ${n}`,
      images: imageRange('StudentChapter', 3 * n - 2, 3, 'png'),
      paragraphs: ['Add student chapter details here.'],
    }
  }),
]
