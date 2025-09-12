import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

const Cta = () => {
  return (
    <div className="relative h-[80vh] text-center">
      <div className="absolute inset-0 bg-slate-900/60"></div>
      <Image
        src="/images/sudut-profile-development/cta.jpg"
        alt="Call to Action Cover"
        className="w-full h-full object-cover object-center"
        width={1024}
        height={1024}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-emerald-900/70 to-slate-800/80 flex flex-col items-center justify-center px-4 md:px-8">
        <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white text-balance leading-tight">
            Ready to Start Your Next <span className="text-emerald-400">Investment</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-100 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of satisfied investors who have transformed their portfolios with our expertise. Let&apos;s
            discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mt-8 md:mt-12 w-full max-w-md sm:max-w-none">
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
          >
            Schedule a Consultation
            <span className="ml-2 md:ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent group w-full sm:w-auto"
          >
            <Play className="mr-2 md:mr-3"></Play>
            View Our Portfolio
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-6 md:gap-12 pt-12 md:pt-16 opacity-90 w-full max-w-4xl">
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">500+</div>
            <div className="text-sm md:text-lg text-slate-200 font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">98%</div>
            <div className="text-sm md:text-lg text-slate-200 font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">30+</div>
            <div className="text-sm md:text-lg text-slate-200 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">$2B+</div>
            <div className="text-sm md:text-lg text-slate-200 font-medium">Value Created</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta
