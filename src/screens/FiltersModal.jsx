import { useState } from 'react'
import { featureLabels } from '../data/mockBathrooms'
import { X } from 'lucide-react'

const filterFeatures = ['clean', 'accessible', 'paper', 'baby', 'offline']

export default function FiltersModal({ onClose }) {
  const [toggles, setToggles] = useState({
    clean: true,
    accessible: true,
    paper: false,
    baby: false,
    offline: false,
  })
  const [distance, setDistance] = useState(500)

  const toggle = (key) => setToggles((t) => ({ ...t, [key]: !t[key] }))

  return (
    <div className="filters-modal">
      <div className="filters-modal__backdrop" onClick={onClose} />
      <div className="filters-modal__panel">
        <div className="filters-modal__header">
          <h2>Filtros</h2>
          <button onClick={onClose} aria-label="Cerrar">
            <X size={22} strokeWidth={2} />
          </button>
        </div>

        <section className="filters-modal__section">
          <h3>Servicios disponibles</h3>
          <ul className="filters-modal__list">
            {filterFeatures.map((f) => (
              <li key={f}>
                <span>{featureLabels[f]}</span>
                <button
                  className={`toggle ${toggles[f] ? 'toggle--on' : ''}`}
                  onClick={() => toggle(f)}
                  aria-pressed={toggles[f]}
                >
                  <span className="toggle__knob" />
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="filters-modal__section">
          <h3>Distancia máxima</h3>
          <div className="filters-modal__slider">
            <input
              type="range"
              min="100"
              max="1000"
              step="50"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
            />
            <span className="filters-modal__distance">{distance} m</span>
          </div>
        </section>

        <button className="btn btn--blue btn--full" onClick={onClose}>
          APLICAR FILTROS
        </button>
      </div>
    </div>
  )
}
