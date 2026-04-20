import { useState, useEffect } from 'react'
import { IconArrowLeft, IconBell, IconBook, IconCalendar, IconChecklist, IconFolder } from './icons'
import styles from './Inicio.module.css'

const TIPS = [
  "Confía en el proceso y te darás cuenta de que todo es posible.",
  "Cada pequeño avance cuenta. Sigue aprendiendo cada día.",
  "La constancia es la clave del éxito educativo.",
]

const ILLUSTRATION_COLORS = [
  'linear-gradient(135deg, #BFDBFE 0%, #93C5FD 40%, #3B82F6 100%)',
  'linear-gradient(135deg, #A7F3D0 0%, #34D399 40%, #059669 100%)',
  'linear-gradient(135deg, #FDE68A 0%, #FBBF24 40%, #D97706 100%)',
]

const QUICK_ACCESS = [
  { label: 'Mis cursos',  Icon: IconBook,      blue: true  },
  { label: 'Calendario', Icon: IconCalendar,  blue: false },
  { label: 'Tareas',     Icon: IconChecklist, blue: false },
  { label: 'Recursos',   Icon: IconFolder,    blue: false },
]

export default function Inicio() {
  const [tipIndex, setTipIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTipIndex(i => (i + 1) % TIPS.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.page}>
      {/* ── Header ── */}
      <header className={styles.header}>
        <button className={styles.headerBtn} aria-label="Volver">
          <IconArrowLeft />
        </button>
        <h1 className={styles.headerTitle}>Inicio</h1>
        <button className={styles.headerBtn} aria-label="Notificaciones">
          <IconBell />
        </button>
      </header>

      {/* ── Greeting ── */}
      <section className={styles.greeting}>
        <h2 className={styles.greetingName}>¡Hola! Wilson Esteban</h2>
        <p className={styles.greetingSubtitle}>Buenos días</p>
      </section>

      {/* ── Tip carousel ── */}
      <section className={styles.carouselSection}>
        <p className={styles.sectionLabel}>Consejo del día</p>
        <div className={styles.carouselOuter}>
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${tipIndex * 100}%)` }}
          >
            {TIPS.map((tip, i) => (
              <div key={i} className={styles.carouselSlide}>
                <div className={styles.carouselCard}>
                  <div className={styles.carouselTextBlock}>
                    <span className={styles.carouselTag}>Consejo</span>
                    <p className={styles.tipText}>{tip}</p>
                  </div>
                  <div
                    className={styles.illustration}
                    style={{ background: ILLUSTRATION_COLORS[i] }}
                    aria-hidden="true"
                  >
                    <div className={styles.illustrationInner} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.dots} role="tablist" aria-label="Indicadores del carrusel">
          {TIPS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === tipIndex}
              aria-label={`Consejo ${i + 1}`}
              className={[styles.dot, i === tipIndex ? styles.dotActive : ''].join(' ')}
              onClick={() => setTipIndex(i)}
            />
          ))}
        </div>
      </section>

      {/* ── Banner ── */}
      <div className={styles.banner} role="img" aria-label="Banner publicitario">
        <span className={styles.bannerText}>Banner publicitario</span>
      </div>

      {/* ── Quick access ── */}
      <section className={styles.quickAccess}>
        <h2 className={styles.quickAccessTitle}>Accesos rápidos</h2>
        <div className={styles.grid}>
          {QUICK_ACCESS.map(({ label, Icon, blue }) => (
            <button
              key={label}
              type="button"
              className={[styles.card, blue ? styles.cardBlue : ''].join(' ')}
            >
              <span className={blue ? styles.cardIconWrap : styles.cardIconWrapAlt}>
                <Icon />
              </span>
              <span className={blue ? styles.cardLabelWhite : styles.cardLabelDark}>
                {label}
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
