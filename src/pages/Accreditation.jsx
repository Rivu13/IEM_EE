import PdfPage from '../components/common/PdfPage'
import accreditationPdf from '../assets/pdf/Accreediation.pdf'

function Accreditation() {
  return (
    <PdfPage
      eyebrow="Accreditation"
      title="Accreditation"
      description="NBA accreditation details for the Department of Electrical Engineering."
      pdfSrc={accreditationPdf}
      fileName="EE-Department-Accreditation.pdf"
    />
  )
}

export default Accreditation
