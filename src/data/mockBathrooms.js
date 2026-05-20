const base = import.meta.env.BASE_URL

export function asset(path) {
  return `${base}${path.replace(/^\//, '')}`
}

export const MAP_IMAGE = asset('images/map.svg')

export const bathrooms = [
  {
    id: 'plaza-central',
    name: 'Baño Público Plaza Central',
    shortName: 'Plaza Central',
    distance: 120,
    walkMinutes: 2,
    rating: 4.6,
    reviewCount: 128,
    features: ['clean', 'accessible', 'paper', 'offline', 'soap', 'free', 'dryer'],
    photoUrl: asset('images/bathrooms/plaza.jpg'),
    mapX: 62,
    mapY: 38,
    routePath: [
      { x: 50, y: 50 },
      { x: 50, y: 44 },
      { x: 54, y: 41 },
      { x: 58, y: 39 },
      { x: 62, y: 38 },
    ],
  },
  {
    id: 'parque-amistad',
    name: 'Baño Parque de la Amistad',
    shortName: 'Parque de la Amistad',
    distance: 250,
    walkMinutes: 4,
    rating: 4.4,
    reviewCount: 89,
    features: ['clean', 'accessible', 'baby', 'free', 'inclusive'],
    photoUrl: asset('images/bathrooms/parque.jpg'),
    mapX: 78,
    mapY: 24,
    routePath: [
      { x: 50, y: 50 },
      { x: 50, y: 42 },
      { x: 55, y: 35 },
      { x: 65, y: 28 },
      { x: 72, y: 25 },
      { x: 78, y: 24 },
    ],
  },
  {
    id: 'mercado-municipal',
    name: 'Baño Mercado Municipal',
    shortName: 'Mercado Municipal',
    distance: 380,
    walkMinutes: 5,
    rating: 4.2,
    reviewCount: 64,
    features: ['clean', 'paper', 'soap', 'free'],
    photoUrl: asset('images/bathrooms/mercado.jpg'),
    mapX: 28,
    mapY: 52,
    routePath: [
      { x: 50, y: 50 },
      { x: 45, y: 50 },
      { x: 38, y: 52 },
      { x: 32, y: 52 },
      { x: 28, y: 52 },
    ],
  },
  {
    id: 'biblioteca',
    name: 'Baño Biblioteca Central',
    shortName: 'Biblioteca Central',
    distance: 420,
    walkMinutes: 6,
    rating: 4.8,
    reviewCount: 203,
    features: ['clean', 'accessible', 'paper', 'offline', 'soap', 'dryer', 'inclusive', 'open247'],
    photoUrl: asset('images/bathrooms/biblioteca.jpg'),
    mapX: 44,
    mapY: 72,
    routePath: [
      { x: 50, y: 50 },
      { x: 50, y: 55 },
      { x: 48, y: 62 },
      { x: 46, y: 68 },
      { x: 44, y: 72 },
    ],
  },
  {
    id: 'estacion-metro',
    name: 'Baño Estación de Metro',
    shortName: 'Estación de Metro',
    distance: 510,
    walkMinutes: 7,
    rating: 4.0,
    reviewCount: 47,
    features: ['accessible', 'offline', 'open247', 'free'],
    photoUrl: asset('images/bathrooms/metro.jpg'),
    mapX: 85,
    mapY: 58,
    routePath: [
      { x: 50, y: 50 },
      { x: 55, y: 50 },
      { x: 62, y: 52 },
      { x: 72, y: 55 },
      { x: 80, y: 57 },
      { x: 85, y: 58 },
    ],
  },
  {
    id: 'centro-comercial',
    name: 'Baño Centro Comercial Norte',
    shortName: 'Centro Comercial Norte',
    distance: 680,
    walkMinutes: 9,
    rating: 4.5,
    reviewCount: 156,
    features: ['clean', 'accessible', 'paper', 'baby', 'soap', 'dryer', 'free'],
    photoUrl: asset('images/bathrooms/centro.jpg'),
    mapX: 18,
    mapY: 30,
    routePath: [
      { x: 50, y: 50 },
      { x: 42, y: 48 },
      { x: 35, y: 42 },
      { x: 28, y: 36 },
      { x: 22, y: 32 },
      { x: 18, y: 30 },
    ],
  },
]

export const featureLabels = {
  clean: 'Baño limpio',
  accessible: 'Acceso para todos',
  paper: 'Papel disponible',
  baby: 'Cambiador bebé',
  offline: 'Funciona sin internet',
  soap: 'Jabón disponible',
  open247: 'Abierto 24 horas',
  free: 'Gratis',
  dryer: 'Secador de manos',
  inclusive: 'Baño inclusivo',
}

export function getBathroom(id) {
  return bathrooms.find((b) => b.id === id) ?? bathrooms[0]
}

export const INITIAL_FAVORITES = ['plaza-central', 'parque-amistad']
