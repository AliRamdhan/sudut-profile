import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="w-full py-12 md:py-24 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-x-8">
          <div>
            <h2 className="max-w-xl text-3xl md:text-5xl text-left font-bold text-gray-900 mb-4">
              Why Choose Struktura Construction
            </h2>
            <p className="max-w-3xl text-lg mx-auto text-left text-gray-700 mb-16">
              At Struktura Construction, our commitment to excellence,
              unparalleled expertise, and unwavering dedication set us apart.
              Here&apos;s why you should choose us:
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:gap-8">
            <div className="space-y-4 lg:space-y-8">
              <Card className="p-6 text-left  border-2 transition-all duration-300 ease-in-out hover:border-black/20 hover:scale-105">
                <CardContent className="p-0 space-y-4">
                  <CheckCircle className="w-8 h-8 text-gray-900" />
                  <h3 className="text-sm lg:text-xl font-semibold text-gray-900">
                    Proven Track Record
                  </h3>
                  <p className="text-gray-700">
                    We have a decade of successful projects.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 text-left order-2 transition-all duration-300 ease-in-out hover:border-black/20 hover:scale-105">
                <CardContent className="p-0 space-y-4">
                  <CheckCircle className="w-8 h-8 text-gray-900" />
                  <h3 className="text-sm lg:text-xl font-semibold text-gray-900">
                    Quality Assurance
                  </h3>
                  <p className="text-gray-700">
                    Meticulous attention to detail and craftsmanship.
                  </p>
                </CardContent>
              </Card>
            </div>
            <Card className="flex flex-col justify-center items-center p-6 text-left border-2 transition-all duration-300 ease-in-out hover:border-black/20 hover:scale-105">
              <CardContent className="p-0 space-y-4">
                <CheckCircle className="w-8 h-8 text-gray-900" />
                <h3 className="text-sm lg:text-xl font-semibold text-gray-900">
                  Client-Centric Approach
                </h3>
                <p className="text-gray-700">
                  Effective, transparent, and collaborative.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
