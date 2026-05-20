import { bathrooms } from '../data/mockBathrooms'

/** Keys shown in the filters modal (must have feature on bathroom when enabled). */
export const FILTER_FEATURE_KEYS = ['clean', 'accessible', 'paper', 'baby', 'offline']

export const DEFAULT_FILTERS = {
  clean: true,
  accessible: true,
  paper: false,
  baby: false,
  offline: false,
  maxDistance: 500,
}

/**
 * Map zoom scale (applied to an oversized map layer so edges never show white).
 * Farther distance = smaller scale = wider view; closer = larger scale = cropped in.
 */
export function getMapZoom(maxDistance) {
  const t = (maxDistance - 100) / 900
  return 1.08 - t * 0.33
}

export function filterBathrooms(list, filters) {
  return list.filter((b) => {
    if (b.distance > filters.maxDistance) return false
    for (const key of FILTER_FEATURE_KEYS) {
      if (filters[key] && !b.features.includes(key)) return false
    }
    return true
  })
}

export function getAllBathrooms() {
  return bathrooms
}
