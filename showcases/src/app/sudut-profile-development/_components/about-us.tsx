"use client"
import { useEffect, useState } from "react"
import { Building2, Users, Target } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [valuesVisible, setValuesVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const valuesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setValuesVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("about-section")
    const valuesElement = document.getElementById("values-section")

    if (element) observer.observe(element)
    if (valuesElement) valuesObserver.observe(valuesElement)

    return () => {
      observer.disconnect()
      valuesObserver.disconnect()
    }
  }, [])

  return (
    <section
      id="about-section"
      className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-slate-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 text-balance">
              Shaping Indonesia's{" "}
              <span className="text-emerald-600 relative inline-block">
                Future
                <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full"></div>
              </span>{" "}
              Developments
            </h2>
          </div>

          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="space-y-6 text-lg lg:text-xl text-slate-700 leading-relaxed">
              <p className="text-pretty hover:text-slate-900 transition-colors duration-300">
                We are a passionate team committed to building innovative solutions that empower businesses and
                communities. Since our founding, we have focused on delivering quality, trust, and long-term value.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">

          {/* Values Section */}
          <div id="values-section" className="grid md:grid-cols-3 gap-12">
            <div
              className={`text-center group transition-all duration-1000 ${valuesVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="w-16 h-16 bg-emerald-100 hover:bg-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Building2 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-700 leading-relaxed text-base">
                We strive for excellence in every project, ensuring the highest standards of quality and craftsmanship.
              </p>
            </div>

            <div
              className={`text-center group transition-all duration-1000 delay-200 ${valuesVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="w-16 h-16 bg-emerald-100 hover:bg-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Collaboration</h3>
              <p className="text-slate-700 leading-relaxed text-base">
                We believe in the power of teamwork and partnership to achieve extraordinary results together.
              </p>
            </div>

            <div
              className={`text-center group transition-all duration-1000 delay-400 ${valuesVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="w-16 h-16 bg-emerald-100 hover:bg-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
              <p className="text-slate-700 leading-relaxed text-base">
                We embrace cutting-edge solutions and creative approaches to solve complex challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
