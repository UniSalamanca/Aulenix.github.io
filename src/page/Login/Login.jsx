import { useState } from 'react'
import logoAulenix from '../../assets/Logos/Logo N y A.png'
import './Login.css'

function Login({ onBack, onLoginSuccess }) {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    onLoginSuccess?.()
  }

  return (
    <main className="login-page">
      <section className="login-phone">
        <span className="login-orbit login-orbit--top-left" aria-hidden="true" />
        <span className="login-orbit login-orbit--right" aria-hidden="true" />

        <button
          type="button"
          className="login-back"
          aria-label="Volver"
          onClick={() => onBack?.()}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M14.75 5.75L8.5 12l6.25 6.25"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
            />
          </svg>
        </button>

        <header className="login-brand">
          <img className="login-logo" src={logoAulenix} alt="Aulenix" />
        </header>

        <section className="login-card">
          <div className="login-copy">
            <h1>Bienvenido/a</h1>
            <p>&iquest;Listo para empezar tu viaje de aprendizaje?</p>
            <p className="login-copy-emphasis">Tu camino est&aacute; aqu&iacute;</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label className="login-field">
              <span className="login-visually-hidden">Correo estudiantil</span>
              <input
                autoComplete="email"
                name="email"
                placeholder="Correo Estudiantil"
                type="email"
              />
            </label>

            <label className="login-field login-field--password">
              <span className="login-field-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M8 10V8a4 4 0 118 0v2"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.9"
                  />
                  <rect
                    x="6"
                    y="10"
                    width="12"
                    height="10"
                    rx="2.6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  />
                </svg>
              </span>
              <span className="login-visually-hidden">Contrasena</span>
              <input
                autoComplete="current-password"
                name="password"
                placeholder="Contrase&ntilde;a"
                type={showPassword ? 'text' : 'password'}
              />
              <button
                type="button"
                className="login-visibility"
                aria-label={showPassword ? 'Ocultar contrasena' : 'Mostrar contrasena'}
                onClick={() => setShowPassword((currentValue) => !currentValue)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M2.75 12s3.25-5.25 9.25-5.25S21.25 12 21.25 12 18 17.25 12 17.25 2.75 12 2.75 12z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="2.4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </button>
            </label>

            <label className="login-remember">
              <input
                checked={rememberMe}
                name="rememberMe"
                type="checkbox"
                onChange={(event) => setRememberMe(event.target.checked)}
              />
              <span>Recordar siempre</span>
            </label>

            <button type="submit" className="login-submit">
              Ingresar
            </button>
          </form>

          <p className="login-legal">
            Al hacer clic en <span className="login-legal-accent">"Ingresar"</span>, confirmo que
            he le&iacute;do y acepto los <span className="login-legal-link">T&eacute;rminos y
            Condiciones</span> y la <span className="login-legal-link">Pol&iacute;tica de
            Privacidad</span>.
          </p>
        </section>
      </section>
    </main>
  )
}

export default Login
