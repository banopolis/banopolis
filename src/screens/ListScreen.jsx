import { bathrooms } from '../data/mockBathrooms'
import { ScreenHeader, StarRating, ChevronRightIcon } from '../components/Shared'
import { ToiletPin } from '../components/Logo'

export default function ListScreen({ onSelect, onMenu }) {
  return (
    <div className="screen list-screen">
      <ScreenHeader title="Baños cercanos" onMenu={onMenu} />
      <ul className="bathroom-list">
        {bathrooms.map((b) => (
          <li key={b.id}>
            <button className="bathroom-list__item" onClick={() => onSelect(b.id)}>
              <ToiletPin size={34} />
              <div className="bathroom-list__info">
                <span className="bathroom-list__name">{b.shortName}</span>
                <span className="bathroom-list__distance">{b.distance} m</span>
              </div>
              <StarRating rating={b.rating} />
              <ChevronRightIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
