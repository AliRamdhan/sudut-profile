/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import type { Product } from "./data";

interface ProductGridProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
}

export function ProductGrid({ products, onProductSelect }: ProductGridProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
      {products.map((product) => (
        <motion.div
          key={product.id}
          layoutId={`product-${product.id}`}
          onClick={() => onProductSelect(product)}
          className="group cursor-pointer border shadow-md"
          whileHover={{ y: -1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="aspect-[4/5] bg-white dark:bg-zinc-900 rounded-md overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="mt-1.5 space-y-0.5">
            <h3 className="text-xs font-medium truncate">{product.title}</h3>
            <div className="flex justify-between items-center  p-2">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                ${product.price}
              </p>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                {product.category}
              </p>
            </div>
            <p className="text-left text-sm text-zinc-400 dark:text-zinc-500 line-clamp-2  px-2 mt-4">
              {product.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
