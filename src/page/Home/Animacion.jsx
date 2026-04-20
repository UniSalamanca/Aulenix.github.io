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

export function Animacion({
  className = '',
  viewBox = manoViewBox,
  height,
  glow = true,
  cycle = 0,
  animated = true,
}) {
  const maskId = useId().replace(/:/g, '')
  const componentClassName = ['animation-component', className].filter(Boolean).join(' ')
  const motionClassName = [
    'animation-component__motion',
    animated && 'animation-component__motion--animated',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={componentClassName}>
      <div className={motionClassName}>
        <svg
          key={cycle}
          className="animation-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          width="100%"
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
      </div>
    </div>
  )
}


export default Animacion
