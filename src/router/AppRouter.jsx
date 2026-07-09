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
      { path: '*', element: <NotFound /> },
    ],
  },
])

function AppRouter() {
  return <RouterProvider router={router} />
}

export default AppRouter
