import { BackButton } from '../components/Shared'

export default function OfflineScreen({ onBack, onDownloaded }) {
  return (
    <div className="screen offline-screen">
      <div className="offline-screen__top">
        <BackButton onClick={onBack} light />
      </div>
      <div className="offline-screen__content">
        <div className="offline-screen__icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M12 20h.01" />
            <path d="M8.5 16.429a5 5 0 0 1 7 0" />
            <path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
            <path d="M19 12.859a10 10 0 0 0-2.007-1.523" />
            <path d="M2 8.82a15 15 0 0 1 4.177-2.643" />
            <path d="M22 8.82a15 15 0 0 0-11.288-3.764" />
            <line x1="2" y1="2" x2="22" y2="22" />
          </svg>
        </div>
        <h2>Modo sin internet</h2>
        <p>
          No hay conexión, pero puedes seguir viendo los baños guardados.
        </p>
        <button className="btn btn--outline btn--lg" onClick={onDownloaded}>
          VER BAÑOS DESCARGADOS
        </button>
      </div>
    </div>
  )
}
