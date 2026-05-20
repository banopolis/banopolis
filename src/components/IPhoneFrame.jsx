import StatusBar from './StatusBar'

export default function IPhoneFrame({ children, hideStatusBar = false }) {
  return (
    <div className="iphone-wrapper">
      <div className="iphone">
        <div className="iphone__bezel">
          <div className="iphone__notch" />
          <div className={`iphone__screen ${hideStatusBar ? 'iphone__screen--immersive' : ''}`}>
            {!hideStatusBar && <StatusBar />}
            <div className="iphone__content">{children}</div>
            <div className="iphone__home-indicator" />
          </div>
        </div>
        <div className="iphone__button iphone__button--silent" />
        <div className="iphone__button iphone__button--vol-up" />
        <div className="iphone__button iphone__button--vol-down" />
        <div className="iphone__button iphone__button--power" />
      </div>
    </div>
  )
}
