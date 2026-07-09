import { Download } from 'lucide-react'
import PageHero from './PageHero'

function PdfPage({ eyebrow, title, description, pdfSrc, fileName }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-5 flex justify-end">
            <a
              href={pdfSrc}
              download={fileName}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <iframe
              src={pdfSrc}
              title={title}
              className="h-[80vh] w-full"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default PdfPage
