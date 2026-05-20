import { useState, useCallback, useMemo, useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Map, List, Heart, Settings } from 'lucide-react'
import IPhoneFrame from './components/IPhoneFrame'
import AnimatedScreen from './components/AnimatedScreen'
import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
import ListScreen from './screens/ListScreen'
import DetailScreen from './screens/DetailScreen'
import RouteScreen from './screens/RouteScreen'
import FavoritesScreen from './screens/FavoritesScreen'
import OfflineScreen from './screens/OfflineScreen'
import SettingsScreen from './screens/SettingsScreen'
import FiltersModal from './screens/FiltersModal'
import HamburgerMenu from './components/HamburgerMenu'
import { bathrooms, getBathroom, INITIAL_FAVORITES } from './data/mockBathrooms'
import { transitionForNavigation } from './motion/transitions'
import { DEFAULT_FILTERS, filterBathrooms } from './utils/filterBathrooms'

export default function App() {
  const reduceMotion = useReducedMotion()
  const [screen, setScreen] = useState('home')
  const [history, setHistory] = useState([])
  const [screenVariant, setScreenVariant] = useState('fade')
  const [selectedId, setSelectedId] = useState('plaza-central')
  const [showFilters, setShowFilters] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [toast, setToast] = useState(null)
  const [favoriteIds, setFavoriteIds] = useState(() => new Set(INITIAL_FAVORITES))
  const [filters, setFilters] = useState(DEFAULT_FILTERS)

  const filteredBathrooms = useMemo(
    () => filterBathrooms(bathrooms, filters),
    [filters],
  )

  const selected = useMemo(() => {
    const match = filteredBathrooms.find((b) => b.id === selectedId)
    return match ?? filteredBathrooms[0] ?? null
  }, [filteredBathrooms, selectedId])

  useEffect(() => {
    if (filteredBathrooms.length === 0) return
    if (!filteredBathrooms.some((b) => b.id === selectedId)) {
      setSelectedId(filteredBathrooms[0].id)
    }
  }, [filteredBathrooms, selectedId])

  const filteredFavorites = useMemo(
    () => filteredBathrooms.filter((b) => favoriteIds.has(b.id)),
    [filteredBathrooms, favoriteIds],
  )

  const showToast = useCallback((message) => {
    setToast(message)
    setTimeout(() => setToast(null), 2000)
  }, [])

  const goToScreen = (next, direction = 'forward') => {
    setScreenVariant(transitionForNavigation(screen, next, direction))
    setScreen(next)
  }

  const pushScreen = (next) => {
    setScreenVariant(transitionForNavigation(screen, next, 'forward'))
    setHistory((h) => [...h, screen])
    setScreen(next)
  }

  const goBack = () => {
    setHistory((h) => {
      if (h.length === 0) return h
      const prev = h[h.length - 1]
      setScreenVariant(transitionForNavigation(screen, prev, 'back'))
      setScreen(prev)
      return h.slice(0, -1)
    })
  }

  const switchTab = (tab) => {
    setScreenVariant(transitionForNavigation(screen, tab, 'forward'))
    setHistory([])
    setScreen(tab)
  }

  const goToDetail = (id) => {
    setSelectedId(id)
    pushScreen('detail')
  }

  const goToRoute = (id) => {
    setSelectedId(id ?? selectedId)
    pushScreen('route')
  }

  const navigateMenu = (target) => {
    setMenuOpen(false)
    setScreenVariant(transitionForNavigation(screen, target, 'forward'))
    setHistory([])
    setScreen(target)
  }

  const isFavorite = (id) => favoriteIds.has(id)

  const toggleFavorite = (id) => {
    setFavoriteIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
        showToast('¡Añadido a favoritos!')
      }
      return next
    })
  }

  const showBottomNav = ['map', 'list', 'favorites', 'settings'].includes(screen)

  const renderScreen = () => {
    switch (screen) {
      case 'home':
        return (
          <HomeScreen
            onStart={() => {
              setHistory([])
              goToScreen('map', 'forward')
            }}
            onOffline={() => pushScreen('offline')}
          />
        )
      case 'map':
        return (
          <MapScreen
            bathrooms={filteredBathrooms}
            maxDistance={filters.maxDistance}
            selected={selected}
            onSelect={setSelectedId}
            onDetail={() => selected && goToDetail(selected.id)}
            onFilters={() => setShowFilters(true)}
            onMenu={() => setMenuOpen(true)}
          />
        )
      case 'list':
        return (
          <ListScreen
            bathrooms={filteredBathrooms}
            onSelect={goToDetail}
            onMenu={() => setMenuOpen(true)}
          />
        )
      case 'detail':
        return selected ? (
          <DetailScreen
            bathroom={selected}
            isFavorite={isFavorite(selected.id)}
            onBack={goBack}
            onRoute={() => goToRoute(selected.id)}
            onToggleFavorite={() => toggleFavorite(selected.id)}
          />
        ) : null
      case 'route':
        return selected ? <RouteScreen bathroom={selected} onBack={goBack} /> : null
      case 'favorites':
        return (
          <FavoritesScreen
            favorites={filteredFavorites}
            onSelect={goToDetail}
            onToggleFavorite={toggleFavorite}
            onMenu={() => setMenuOpen(true)}
          />
        )
      case 'offline':
        return <OfflineScreen onBack={goBack} onDownloaded={() => switchTab('favorites')} />
      case 'settings':
        return <SettingsScreen onMenu={() => setMenuOpen(true)} />
      default:
        return null
    }
  }

  return (
    <div className="presentation">
      <div className="presentation__header">
        <h1>Bañópolis</h1>
        <p>Demo interactiva</p>
      </div>

      <IPhoneFrame hideStatusBar={screen === 'home' || screen === 'offline'}>
        <div className="iphone__stage">
          <AnimatePresence mode="wait">
            <AnimatedScreen key={screen} transitionKey={screen} variant={screenVariant}>
              {renderScreen()}
            </AnimatedScreen>
          </AnimatePresence>

          <AnimatePresence>
            {showBottomNav && (
              <nav key="bottom-nav" className="bottom-nav bottom-nav--enter">
                <button
                  className={`bottom-nav__item ${screen === 'map' ? 'bottom-nav__item--active' : ''}`}
                  onClick={() => switchTab('map')}
                >
                  <Map size={26} color={screen === 'map' ? '#003399' : '#888'} strokeWidth={2} />
                  <span>Mapa</span>
                </button>
                <button
                  className={`bottom-nav__item ${screen === 'list' ? 'bottom-nav__item--active' : ''}`}
                  onClick={() => switchTab('list')}
                >
                  <List size={26} color={screen === 'list' ? '#003399' : '#888'} strokeWidth={2} />
                  <span>Lista</span>
                </button>
                <button
                  className={`bottom-nav__item ${screen === 'favorites' ? 'bottom-nav__item--active' : ''}`}
                  onClick={() => switchTab('favorites')}
                >
                  <Heart
                    size={26}
                    color={screen === 'favorites' ? '#003399' : '#888'}
                    fill={screen === 'favorites' ? '#e8eef8' : 'none'}
                    strokeWidth={2}
                  />
                  <span>Favoritos</span>
                </button>
                <button
                  className={`bottom-nav__item ${screen === 'settings' ? 'bottom-nav__item--active' : ''}`}
                  onClick={() => switchTab('settings')}
                >
                  <Settings size={26} color={screen === 'settings' ? '#003399' : '#888'} strokeWidth={2} />
                  <span>Ajustes</span>
                </button>
              </nav>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {showFilters && (
            <FiltersModal
              filters={filters}
              resultCount={filteredBathrooms.length}
              onChange={setFilters}
              onClose={() => {
                setShowFilters(false)
                if (filteredBathrooms.length > 0) {
                  showToast(
                    `${filteredBathrooms.length} baño${filteredBathrooms.length === 1 ? '' : 's'} cerca`,
                  )
                }
              }}
            />
          )}
        </AnimatePresence>

        <HamburgerMenu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          onNavigate={navigateMenu}
        />

        <AnimatePresence>
          {toast && (
            <motion.div
              key={toast}
              className="toast"
              initial={reduceMotion ? false : { opacity: 0, y: 12, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 8, x: '-50%' }}
              transition={{ duration: 0.28 }}
              style={{ left: '50%' }}
            >
              {toast}
            </motion.div>
          )}
        </AnimatePresence>
      </IPhoneFrame>
    </div>
  )
}
