import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import AnimatedSection from '../components/common/AnimatedSection'

const contactDetails = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Institute of Engineering & Management, Salt Lake, Kolkata, West Bengal, India',
  },
  { icon: Phone, label: 'Phone', value: '+91 33 2357 2059' },
  { icon: Mail, label: 'Email', value: 'info@iem.edu.in' },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch With Us"
        description="Have a question about admissions, academics or research? We'd love to hear from you."
      />

      <AnimatedSection className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <detail.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{detail.label}</p>
                  <p className="mt-1 text-sm text-slate-600">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Full Name"
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
            <textarea
              required
              rows={5}
              placeholder="Your Message"
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <Send size={16} />
              Send Message
            </button>
            {submitted && (
              <p className="text-center text-sm font-medium text-green-600">
                Thank you — your message has been received.
              </p>
            )}
          </motion.form>
        </div>
      </AnimatedSection>
    </>
  )
}

export default Contact
