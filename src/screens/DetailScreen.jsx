import {
  BackButton,
  FeatureList,
  StarRating,
  LocationBadge,
  BathroomPhoto,
  FavoriteHeartButton,
} from '../components/Shared'

export default function DetailScreen({ bathroom, isFavorite, onBack, onRoute, onToggleFavorite }) {
  return (
    <div className="screen detail-screen">
      <div className="detail-screen__hero">
        <div className="detail-screen__top">
          <BackButton onClick={onBack} light />
          <FavoriteHeartButton filled={isFavorite} onClick={onToggleFavorite} />
        </div>
        <BathroomPhoto bathroom={bathroom} className="bathroom-photo--hero" />
        <h2>{bathroom.name}</h2>
        <div className="detail-screen__badges">
          <StarRating rating={bathroom.rating} reviewCount={bathroom.reviewCount} light />
          <LocationBadge distance={bathroom.distance} />
        </div>
      </div>

      <div className="detail-screen__body">
        <FeatureList features={bathroom.features} />
        <div className="detail-screen__actions">
          <button className="btn btn--blue btn--full" onClick={onRoute}>
            CÓMO LLEGAR
          </button>
          <button
            className="btn btn--outline-blue btn--full"
            onClick={onToggleFavorite}
          >
            {isFavorite ? 'QUITAR DE FAVORITOS' : 'GUARDAR'}
          </button>
        </div>
      </div>
    </div>
  )
}
