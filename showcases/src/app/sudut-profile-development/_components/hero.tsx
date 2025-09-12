"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={"/images/sudut-profile-development/hero-development-background.png"}
          alt="Professional Development"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/70 to-emerald-900/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1
              className={`text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight text-balance transition-all duration-1000 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <span className="text-emerald-400">Development</span>
              <br />& Investment
            </h1>

            <div
              className={`w-32 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full transition-all duration-1000 delay-300 ${
                isLoaded ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </div>

          <p
            className={`text-sm md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed text-pretty transition-all duration-1000 delay-500 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            We deliver exceptional projects with efficiency and impact. Specializing in residential, commercial, and
            hospitality developments that drive long-term growth across Indonesia's most promising markets.
          </p>

          <div
            className={`flex flex-wrap justify-center items-center gap-8 opacity-80 transition-all duration-1000 delay-700 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">30+</div>
              <div className="text-sm text-white/70 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-white/70 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">$2B+</div>
              <div className="text-sm text-white/70 font-medium">Assets Developed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
