import {
  Sparkles,
  Accessibility,
  Scroll,
  Baby,
  WifiOff,
  Droplets,
  Clock,
  Gift,
  Wind,
  Users,
} from 'lucide-react'

const iconProps = { size: 20, strokeWidth: 2 }

export const featureIcons = {
  clean: Sparkles,
  accessible: Accessibility,
  paper: Scroll,
  baby: Baby,
  offline: WifiOff,
  soap: Droplets,
  open247: Clock,
  free: Gift,
  dryer: Wind,
  inclusive: Users,
}

export function FeatureIcon({ feature, size = 20, color = '#4CAF50' }) {
  const Icon = featureIcons[feature]
  if (!Icon) return null
  return <Icon size={size} color={color} strokeWidth={2} />
}

export { iconProps }
