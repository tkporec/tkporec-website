import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const disciplines = [
  {
    name: 'Super Sprint',
    swim: '375m',
    bike: '10km',
    run: '2.5km',
    desc: 'Idealan ulaz u svijet triatlona. Brzo, intenzivno i nezaboravno.',
    color: '#22c55e',
    bg: 'linear-gradient(135deg, #052e16, #14532d)',
  },
  {
    name: 'Sprint',
    swim: '750m',
    bike: '20km',
    run: '5km',
    desc: 'Savršen za sportaše koji žele ubrzati i testirati se na kraćoj distanci.',
    color: '#3b82f6',
    bg: 'linear-gradient(135deg, #0c1445, #1e3a8a)',
  },
  {
    name: 'Olimpijski',
    swim: '1.5km',
    bike: '40km',
    run: '10km',
    desc: 'Standardna olimpijska distanca. Savršen balans između brzine i izdržljivosti.',
    color: '#a855f7',
    bg: 'linear-gradient(135deg, #2e1065, #4c1d95)',
  },
  {
    name: '70.3',
    swim: '1.9km',
    bike: '90km',
    run: '21.1km',
    desc: 'Polu-Ironman. Zahtijeva ozbiljan trening i mentalnu snagu. Pravi test za ambiciozne.',
    color: '#f59e0b',
    bg: 'linear-gradient(135deg, #451a03, #92400e)',
  },
  {
    name: 'Ironman',
    swim: '3.8km',
    bike: '180km',
    run: '42.2km',
    desc: 'Vrhunac triatlona. Cijeli dan rada. Neponovljiv osjećaj na cilju. Jesi li spreman?',
    color: '#ef4444',
    bg: 'linear-gradient(135deg, #450a0a, #991b1b)',
  },
]

export default function Disciplines() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="disciplines"
      className="section"
      style={{ background: 'var(--dark)', position: 'relative', overflow: 'hidden' }}
    >
      {/* background pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,87,168,0.12) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(232,160,32,0.08) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div className="container" ref={ref} style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="label">Trening</div>
          <h2 className="heading-lg" style={{ color: '#fff' }}>Sve distance,<br />jedan klub</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 17, maxWidth: 500, margin: '16px auto 0', lineHeight: 1.7 }}>
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {disciplines.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                background: d.bg,
                borderRadius: 16,
                padding: '32px 28px',
                border: `1px solid ${d.color}30`,
                cursor: 'default',
                transition: 'box-shadow 0.2s',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: `${d.color}20`,
                  border: `1px solid ${d.color}50`,
                  borderRadius: 100,
                  color: d.color,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  marginBottom: 20,
                }}
              >
                {d.name}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                {[
                  { icon: '🏊', label: 'Plivanje', val: d.swim },
                  { icon: '🚴', label: 'Bicikl', val: d.bike },
                  { icon: '🏃', label: 'Trčanje', val: d.run },
                ].map((seg) => (
                  <div key={seg.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>{seg.icon} {seg.label}</span>
                    <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>{seg.val}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  height: 1,
                  background: `${d.color}25`,
                  margin: '16px 0',
                }}
              />

              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.6 }}>
                {d.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
