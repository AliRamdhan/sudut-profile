"use client"

import Image from "next/image"
import { useState } from "react"
import { currentProjects, completedProjects } from "../lib/data"
import Link from "next/link"

const ProjectsPage = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<1 | 2 | null>(null)

  return (
    <div className="mb-40">
      <section>
        <div className="container px-6 py-12 lg:py-24 mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">
              Our Portfolio
            </h1>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
          </div>

          <div className="max-w-5xl mx-auto mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-medium text-slate-700 leading-relaxed mb-6">
              Explore our comprehensive portfolio of luxury developments across Indonesia's most prestigious locations.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              From beachfront resorts to urban commercial centers, each project represents our commitment to excellence
              and innovation in development.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-emerald-50 via-slate-50 to-emerald-50/50">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-slate-800 mb-4">Current Projects</h2>
            <p className="text-slate-600">Developments currently in progress</p>
            <div className="w-16 h-0.5 bg-emerald-500 mx-auto mt-4"></div>
          </div>

          <div className="max-w-7xl mx-auto space-y-12">
            <div className="grid grid-cols-[350px_1fr_200px] gap-8 items-center">
              <h3 className="text-lg font-semibold text-slate-700 pl-8">Location</h3>
              <h3 className="text-lg font-semibold text-slate-700 pl-3">Property</h3>
              <h3 className="text-lg font-semibold text-slate-700">Details</h3>
            </div>

            {currentProjects.map((item, idx) => (
              <div
                key={idx}
                className="relative grid grid-cols-[350px_1fr_200px] gap-8 items-center py-8 overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 cursor-pointer"
                onMouseEnter={() => {
                  setActiveImage(item.image)
                  setActiveSection(1)
                }}
                onMouseLeave={() => {
                  setActiveImage(null)
                  setActiveSection(null)
                }}
              >
                {activeSection === 1 && activeImage === item.image && (
                  <>
                    <div className="absolute inset-0 animate-in slide-in-from-right-5 duration-700 rounded-2xl overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt="Background" fill className="object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/40 to-emerald-900/60 animate-in fade-in-0 duration-500 rounded-2xl" />
                  </>
                )}

                <div className="relative z-10 pl-8">
                  <p
                    className={`text-sm leading-relaxed transition-colors duration-300 ${
                      activeSection === 1 && activeImage === item.image ? "text-white/90" : "text-slate-600"
                    }`}
                  >
                    {item.address}
                  </p>
                </div>

                <div className="relative z-10">
                  <h1
                    className={`text-6xl md:text-7xl font-bold leading-tight transition-colors duration-500 cursor-default ${
                      activeSection === 1 && activeImage === item.image ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {item.title}
                  </h1>
                  <p
                    className={`text-sm mt-2 transition-colors duration-300 ${
                      activeSection === 1 && activeImage === item.image ? "text-white/80" : "text-slate-500"
                    }`}
                  >
                    {item.category}
                  </p>
                </div>

                <div className="relative z-10 space-y-2">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                      activeSection === 1 && activeImage === item.image
                        ? "bg-white/20 text-white backdrop-blur-sm"
                        : "bg-emerald-100 text-emerald-700 border border-emerald-200"
                    }`}
                  >
                    {item.status}
                  </span>
                  <div className="space-y-1 text-sm">
                    <p
                      className={`transition-colors duration-300 ${
                        activeSection === 1 && activeImage === item.image ? "text-white/90" : "text-slate-600"
                      }`}
                    >
                      {item.completion}
                    </p>
                    <p
                      className={`transition-colors duration-300 ${
                        activeSection === 1 && activeImage === item.image ? "text-white/90" : "text-slate-600"
                      }`}
                    >
                      {item.investment}
                    </p>
                    <p
                      className={`transition-colors duration-300 ${
                        activeSection === 1 && activeImage === item.image ? "text-white/90" : "text-slate-600"
                      }`}
                    >
                      {item.units}
                    </p>
                  </div>
                  <div
                    className={`text-xs mt-2 transition-colors duration-300 ${
                      activeSection === 1 && activeImage === item.image ? "text-white/70" : "text-slate-400"
                    }`}
                  >
                    Click for details →
                  </div>
                </div>
                <Link href={`/sudut-profile-development/projects/${item.slug}`} className="absolute inset-0 z-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-slate-800 mb-4">Completed Projects</h2>
            <p className="text-slate-600">Successfully delivered developments</p>
            <div className="w-16 h-0.5 bg-slate-400 mx-auto mt-4"></div>
          </div>

          <div className="max-w-7xl mx-auto space-y-12">
            <div className="grid grid-cols-[350px_1fr_200px] gap-8 items-center">
              <h3 className="text-lg font-semibold text-slate-700 pl-8">Location</h3>
              <h3 className="text-lg font-semibold text-slate-700 pl-3">Property</h3>
              <h3 className="text-lg font-semibold text-slate-700">Details</h3>
            </div>

            {completedProjects.map((item, idx) => (
              <div
                key={idx}
                className="relative grid grid-cols-[350px_1fr_200px] gap-8 items-center py-8 overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-500/10 cursor-pointer"
                onMouseEnter={() => {
                  setActiveImage(item.image)
                  setActiveSection(2)
                }}
                onMouseLeave={() => {
                  setActiveImage(null)
                  setActiveSection(null)
                }}
              >
                {activeSection === 2 && activeImage === item.image && (
                  <>
                    <div className="absolute inset-0 animate-in slide-in-from-right-5 duration-700 rounded-2xl overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt="Background" fill className="object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/40 to-slate-900/60 animate-in fade-in-0 duration-500 rounded-2xl" />
                  </>
                )}

                <div className="relative z-10 pl-8">
                  <p
                    className={`text-sm leading-relaxed transition-colors duration-300 ${
                      activeSection === 2 && activeImage === item.image ? "text-white/90" : "text-slate-600"
                    }`}
                  >
                    {item.address}
                  </p>
                </div>

                <div className="relative z-10">
                  <h1
                    className={`text-6xl md:text-7xl font-bold leading-tight transition-colors duration-500 cursor-default ${
                      activeSection === 2 && activeImage === item.image ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {item.title}
                  </h1>
                  <p
                    className={`text-sm mt-2 transition-colors duration-300 ${
                      activeSection === 2 && activeImage === item.image ? "text-white/80" : "text-slate-500"
                    }`}
                  >
                    {item.category}
                  </p>
                </div>

                <div className="relative z-10 space-y-2">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                      activeSection === 2 && activeImage === item.image
                        ? "bg-white/20 text-white backdrop-blur-sm"
                        : "bg-slate-100 text-slate-700 border border-slate-200"
                    }`}
                  >
                    {item.status}
                  </span>
                  <div className="space-y-1 text-sm">
                    <p
                      className={`transition-colors duration-300 ${
                        activeSection === 2 && activeImage === item.image ? "text-white/90" : "text-slate-600"
                      }`}
                    >
                      {item.completion}
                    </p>
                    <p
                      className={`transition-colors duration-300 ${
                        activeSection === 2 && activeImage === item.image ? "text-white/90" : "text-slate-600"
                      }`}
                    >
                      {item.investment}
                    </p>
                    <p
                      className={`transition-colors duration-300 ${
                        activeSection === 2 && activeImage === item.image ? "text-white/90" : "text-slate-600"
                      }`}
                    >
                      {item.units}
                    </p>
                  </div>
                  <div
                    className={`text-xs mt-2 transition-colors duration-300 ${
                      activeSection === 2 && activeImage === item.image ? "text-white/70" : "text-slate-400"
                    }`}
                  >
                    Click for details →
                  </div>
                </div>
                <Link href={`/sudut-profile-development/projects/${item.slug}`} className="absolute inset-0 z-20" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage
