import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      background: '#060a14',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '48px 0 32px',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 24,
          marginBottom: 32,
          paddingBottom: 32,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img
              src="/tkp.png"
              alt="TK Poreč"
              style={{ height: 40, width: 'auto' }}
            />
            <div>
              <div style={{ color: '#fff', fontWeight: 800, fontSize: 14, letterSpacing: '0.05em' }}>TK POREČ</div>
              <div style={{ color: 'var(--accent)', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em' }}>TRIATLON KLUB</div>
            </div>
          </div>

          {/* Nav links */}
          <nav style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              { label: 'Početna', href: '#home' },
              { label: 'Rezultati', href: '#results' },
              { label: 'O nama', href: '#about' },
              { label: 'Naša utrka', href: '#our-race' },
              { label: 'Kontakt', href: '#contact' },
            ].map((l) => (
              <a key={l.href} href={l.href} style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: 500, transition: 'color 0.2s' }}
                onMouseOver={e => e.target.style.color = '#fff'}
                onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div style={{ display: 'flex', gap: 8 }}>
            <a
              href="https://facebook.com/profile.php?id=61558401613135"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8, padding: '8px 16px',
                color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 500,
                transition: 'all 0.2s',
              }}
              onMouseOver={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}
              onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
            >
              📘 Facebook
            </a>
            <a
              href="https://www.strava.com/clubs/tkporec"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8, padding: '8px 16px',
                color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 500,
                transition: 'all 0.2s',
              }}
              onMouseOver={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}
              onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
            >
              🟠 Strava
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>
            © {year} Triatlon Klub Poreč · Sva prava pridržana
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>Član</span>
            <a href="https://triatlon.hr/" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)', padding: '3px 10px', borderRadius: 100, fontSize: 11, fontWeight: 600, letterSpacing: '0.05em', transition: 'color 0.2s' }}
              onMouseOver={e => e.currentTarget.style.color = '#fff'}
              onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >HTS</a>
            <span style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)', padding: '3px 10px', borderRadius: 100, fontSize: 11, fontWeight: 600, letterSpacing: '0.05em' }}>TAS IŽ</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
