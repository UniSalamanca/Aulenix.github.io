import { IconPlus } from './icons'
import styles from './Placeholder.module.css'

export default function HomeTab() {
  return (
    <div className={styles.page}>
      <div className={styles.iconBadge}>
        <IconPlus />
      </div>
      <h1 className={styles.title}>Home</h1>
      <p className={styles.subtitle}>Panel central con accesos rápidos a todas las funciones de la plataforma.</p>
      <span className={styles.chip}>En desarrollo</span>
    </div>
  )
}
