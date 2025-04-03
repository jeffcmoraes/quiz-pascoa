"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Users, DollarSign } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { AnimatedButton } from "@/components/animated-button"

export default function ProvaSocialPage() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [progress, setProgress] = useState(0)
  const isMobile = useMobile()

  const stats = [
    {
      icon: <TrendingUp className="text-red-600 h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0" />,
      title: "Mercado em Expansão",
      description: "O quilo do ovo de Páscoa vale mais que o triplo do chocolate em barra",
    },
    {
      icon: <Users className="text-red-600 h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0" />,
      title: "+12.000 Mulheres",
      description: "Transformaram a produção de ovos artesanais em fonte de renda",
    },
    {
      icon: <DollarSign className="text-red-600 h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0" />,
      title: "Faturamento Médio",
      description: "De R$3.500 a R$7.000 durante a temporada de Páscoa",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
    setTimeout(() => setProgress(20), 150)
  }, [])

  return (
    <div className="w-full max-w-md mx-auto p-3 sm:p-4 bg-white">
      <div className={`flex justify-center mb-4 sm:mb-6 ${isLoaded ? "fade-in" : "opacity-0"}`}>
        <div className="animate-float">
          <Image
            src="/images/logo.png"
            alt="ChocoRenda Logo"
            width={isMobile ? 160 : 200}
            height={isMobile ? 120 : 150}
            className="object-contain"
            priority
          />
        </div>
      </div>

      <Progress value={progress} className="mb-4 sm:mb-6 transition-all duration-1000 ease-out" />

      <h2
        className={`text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 ${isLoaded ? "fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.1s" }}
      >
        O Mercado de Ovos de Páscoa está em CRESCIMENTO!
      </h2>

      <div className={`mb-4 sm:mb-6 ${isLoaded ? "fade-in" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
        <div className="relative w-full h-40 sm:h-48 mb-2 sm:mb-3 rounded-lg overflow-hidden">
          <Image
            src="/images/news-article.png"
            alt="Notícia sobre crescimento do mercado de ovos de Páscoa"
            fill
            className="object-cover scale-on-hover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <p className="text-xs sm:text-sm text-gray-600 italic mb-3 sm:mb-4">
          Segundo dados recentes, a produção nacional de ovos de Páscoa cresceu 17% em 2024
        </p>
      </div>

      <div
        className={`space-y-2 sm:space-y-4 mb-4 sm:mb-6 ${isLoaded ? "fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.2s" }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border rounded-md bg-gray-50 touch-manipulation"
          >
            {stat.icon}
            <div>
              <h3 className="font-bold text-sm sm:text-base">{stat.title}</h3>
              <p className="text-xs sm:text-sm">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={`${isLoaded ? "fade-in" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
        <AnimatedButton
          variant="gradient"
          className="w-full py-4 sm:py-6 text-base sm:text-lg font-bold"
          onClick={() => router.push("/quiz/pergunta-1")}
        >
          QUERO APROVEITAR ESSA OPORTUNIDADE!
        </AnimatedButton>
      </div>
    </div>
  )
}

