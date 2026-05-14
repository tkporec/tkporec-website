import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const results = [
  {
    race: 'XTERRA / Državno Triatlon Prvenstvo',
    date: '9.5.2026.',
    year: '2026',
    flag: '🇭🇷',
    athletes: [
      { name: 'Goran Peić-Gavran', km: 'Sprint', time: '1:33:12', note: '2. mjesto AG' },
      { name: 'Dean Brebrić', km: '750m/15km/5km', time: '1:37:50', note: '4. mjesto AG 35-39' },
      { name: 'Zdravko Rajič', km: '19.6 km', time: '1:37:12', note: 'Bronca AG, DP' },
      { name: 'Goran Saršon', km: '19.9 km', time: '1:46:12', note: '' },
    ],
  },
  {
    race: 'Wings for Life Zadar',
    date: '10.5.2026.',
    year: '2026',
    flag: '🇭🇷',
    athletes: [
      { name: 'Marko Horvat', km: '35.06 km', time: '2:43:27', note: '52/8000' },
    ],
  },
  {
    race: 'Iron Man 70.3 Jesolo',
    date: '3.5.2026.',
    year: '2026',
    flag: '🇮🇹',
    athletes: [
      { name: 'Damir Blažević', km: '113 km', time: '05:38:00', note: '' },
    ],
  },
  {
    race: 'Trail de Hvar',
    date: '2.5.2026.',
    year: '2026',
    flag: '🇭🇷',
    athletes: [
      { name: 'Božidar Mihić', km: '26 km / 1058m+', time: '3:42:28', note: '26. ukupno / 6. AG' },
    ],
  },
  {
    race: 'Rijeka Run Desetka',
    date: '18.4.2026.',
    year: '2026',
    flag: '🇭🇷',
    athletes: [
      { name: 'Goran Saršon', km: '10 km', time: '00:45:12', note: '' },
    ],
  },
  {
    race: 'Istra 100 by UTMB',
    date: '11–12.4.2026.',
    year: '2026',
    flag: '🇭🇷',
    athletes: [
      { name: 'Božidar Mihić', km: '111.1 km', time: '17:28:08', note: '' },
      { name: 'Goran Saršon', km: '42.2 km', time: '05:12:52', note: '' },
      { name: 'Damir Jurišević', km: '21.5 km', time: '02:41:55', note: '' },
      { name: 'Damir Blažević', km: '21 km', time: '02:07:00', note: '' },
    ],
  },
  {
    race: 'Wizz Air Milano Marathon',
    date: '12.4.2026.',
    year: '2026',
    flag: '🇮🇹',
    athletes: [
      { name: 'Mate Ćutuk', km: '42.2 km', time: '03:56:11', note: '' },
    ],
  },
  {
    race: 'Popolana 10k',
    date: '12.4.2026.',
    year: '2026',
    flag: '🇭🇷',
    athletes: [
      { name: 'Marko Horvat', km: '10 km', time: '00:37:42', note: '2. mjesto' },
    ],
  },
  {
    race: 'Rovinj Run',
    date: '12.4.2026.',
    year: '2026',
    flag: '🇭🇷',
    athletes: [
      { name: 'Goran Peić', km: '10 km', time: '00:45:14', note: '' },
      { name: 'Davor Peić-Gavran', km: '10 km', time: '1:14:00', note: '' },
    ],
  },
  {
    race: 'Grand Fondo Umag',
    date: '11.4.2026.',
    year: '2026',
    flag: '🇭🇷',
    athletes: [
      { name: 'Damir Blažević', km: '80 km', time: '02:54:00', note: '' },
    ],
  },
  {
    race: 'Plava Laguna Half Marathon',
    date: '21–22.3.2026.',
    year: '2026',
    flag: '🇭🇷',
    athletes: [
      { name: 'Antonio Puniš', km: '21.1 km', time: '1:21:38', note: '8. ukupno / 1. Hrvat' },
      { name: 'Goran Saršon', km: '21.1 km', time: '1:42:10', note: '' },
      { name: 'Domagoj Tomičić', km: '21 km', time: '01:55:19', note: '' },
      { name: 'Božidar Mihić', km: '20 km', time: '1:46:45', note: '' },
      { name: 'Damir Blažević', km: '10 km', time: '00:51:00', note: '' },
      { name: 'Mateo Popić', km: '10 km', time: '00:53:56', note: '' },
      { name: 'Damir Jurišević', km: '9.65 km', time: '00:58:28', note: '' },
    ],
  },
  {
    race: '8. kolo IZL Poreč',
    date: '1.3.2026.',
    year: '2026',
    flag: '🇭🇷',
    athletes: [
      { name: 'Marko Horvat', km: '7.2 km', time: '00:25:00', note: 'Pobjednik' },
      { name: 'Antonio Puniš', km: '7.2 km', time: '00:28:31', note: '' },
      { name: 'Mate Ćutuk', km: '7.2 km', time: '00:33:07', note: '' },
      { name: 'Zdravko Rajič', km: '7.2 km', time: '00:30:10', note: '' },
      { name: 'Goran Saršon', km: '7.2 km', time: '00:30:40', note: '' },
      { name: 'Božidar Mihić', km: '7.2 km', time: '00:37:07', note: '' },
      { name: 'Damir Jurišević', km: '7.2 km', time: '00:42:52', note: '' },
    ],
  },
  {
    race: 'Napoli Half Marathon',
    date: '22.2.2026.',
    year: '2026',
    flag: '🇮🇹',
    athletes: [
      { name: 'Marko Horvat', km: '21 km', time: '01:22:46', note: '' },
      { name: 'Fran Volović', km: '21 km', time: '01:23:45', note: '' },
      { name: 'Mladen Kerin', km: '21 km', time: '01:29:13', note: '' },
      { name: 'Zdravko Rajič', km: '21.35 km', time: '01:35:09', note: '' },
      { name: 'Božidar Mihić', km: '21 km', time: '01:45:31', note: '' },
    ],
  },
  {
    race: 'Malta Half Marathon',
    date: '22.2.2026.',
    year: '2026',
    flag: '🇲🇹',
    athletes: [
      { name: 'Goran Peić-Gavran', km: '21 km', time: '01:41:52', note: '' },
      { name: 'Zvjezdana Peić-Gavran', km: '21 km', time: '01:49:07', note: '' },
      { name: 'Suzana Sinčić', km: '21 km', time: '01:59:24', note: '' },
      { name: 'Kristina Puniš', km: '21 km', time: '02:25:52', note: '' },
    ],
  },
  {
    race: 'Malta Marathon',
    date: '22.2.2026.',
    year: '2026',
    flag: '🇲🇹',
    athletes: [
      { name: 'Domagoj Tomičić', km: '42 km', time: '04:20:29', note: '' },
    ],
  },
  {
    race: '7. kolo IZL Tupljak',
    date: '8.2.2026.',
    year: '2026',
    flag: '🇭🇷',
    athletes: [
      { name: 'Antonio Puniš', km: '5.96 km', time: '00:19:54', note: '1. mjesto' },
      { name: 'Marko Horvat', km: '5.96 km', time: '00:20:44', note: '4. mjesto' },
      { name: 'Zdravko Rajič', km: '5.96 km', time: '00:24:43', note: '' },
      { name: 'Goran Saršon', km: '5.96 km', time: '00:25:07', note: '' },
      { name: 'Đurđica Orepić', km: '5.96 km', time: '00:27:05', note: '' },
    ],
  },
  {
    race: '6. kolo IZL Pula',
    date: '25.1.2026.',
    year: '2026',
    flag: '🇭🇷',
    athletes: [
      { name: 'Marko Horvat', km: '6.2 km', time: '00:22:22', note: '' },
      { name: 'Antonio Puniš', km: '6.2 km', time: '00:23:22', note: '' },
      { name: 'Mladen Kerin', km: '6.2 km', time: '00:27:53', note: '' },
      { name: 'Goran Saršon', km: '6.2 km', time: '00:28:09', note: '' },
    ],
  },
  {
    race: '5. kolo IZL Krnica',
    date: '11.1.2026.',
    year: '2026',
    flag: '🇭🇷',
    athletes: [
      { name: 'Marko Horvat', km: '7.16 km', time: '00:27:22', note: '' },
      { name: 'Fran Volović', km: '7.16 km', time: '00:30:50', note: '' },
      { name: 'Antonio Puniš', km: '7.16 km', time: '00:31:04', note: '' },
      { name: 'Zdravko Rajič', km: '7.16 km', time: '00:34:55', note: '' },
      { name: 'Nenad Puškarić', km: '7.16 km', time: '00:35:24', note: '' },
      { name: 'Đurđica Orepić', km: '7.16 km', time: '00:37:08', note: '' },
      { name: 'Goran Saršon', km: '7.16 km', time: '00:38:14', note: '' },
    ],
  },
  {
    race: 'Corsa della Bora',
    date: '4.1.2026.',
    year: '2026',
    flag: '🇮🇹',
    athletes: [
      { name: 'Božidar Mihić', km: '57 km', time: '04:36:06', note: '' },
      { name: 'Mate Ćutuk', km: '34 km', time: '04:39:55', note: '' },
      { name: 'Damir Jurišević', km: '15 km', time: '02:19:00', note: '' },
    ],
  },
  {
    race: '4. kolo IZL Sečovlje',
    date: '14.12.2025.',
    year: '2025',
    flag: '🇸🇮',
    athletes: [
      { name: 'Marko Horvat', km: '7 km', time: '00:23:57', note: '' },
      { name: 'Antonio Puniš', km: '7 km', time: '00:26:18', note: '' },
      { name: 'Zdravko Rajič', km: '7 km', time: '00:30:04', note: '' },
      { name: 'Goran Saršon', km: '7 km', time: '00:31:47', note: '' },
      { name: 'Đurđica Orepić', km: '7 km', time: '00:32:38', note: '' },
    ],
  },
  {
    race: '3. kolo IZL Pazin',
    date: '30.11.2025.',
    year: '2025',
    flag: '🇭🇷',
    athletes: [
      { name: 'Marko Horvat', km: '7 km', time: '00:24:42', note: '' },
      { name: 'Antonio Puniš', km: '7 km', time: '00:28:02', note: '' },
      { name: 'Nenad Puškarić', km: '7 km', time: '00:29:41', note: '' },
      { name: 'Sebastian Nicoletti', km: '7 km', time: '00:30:49', note: '' },
      { name: 'Zdravko Rajič', km: '7 km', time: '00:31:38', note: '' },
      { name: 'Mladen Kerin', km: '7 km', time: '00:31:54', note: '' },
      { name: 'Đurđica Orepić', km: '7 km', time: '00:35:22', note: '' },
      { name: 'Mate Ćutuk', km: '7 km', time: '00:43:49', note: '' },
      { name: 'Maja Nicoletti', km: '7 km', time: '00:53:22', note: '' },
    ],
  },
  {
    race: '2. kolo IZL Sv. Petar u Šumi',
    date: '16.11.2025.',
    year: '2025',
    flag: '🇭🇷',
    athletes: [
      { name: 'Marko Horvat', km: '6.2 km', time: '00:21:30', note: '' },
      { name: 'Antonio Puniš', km: '6.2 km', time: '00:23:59', note: '' },
      { name: 'Nenad Puškarić', km: '6.2 km', time: '00:25:56', note: '' },
      { name: 'Zdravko Rajič', km: '6.2 km', time: '00:27:52', note: '' },
      { name: 'Mate Ćutuk', km: '6.2 km', time: '00:29:21', note: '' },
      { name: 'Goran Saršon', km: '6.2 km', time: '00:30:25', note: '' },
      { name: 'Đurđica Orepić', km: '6.2 km', time: '00:30:59', note: '' },
      { name: 'Mateo Popić', km: '6.2 km', time: '00:33:26', note: '' },
      { name: 'Damir Jurišević', km: '6.2 km', time: '00:37:15', note: '' },
    ],
  },
  {
    race: '1. kolo IZL Medulin',
    date: '9.11.2025.',
    year: '2025',
    flag: '🇭🇷',
    athletes: [
      { name: 'Marko Horvat', km: '6.8 km', time: '00:23:13', note: '' },
      { name: 'Fran Volović', km: '6.8 km', time: '00:25:37', note: '' },
      { name: 'Antonio Puniš', km: '6.8 km', time: '00:27:30', note: '' },
      { name: 'Nenad Puškarić', km: '6.8 km', time: '00:28:35', note: '' },
      { name: 'Sebastian Nicoletti', km: '6.8 km', time: '00:28:37', note: '' },
      { name: 'Zdravko Rajič', km: '6.8 km', time: '00:30:24', note: '' },
      { name: 'Goran Peić-Gavran', km: '6.8 km', time: '00:30:28', note: '' },
      { name: 'Goran Saršon', km: '6.8 km', time: '00:32:11', note: '' },
      { name: 'Mate Ćutuk', km: '6.8 km', time: '00:32:44', note: '' },
      { name: 'Mateo Popić', km: '6.8 km', time: '00:37:00', note: '' },
      { name: 'Maja Nicoletti', km: '6.8 km', time: '00:49:20', note: '' },
    ],
  },
]

const upcoming = []

const years = ['Sve', '2026', '2025']

export default function Results() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [tab, setTab] = useState('results')
  const [yearFilter, setYearFilter] = useState('Sve')
  const [expanded, setExpanded] = useState(null)

  const filtered = yearFilter === 'Sve' ? results : results.filter(r => r.year === yearFilter)

  return (
    <section id="results" className="section" style={{ background: 'var(--gray-50)' }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <div className="label">Natjecanja</div>
          <h2 className="heading-lg" style={{ color: 'var(--dark)' }}>Rezultati &amp; Raspored</h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', gap: 4, justifyContent: 'center', marginBottom: 32, background: 'var(--gray-200)', borderRadius: 8, padding: 4, maxWidth: 380, margin: '0 auto 32px' }}
        >
          {[{ id: 'results', label: 'Rezultati' }, { id: 'upcoming', label: 'Raspored' }].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                flex: 1, padding: '10px 16px', borderRadius: 6, fontSize: 14, fontWeight: 600,
                transition: 'all 0.2s',
                background: tab === t.id ? 'var(--white)' : 'transparent',
                color: tab === t.id ? 'var(--blue)' : 'var(--gray-600)',
                boxShadow: tab === t.id ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              {t.label}
            </button>
          ))}
        </motion.div>

        {tab === 'results' && (
          <>
            {/* Year filter */}
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 32, flexWrap: 'wrap' }}>
              {years.map(y => (
                <button
                  key={y}
                  onClick={() => { setYearFilter(y); setExpanded(null) }}
                  style={{
                    padding: '6px 18px', borderRadius: 100, fontSize: 13, fontWeight: 600,
                    border: yearFilter === y ? '1px solid var(--blue)' : '1px solid var(--gray-200)',
                    background: yearFilter === y ? 'var(--blue)' : 'var(--white)',
                    color: yearFilter === y ? '#fff' : 'var(--gray-600)',
                    transition: 'all 0.15s',
                  }}
                >
                  {y}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {filtered.map((r, i) => (
                <motion.div
                  key={r.race + r.date}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: Math.min(i * 0.03, 0.4) }}
                  style={{
                    background: 'var(--white)',
                    borderRadius: 10,
                    border: '1px solid var(--gray-200)',
                    overflow: 'hidden',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  }}
                >
                  {/* Race header — clickable */}
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    style={{
                      width: '100%', background: 'none', display: 'flex',
                      alignItems: 'center', justifyContent: 'space-between',
                      padding: '13px 18px', gap: 12, cursor: 'pointer',
                      borderBottom: expanded === i ? '1px solid var(--gray-100)' : 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1, minWidth: 0 }}>
                      <span style={{ fontSize: 18 }}>{r.flag}</span>
                      <div style={{ textAlign: 'left', minWidth: 0 }}>
                        <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--dark)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.race}</div>
                        <div style={{ fontSize: 12, color: 'var(--gray-400)', marginTop: 1 }}>{r.date}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                      <span style={{
                        background: 'rgba(0,87,168,0.08)', color: 'var(--blue)',
                        padding: '3px 10px', borderRadius: 100, fontSize: 12, fontWeight: 600,
                      }}>
                        {r.athletes.length} {r.athletes.length === 1 ? 'sportaš' : 'sportaša'}
                      </span>
                      <span style={{ color: 'var(--gray-400)', fontSize: 14, transition: 'transform 0.2s', display: 'inline-block', transform: expanded === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
                    </div>
                  </button>

                  {/* Expanded athletes */}
                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '8px 18px 12px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto', gap: '4px 14px', alignItems: 'center' }}>
                            {['Sportaš', 'Km', 'Vrijeme', 'Napomena'].map(h => (
                              <div key={h} style={{ fontSize: 10, fontWeight: 700, color: 'var(--gray-400)', letterSpacing: '0.08em', textTransform: 'uppercase', paddingBottom: 4, textAlign: h === 'Sportaš' ? 'left' : 'right' }}>{h}</div>
                            ))}
                            {r.athletes.map((a) => (
                              <>
                                <div key={a.name + 'n'} style={{ fontSize: 13, fontWeight: 500, color: 'var(--dark)', padding: '5px 0', borderTop: '1px solid var(--gray-100)' }}>{a.name}</div>
                                <div key={a.name + 'k'} style={{ fontSize: 12, color: 'var(--gray-600)', textAlign: 'right', padding: '5px 0', borderTop: '1px solid var(--gray-100)' }}>{a.km}</div>
                                <div key={a.name + 't'} style={{ fontSize: 12, fontWeight: 700, color: 'var(--blue)', textAlign: 'right', padding: '5px 0', borderTop: '1px solid var(--gray-100)', fontFamily: 'monospace' }}>{a.time}</div>
                                <div key={a.name + 'p'} style={{ fontSize: 12, color: a.note ? 'var(--accent-dark)' : 'var(--gray-300)', fontWeight: a.note ? 600 : 400, textAlign: 'right', padding: '5px 0', borderTop: '1px solid var(--gray-100)' }}>{a.note || '—'}</div>
                              </>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {tab === 'upcoming' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {upcoming.map((r, i) => (
              <motion.div
                key={r.race}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: 'var(--white)', border: '1px solid var(--gray-200)',
                  borderRadius: 10, padding: '18px 20px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  flexWrap: 'wrap', gap: 12,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 24 }}>{r.flag}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--dark)' }}>{r.race}</div>
                    <div style={{ fontSize: 13, color: 'var(--gray-600)', marginTop: 2 }}>{r.date} · {r.distance}</div>
                  </div>
                </div>
                <span style={{ background: 'rgba(232,160,32,0.12)', color: 'var(--accent-dark)', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700 }}>
                  Uskoro
                </span>
              </motion.div>
            ))}
            <div style={{ textAlign: 'center', padding: '24px', border: '2px dashed var(--gray-200)', borderRadius: 10, color: 'var(--gray-400)', fontSize: 14, marginTop: 8 }}>
              Novi raspored se dodaje kontinuirano. Prati nas na{' '}
              <a href="https://facebook.com/profile.php?id=61558401613135" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 600 }}>Facebooku</a>.
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
