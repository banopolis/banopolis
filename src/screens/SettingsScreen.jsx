import { useState } from 'react'
import { ScreenHeader } from '../components/Shared'
import { Mascot } from '../components/Logo'
import { SettingsRowIcon, ArrowRightIcon } from '../components/MenuIcons'

export default function SettingsScreen({ onMenu }) {
  const [notifications, setNotifications] = useState(true)

  const rows = [
    { icon: 'globe', label: 'Idioma', value: 'Español', chevron: true },
    { icon: 'ruler', label: 'Unidades de distancia', value: 'Métrico', chevron: true },
    { icon: 'bell', label: 'Notificaciones', toggle: true },
    { icon: 'map', label: 'Descargar mapas', chevron: true },
    { icon: 'info', label: 'Acerca de la app', chevron: true },
  ]

  return (
    <div className="screen settings-screen">
      <ScreenHeader title="Ajustes" onMenu={onMenu} />
      <ul className="settings-list">
        {rows.map((row) => (
          <li key={row.label}>
            <div className="settings-list__item">
              <span className="settings-list__icon">
                <SettingsRowIcon name={row.icon} />
              </span>
              <span className="settings-list__label">{row.label}</span>
              {row.value && <span className="settings-list__value">{row.value}</span>}
              {row.toggle && (
                <button
                  className={`toggle ${notifications ? 'toggle--on' : ''}`}
                  onClick={() => setNotifications((n) => !n)}
                  aria-pressed={notifications}
                >
                  <span className="toggle__knob" />
                </button>
              )}
              {row.chevron && (
                <span className="settings-list__chevron">
                  <ArrowRightIcon />
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="settings-banner">
        <Mascot className="settings-banner__mascot" />
        <p>¿Necesitas un baño? ¡Bañópolis te salva!</p>
        <span className="settings-banner__arrow">
          <ArrowRightIcon size={20} color="white" />
        </span>
      </div>
    </div>
  )
}
