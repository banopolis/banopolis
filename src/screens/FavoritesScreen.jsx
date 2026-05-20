import { ScreenHeader, StarRating, BathroomThumbnail, ChevronRightIcon, FavoriteHeartButton } from '../components/Shared'

export default function FavoritesScreen({ favorites, onSelect, onToggleFavorite, onMenu }) {
  return (
    <div className="screen favorites-screen">
      <ScreenHeader title="Mis favoritos" onMenu={onMenu} />
      {favorites.length === 0 ? (
        <p className="favorites-empty">
          No tienes favoritos visibles con los filtros actuales.
        </p>
      ) : (
        <ul className="bathroom-list bathroom-list--favorites">
          {favorites.map((b) => (
            <li key={b.id}>
              <button className="bathroom-list__item" onClick={() => onSelect(b.id)}>
                <BathroomThumbnail bathroom={b} />
                <div className="bathroom-list__info">
                  <span className="bathroom-list__name">{b.shortName}</span>
                  <span className="bathroom-list__distance">{b.distance} m</span>
                </div>
                <StarRating rating={b.rating} />
                <FavoriteHeartButton
                  filled
                  filledColor="#e53935"
                  color="#e53935"
                  size={24}
                  className="bathroom-list__heart-btn"
                  onClick={() => onToggleFavorite(b.id)}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
