export const primaryNav = [
  { label: 'Home', to: '/' },
  {
    label: 'Academics',
    to: null,
    children: [
      { label: 'Assignment', to: '/assignments' },
      { label: 'Class Routine', to: '/class-routine' },
      { label: 'Laboratory and Infrastructure', to: '/laboratory-infrastructure' },
      { label: 'Academic Calendar', to: '/academic-calendar' },
      { label: 'Library', to: '/library' },
    ],
  },
  {
    label: 'Research',
    to: '/research',
    children: [
      // { label: 'Research Areas', to: '/research#areas' },
      // { label: 'Labs & Facilities', to: '/research#labs' },
      { label: 'Publication', to: '/publications' },
      { label: 'Grant-In-Aid Project', to: '/grant-in-aid-project' },
      { label: 'Patent', to: '/patent' },
      { label: 'Outreach Program', to: '/outreach-program' },
    ],
  },
  {
    label: 'Events',
    to: '/events',
    children: [
      { label: 'Conference', to: '/conference' },
      { label: 'Faculty Development Program', to: '/faculty-development-program' },
      { label: 'Industrial Tour', to: '/industrial-tour' },
      { label: 'Seminars & Lecture Series', to: '/seminars-lecture-series' },
      { label: 'Workshops', to: '/workshops' },
      { label: 'Students Competition', to: '/students-competition' },
      { label: 'Award & Achievement', to: '/award-achievement' },
    ],
  },
  {
    label: 'Student\'s Corner',
    to: '/students-corner',
    children: [
      { label: 'Placement & Higher Studies', to: '/placement' },
      { label: 'Student Chapter', to: '/student-chapter' },
      { label: 'Notable Alumni', to: '/notable-alumni' },
      { label: 'NSS & CSR Activities', to: '/nss-csr-activities' },
      { label: 'Video Lectures', to: '/video-lectures' },
      { label: 'Model Developed', to: '/model-developed' },
      { label: 'Batch Photography', to: '/batch-photography' },
    ],
  },
  { label: 'Gallery', to: '/gallery' },
  {
    label: 'More',
    to: '/contact',
    children: [
      { label: 'Faculty', to: '/students-corner#faculty' },
      { label: 'Holiday List', to: '/holiday-list' },
      { label: 'Memorandum of Understanding (MoU)', to: '/mou' },
      { label: 'IEM Code', to: 'https://iemcoe.wixsite.com/iemcoe' },
      { label: 'Feedback', to: '/feedback' },
      { label: 'Engineer\'s Pledge', to: '/engineers-pledge' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'Accreditation', to: '/accreditation' },
      { label: 'Advisory Board', to: '/advisory-board' },
    ],
  },
]

export const topBarLinks = [
  { label: 'Students', to: '/students-corner' },
  { label: 'Faculty', to: '/students-corner#faculty' },
  { label: 'Placements', to: '/students-corner#placements' },
  { label: 'News & Events', to: '/events' },
]
