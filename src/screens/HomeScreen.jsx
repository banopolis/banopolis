import Logo, { Mascot } from '../components/Logo'

export default function HomeScreen({ onStart, onOffline }) {
  return (
    <div className="screen home-screen">
      <div className="home-screen__skyline" />
      <div className="home-screen__content">
        <Logo size="lg" />
        <p className="home-screen__tagline">Tu baño, siempre cerca.</p>
        <Mascot className="home-screen__mascot" />
        <div className="home-screen__actions">
          <button className="btn btn--green btn--lg" onClick={onStart}>
            COMENZAR
          </button>
          <button className="btn btn--outline btn--lg" onClick={onOffline}>
            <WifiOffIcon />
            FUNCIONA SIN INTERNET
          </button>
        </div>
      </div>
    </div>
  )
}

function WifiOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 20h.01" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
      <path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
      <path d="M19 12.859a10 10 0 0 0-2.007-1.523" />
      <path d="M2 8.82a15 15 0 0 1 4.177-2.643" />
      <path d="M22 8.82a15 15 0 0 0-11.288-3.764" />
      <line x1="2" y1="2" x2="22" y2="22" />
    </svg>
  )
}
