import { useState } from 'react'
import Home from './page/Home/home.jsx'
import { AnimacionPreview } from './page/Home/Animacion.jsx'

function App() {
  const [screen, setScreen] = useState('home')

  if (screen === 'animacion') {
    return <AnimacionPreview onBack={() => setScreen('home')} />
  }

  return <Home onOpenAnimation={() => setScreen('animacion')} />
}

export default App
