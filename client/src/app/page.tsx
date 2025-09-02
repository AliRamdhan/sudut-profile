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

    if (
      sudutProfileSplashTime &&
      currentTime - parseInt(sudutProfileSplashTime) < twoMinutes
    ) {
      setLoading(false);
      requestAnimationFrame(() => {
        router.push("/h");
      });
    } else {
      setLoading(true);
      setSplash(true);
    }
  }, [router]);

  const finishLoading = () => {
    const now = Date.now().toString();
    localStorage.setItem("sudutProfileSplashTime", now);

    setLoading(false);
    setSplash(false);

    requestAnimationFrame(() => {
      router.push("/h");
    });
  };

  return (
    <div>
      {loading && splash && <SplashScreen finishLoading={finishLoading} />}
    </div>
  );
}
