"use client"

import { useState } from "react"
import TransitionLink from "@/components/shared/transition-link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Menu, X, MapPin, BarChart3 } from "lucide-react"
import { usePathname } from "next/navigation"

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const currentPath = usePathname()

  const getNavLinkClass = (href: string) => {
    return currentPath === href
      ? "font-medium relative group text-slate-900"
      : "font-medium relative group hover:text-slate-900 text-slate-600"
  }

  const getSpanClass = (href: string) => {
    return `absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full ${
      currentPath === href ? "w-full" : ""
    }`
  }

  return (
    <header className="sticky top-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      {/* Top Bar (Desktop) */}
      <div className="hidden sm:block py-2 sm:py-3 text-xs sm:text-sm bg-slate-900 text-white">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          {/* Left Side: Location */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400" />
            <span>Jakarta, Indonesia</span>
          </div>

          {/* Right Side: Contact */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 sm:space-x-2 hover:text-blue-400 transition-colors duration-300"
            >
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400" />
              <span>+62 812-3456-7890</span>
            </a>
            <a
              href="mailto:support@development.com"
              className="flex items-center space-x-1 sm:space-x-2 hover:text-blue-400 transition-colors duration-300"
            >
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400" />
              <span>support@development.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Top Bar (Mobile) */}
      <div className="sm:hidden py-2 text-xs bg-slate-900 text-white">
        <div className="container mx-auto flex items-center justify-center gap-4 px-4">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-blue-400 transition-colors duration-300"
          >
            <Phone className="h-3 w-3 text-slate-400" />
            <span>+62 812-3456-7890</span>
          </a>
          <a
            href="mailto:support@development.com"
            className="flex items-center space-x-1.5 hover:text-blue-400 transition-colors duration-300"
          >
            <Mail className="h-3 w-3 text-slate-400" />
            <span>support@development.com</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-3 sm:py-4 mx-auto flex items-center justify-between px-4 md:px-6">
        <TransitionLink
          href="/sudut-profile-development"
          className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity"
        >
          <div className="p-1.5 sm:p-2 bg-slate-900 rounded-lg">
            <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <div>
            <span className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">SUDUT PROFILE</span>
            <div className="text-xs sm:text-sm text-slate-500 font-medium">Development</div>
          </div>
        </TransitionLink>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
            {/* Nav links */}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="h-9 w-9 sm:h-10 sm:w-10"
          >
            {mobileOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - UPDATED */}
      {mobileOpen && (
        <div 
          className="absolute left-0 top-full w-full bg-white/95 backdrop-blur-sm shadow-lg md:hidden border-t border-slate-200 animate-in slide-in-from-top-2 duration-300"
        >
          <div className="px-4 pb-4 pt-2 space-y-1">
            <TransitionLink
              href="/sudut-profile-development"
              className="block py-3 px-2 font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </TransitionLink>
            <TransitionLink
              href="/sudut-profile-development/projects"
              className="block py-3 px-2 font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Projects
            </TransitionLink>
            <TransitionLink
              href="/sudut-profile-development/services"
              className="block py-3 px-2 font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </TransitionLink>
            <TransitionLink
              href="/sudut-profile-development/news"
              className="block py-3 px-2 font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              News
            </TransitionLink>
            <TransitionLink
              href="/sudut-profile-development/about-us"
              className="block py-3 px-2 font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              About
            </TransitionLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header