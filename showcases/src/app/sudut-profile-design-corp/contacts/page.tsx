"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Page = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");

  const services = [
    "Mobile App",
    "Website Design",
    "Branding",
    "Web Development",
    "Illustration",
    "Logo Design",
    "Graphic Design",
  ];

  const budgetRanges = [
    "$1k - $5k",
    "$5k - $10k",
    "$10k - $20k",
    "$20k - $50k",
    ">$50k",
  ];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div>
      {/* Main Content */}
      <section className="px-6 py-20 max-w-2xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="max-w-lg text-6xl md:text-8xl font-bold tracking-tight mb-8">
            Tell me your idea.
          </h1>
          <p className="text-lg text-gray-600">
            Have a nice works? Reach out and let&apos;s chat.
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-8">
          {/* Name Field */}
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </Label>
            <Input
              placeholder="Hello..."
              className="w-full border-gray-200 focus:border-gray-400 focus:ring-0"
            />
          </div>

          {/* Email Field */}
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </Label>
            <Input
              type="email"
              placeholder="Where can I reply?"
              className="w-full border-gray-200 focus:border-gray-400 focus:ring-0"
            />
          </div>

          {/* Company Field */}
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </Label>
            <Input
              placeholder="Your company or website?"
              className="w-full border-gray-200 focus:border-gray-400 focus:ring-0"
            />
          </div>

          {/* Services Selection */}
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-4">
              What&apos;s in your mind?
            </Label>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                    selectedServices.includes(service)
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Selection */}
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-4">
              How much your budget range?
            </Label>
            <div className="flex flex-wrap gap-3">
              {budgetRanges.map((budget) => (
                <button
                  key={budget}
                  type="button"
                  onClick={() => setSelectedBudget(budget)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                    selectedBudget === budget
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>

          {/* Message Field */}
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </Label>
            <Textarea
              placeholder="I want to build some..."
              rows={6}
              className="w-full border-gray-200 focus:border-gray-400 focus:ring-0 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <Button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white px-12 py-3 rounded-full text-base font-medium"
            >
              Submit
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Page;
