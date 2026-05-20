export default function StatusBar({ dark = false }) {
  return (
    <div className={`status-bar ${dark ? 'status-bar--dark' : ''}`}>
      <span className="status-bar__time">9:41</span>
      <div className="status-bar__icons">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="0.5" />
          <rect x="4.5" y="5" width="3" height="7" rx="0.5" />
          <rect x="9" y="2" width="3" height="10" rx="0.5" />
          <rect x="13" y="0" width="3" height="12" rx="0.5" opacity="0.3" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 2.5C10.5 2.5 12.7 3.6 14.2 5.3L15.5 4C13.6 1.9 11 0.5 8 0.5S2.4 1.9 0.5 4L1.8 5.3C3.3 3.6 5.5 2.5 8 2.5z" />
          <path d="M8 6c1.7 0 3.2 0.7 4.3 1.8L13.6 7.5C12.2 6.1 10.2 5.2 8 5.2S3.8 6.1 2.4 7.5L3.7 7.8C4.8 6.7 6.3 6 8 6z" />
          <circle cx="8" cy="10.5" r="1.5" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="currentColor">
          <rect x="0" y="1" width="21" height="10" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="22" y="4" width="2" height="4" rx="0.5" />
          <rect x="2" y="3" width="16" height="6" rx="1" fill="currentColor" />
        </svg>
      </div>
    </div>
  )
}
