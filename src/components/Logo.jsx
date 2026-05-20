import { Toilet } from 'lucide-react'

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
    <svg viewBox="0 0 160 200" className={`mascot ${className}`}>
      <rect x="40" y="50" width="80" height="90" rx="12" fill="white" stroke="#003399" strokeWidth="3" />
      <rect x="55" y="140" width="50" height="14" rx="3" fill="#ccc" />
      <ellipse cx="80" cy="38" rx="28" ry="12" fill="white" stroke="#003399" strokeWidth="3" />
      <circle cx="62" cy="82" r="8" fill="#003399" />
      <circle cx="98" cy="82" r="8" fill="#003399" />
      <circle cx="64" cy="80" r="3" fill="white" />
      <path d="M95 80 Q100 78 102 82" stroke="#003399" strokeWidth="2" fill="none" />
      <path d="M68 105 Q80 118 92 105" stroke="#003399" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M120 90 L130 75 L125 95 Z" fill="#4CAF50" stroke="#003399" strokeWidth="2" />
      <rect x="118" y="70" width="16" height="8" rx="2" fill="#4CAF50" stroke="#003399" strokeWidth="2" />
    </svg>
  )
}
