import Logo from './Logo'
import { MenuIcon } from './MenuIcons'
import { X } from 'lucide-react'

export default function HamburgerMenu({ open, onClose, onNavigate }) {
  if (!open) return null

  const items = [
    { id: 'map', label: 'Mapa de baños', icon: 'map' },
    { id: 'list', label: 'Lista de baños', icon: 'list' },
    { id: 'favorites', label: 'Mis favoritos', icon: 'favorites' },
    { id: 'offline', label: 'Modo sin internet', icon: 'offline' },
    { id: 'settings', label: 'Ajustes', icon: 'settings' },
  ]

  return (
    <>
      <div className="menu-overlay" onClick={onClose} />
      <aside className="side-menu">
        <div className="side-menu__header">
          <Logo size="sm" />
          <button className="side-menu__close" onClick={onClose} aria-label="Cerrar">
            <X size={22} color="white" strokeWidth={2} />
          </button>
        </div>
        <p className="side-menu__tagline">Tu baño, siempre cerca.</p>
        <nav className="side-menu__nav">
          {items.map((item) => (
            <button
              key={item.id}
              className="side-menu__item"
              onClick={() => onNavigate(item.id)}
            >
              <span className="side-menu__icon">
                <MenuIcon name={item.icon} />
              </span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="side-menu__footer">
          <MascotSmall />
          <p>¿Necesitas un baño? ¡Bañópolis te salva!</p>
        </div>
      </aside>
    </>
  )
}

function MascotSmall() {
  return (
    <svg width="40" height="48" viewBox="0 0 80 96" className="mascot-small">
      <rect x="16" y="20" width="48" height="52" rx="8" fill="white" stroke="#003399" strokeWidth="2" />
      <rect x="24" y="72" width="32" height="8" rx="2" fill="#ddd" />
      <ellipse cx="40" cy="16" rx="14" ry="6" fill="white" stroke="#003399" strokeWidth="2" />
      <circle cx="32" cy="40" r="4" fill="#003399" />
      <circle cx="48" cy="40" r="4" fill="#003399" />
      <path d="M34 52 Q40 58 46 52" stroke="#003399" strokeWidth="2" fill="none" />
    </svg>
  )
}
