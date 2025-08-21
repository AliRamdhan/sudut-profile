import Image from "next/image";
import { Button } from "@/components/ui/button";
import TransitionLink from "@/components/shared/transition-link";

const products = [
  {
    label: "Bahan Konstruksi Dasar",
    price: "Rp.700 - Rp.350.000",
    image: "/images/construction/construction-product-base-material.jpg",
    description:
      "Material utama untuk pembangunan seperti semen, pasir, batu bata, dan batu split yang menjadi fondasi konstruksi.",
  },
  {
    label: "Material Struktural",
    price: "Rp.15.000 - Rp.150.000",
    image: "/images/construction/construction-product-structural.jpg",
    description:
      "Bahan pendukung struktur bangunan seperti besi beton, baja ringan, kayu, dan plywood untuk rangka dan kekuatan konstruksi.",
  },
  {
    label: "Material Dinding & Plafon",
    price: "Rp.45.000 - Rp.180.000",
    image: "/images/construction/construction-product-support.jpg",
    description:
      "Produk pelapis dan pembentuk ruangan seperti papan gypsum, GRC board, dan material plafon lainnya untuk finishing interior.",
  },
  {
    label: "Peralatan Pertukangan & Konstruksi",
    price: "Rp.150.000 - Rp.1.150.000",
    image: "/images/construction/construction-product-tools.jpg",
    description:
      "Peralatan kerja seperti bor listrik, palu, gergaji, dan alat ukur yang digunakan dalam proses pembangunan dan renovasi.",
  },
];

export function Products() {
  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Elevate Your Projects with Our Products
        </h2>
        <p className="max-w-3xl text-lg mx-auto text-gray-700 mb-16">
          Enhance your construction endeavors with our extensive range of
          high-quality construction materials and equipment, carefully curated
          to empower your projects&apos; success.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.label}
              className="bg-background h-full lg:h-[48vh] rounded-md shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.label}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300">
                  <p className="text-white text-center px-4">
                    {product.description}
                  </p>
                </div>
              </div>
              <div className="p-6 h-48 flex flex-col justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {product.label}
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">{product.price}</p>
                </div>
                <div className="flex space-x-2 w-full">
                  <Button
                    variant="outline"
                    className="flex-1 border-gray-400 text-gray-700 hover:bg-gray-100 bg-transparent"
                  >
                    Consult & Order Here
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <TransitionLink href={"sudut-profile-construction/products"}>
          <Button
            variant="outline"
            className="border-gray-400 text-gray-700 hover:bg-gray-100 bg-transparent"
          >
            View all product
          </Button>
        </TransitionLink>
      </div>
    </section>
  );
}
