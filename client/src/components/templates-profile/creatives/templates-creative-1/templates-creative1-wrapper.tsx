"use client";

import { useState, useEffect, useRef } from "react";
import Header from "./shared/templates-creative1-header";
import Hero from "./templates-creative1-hero";
import Showcase from "./templates-creative1-showcase";
import Features from "./templates-creative1-features";
import Cta from "./templates-creative1-cta";

const TemplateCreative1Wrapper = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringDesignElement, setIsHoveringDesignElement] = useState(false);
  const scrollRef = useRef<NodeJS.Timeout | null>(null);
  const mouseRef = useRef<NodeJS.Timeout | null>(null);

  // Check system preference on initial load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Handle scroll for morphing animation with debounce
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        clearTimeout(scrollRef.current);
      }

      scrollRef.current = setTimeout(() => {
        setScrollY(window.scrollY);
      }, 10); // Small debounce for smoother performance
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (scrollRef.current) clearTimeout(scrollRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Track mouse position for magnetic effects with debounce
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseRef.current) {
        clearTimeout(mouseRef.current);
      }

      mouseRef.current = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }, 10); // Small debounce for smoother performance
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      if (mouseRef.current) clearTimeout(mouseRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Calculate morphing progress based on scroll - simplified
  const getShapeProgress = () => {
    if (typeof window === "undefined")
      return { borderRadius: "50%", rotation: "0deg" };

    const windowHeight = window.innerHeight;
    const totalScrollHeight =
      document.documentElement.scrollHeight - windowHeight;

    // Avoid division by zero
    if (totalScrollHeight <= 0)
      return { borderRadius: "50%", rotation: "0deg" };

    // First transition: circle to square (0% to 40% of scroll)
    const firstTransition = Math.min(scrollY / (totalScrollHeight * 0.4), 1);

    // Second transition: square back to circle (60% to 100% of scroll)
    const secondTransitionStart = totalScrollHeight * 0.6;
    const secondTransition = Math.max(
      0,
      Math.min((scrollY - secondTransitionStart) / (totalScrollHeight * 0.4), 1)
    );

    // Calculate border radius
    let borderRadius = "50%";
    if (secondTransition > 0) {
      // Morphing back to circle
      borderRadius = `${secondTransition * 50}%`;
    } else {
      // Morphing to square
      borderRadius = `${(1 - firstTransition) * 50}%`;
    }

    // Calculate rotation - simplified
    const rotation = `${firstTransition * 20 - secondTransition * 20}deg`;

    return { borderRadius, rotation };
  };

  const { borderRadius, rotation } = getShapeProgress();

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 text-gray-900 dark:text-white overflow-hidden relative transition-colors duration-500 ${
        isHoveringDesignElement ? "cursor-crosshair" : "cursor-default"
      }`}
    >
      {/* Custom CSS for enhanced UX - simplified */}
      <style jsx global>{`
        ::selection {
          background: ${isDarkMode
            ? "rgba(168, 85, 247, 0.3)"
            : "rgba(147, 51, 234, 0.2)"};
          color: ${isDarkMode ? "#ffffff" : "#1f2937"};
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: ${isDarkMode
            ? "rgba(15, 23, 42, 0.1)"
            : "rgba(243, 244, 246, 0.5)"};
        }
        ::-webkit-scrollbar-thumb {
          background: ${isDarkMode
            ? "rgba(168, 85, 247, 0.3)"
            : "rgba(147, 51, 234, 0.3)"};
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${isDarkMode
            ? "rgba(168, 85, 247, 0.5)"
            : "rgba(147, 51, 234, 0.5)"};
        }

        /* Breathing animation - simplified */
        @keyframes subtle-breathe {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.01);
          }
        }

        .subtle-breathe {
          animation: subtle-breathe 6s ease-in-out infinite;
          will-change: transform;
        }

        /* Hardware acceleration for performance */
        .hw-accelerate {
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>

      {/* Artistic Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.05),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),rgba(0,0,0,0))]" />
      <div className="fixed top-0 left-0 w-full h-full">
        <div className="absolute top-[10%] left-[5%] w-32 md:w-64 h-32 md:h-64 rounded-full bg-gradient-to-r from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl subtle-breathe" />
        <div
          className="absolute top-[40%] right-[10%] w-40 md:w-80 h-40 md:h-80 rounded-full bg-gradient-to-r from-pink-500/5 to-orange-500/5 dark:from-pink-500/10 dark:to-orange-500/10 blur-3xl subtle-breathe"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-[15%] left-[15%] w-36 md:w-72 h-36 md:h-72 rounded-full bg-gradient-to-r from-green-500/5 to-cyan-500/5 dark:from-green-500/10 dark:to-cyan-500/10 blur-3xl subtle-breathe"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Header Section */}
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        {/* Creative Hero Section */}
        <Hero borderRadius={borderRadius} rotation={rotation} />

        {/* Creative Showcase */}
        <Showcase setIsHoveringDesignElement={setIsHoveringDesignElement} />

        {/* Features Section - Artistic Approach */}
        <Features />

        {/* Creative Call to Action */}
        <Cta />
      </main>
    </div>
  );
};

export default TemplateCreative1Wrapper;
