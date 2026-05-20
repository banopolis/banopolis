import { MAP_IMAGE } from '../data/mockBathrooms'
import { BackButton, MapView, MapPin } from '../components/Shared'
import { ArrowUp, Compass, Share } from 'lucide-react'

export default function RouteScreen({ bathroom, onBack }) {
  return (
    <div className="screen route-screen">
      <div className="route-screen__header">
        <BackButton onClick={onBack} light />
        <h2>Ruta {bathroom.shortName}</h2>
        <button className="route-screen__share" aria-label="Compartir">
          <Share size={22} color="white" strokeWidth={2} />
        </button>
      </div>

      <div className="route-screen__info">
        {bathroom.walkMinutes} min ({bathroom.distance} m) — Ruta más rápida
      </div>

      <div className="route-screen__map">
        <MapView mapImage={MAP_IMAGE} showRoute routePath={bathroom.routePath}>
          <MapPin bathroom={bathroom} selected onClick={() => {}} />
        </MapView>

        <div className="map-controls">
          <button aria-label="Acercar">+</button>
          <button aria-label="Alejar">−</button>
          <button aria-label="Orientación" className="map-controls__compass">
            <Compass size={22} color="#333" strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="route-instruction">
        <div className="route-instruction__arrow">
          <ArrowUp size={28} color="white" strokeWidth={2.5} />
        </div>
        <div>
          <p className="route-instruction__main">50 m — Sigue derecho</p>
          <p className="route-instruction__sub">Luego gira a la derecha</p>
        </div>
      </div>
    </div>
  )
}
