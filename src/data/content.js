import {
  Zap,
  Cpu,
  Sun,
  Radio,
  GraduationCap,
  FlaskConical,
  Users,
  Award,
  BookOpen,
  Building2,
} from 'lucide-react'

export const accreditations = [
  { label: 'NBA', sub: 'Accredited', icon: Award },
  { label: 'AICTE', sub: 'Approved', icon: BookOpen },
  { label: 'NIRF', sub: 'Ranked Institute', icon: GraduationCap },
  { label: 'MAKAUT', sub: 'Affiliated', icon: Building2 },
]

export const stats = [
  { label: 'Years of Excellence', value: '25+' },
  { label: 'Expert Faculty', value: '20+' },
  { label: 'Research Labs', value: '8' },
  { label: 'Placement Rate', value: '95%' },
]

export const researchAreas = [
  {
    icon: Zap,
    title: 'Power Systems & Smart Grids',
    description:
      'Grid stability, load forecasting, smart metering and distribution automation for the energy networks of tomorrow.',
  },
  {
    icon: Sun,
    title: 'Renewable Energy Systems',
    description:
      'Solar PV, wind energy conversion and hybrid microgrid integration aimed at sustainable, decentralized power generation.',
  },
  {
    icon: Cpu,
    title: 'Power Electronics & Drives',
    description:
      'Converter design, motor drives and electric vehicle propulsion systems for efficient energy conversion.',
  },
  {
    icon: Radio,
    title: 'Control & Automation',
    description:
      'Industrial automation, robotics and intelligent control strategies using modern computational tools.',
  },
]

export const facilities = [
  'Power Systems Simulation Laboratory',
  'Power Electronics & Drives Laboratory',
  'Electrical Machines Laboratory',
  'Renewable Energy & Microgrid Laboratory',
  'Control Systems Laboratory',
  'High Voltage & Measurement Laboratory',
]

export const events = [
  {
    date: '18 Aug 2026',
    title: 'National Workshop on Smart Grid Technologies',
    description:
      'A two-day hands-on workshop covering smart metering, grid automation and renewable integration for students and faculty.',
  },
  {
    date: '02 Sep 2026',
    title: 'Guest Lecture: Electric Vehicles & Power Electronics',
    description:
      'An industry expert session exploring the latest advances in EV powertrain design and charging infrastructure.',
  },
  {
    date: '25 Sep 2026',
    title: 'Annual Technical Symposium — EEXPO 2026',
    description:
      'Student-led exhibition of live projects, circuit demonstrations and innovation showcases from the department.',
  },
]

export const studentHighlights = [
  {
    icon: Users,
    title: 'Student Clubs & Chapters',
    description:
      'IEEE Student Branch, Robotics Club and Renewable Energy Club offering hands-on learning beyond the classroom.',
  },
  {
    icon: FlaskConical,
    title: 'Projects & Innovation',
    description:
      'Dedicated project labs and mentorship for competitions, hackathons and applied research initiatives.',
  },
  {
    icon: GraduationCap,
    title: 'Placements & Internships',
    description:
      'Strong industry partnerships connecting students to internships and full-time roles in the power and energy sector.',
  },
]
