import Animacion from './Animacion.jsx'

function VistaAnimacion({ onBack }) {
  return (
    <main className="animation-page">
      <span className="animation-orbit animation-orbit--top-left" aria-hidden="true" />
      <span className="animation-orbit animation-orbit--right" aria-hidden="true" />
      <span className="animation-orbit animation-orbit--bottom-left" aria-hidden="true" />

      <section className="animation-shell">
        <div className="animation-copy">
          <p className="animation-eyebrow">Vista previa</p>
          <h1>Animacion.jsx</h1>
          <p className="animation-text">
            Esta vista muestra la ilustracion animada completa para revisarla aparte de la
            pantalla principal.
          </p>
        </div>

        <div className="animation-stage">
          <div className="animation-fly-wrapper">
            <Animacion className="animation-illustration" cycle={1} />
          </div>
        </div>

        <div className="animation-actions">
          <button type="button" className="animation-back" onClick={() => onBack?.()}>
            Volver al home
          </button>
        </div>
      </section>
    </main>
  )
}

export default VistaAnimacion
