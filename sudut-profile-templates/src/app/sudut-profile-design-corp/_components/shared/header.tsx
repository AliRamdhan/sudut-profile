import { Button } from "@/components/ui/button";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-semibold">DesignCorp</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Work
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Insights
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Contact
          </a>
        </nav>
        <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6">
          Get Started
        </Button>
      </header>
    </div>
  );
};

export default Header;
