"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { AnimatedButton } from "@/components/animated-button"

export default function DepoimentosPage() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [progress, setProgress] = useState(0)
  const isMobile = useMobile()

  useEffect(() => {
    setIsLoaded(true)
    setTimeout(() => setProgress(95), 150)
  }, [])

  const testimonials = [
    {
      name: "Juliana Mendes",
      location: "São Paulo, SP",
      text: '"Comecei fazendo ovos de Páscoa para a família, mas depois que aprendi as técnicas do método ChocoRenda, consegui vender 87 ovos em 2023 e 142 ovos este ano! O mais incrível é que meus clientes já estão fazendo encomendas para o próximo ano. Faturei R$4.850 em apenas 3 semanas."',
      rating: 5,
      image: "/images/juliana-profile.jpeg",
    },
    {
      name: "Fernanda Oliveira",
      location: "Belo Horizonte, MG",
      text: '"Eu estava desempregada e precisando de uma renda extra quando descobri o método. Investi R$280 em materiais e consegui um retorno de mais de R$3.700! O passo a passo de precificação foi fundamental para eu não vender abaixo do valor justo. Agora estou expandindo para bombons e trufas para manter a renda o ano todo."',
      rating: 5,
      image: "/images/fernanda-profile.jpeg",
    },
    {
      name: "Camila Santos",
      location: "Recife, PE",
      text: '"As estratégias de marketing digital que aprendi no método foram um divisor de águas. Criei um Instagram para meus ovos gourmet e consegui clientes até de outras cidades! Meus ovos com recheio de pistache (uma das receitas exclusivas do método) foram os mais vendidos e consegui cobrar R$25 a mais por cada um. Resultado: R$5.230 de lucro líquido!"',
      rating: 5,
      image: "/images/camila-profile.jpeg",
    },
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

      <h2
        className={`text-lg sm:text-xl font-bold text-center mb-4 sm:mb-6 ${isLoaded ? "fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.1s" }}
      >
        Histórias reais de quem já transformou a vida com o método ChocoRenda
      </h2>

      <div
        className={`space-y-3 sm:space-y-5 mb-6 sm:mb-8 ${isLoaded ? "fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.2s" }}
      >
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-3 sm:p-4 scale-on-hover shadow-sm touch-manipulation">
            <div className="flex items-start mb-2 sm:mb-3">
              <div className="mr-2 sm:mr-3 flex-shrink-0 relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full border-2 border-red-100">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`Foto de ${testimonial.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40px, 48px"
                />
              </div>
              <div>
                <p className="font-bold text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.location}</p>
                <div className="flex mt-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={isMobile ? 12 : 14} fill="#FFD700" color="#FFD700" className="animate-pulse" />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex">
              <Quote size={isMobile ? 16 : 20} className="text-gray-300 mr-1 sm:mr-2 flex-shrink-0 rotate-180 mt-1" />
              <p className="text-xs sm:text-sm italic">{testimonial.text}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className={`${isLoaded ? "fade-in" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
        <AnimatedButton
          variant="glow"
          className="w-full py-4 sm:py-6 text-base sm:text-lg font-bold"
          onClick={() => router.push("/quiz/final")}
        >
          QUERO CONHECER O MÉTODO COMPLETO!
        </AnimatedButton>
      </div>
    </div>
  )
}

