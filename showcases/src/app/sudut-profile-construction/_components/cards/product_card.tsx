import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProductCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product: any;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      key={product.label}
      className="bg-background h-full rounded-md shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.label}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300">
          <p className="text-white text-center px-4">{product.description}</p>
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
  );
};

export default ProductCard;
