import { motion, useReducedMotion } from 'framer-motion'
import { featureLabels } from '../data/mockBathrooms'
import { FILTER_FEATURE_KEYS } from '../utils/filterBathrooms'
import { X } from 'lucide-react'
import { easeOut } from '../motion/transitions'

export default function FiltersModal({ filters, resultCount, onChange, onClose }) {
  const reduceMotion = useReducedMotion()

  const toggle = (key) => onChange({ ...filters, [key]: !filters[key] })

  return (
    <motion.div
      className="filters-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="filters-modal__backdrop"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        className="filters-modal__panel"
        initial={reduceMotion ? false : { y: '100%' }}
        animate={{ y: 0 }}
        exit={reduceMotion ? undefined : { y: '100%' }}
        transition={{ duration: 0.26, ease: easeOut }}
      >
        <div className="filters-modal__header">
          <h2>Filtros</h2>
          <button onClick={onClose} aria-label="Cerrar">
            <X size={22} strokeWidth={2} />
          </button>
        </div>

        <p className="filters-modal__hint">
          {resultCount === 0
            ? 'Ningún baño coincide con estos filtros.'
            : `${resultCount} baño${resultCount === 1 ? '' : 's'} en el mapa`}
        </p>

        <section className="filters-modal__section">
          <h3>Servicios disponibles</h3>
          <ul className="filters-modal__list">
            {FILTER_FEATURE_KEYS.map((f) => (
              <li key={f}>
                <span>{featureLabels[f]}</span>
                <button
                  className={`toggle ${filters[f] ? 'toggle--on' : ''}`}
                  onClick={() => toggle(f)}
                  aria-pressed={filters[f]}
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
              value={filters.maxDistance}
              onChange={(e) => onChange({ ...filters, maxDistance: Number(e.target.value) })}
            />
            <span className="filters-modal__distance">{filters.maxDistance} m</span>
          </div>
          <p className="filters-modal__distance-note">
            Aleja el mapa para descubrir más baños en la zona.
          </p>
        </section>

        <button className="btn btn--blue btn--full" onClick={onClose}>
          APLICAR FILTROS
        </button>
      </motion.div>
    </motion.div>
  )
}
