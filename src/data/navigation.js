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
  { label: 'Events', to: '/events' },
  { label: 'Student\'s Corner', to: '/students-corner' },
  {
    label: 'More',
    to: '/contact',
    children: [
      { label: 'Faculty', to: '/students-corner#faculty' },
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
