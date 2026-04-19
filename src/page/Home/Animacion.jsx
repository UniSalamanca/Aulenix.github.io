import { useId } from 'react'
import manoPng from '../../assets/Home Img/Mano.png'
import manoSvgRaw from '../../assets/Home Img/Mano.svg?raw'
import './animacion.css'

const viewBoxMatch = manoSvgRaw.match(/viewBox="([^"]+)"/)
const transformMatch = manoSvgRaw.match(/<g[^>]*transform="([^"]+)"/)
const pathMatches = [...manoSvgRaw.matchAll(/<path\b[^>]*d="([^"]+)"/g)]

const manoViewBox = viewBoxMatch?.[1] ?? '0 0 1343 1171'
const manoTransform = transformMatch?.[1] ?? 'translate(0,1171) scale(0.1,-0.1)'
const manoPaths = pathMatches.map((match) => match[1])
const [, , manoWidth = 1343, manoHeight = 1171] = manoViewBox
  .split(/\s+/)
  .map((value) => Number(value))

function Animacion({
  className = 'home-illustration',
  viewBox = manoViewBox,
  height,
  glow = true,
  cycle = 0,
}) {
  const maskId = useId().replace(/:/g, '')

  return (
    <svg
      key={cycle}
      className={`animation-svg ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      height={height}
      style={{
        display: 'block',
        overflow: 'visible',
        ...(glow ? { filter: 'drop-shadow(0 0 6px rgba(42,34,102,0.2))' } : {}),
      }}
      role="img"
      aria-label="Ilustracion de una persona sobre una mano robotica"
    >
      <defs>
        <mask
          id={maskId}
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={manoWidth}
          height={manoHeight}
        >
          <rect x="0" y="0" width={manoWidth} height={manoHeight} fill="black" />
          <g transform={manoTransform}>
            {manoPaths.map((d, index) => (
              <path
                key={`${cycle}-${index}`}
                className="animation-svg__path"
                style={{ '--path-delay': `${index * 8}ms` }}
                fill="white"
                d={d}
              />
            ))}
          </g>
        </mask>
      </defs>

      <image
        href={manoPng}
        x="0"
        y="0"
        width={manoWidth}
        height={manoHeight}
        preserveAspectRatio="xMidYMid meet"
        mask={`url(#${maskId})`}
      />
    </svg>
  )
}

export function AnimacionPreview({ onBack }) {
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
            Esta versi&oacute;n usa los colores reales de `Mano.png` y revela la ilustraci&oacute;n
            con los `path` de `Mano.svg`, uno por uno.
          </p>
        </div>

        <div className="animation-stage">
          <Animacion className="animation-illustration" cycle={1} />
        </div>

        <div className="animation-actions">
          <button type="button" className="animation-back" onClick={onBack}>
            Volver al home
          </button>
        </div>
      </section>
    </main>
  )
}

export default Animacion
