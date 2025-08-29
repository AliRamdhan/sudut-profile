/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CourseCurriculumProps {
  curriculums: any[];
}

export function CourseCurriculum({ curriculums }: CourseCurriculumProps) {
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="space-y-4">
        {curriculums.map((section, index) => (
          <div
            key={index}
            className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0"
          >
            <button
              onClick={() => toggleSection(index)}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="font-medium text-gray-900 pr-4">
                {section.title}
              </h3>
              {expandedSections.includes(index) ? (
                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
              )}
            </button>

            {expandedSections.includes(index) && (
              <div className="mt-3 space-y-2">
                {section.items.map((item: any, itemIndex: any) => (
                  <div key={itemIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
