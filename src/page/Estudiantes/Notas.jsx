import { IconFile } from './icons'
import styles from './Placeholder.module.css'

export default function Notas() {
  return (
    <div className={styles.page}>
      <div className={styles.iconBadge}>
        <IconFile />
      </div>
      <h1 className={styles.title}>Notas</h1>
      <p className={styles.subtitle}>Consulta tus calificaciones y el historial académico de cada materia.</p>
      <span className={styles.chip}>Próximamente</span>
    </div>
  )
}
