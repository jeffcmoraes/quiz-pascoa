"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useMobile } from "@/hooks/use-mobile"
import { AnimatedButton } from "@/components/animated-button"

export default function HomePage() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="w-full max-w-md mx-auto p-3 sm:p-4 bg-white min-h-screen">
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

      <h1
        className={`text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 ${isLoaded ? "fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.1s" }}
      >
        Imagine poder <span className="text-maroon-600">faturar até R$5.000 na Páscoa</span> vendendo ovos gourmet sem
        precisar sair de casa, sem precisar investir muito e seguindo um método simples e comprovado!
      </h1>

      <div
        className={`flex justify-center mb-4 sm:mb-6 ${isLoaded ? "fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.2s" }}
      >
        <div className="relative w-full max-w-xs mx-auto h-56 sm:h-64 rounded-lg overflow-hidden">
          <Image
            src="/images/chocorenda-logo.png"
            alt="ChocoRenda Logo Elegante"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </div>
      </div>

      <p
        className={`text-center text-sm sm:text-base mb-4 sm:mb-6 ${isLoaded ? "fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.3s" }}
      >
        Milhares de pessoas estão buscando <strong>ovos caseiros e personalizados</strong>, e quem sabe vender do jeito
        certo pode <strong>faturar alto em poucas semanas</strong>! Mas será que essa oportunidade é para você?{" "}
        <strong>Responda o quiz e descubra!</strong> 👇
      </p>

      <div className={`${isLoaded ? "fade-in" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
        <AnimatedButton
          variant="pulse"
          className="w-full py-4 sm:py-6 text-base sm:text-lg font-bold"
          onClick={() => router.push("/quiz/idade")}
        >
          QUERO DESCOBRIR!!
        </AnimatedButton>
      </div>
    </div>
  )
}

