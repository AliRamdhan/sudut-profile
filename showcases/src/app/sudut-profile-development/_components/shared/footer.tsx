import TransitionLink from "@/components/shared/transition-link"
import { MapPin, Phone, Mail, Clock, BarChart3 } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-600 rounded-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white tracking-tight">SUDUT PROFILE</span>
              <div className="text-sm text-slate-400 font-medium">Development</div>
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed">
            For more than 30 years, Sudut Profile has been a reliable partner in property development and strategic
            investments across Indonesia.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <TransitionLink
                href="/sudut-profile-development"
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
              >
                Home
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                href="/sudut-profile-development/projects"
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
              >
                Projects
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                href="/sudut-profile-development/services"
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
              >
                Services
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                href="/sudut-profile-development/news"
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
              >
                News
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                href="/sudut-profile-development/about-us"
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
              >
                About Us
              </TransitionLink>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white">Contact Info</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 flex-shrink-0 mt-1 text-emerald-400" />
              <span className="text-slate-300">
                Sudut Profile Development
                <br />
                Jl. Pedaringan No. 123
                <br />
                Yogyakarta, Indonesia
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 flex-shrink-0 text-emerald-400" />
              <span className="text-slate-300">+62 812-3456-7890</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 flex-shrink-0 text-emerald-400" />
              <span className="text-slate-300">support@development.com</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white">Business Hours</h3>
          <p className="text-slate-300 leading-relaxed">
            We work 6 days a week to serve our clients better. Contact us for investment consultations.
          </p>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Clock className="h-4 w-4 text-emerald-400" />
              <span className="text-slate-300 text-sm">Monday - Friday: 9:00 - 18:00</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-4 w-4 text-emerald-400" />
              <span className="text-slate-300 text-sm">Saturday: 9:00 - 15:00</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-4 w-4 text-emerald-400" />
              <span className="text-slate-300 text-sm">Sunday: Closed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <span className="text-slate-400 text-sm">© 2025 Sudut Profile Development. All rights reserved.</span>
          <div className="flex space-x-6 text-sm">
            <TransitionLink href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
              Privacy Policy
            </TransitionLink>
            <TransitionLink href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
              Terms of Service
            </TransitionLink>
            <TransitionLink href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
              Cookie Policy
            </TransitionLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
