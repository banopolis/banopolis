/** Snappy transitions — transform only on full screens (GPU-friendly). */
export const easeOut = [0.25, 0.8, 0.25, 1]

const fast = { duration: 0.24, ease: easeOut }
const faster = { duration: 0.2, ease: easeOut }

export const screenTransitions = {
  slideLeft: {
    initial: { x: '100%' },
    animate: { x: 0, transition: fast },
    exit: { x: '-24%', transition: faster },
  },
  slideRight: {
    initial: { x: '-20%' },
    animate: { x: 0, transition: fast },
    exit: { x: '100%', transition: faster },
  },
  slideUp: {
    initial: { y: '100%' },
    animate: { y: 0, transition: fast },
    exit: { y: '100%', transition: faster },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: faster },
    exit: { opacity: 0, transition: { duration: 0.16 } },
  },
}

export function transitionForNavigation(from, to, direction) {
  if (direction === 'back') {
    if (from === 'offline') return 'slideUp'
    if (['detail', 'route'].includes(from)) return 'slideRight'
    return 'fade'
  }

  if (to === 'offline') return 'slideUp'
  if (from === 'home' && to === 'map') return 'slideLeft'
  if (['detail', 'route'].includes(to)) return 'slideLeft'
  if (['map', 'list', 'favorites', 'settings'].includes(to)) return 'fade'

  return 'slideLeft'
}

export const homeStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
}

export const homeItem = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.28, ease: easeOut },
  },
}

export const homeMascot = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.32, ease: easeOut, delay: 0.12 },
  },
}

export const homeSkyline = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.45, ease: easeOut },
  },
}

export const homeActions = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.28, ease: easeOut, delay: 0.2 },
  },
}
