"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, AlertTriangle, CheckCircle } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { AnimatedButton } from "@/components/animated-button"

export default function FinalPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [progress, setProgress] = useState(0)
  const isMobile = useMobile()

  useEffect(() => {
    setIsLoaded(true)
    setTimeout(() => setProgress(100), 300)
  }, [])

  const handleCheckout = () => {
    window.location.href = "https://go.disruptybr.click/2jgqa"
  }

  const benefits = [
    "Curso completo com mais de 30 aulas em vídeo",
    "20 receitas exclusivas de ovos gourmet de alto valor",
    "Guia de precificação para maximizar seus lucros",
    "Estratégias de marketing digital para vender online",
    "Lista de fornecedores com preços especiais",
    "Acesso ao grupo exclusivo de alunos",
    "Suporte personalizado por 3 meses",
  ]

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

      <div
        className={`text-center mb-4 sm:mb-6 ${isLoaded ? "fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.1s" }}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          Parabéns! Você tem o perfil ideal para o método Ovos Gourmet!
        </h2>
        <p className="text-base sm:text-lg">
          Com base nas suas respostas, você pode faturar até{" "}
          <span className="font-bold text-red-600 animate-pulse">R$5.000 na próxima Páscoa</span> com nosso método
          exclusivo!
        </p>
      </div>

      <div
        className={`bg-gray-100 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 ${isLoaded ? "fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.2s" }}
      >
        <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">O que você vai receber:</h3>

        <div className="space-y-2 sm:space-y-3">
          {benefits.map((item, index) => (
            <div key={index} className={`flex items-start fade-in`} style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
              <CheckCircle2 className="text-green-500 mr-2 mt-0.5 flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5 animate-bounce-subtle" />
              <p className="text-xs sm:text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparação Antes e Depois */}
      <div className={`mb-4 sm:mb-6 ${isLoaded ? "fade-in" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
        <div className="flex rounded-lg overflow-hidden border">
          {/* Coluna Antes */}
          <div className="w-1/2 bg-gray-50 p-2 sm:p-3">
            <h4 className="text-center font-bold text-sm sm:text-base mb-2">Antes</h4>
            <div className="relative w-full h-32 sm:h-40 mb-2">
              <Image
                src="/images/mulher-triste-nova.png"
                alt="Mulher preocupada com finanças"
                fill
                className="object-cover rounded"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <p className="text-center text-xs mb-2">Perdendo mais 1 oportunidade de renda extra</p>
            <div className="bg-gray-200 h-2 rounded-full mb-3">
              <div className="bg-gray-400 h-2 rounded-full w-1/4"></div>
            </div>
            <div className="bg-gray-200 p-2 rounded flex items-center">
              <AlertTriangle size={14} className="text-gray-700 mr-1 flex-shrink-0" />
              <p className="text-xs text-gray-700">Vai errar em mais uma atitude?</p>
            </div>
          </div>

          {/* Coluna Depois */}
          <div className="w-1/2 bg-green-50 p-2 sm:p-3">
            <h4 className="text-center font-bold text-sm sm:text-base mb-2">Depois</h4>
            <div className="relative w-full h-32 sm:h-40 mb-2">
              <Image
                src="/images/mulher-feliz-nova.png"
                alt="Mulher feliz após usar o método"
                fill
                className="object-cover rounded"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <p className="text-center text-xs mb-2">Depois que aproveitei a renda extra</p>
            <div className="bg-gray-200 h-2 rounded-full mb-3">
              <div className="bg-green-500 h-2 rounded-full w-full"></div>
            </div>
            <div className="bg-green-100 p-2 rounded flex items-center">
              <CheckCircle size={14} className="text-green-700 mr-1 flex-shrink-0" />
              <p className="text-xs text-green-700">Depois que fiz a escolha certa!</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`text-center mb-4 sm:mb-6 ${isLoaded ? "fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.3s" }}
      >
        <p className="text-xl sm:text-2xl font-bold">
          De <span className="line-through">R$97,00</span> por apenas
        </p>
        <p className="text-2xl sm:text-3xl font-bold text-red-600 mb-1 sm:mb-2 animate-pulse">R$19,90</p>
      </div>

      <div className={`${isLoaded ? "fade-in" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
        <AnimatedButton
          variant="cta"
          className="w-full py-4 sm:py-6 text-base sm:text-xl font-bold mb-3 sm:mb-4"
          onClick={handleCheckout}
        >
          QUERO COMEÇAR AGORA!
        </AnimatedButton>
      </div>

      <p
        className={`text-center text-xs sm:text-sm text-gray-500 ${isLoaded ? "fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.5s" }}
      >
        Garantia de 7 dias ou seu dinheiro de volta
      </p>
    </div>
  )
}

