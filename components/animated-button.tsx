import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "default" | "primary" | "cta" | "pulse" | "glow" | "gradient" | "gold"
  className?: string
}

export function AnimatedButton({ children, variant = "default", className, ...props }: AnimatedButtonProps) {
  const baseClasses = "transition-all duration-300 ease-in-out touch-manipulation"

  const variantClasses = {
    default: "bg-red-600 hover:bg-red-700 text-white scale-on-hover",
    primary: "bg-red-600 hover:bg-red-700 text-white animate-pulse-constant",
    cta: "bg-green-600 hover:bg-green-700 text-white animate-pulse-constant",
    pulse: "bg-red-600 hover:bg-red-700 text-white animate-pulse-constant",
    glow: "bg-red-600 hover:bg-red-700 text-white animate-border-glow",
    gradient: "text-white animate-gradient",
    gold: "bg-gold-600 hover:bg-gold-700 text-maroon-900 font-bold animate-gold-gradient",
  }

  return (
    <Button className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
    </Button>
  )
}

