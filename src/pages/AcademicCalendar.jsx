import PdfPage from '../components/common/PdfPage'
import academicCalendarPdf from '../assets/pdf/Academic Calendar 2026-1.pdf'

function AcademicCalendar() {
  return (
    <PdfPage
      eyebrow="Academics"
      title="Academic Calendar"
      description="Key academic dates and schedules for the Department of Electrical Engineering."
      pdfSrc={academicCalendarPdf}
      fileName="EE-Department-Academic-Calendar.pdf"
    />
  )
}

export default AcademicCalendar
