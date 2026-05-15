import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--dark)',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(https://www.tkporec.hr/wp-content/uploads/2025/02/481044928_122169574976280053_3121264263071609685_n-1-854x1024.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          opacity: 0.28,
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(0,30,80,0.85) 0%, rgba(10,15,30,0.7) 50%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      {/* Animated background accent */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--blue-light), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 120, paddingBottom: 80 }}>
        <div style={{ maxWidth: 760 }}>
          <motion.div
            className="label"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            style={{ color: 'var(--accent)' }}
          >
            🏊 🚴 🏃 &nbsp; Poreč, Hrvatska
          </motion.div>

          <motion.h1
            className="heading-xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            style={{ color: '#fff', marginBottom: 8 }}
          >
            TRIATLON
          </motion.h1>

          <motion.h1
            className="heading-xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            style={{ color: 'var(--accent)', marginBottom: 28 }}
          >
            KLUB POREČ
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 18,
              maxWidth: 520,
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            Train Together. Race Stronger.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <a href="#contact" className="btn btn-primary" style={{ fontSize: 15 }}>
              Postani član →
            </a>
            <a href="#about" className="btn btn-outline" style={{ fontSize: 15 }}>
              Saznaj više
            </a>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.4)',
          fontSize: 22,
          zIndex: 2,
        }}
      >
        ↓
      </motion.div>
    </section>
  )
}
