import { motion } from 'framer-motion'
import { Download, FileSpreadsheet } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import grantInAidXlsx from '../assets/pdf/Grant in project.xlsx'

function GrantInAidProject() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Grant-In-Aid Project"
        description="Sponsored and grant-in-aid research projects undertaken by the Department of Electrical Engineering."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-5 rounded-2xl border border-slate-100 bg-slate-50 p-10 text-center shadow-sm"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <FileSpreadsheet size={28} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Grant-In-Aid Project List</h3>
            <p className="max-w-md text-sm leading-relaxed text-slate-600">
              The complete list of grant-in-aid and sponsored research projects is available as a
              downloadable spreadsheet. Open it with Microsoft Excel, Google Sheets or any
              compatible spreadsheet application.
            </p>
            <a
              href={grantInAidXlsx}
              download="Grant-in-Aid-Project.xlsx"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <Download size={16} />
              Download Excel Sheet
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default GrantInAidProject
