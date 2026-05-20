import { motion, useReducedMotion } from 'framer-motion'
import { screenTransitions } from '../motion/transitions'

export default function AnimatedScreen({ transitionKey, variant, children, className = 'screen-layer' }) {
  const reduceMotion = useReducedMotion()
  const config = screenTransitions[variant] ?? screenTransitions.fade

  if (reduceMotion) {
    return (
      <div className={className} style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      key={transitionKey}
      className={className}
      initial={config.initial}
      animate={config.animate}
      exit={config.exit}
      style={{ flex: 1, minHeight: 0, width: '100%', display: 'flex', flexDirection: 'column' }}
    >
      {children}
    </motion.div>
  )
}
