"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { useMobile } from "@/hooks/use-mobile"
import { AnimatedButton } from "@/components/animated-button"

export default function PerguntaFinalPage() {
  const router = useRouter()
  const [resposta, setResposta] = useState<string>("")
  const isMobile = useMobile()

  const options = [
    {
      value: "sim",
      label: "SIM! Aceitaria! Estou precisando muito!",
      className: "border-green-500 bg-green-50 text-green-700",
    },
    {
      value: "nao",
      label: "NÃO! Não aceitaria! Não tenho interesse!",
      className: "border-red-300 bg-red-50 text-red-700",
    },
  ]

  const handleNext = () => {
    if (resposta) {
      localStorage.setItem("quiz_pergunta_final", resposta)
      router.push("/quiz/carregando")
    }
  }

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

      <Progress value={80} className="mb-4 sm:mb-6" />

      <h2 className="text-lg sm:text-xl font-bold text-center mb-4 sm:mb-8">
        Se eu te entregasse um plano passo a passo, com tudo pronto, desde as melhores receitas até estratégias de
        divulgação e GESTÃO FINANCEIRA eficaz para você faturar a partir de R$ 5.000 vendendo ovos gourmet. Você
        aceitaria?
      </h2>

      <RadioGroup value={resposta} onValueChange={setResposta} className="space-y-3 sm:space-y-5 mb-6 sm:mb-8">
        {options.map((option, index) => (
          <div
            key={option.value}
            className={`flex items-center space-x-2 border p-4 rounded-md touch-manipulation ${option.className}`}
          >
            <RadioGroupItem value={option.value} id={`inicio-${index + 1}`} />
            <Label htmlFor={`inicio-${index + 1}`} className={`text-sm sm:text-base font-bold`}>
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>

      <AnimatedButton
        variant="pulse"
        className="w-full py-4 sm:py-6 text-base sm:text-lg font-bold"
        onClick={handleNext}
        disabled={!resposta}
      >
        FINALIZAR QUIZ
      </AnimatedButton>
    </div>
  )
}

