import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Početna', href: '#home' },
  { label: 'O nama', href: '#about' },
  { label: 'Rezultati', href: '#results' },
  { label: 'Galerija', href: '#galerija' },
  { label: 'Naša utrka', href: '#our-race' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10,15,30,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        padding: scrolled ? '14px 0' : '22px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#home" onClick={() => handleNav('#home')} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img
            src="/logo.png"
            alt="TK Poreč"
            style={{ height: 44, width: 'auto' }}
          />
          <div>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: 15, letterSpacing: '0.05em', lineHeight: 1.1 }}>
              TK POREČ
            </div>
            <div style={{ color: 'var(--accent)', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Triatlon Klub
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="desktop-nav">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                background: 'none',
                color: active === link.href ? 'var(--accent)' : 'rgba(255,255,255,0.8)',
                fontSize: 14,
                fontWeight: 500,
                padding: '8px 14px',
                borderRadius: 4,
                transition: 'all 0.2s',
                letterSpacing: '0.02em',
                borderBottom: active === link.href ? '2px solid var(--accent)' : '2px solid transparent',
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
            className="btn btn-primary"
            style={{ marginLeft: 8, padding: '10px 20px', fontSize: 13 }}
          >
            Pridruži se →
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: 'none',
            color: '#fff',
            fontSize: 24,
            display: 'none',
            padding: 8,
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'rgba(10,15,30,0.98)',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
            }}
          >
            <div className="container" style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  style={{
                    background: 'none',
                    color: active === link.href ? 'var(--accent)' : 'rgba(255,255,255,0.85)',
                    fontSize: 16,
                    fontWeight: 500,
                    padding: '12px 0',
                    textAlign: 'left',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
                className="btn btn-primary"
                style={{ marginTop: 12, justifyContent: 'center' }}
              >
                Pridruži se →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.header>
  )
}
