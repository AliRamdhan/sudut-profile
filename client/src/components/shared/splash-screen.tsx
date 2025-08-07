"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen = ({ finishLoading }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [matrixText, setMatrixText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%";

    const generateRandomText = () =>
      Array.from({ length: 8 }, () =>
        characters.charAt(Math.floor(Math.random() * characters.length))
      ).join("");

    const matrixInterval = setInterval(() => {
      setMatrixText(generateRandomText());
    }, 50);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(progressInterval);
          clearInterval(matrixInterval);
          setTimeout(() => setIsComplete(true), 500); // Delay before hiding splash screen
          return 100;
        }
        return next;
      });
    }, 30);

    return () => {
      clearInterval(progressInterval);
      clearInterval(matrixInterval);
      router.push("/h");
    };
  }, [finishLoading, router]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-500",
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      {/* Matrix-style loading text */}
      <div className="font-mono text-white mb-4 h-6">{`LOADING_SYSTEM: ${matrixText}`}</div>

      {/* Progress bar container */}
      <div className="w-64 h-1 bg-dark-400 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress percentage */}
      <div className="mt-2 font-mono text-sm text-white">{`${progress}%`}</div>
    </div>
  );
};

export default SplashScreen;
