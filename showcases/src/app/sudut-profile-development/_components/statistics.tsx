"use client"
import Image from "next/image"
import CountUp from "react-countup"
import { useEffect, useState } from "react"
import { stats } from "../lib/data"

export function Statistics() {
  const [isVisible, setIsVisible] = useState(false)
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setStartCount(true), 500)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("statistics-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="statistics-section"
      className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-slate-100 via-white to-emerald-50/40 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-slate-400 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <div
          className={`self-stretch py-8 md:py-12 lg:py-16 flex flex-col justify-center items-center gap-4 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="flex flex-col justify-start items-center text-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 text-balance">
              Our Success is Measured by{" "}
              <span className="text-emerald-600 relative">
                Yours
                <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full"></div>
              </span>
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-slate-700 mb-16 text-pretty leading-relaxed">
              At Sudut Profile, we believe that every project's success reflects directly on our clients. With tailored
              construction solutions and a commitment to excellence, we ensure your goals are achieved at every stage.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-6 md:gap-6 lg:gap-8 mx-auto">
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-9 gap-6 md:gap-6 lg:gap-8">
            <div
              className={`w-full h-full bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative p-8 col-span-4 border border-slate-200/50 hover:border-emerald-500/30 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="relative z-10 font-normal break-words text-xl leading-8 space-y-6 mb-8 text-slate-700">
                <p>
                  Partner with Sudut Profile, a proven developer with a strong track record of success. Our expertise
                  spans across the property development sector, bridging both residential and commercial projects. We
                  specialize in high-value investments, including hotels, resorts, and premium residences, with hundreds
                  of units currently under development.
                </p>
                <p className="my-6">
                  Our diverse portfolio features income-generating properties defined by award-winning architecture and
                  bespoke design. With end-to-end services, we ensure a seamless investment cycle—reflecting our belief
                  that your prosperity is the true measure of our success.
                </p>
                <p>
                  Explore a world of opportunity with Sudut Profile as we continue to redefine property development and
                  investment potential across Indonesia.
                </p>
              </div>
              <div className="relative z-10 flex justify-start items-center gap-4">
                <Image
                  src={"/images/shared/avatar.jpg"}
                  alt={`Testimonial avatar`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full border-2 border-emerald-500/20"
                />
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="text-lg font-semibold text-slate-900">Partner with Us</div>
                  <div className="text-sm text-slate-600">Investment Opportunities</div>
                </div>
              </div>
            </div>

            <div
              className={`col-span-5 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="w-full h-full grid grid-cols-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 overflow-hidden">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`w-full h-full flex flex-col justify-center items-center p-8 hover:bg-emerald-50/50 transition-all duration-300 group cursor-pointer ${
                      index < 3 ? "border-b border-slate-200/50" : ""
                    } ${index % 3 !== 2 ? "border-r border-slate-200/50" : ""}`}
                  >
                    <div className="text-5xl font-bold text-emerald-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.prefix && stat.prefix}
                      {startCount ? (
                        <CountUp duration={3} end={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                      ) : (
                        "0"
                      )}
                      {stat.suffix}
                    </div>
                    <p className="text-lg text-slate-700 group-hover:text-slate-900 transition-colors duration-300 text-center font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
