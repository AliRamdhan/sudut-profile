import Image from "next/image";
import { Button } from "@/components/ui/button";

export const portfolios = [
  {
    label: "Kardian Office Tower Construction",
    image: "/images/construction/construction-portfolio-1.jpg",
    description:
      "Construction of a 40-story, state-of-the-art office tower in the heart of the downtown financial district. The project includes modern office spaces, retail outlets, and advanced energy-efficient systems.",
    location: "Tegal, Indonesia",
    duration: "36 months",
    price: "Rp. 180M",
  },
  {
    label: "Bridge Reconstruction Interstate Highway",
    image: "/images/construction/construction-portfolio-2.jpg",
    description:
      "Reconstruction and widening of a vital interstate highway bridge to enhance traffic flow and safety. The project includes the demolition of the existing structure and the installation of a new, wider bridge.",
    location: "Bekasi, Indonesia",
    duration: "36 months",
    price: "Rp. 180M",
  },
  {
    label: "Residential Housing Development",
    image: "/images/construction/construction-portfolio-3.jpg",
    description:
      "Development of a suburban residential community consisting of 150 single-family homes and associated infrastructure, including roads, utilities, and recreational areas.",
    location: "Jakarta, Indonesia",
    duration: "36 months",
    price: "Rp. 180M",
  },
];

export function Portfolios() {
  return (
    <section id="portfolios" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Remarkable Project Portfolio
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-12">
          Explore our extensive portfolio showcasing the breadth of our
          expertise, from iconic structures to sustainable solutions, all
          meticulously crafted to perfection.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.label}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <Image
                src={portfolio.image}
                alt={portfolio.label}
                width={400}
                height={250}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {portfolio.label}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {portfolio.description}
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-6">
                  <div>Location</div>
                  <div className="font-medium text-gray-900">
                    {portfolio.location}
                  </div>
                  <div>Duration</div>
                  <div className="font-medium text-gray-900">
                    {portfolio.duration}
                  </div>
                  <div>Total Budget</div>
                  <div className="font-medium text-gray-900">
                    {portfolio.price}
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-gray-400 text-gray-700 hover:bg-gray-100 bg-transparent"
                >
                  Read more
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
