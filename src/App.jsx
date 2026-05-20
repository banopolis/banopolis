import { useState, useCallback } from 'react'
import { Map, List, Heart, Settings } from 'lucide-react'
import IPhoneFrame from './components/IPhoneFrame'
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
import { getBathroom, INITIAL_FAVORITES } from './data/mockBathrooms'

export default function App() {
  const [screen, setScreen] = useState('home')
  const [history, setHistory] = useState([])
  const [selectedId, setSelectedId] = useState('plaza-central')
  const [showFilters, setShowFilters] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [toast, setToast] = useState(null)
  const [favoriteIds, setFavoriteIds] = useState(() => new Set(INITIAL_FAVORITES))

  const selected = getBathroom(selectedId)

  const showToast = useCallback((message) => {
    setToast(message)
    setTimeout(() => setToast(null), 2000)
  }, [])

  const pushScreen = (next) => {
    setHistory((h) => [...h, screen])
    setScreen(next)
  }

  const goBack = () => {
    setHistory((h) => {
      if (h.length === 0) return h
      const prev = h[h.length - 1]
      setScreen(prev)
      return h.slice(0, -1)
    })
  }

  const switchTab = (tab) => {
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

  return (
    <div className="presentation">
      <div className="presentation__header">
        <h1>Bañópolis</h1>
        <p>Demo interactiva — Tu baño, siempre cerca</p>
      </div>

      <IPhoneFrame>
        {screen === 'home' && (
          <HomeScreen
            onStart={() => {
              setHistory([])
              setScreen('map')
            }}
            onOffline={() => pushScreen('offline')}
          />
        )}

        {screen === 'map' && (
          <MapScreen
            selected={selected}
            onSelect={setSelectedId}
            onDetail={() => goToDetail(selectedId)}
            onFilters={() => setShowFilters(true)}
            onMenu={() => setMenuOpen(true)}
          />
        )}

        {screen === 'list' && (
          <ListScreen onSelect={goToDetail} onMenu={() => setMenuOpen(true)} />
        )}

        {screen === 'detail' && (
          <DetailScreen
            bathroom={selected}
            isFavorite={isFavorite(selected.id)}
            onBack={goBack}
            onRoute={() => goToRoute(selected.id)}
            onToggleFavorite={() => toggleFavorite(selected.id)}
          />
        )}

        {screen === 'route' && (
          <RouteScreen bathroom={selected} onBack={goBack} />
        )}

        {screen === 'favorites' && (
          <FavoritesScreen
            favoriteIds={favoriteIds}
            onSelect={goToDetail}
            onToggleFavorite={toggleFavorite}
            onMenu={() => setMenuOpen(true)}
          />
        )}

        {screen === 'offline' && (
          <OfflineScreen onBack={goBack} onDownloaded={() => switchTab('favorites')} />
        )}

        {screen === 'settings' && (
          <SettingsScreen onMenu={() => setMenuOpen(true)} />
        )}

        {showBottomNav && (
          <nav className="bottom-nav">
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

        {showFilters && <FiltersModal onClose={() => setShowFilters(false)} />}

        <HamburgerMenu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          onNavigate={navigateMenu}
        />

        {toast && <div className="toast">{toast}</div>}
      </IPhoneFrame>
    </div>
  )
}
