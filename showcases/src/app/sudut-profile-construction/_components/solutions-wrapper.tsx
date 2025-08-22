import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TransitionLink from "@/components/shared/transition-link";
import { Button } from "@/components/ui/button";

export const solutions = [
  {
    label: "Design and Planning Services",
    slug: "design-planning",
    image: "/images/construction/construction-solutions-1.jpg",
    description:
      "Our expert design and planning services ensure meticulous execution.",
  },
  {
    label: "Construction and Building",
    slug: "construction-building",
    image: "/images/construction/construction-solutions-2.jpg",
    description:
      "From groundbreaking to the finishing touches, we bring your vision to life with precision.",
  },
  {
    label: "Renovation and Remodeling",
    slug: "renovation-remodeling",
    image: "/images/construction/construction-solutions-3.jpg",
    description:
      "Enhance existing spaces or rejuvenate structures with tailored solutions.",
  },
];

export function Solutions() {
  return (
    <section
      id="solutions"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Tailored Construction Solutions
        </h2>
        <p className="max-w-3xl text-lg mx-auto text-gray-700 mb-16">
          At Sudut Profile Construction, we offer a comprehensive suite of
          construction services, meticulously tailored to match your unique
          project requirements, ensuring success at every step.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution) => (
            <div
              key={solution.slug}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={solution.image}
                alt={solution.label}
                width={600}
                height={400}
                className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {solution.label}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {solution.description}
                </p>
                <Link
                  href={`sudut-profile-construction/services/${solution.slug}`}
                  className="flex items-center text-white hover:text-gray-300 text-sm font-medium"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <TransitionLink href={"sudut-profile-construction/services"}>
          <Button
            variant="outline"
            className="border-gray-400 text-gray-700 hover:bg-gray-100 bg-transparent"
          >
            View all solutions
          </Button>
        </TransitionLink>
      </div>
    </section>
  );
}
