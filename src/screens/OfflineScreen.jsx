import { motion, useReducedMotion } from 'framer-motion'
import { BackButton } from '../components/Shared'
import { homeItem } from '../motion/transitions'

const contentStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

export default function OfflineScreen({ onBack, onDownloaded }) {
  const reduceMotion = useReducedMotion()
  const item = reduceMotion ? {} : homeItem

  return (
    <div className="screen offline-screen">
      <div className="offline-screen__top">
        <BackButton onClick={onBack} light />
      </div>
      <motion.div
        className="offline-screen__content"
        variants={reduceMotion ? {} : contentStagger}
        initial="hidden"
        animate="show"
      >
        <motion.div className="offline-screen__icon" variants={item}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M12 20h.01" />
            <path d="M8.5 16.429a5 5 0 0 1 7 0" />
            <path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
            <path d="M19 12.859a10 10 0 0 0-2.007-1.523" />
            <path d="M2 8.82a15 15 0 0 1 4.177-2.643" />
            <path d="M22 8.82a15 15 0 0 0-11.288-3.764" />
            <line x1="2" y1="2" x2="22" y2="22" />
          </svg>
        </motion.div>
        <motion.h2 variants={item}>Modo sin internet</motion.h2>
        <motion.p variants={item}>
          No hay conexión, pero puedes seguir viendo los baños guardados.
        </motion.p>
        <motion.button className="btn btn--outline btn--lg" onClick={onDownloaded} variants={item}>
          VER BAÑOS DESCARGADOS
        </motion.button>
      </motion.div>
    </div>
  )
}
