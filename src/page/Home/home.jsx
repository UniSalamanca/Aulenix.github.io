import Animacion from './Animacion.jsx'
import './home.css'

function Home({ onOpenAnimation, onOpenLogin }) {
  return (
    <main className="home-page">
      <span className="home-orbit home-orbit--top-left" aria-hidden="true" />
      <span className="home-orbit home-orbit--right" aria-hidden="true" />
      <span className="home-orbit home-orbit--bottom-left" aria-hidden="true" />

      <section className="home-surface">
        <header className="home-copy">
          <h1>&iexcl;Hola!</h1>
          <p className="home-copy-lead">
            Estamos aqu&iacute; para ayudarte a aprender nuevas habilidades
          </p>
          <p className="home-copy-note">La decisi&oacute;n es tuya:</p>
        </header>

        <div className="home-visual">
          <div className="home-animation-wrapper">
            <Animacion className="home-illustration" />
          </div>
        </div>

        <div className="home-actions">
          <button
            type="button"
            className="home-preview-button"
            onClick={() => onOpenAnimation?.()}
          >
            Ver animacion
          </button>
          <button type="button" className="home-cta" onClick={() => onOpenLogin?.()}>
            Comenzar
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home
