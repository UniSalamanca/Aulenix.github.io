import { IconChart } from './icons'
import styles from './Placeholder.module.css'

export default function Progreso() {
  return (
    <div className={styles.page}>
      <div className={styles.iconBadge}>
        <IconChart />
      </div>
      <h1 className={styles.title}>Progreso</h1>
      <p className={styles.subtitle}>Aquí verás tu avance en todos los cursos y actividades completadas.</p>
      <span className={styles.chip}>Próximamente</span>
    </div>
  )
}
