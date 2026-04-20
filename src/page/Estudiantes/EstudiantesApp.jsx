import { Routes, Route, Navigate } from 'react-router-dom'
import BottomNav from './BottomNav'
import Inicio from './Inicio'
import Progreso from './Progreso'
import HomeTab from './HomeTab'
import Notas from './Notas'
import Perfil from './Perfil'
import styles from './EstudiantesApp.module.css'

export default function EstudiantesApp() {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.phoneFrame}>
        <main className={styles.content}>
          <Routes>
            <Route index element={<Navigate to="inicio" replace />} />
            <Route path="inicio" element={<Inicio />} />
            <Route path="progreso" element={<Progreso />} />
            <Route path="home" element={<HomeTab />} />
            <Route path="notas" element={<Notas />} />
            <Route path="perfil" element={<Perfil />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </div>
  )
}
