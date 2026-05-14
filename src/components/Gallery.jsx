import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { galleryImages, thumbUrl, fullUrl } from '../data/gallery'

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState(null)

  const close = useCallback(() => setSelected(null), [])

  const prev = useCallback(() => {
    setSelected(i => (i - 1 + galleryImages.length) % galleryImages.length)
  }, [])

  const next = useCallback(() => {
    setSelected(i => (i + 1) % galleryImages.length)
  }, [])

  useEffect(() => {
    if (selected === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected, close, prev, next])

  useEffect(() => {
    document.body.style.overflow = selected !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <section id="galerija" className="section" style={{ background: 'var(--dark)', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'radial-gradient(circle at 20% 50%, var(--blue-light) 0%, transparent 50%), radial-gradient(circle at 80% 50%, var(--accent) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div className="label">Fotografije</div>
          <h2 className="heading-lg" style={{ color: 'var(--white)' }}>Galerija</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, marginTop: 12 }}>
            Trenuci s naših utrka i treninga
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 12,
        }}>
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.5) }}
              onClick={() => setSelected(i)}
              style={{
                position: 'relative',
                aspectRatio: '3/2',
                borderRadius: 10,
                overflow: 'hidden',
                cursor: 'pointer',
                background: 'var(--dark-2)',
                border: 'none',
                padding: 0,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={thumbUrl(img.id)}
                alt={img.alt}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                onMouseLeave={e => e.currentTarget.style.opacity = 0}
              >
                <div style={{
                  position: 'absolute', bottom: 12, right: 12,
                  background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
                  borderRadius: 6, padding: '6px 10px',
                  color: '#fff', fontSize: 12, fontWeight: 600,
                }}>
                  Otvori ↗
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              background: 'rgba(0,0,0,0.93)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 16,
            }}
          >
            {/* Close */}
            <button
              onClick={close}
              style={{
                position: 'absolute', top: 20, right: 20,
                background: 'rgba(255,255,255,0.1)', border: 'none',
                color: '#fff', fontSize: 24, width: 44, height: 44,
                borderRadius: '50%', cursor: 'pointer', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(8px)',
              }}
            >
              ✕
            </button>

            {/* Prev */}
            {galleryImages.length > 1 && (
              <button
                onClick={e => { e.stopPropagation(); prev() }}
                style={{
                  position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.1)', border: 'none',
                  color: '#fff', fontSize: 22, width: 48, height: 48,
                  borderRadius: '50%', cursor: 'pointer', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  backdropFilter: 'blur(8px)',
                }}
              >
                ‹
              </button>
            )}

            {/* Image */}
            <motion.img
              key={selected}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              src={fullUrl(galleryImages[selected].id)}
              alt={galleryImages[selected].alt}
              onClick={e => e.stopPropagation()}
              style={{
                maxWidth: '90vw', maxHeight: '88vh',
                objectFit: 'contain', borderRadius: 10,
                boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
              }}
            />

            {/* Next */}
            {galleryImages.length > 1 && (
              <button
                onClick={e => { e.stopPropagation(); next() }}
                style={{
                  position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.1)', border: 'none',
                  color: '#fff', fontSize: 22, width: 48, height: 48,
                  borderRadius: '50%', cursor: 'pointer', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  backdropFilter: 'blur(8px)',
                }}
              >
                ›
              </button>
            )}

            {/* Counter */}
            {galleryImages.length > 1 && (
              <div style={{
                position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
                color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: 500,
              }}>
                {selected + 1} / {galleryImages.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
