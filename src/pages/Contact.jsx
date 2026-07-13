import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'

const contactFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSc4Ktogl3Yp5v04owgiRNHIhq9x_YK0LlCjCZgu3IjrTDrORA/viewform'

const mapEmbedUrl =
  'https://www.google.com/maps?q=Institute%20of%20Engineering%20and%20Management%2C%20Sector%20V%2C%20Salt%20Lake%2C%20Kolkata&output=embed'

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch With Us"
        description="Have a question about admissions, academics or research? We'd love to hear from you."
      />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg">
            <iframe
              src={mapEmbedUrl}
              title="IEM EE Department location"
              className="h-88 w-full"
              loading="lazy"
            />
          </div>
          <div className="text-slate-300">
            <h3 className="text-lg font-bold text-amber-300">Institute of Engineering &amp; Management</h3>
            <p className="mt-3 text-sm leading-relaxed">
              Management House, D-1, Block -EP, Sector-V, Salt Lake Electronics Complex
            </p>
            <p className="mt-1 text-sm leading-relaxed">Kolkata &ndash; 700 091, West Bengal, India.</p>
            <ul className="mt-5 flex flex-col gap-2 text-sm">
              <li>
                <span className="font-semibold text-white">Phone No.:</span> +91 33 2357 2969, +91 33 2357 7649
              </li>
              <li>
                <span className="font-semibold text-white">Fax No.:</span> +91 33 2357 8302
              </li>
              <li>
                <span className="font-semibold text-white">Email id:</span>{' '}
                <a href="mailto:iem.eedepartment@gmail.com" className="text-cyan-300 hover:text-cyan-200">
                  iem.eedepartment@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              src={`${contactFormUrl}?embedded=true`}
              title="Contact Us Form"
              className="h-[80vh] w-full"
            >
              Loading form…
            </iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
