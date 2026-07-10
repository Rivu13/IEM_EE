import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Mail, Menu, Phone, Search, X } from 'lucide-react'
import logo from '../../assets/images/iem_logo.png'
import { primaryNav, topBarLinks } from '../../data/navigation'
import AudioToggle from '../common/AudioToggle'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openMobileGroup, setOpenMobileGroup] = useState(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-slate-900 text-slate-200 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <a href="mailto:info@iem.edu.in" className="flex items-center gap-2 hover:text-white">
              <Mail size={13} /> info@iem.edu.in
            </a>
            <a href="tel:+913323572059" className="flex items-center gap-2 hover:text-white">
              <Phone size={13} /> +91 33 2357 2059
            </a>
          </div>
          <div className="flex items-center gap-5">
            {topBarLinks.map((link) => (
              <Link key={link.label} to={link.to} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`transition-colors duration-300 ${
          isScrolled ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-white'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="IEM logo" className="h-12 w-auto" />
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="text-base font-bold text-slate-900">IEM EE Department</span>
              <span className="text-xs font-medium text-blue-600">
                Electrical Engineering &middot; NBA Accredited
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((item) => (
              <div key={item.label} className="group relative">
                {item.to ? (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                        isActive ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                      }`
                    }
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} />}
                  </NavLink>
                ) : (
                  <span className="flex cursor-default items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-slate-700">
                    {item.label}
                    {item.children && <ChevronDown size={14} />}
                  </span>
                )}

                {item.children && (
                  <div className="invisible absolute left-0 top-full z-10 w-80 translate-y-1 rounded-xl border border-slate-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-blue-300 hover:text-blue-600"
            >
              <Search size={18} />
            </button>
            <AudioToggle />
            <Link
              to="/contact"
              className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              Admissions Open
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {primaryNav.map((item) => (
                <div key={item.label} className="border-b border-slate-50 last:border-none">
                  <button
                    type="button"
                    onClick={() =>
                      item.children
                        ? setOpenMobileGroup((prev) => (prev === item.label ? null : item.label))
                        : setIsMobileOpen(false)
                    }
                    className="flex w-full items-center justify-between py-3 text-left"
                  >
                    {item.children ? (
                      <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                    ) : (
                      <Link
                        to={item.to}
                        onClick={() => setIsMobileOpen(false)}
                        className="text-sm font-semibold text-slate-800"
                      >
                        {item.label}
                      </Link>
                    )}
                    {item.children && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openMobileGroup === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {item.children && openMobileGroup === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.to}
                            onClick={() => setIsMobileOpen(false)}
                            className="block py-2 text-sm text-slate-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="mt-3 flex items-center gap-3">
                <AudioToggle />
                <Link
                  to="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex-1 rounded-full bg-blue-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
                >
                  Admissions Open
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
