"use client"

import { useState } from "react"
import DynamicFrameLayout from "./dynamic-frame-portfolio"
import { ChevronRight } from "lucide-react"
import TransitionLink from "@/components/shared/transition-link"
import { Button } from "@/components/ui/button"

const DynamicFrameWrapper = () => {
  const [headerSize] = useState(1.2)
  return (
    <section
      className={`min-h-screen flex items-center justify-center p-16 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)]" />

      <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-12 relative z-10">
        {/* Left Content */}
        <div className="w-full md:w-[520px] flex-shrink-0 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-16">
            <h1
              className={`text-slate-800 text-4xl md:text-6xl font-light tracking-tighter leading-[120%] text-balance`}
              style={{ fontSize: `${5 * headerSize}rem` }}
            >
              Sudut
              <br />
              <span className="text-emerald-600">Profile</span>
              <br />
              Development?
            </h1>
            <div className={`flex flex-col gap-12 text-base font-normal w-full text-slate-600`}>
              <div className="space-y-6">
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
                  className="group hover:bg-emerald-50 text-base font-medium p-3 px-6 rounded-xl border border-transparent hover:border-emerald-200 transition-all duration-300 inline-flex items-center gap-2 text-slate-700 hover:text-emerald-700 shadow-sm hover:shadow-md"
                >
                  See more projects
                  <ChevronRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
                </Button>
              </TransitionLink>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:flex-grow h-[60vh] md:h-[80vh] backdrop-blur-sm bg-white/20 rounded-2xl border border-white/30 shadow-xl overflow-hidden">
          <DynamicFrameLayout />
        </div>
      </div>
    </section>
  )
}

export default DynamicFrameWrapper
