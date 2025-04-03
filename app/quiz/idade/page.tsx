"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { useMobile } from "@/hooks/use-mobile"
import { AnimatedButton } from "@/components/animated-button"

export default function IdadePage() {
  const router = useRouter()
  const [idade, setIdade] = useState<string>("")
  const [isLoaded, setIsLoaded] = useState(false)
  const [progress, setProgress] = useState(0)
  const isMobile = useMobile()

  const ageOptions = [
    { value: "18-30", label: "18-30 anos" },
    { value: "31-45", label: "31-45 anos" },
    { value: "46-60", label: "46-60 anos" },
    { value: "60+", label: "Acima de 60 anos" },
  ]

  useEffect(() => {
    setIsLoaded(true)
    setTimeout(() => setProgress(10), 150)
  }, [])

  const handleNext = () => {
    if (idade) {
      localStorage.setItem("quiz_idade", idade)
      router.push("/quiz/prova-social")
    }
  }

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
        className={`text-lg sm:text-xl font-bold text-center mb-4 sm:mb-8 ${isLoaded ? "fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.1s" }}
      >
        Qual é a sua idade?
      </h2>

      <div className={`${isLoaded ? "fade-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
        <RadioGroup value={idade} onValueChange={setIdade} className="mb-6 sm:mb-8">
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {ageOptions.map((option, index) => (
              <div
                key={option.value}
                className="flex flex-col items-center border p-3 rounded-md hover:bg-gray-50 transition-colors duration-200 scale-on-hover touch-manipulation"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-center justify-center">
                  <RadioGroupItem value={option.value} id={`idade-${index + 1}`} className="mr-2" />
                  <Label htmlFor={`idade-${index + 1}`} className="text-sm sm:text-base">
                    {option.label}
                  </Label>
                </div>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>

      <div className={`${isLoaded ? "fade-in" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
        <AnimatedButton
          variant="primary"
          className="w-full py-4 sm:py-6 text-base sm:text-lg font-bold"
          onClick={handleNext}
          disabled={!idade}
        >
          CONTINUAR
        </AnimatedButton>
      </div>
    </div>
  )
}

