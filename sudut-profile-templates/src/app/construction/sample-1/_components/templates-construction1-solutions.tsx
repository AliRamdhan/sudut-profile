import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Solutions() {
  return (
    <section id="solutions" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tailored Construction Solutions</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-12">
          At Struktura, we offer a comprehensive suite of construction services, meticulously tailored to match your
          unique project requirements, ensuring success at every step.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/construction/construction-solutions-1.jpg"
              alt="Design and Planning Services"
              width={600}
              height={400}
              className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Design and Planning Services</h3>
              <p className="text-gray-300 text-sm mb-4">
                Our expert design and planning services ensure meticulous execution
              </p>
              <Link href="#" className="flex items-center text-white hover:text-gray-300 text-sm font-medium">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/construction/construction-solutions-2.jpg"
              alt="Construction and Building"
              width={600}
              height={400}
              className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Construction and Building</h3>
              <p className="text-gray-300 text-sm mb-4">
                From groundbreaking to the finishing touches, we bring your vision to life with precision.
              </p>
              <Link href="#" className="flex items-center text-white hover:text-gray-300 text-sm font-medium">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/construction/construction-solutions-3.jpg"
              alt="Renovation and Remodeling"
              width={600}
              height={400}
              className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Renovation and Remodeling</h3>
              <p className="text-gray-300 text-sm mb-4">
                Enhance existing spaces or rejuvenate structures with tailored solutions
              </p>
              <Link href="#" className="flex items-center text-white hover:text-gray-300 text-sm font-medium">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
