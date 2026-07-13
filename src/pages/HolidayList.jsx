import PdfPage from '../components/common/PdfPage'
import holidayListPdf from '../assets/pdf/HOLIDAY LIST 2025.pdf'

function HolidayList() {
  return (
    <PdfPage
      eyebrow="More"
      title="Holiday List"
      description="List of holidays observed by the Department of Electrical Engineering."
      pdfSrc={holidayListPdf}
      fileName="EE-Department-Holiday-List-2025.pdf"
    />
  )
}

export default HolidayList
