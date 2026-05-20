import { Map, List, Heart, WifiOff, Settings, Globe, Ruler, Bell, Info, ArrowRight } from 'lucide-react'

const menuIcons = {
  map: Map,
  list: List,
  favorites: Heart,
  offline: WifiOff,
  settings: Settings,
}

export function MenuIcon({ name, size = 22, color = '#003399' }) {
  const Icon = menuIcons[name]
  return Icon ? <Icon size={size} color={color} strokeWidth={2} /> : null
}

const settingsIcons = {
  globe: Globe,
  ruler: Ruler,
  bell: Bell,
  map: Map,
  info: Info,
}

export function SettingsRowIcon({ name, size = 22, color = '#003399' }) {
  const Icon = settingsIcons[name]
  return Icon ? <Icon size={size} color={color} strokeWidth={2} /> : null
}

export function ArrowRightIcon({ size = 18, color = '#aaa' }) {
  return <ArrowRight size={size} color={color} strokeWidth={2} />
}
