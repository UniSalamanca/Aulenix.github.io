import { IconUser } from './icons'
import styles from './Placeholder.module.css'

export default function Perfil() {
  return (
    <div className={styles.page}>
      <div className={styles.iconBadge}>
        <IconUser />
      </div>
      <h1 className={styles.title}>Perfil</h1>
      <p className={styles.subtitle}>Gestiona tu información personal, foto y configuración de la cuenta.</p>
      <span className={styles.chip}>En desarrollo</span>
    </div>
  )
}
