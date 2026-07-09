import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import logo from '../../assets/images/iem_logo.png'
import { primaryNav } from '../../data/navigation'
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '../common/SocialIcons'

const socials = [
  { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
  { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
  { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: YoutubeIcon, href: 'https://youtube.com', label: 'YouTube' },
]

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="IEM logo" className="h-12 w-auto" />
            <span className="text-lg font-bold text-white">IEM EE Department</span>
          </Link>
          <p className="text-sm leading-relaxed">
            Department of Electrical Engineering at the Institute of Engineering &amp;
            Management — shaping engineers who power a sustainable future.
          </p>
          <div className="flex items-center gap-3 pt-1">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-blue-500 hover:text-blue-400"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Explore
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {primaryNav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to ?? item.children?.[0]?.to ?? '/'}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link to="/#syllabus" className="transition-colors hover:text-white">
                Curriculum &amp; Syllabus
              </Link>
            </li>
            <li>
              <Link to="/research#publications" className="transition-colors hover:text-white">
                Publications
              </Link>
            </li>
            <li>
              <Link to="/students-corner#placements" className="transition-colors hover:text-white">
                Placements
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Reach Us
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Institute of Engineering &amp; Management, Salt Lake, Kolkata, West Bengal, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0" />
              <a href="tel:+913323572059" className="hover:text-white">
                +91 33 2357 2059
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0" />
              <a href="mailto:info@iem.edu.in" className="hover:text-white">
                info@iem.edu.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 px-6 py-5">
        <p className="mx-auto max-w-7xl text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Department of Electrical Engineering, Institute of
          Engineering &amp; Management. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
