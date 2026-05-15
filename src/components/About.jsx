import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const team = [
  { role: 'Predsjednik', name: 'Marko Horvat' },
  { role: 'Dopredsjednik', name: 'Sebastian Nicoletti' },
]

const values = [
  { icon: '🎯', title: 'Fokus na performanse', desc: 'Zajedničkim treninzima do cilja.' },
  { icon: '🤝', title: 'Zajednica', desc: 'Više od 30 članova koji treniraju zajedno i guraju jedni druge naprijed.' },
  { icon: '🌊', title: 'Lokacija', desc: 'Poreč i Istra — savršeno okruženje za triatlon trening cijele godine.' },
  { icon: '🏆', title: 'Rezultati', desc: 'Natječe se na domaćim i međunarodnim utrkama od prvog dana.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section" style={{ background: 'var(--white)' }}>
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="label">O nama</div>
          <h2 className="heading-lg" style={{ color: 'var(--dark)' }}>
            Klub koji raste
          </h2>
          <p style={{ color: 'var(--gray-600)', fontSize: 17, maxWidth: 560, margin: '16px auto 0', lineHeight: 1.7 }}>
            Osnovan 2024. godine, Triatlon Klub Poreč brzo je izrastao u aktivnu zajednicu
            triatlonaca u srcu Istre.
          </p>
        </motion.div>

        {/* Two columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center', marginBottom: 80 }}>
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                borderRadius: 12,
                overflow: 'hidden',
                aspectRatio: '4/3',
                background: 'var(--gray-100)',
              }}
            >
              <img
                src="/about-shirt.jpg"
                alt="TK Poreč oprema"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Accent badge */}
            <div
              style={{
                position: 'absolute',
                bottom: -20,
                right: -20,
                background: 'var(--blue)',
                color: '#fff',
                padding: '16px 24px',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 14,
                lineHeight: 1.3,
                boxShadow: '0 8px 32px rgba(0,87,168,0.3)',
              }}
            >
              <div style={{ fontSize: 28, fontFamily: "'Bebas Neue', sans-serif" }}>2024</div>
              <div style={{ opacity: 0.8, fontSize: 12 }}>Osnovan</div>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p style={{ color: 'var(--gray-600)', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
              Triatlon Klub Poreč utemeljen je s misijom promicanja triatlona u Poreču i okolici.
              Već u prvoj godini okupili smo više od 30 članova i organizirali vlastitu utrku —
              što jasno govori o entuzijazmu koji pokreće ovaj klub.
            </p>
            <p style={{ color: 'var(--gray-600)', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
              Član smo Triatlonskog saveza Istarske županije i Hrvatskog triatlonskog saveza.
              Sudjelujemo u svemu od supersprinta do Ironmana.
            </p>

            {/* Team */}
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 16 }}>
                Vodstvo kluba
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {team.map((t) => (
                  <div key={t.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 16px', background: 'var(--gray-50)', borderRadius: 8, borderLeft: '3px solid var(--accent)' }}>
                    <span style={{ fontWeight: 600, color: 'var(--dark)', fontSize: 15 }}>{t.name}</span>
                    <span style={{ fontSize: 13, color: 'var(--gray-600)' }}>{t.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              style={{
                padding: '28px 24px',
                background: 'var(--gray-50)',
                borderRadius: 12,
                border: '1px solid var(--gray-200)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{v.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--dark)', marginBottom: 8 }}>{v.title}</div>
              <div style={{ fontSize: 14, color: 'var(--gray-600)', lineHeight: 1.6 }}>{v.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
