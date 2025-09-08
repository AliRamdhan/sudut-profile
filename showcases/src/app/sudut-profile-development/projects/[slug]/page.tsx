"use client"

import Image from "next/image"
import { notFound } from "next/navigation"
import { currentProjects, completedProjects, CurrentProject, CompletedProject } from "../../lib/data"

const findProjectBySlug = (slug: string) => {
  const allProjects = [...currentProjects, ...completedProjects]
  return allProjects.find((project) => project.slug === slug)
}


interface ProjectDetailPageProps {
  params: {
    slug: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = findProjectBySlug(params.slug) as (CurrentProject | CompletedProject) & {
    timeline?: Record<string, string>
    achievements?: string[]
  }

  if (!project) {
    notFound()
  }

  const isCurrentProject = currentProjects.some((p) => p.slug === params.slug)
  const statusColors = isCurrentProject
    ? {
        primary: "emerald",
        secondary: "blue",
        gradient: "from-emerald-600 to-emerald-700",
        badge: "bg-emerald-500",
        statusBadge: "bg-blue-100 text-blue-800",
        accent: "emerald-500",
        lightBg: "emerald-50 to-emerald-100",
        darkText: "emerald-700",
        mediumText: "emerald-800",
      }
    : {
        primary: "slate",
        secondary: "green",
        gradient: "from-slate-600 to-slate-700",
        badge: "bg-slate-500",
        statusBadge: "bg-green-100 text-green-800",
        accent: "slate-500",
        lightBg: "slate-50 to-slate-100",
        darkText: "slate-700",
        mediumText: "slate-800",
      }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className={`px-4 py-2 text-sm font-medium rounded-full ${statusColors.badge}`}>
                {project.status}
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">{project.title}</h1>
            <span className="inline-block bg-white/20 text-white backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-6">
              {project.category}
            </span>
            <p className="text-xl text-white/90 mb-6 leading-relaxed max-w-3xl">{project.description}</p>
            <div className="flex flex-wrap gap-6 text-white/80">
              <div>
                <span className="text-sm text-white/60">Investment</span>
                <p className="font-semibold">{project.investment}</p>
              </div>
              <div>
                <span className="text-sm text-white/60">Units</span>
                <p className="font-semibold">{project.units}</p>
              </div>
              <div>
                <span className="text-sm text-white/60">Completion</span>
                <p className="font-semibold">{project.completion}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 lg:py-24">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Features</h2>
              <div className="space-y-4">
                {project.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`w-2 h-2 bg-${statusColors.accent} rounded-full mt-2 flex-shrink-0`} />
                    <p className="text-slate-700 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Specifications</h2>
              <div className="space-y-4">
                {project.specifications &&
                  Object.entries(project.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-slate-100">
                      <span className="text-slate-600 capitalize font-medium">{key.replace(/([A-Z])/g, " $1")}</span>
                      <span className="text-slate-900 font-semibold">{value as string}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          {project.timeline && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Project Timeline</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(project.timeline).map(([phase, date], idx) => (
                  <div key={phase} className="relative">
                    <div className={`bg-gradient-to-br from-${statusColors.lightBg} p-6 rounded-2xl text-center`}>
                      <div
                        className={`w-12 h-12 bg-${statusColors.accent} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}
                      >
                        {idx + 1}
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-2 capitalize">
                        {phase.replace(/([A-Z])/g, " $1")}
                      </h3>
                      <p className={`text-${statusColors.darkText} font-medium`}>{date as string}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {project.achievements && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Achievements & Recognition</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 p-6 bg-gradient-to-r from-${statusColors.lightBg} rounded-2xl`}
                  >
                    <div className={`w-3 h-3 bg-${statusColors.accent} rounded-full flex-shrink-0`} />
                    <p className={`text-${statusColors.mediumText} font-medium`}>{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sustainability */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Sustainability Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.sustainability?.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl"
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0" />
                  <p className="text-green-800 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Location</h2>
            <p className="text-slate-700 leading-relaxed text-base">{project.address}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
