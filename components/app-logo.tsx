// Logo component for the NASA Space App
// You can easily switch between different logo styles here

import Image from "next/image"
import { Rocket, Satellite, Globe, Orbit, Telescope } from "lucide-react"

type LogoVariant = "rocket" | "satellite" | "globe" | "orbit" | "telescope" | "image"

interface AppLogoProps {
  variant?: LogoVariant
  className?: string
  size?: number
  imagePath?: string
}

export function AppLogo({ 
  variant = "rocket", 
  className = "w-6 h-6 text-primary",
  size = 24,
  imagePath = "/placeholder-logo.svg"
}: AppLogoProps) {
  // If using an image logo
  if (variant === "image") {
    return (
      <Image
        src={imagePath}
        alt="NASA Space App Logo"
        width={size}
        height={size}
        className={className}
      />
    )
  }

  // Icon-based logos
  const iconProps = { className, size }

  switch (variant) {
    case "satellite":
      return <Satellite {...iconProps} />
    case "globe":
      return <Globe {...iconProps} />
    case "orbit":
      return <Orbit {...iconProps} />
    case "telescope":
      return <Telescope {...iconProps} />
    case "rocket":
    default:
      return <Rocket {...iconProps} />
  }
}

// For NASA branding, you could also use this SVG component
export function NASALogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="currentColor"
    >
      {/* Simplified NASA-style logo */}
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3"/>
      <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="50" cy="50" r="8" fill="currentColor"/>
      <path d="M 30 30 L 70 70 M 70 30 L 30 70" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}

// Animated logo component
export function AnimatedLogo({ className = "w-6 h-6 text-primary" }: { className?: string }) {
  return (
    <div className="relative">
      <Rocket className={`${className} animate-pulse`} />
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping"></div>
    </div>
  )
}
