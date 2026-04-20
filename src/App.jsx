import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Home from './page/Home/home.jsx'
import VistaAnimacion from './page/Home/VistaAnimacion.jsx'
import Login from './page/Login/Login.jsx'
import EstudiantesApp from './page/Estudiantes/EstudiantesApp.jsx'

function HomeRoute() {
  const navigate = useNavigate()
  return (
    <Home
      onOpenAnimation={() => navigate('/animacion')}
      onOpenLogin={() => navigate('/login')}
    />
  )
}

function AnimationRoute() {
  const navigate = useNavigate()
  return <VistaAnimacion onBack={() => navigate('/')} />
}

function LoginRoute() {
  const navigate = useNavigate()
  return (
    <Login
      onBack={() => navigate('/')}
      onLoginSuccess={() => navigate('/app/inicio')}
    />
  )
}

function App() {
  return (
    <Routes>
      <Route path="/"          element={<HomeRoute />} />
      <Route path="/animacion" element={<AnimationRoute />} />
      <Route path="/login"     element={<LoginRoute />} />
      <Route path="/app/*"     element={<EstudiantesApp />} />
      <Route path="*"          element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
