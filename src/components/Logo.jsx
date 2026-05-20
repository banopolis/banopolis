import { Toilet } from 'lucide-react'
import { asset } from '../utils/asset.js'
import pinImg from '../assets/brand/pin.png'
import nameLogoImg from '../assets/brand/namelogo.png'
import mascotImg from '../assets/brand/toiletmascot.png'

/** Brand images: replace files in src/assets/brand/ (Vite will hot-reload). */
export const ASSETS = {
  pin: pinImg,
  nameLogo: nameLogoImg,
  mascot: mascotImg,
  skyline: asset('images/skyline.svg'),
}

export default function Logo({ size = 'md' }) {
  const pinSize = size === 'sm' ? 36 : size === 'lg' ? 72 : 56

  return (
    <div className={`logo logo--${size}`}>
      <svg width={pinSize} height={pinSize * 1.2} viewBox="0 0 56 68" className="logo__pin">
        <path
          d="M28 0C14.7 0 4 10.7 4 24c0 16 24 44 24 44s24-28 24-44C52 10.7 41.3 0 28 0z"
          fill="#4CAF50"
        />
        <foreignObject x="16" y="14" width="24" height="24">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <Toilet size={pinSize * 0.38} color="white" strokeWidth={2} />
          </div>
        </foreignObject>
      </svg>
      {size !== 'sm' && (
        <div className="logo__text">
          <span className="logo__bano">BAÑÓ</span>
          <span className="logo__polis">POLIS</span>
        </div>
      )}
    </div>
  )
}

export function ToiletMarker({ size = 18, color = 'white' }) {
  return <Toilet size={size} color={color} strokeWidth={2.5} />
}

export function ToiletPin({ size = 32 }) {
  const iconSize = size * 0.45
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 32 38">
      <path
        d="M16 0C8.3 0 2 6.3 2 14c0 9.3 14 24 14 24s14-14.7 14-24C30 6.3 23.7 0 16 0z"
        fill="#4CAF50"
      />
      <foreignObject x="8" y="8" width="16" height="16">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
          <Toilet size={iconSize} color="white" strokeWidth={2.5} />
        </div>
      </foreignObject>
    </svg>
  )
}

export function Mascot({ className = '' }) {
  return (
    <img
      src={ASSETS.mascot}
      alt=""
      className={`mascot ${className}`.trim()}
      draggable={false}
    />
  )
}
