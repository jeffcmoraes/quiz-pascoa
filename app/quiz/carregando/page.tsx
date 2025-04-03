"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { useMobile } from "@/hooks/use-mobile"

export default function CarregandoPage() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    setIsLoaded(true)

    // Animação de progresso gradual
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 100)

    // Redirecionar após o carregamento completo
    const timer = setTimeout(() => {
      router.push("/quiz/depoimentos")
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [router])

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

      <div
        className={`text-center mb-6 sm:mb-8 ${isLoaded ? "fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.1s" }}
      >
        <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Analisando suas respostas...</h2>
        <p className="text-sm sm:text-base mb-4 sm:mb-6">
          Estamos definindo seu perfil para oferecer a melhor solução para você.
        </p>

        <div className="flex flex-col items-center">
          <Progress value={progress} className="w-full mb-3 sm:mb-4 transition-all duration-300 ease-out" />
          <div className="animate-pulse flex space-x-2 justify-center">
            <div className="h-2 sm:h-3 w-2 sm:w-3 bg-red-600 rounded-full"></div>
            <div className="h-2 sm:h-3 w-2 sm:w-3 bg-red-600 rounded-full" style={{ animationDelay: "0.1s" }}></div>
            <div className="h-2 sm:h-3 w-2 sm:w-3 bg-red-600 rounded-full" style={{ animationDelay: "0.1s" }}></div>
          </div>
        </div>
      </div>

      <div
        className={`text-center text-xs sm:text-sm text-gray-500 ${isLoaded ? "fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.1s" }}
      >
        <p>Por favor, aguarde enquanto processamos suas informações...</p>
      </div>
    </div>
  )
}

