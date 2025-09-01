"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SplashScreen from "@/components/shared/splash-screen";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [splash, setSplash] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sudutProfileSplashTime = localStorage.getItem(
      "sudutProfileSplashTime"
    );
    const currentTime = Date.now();
    const twoMinutes = 2 * 60 * 1000;

    console.log("Splash time from storage:", sudutProfileSplashTime);

    if (
      sudutProfileSplashTime &&
      currentTime - parseInt(sudutProfileSplashTime) < twoMinutes
    ) {
      setLoading(false);
      requestAnimationFrame(() => {
        console.log("Redirecting to /h ...");
        router.push("/h");
      });
    } else {
      console.log("Showing splash screen");
      setLoading(true);
      setSplash(true);
    }
  }, [router]);

  const finishLoading = () => {
    const now = Date.now().toString();
    localStorage.setItem("sudutProfileSplashTime", now);
    console.log("Saved splash time:", now);
    setLoading(false);
    setSplash(false);

    setTimeout(() => {
      console.log("Redirecting to /h after saving storage");
      router.push("/h");
    }, 50);
  };

  return (
    <div>
      {loading && splash && <SplashScreen finishLoading={finishLoading} />}
    </div>
  );
}
