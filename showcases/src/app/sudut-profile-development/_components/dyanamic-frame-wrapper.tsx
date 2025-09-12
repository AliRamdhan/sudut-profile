"use client"

import { useState } from "react"
import DynamicFrameLayout from "./dynamic-frame-portfolio"
import TransitionLink from "@/components/shared/transition-link"
import { Button } from "@/components/ui/button"

const DynamicFrameWrapper = () => {
  const [headerSize] = useState(1.2)
  return (
    <section
      className={`min-h-screen flex items-center justify-center p-4 md:p-16 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)]" />

      <div className="w-full h-full flex flex-col lg:flex-row items-start gap-6 md:gap-8 lg:gap-12 relative z-10">
        {/* Left Content */}
        <div className="w-full lg:w-[520px] flex-shrink-0 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-8 md:gap-16">
            <h1
              className={`text-slate-800 text-3xl md:text-4xl lg:text-6xl font-light tracking-tighter leading-[120%] text-balance`}
              style={{ fontSize: `${3 * headerSize}rem` }}
            >
              Sudut
              <br />
              <span className="text-emerald-600">Profile</span>
              <br />
              Development?
            </h1>
            <div className={`flex flex-col gap-8 md:gap-12 text-sm md:text-base font-normal w-full text-slate-600`}>
              <div className="space-y-4 md:space-y-6">
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-full" />
                <p className="leading-relaxed">
                  Sudut Profile is dedicated to shaping Indonesia's future through property development and strategic
                  investments. From luxury residences and lifestyle destinations to large-scale commercial projects, our
                  portfolio showcases some of the most distinctive developments across the archipelago.
                </p>
                <p className="leading-relaxed">
                  With a proven track record of delivering landmark projects, we combine award-winning design, prime
                  locations, and sustainable growth strategies to create high-value opportunities for our investors and
                  partners.
                </p>
                <p className="leading-relaxed font-medium text-slate-700">
                  Here are some of our favorite works so far.
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-full" />
              </div>
              <TransitionLink href={`sudut-profile-development/projects`}>
                <Button
                  variant={`ghost`}
                  className="group hover:bg-emerald-50 text-sm md:text-base font-medium p-3 px-4 md:px-6 rounded-xl border border-transparent hover:border-emerald-200 transition-all duration-300 inline-flex items-center gap-2 text-slate-700 hover:text-emerald-700 shadow-sm hover:shadow-md"
                >
                  See more projects
                  <span className="transition-all duration-300 group-hover:translate-x-1">→</span>
                </Button>
              </TransitionLink>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:flex-grow h-[50vh] md:h-[60vh] lg:h-[80vh] backdrop-blur-sm bg-white/20 rounded-2xl border border-white/30 shadow-xl overflow-hidden">
          <DynamicFrameLayout />
        </div>
      </div>
    </section>
  )
}

export default DynamicFrameWrapper
