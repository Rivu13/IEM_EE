import { motion } from 'framer-motion'
import { Download, ExternalLink, ImageOff } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import { getImage } from '../utils/images'
import { books } from '../data/publications'
import publicationListPdf from '../assets/pdf/Publication in Journals, Conference, Book Chapters - List.pdf'

function BookCover({ filename }) {
  const src = getImage(filename)

  if (!src) {
    return (
      <div className="flex h-56 w-40 shrink-0 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-100 text-slate-400">
        <ImageOff size={22} />
      </div>
    )
  }

  return <img src={src} alt="Book cover" className="h-56 w-40 shrink-0 rounded-lg object-cover shadow-sm" />
}

function Publications() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Book Published by the Faculty Members"
        description="Books authored and co-authored by our faculty across academic publishers."
      />

      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-5xl flex-col divide-y divide-slate-100 px-6">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="flex flex-col gap-6 py-10 first:pt-0 last:pb-0 sm:flex-row"
            >
              <div className="flex shrink-0 gap-4">
                {book.images.map((filename) => (
                  <BookCover key={filename} filename={filename} />
                ))}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{book.title}</h3>
                {book.authors && (
                  <p className="mt-2 text-sm italic text-emerald-700">by {book.authors}</p>
                )}
                {book.publisher && (
                  <p className="mt-2 text-sm font-semibold text-cyan-700">{book.publisher}</p>
                )}
                {book.date && <p className="mt-1 text-sm text-red-700">{book.date}</p>}
                {book.isbn && <p className="mt-1 text-sm text-blue-700">ISBN: {book.isbn}</p>}
                {book.href && (
                  <a
                    href={book.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 underline decoration-dotted hover:text-blue-700"
                  >
                    Buy here
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Research Papers"
            title="Research Paper Publication by the Faculty Members"
            description="Publications by our faculty across journals, conferences and book chapters."
          />

          <div className="mt-10">
            <div className="mb-5 flex justify-end">
              <a
                href={publicationListPdf}
                download="Publication-in-Journals-Conference-Book-Chapters-List.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                <Download size={16} />
                Download Full List
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <iframe
                src={publicationListPdf}
                title="Publication in Journals, Conference, Book Chapters - List"
                className="h-[80vh] w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Publications
