"use client"

import Image from "next/image"
import TransitionLink from "@/components/shared/transition-link"

interface Project {
  title: string
  address: string
  category: string
  status: string
  completion: string
  investment: string
  units: string
  image: string
  slug: string
}

interface ProjectCardProps {
  project: Project
  index: number
  activeImage: string | null
  activeSection: 1 | 2 | null
  sectionType: 1 | 2
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export const ProjectCard = ({
  project,
  index,
  activeImage,
  activeSection,
  sectionType,
  onMouseEnter,
  onMouseLeave,
}: ProjectCardProps) => {
  const isActive = activeSection === sectionType && activeImage === project.image
  const isCurrentProject = sectionType === 1

  return (
    <div
      key={index}
      className={`relative grid grid-cols-[350px_1fr_200px] gap-8 items-center py-8 overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer border-2 ${
        isCurrentProject
          ? "border-emerald-200/50 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10 bg-gradient-to-r from-emerald-50/30 to-transparent"
          : "border-slate-200/50 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-500/10 bg-gradient-to-r from-slate-50/30 to-transparent"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`absolute top-4 left-4 z-30 px-3 py-1 rounded-full text-xs font-semibold ${
          isCurrentProject ? "bg-emerald-500 text-white shadow-lg" : "bg-slate-500 text-white shadow-lg"
        }`}
      >
        {isCurrentProject ? "CURRENT" : "COMPLETED"}
      </div>

      {isActive && (
        <>
          <div className="absolute inset-0 animate-in slide-in-from-right-5 duration-700 rounded-2xl overflow-hidden">
            <Image src={project.image || "/placeholder.svg"} alt="Background" fill className="object-cover" />
          </div>
          <div
            className={`absolute inset-0 animate-in fade-in-0 duration-500 rounded-2xl ${
              isCurrentProject
                ? "bg-gradient-to-r from-slate-900/60 via-slate-900/40 to-emerald-900/60"
                : "bg-gradient-to-r from-slate-900/60 via-slate-900/40 to-slate-900/60"
            }`}
          />
        </>
      )}

      <div className="relative z-10 pl-8">
        <p
          className={`text-sm leading-relaxed transition-colors duration-300 ${
            isActive ? "text-white/90" : isCurrentProject ? "text-emerald-700" : "text-slate-600"
          }`}
        >
          {project.address}
        </p>
      </div>

      <div className="relative z-10">
        <h1
          className={`text-6xl md:text-7xl font-bold leading-tight transition-colors duration-500 cursor-default ${
            isActive ? "text-white" : isCurrentProject ? "text-emerald-800" : "text-slate-800"
          }`}
        >
          {project.title}
        </h1>
        <p
          className={`text-sm mt-2 transition-colors duration-300 ${
            isActive ? "text-white/80" : isCurrentProject ? "text-emerald-600" : "text-slate-500"
          }`}
        >
          {project.category}
        </p>
      </div>

      <div className="relative z-10 space-y-2">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
            isActive
              ? "bg-white/20 text-white backdrop-blur-sm"
              : isCurrentProject
                ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                : "bg-slate-100 text-slate-700 border border-slate-200"
          }`}
        >
          {project.status}
        </span>
        <div className="space-y-1 text-sm">
          <p
            className={`transition-colors duration-300 ${
              isActive ? "text-white/90" : isCurrentProject ? "text-emerald-700" : "text-slate-600"
            }`}
          >
            {project.completion}
          </p>
          <p
            className={`transition-colors duration-300 ${
              isActive ? "text-white/90" : isCurrentProject ? "text-emerald-700" : "text-slate-600"
            }`}
          >
            {project.investment}
          </p>
          <p
            className={`transition-colors duration-300 ${
              isActive ? "text-white/90" : isCurrentProject ? "text-emerald-700" : "text-slate-600"
            }`}
          >
            {project.units}
          </p>
        </div>
        <div
          className={`text-xs mt-2 transition-colors duration-300 flex items-center gap-1 ${
            isActive ? "text-white/70" : isCurrentProject ? "text-emerald-600" : "text-slate-400"
          }`}
        >
          {isCurrentProject ? "🚧" : "✅"} Click for details →
        </div>
      </div>
    </div>
  )
}
