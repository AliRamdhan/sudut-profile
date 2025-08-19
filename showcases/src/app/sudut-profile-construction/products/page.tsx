import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { productsData } from "../lib/data";

const Page = () => {
  return (
    <div className="bg-gray-50">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Construction Products
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-12">
            Explore our extensive range of high-quality construction materials
            and equipment, carefully curated to empower your projects&apos;
            success.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {productsData.map((product) => (
              <div
                key={product.label}
                className="bg-background h-full lg:h-[48vh] rounded-md shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.label}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
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
                    <p className="text-gray-700 text-sm mb-2">
                      {product.price}
                    </p>
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
        </div>
      </section>
    </div>
  );
};

export default Page;
