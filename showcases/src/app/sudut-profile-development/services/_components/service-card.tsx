import Image from "next/image"
import TransitionLink from "@/components/shared/transition-link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  service: {
    slug: string
    title: string
    shortDescription: string
    image?: string
  }
  className?: string
}

const ServiceCard = ({ service, className = "" }: ServiceCardProps) => {
  return (
    <div className={`relative group overflow-hidden rounded-xl shadow-lg ${className}`}>
      <Image
        src={service.image || "/placeholder.svg"}
        alt={service.title}
        width={600}
        height={400}
        priority
        className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{service.shortDescription}</p>
        <div className="flex items-center text-white text-sm font-medium">
          Learn more
          <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </div>
      <TransitionLink
        href={`/sudut-profile-development/services/${service.slug}`}
        className="absolute inset-0 z-20">
        -
      </TransitionLink>
    </div>
  )
}

export default ServiceCard
