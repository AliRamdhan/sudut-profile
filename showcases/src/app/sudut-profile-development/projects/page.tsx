"use client"

import Image from "next/image"
import { useState } from "react"
import { currentProjects, completedProjects } from "../lib/data"
import TransitionLink from "@/components/shared/transition-link"

// Menambahkan tipe data untuk proyek agar lebih aman dan mudah dikelola
type Project = {
  title: string
  slug: string
  image: string
  address: string
  category: string
  status: string
  completion: string
  investment: string
  units: string
}

const ProjectsPage = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<1 | 2 | null>(null)

  const handleMouseEnter = (image: string, section: 1 | 2) => {
    // Nonaktifkan hover effect di perangkat touch (mobile)
    if (window.matchMedia("(hover: none)").matches) {
      return
    }
    setActiveImage(image)
    setActiveSection(section)
  }

  const handleMouseLeave = () => {
    if (window.matchMedia("(hover: none)").matches) {
      return
    }
    setActiveImage(null)
    setActiveSection(null)
  }

  // Komponen untuk item proyek agar tidak ada duplikasi kode
  const ProjectItem = ({
    item,
    sectionId,
    theme,
  }: {
    item: Project
    sectionId: 1 | 2
    theme: "emerald" | "slate"
  }) => {
    const isActive = activeSection === sectionId && activeImage === item.image
    const themeClasses = {
      shadow: `hover:shadow-${theme}-500/10`,
      statusBg: isActive ? "bg-white/20 text-white backdrop-blur-sm" : `bg-${theme}-100 text-${theme}-700 border border-${theme}-200`,
      gradient: `from-slate-900/60 via-slate-900/40 to-${theme}-900/60`,
    }

    return (
      <div
        className={`relative flex flex-col md:grid md:grid-cols-[350px_1fr_200px] gap-4 md:gap-8 md:items-center p-6 md:py-8 overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl ${themeClasses.shadow} cursor-pointer`}
        onMouseEnter={() => handleMouseEnter(item.image, sectionId)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Image & Overlay */}
        {isActive && (
          <>
            <div className="absolute inset-0 animate-in slide-in-from-right-5 duration-700 rounded-2xl overflow-hidden">
              <Image src={item.image || "/placeholder.svg"} alt="Background" fill className="object-cover" />
            </div>
            <div
              className={`absolute inset-0 bg-gradient-to-r ${themeClasses.gradient} animate-in fade-in-0 duration-500 rounded-2xl`}
            />
          </>
        )}

        {/* Kolom Konten */}
        <div className="relative z-10 order-2 md:order-1 md:pl-8">
          <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? "text-white/90" : "text-slate-600"}`}>
            {item.address}
          </p>
        </div>

        <div className="relative z-10 order-1 md:order-2">
          <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold leading-tight transition-colors duration-500 cursor-default ${isActive ? "text-white" : "text-slate-800"}`}>
            {item.title}
          </h1>
          <p className={`text-sm mt-2 transition-colors duration-300 ${isActive ? "text-white/80" : "text-slate-500"}`}>
            {item.category}
          </p>
        </div>

        <div className="relative z-10 order-3 md:order-3 space-y-2 flex flex-col items-start">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${themeClasses.statusBg}`}>
            {item.status}
          </span>
          <div className="space-y-1 text-sm">
            <p className={`transition-colors duration-300 ${isActive ? "text-white/90" : "text-slate-600"}`}>{item.completion}</p>
            <p className={`transition-colors duration-300 ${isActive ? "text-white/90" : "text-slate-600"}`}>{item.investment}</p>
            <p className={`transition-colors duration-300 ${isActive ? "text-white/90" : "text-slate-600"}`}>{item.units}</p>
          </div>
          <div className={`text-xs mt-2 transition-colors duration-300 ${isActive ? "text-white/70" : "text-slate-400"}`}>
            Click for details →
          </div>
        </div>

        <TransitionLink href={`/sudut-profile-development/projects/${item.slug}`} className="absolute inset-0 z-20">
          <span className="sr-only">View details for {item.title}</span>
        </TransitionLink>
      </div>
    )
  }

  return (
    <div className="mb-20 md:mb-40">
      <section>
        <div className="container px-6 py-12 lg:py-24 mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">Our Portfolio</h1>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
          </div>
          <div className="max-w-5xl mx-auto mt-12 md:mt-16 text-center">
            <h2 className="text-xl md:text-3xl font-medium text-slate-700 leading-relaxed mb-6">
              Explore our comprehensive portfolio of luxury developments across Indonesia's most prestigious locations.
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              From beachfront resorts to urban commercial centers, each project represents our commitment to excellence and innovation in development.
            </p>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 via-slate-50 to-emerald-50/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-semibold text-slate-800 mb-4">Current Projects</h2>
            <p className="text-slate-600">Developments currently in progress</p>
            <div className="w-16 h-0.5 bg-emerald-500 mx-auto mt-4"></div>
          </div>

          <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
            {/* Headers, hanya tampil di desktop */}
            <div className="hidden md:grid grid-cols-[350px_1fr_200px] gap-8 items-center">
              <h3 className="text-lg font-semibold text-slate-700 pl-8">Location</h3>
              <h3 className="text-lg font-semibold text-slate-700">Property</h3>
              <h3 className="text-lg font-semibold text-slate-700">Details</h3>
            </div>
            {currentProjects.map((item, idx) => (
              <ProjectItem key={idx} item={item} sectionId={1} theme="emerald" />
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-semibold text-slate-800 mb-4">Completed Projects</h2>
            <p className="text-slate-600">Successfully delivered developments</p>
            <div className="w-16 h-0.5 bg-slate-400 mx-auto mt-4"></div>
          </div>

          <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
            {/* Headers, hanya tampil di desktop */}
            <div className="hidden md:grid grid-cols-[350px_1fr_200px] gap-8 items-center">
              <h3 className="text-lg font-semibold text-slate-700 pl-8">Location</h3>
              <h3 className="text-lg font-semibold text-slate-700">Property</h3>
              <h3 className="text-lg font-semibold text-slate-700">Details</h3>
            </div>
            {completedProjects.map((item, idx) => (
              <ProjectItem key={idx} item={item} sectionId={2} theme="slate" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage