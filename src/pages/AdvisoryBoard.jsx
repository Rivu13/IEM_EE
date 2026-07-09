import PdfPage from '../components/common/PdfPage'
import advisoryBoardPdf from '../assets/pdf/Advisory_Board.pdf'

function AdvisoryBoard() {
  return (
    <PdfPage
      eyebrow="Advisory Board"
      title="Advisory Board"
      description="Meet the advisory board guiding the Department of Electrical Engineering."
      pdfSrc={advisoryBoardPdf}
      fileName="EE-Department-Advisory-Board.pdf"
    />
  )
}

export default AdvisoryBoard
