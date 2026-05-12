import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '30+', label: 'Članova kluba' },
  { value: '2024', label: 'Godina osnivanja' },
  { value: '4', label: 'Discipline (Tri/Swim/Cycle/Run)' },
  { value: '2', label: 'Organizirane utrke' },
]

function StatItem({ value, label, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ textAlign: 'center', flex: 1, minWidth: 140 }}
    >
      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(40px, 5vw, 60px)',
          color: 'var(--blue)',
          lineHeight: 1,
          marginBottom: 8,
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 14, color: 'var(--gray-600)', fontWeight: 500, letterSpacing: '0.03em' }}>
        {label}
      </div>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section
      style={{
        background: 'var(--gray-50)',
        borderTop: '1px solid var(--gray-200)',
        borderBottom: '1px solid var(--gray-200)',
        padding: '48px 0',
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
