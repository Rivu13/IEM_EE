import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import Home from '../pages/Home'
import Research from '../pages/Research'
import Events from '../pages/Events'
import StudentsCorner from '../pages/StudentsCorner'
import Contact from '../pages/Contact'
import Accreditation from '../pages/Accreditation'
import AdvisoryBoard from '../pages/AdvisoryBoard'
import Assignments from '../pages/Assignments'
import ClassRoutine from '../pages/ClassRoutine'
import LaboratoryInfrastructure from '../pages/LaboratoryInfrastructure'
import AcademicCalendar from '../pages/AcademicCalendar'
import Library from '../pages/Library'
import Publications from '../pages/Publications'
import GrantInAidProject from '../pages/GrantInAidProject'
import Patent from '../pages/Patent'
import OutreachProgram from '../pages/OutreachProgram'
import Conference from '../pages/Conference'
import FacultyDevelopmentProgram from '../pages/FacultyDevelopmentProgram'
import IndustrialTour from '../pages/IndustrialTour'
import SeminarsLectureSeries from '../pages/SeminarsLectureSeries'
import Workshops from '../pages/Workshops'
import StudentsCompetition from '../pages/StudentsCompetition'
import AwardAchievement from '../pages/AwardAchievement'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'research', element: <Research /> },
      { path: 'events', element: <Events /> },
      { path: 'students-corner', element: <StudentsCorner /> },
      { path: 'contact', element: <Contact /> },
      { path: 'accreditation', element: <Accreditation /> },
      { path: 'advisory-board', element: <AdvisoryBoard /> },
      { path: 'assignments', element: <Assignments /> },
      { path: 'class-routine', element: <ClassRoutine /> },
      { path: 'laboratory-infrastructure', element: <LaboratoryInfrastructure /> },
      { path: 'academic-calendar', element: <AcademicCalendar /> },
      { path: 'library', element: <Library /> },
      { path: 'publications', element: <Publications /> },
      { path: 'grant-in-aid-project', element: <GrantInAidProject /> },
      { path: 'patent', element: <Patent /> },
      { path: 'outreach-program', element: <OutreachProgram /> },
      { path: 'conference', element: <Conference /> },
      { path: 'faculty-development-program', element: <FacultyDevelopmentProgram /> },
      { path: 'industrial-tour', element: <IndustrialTour /> },
      { path: 'seminars-lecture-series', element: <SeminarsLectureSeries /> },
      { path: 'workshops', element: <Workshops /> },
      { path: 'students-competition', element: <StudentsCompetition /> },
      { path: 'award-achievement', element: <AwardAchievement /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

function AppRouter() {
  return <RouterProvider router={router} />
}

export default AppRouter
