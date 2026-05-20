import { useState } from 'react'
import { bathrooms, MAP_IMAGE } from '../data/mockBathrooms'
import { MapView, MapPin, BathroomPhoto, FeatureTag } from '../components/Shared'

export default function MapScreen({ selected, onSelect, onDetail, onFilters, onMenu }) {
  const [showRouteLine, setShowRouteLine] = useState(false)

  const handleSelect = (id) => {
    onSelect(id)
    setShowRouteLine(false)
  }

  const handleVerRuta = (e) => {
    e.stopPropagation()
    setShowRouteLine(true)
  }

  return (
    <div className="screen map-screen">
      <div className="map-screen__search-bar">
        <button className="map-screen__menu" onClick={onMenu} aria-label="Menú">
          <span /><span /><span />
        </button>
        <div className="search-input">
          <span>Buscar baños cercanos...</span>
        </div>
        <button className="map-screen__search-icon" aria-label="Buscar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M16 16l5 5" />
          </svg>
        </button>
        <button className="map-screen__filter" onClick={onFilters} aria-label="Filtros">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#003399" strokeWidth="2">
            <path d="M4 6h16M7 12h10M10 18h4" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="map-screen__map">
        <MapView
          mapImage={MAP_IMAGE}
          showRoute={showRouteLine}
          routePath={selected.routePath}
        >
          {bathrooms.map((b) => (
            <MapPin
              key={b.id}
              bathroom={b}
              selected={b.id === selected.id}
              onClick={() => handleSelect(b.id)}
            />
          ))}
        </MapView>
      </div>

      <div className="map-card" onClick={onDetail}>
        <BathroomPhoto bathroom={selected} className="bathroom-photo--card" />
        <div className="map-card__info">
          <h3>{selected.name}</h3>
          <p className="map-card__meta">
            {selected.distance} m · {selected.walkMinutes} min caminando
          </p>
          <div className="map-card__tags">
            {selected.features.slice(0, 3).map((f) => (
              <FeatureTag key={f} feature={f} />
            ))}
          </div>
        </div>
      </div>

      <button className="btn btn--blue map-card__route" onClick={handleVerRuta}>
        VER RUTA
      </button>
    </div>
  )
}
