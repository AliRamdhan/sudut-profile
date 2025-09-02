import React from "react";
import { productsData } from "../lib/data";
import ProductCard from "../_components/cards/product_card";

const Page = () => {
  return (
    <div className="bg-gray-50">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Trusted Construction Products
          </h2>
          <p className="max-w-3xl text-lg mx-auto text-gray-700 mb-16">
            Explore our extensive range of high-quality construction materials
            and equipment, carefully curated to empower your projects&apos;
            success.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {productsData.map((product) => (
              <ProductCard key={product.label} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
