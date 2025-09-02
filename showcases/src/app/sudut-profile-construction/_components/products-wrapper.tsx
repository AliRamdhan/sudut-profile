import { Button } from "@/components/ui/button";
import TransitionLink from "@/components/shared/transition-link";
import { productsData } from "../lib/data";
import ProductCard from "./cards/product_card";

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
          {productsData.slice(0, 4).map((product) => (
            <ProductCard key={product.label} product={product} />
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
