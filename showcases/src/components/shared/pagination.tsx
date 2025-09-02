import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const Pagination = () => {
  return (
    <ul className="flex justify-center gap-1 text-gray-900">
      <li>
        <a
          href="#"
          className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-4 h-4"/>
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
        >
          1
        </a>
      </li>

      <li className="block size-8 rounded border border-gray-600 bg-gray-600 text-center text-sm/8 font-medium text-white">
        2
      </li>

      <li>
        <a
          href="#"
          className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
        >
          3
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
        >
          4
        </a>
      </li>

      <li>
        <a
          href="#"
          className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
          aria-label="Next page"
        >
          <ChevronRight className="w-4 h-4"/>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
