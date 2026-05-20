import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Logo, { Mascot } from './Logo'
import { MenuIcon } from './MenuIcons'
import { X } from 'lucide-react'
import { easeOut } from '../motion/transitions'

export default function HamburgerMenu({ open, onClose, onNavigate }) {
  const reduceMotion = useReducedMotion()

  const items = [
    { id: 'map', label: 'Mapa de baños', icon: 'map' },
    { id: 'list', label: 'Lista de baños', icon: 'list' },
    { id: 'favorites', label: 'Mis favoritos', icon: 'favorites' },
    { id: 'offline', label: 'Modo sin internet', icon: 'offline' },
    { id: 'settings', label: 'Ajustes', icon: 'settings' },
  ]

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="menu-overlay"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          />
          <motion.aside
            className="side-menu"
            initial={reduceMotion ? false : { x: '-100%' }}
            animate={{ x: 0 }}
            exit={reduceMotion ? undefined : { x: '-100%' }}
            transition={{ duration: 0.24, ease: easeOut }}
          >
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
              <Mascot className="side-menu__mascot" />
              <p>¿Necesitas un baño? ¡Bañópolis te salva!</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
