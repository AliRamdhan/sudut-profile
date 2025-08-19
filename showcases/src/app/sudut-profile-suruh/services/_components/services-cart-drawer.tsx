/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { CartItem } from "./data";
import Image from "next/image";
import CartForm from "./service-cart-form";

interface CartDrawerProps {
  cart: CartItem[];
  onClose: () => void;
  onRemoveFromCart: (productId: string) => void;
}

export function CartDrawer({
  cart,
  onClose,
  onRemoveFromCart,
}: CartDrawerProps) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black"
        onClick={onClose}
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        className="fixed right-0 top-32 min-h-[90vh] max-w-4xl bg-white dark:bg-zinc-900 shadow-xl overflow-y-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
              <h2 className="text-lg font-medium">Shopping Cart</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="text-base font-medium truncate">
                        {item.title}
                      </h3>
                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full ml-2"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                      Qty: {item.quantity}
                    </p>
                    <p className="text-base font-medium mt-1">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col h-full">
            <CartForm total={total} />
          </div>
        </div>
      </motion.div>
    </>
  );
}
