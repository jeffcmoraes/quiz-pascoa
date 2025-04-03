"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2 } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { AnimatedButton } from "@/components/animated-button"

export default function ComoAjudarPage() {
  const router = useRouter()
  const isMobile = useMobile()

  const benefits = [
    {
      title: "O que é?",
      description:
        "Um guia completo para você aprender passo a passo como vender ovos de Páscoa gourmet e faturar alto mesmo começando do zero!",
    },
    {
      title: "Precisa investir muito?",
      description: "NÃO! Você pode começar com poucos ingredientes e já recuperar o valor no primeiro dia de vendas.",
    },
    {
      title: "Dá para fazer de casa?",
      description: "SIM! Tudo no seu tempo, sem precisar sair, sem patrão, sem chefe!",
    },
    {
      title: "Dá dinheiro?",
      description: "Sim! Você pode faturar até R$5.000 na Páscoa, vendendo ovos irresistíveis!",
    },
  ]

  return (
    <div className="w-full max-w-md mx-auto p-3 sm:p-4 bg-white">
      <div className="flex justify-center mb-4 sm:mb-6">
        <Image
          src="/images/logo.png"
          alt="ChocoRenda Logo"
          width={isMobile ? 160 : 200}
          height={isMobile ? 120 : 150}
          className="object-contain"
          priority
        />
      </div>

      <Progress value={70} className="mb-4 sm:mb-6" />

      <h2 className="text-lg sm:text-xl font-bold text-center mb-4 sm:mb-6">
        E se eu te mostrasse uma forma simples de ganhar dinheiro com doces incríveis, sem precisar ter experiência e
        com um método testado e comprovado?
      </h2>

      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
        {benefits.map((item, index) => (
          <div key={index} className="flex items-start">
            <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5" />
            <p className="text-xs sm:text-sm">
              <strong>{item.title}</strong> {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mb-6 sm:mb-8">
        <p className="text-sm sm:text-base font-medium text-maroon-700">
          Com esse guia, você terá as melhores receitas, dicas de precificação e estratégias para vender muito nas redes
          sociais!
        </p>
      </div>

      <AnimatedButton
        variant="gradient"
        className="w-full py-4 sm:py-6 text-base sm:text-lg font-bold"
        onClick={() => router.push("/quiz/pergunta-final")}
      >
        QUERO FATURAR!
      </AnimatedButton>
    </div>
  )
}

