"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { useMobile } from "@/hooks/use-mobile"
import { AnimatedButton } from "@/components/animated-button"

export default function Pergunta3Page() {
  const router = useRouter()
  const [resposta, setResposta] = useState<string>("")
  const isMobile = useMobile()

  const options = [
    { value: "horas-extras", label: "Trabalhei horas extras, mas não valeu a pena" },
    { value: "vender", label: "Tentei vender alguma coisa, mas não soube como divulgar" },
    { value: "doces", label: "Já fiz doces, mas não tive bons lucros" },
    { value: "nada", label: "Nunca tentei nada, mas estou aberta(o) a novas oportunidades" },
  ]

  const handleNext = () => {
    if (resposta) {
      localStorage.setItem("quiz_pergunta3", resposta)
      router.push("/quiz/pergunta-4")
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

      <Progress value={50} className="mb-4 sm:mb-6" />

      <h2 className="text-lg sm:text-xl font-bold text-center mb-4 sm:mb-8">
        O que você já tentou para ganhar dinheiro extra?
      </h2>

      <RadioGroup value={resposta} onValueChange={setResposta} className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
        {options.map((option, index) => (
          <div key={option.value} className="flex items-center space-x-2 border p-3 rounded-md touch-manipulation">
            <RadioGroupItem value={option.value} id={`obj-${index + 1}`} />
            <Label htmlFor={`obj-${index + 1}`} className="text-sm sm:text-base">
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>

      <AnimatedButton
        variant="primary"
        className="w-full py-4 sm:py-6 text-base sm:text-lg font-bold"
        onClick={handleNext}
        disabled={!resposta}
      >
        CONTINUAR
      </AnimatedButton>
    </div>
  )
}

