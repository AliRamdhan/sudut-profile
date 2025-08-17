import { ChevronDown } from "lucide-react";
import React from "react";
import ActivitiesCard from "./activities-card";

const ActivitiesWrapperRecent = () => {
  return (
    <div>
      <div className="mt-8 sm:flex sm:items-center sm:justify-end">
        <div className="block sm:hidden">
          <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            <span className="text-sm font-medium"> Filters & Sorting </span>

            <ChevronDown className="size-4 rtl:rotate-180" />
          </button>
        </div>

        <div className="hidden sm:block">
          <div aria-label="SortBy" className="sr-only">
            SortBy
          </div>

          <select
            id="SortBy"
            className="h-10 rounded-sm border-gray-300 text-sm"
          >
            <option>Sort By</option>
            <option value="Title, DESC">Title, DESC</option>
            <option value="Title, ASC">Title, ASC</option>
            <option value="Price, DESC">Price, DESC</option>
            <option value="Price, ASC">Price, ASC</option>
          </select>
        </div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <ActivitiesCard />
        <ActivitiesCard />
        <ActivitiesCard />
        <ActivitiesCard />
        <ActivitiesCard />
        <ActivitiesCard />
      </ul>
    </div>
  );
};

export default ActivitiesWrapperRecent;
