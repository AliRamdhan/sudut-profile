"use client";

import { Funnel, ShoppingBag, SlidersVertical } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TopBarProps {
  cartItemCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
}

const categories = [
  "All",
  "Belanja",
  "Pengiriman",
  "Antar Pesanan",
  "Jasa Harian",
  "Custom Request",
];

const sortOptions = ["Terbaru", "Terlama", "Harga Terendah", "Harga Tertinggi"];

export function TopBar({ cartItemCount, onCartClick, onSearch }: TopBarProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-white w-full shadow-sm dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center justify-between px-3 h-12">
        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 shrink-0">
          Layanan
        </h2>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={onCartClick}
            className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md relative text-zinc-700 dark:text-zinc-300"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartItemCount > 0 && (
              <motion.span
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-zinc-900 dark:bg-white 
                                    text-white dark:text-zinc-900 text-xs font-medium w-4 h-4 
                                    flex items-center justify-center rounded-full"
              >
                {cartItemCount}
              </motion.span>
            )}
          </button>
        </div>
      </div>
      <div className="relative w-full my-4 px-3 flex justify-center items-center gap-x-2.5">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Mau suruh apa hari ini..."
          className="w-full bg-gray-100 rounded-md text-sm px-3 py-1.5 
                                text-gray-800 
                                focus:outline-none focus:ring-1 focus:ring-gray-300 
                                transition-all duration-200"
          onChange={(e) => onSearch(e.target.value)}
        />
        {/* Category Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              {selectedCategory} <Funnel className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {categories.map((category) => (
              <DropdownMenuItem
                key={category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Sort Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {selectedSort} <SlidersVertical className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {sortOptions.map((sort) => (
              <DropdownMenuItem
                key={sort}
                onClick={() => setSelectedSort(sort)}
              >
                {sort}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
