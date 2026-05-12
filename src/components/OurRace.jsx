import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  { icon: '🏊', title: 'Plivanje u moru', desc: 'Kristalno čisti Jadran. Savršeni uvjeti za otvorenu vodu.' },
  { icon: '🚴', title: 'Istarskim cestama', desc: 'Slikovite rute kroz istarsko zaleđe i uz obalu.' },
  { icon: '🏃', title: 'Trčanje uz more', desc: 'Staza duž obale s pogledom na more i starogradsku jezgru.' },
  { icon: '🎉', title: 'Festivalska atmosfera', desc: 'Utrka koja povezuje sport, turizam i lokalnu zajednicu.' },
]

const schedule = [
  { time: 'Veljača 2026', event: 'Otvaranje prijava', icon: '📋' },
  { time: '15.05.2026.', event: 'Redovne prijave', icon: '📝' },
  { time: '31.05.2026.', event: 'Utrka', icon: '🚦' },
  { time: 'Ubrzo nakon završetka utrke', event: 'Proglašenje pobjednika', icon: '🏆' },
]

export default function OurRace() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="our-race" className="section" style={{ background: 'var(--white)' }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="label">Naša utrka</div>
          <h2 className="heading-lg" style={{ color: 'var(--dark)' }}>
            3Poreč Triatlon
          </h2>
          <p style={{ color: 'var(--gray-600)', fontSize: 17, maxWidth: 580, margin: '16px auto 0', lineHeight: 1.7 }}>
            Naša vlastita utrka — Triatlon za sve (idealno za isprobati) i sprint triatlon, sve to u srcu Poreča. Organiziramo je s ljubavlju za sport
            i ponudom neponovljivog iskustva za natjecatelje svih razina.
          </p>
        </motion.div>

        {/* Hero banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            borderRadius: 20,
            overflow: 'hidden',
            position: 'relative',
            marginBottom: 64,
            aspectRatio: '16/6',
            minHeight: 280,
          }}
        >
          <img
            src="https://www.tkporec.hr/wp-content/uploads/2025/02/481044928_122169574976280053_3121264263071609685_n-1-854x1024.jpg"
            alt="3Poreč Triatlon"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, rgba(0,10,40,0.85) 0%, rgba(0,0,0,0.3) 100%)',
            display: 'flex', alignItems: 'center',
          }}>
            <div style={{ padding: '0 48px' }}>
              <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>
                Sprint Triatlon
              </div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 5vw, 64px)', color: '#fff', lineHeight: 1 }}>
                3POREČ 2026
              </div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, marginTop: 8 }}>
                750m → 20km → 5km &nbsp;·&nbsp; Poreč, Hrvatska
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, marginBottom: 64 }}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              style={{
                textAlign: 'center',
                padding: '32px 20px',
                background: 'var(--gray-50)',
                borderRadius: 12,
                border: '1px solid var(--gray-200)',
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 12 }}>{f.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--dark)', marginBottom: 8 }}>{f.title}</div>
              <div style={{ fontSize: 14, color: 'var(--gray-600)', lineHeight: 1.6 }}>{f.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Schedule + CTA */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'center' }}>
          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div style={{ fontWeight: 700, fontSize: 18, color: 'var(--dark)', marginBottom: 24 }}>Raspored događanja</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {schedule.map((s, i) => (
                <div
                  key={s.event}
                  style={{
                    display: 'flex',
                    gap: 16,
                    alignItems: 'flex-start',
                    paddingBottom: i < schedule.length - 1 ? 24 : 0,
                    position: 'relative',
                  }}
                >
                  {/* Timeline dot */}
                  <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: 'var(--blue)', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 16, flexShrink: 0,
                    }}>
                      {s.icon}
                    </div>
                    {i < schedule.length - 1 && (
                      <div style={{ width: 2, flex: 1, background: 'var(--gray-200)', marginTop: 4, minHeight: 24 }} />
                    )}
                  </div>
                  <div style={{ paddingTop: 6 }}>
                    <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--dark)' }}>{s.event}</div>
                    <div style={{ fontSize: 13, color: 'var(--gray-600)', marginTop: 2 }}>{s.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            style={{
              background: 'linear-gradient(135deg, var(--blue), var(--blue-dark))',
              borderRadius: 20,
              padding: '48px 36px',
              color: '#fff',
              textAlign: 'center',
              boxShadow: '0 20px 60px rgba(0,87,168,0.25)',
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>🏅</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, marginBottom: 12 }}>
              Budi dio utrke
            </div>
            <p style={{ opacity: 0.85, lineHeight: 1.7, marginBottom: 28, fontSize: 15 }}>
              Pripremi se, startaj i prelazi cilj na vlastitoj obali.
              Prijave za 3Poreč 2026 uskoro otvorene.
            </p>
            <a
              href="#contact"
              className="btn"
              style={{
                background: 'var(--accent)',
                color: '#fff',
                width: '100%',
                justifyContent: 'center',
                fontSize: 15,
              }}
            >
              Prijavi me za info →
            </a>
            <div style={{ marginTop: 16, opacity: 0.65, fontSize: 13 }}>
              Besplatne obavijesti o otvaranju prijava
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
