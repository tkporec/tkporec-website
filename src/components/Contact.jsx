import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const FORMSPREE_URL = 'https://formspree.io/f/xkoyyazb'
const interests = ['Postati član', 'Trening info', 'Utrka 3Poreč', 'Sponzorstvo', 'Nešto drugo']

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState('')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    const formData = new FormData(e.target)
    if (selected) formData.append('Zanima me', selected)
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSent(true)
      } else {
        setError('Nešto je pošlo po zlu. Pokušaj ponovo ili nas kontaktiraj direktno.')
      }
    } catch {
      setError('Greška pri slanju. Provjeri internetsku vezu.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section" style={{ background: 'var(--dark)', position: 'relative', overflow: 'hidden' }}>
      {/* background accents */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(0,87,168,0.15) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="container" ref={ref} style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="label">Kontakt</div>
          <h2 className="heading-lg" style={{ color: '#fff' }}>Spreman/a za start?</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 17, maxWidth: 500, margin: '16px auto 0', lineHeight: 1.7 }}>
            Javi nam se — odgovorimo u 24 sata.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'start' }}>
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div style={{ marginBottom: 40 }}>
              <img
                src="/logo.png"
                alt="TK Poreč Logo"
                style={{ height: 64, marginBottom: 20 }}
              />
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.7 }}>
                Triatlon Klub Poreč — zajednica sportaša koji guraju granice na moru,
                cesti i stazi istarskog poluotoka.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: '📍', label: 'Lokacija', value: 'Poreč, Istarska županija, Hrvatska' },
                { icon: '🌐', label: 'Web', value: 'www.tkporec.hr', link: 'https://www.tkporec.hr' },
                { icon: '📘', label: 'Facebook', value: 'TK Poreč', link: 'https://facebook.com/profile.php?id=61558401613135' },
                { icon: '🏛️', label: 'Savez', value: 'Hrvatski Triatlonski Savez' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'rgba(255,255,255,0.07)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>{item.label}</div>
                    {item.link
                      ? <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 500 }}>{item.value}</a>
                      : <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: 500 }}>{item.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 16,
              padding: '40px 36px',
              backdropFilter: 'blur(12px)',
            }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '40px 0' }}
              >
                <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 22, marginBottom: 8 }}>Poruka primljena!</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15 }}>Javimo se uskoro. Vidimo se na treningu! 💪</div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    { label: 'Ime', name: 'name', type: 'text', placeholder: 'Tvoje ime' },
                    { label: 'Email', name: 'email', type: 'email', placeholder: 'email@primjer.hr' },
                  ].map((f) => (
                    <div key={f.name}>
                      <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 600, marginBottom: 6, letterSpacing: '0.04em' }}>{f.label}</label>
                      <input
                        type={f.type}
                        name={f.name}
                        placeholder={f.placeholder}
                        required
                        style={{
                          width: '100%', padding: '12px 14px',
                          background: 'rgba(255,255,255,0.07)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          borderRadius: 8, color: '#fff', fontSize: 14,
                          outline: 'none', boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 600, marginBottom: 8, letterSpacing: '0.04em' }}>Zanima me</label>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {interests.map((i) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => setSelected(i)}
                        style={{
                          padding: '7px 14px',
                          borderRadius: 100,
                          fontSize: 13,
                          fontWeight: 500,
                          border: selected === i ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.15)',
                          background: selected === i ? 'rgba(232,160,32,0.15)' : 'rgba(255,255,255,0.04)',
                          color: selected === i ? 'var(--accent)' : 'rgba(255,255,255,0.65)',
                          transition: 'all 0.15s',
                          cursor: 'pointer',
                        }}
                      >
                        {i}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 600, marginBottom: 6, letterSpacing: '0.04em' }}>Poruka</label>
                  <textarea
                    rows={4}
                    name="poruka"
                    placeholder="Napiši nešto o sebi ili pitaj što te zanima..."
                    style={{
                      width: '100%', padding: '12px 14px',
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 8, color: '#fff', fontSize: 14,
                      outline: 'none', resize: 'vertical', fontFamily: 'Inter, sans-serif',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                {error && (
                  <div style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 8, padding: '10px 14px', color: '#fca5a5', fontSize: 13 }}>
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="btn btn-primary"
                  style={{ justifyContent: 'center', padding: '14px', fontSize: 15, marginTop: 4, opacity: sending ? 0.7 : 1 }}
                >
                  {sending ? 'Šaljem...' : 'Pošalji poruku →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
