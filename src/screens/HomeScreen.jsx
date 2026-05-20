import { motion, useReducedMotion } from 'framer-motion'
import { ASSETS, Mascot } from '../components/Logo'
import { homeActions, homeItem, homeMascot, homeSkyline, homeStagger } from '../motion/transitions'

export default function HomeScreen({ onStart, onOffline }) {
  const reduceMotion = useReducedMotion()

  const stackVariants = reduceMotion ? {} : homeStagger
  const itemVariants = reduceMotion ? {} : homeItem
  const mascotVariants = reduceMotion ? {} : homeMascot
  const skylineVariants = reduceMotion ? {} : homeSkyline
  const actionsVariants = reduceMotion ? {} : homeActions

  return (
    <div className="screen home-screen">
      <motion.div
        className="home-screen__skyline"
        style={{ backgroundImage: `url(${ASSETS.skyline})` }}
        aria-hidden
        variants={skylineVariants}
        initial="hidden"
        animate="show"
      />
      <div className="home-screen__body">
        <motion.div
          className="home-screen__stack home-screen__anim"
          variants={stackVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div className="home-screen__brand" variants={itemVariants}>
            <div className="home-screen__glow home-screen__glow--pin">
              <img src={ASSETS.pin} alt="" className="home-screen__pin" />
            </div>
            <div className="home-screen__glow home-screen__glow--logo">
              <img src={ASSETS.nameLogo} alt="Bañópolis" className="home-screen__namelogo" />
            </div>
          </motion.div>
          <motion.p className="home-screen__tagline" variants={itemVariants}>
            Tu baño, siempre cerca.
          </motion.p>
          <motion.div className="home-screen__glow home-screen__glow--mascot" variants={mascotVariants}>
            <Mascot className="home-screen__mascot" />
          </motion.div>
        </motion.div>
        <motion.div
          className="home-screen__actions"
          variants={actionsVariants}
          initial="hidden"
          animate="show"
        >
          <button className="btn btn--green btn--lg" onClick={onStart}>
            COMENZAR
          </button>
          <button className="btn btn--outline btn--lg" onClick={onOffline}>
            <WifiOffIcon />
            FUNCIONA SIN INTERNET
          </button>
        </motion.div>
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
