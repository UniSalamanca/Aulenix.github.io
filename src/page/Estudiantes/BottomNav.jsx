import { NavLink, useResolvedPath, useMatch } from 'react-router-dom'
import { IconHome, IconChart, IconPlus, IconFile, IconUser } from './icons'
import styles from './BottomNav.module.css'

const TABS = [
  { to: 'inicio',   label: 'Inicio',   Icon: IconHome,  center: false },
  { to: 'progreso', label: 'Progreso', Icon: IconChart, center: false },
  { to: 'home',     label: null,       Icon: IconPlus,  center: true  },
  { to: 'notas',    label: 'Notas',    Icon: IconFile,  center: false },
  { to: 'perfil',   label: 'Perfil',   Icon: IconUser,  center: false },
]

export default function BottomNav() {
  return (
    <nav className={styles.nav} aria-label="Navegación principal">
      {TABS.map(({ to, label, Icon, center }) =>
        center ? (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [styles.centerTab, isActive ? styles.active : ''].join(' ').trim()
            }
            aria-label="Home"
          >
            <span className={styles.centerIcon}>
              <Icon />
            </span>
          </NavLink>
        ) : (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [styles.tab, isActive ? styles.active : ''].join(' ').trim()
            }
          >
            <span className={styles.icon}><Icon /></span>
            <span className={styles.label}>{label}</span>
          </NavLink>
        )
      )}
    </nav>
  )
}
