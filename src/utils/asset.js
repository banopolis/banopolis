/** Resolve a public-folder path for the current Vite base URL (e.g. /banopolis/). */
export function asset(path) {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}
