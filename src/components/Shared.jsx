import { featureLabels } from '../data/mockBathrooms'
import { FeatureIcon } from './FeatureIcons'
import { ToiletMarker } from './Logo'
import {
  Star,
  MapPin as MapPinIcon,
  ChevronRight,
  ChevronLeft,
  Navigation,
  Heart,
} from 'lucide-react'

export function FeatureTag({ feature }) {
  return (
    <span className="feature-tag">
      <FeatureIcon feature={feature} size={14} color="#4CAF50" />
      {featureLabels[feature]}
    </span>
  )
}

export function FeatureList({ features }) {
  return (
    <ul className="feature-list">
      {features.map((f) => (
        <li key={f} className="feature-list__row">
          <span className="feature-list__label">{featureLabels[f]}</span>
          <span className="feature-list__icon">
            <FeatureIcon feature={f} size={22} color="#4CAF50" />
          </span>
        </li>
      ))}
    </ul>
  )
}

export function BathroomPhoto({ bathroom, className = '' }) {
  return (
    <div className={`bathroom-photo ${className}`}>
      <img
        src={bathroom.photoUrl}
        alt={bathroom.name}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = `${import.meta.env.BASE_URL}images/bathrooms/plaza.jpg`
        }}
      />
    </div>
  )
}

export function BathroomThumbnail({ bathroom }) {
  return <BathroomPhoto bathroom={bathroom} className="bathroom-photo--thumb" />
}

function segmentAngle(from, to) {
  return (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI
}

export function RoutePathOverlay({ path }) {
  if (!path || path.length < 2) return null

  const pathD = path.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

  const arrows = []
  for (let i = 0; i < path.length - 1; i++) {
    const from = path[i]
    const to = path[i + 1]
    const mid = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 }
    const angle = segmentAngle(from, to)
    arrows.push(
      <div
        key={i}
        className="route-arrow-marker"
        style={{
          left: `${mid.x}%`,
          top: `${mid.y}%`,
          transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
        }}
      >
        <Navigation size={22} color="#003399" fill="#003399" strokeWidth={1.5} />
      </div>,
    )
  }

  return (
    <>
      <svg className="route-line-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d={pathD}
          stroke="#003399"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {arrows}
    </>
  )
}

export function MapView({ children, showRoute = false, routePath, mapImage }) {
  return (
    <div className="map-view">
      <img className="map-view__image" src={mapImage} alt="Mapa" draggable={false} />
      <div className="map-view__overlay" />
      {showRoute && routePath && <RoutePathOverlay path={routePath} />}
      {children}
      <div className="user-dot">
        <div className="user-dot__pulse" />
        <div className="user-dot__core" />
      </div>
    </div>
  )
}

export function MapPin({ bathroom, selected, onClick }) {
  return (
    <button
      className={`map-pin ${selected ? 'map-pin--selected' : ''}`}
      style={{ left: `${bathroom.mapX}%`, top: `${bathroom.mapY}%` }}
      onClick={onClick}
      aria-label={bathroom.name}
    >
      <div className="map-pin__shadow" />
      <div className="map-pin__body">
        <ToiletMarker size={selected ? 20 : 16} color="white" />
      </div>
      {selected && <div className="map-pin__ring" />}
    </button>
  )
}

export function ScreenHeader({ title, onMenu, children }) {
  return (
    <header className="screen-header">
      <button className="screen-header__menu" onClick={onMenu} aria-label="Menú">
        <span /><span /><span />
      </button>
      <h2 className="screen-header__title">{title}</h2>
      {children ?? <div className="screen-header__spacer" />}
    </header>
  )
}

export function BackButton({ onClick, light = false }) {
  return (
    <button className={`back-btn ${light ? 'back-btn--light' : ''}`} onClick={onClick} aria-label="Volver">
      <ChevronLeft size={28} color={light ? 'white' : '#333'} strokeWidth={2.5} />
    </button>
  )
}

export function StarRating({ rating, reviewCount, light = false }) {
  return (
    <span className={`star-rating ${light ? 'star-rating--light' : ''}`}>
      <Star size={16} fill="#f5a623" color="#f5a623" strokeWidth={0} />
      {rating.toFixed(1)}
      {reviewCount != null && <span className="star-rating__count">({reviewCount})</span>}
    </span>
  )
}

export function LocationBadge({ distance }) {
  return (
    <span className="location-badge">
      <MapPinIcon size={16} color="white" strokeWidth={2.5} />
      {distance} m
    </span>
  )
}

export function ChevronRightIcon() {
  return <ChevronRight size={22} color="#aaa" strokeWidth={2} />
}

export function FavoriteHeartButton({ filled, onClick, size = 26, color = 'white', filledColor = '#e53935', className = '' }) {
  return (
    <button
      type="button"
      className={`heart-btn ${filled ? 'heart-btn--filled' : ''} ${className}`}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}
      aria-label={filled ? 'Quitar de favoritos' : 'Añadir a favoritos'}
      aria-pressed={filled}
    >
      <Heart
        size={size}
        color={filled ? filledColor : color}
        fill={filled ? filledColor : 'none'}
        strokeWidth={2}
      />
    </button>
  )
}
